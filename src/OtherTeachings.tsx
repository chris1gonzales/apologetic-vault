import {useMemo,useState} from 'react';
import {Search} from 'lucide-react';
import {allOT,TRADS,type OT} from './otherTeachingsData';
import './otherTeachings.css';
type T='rc'|'lds'|'jw';
const statusText={checked:'Checked at source',secondary:'Secondary only',verify:'Verify before use'};
const hub=(ref:string,book:string)=>{const m=ref.match(/^(\d+)(?::(\d+))?/);if(!m)return null;const slug=book.toLowerCase().replace(/\s+/g,'_').replace(/^psalm$/,'psalms');return 'https://biblehub.com/nasb/'+slug+'/'+m[1]+(m[2]?'-'+m[2]:'')+'.htm'};
function scriptureLinks(s:string){let book='';return s.split(/;\s*/).filter(Boolean).map(t=>{const full=t.match(/^((?:\d\s)?[A-Za-z]+(?:\s[A-Za-z]+)*)\s+(\d+(?::.*)?)$/);let url:string|null=null;if(full){book=full[1];url=hub(full[2],book)}else if(book&&/^\d/.test(t)){url=hub(t,book)}return url?<a key={t} href={url} target="_blank" rel="noopener noreferrer">{(full?t:book+' '+t)}</a>:<span key={t}>{t}</span>})}
const intro:Record<T,string>={rc:'Rome’s teaching is stated as the Catechism, Trent and the councils state it, then set beside Scripture. Each entry shows whether its source was read.',lds:'LDS teaching is stated from the church’s own manuals and scriptures, then tested by the Bible. Scripture is the standard, and the Book of Mormon is examined by it.',jw:'Witness teaching is stated from jw.org and the Watchtower library, then tested by the Bible. Their own translation is compared with the Greek and Hebrew where it matters.'};
export default function OtherTeachings({trad,nav}:{trad:T;nav:(p:any)=>void}){
const [area,setArea]=useState('All');const [kind,setKind]=useState('All');const [q,setQ]=useState('');
const [notes,setNotes]=useState<Record<string,string>>(()=>{try{return JSON.parse(localStorage.getItem('veritas-comparison-notes')||'{}')}catch{return {}}});
const full=TRADS.find(t=>t.id===trad)!.full;
const rows=useMemo(()=>allOT.filter(r=>r.trad===trad),[trad]);
const areas=useMemo(()=>Array.from(new Set(rows.map(r=>r.area))),[rows]);
const nk=(r:OT)=>full+r.topic;
const save=(k:string,v:string)=>{const n={...notes,[k]:v};setNotes(n);try{localStorage.setItem('veritas-comparison-notes',JSON.stringify(n))}catch{}};
const words=q.toLowerCase().split(/\s+/).filter(Boolean);
const shown=rows.filter(r=>(area==='All'||r.area===area)&&(kind==='All'||r.kind===kind)&&words.every(w=>(r.topic+' '+r.teaching+' '+r.scripture+' '+r.response+' '+r.cites).toLowerCase().includes(w)));
const c=(s:string)=>rows.filter(r=>r.status===s).length;
const go=(id:T)=>{nav(id==='rc'?'catholic':id)};
return <div className="ot"><div className="ot-tabs" role="tablist" aria-label="Tradition">{TRADS.map(t=><button key={t.id} role="tab" aria-selected={t.id===trad} className={t.id===trad?'active':''} onClick={()=>go(t.id as T)}>{t.label}</button>)}</div>
<div className="page-head"><span className="eyebrow">OTHER TEACHINGS · {full.toUpperCase()}</span><h1>{full}</h1><p>{intro[trad]}</p><p className="ot-count">{rows.length} entries · {c('checked')} checked · {c('secondary')} secondary · {c('verify')} verify</p></div>
<div className="searchbar ot-bar"><Search size={18}/><input name="search-1" autoComplete="off" type="search" value={q} onChange={e=>setQ(e.target.value)} placeholder={'Search '+full+'…'} aria-label={'Search '+full}/></div>
<div className="ot-chips"><button className={area==='All'?'active':''} onClick={()=>setArea('All')}>All <span>{rows.length}</span></button>{areas.map(a=><button key={a} className={area===a?'active':''} onClick={()=>setArea(a)}>{a} <span>{rows.filter(r=>r.area===a).length}</span></button>)}</div>
<div className="ot-chips ot-kinds">{['All','Doctrine','Practice'].map(k=><button key={k} className={kind===k?'active':''} onClick={()=>setKind(k)}>{k==='All'?'Doctrines and practices':k+'s'}</button>)}</div>
<p className="hint">{shown.length} of {rows.length} entries · Links go to NASB on Bible Hub and to the church’s own publications (internet needed) · Notes stay in this browser</p>
<div className="ot-list">{shown.map((r,i)=><details className="ot-card" key={r.id} open={i===0&&!q&&area==='All'&&kind==='All'}><summary><span className="ot-title"><strong>{r.topic}</strong><small>{r.kind} · {r.area}</small></span><span className={'ot-badge ot-'+r.status}>{statusText[r.status]}</span></summary>
<div className="ot-body"><h3>What is taught</h3><p>{r.teaching}</p>{r.cites&&<><h3>Source</h3><p><a href={r.source} target="_blank" rel="noopener noreferrer">{r.cites} ↗</a></p></>}
<h3>Scripture that opposes it <small>(NASB, Bible Hub)</small></h3><p className="ot-refs">{scriptureLinks(r.scripture).map((e,j)=><span key={j}>{e}</span>)}</p>
<h3>Response</h3><p>{r.response}</p>{r.note&&<p className="ot-note"><strong>Stated fairly: </strong>{r.note}</p>}
<label className="ot-notes">My notes<textarea name="add-observations-greek-or-hebr-2" rows={3} value={notes[nk(r)]||''} onChange={e=>save(nk(r),e.target.value)} placeholder="Add observations, Greek or Hebrew notes, citations…"/></label></div></details>)}</div>
{!shown.length&&<p className="empty">No entries match. Try fewer words or clear the filters.</p>}
<div className="panel"><h3>Method</h3><p>Each tradition’s claim is stated in its own terms and tied to a source, then tested by Scripture, the final and unmoving standard. The 1689 Confession is cited as a subordinate summary of what Scripture teaches. Status tells you how far an entry has been checked: checked means the source page was read, secondary means only secondhand material was seen, and verify means the claim and link need checking before use. Entries are concise research summaries, not full statements of any tradition.</p></div></div>}
