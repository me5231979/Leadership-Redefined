"""Caption the Chancellor videos with ElevenLabs speech to text.

For each assets/video/<name>.mp4 without a <name>.vtt beside it, sends the video
to ElevenLabs Scribe, writes the word-timed transcript to
assets/video/<name>.transcript.json, and builds WebVTT captions in
assets/video/<name>.vtt: at most two lines of 42 characters, at most 6 seconds
per caption, breaking at sentence ends where it can. Words in FIX are corrected
(names the recognizer may mishear). Delete a .vtt to caption that video again;
--rebuild remakes every .vtt from its saved transcript with no API call.
Runs in .github/workflows/build-captions.yml with the ELEVENLABS_API_KEY secret
(the key needs the Speech to Text permission).
"""
import json, os, re, sys, uuid, urllib.request, urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VID = os.path.join(ROOT, 'assets', 'video')
KEY = os.environ.get('ELEVENLABS_API_KEY', '')
FIX = [(r'\bDeer ?myer\b|\bDier ?meyer\b|\bDiermayer\b|\bDeermeyer\b', 'Diermeier'), (r'\bVanderbuilt\b', 'Vanderbilt')]
MAXC, MAXT = 42, 6.0


def transcribe(path):
    b = uuid.uuid4().hex
    parts = []
    for k, v in (('model_id', 'scribe_v1'), ('language_code', 'en'), ('tag_audio_events', 'false'), ('timestamps_granularity', 'word')):
        parts.append(('--%s\r\nContent-Disposition: form-data; name="%s"\r\n\r\n%s\r\n' % (b, k, v)).encode())
    parts.append(('--%s\r\nContent-Disposition: form-data; name="file"; filename="%s"\r\nContent-Type: video/mp4\r\n\r\n' % (b, os.path.basename(path))).encode())
    parts.append(open(path, 'rb').read())
    parts.append(('\r\n--%s--\r\n' % b).encode())
    req = urllib.request.Request('https://api.elevenlabs.io/v1/speech-to-text', data=b''.join(parts), method='POST',
                                 headers={'xi-api-key': KEY, 'Content-Type': 'multipart/form-data; boundary=' + b})
    try:
        with urllib.request.urlopen(req, timeout=600) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        sys.exit('ElevenLabs refused the request (%s): %s' % (e.code, e.read()[:400].decode('utf-8', 'replace')))


def fix(t):
    for a, b in FIX:
        t = re.sub(a, b, t, flags=re.I)
    return t


def ts(s):
    h, s = divmod(s, 3600)
    m, s = divmod(s, 60)
    return '%02d:%02d:%06.3f' % (h, m, s)


def lines(text):
    """Split a caption into at most two balanced lines."""
    if len(text) <= MAXC:
        return text
    words, best = text.split(' '), None
    for i in range(1, len(words)):
        a, b = ' '.join(words[:i]), ' '.join(words[i:])
        if len(a) <= MAXC and len(b) <= MAXC:
            d = abs(len(a) - len(b))
            if best is None or d < best[0]:
                best = (d, a + '\n' + b)
    if best:
        return best[1]
    # no split keeps both lines short: break at the space nearest the middle
    mid = len(text) // 2
    cut = min((i for i, ch in enumerate(text) if ch == ' '), key=lambda i: abs(i - mid), default=None)
    return text if cut is None else text[:cut] + '\n' + text[cut + 1:]


def vtt(words):
    words = [w for w in words if w.get('type', 'word') == 'word' and w.get('text', '').strip()]
    cues, cur = [], []

    def flush():
        if cur:
            cues.append((cur[0]['start'], cur[-1]['end'], fix(' '.join(w['text'].strip() for w in cur))))
            cur.clear()

    for w in words:
        if cur:
            text = ' '.join(x['text'].strip() for x in cur + [w])
            if len(text) > 2 * MAXC - 8 or w['end'] - cur[0]['start'] > MAXT:
                flush()
        cur.append(w)
        if re.search(r'[.!?]["”]?$', w['text'].strip()) and w['end'] - cur[0]['start'] > 1.2:
            flush()
    flush()
    out = ['WEBVTT', '']
    for i, (a, b, t) in enumerate(cues, 1):
        nxt = cues[i][0] if i < len(cues) else b + 1
        out += [str(i), '%s --> %s' % (ts(a), ts(max(a + 0.8, min(b + 0.3, nxt)))), lines(t), '']
    return '\n'.join(out)


if __name__ == '__main__':
    if '--rebuild' in sys.argv:
        # rebuild every .vtt from its saved transcript, without calling ElevenLabs
        for f in sorted(os.listdir(VID)):
            if f.endswith('.transcript.json'):
                base = os.path.join(VID, f[:-len('.transcript.json')])
                open(base + '.vtt', 'w').write(vtt(json.load(open(os.path.join(VID, f))).get('words', [])))
                print('rebuilt', os.path.basename(base) + '.vtt')
        sys.exit(0)
    if not KEY:
        sys.exit('ELEVENLABS_API_KEY is not set')
    made = 0
    for f in sorted(os.listdir(VID)):
        if not f.endswith('.mp4'):
            continue
        base = os.path.join(VID, f[:-4])
        if os.path.exists(base + '.vtt'):
            continue
        data = transcribe(os.path.join(VID, f))
        json.dump(data, open(base + '.transcript.json', 'w'), indent=1, ensure_ascii=False)
        open(base + '.vtt', 'w').write(vtt(data.get('words', [])))
        print('captioned', f, '-', fix(data.get('text', ''))[:120])
        made += 1
    print('%d video(s) captioned' % made)
