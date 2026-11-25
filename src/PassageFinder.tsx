import {useEffect,useRef,useState} from 'react';
import {lookupBible,lookupQuran,parseArabic,isQuran,type Corp,type Found} from './passage';
import './passage.css';
const cache:{[k:string]:any}={};
async function getJson(k:string,url:string){if(cache[k])return cache[k];const r=await fetch(url);if(!r.ok)throw Error('HTTP '+r.status);return cache[k]=await r.json()}
async function getText(k:string,url:string){if(cache[k])return cache[k];const r=await fetch(url);if(!r.ok)throw Error('HTTP '+r.status);return cache[k]=await r.text()}
const NTSTART=39;
const EX=['John 3:16-21','Genesis 1:1–2:3','Psalm 22–24','Romans 8','Q 2:255-260','Surah 18:9–26','Q 112'];
function Box({n,start}:{n:number,start:string}){
const [q,setQ]=useState(start),[tr,setTr]=useState<'bsb'|'kjv'>('bsb'),[orig,setOrig]=useState(true),[res,setRes]=useState<Found|null>(null),[busy,setBusy]=useState(false),[err,setErr]=useState(''),[copied,setCopied]=useState(false);
const run=useRef(0);
async function find(text=q){const id=++run.current;setErr('');setCopied(false);const s=text.trim();if(!s){setRes(null);return}setBusy(true);
try{
 if(isQuran(s)){const [en,raw]=await Promise.all([getJson('pick','/corpus/pickthall.json'),orig?getText('qar','/corpus/quran-simple-v1.1.txt').catch(()=>''):Promise.resolve('')]);
  if(id!==run.current)return;if(!cache.qmap&&raw)cache.qmap=parseArabic(raw);setRes(lookupQuran(s,en,orig?cache.qmap||null:null))}
 else{const en:Corp=await getJson(tr,tr==='bsb'?'/corpus/bsb.json':'/corpus/kjv.json');
  const first=s.match(/^(?:[123]|i{1,3})?\s*[A-Za-z][A-Za-z.' ]*/)?.[0]||'';
  let og:Corp|null=null;
  if(orig){const probe=lookupBible(s,en,null);const bk=probe.title.replace(/\s+[\d].*$/,'');const names=Object.keys(en);const idx=names.indexOf(bk);const isNT=idx>=NTSTART;
   try{og=await getJson(isNT?'grk':'heb',isNT?'/corpus/greek-sblgnt.json':'/corpus/hebrew-wlc.json')}catch(_){og=null}}
  if(id!==run.current)return;void first;setRes(lookupBible(s,en,og))}
}catch(e){if(id===run.current){setRes(null);setErr('Could not load the text: '+String(e)+'. Open the app once online so the texts can be stored.')}}
finally{if(id===run.current)setBusy(false)}}
useEffect(()=>{if(start)find(start)},[]);
useEffect(()=>{if(res&&q.trim())find()},[tr,orig]);
const isQ=res?.kind==='quran';
function copy(){if(!res||!res.items.length)return;const head=`${res.title} (${isQ?'Pickthall':tr.toUpperCase()})`;const body=res.items.map(i=>`${i.ref.split(':').pop()} ${i.en}`).join('\n');
 const t=head+'\n'+body;(navigator.clipboard?.writeText(t)||Promise.reject()).then(()=>setCopied(true)).catch(()=>{const a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy');setCopied(true)}catch(_){}a.remove()})}
const label=res?.kind==='quran'?'Arabic':(res&&res.items[0]?.orig?'Original language':'Original');
return <div className="pf-box"><h2 style={{marginTop:0}}>Passage {n}</h2>
<form className="pf-row" onSubmit={e=>{e.preventDefault();find()}}>
<input type="search" name={'passage-'+n} aria-label={'Passage '+n+' reference'} autoComplete="off" placeholder="e.g. John 3:16-21 or Q 2:255-260" value={q} onChange={e=>setQ(e.target.value)}/>
<button type="submit">Find</button></form>
<div className="pf-chips">{EX.map(x=><button key={x} type="button" className="pf-chip" onClick={()=>{setQ(x);find(x)}}>{x}</button>)}</div>
<div className="pf-row"><select name={'translation-'+n} aria-label="English text" value={tr} onChange={e=>setTr(e.target.value as any)}><option value="bsb">BSB (English)</option><option value="kjv">KJV (English)</option></select>
<label style={{display:'flex',alignItems:'center',gap:4}}><input type="checkbox" name={'original-'+n} checked={orig} onChange={e=>setOrig(e.target.checked)}/>Hebrew, Greek or Arabic</label></div>
<p className="pf-note">Qur’an English is Pickthall. Start Qur’an references with Q or Surah.</p>
{busy&&<p>Looking…</p>}{err&&<p className="pf-err">{err}</p>}
{res?.error&&<p className="pf-err">{res.error}</p>}
{res&&!res.error&&<><div className="pf-row"><h3 style={{margin:0,flex:'1 1 auto'}}>{res.title} <small>({res.items.length} verse{res.items.length===1?'':'s'}; {isQ?'Pickthall':tr.toUpperCase()})</small></h3><button type="button" onClick={copy}>{copied?'Copied ✓':'Copy'}</button><button type="button" onClick={()=>{setRes(null);setQ('')}}>Clear</button></div>
{res.note&&<p className="pf-note">{res.note}</p>}
{!isQ&&orig&&res.items.some(i=>i.orig)&&<p className="pf-note">Hebrew and Greek lines are matched by verse number and can be offset in places (for example Psalm titles).</p>}
{res.items.map(i=><div key={i.ref} className="pf-v"><p style={{margin:0}}><sup>{i.url?<a href={i.url} target="_blank" rel="noopener noreferrer" title={isQ?'Open on Quran.com (internet required)':'NASB on Bible Hub (internet required)'}>{i.ref}</a>:i.ref}</sup> {i.en}</p>
{orig&&i.orig&&<p className="pf-o" lang={isQ?'ar':/[Ͱ-Ͽἀ-῿]/.test(i.orig)?'grc':'he'} dir={isQ||!/[Ͱ-Ͽἀ-῿]/.test(i.orig)?'rtl':'ltr'}>{i.orig}</p>}</div>)}
<span className="pf-note">{label} text is stored on this device; links open the NASB or Quran.com when you are online.</span></>}
</div>}
export default function PassageFinder(){
const [two,setTwo]=useState(false);
return <><div className="page-head"><span className="eyebrow">OFFLINE SCRIPTURE · VERSION 3.34</span><h1>Find a passage</h1><p>Type a Bible or Qur’an reference or range and read it straight away, with the original language beside it. Bible: <b>Gen 1:1–2:3</b>, <b>John 3:16-21</b>, <b>Psalm 22–24</b>, <b>Romans 8</b>. Qur’an: <b>Q 2:255-260</b>, <b>Surah 18:9–26</b>, <b>Q 112</b>. Everything is stored on this device, so it works offline. Scripture is the highest standard; the Qur’an text is shown so it can be tested by Scripture (Isaiah 8:20; Galatians 1:8).</p></div>
<div className="pf-grid"><Box n={1} start=""/>{two&&<Box n={2} start=""/>}</div>
<div className="pf-row">{!two?<button type="button" onClick={()=>setTwo(true)}>＋ Compare with a second passage</button>:<button type="button" onClick={()=>setTwo(false)}>Remove the second passage</button>}</div>
<div className="panel"><h2>Texts and licensing</h2><p>BSB and KJV are public domain. Hebrew: Open Scriptures Hebrew Bible (WLC), CC BY 4.0. Greek: SBL Greek New Testament, CC BY 4.0. Qur’an English: Pickthall. The NASB is linked to Bible Hub, not stored.</p></div></>}
