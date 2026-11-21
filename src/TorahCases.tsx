import {useEffect,useState} from 'react';
import {comparisons} from './quranComparisons';
import {Txt} from './LogicLab';
import {parseQuran} from './TorahParallels';
const NK='veritas-comparison-notes';
function getNotes():Record<string,string>{try{return JSON.parse(localStorage.getItem(NK)||'{}')||{}}catch{return {}}}
function NoteBox({id}:{id:string}){const[v,setV]=useState(()=>getNotes()[id]||'');
return <div className="vl-notes"><label htmlFor={'cn-'+id}>Your research notes (saved in this browser)</label><textarea id={'cn-'+id} rows={4} value={v} onChange={e=>{setV(e.target.value);try{const n=getNotes();n[id]=e.target.value;localStorage.setItem(NK,JSON.stringify(n))}catch{}}}/></div>}
export function CaseMore({id}:{id:string}){const c=comparisons.find(x=>x.id===id);if(!c)return null;
return <div className="vl-term"><strong>Further research notes</strong> <span className="vl-pill">{c.status}</span><p><strong>Research question:</strong> {c.question}</p><p><strong>Muslim interpretive perspective:</strong> {c.muslim}</p><p><strong>Confessional Reformed perspective:</strong> <Txt t={c.christian}/></p><p><strong>Provisional assessment:</strong> {c.assessment}</p><p><strong>Primary texts and research leads:</strong></p><ul>{c.reading.map(r=><li key={r}>{r}</li>)}</ul><p className="hint">Editorial research summaries, not sourced quotations. Verify cited texts and editions before publication.</p><NoteBox id={id}/></div>}
const SHOWN=['trinity','creation','intercession','religion'];
export default function Cases({onOpen}:{onOpen?:(p:any)=>void}){
const list=comparisons.filter(c=>SHOWN.includes(c.id));const[sel,setSel]=useState(list[0].id);const[q,setQ]=useState<string[][]|null>(null);
useEffect(()=>{let on=true;fetch('/corpus/pickthall.json').then(r=>r.json()).then(d=>{if(on)setQ(d)}).catch(()=>{});return()=>{on=false}},[]);
const c=list.find(x=>x.id===sel)||list[0];
return <div className="vl-layout"><div className="vl-nav" role="tablist">{list.map(x=><button key={x.id} className={x.id===sel?'active':''} onClick={()=>setSel(x.id)}><small>{x.theme} · {x.status}</small><strong>{x.title}</strong></button>)}</div>
<div className="vl-article"><h2>{c.title}</h2><p><span className="vl-pill">{c.theme}</span> <span className="vl-pill">{c.status}</span></p><p><strong>Research question:</strong> {c.question}</p>
{c.id==='trinity'&&onOpen&&<p><button className="secondary" onClick={()=>onOpen('trinity4171')}>Open the full study of Qur’an 4:171</button> <button className="secondary" onClick={()=>onOpen('christologyIslam')}>Open the Deity of Christ study</button></p>}
<h3>Qur’an (Pickthall)</h3>{!q&&<p className="hint">Loading…</p>}{q&&parseQuran(c.quran.join('; '),q,null).map(s=><blockquote className="tq-text" key={s.label}><strong>{s.label}</strong><p>{s.vs.map(([n,t])=><span key={n}><b>{n}</b> {t} </span>)}</p></blockquote>)}
<h3>Bible references</h3><p><Txt t={c.bible.join('; ')}/></p>
<h3>Muslim interpretive perspective</h3><p>{c.muslim}</p><h3>Confessional Reformed perspective</h3><p><Txt t={c.christian}/></p><div className="vl-caution"><strong>Provisional assessment.</strong> {c.assessment}</div>
<h3>Primary texts and research leads</h3><ul>{c.reading.map(r=><li key={r}>{r}</li>)}</ul><NoteBox id={c.id}/></div></div>}
