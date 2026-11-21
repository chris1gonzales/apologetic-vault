import {useEffect,useMemo,useState} from 'react';
import {rows,type Row} from './tqIndex';
import {Txt} from './LogicLab';
type Seg={label:string,vs:[number,string][]};
type Bible=Record<string,string[][]>;
function parseBible(ref:string,b:Bible):Seg[]{
const m=ref.replace(/\(.*?\)/g,'').trim().match(/^([1-3]?\s?[A-Za-z]+)\s+(.*)$/);if(!m||!b[m[1]])return[];
const ch=b[m[1]];const out:Seg[]=[];
for(const raw of m[2].split(';')){const s=raw.trim();const x=s.match(/^(\d+)(?::(\d+))?(?:[–-](\d+))?$/);if(!x)continue;
const c=+x[1];
if(x[2]){const v1=+x[2],v2=x[3]?+x[3]:v1;const t=ch[c-1]||[];out.push({label:`${m[1]} ${c}:${v1}${v2!==v1?'–'+v2:''}`,vs:t.slice(v1-1,v2).map((tx,i)=>[v1+i,tx] as [number,string])})}
else{const c2=x[3]?+x[3]:c;for(let k=c;k<=c2;k++){const t=ch[k-1]||[];out.push({label:`${m[1]} ${k}`,vs:t.map((tx,i)=>[i+1,tx] as [number,string])})}}}
return out}
export function parseQuran(ref:string,q:string[][],ar:Record<string,string>|null):(Seg&{ar:[number,string][]})[]{
const out:(Seg&{ar:[number,string][]})[]=[];
for(const raw of ref.replace(/\(.*?\)/g,'').split(';')){const x=raw.trim().match(/^(\d+):(\d+)(?:[–-](\d+))?$/);if(!x)continue;
const s=+x[1],v1=+x[2],v2=x[3]?+x[3]:v1;const t=q[s-1]||[];
out.push({label:`Q ${s}:${v1}${v2!==v1?'–'+v2:''}`,vs:t.slice(v1-1,v2).map((tx,i)=>[v1+i,tx] as [number,string]),ar:ar?Array.from({length:v2-v1+1},(_,i)=>[v1+i,ar[`${s}:${v1+i}`]||''] as [number,string]):[]})}
return out}
const lab={shared:'Shared',differs:'Differs',thematic:'Thematic only',absent:'No equivalent'} as const;
const books=['Genesis','Exodus','Leviticus','Numbers','Deuteronomy'];
export default function ParallelIndex({onAccount}:{onAccount:(id:string)=>void}){
const[book,setBook]=useState('All');const[st,setSt]=useState<'All'|Row['status']>('All');const[q,setQ]=useState('');const[open,setOpen]=useState<string>('');const[arOn,setArOn]=useState(false);
const[bib,setBib]=useState<Bible|null>(null);const[qur,setQur]=useState<string[][]|null>(null);const[ar,setAr]=useState<Record<string,string>|null>(null);const[err,setErr]=useState('');
useEffect(()=>{if(!open||bib)return;let on=true;Promise.all([fetch('/corpus/kjv-pentateuch.json').then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json()}),fetch('/corpus/pickthall.json').then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json()})]).then(([b,qq])=>{if(on){setBib(b);setQur(qq)}}).catch(e=>{if(on)setErr(String(e))});return()=>{on=false}},[open,bib]);
useEffect(()=>{if(!arOn||ar)return;let on=true;fetch('/corpus/quran-simple-v1.1.txt').then(r=>r.text()).then(t=>{const m:Record<string,string>={};for(const l of t.split('\n')){const p=l.split('|');if(p.length>=3&&/^\d+$/.test(p[0]))m[p[0]+':'+p[1]]=p.slice(2).join('|').trim()}if(on)setAr(m)}).catch(()=>{if(on)setAr({})});return()=>{on=false}},[arOn,ar]);
const list=useMemo(()=>rows.filter(r=>(book==='All'||r.book===book)&&(st==='All'||r.status===st)&&(r.subject+' '+r.torah+' '+r.quran+' '+r.note).toLowerCase().includes(q.toLowerCase())),[book,st,q]);
const sel=rows.find(r=>r.id===open);
return <div className="vl-article vl-wide"><h2>Parallels index</h2><p>{rows.length} Bible and Qur’an parallels, listed book by book from Genesis to Deuteronomy. It is an index of where the two texts meet. It is not a full concordance. Tap a row to read both passages in English.</p>
<div className="vl-tabs" role="group" aria-label="Book">{['All',...books].map(b=><button key={b} className={book===b?'active':''} onClick={()=>setBook(b)}>{b}</button>)}</div>
<div className="vl-tabs" role="group" aria-label="Status">{(['All','shared','differs','thematic','absent'] as const).map(s=><button key={s} className={st===s?'active':''} onClick={()=>setSt(s)}>{s==='All'?'All':lab[s]}</button>)}</div>
<input aria-label="Search the index" placeholder="Search a topic or reference" value={q} onChange={e=>setQ(e.target.value)}/>
<p className="hint">{list.length} shown. “Differs” means the accounts disagree. “Thematic only” means the link is loose, not the same event. English text: KJV and Pickthall (1930), both public domain, stored offline.</p>
<div className="tq-list">{list.map(r=><div key={r.id} className={'tq-row '+(open===r.id?'open':'')}><button className="tq-head" aria-expanded={open===r.id} onClick={()=>setOpen(open===r.id?'':r.id)}><strong>{r.subject}</strong><span className="vl-pill">{lab[r.status]}</span><small>{r.torah} · {r.quran?'Q '+r.quran:'no Qur’anic equivalent'}</small></button>
{open===r.id&&sel&&<div className="tq-body">{sel.note&&<p className="vl-caution"><Txt t={sel.note}/></p>}{sel.account&&<button className="secondary" onClick={()=>onAccount(sel.account)}>Open the full account comparison</button>}
{err&&<p className="hint">The English text could not load: {err}</p>}{!bib&&!err&&<p className="hint">Loading the English texts…</p>}
{bib&&qur&&<div className="tq-cols"><div className="tq-col"><h4>Bible (KJV)</h4>{parseBible(sel.torah,bib).map(s=><blockquote className="tq-text scroll" key={s.label}><strong>{s.label}</strong><p>{s.vs.map(([n,t])=><span key={n}><b>{n}</b> {t} </span>)}</p></blockquote>)}</div>
<div className="tq-col"><h4>Qur’an (Pickthall)</h4>{sel.quran?<><label className="qenglish-toggle"><input type="checkbox" checked={arOn} onChange={e=>setArOn(e.target.checked)}/> Show Arabic</label>{parseQuran(sel.quran,qur,arOn?ar:null).map(s=><blockquote className="tq-text scroll" key={s.label}><strong>{s.label}</strong><p>{s.vs.map(([n,t])=><span key={n}><b>{n}</b> {t} </span>)}</p>{arOn&&ar&&s.ar.length>0&&<p className="qarabic" lang="ar" dir="rtl">{s.ar.map(([n,t])=>t+' ﴿'+n+'﴾ ').join('')}</p>}</blockquote>)}</>:<p className="hint">The Qur’an has no direct equivalent. Compare how the Bible treats this subject.</p>}</div></div>}
</div>}</div>)}</div>
{list.length===0&&<p className="empty">No parallels match. Try another word.</p>}
<p className="hint">Index compiled from your attachment. Verse references were matched against the stored texts, and the loose links are labelled “thematic”. Verify before citing.</p></div>}
