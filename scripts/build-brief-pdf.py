#!/usr/bin/env python3
"""Build the fillable capstone brief PDF: brief/leadership-redefined-capstone-brief.pdf

Needs: pip install reportlab fonttools brotli
The brand fonts ship as woff2; they are converted to TTF in a temp folder for embedding.
Form fields use Helvetica so every PDF reader can fill them.
"""
import os, tempfile
from fontTools.ttLib import TTFont as FTFont
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import simpleSplit

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'brief', 'leadership-redefined-capstone-brief.pdf')

BLACK, GOLD, OAK, INK, MUTE, FILL = (HexColor(c) for c in
    ('#1C1C1C', '#CFAE70', '#946E24', '#1C1C1C', '#4A4A4A', '#FBF8F1'))

tmp = tempfile.mkdtemp()
FONTS = {'Caslon': 'libre-caslon-text-latin-400-normal', 'CaslonIt': 'libre-caslon-text-latin-400-italic',
         'Inter': 'inter-latin-400-normal', 'InterMd': 'inter-latin-500-normal', 'InterSb': 'inter-latin-600-normal',
         'Antonio': 'antonio-latin-700-normal'}
for name, base in FONTS.items():
    f = FTFont(os.path.join(ROOT, 'assets', 'fonts', base + '.woff2')); f.flavor = None
    p = os.path.join(tmp, base + '.ttf'); f.save(p)
    pdfmetrics.registerFont(TTFont(name, p))

W, H = letter
M = 54            # side margin
CW = W - 2 * M    # content width

SECTIONS = [
    (2, 'The challenge and why it matters', 'Who is affected, what happens today, and what it costs to wait.',
        'It starts with a real person and a real moment. Someone outside your office could explain it back.', 218),
    (3, 'Connection to Vanderbilt’s priorities', 'The part of the vision your idea serves. What it costs, and who pays after year one.',
        'It names the vision and your focus area, not just “strategy.”', 226),
    (4, 'Integrated solution', 'What changes for people, process, and technology, and who shares the credit.',
        'All three change together, and all six program topics show up.', 222),
    (5, 'Steps, owners, timeline', 'One line per step: what happens, who owns it, and by when.',
        'It starts with a small pilot, and every step has an owner and a date.', 222),
    (6, 'Success metrics', 'Two or three ways you will know it worked.',
        'Each has a starting number, a target, and a date, and measures results, not activity.', 218),
    (7, 'Sustainability plan', 'Who keeps it going after your pod, and how year two is paid for.',
        'One clear owner, and a plan that makes it normal work.', 230),
]

EXAMPLE = [
    ('1', 'Focus area', 'Exceptional Core Operations.'),
    ('2', 'The challenge', 'Departments pay contractors and consultants for short projects, like data analysis and web updates, that our own staff could do. The money leaves, and staff who want to grow go elsewhere.'),
    ('3', 'Connection', 'The vision asks us to operate with speed, agility and scale. Using skills we already have keeps fees inside Vanderbilt.'),
    ('4', 'Solution', 'People: managers share up to 10% of a staff member’s time for a gig. Process: before hiring outside help for a short project, post it as a gig for two weeks. Technology: gigs are posted and matched in the Talent Marketplace.'),
    ('5', 'Steps', 'Weeks 1 to 4, set the gig rules with Procurement (HR lead). Weeks 5 to 16, pilot in two divisions. Week 17, review results with sponsors.'),
    ('6', 'Metrics', 'Contractor and consulting spend in the pilot divisions drops 15% from last year by June. Staff fill 25 gigs.'),
    ('7', 'Sustainability', 'HR’s Talent Marketplace team owns it after the pilot. The gig check becomes a standard step before hiring a contractor.'),
]

c = canvas.Canvas(OUT, pagesize=letter)
c.setTitle('Leadership Redefined capstone brief')
c.setAuthor('Vanderbilt University, Leadership Redefined')
c.setSubject('Fillable capstone brief: seven sections')
c.setCreator('Leadership Redefined')
form = c.acroForm
page_no = [1]


