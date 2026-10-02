#!/usr/bin/env python3
"""Make placeholder narration clips until the ElevenLabs voice is recorded.

For every script in course-one/ and course-two/narration-scripts.js, writes
assets/audio/<course>/<key with / as ->.mp3: a soft two-note chime, then
silence lasting as long as the script takes to read aloud (about 150 words
a minute). File names, durations, and the Listen and Auto controls all
behave as they will with the real voice. Running scripts/build-tts.py (or
the Record narration workflow) replaces every placeholder with the real
recording under the same name. Needs node and ffmpeg."""
import json, os, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WPM = 150

def scripts(course):
    js = "const vm=require('vm'),fs=require('fs');const w={};vm.runInNewContext(fs.readFileSync(%r,'utf8'),{window:w});console.log(JSON.stringify(w.LR_NARR||{}))" % os.path.join(ROOT, course, 'narration-scripts.js')
    return json.loads(subprocess.run(['node', '-e', js], check=True, stdout=subprocess.PIPE, text=True).stdout)

def clip(seconds, dest):
    chime = ("sine=frequency=660:duration=0.28,volume=0.18,afade=t=out:st=0.12:d=0.16[a];"
             "sine=frequency=880:duration=0.40,volume=0.16,afade=t=out:st=0.15:d=0.25[b];"
             "anullsrc=r=22050:cl=mono,atrim=duration=%.2f[c];[a][b][c]concat=n=3:v=0:a=1" % max(seconds - 0.7, 1.0))
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-filter_complex', chime, '-ar', '22050', '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '32k', dest], check=True)

if __name__ == '__main__':
    total = 0
    for course in ['course-one', 'course-two']:
        out = os.path.join(ROOT, 'assets', 'audio', course); os.makedirs(out, exist_ok=True)
        narr = scripts(course)
        for k, text in narr.items():
            secs = max(len(text.split()) / WPM * 60, 3)
            clip(secs, os.path.join(out, k.replace('/', '-') + '.mp3')); total += secs
        for f in os.listdir(out):
            if f.endswith('.mp3') and f not in {k.replace('/', '-') + '.mp3' for k in narr}: os.remove(os.path.join(out, f))
        print('%s: %d placeholder clips' % (course, len(narr)))
    print('total narration: %.1f minutes' % (total / 60))
