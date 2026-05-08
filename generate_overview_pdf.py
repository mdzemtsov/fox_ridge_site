#!/usr/bin/env python3
"""
FoxRidge Equity Partners — Premium 2-Page Company Overview PDF
Graphic-forward. No portfolio tables.
Page 1: Who We Are | Investment Focus | Investment Strategy | Process Diagram
Page 2: Who Is Our Investor | How We Manage | Team | Contacts + Disclaimer
"""
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor, white
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from PIL import Image as PILImage
import io

W, H = letter  # 612 x 792

NAVY   = HexColor("#1E3A6E")
GOLD   = HexColor("#B8942A")
GOLDL  = HexColor("#D4AF5A")
STONE  = HexColor("#F5F3EF")
LGRAY  = HexColor("#E5E7EB")
MGRAY  = HexColor("#6B7280")
DARK   = HexColor("#1C1917")
WHITE  = white

BASE   = "/home/ubuntu/fox_ridge_site/client/public"
LOGO   = f"{BASE}/images/LogoWhite.jpeg"
MP     = f"{BASE}/images/mikhail.jpg"
SP     = f"{BASE}/images/slava.webp"
OUT    = f"{BASE}/FoxRidge_Company_Overview.pdf"

def load_img(path):
    img = PILImage.open(path)
    if img.mode in ('RGBA','LA','P'):
        bg = PILImage.new('RGB', img.size, (255,255,255))
        src = img.convert('RGBA') if img.mode=='P' else img
        bg.paste(src, mask=src.split()[3] if src.mode=='RGBA' else None)
        img = bg
    elif img.mode != 'RGB':
        img = img.convert('RGB')
    buf = io.BytesIO()
    img.save(buf,'JPEG',quality=90)
    buf.seek(0)
    return ImageReader(buf)

def wraplines(text, font, size, maxw):
    words = text.split()
    lines, cur = [], ''
    for w in words:
        t = (cur+' '+w).strip()
        if stringWidth(t, font, size) <= maxw:
            cur = t
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

def drawpara(c, text, x, y, w, font='Helvetica', size=8, color=None, lead=None):
    lead = lead or size*1.45
    c.setFont(font, size)
    c.setFillColor(color or DARK)
    for line in wraplines(text, font, size, w):
        c.drawString(x, y, line)
        y -= lead
    return y

def sec_label(c, text, x, y):
    c.setFillColor(GOLD)
    c.rect(x, y+5, 22, 2.5, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 7)
    c.setFillColor(NAVY)
    c.drawString(x+28, y+3, text.upper())
    return y - 14

def hline(c, x, y, w, col=None, thick=0.4):
    c.setStrokeColor(col or LGRAY)
    c.setLineWidth(thick)
    c.line(x, y, x+w, y)