def text(x, y, s, font='Inter', size=10, color=INK):
    c.setFont(font, size); c.setFillColor(color); c.drawString(x, y, s)


def para(x, y, s, width, font='Inter', size=10, lead=None, color=INK):
    lead = lead or size * 1.4
    for line in simpleSplit(s, font, size, width):
        text(x, y, line, font, size, color); y -= lead
    return y


def eyebrow(x, y, s, color=OAK):
    c.setFont('Antonio', 9.5); c.setFillColor(color)
    c.drawString(x, y, s.upper())


def headline(x, y, plain, italic, size=26, color=INK):
    """One italic word per headline, ending in a period."""
    c.setFont('Caslon', size); c.setFillColor(color); c.drawString(x, y, plain)
    w = pdfmetrics.stringWidth(plain, 'Caslon', size)
    c.setFont('CaslonIt', size); c.setFillColor(OAK); c.drawString(x + w, y, italic)
    w2 = pdfmetrics.stringWidth(italic, 'CaslonIt', size)
    c.setFont('Caslon', size); c.setFillColor(color); c.drawString(x + w + w2, y, '.')


def footer():
    c.setStrokeColor(GOLD); c.setLineWidth(0.75); c.line(M, 40, W - M, 40)
    text(M, 27, 'Leadership Redefined  ·  Capstone brief', 'Inter', 8, MUTE)
    c.setFont('Inter', 8); c.setFillColor(MUTE); c.drawRightString(W - M, 27, 'Page %d' % page_no[0])


def band(title_small):
    c.setFillColor(BLACK); c.rect(0, H - 64, W, 64, stroke=0, fill=1)
    c.setFillColor(GOLD); c.rect(0, H - 67, W, 3, stroke=0, fill=1)
    c.drawImage(os.path.join(ROOT, 'assets', 'img', 'vu-lockup-white.png'), M, H - 50, width=120, height=31,
                mask='auto', preserveAspectRatio=True, anchor='w')
    c.setFont('Antonio', 10); c.setFillColor(GOLD); c.drawRightString(W - M, H - 38, title_small.upper())


def new_page(title_small='Capstone brief'):
    footer(); c.showPage(); page_no[0] += 1; band(title_small)


def field(name, label, x, y, w, h, multiline=True):
    form.textfield(name=name, tooltip=label, x=x, y=y, width=w, height=h,
                   fontName='Helvetica', fontSize=10, textColor=INK, fillColor=FILL,
                   borderColor=GOLD, borderWidth=1, borderStyle='solid',
                   fieldFlags='multiline' if multiline else '', forceBorder=True)


def section(y, n, title, what, good, box_h):
    c.setFillColor(BLACK); c.circle(M + 11, y - 6, 11, stroke=0, fill=1)
    c.setFont('Antonio', 12); c.setFillColor(GOLD); c.drawCentredString(M + 11, y - 10, str(n))
    text(M + 32, y - 12, title, 'Caslon', 16)
    y -= 32
    eyebrow(M, y, 'What you write'); y = para(M + 108, y, what, CW - 108, 'Inter', 9.5) - 2
    eyebrow(M, y, 'What good looks like'); y = para(M + 108, y, good, CW - 108, 'Inter', 9.5, color=MUTE) - 4
    field('s%d' % n, 'Section %d. %s' % (n, title), M, y - box_h, CW, box_h)
    return y - box_h - 26


# ── Page 1: cover, pod details, how to use, section 1 ──
band('Capstone brief')
y = H - 112
eyebrow(M, y, 'Leadership Redefined  ·  Your pod’s capstone'); y -= 32
headline(M, y, 'Write your capstone ', 'brief', 28); y -= 22
y = para(M, y, 'Your pod picks a real problem at Vanderbilt and comes up with a way to fix it. '
         'This form is your brief: seven sections, three pages at most. Sections 1 to 3 make the case. '
         'Sections 4 to 7 lay out the plan. It is due Friday, November 20.', CW, 'Inter', 10.5) - 10

