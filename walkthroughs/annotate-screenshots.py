# Crops, blurs and labels Xcode screenshots (taken on a Mac) into public/media/xcode/.
# SRC points at where the originals were copied; adjust it before re-running.
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
SRC='/mnt/user-data/uploads/AI_App_Publishing/screenshots-for-site/'
OUT='/home/user/ai-learning-guide/public/media/xcode/'
import os; os.makedirs(OUT, exist_ok=True)
FONT='/home/user/ai-learning-guide/node_modules/@fontsource/figtree/files/figtree-latin-700-normal.woff'
AMBER=(176,122,26)
def font(sz):
    try: return ImageFont.truetype(FONT, sz)
    except Exception: return ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', sz)
def job(name, src, thumbw, boxes, blur=(), crop=None, width=1200):
    im=Image.open(SRC+src).convert('RGB'); s=im.width/thumbw
    S=lambda r:[int(v*s) for v in r]
    for r in blur:
        r=S(r); reg=im.crop(r).filter(ImageFilter.GaussianBlur(12*s/2)); im.paste(reg,r[:2])
    d=ImageDraw.Draw(im)
    W=(crop[2]-crop[0])*s if crop else im.width; lw=max(3,int(W*.0045)); rad=int(W*.026); f=font(int(rad*1.3))
    for label,r,side in boxes:
        x0,y0,x1,y1=S(r); p=int(4*s)
        d.rounded_rectangle([x0-p,y0-p,x1+p,y1+p], radius=int(8*s), outline=AMBER, width=lw)
        cx,cy={'l':(x0-p-rad-int(3*s),(y0+y1)//2),'r':(x1+p+rad+lw,(y0+y1)//2),'t':((x0+x1)//2,y0-p-rad-int(3*s)),'b':((x0+x1)//2,y1+p+rad+lw),'tl':(x0-p,y0-p),'tr':(x1+p,y0-p)}[side]
        d.ellipse([cx-rad,cy-rad,cx+rad,cy+rad], fill=AMBER, outline='white', width=max(2,lw//2))
        d.text((cx,cy), label, fill='white', font=f, anchor='mm')
    if crop: im=im.crop(S(crop))
    if im.width>width: im=im.resize((width, round(im.height*width/im.width)), Image.LANCZOS)
    im.save(OUT+name, 'WEBP', quality=82, method=6); print(name, im.size, os.path.getsize(OUT+name))
job('new-project-template.webp','shot-03.png',1000,[('A',(145,64,193,90),'b'),('B',(66,155,154,280),'r'),('C',(840,646,972,680),'t')])
job('new-project-options.webp','shot-05.png',1000,[('A',(406,168,784,197),'r'),('B',(403,255,787,287),'r'),('C',(410,334,779,407),'r'),('D',(843,655,975,688),'t')], crop=(0,120,1000,719))
job('run-and-device-menu.webp','shot-07.png',1000,[('A',(176,30,200,54),'b'),('B',(592,30,672,54),'l')], blur=[(282,133,500,147)], crop=(37,24,965,460))
job('simulator-hello-world.webp','shot-09.png',520,[], crop=(50,30,470,935), width=600)
job('signing-team.webp','shot-10.png',1000,[('A',(53,100,268,117),'r'),('B',(463,104,568,121),'t'),('C',(573,229,787,246),'r'),('D',(575,343,790,390),'r')], crop=(44,30,956,640))
