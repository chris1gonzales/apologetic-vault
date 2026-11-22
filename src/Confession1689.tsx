import {useEffect,useState} from 'react';
import data from './c1689.json';
import {bibleHubUrl} from './bibleLink';
type Seg={label:string,book:string,ch:number,v:number[]|null};
const alias:Record<string,string>={Canticles:'Song of Solomon',Gal:'Galatians',Psalm:'Psalms'};
function parse(proofs:string):Seg[]{const out:Seg[]=[];let book='',ch=0;
for(const raw of proofs.split(';')){const s=raw.trim().replace(/^([A-Za-z ]+)\.\s/,'$1 ');if(!s)continue;
const m=s.match(/^((?:[123]\s)?[A-Za-z][A-Za-z ]*?)\s+(\d+)(?::\s*([\d,\-–\s]+))?$/);
let v:number[]|null=null,label=s;
if(m){book=alias[m[1].trim()]||m[1].trim();ch=+m[2];v=m[3]?expand(m[3]):null}
else{const n=s.match(/^(\d+)(?::\s*([\d,\-–\s]+))?$/);if(n&&book){if(n[2]){ch=+n[1];v=expand(n[2])}else v=null}else{out.push({label,book:'',ch:0,v:null});continue}}
out.push({label,book,ch,v})}
return out}
function expand(t:string):number[]{const r:number[]=[];for(const p of t.split(',')){const m=p.trim().match(/^(\d+)\s*[-–]\s*(\d+)$/);if(m){for(let i=+m[1];i<=+m[2]&&i<+m[1]+40;i++)r.push(i)}else if(/^\d+$/.test(p.trim()))r.push(+p.trim())}return r}
let bsb:Record<string,string[][]>|null=null;
export default function Confession1689(){
const [q,setQ]=useState(''),[open,setOpen]=useState<string|null>(null),[b,setB]=useState(bsb),[ch,setCh]=useState(0);
useEffect(()=>{if(!open||bsb)return;fetch('/corpus/bsb.json').then(r=>r.json()).then(d=>{bsb=d;setB(d)}).catch(()=>{})},[open]);
const chapters=(data as any).chapters as {n:number,title:string,paras:{n:number,text:string,proofs:string}[]}[];
const s=q.trim().toLowerCase();
const shown=chapters.filter(c=>(ch===0||c.n===ch)&&(!s||c.title.toLowerCase().includes(s)||c.paras.some(p=>p.text.toLowerCase().includes(s))));
return <><div className="page-head"><span className="eyebrow">CONFESSIONAL STANDARD · VERSION 3.26</span><h1>1689 Baptist Confession</h1><p>The full text with Scripture proofs, stored offline. It is a subordinate standard: Scripture is the highest authority and every paragraph stands or falls by the proofs. Tap a proof to read it (BSB) or open it in the NASB.</p></div>
<div className="panel"><div style={{display:'flex',gap:8,flexWrap:'wrap'}}><select aria-label="Chapter" value={ch} onChange={e=>setCh(+e.target.value)}><option value={0}>All 32 chapters</option>{chapters.map(c=><option key={c.n} value={c.n}>{c.n}. {c.title}</option>)}</select></div>
<input aria-label="Search the Confession" placeholder="Search the Confession…" value={q} onChange={e=>setQ(e.target.value)} style={{marginTop:8,width:'100%'}}/></div>
{shown.map(c=><div className="panel" key={c.n}><h2>Chapter {c.n}: {c.title}</h2>{c.paras.map(p=>{const segs=parse(p.proofs);const k=c.n+'.'+p.n;return <div key={k} style={{marginBottom:14}}><p style={{margin:'0 0 4px'}}><b>{k}</b> {p.text}</p>
<p style={{margin:0,fontSize:'.88em'}}>{segs.map((g,i)=>{const url=g.book?bibleHubUrl(g.book+' '+g.ch+(g.v&&g.v.length?':'+g.v[0]:'')):null;const id=k+'-'+i;return <span key={i}><a href="#" onClick={e=>{e.preventDefault();setOpen(open===id?null:id)}}>{g.label}</a>{url&&<a href={url} target="_blank" rel="noopener noreferrer" title="NASB on Bible Hub" style={{marginLeft:2}}>↗</a>}{i<segs.length-1?'; ':''}</span>})}</p>
{segs.map((g,i)=>k+'-'+i===open&&<blockquote key={i} style={{margin:'6px 0',padding:'6px 10px',borderLeft:'3px solid currentColor',fontSize:'.92em'}}>{!b?'Loading…':(()=>{const cv=b[g.book]?.[g.ch-1];if(!cv)return 'Open the NASB link for this reference.';const vs=g.v&&g.v.length?g.v:cv.map((_,j)=>j+1).slice(0,12);return vs.map(v=>cv[v-1]&&<span key={v}><sup>{v}</sup> {cv[v-1]} </span>)})()}</blockquote>)}
</div>})}</div>)}
{!shown.length&&<div className="panel">No matches.</div>}
<div className="panel"><h2>Closing statement</h2><p>{(data as any).closing}</p><p><small>{(data as any).source} Text as supplied; check against a printed edition before quoting formally.</small></p></div></>}
