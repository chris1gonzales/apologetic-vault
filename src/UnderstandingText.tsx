import {useState} from 'react';
import {Ref} from './bibleLink';
import {banner,terms,closing,torahScripture,torah,challenges,unconfirmed,type Badge,type Src} from './understandingTextData';
import './understandingText.css';
import './logicArgumentation.css';
const LBL:Record<Badge,string>={checked:'Checked at source',secondary:'Secondary only',verify:'Verify'};
const B=({b}:{b:Badge})=><span className={'ut-badge ut-'+b}>{LBL[b]}</span>;
const Links=({s,onOpen}:{s:Src[];onOpen?:(p:any)=>void})=><ul className="ut-src">{s.map(([n,u])=><li key={u}>{u.startsWith('#')?<button className="ut-link" onClick={()=>onOpen&&onOpen(u.slice(1))}>{n}</button>:<a href={u} target="_blank" rel="noopener noreferrer">{n} ↗</a>}</li>)}</ul>;
export default function UnderstandingText({onOpen}:{onOpen?:(p:any)=>void}){
const[tab,setTab]=useState<'terms'|'torah'>('terms');
return <section className="vl-module ut-module"><div className="page-head"><span className="eyebrow">MANUSCRIPTS · TERMS · TORAH TEXT-HISTORY</span><h1>Understanding the text</h1><p>What a manuscript, a codex, a textual witness and a textual variant are, with examples you can open, and how the Torah text has come down to us.</p></div>
<div className="vl-callout"><strong>Scripture is the highest and unmoving standard</strong><p>{banner}</p></div>
<div className="vl-tabs" role="tablist" aria-label="Sections"><button role="tab" aria-selected={tab==='terms'} className={tab==='terms'?'active':''} onClick={()=>setTab('terms')}>Four terms</button><button role="tab" aria-selected={tab==='torah'} className={tab==='torah'?'active':''} onClick={()=>setTab('torah')}>Torah text-history</button></div>
{tab==='terms'&&<div className="vl-article vl-wide">{terms.map(t=><article key={t.id} className="ut-card"><h2>{t.term} <B b={t.badge}/></h2><p>{t.def}</p><p className="ut-note"><strong>How it differs:</strong> {t.distinct}</p>{t.caution&&<p className="hint">{t.caution}</p>}<Links s={t.src} onOpen={onOpen}/><h3>Examples</h3>{t.examples.map(e=><div key={e.name} className="ut-ex"><strong>{e.name}</strong> <B b={e.badge}/><p>{e.note}</p><Links s={e.src} onOpen={onOpen}/></div>)}</article>)}<div className="vl-caution"><p>{closing}</p></div></div>}
{tab==='torah'&&<div className="vl-article vl-wide"><h2>Torah text-history</h2><p>From Scripture’s own claims to the medieval codices. Each step is badged and linked.</p><ol className="ut-timeline">{torah.map(t=><li key={t.id}><small>{t.when}</small><h3>{t.title} <B b={t.badge}/></h3>{t.id==='t-scripture'&&<ul className="ut-refs">{torahScripture.map(r=><li key={r.ref}><Ref r={r.ref}/>: {r.what}</li>)}</ul>}<p>{t.body}</p><Links s={t.src}/></li>)}</ol>
<h2>Challenges answered</h2>{challenges.map(c=><article key={c.id} className="ut-card"><h3>{c.title} <B b={c.badge}/></h3><p>{c.body}</p><Links s={c.src}/></article>)}
<p className="hint">{unconfirmed}</p>{onOpen&&<p><button className="secondary" onClick={()=>onOpen('manuscriptCriticism')}>OT & Qur’an manuscripts (case studies)</button></p>}</div>}
</section>}