# ─── PAGE 1 ───────────────────────────────────────────────────────────────────
def page1(c):
    # Header
    c.setFillColor(NAVY); c.rect(0, H-108, W, 108, fill=1, stroke=0)
    c.setFillColor(GOLD);  c.rect(0, H-111, W, 3,   fill=1, stroke=0)
    try:
        c.drawImage(load_img(LOGO), 32, H-96, width=66, height=66, preserveAspectRatio=True)
    except: pass
    c.setFont('Helvetica-Bold', 19); c.setFillColor(WHITE)
    c.drawString(112, H-52, "FOXRIDGE EQUITY PARTNERS")
    c.setFont('Helvetica', 9); c.setFillColor(GOLDL)
    c.drawString(114, H-68, "Sun Belt Multifamily Private Equity  ·  Austin, TX  &  Miami, FL")
    c.setFont('Helvetica', 8); c.setFillColor(WHITE)
    c.drawRightString(W-32, H-52, "partners@foxridgeequity.com")
    c.drawRightString(W-32, H-66, "foxridgeequity.com")
    c.setFillColor(GOLD); c.roundRect(W-128, H-86, 96, 18, 3, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 7.5); c.setFillColor(WHITE)
    c.drawCentredString(W-80, H-74, "FIRM OVERVIEW 2025")

    # ── Stats bar ──────────────────────────────────────────────────────────
    sy = H-148
    stats = [("$1B+","Transaction Volume"),("7,000+","Units Invested"),("26%","Avg Project IRR"),("1.77x","Avg Equity Multiple")]
    sw = (W-64)/4
    for i,(val,lbl) in enumerate(stats):
        sx = 32 + i*sw
        c.setFillColor(STONE); c.rect(sx, sy-36, sw-4, 36, fill=1, stroke=0)
        c.setFillColor(GOLD);  c.rect(sx, sy, sw-4, 2.5, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 15); c.setFillColor(NAVY)
        c.drawCentredString(sx+(sw-4)/2, sy-18, val)
        c.setFont('Helvetica', 6.5); c.setFillColor(MGRAY)
        c.drawCentredString(sx+(sw-4)/2, sy-30, lbl)

    # ── Two columns ────────────────────────────────────────────────────────
    y = H - 206
    CL, CR = 32, 318
    CW = 262

    # LEFT: Who We Are + Investment Focus
    y = sec_label(c, "Who We Are", CL, y)
    y -= 2
    who = ("FoxRidge Equity Partners is a private real estate investment firm "
           "specializing in light value-add multifamily assets across high-growth "
           "Sun Belt markets. We operate on a single-investor-per-deal model — "
           "partnering with one UHNW individual, family office, or principal per "
           "acquisition. Typical check size: $3–10M per deal. We serve as the "
           "dedicated operational arm, delivering institutional-quality execution "
           "without requiring our partners to build an in-house team.")
    y = drawpara(c, who, CL, y, CW, size=8.5, color=DARK, lead=13)
    y -= 12
    hline(c, CL, y, CW)
    y -= 14

    y = sec_label(c, "Investment Focus", CL, y)
    y -= 2
    focus = [
        ("Asset Class",  "Class A & B Multifamily"),
        ("Vintage",      "2000 and newer"),
        ("Size",         "100+ units per asset"),
        ("Strategy",     "Light Value-Add"),
        ("Markets",      "Texas · Florida · Southeast Sun Belt"),
        ("Hold Period",  "3–7 years"),
    ]
    for lbl, val in focus:
        c.setFont('Helvetica-Bold', 8); c.setFillColor(NAVY)
        c.drawString(CL, y, lbl+":")
        c.setFont('Helvetica', 8); c.setFillColor(DARK)
        c.drawString(CL+78, y, val)
        hline(c, CL, y-3, CW, thick=0.3)
        y -= 14
    y -= 6
    hline(c, CL, y, CW)
    y -= 14

    y = sec_label(c, "Value Creation Approach", CL, y)
    y -= 2
    vc = [
        "Direct oversight of capital improvements",
        "In-house property management control",
        "AI-driven operations & tenant management",
        "Weekly KPI monitoring & transparent reporting",
    ]
    for item in vc:
        c.setFillColor(GOLD); c.circle(CL+4, y-1, 2.5, fill=1, stroke=0)
        c.setFont('Helvetica', 8); c.setFillColor(DARK)
        c.drawString(CL+12, y, item)
        y -= 13

    # RIGHT: Investment Strategy + Process Diagram
    ry = H - 206
    ry = sec_label(c, "Investment Strategy", CR, ry)
    ry -= 2
    strat = ("We acquire underperforming or lightly distressed Class A and B "
             "multifamily properties in high-growth Sun Belt markets. Our approach "
             "combines targeted capital improvements with in-house property management "
             "and AI-driven operational tools to drive NOI growth and position assets "
             "for a premium exit. We do not operate as a fund — every deal is a direct "
             "partnership with a single committed capital partner.")
    ry = drawpara(c, strat, CR, ry, CW, size=8.5, color=DARK, lead=13)
    ry -= 12
    hline(c, CR, ry, CW)
    ry -= 14

    ry = sec_label(c, "Our 6-Step Investment Process", CR, ry)
    ry -= 6

    steps = [
        ("01", "SOURCE",     "Off-market deal flow through broker relationships and direct outreach."),
        ("02", "UNDERWRITE", "Rigorous T-12 analysis, rent comps, stress testing, and exit scenarios."),
        ("03", "STRUCTURE",  "Bespoke LP/GP structure tailored to investor profile and jurisdiction."),
        ("04", "ACQUIRE",    "Decisive execution — single investor eliminates syndication delays."),
        ("05", "OPERATE",    "In-house PM, AI tools, direct oversight of all capital improvements."),
        ("06", "EXIT",       "Strategic disposition — sale, refinance, or 1031 per investor preference."),
    ]
    step_h = 46
    for i, (num, title, body) in enumerate(steps):
        sy2 = ry - i*(step_h+3)
        bg = STONE if i%2==0 else WHITE
        c.setFillColor(bg); c.rect(CR, sy2-step_h, CW, step_h, fill=1, stroke=0)
        c.setFillColor(GOLD); c.rect(CR, sy2-step_h, 3.5, step_h, fill=1, stroke=0)
        c.setFillColor(NAVY); c.circle(CR+18, sy2-step_h/2, 11, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 7.5); c.setFillColor(GOLD)
        c.drawCentredString(CR+18, sy2-step_h/2-3, num)
        c.setFont('Helvetica-Bold', 9); c.setFillColor(NAVY)
        c.drawString(CR+34, sy2-14, title)
        drawpara(c, body, CR+34, sy2-26, CW-40, size=7.5, color=MGRAY, lead=11)
        if i < len(steps)-1:
            ax = CR+CW/2
            ay = sy2-step_h-1
            c.setFillColor(GOLD); c.setStrokeColor(GOLD); c.setLineWidth(0.6)
            c.line(ax, ay, ax, ay-1)

    # Why Sun Belt strip
    wsb_y = min(y, ry - len(steps)*(step_h+3)) - 18
    hline(c, 32, wsb_y, W-64, col=GOLD, thick=0.8)
    wsb_y -= 14
    c.setFont('Helvetica-Bold', 7.5); c.setFillColor(GOLD)
    c.drawString(32, wsb_y, "WHY SUN BELT. WHY NOW.")
    wsb_y -= 12
    tiles = [
        ("+8.8%", "TX Population Growth 2020–25"),
        ("+2.9%", "DFW Job Growth Rate"),
        ("−50%",  "New Supply Contraction"),
        ("+1.5%", "Rent Re-Acceleration Forecast"),
    ]
    tw = (W-64)/4
    for i,(val,lbl) in enumerate(tiles):
        tx2 = 32+i*tw
        c.setFillColor(STONE); c.rect(tx2, wsb_y-28, tw-4, 32, fill=1, stroke=0)
        c.setFillColor(GOLD);  c.rect(tx2, wsb_y+4, tw-4, 2, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 12); c.setFillColor(NAVY)
        c.drawCentredString(tx2+(tw-4)/2, wsb_y-12, val)
        c.setFont('Helvetica', 6.5); c.setFillColor(MGRAY)
        c.drawCentredString(tx2+(tw-4)/2, wsb_y-24, lbl)

    # Footer
    c.setFillColor(NAVY); c.rect(0, 0, W, 26, fill=1, stroke=0)
    c.setFont('Helvetica', 6.5); c.setFillColor(GOLDL)
    c.drawString(32, 9, "FoxRidge Equity Partners  ·  partners@foxridgeequity.com  ·  foxridgeequity.com")
    c.setFillColor(WHITE)
    c.drawRightString(W-32, 9, "Page 1 of 2  ·  Confidential — For Qualified Investors Only")