for name, label, h in (('title', 'Project title', 22), ('pod', 'Pod', 22), ('members', 'Pod members', 36)):
    eyebrow(M, y - 4, label)
    field(name, label, M + 108, y - h + 6, CW - 108, h, multiline=(name == 'members'))
    y -= h + 10

# how to use
y -= 6
c.setFillColor(HexColor('#F4EEDF')); c.setStrokeColor(GOLD)
c.roundRect(M, y - 112, CW, 112, 6, stroke=1, fill=1)
eyebrow(M + 14, y - 18, 'How to use this form')
steps = ['Save this file to your computer, then open it in Adobe Acrobat Reader (free) or another PDF app that fills forms.',
         'Week of Nov 2: draft sections 1 to 3. Week of Nov 9: draft sections 4 to 7.',
         'Week of Nov 16: meet with your pod, put your drafts together, and turn in one brief by Friday, Nov 20.',
         'Questions? Post in your cohort’s Teams channel.']
yy = y - 36
for i, s in enumerate(steps, 1):
    text(M + 14, yy, '%d' % i, 'InterSb', 9.5, OAK)
    yy = para(M + 28, yy, s, CW - 44, 'Inter', 9.5, 13) - 4
y -= 112 + 28

# section 1: focus area (one choice)
c.setFillColor(BLACK); c.circle(M + 11, y - 6, 11, stroke=0, fill=1)
c.setFont('Antonio', 12); c.setFillColor(GOLD); c.drawCentredString(M + 11, y - 10, '1')
text(M + 32, y - 12, 'Focus area', 'Caslon', 16); y -= 32
eyebrow(M, y, 'What you write'); y = para(M + 108, y, 'Pick one. There is one winner in each area.', CW - 108, 'Inter', 9.5) - 2
eyebrow(M, y, 'What good looks like'); y = para(M + 108, y, 'It is at the top of page one, and the rest of the brief serves it.', CW - 108, 'Inter', 9.5, color=MUTE) - 10
for i, (val, desc) in enumerate((('Exceptional Core Operations', 'Make existing work faster, cheaper, or better.'),
                                 ('Bold Strategic Initiatives', 'Create something new for education or research.'),
                                 ('Values Driven Leadership', 'Advocate for and model the role of an essential research university.'))):
    form.radio(name='focus', tooltip='Section 1. Focus area: ' + val, value=val.replace(' ', ''),
               selected=False, x=M, y=y - 15, size=15, buttonStyle='check', shape='square', borderColor=OAK, borderStyle='solid', borderWidth=1,
               fillColor=white, textColor=BLACK, forceBorder=True)
    text(M + 24, y - 11, val, 'InterSb', 10.5)
    text(M + 24 + pdfmetrics.stringWidth(val, 'InterSb', 10.5) + 8, y - 11, desc, 'Inter', 9.5, MUTE)
    y -= 24

# ── Sections 2 to 7, two per page ──
for i in range(0, len(SECTIONS), 2):
    new_page('The case' if i == 0 else 'The plan')
    y = H - 100
    for n, title, what, good, h in SECTIONS[i:i + 2]:
        y = section(y, n, title, what, good, h)

# ── Example page ──
new_page('A strong example')
y = H - 112
eyebrow(M, y, 'For practice'); y -= 32
headline(M, y, 'A strong ', 'example', 26); y -= 20
y = para(M, y, 'An invented example, for practice: using gigs to cut what we spend on outside contractors.', CW, 'Inter', 10.5, color=MUTE) - 12
for n, label, body in EXAMPLE:
    if n in ('1', '4'):
        eyebrow(M, y, 'The case  ·  Sections 1 to 3' if n == '1' else 'The plan  ·  Sections 4 to 7', OAK)
        c.setStrokeColor(GOLD); c.setLineWidth(0.75); c.line(M, y - 6, W - M, y - 6); y -= 24
    text(M, y, n, 'Antonio', 12, OAK); text(M + 18, y, label, 'InterSb', 10.5)
    y = para(M + 120, y, body, CW - 120, 'Inter', 10, 14.5) - 12
footer()
c.save()
print('wrote', OUT, os.path.getsize(OUT))
