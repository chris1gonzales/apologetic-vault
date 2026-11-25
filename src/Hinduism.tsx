import {Ref} from './bibleLink';
import {StandardBanner} from './TorahQuran';
import {texts,primary,schools,doctrines,bhakti,practices,critique,method,tiers,reading,type SrcB,type Src,type Point,type Card} from './hinduData';
import './understandingText.css';
import './history.css';

const label=(b:SrcB)=>b==='checked'?'Checked at source':b==='secondary'?'Secondary only':'Verify';
function Badge({b}:{b:SrcB}){return <span className={'ut-badge ut-'+b}>{label(b)}</span>}
function Points({items}:{items:Point[]}){return <ul className="ch-points">{items.map((p,i)=><li key={i}><Badge b={p.b}/> {p.x}{p.n&&<small className="ch-n"> {p.n}</small>}</li>)}</ul>}
function Sources({items}:{items:Src[]}){return <><h3>Sources and checks</h3><ul className="ut-refs">{items.map((x,i)=><li key={i}><Badge b={x.b}/> <a href={x.u} target="_blank" rel="noopener noreferrer">{x.t} ↗</a>{x.n&&<> — {x.n}</>}</li>)}</ul></>}
function Legend(){return <div className="panel ch-legend"><strong>How to read the badges</strong><p><span className="ut-badge ut-checked">Checked at source</span> I opened the scholar’s, encyclopedia’s or translator’s own page. <span className="ut-badge ut-secondary">Secondary only</span> A reference work, a publisher description or an excerpt. <span className="ut-badge ut-verify">Verify</span> Sources disagree, or I could not confirm it.</p><p className="hint">Pages were read through a page-summary tool, so confirm any wording you quote against the linked source. This section describes what Hindu traditions teach, in their own scholars’ words. It does not endorse them. Scripture is the final standard (2 Timothy 3:16–17).</p></div>}
function Cards({items,openFirst}:{items:Card[],openFirst?:boolean}){return <>{items.map((c,i)=><details className="ut-card ch-card" key={c.id} open={openFirst&&i===0}><summary><h2>{c.title}</h2></summary>{c.intro&&<p>{c.intro}</p>}<Points items={c.points}/><Sources items={c.src}/></details>)}</>}
function Reading({only}:{only?:RegExp}){const items=only?reading.filter(r=>only.test(r.t)):reading;return <div className="panel"><h2>Reading</h2><p className="hint">“Not read” means I confirmed the book exists and found a catalogue, publisher or review page, but did not read the text. No claim on these pages rests on it.</p><ul className="ut-refs">{items.map(r=><li key={r.t}><strong>{r.t}</strong> — {r.w} <em>{r.read==='part'?'(Read in part.)':'(Not read.)'}</em>{r.u&&<> <a href={r.u} target="_blank" rel="noopener noreferrer">Link ↗</a></>}</li>)}</ul></div>}
const NAV:[string,string][]=[['hinduTexts','Texts'],['hinduSchools','Schools & doctrines'],['hinduBhakti','Bhakti'],['hinduPractice','Practices'],['hinduResponse','Reformed response']];
function SubNav({cur,onOpen}:{cur:string,onOpen:(p:string)=>void}){return <nav className="hub-bar" aria-label="Hinduism sections"><span className="hub-title">Hinduism</span><div className="hub-tabs">{NAV.map(([id,l])=><button key={id} className={id===cur?'active':''} aria-current={id===cur?'page':undefined} onClick={()=>onOpen(id)}>{l}</button>)}</div></nav>}

