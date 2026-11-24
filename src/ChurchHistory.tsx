import {Ref} from './bibleLink';
import {StandardBanner} from './TorahQuran';
import {councils,events,baptist,tiers,reading,type SrcB,type Src,type Point} from './historyData';
import './understandingText.css';
import './history.css';

const label=(b:SrcB)=>b==='checked'?'Checked at source':b==='secondary'?'Secondary only':'Verify';
function Badge({b}:{b:SrcB}){return <span className={'ut-badge ut-'+b}>{label(b)}</span>}
function Points({items}:{items:Point[]}){return <ul className="ch-points">{items.map((p,i)=><li key={i}><Badge b={p.b}/> {p.x}{p.n&&<small className="ch-n"> {p.n}</small>}</li>)}</ul>}
function Sources({items,onOpen}:{items:Src[],onOpen?:(p:string)=>void}){return <><h3>Sources and checks</h3><ul className="ut-refs">{items.map((x,i)=><li key={i}><Badge b={x.b}/> {x.u.startsWith('#')?<button className="ut-link" onClick={()=>onOpen&&onOpen(x.u.slice(1))}>{x.t}</button>:<a href={x.u} target="_blank" rel="noopener noreferrer">{x.t} ↗</a>}{x.n&&<> — {x.n}</>}</li>)}</ul></>}
function Legend(){return <div className="panel ch-legend"><strong>How to read the badges</strong><p><span className="ut-badge ut-checked">Checked at source</span> I opened the primary text or the scholar’s own page. <span className="ut-badge ut-secondary">Secondary only</span> A reference work, a church host or a summary. <span className="ut-badge ut-verify">Verify</span> Sources disagree, or I could not confirm it.</p><p className="hint">Pages were read through a page-summary tool, so confirm any wording you quote against the linked source. Councils and confessions are subordinate to Scripture (2 Timothy 3:16–17). Nothing here ranks a manuscript, a creed or a council above the Bible.</p></div>}

export default function ChurchHistory({view,onOpen}:{view:'councils'|'baptist',onOpen:(p:string)=>void}){
if(view==='baptist')return <>
<div className="page-head"><span className="eyebrow">HISTORICAL THEOLOGY</span><h1>The Baptist line</h1><p>From the English Separatists through the First London Confession (1644) to the Second London Confession (1677, adopted 1689), and how the 1689 relates to Westminster and Savoy. Each claim carries a badge.</p></div>
<StandardBanner compact/>
<Legend/>
{baptist.map(c=><details className="ut-card ch-card" key={c.id} open={c.id==='origins'}><summary><h2>{c.title}</h2></summary><Points items={c.points}/><Sources items={c.src} onOpen={onOpen}/></details>)}
<div className="panel"><h2>Reading</h2><ul className="ut-refs">{reading.filter(r=>/Baptist|Judicious|Vindication/.test(r.t)).map(r=><li key={r.t}><strong>{r.t}</strong> — {r.w}</li>)}</ul></div>
<p className="hint">The 1689 text with proof texts is in this app. <button className="ut-link" onClick={()=>onOpen('confession1689')}>Open the 1689 Confession</button></p></>;
return <>
<div className="page-head"><span className="eyebrow">HISTORICAL THEOLOGY</span><h1>Councils, heresies and the Fathers</h1><p>Nicaea (325), Constantinople (381), Ephesus (431) and Chalcedon (451), with the errors each answered and the Fathers who answered them. Each council lists Scripture first, then what it decided, with a badge on every claim.</p></div>
<StandardBanner compact/>
<Legend/>
{councils.map((c,i)=><details className="ut-card ch-card" key={c.id} open={i===0}><summary><h2>{c.name} · {c.year}</h2></summary>
<p className="ch-meta"><strong>Place:</strong> {c.place}. <strong>Answered:</strong> {c.answered}</p>
<p><strong>Read first in Scripture:</strong> {c.scripture.map((r,k)=><span key={r}>{k>0&&' · '}<Ref r={r}/></span>)}</p>
<Points items={c.points}/><Sources items={c.src}/></details>)}
<div className="section-heading"><h2>Heresies and the Fathers who answered them</h2></div>
<ol className="ut-timeline">{events.map(e=><li key={e.id}><small>{e.when}</small><h3>{e.title} <Badge b={e.b}/></h3><p>{e.body}</p>{e.fathers&&<p className="ch-n"><strong>Answered by:</strong> {e.fathers}</p>}<ul className="ut-refs">{e.src.map((s,i)=><li key={i}><Badge b={s.b}/> <a href={s.u} target="_blank" rel="noopener noreferrer">{s.t} ↗</a>{s.n&&<> — {s.n}</>}</li>)}</ul></li>)}</ol>
<div className="panel"><h2>How reliable are these sources?</h2>{tiers.map(t=><p key={t.h}><strong>{t.h}.</strong> {t.b}</p>)}</div>
<div className="panel"><h2>Reading</h2><ul className="ut-refs">{reading.map(r=><li key={r.t}><strong>{r.t}</strong> — {r.w}</li>)}</ul></div>
<p className="hint"><button className="ut-link" onClick={()=>onOpen('confessions')}>Open the Creeds and Confessions library</button> · <button className="ut-link" onClick={()=>onOpen('history')}>Open the Historical Theology studies</button></p></>}
