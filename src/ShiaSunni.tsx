import {Ref} from './bibleLink';
import {StandardBanner} from './TorahQuran';
import {outline,imamate,ghadir,verses,sources,reply,notCovered,reading,type SrcB,type Src,type Point,type Card} from './shiaSunniData';
import './understandingText.css';
import './history.css';

const label=(b:SrcB)=>b==='checked'?'Checked at source':b==='secondary'?'Secondary only':'Verify';
function Badge({b}:{b:SrcB}){return <span className={'ut-badge ut-'+b}>{label(b)}</span>}
function Points({items}:{items:Point[]}){return <ul className="ch-points">{items.map((p,i)=><li key={i}><Badge b={p.b}/> {p.x}{p.n&&<small className="ch-n"> {p.n}</small>}</li>)}</ul>}
function Sources({items}:{items:Src[]}){return <><h3>Sources and checks</h3><ul className="ut-refs">{items.map((x,i)=><li key={i}><Badge b={x.b}/> <a href={x.u} target="_blank" rel="noopener noreferrer">{x.t} ↗</a>{x.n&&<> — {x.n}</>}</li>)}</ul></>}
function Cards({items,openFirst}:{items:Card[],openFirst?:boolean}){return <>{items.map((c,i)=><details className="ut-card ch-card" key={c.id} open={openFirst&&i===0}><summary><h2>{c.title}</h2></summary>{c.intro&&<p>{c.intro}</p>}<Points items={c.points}/><Sources items={c.src}/></details>)}</>}
function Legend(){return <div className="panel ch-legend"><strong>How to read the badges</strong><p><span className="ut-badge ut-checked">Checked at source</span> I opened the scholar’s or encyclopedia’s own text. <span className="ut-badge ut-secondary">Secondary only</span> A thesis, excerpt or summary of other scholars. <span className="ut-badge ut-verify">Verify</span> Not read, or sources disagree.</p><p className="hint">Pages were read through a page-summary tool, so confirm any wording you quote against the linked source. This page describes what each side holds. It does not take sides in the quarrel over the caliphate, and it does not endorse either. Scripture is the final standard (2 Timothy 3:16–17).</p></div>}

export default function ShiaSunni({onOpen}:{onOpen:(p:string)=>void}){
return <>
<div className="page-head"><span className="eyebrow">ISLAM · SUNNI AND SHIA</span><h1>Sunni and Shia: where they differ</h1><p>Both sides share one Qurʾan and disagree about who was to lead the community after Muḥammad, what the leader is, and what several verses mean. Each point is badged for how well I checked its source. Both sides are described in their own scholars’ words wherever the sources allowed it.</p></div>
<StandardBanner compact/><Legend/>
<div className="panel"><strong>Read this first</strong><p>I read two Encyclopaedia Iranica entries in full, Madelung’s Introduction and parts of three other chapters in <em>The Study of Shiʿi Islam</em>, and one Sunni commentary on one verse. I did not read the hadith reports themselves, and I found no Sunni commentary I could read for four of the five verses below. Where a side is thin, the page says so and marks it Verify. The one Sunni commentary read is a single author, not “the Sunni view”.</p></div>
<div className="section-heading"><h2>The succession</h2></div>
<Cards items={outline} openFirst/>
<div className="section-heading"><h2>The imamate</h2></div>
<Cards items={imamate}/>
<div className="section-heading"><h2>Ghadīr Khumm</h2></div>
<Cards items={ghadir}/>
<div className="section-heading"><h2>The disputed verses</h2></div>
<p className="hint">Each verse is shown with the Shiʿi reading and the Sunni reading side by side. Open the Qurʾan link for the verse, or use the <button className="ut-link" onClick={()=>onOpen('phraseQuran')}>Phrase search</button> to read Pickthall’s wording.</p>
{verses.map(v=><details className="ut-card ch-card" key={v.id}><summary><h2>{v.ref}</h2></summary>
<p>{v.text} <a href={v.url} target="_blank" rel="noopener noreferrer">Read on Quran.com ↗</a></p>
<p><Badge b={v.shiaB}/> <strong>Shiʿi reading:</strong> {v.shia}</p>
<p><Badge b={v.sunniB}/> <strong>Sunni reading:</strong> {v.sunni}</p>
{v.note&&<p className="hint">{v.note}</p>}<Sources items={v.src}/></details>)}
<div className="section-heading"><h2>The sources for the early period</h2></div>
<Cards items={sources}/>
<div className="section-heading"><h2>A Reformed response</h2></div>
<div className="panel"><strong>About the response sections</strong><p>The “Reformed response” text is theological argument, not a historical claim, so it carries no badge. Test it against the Scripture passages linked in each section and the Confession. The claim above each response carries a badge for how well its source was checked.</p></div>
{reply.map((c,i)=><details className="ut-card ch-card" key={c.id} open={i===0}><summary><h2>{c.title}</h2></summary>
<p><Badge b={c.claimB}/> <strong>What the sources say:</strong> {c.claim}</p>
<p><strong>Read first in Scripture:</strong> {c.scripture.map((r,k)=><span key={r}>{k>0&&' · '}<Ref r={r}/></span>)}</p>
<p><strong>Reformed response:</strong> {c.response}</p></details>)}
<div className="panel"><h2>Not covered or not read</h2><ul className="ch-points">{notCovered.map((x,i)=><li key={i}><Badge b="verify"/> {x}</li>)}</ul></div>
<div className="panel"><h2>Reading</h2><p className="hint">“Not read” means I confirmed the book exists and found a catalogue or publisher page, but did not read the text. No claim on this page rests on it.</p><ul className="ut-refs">{reading.map(r=><li key={r.t}><strong>{r.t}</strong> — {r.w} <em>{r.read==='part'?'(Read in part.)':'(Not read.)'}</em>{r.u&&<> <a href={r.u} target="_blank" rel="noopener noreferrer">Link ↗</a></>}</li>)}</ul></div>
<p className="hint"><button className="ut-link" onClick={()=>onOpen('quran')}>Open Qurʾanic research</button> · <button className="ut-link" onClick={()=>onOpen('hadith')}>Open Hadith</button> · <button className="ut-link" onClick={()=>onOpen('confession1689')}>Open the 1689 Confession</button></p>
</>}