export default function Hinduism({view,onOpen}:{view:'texts'|'schools'|'bhakti'|'practice'|'response',onOpen:(p:string)=>void}){
if(view==='schools')return <>
<SubNav cur="hinduSchools" onOpen={onOpen}/>
<div className="page-head"><span className="eyebrow">HINDUISM</span><h1>Schools and doctrines</h1><p>The six classical systems, the three Vedānta schools, the Śaiva and tantric traditions, the devotional schools, and the core doctrines of brahman and ātman, karma, saṃsāra, mokṣa, māyā and avatāra. Each claim carries a badge.</p></div>
<StandardBanner compact/><Legend/>
<Cards items={schools} openFirst/><Cards items={doctrines}/></>;
if(view==='bhakti')return <>
<SubNav cur="hinduBhakti" onOpen={onOpen}/>
<div className="page-head"><span className="eyebrow">HINDUISM</span><h1>The Bhakti movement</h1><p>Devotion to a personal God, from the Tamil Āḻvār and Nāyaṉār poets to the later devotional schools. The nearest point of contact with the Christian language of grace, so it is worth reading carefully.</p></div>
<StandardBanner compact/><Legend/>
<Cards items={bhakti} openFirst/>
<p className="hint"><button className="ut-link" onClick={()=>onOpen('hinduResponse')}>See the response on surrender and grace</button></p></>;
if(view==='practice')return <>
<SubNav cur="hinduPractice" onOpen={onOpen}/>
<div className="page-head"><span className="eyebrow">HINDUISM</span><h1>Practices</h1><p>Worship (pūjā and darśan), image consecration, life-cycle rites (saṃskāra), pilgrimage, devotion and festivals. Flood’s textbook argues that Hinduism is best understood through practice, so this page matters as much as the doctrine pages.</p></div>
<StandardBanner compact/><Legend/>
<Cards items={practices} openFirst/>
<Reading only={/Practice|Hindu World|Flood, An/}/></>;
if(view==='response')return <>
<SubNav cur="hinduResponse" onOpen={onOpen}/>
<div className="page-head"><span className="eyebrow">HINDUISM</span><h1>A Reformed response</h1><p>Points of contact between Hindu teaching and Scripture, answered from the 1689 Confession and Van Til’s transcendental argument. Each point first states what Hindu sources say, with a badge, then the response from Scripture.</p></div>
<StandardBanner compact/><Legend/>
<div className="panel"><strong>About the response sections</strong><p>The “Reformed response” text is theological argument, not a historical claim, so it carries no badge. Test it against the Scripture passages linked in each section. The Hindu claim above it carries a badge for how well its source was checked.</p></div>
{critique.map((c,i)=><details className="ut-card ch-card" key={c.id} open={i===0}><summary><h2>{c.title}</h2></summary>
<p><Badge b={c.hinduB}/> <strong>What the sources say:</strong> {c.hindu}</p>
<p><strong>Read first in Scripture:</strong> {c.scripture.map((r,k)=><span key={r}>{k>0&&' · '}<Ref r={r}/></span>)}</p>
<p><strong>Reformed response:</strong> {c.response}</p><Sources items={c.src}/></details>)}
<div className="panel"><h2>Method in a conversation</h2>{method.map(m=><p key={m.h}><strong>{m.h}.</strong> {m.b}</p>)}</div>
<Reading only={/Bahnsen/}/>
<p className="hint"><button className="ut-link" onClick={()=>onOpen('logicArgumentation')}>Open Logic and TAG</button> · <button className="ut-link" onClick={()=>onOpen('confession1689')}>Open the 1689 Confession</button></p></>;
return <>
<SubNav cur="hinduTexts" onOpen={onOpen}/>
<div className="page-head"><span className="eyebrow">HINDUISM</span><h1>Texts and sources</h1><p>The Vedas, Upaniṣads, Gītā, epics and Purāṇas, with dates given as ranges, and two short primary passages. Hindu traditions do not share one canon. This hub uses primary texts in public-domain translation and scholarly sources, with reference works marked Secondary.</p></div>
<StandardBanner compact/><Legend/>
<Cards items={texts} openFirst/>
<div className="section-heading"><h2>Primary passages</h2></div>
{primary.map(q=><details className="ut-card ch-card" key={q.id}><summary><h2>{q.ref}</h2></summary>
<p><Badge b={q.b}/> <em>{q.tr}</em></p>
<blockquote className="ch-n">“{q.quote}”</blockquote>
<p>{q.note}</p><Sources items={q.src}/></details>)}
<div className="panel"><h2>How reliable are these sources?</h2>{tiers.map(t=><p key={t.h}><strong>{t.h}.</strong> {t.b}</p>)}</div>
<Reading only={/^(?!.*Bahnsen)/}/></>}