# ─── PAGE 2 ───────────────────────────────────────────────────────────────────
def page2(c):
    # Slim header
    c.setFillColor(NAVY); c.rect(0, H-54, W, 54, fill=1, stroke=0)
    c.setFillColor(GOLD);  c.rect(0, H-57, W, 3, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 14); c.setFillColor(WHITE)
    c.drawString(32, H-32, "FOXRIDGE EQUITY PARTNERS")
    c.setFont('Helvetica', 8); c.setFillColor(GOLDL)
    c.drawString(32, H-46, "Firm Overview 2025  ·  Continued")
    c.setFont('Helvetica', 8); c.setFillColor(WHITE)
    c.drawRightString(W-32, H-32, "partners@foxridgeequity.com")
    c.drawRightString(W-32, H-46, "foxridgeequity.com")

    CL, CR = 32, 318
    CW = 262
    y = H - 82

    # ── LEFT: Who Is Our Investor ──────────────────────────────────────────
    y = sec_label(c, "Who Is Our Investor", CL, y)
    y -= 2
    inv_intro = ("FoxRidge operates on a single-investor-per-deal model. We partner with "
                 "one ultra-high-net-worth individual, family office, or principal per "
                 "acquisition — typical check size $3–10M per deal. We are not in a "
                 "fundraising process; we deploy alongside committed capital partners who "
                 "want institutional-quality execution without building an in-house team.")
    y = drawpara(c, inv_intro, CL, y, CW, size=8.5, color=DARK, lead=13)
    y -= 10

    # Investor type tags
    tags = ["UHNW Individuals", "Family Offices", "Post-Exit Founders", "International Principals"]
    tx = CL
    for tag in tags:
        tw2 = stringWidth(tag, 'Helvetica-Bold', 7) + 14
        if tx + tw2 > CL + CW:
            tx = CL; y -= 22
        c.setFillColor(STONE); c.roundRect(tx, y-14, tw2, 18, 3, fill=1, stroke=0)
        c.setFillColor(GOLD);  c.roundRect(tx, y+4, tw2, 2, 0, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 7); c.setFillColor(NAVY)
        c.drawString(tx+7, y-8, tag)
        tx += tw2 + 6
    y -= 26
    hline(c, CL, y, CW)
    y -= 14

    y = sec_label(c, "What We Offer Our Investor", CL, y)
    y -= 2
    offers = [
        ("Full Governance Rights",
         "Major decisions, refinance timing, disposition windows, and capex approvals — "
         "without building an in-house team."),
        ("Bespoke Deal Structuring",
         "Every partnership is structured around the investor's profile, liquidity needs, "
         "and jurisdiction requirements."),
        ("Capital Certainty & Speed",
         "Single-investor model eliminates syndication delays. We move fast when the deal is right."),
        ("Confidentiality & Discretion",
         "No public offering. No fund marketing. Every relationship is private and handled with full discretion."),
        ("We Are the Family Office They Don't Need to Build",
         "Institutional-grade reporting, asset management, and investor communication — delivered directly."),
    ]
    for title, body in offers:
        c.setFillColor(GOLD); c.rect(CL, y-2, 3, 10, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 8.5); c.setFillColor(NAVY)
        c.drawString(CL+10, y, title)
        y -= 12
        y = drawpara(c, body, CL+10, y, CW-10, size=7.5, color=MGRAY, lead=11)
        y -= 7
    hline(c, CL, y, CW)
    y -= 14

    # Team
    y = sec_label(c, "Leadership", CL, y)
    y -= 6
    ph = 72; pw = 56
    for photo_path, name, role, creds in [
        (MP, "Mikhail Pritsker", "Co-Founder & Managing Partner", "25+ yrs · $1B+ transactions · MBA Chicago Booth · CCIM"),
        (SP, "Slava Davidenko",  "Co-Founder & Managing Partner", "25+ yrs · $600M+ managed · 7,000+ units · 42% best IRR"),
    ]:
        try:
            c.drawImage(load_img(photo_path), CL, y-ph, width=pw, height=ph, preserveAspectRatio=False)
        except:
            c.setFillColor(STONE); c.rect(CL, y-ph, pw, ph, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 9); c.setFillColor(NAVY)
        c.drawString(CL+pw+8, y-14, name)
        c.setFont('Helvetica', 7.5); c.setFillColor(GOLD)
        c.drawString(CL+pw+8, y-26, role)
        c.setFont('Helvetica', 7); c.setFillColor(MGRAY)
        c.drawString(CL+pw+8, y-38, creds)
        y -= ph + 10

    # ── RIGHT: How We Manage ───────────────────────────────────────────────
    ry = H - 82
    ry = sec_label(c, "How We Manage — Our Operational Model", CR, ry)
    ry -= 4

    mgmt_intro = ("Once acquired, every asset is managed directly by FoxRidge. "
                  "We do not outsource property management. Our in-house team, "
                  "combined with AI-driven tools, delivers institutional-grade "
                  "operations at the asset level — driving NOI, protecting capital, "
                  "and positioning for a premium exit.")
    ry = drawpara(c, mgmt_intro, CR, ry, CW, size=8.5, color=DARK, lead=13)
    ry -= 12
    hline(c, CR, ry, CW)
    ry -= 14

    ry = sec_label(c, "Three Pillars of Value Creation", CR, ry)
    ry -= 6

    pillars = [
        ("01", "Operational Repositioning",
         "Revenue optimization, lease-up velocity, and expense ratio discipline through "
         "in-house property management. We tighten operations, reduce vacancy, and improve "
         "NOI through management discipline — not construction."),
        ("02", "Direct Oversight of Capital Improvements",
         "Light, targeted unit upgrades and common area enhancements — cosmetic improvements "
         "that drive rent premiums without heavy construction risk. Hands-on oversight of "
         "every dollar spent on improvements."),
        ("03", "AI-Driven Property Management",
         "Implementation of AI-powered tools for tenant communication, maintenance coordination, "
         "predictive analytics, and on-site operational efficiency — delivering institutional-grade "
         "management at the asset level."),
    ]
    for num, title, body in pillars:
        c.setFillColor(NAVY); c.circle(CR+10, ry-4, 10, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 7.5); c.setFillColor(GOLD)
        c.drawCentredString(CR+10, ry-7, num)
        c.setFont('Helvetica-Bold', 9); c.setFillColor(NAVY)
        c.drawString(CR+26, ry, title)
        ry -= 13
        ry = drawpara(c, body, CR+26, ry, CW-26, size=7.5, color=MGRAY, lead=11)
        ry -= 10

    hline(c, CR, ry, CW)
    ry -= 14

    ry = sec_label(c, "Target Returns", CR, ry)
    ry -= 6
    returns = [("Equity Multiple","1.6x – 2.2x"),("Project IRR","18% – 28%"),
               ("Cash-on-Cash","8% – 12% Yr 1"),("Hold Period","3 – 7 Years")]
    rw = (CW-12)/4
    for i,(lbl,val) in enumerate(returns):
        rx2 = CR + i*(rw+4)
        c.setFillColor(STONE); c.rect(rx2, ry-36, rw, 38, fill=1, stroke=0)
        c.setFillColor(GOLD);  c.rect(rx2, ry+2, rw, 2.5, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 10); c.setFillColor(NAVY)
        c.drawCentredString(rx2+rw/2, ry-14, val)
        c.setFont('Helvetica', 6.5); c.setFillColor(MGRAY)
        c.drawCentredString(rx2+rw/2, ry-28, lbl)
    ry -= 50

    # ── Contact + Disclaimer ───────────────────────────────────────────────
    contact_y = min(y, ry) - 16
    hline(c, 32, contact_y, W-64, col=GOLD, thick=0.8)
    contact_y -= 14

    c.setFont('Helvetica-Bold', 8); c.setFillColor(NAVY)
    c.drawString(32, contact_y, "CONTACT US")
    c.setFont('Helvetica', 8); c.setFillColor(DARK)
    c.drawString(32, contact_y-13, "partners@foxridgeequity.com")
    c.drawString(32, contact_y-24, "foxridgeequity.com")

    c.setFont('Helvetica-Bold', 8); c.setFillColor(NAVY)
    c.drawString(220, contact_y, "OFFICES")
    c.setFont('Helvetica', 8); c.setFillColor(DARK)
    c.drawString(220, contact_y-13, "Austin, Texas")
    c.drawString(220, contact_y-24, "Miami, Florida")

    disc_y = contact_y - 40
    disc = ("This document is for informational purposes only and does not constitute an offer to sell or a "
            "solicitation to buy any security. Past performance is not indicative of future results. All "
            "investments involve risk, including possible loss of principal. Prospective investors should "
            "consult their own legal, tax, and financial advisors before making any investment decision.")
    drawpara(c, disc, 32, disc_y, W-64, font='Helvetica-Oblique', size=6.2, color=MGRAY, lead=9)

    # Footer
    c.setFillColor(NAVY); c.rect(0, 0, W, 26, fill=1, stroke=0)
    c.setFont('Helvetica', 6.5); c.setFillColor(GOLDL)
    c.drawString(32, 9, "FoxRidge Equity Partners  ·  partners@foxridgeequity.com  ·  foxridgeequity.com")
    c.setFillColor(WHITE)
    c.drawRightString(W-32, 9, "Page 2 of 2  ·  Confidential — For Qualified Investors Only")

# ─── RENDER ───────────────────────────────────────────────────────────────────
cv = canvas.Canvas(OUT, pagesize=letter)
page1(cv)
cv.showPage()
page2(cv)
cv.save()
print(f"Saved: {OUT}")
