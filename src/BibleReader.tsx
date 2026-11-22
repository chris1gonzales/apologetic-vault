import {useEffect,useMemo,useState} from 'react';
import books from './bibleBooks.json';
import {bibleHubUrl} from './bibleLink';
type Corp=Record<string,string[][]>;
const files:Record<string,string>={bsb:'/corpus/bsb.json',kjv:'/corpus/kjv.json',heb:'/corpus/hebrew-wlc.json',grk:'/corpus/greek-sblgnt.json'};
const NT=books.slice(39).map(b=>b.name);
const cache:Record<string,Corp>={};
async function load(k:string){if(cache[k])return cache[k];const r=await fetch(files[k]);if(!r.ok)throw Error('HTTP '+r.status);return cache[k]=await r.json()}
export default function BibleReader(){
const [book,setBook]=useState('John'),[ch,setCh]=useState(3),[tr,setTr]=useState<'bsb'|'kjv'>('bsb'),[orig,setOrig]=useState(true),[q,setQ]=useState('');
const [main,setMain]=useState<Corp|null>(null),[og,setOg]=useState<Corp|null>(null),[err,setErr]=useState('');
const isNT=NT.includes(book),ok=isNT?'grk':'heb';
useEffect(()=>{let on=true;setErr('');load(tr).then(d=>on&&setMain(d)).catch(e=>on&&setErr(String(e)));return()=>{on=false}},[tr]);
useEffect(()=>{if(!orig)return;let on=true;setOg(null);load(ok).then(d=>on&&setOg(d)).catch(e=>on&&setErr(String(e)));return()=>{on=false}},[orig,ok]);
const info=books.find(b=>b.name===book)!;
const chapters=main?.[book]?.length||info.chapters||1;
const verses=main?.[book]?.[ch-1]||[];const ov=og?.[book]?.[ch-1]||[];
const hits=useMemo(()=>{const s=q.trim().toLowerCase();if(s.length<3||!main)return[];const out:{b:string,c:number,v:number,t:string}[]=[];for(const b of books){const bk=main[b.name];if(!bk)continue;bk.forEach((cv,ci)=>cv.forEach((t,vi)=>{if(out.length<60&&t.toLowerCase().includes(s))out.push({b:b.name,c:ci+1,v:vi+1,t})}))}return out},[q,main]);
const go=(b:string,c:number)=>{setBook(b);setCh(c);setQ('')};
return <><div className="page-head"><span className="eyebrow">OFFLINE SCRIPTURE · VERSION 3.26</span><h1>Bible Reader</h1><p>The whole Bible stored on this device: Berean Standard Bible or KJV in English, with the Hebrew (Westminster Leningrad Codex) or Greek (SBL Greek New Testament) beside it. Scripture is the highest standard of truth here; each verse links to the NASB on Bible Hub when you are online.</p></div>
<div className="panel"><div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
<select aria-label="Book" value={book} onChange={e=>go(e.target.value,1)}>{books.map(b=><option key={b.name}>{b.name}</option>)}</select>
<select aria-label="Chapter" value={ch} onChange={e=>setCh(+e.target.value)}>{Array.from({length:chapters},(_,i)=><option key={i} value={i+1}>Chapter {i+1}</option>)}</select>
<select aria-label="English text" value={tr} onChange={e=>setTr(e.target.value as any)}><option value="bsb">BSB (English)</option><option value="kjv">KJV (English)</option></select>
<label style={{display:'flex',alignItems:'center',gap:4}}><input type="checkbox" checked={orig} onChange={e=>setOrig(e.target.checked)}/>{isNT?'Greek':'Hebrew'}</label></div>
<input aria-label="Search the English text" placeholder="Search the whole Bible (3+ letters)…" value={q} onChange={e=>setQ(e.target.value)} style={{marginTop:8,width:'100%'}}/>
<div style={{display:'flex',gap:8,marginTop:8,flexWrap:'wrap'}}><button disabled={ch<=1} onClick={()=>setCh(ch-1)}>‹ Prev</button><button disabled={ch>=chapters} onClick={()=>setCh(ch+1)}>Next ›</button><a href={bibleHubUrl(`${book} ${ch}`)||'#'} target="_blank" rel="noopener noreferrer">Read {book} {ch} in the NASB on Bible Hub ↗</a></div></div>
{err&&<div className="panel">Could not load text: {err}. Open the app once online so the text can be stored.</div>}
{q.trim().length>=3?<div className="panel"><h2>{hits.length>=60?'First 60 matches':hits.length+' matches'}</h2>{hits.map(h=><p key={h.b+h.c+h.v}><a href="#" onClick={e=>{e.preventDefault();go(h.b,h.c)}}><b>{h.b} {h.c}:{h.v}</b></a> {h.t}</p>)}</div>:
<div className="panel"><h2>{book} {ch}</h2>{!main&&!err&&<p>Loading…</p>}{verses.map((t,i)=><div key={i} style={{marginBottom:10}}><p style={{margin:0}}><sup><a href={bibleHubUrl(`${book} ${ch}:${i+1}`)||'#'} target="_blank" rel="noopener noreferrer" title="NASB on Bible Hub">{i+1}</a></sup> {t}</p>{orig&&ov[i]&&<p lang={isNT?'grc':'he'} dir={isNT?'ltr':'rtl'} style={{margin:'2px 0 0',opacity:.85,fontSize:'1.05em'}}>{ov[i]}</p>}</div>)}</div>}
<div className="panel"><h2>Texts and licensing</h2><p>BSB: Berean Standard Bible, public domain (released by Bible Hub / Berean Bible). KJV: public domain. Hebrew: Open Scriptures Hebrew Bible (WLC), CC BY 4.0. Greek: SBL Greek New Testament, CC BY 4.0, © Society of Biblical Literature and Logos Bible Software. The NASB is copyrighted by The Lockman Foundation, so it is linked, not stored.</p></div></>}
