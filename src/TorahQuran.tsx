import {useEffect,useState} from 'react';
import {standard,accounts,tahrif,manuscripts,method,links} from './torahQuranData';
import {Txt} from './LogicLab';
import './logicArgumentation.css';
const KEY='veritas-torah-quran-notes-v1';
type Tab='standard'|'accounts'|'manuscripts'|'method';
export function StandardBanner({compact}:{compact?:boolean}){return <div className="vl-callout"><strong>Scripture is the highest and unmoving standard</strong><p>{compact?'The Confession is a subordinate standard; it must always align with, and be corrected by, Scripture.':standard.lead}</p></div>}
export default function TorahQuran(){
const[tab,setTab]=useState<Tab>('standard');const[acc,setAcc]=useState(accounts[0].id);const[side,setSide]=useState<'All'|'Torah'|'Qur’an'>('All');
const[notes,setNotes]=useState<Record<string,string>>(()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{return {}}});
useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(notes))}catch{}},[notes]);
const a=accounts.find(x=>x.id===acc)||accounts[0];
const tabs:[Tab,string][]=[['standard','The standard'],['accounts','Accounts compared'],['manuscripts','Manuscripts'],['method','Method & links']];
return <section className="vl-module"><div className="page-head"><span className="eyebrow">TORAH · QUR’AN · MANUSCRIPTS</span><h1>Torah and Qur’anic Accounts</h1><p>Compare the Qur’an’s accounts of earlier prophets with the Torah, and look at the manuscript evidence for each, always judged by Scripture.</p></div>
<StandardBanner/>
<div className="vl-tabs" role="tablist" aria-label="Sections">{tabs.map(([k,t])=><button key={k} role="tab" aria-selected={tab===k} className={tab===k?'active':''} onClick={()=>setTab(k)}>{t}</button>)}</div>
{tab==='standard'&&<div className="vl-article vl-wide"><h2>{standard.title}</h2>{standard.tiers.map(([t,d])=><div key={t} className="vl-term"><strong>{t}</strong><p><Txt t={d}/></p></div>)}<h3>Cautions that keep the method honest</h3><ul>{standard.cautions.map((c,i)=><li key={i}><Txt t={c}/></li>)}</ul></div>}
{tab==='accounts'&&<div className="vl-layout"><div className="vl-nav" role="tablist">{accounts.map(x=><button key={x.id} className={x.id===acc?'active':''} onClick={()=>setAcc(x.id)}><small>{x.torah}</small><strong>{x.topic}</strong></button>)}</div>
<div className="vl-article"><h2>{a.topic}</h2><p><strong>Torah:</strong> <Txt t={a.torah}/> · <strong>Qur’an:</strong> {a.quran}</p><h3>Where the accounts agree</h3><p>{a.agree}</p><h3>Where they differ</h3><ul>{a.differ.map((d,i)=><li key={i}><Txt t={d}/></li>)}</ul><h3>The Muslim response</h3><p>{a.muslim}</p><div className="vl-caution"><strong>Judged by Scripture.</strong> <Txt t={a.scripture}/></div>
<div className="vl-notes"><label htmlFor="tq-note">Your notes (saved in this browser)</label><textarea id="tq-note" rows={4} value={notes[a.id]||''} onChange={e=>setNotes(n=>({...n,[a.id]:e.target.value}))}/></div></div></div>}
{tab==='manuscripts'&&<div className="vl-article vl-wide"><h2>{tahrif.title}</h2><p>{tahrif.intro}</p><ul>{tahrif.verses.map(([r,s])=><li key={r}><strong>{r}</strong>: {s}</li>)}</ul><h3>The Muslim positions</h3><p>{tahrif.muslim}</p><div className="vl-caution"><strong>The pressure point.</strong> {tahrif.pressure}</div>
<h2>Manuscript timeline</h2><p>Dates are scholarly or scientific ranges and are under discussion; check the cited institutions.</p>
<div className="vl-tabs" role="group" aria-label="Filter">{(['All','Torah','Qur’an'] as const).map(s=><button key={s} className={side===s?'active':''} onClick={()=>setSide(s)}>{s}</button>)}</div>
<div className="vl-glossary">{manuscripts.filter(m=>side==='All'||m.side===side).map(m=><div key={m.id} className="vl-term"><strong>{m.name}</strong><span className="vl-pill">{m.side}</span><p><em>Date:</em> {m.date}</p><p>{m.what}</p><p className="vl-eg">{m.note}</p>{m.url&&<p><a href={m.url} target="_blank" rel="noopener noreferrer">Open source ↗</a></p>}</div>)}</div></div>}
{tab==='method'&&<div className="vl-article vl-wide"><h2>Method</h2><ol>{method.map((m,i)=><li key={i}><Txt t={m}/></li>)}</ol><h2>Sources (links open on the internet)</h2><div className="vl-sources">{links.map(([n,u,d])=><div key={u}><a href={u} target="_blank" rel="noopener noreferrer">{n} ↗</a><p>{d}</p></div>)}</div><p className="hint">Manuscript images remain with their institutions and are linked, not reproduced. Verify dates and links against the institution before citing.</p></div>}
</section>}
