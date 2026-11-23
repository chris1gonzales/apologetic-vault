import json,subprocess,time,os
from playwright.sync_api import sync_playwright
PAGES=['christologyIslam','trinity4171','quran','hadith','scripture','sources','privacy','manuscriptCriticism','textualCriticism','torahQuran','logicArgumentation','apologeticsFramework','muhammadQuran','wordFaith','confessions']
JS="""()=>{const root=document.querySelector('.content');if(!root)return [];const sel='h1,h2,h3,h4,summary,p,li,td,th,blockquote,dd,dt';const out=[];let cur=null;const flush=()=>{if(cur&&cur.x.trim().length>25)out.push(cur);cur=null};
for(const el of root.querySelectorAll(sel)){if(el.closest('.hub-bar'))continue;const nested=el.parentElement&&el.parentElement.closest('p,li,td,th,blockquote,dd,dt,h1,h2,h3,h4,summary');if(nested)continue;const t=(el.textContent||'').replace(/\\s+/g,' ').trim();if(!t)continue;
if(/^(H1|H2|H3|H4|SUMMARY)$/.test(el.tagName)){flush();cur={t:t.slice(0,120),x:t}}else{if(!cur)cur={t:t.slice(0,80),x:''};cur.x+=' '+t;if(cur.x.length>1400){flush()}}}
flush();return out}"""
os.chdir('/home/claude/build/app/dist')
srv=subprocess.Popen(['python3','-m','http.server','4174'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL);time.sleep(1.2)
res=[]
try:
  with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
    pg=b.new_page(viewport={'width':1200,'height':900})
    for name in PAGES:
        pg.goto('http://localhost:4174/#'+name);pg.reload();pg.wait_for_timeout(900)
        items=pg.evaluate(JS)
        print(name,len(items),sum(len(i['x']) for i in items))
        res+= [{'p':name,'t':i['t'],'x':i['x'].strip()} for i in items]
    b.close()
finally: srv.terminate()
json.dump(res,open('/home/claude/build/app/src/searchInline.json','w'),ensure_ascii=False)
print('total',len(res),os.path.getsize('/home/claude/build/app/src/searchInline.json'))
