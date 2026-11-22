import {contradictions,type Contra} from './tqContradictions';
import SrcLink from './SrcLink';
import {Txt} from './LogicLab';
const st={checked:'Excerpt seen at the source',secondary:'Secondary report',verify:'Verify before citing'} as const;
export const countFor=(id:string)=>contradictions.filter(c=>c.acct===id).length;
function Card({c}:{c:Contra}){return <details className="vl-term tq-contra"><summary><strong>{c.title}</strong> <span className="vl-pill">{c.type}</span> <span className="vl-pill">{c.strength}</span></summary>
<p className="hint"><strong>Torah and Prophets:</strong> {c.tref} · <strong>Qur’an:</strong> {c.qref}</p>
<p><strong>The Bible says.</strong> <Txt t={c.t}/></p><p><strong>The Qur’an says.</strong> {c.q}</p>
<div className="tq-cols"><div className="tq-col"><h4>Bible (KJV)</h4>{c.bible.map(([r,t])=><blockquote className="tq-text" key={r}><strong><Txt t={r}/></strong><p>{t}</p></blockquote>)}</div><div className="tq-col"><h4>Qur’an (Pickthall)</h4>{c.quran.map(([r,t])=><blockquote className="tq-text" key={r}><strong>{r}</strong><p>{t}</p></blockquote>)}</div></div>
<h4>How Muslims explain it</h4><ul>{c.muslim.map((m,i)=><li key={i}><strong>{m.w}.</strong> {m.t} <em>({st[m.s]})</em></li>)}</ul>
<div className="vl-caution"><strong>Judged by Scripture.</strong> <Txt t={c.assess}/></div>
<p><strong>Manuscript test of taḥrīf.</strong> {c.mss}</p>
<p><strong>Sources to check:</strong> <SrcLink ids={c.src}/></p></details>}
export default function ContraCards({acct}:{acct:string}){const list=contradictions.filter(c=>c.acct===acct);if(!list.length)return null;
return <><h3>Contradictions in this account ({list.length})</h3><p className="hint">Each card sets the Bible’s wording against the Qur’an’s, lists how Muslims explain the difference, and says how strong the conflict is: a direct conflict, a different detail, an addition that Scripture does not contradict, or one that depends on how the Arabic is read. Tap a card to open it.</p>{list.map(c=><Card key={c.id} c={c}/>)}</>}
export function ContraIndex({onPick,names}:{onPick:(acct:string)=>void,names:Record<string,string>}){return <details className="vl-term"><summary><strong>All contradictions ({contradictions.length})</strong> <span className="hint">grouped by account</span></summary><ul>{contradictions.map(c=><li key={c.id}><button className="text-btn" onClick={()=>onPick(c.acct)}>{c.title}</button> <span className="hint">{names[c.acct]} · {c.type} · {c.strength}</span></li>)}</ul></details>}
