import {useEffect,useMemo,useState} from 'react';
import {glossary,inductionKinds,faultyInduction,inductionPresup,primer,dialogues,levelQs,levelNames,builder} from './logicLabData';
import {Ref} from './bibleLink';
const KEY='veritas-logic-lab-progress-v1';
const BKEY='veritas-logic-lab-builder-v1';
function load<T>(k:string,d:T):T{try{const v=JSON.parse(localStorage.getItem(k)||'null');return v??d}catch{return d}}
const refRe=/((?:[123] )?[A-Z][a-z]+(?: of [A-Z][a-z]+)? \d+(?::\d+(?:[–-]\d+)?)?)/g;
export function Txt({t}:{t:string}){const parts=t.split(refRe);return <>{parts.map((p,i)=>i%2?<Ref key={i} r={p}/>:p)}</>}
export function LogicStart(){
const[q,setQ]=useState('');const[group,setGroup]=useState('All');
const groups=['All',...Array.from(new Set(glossary.map(g=>g.group)))];
const list=useMemo(()=>glossary.filter(g=>(group==='All'||g.group===group)&&(g.term+' '+g.meaning+' '+g.example).toLowerCase().includes(q.toLowerCase())),[q,group]);
return <div className="vl-article vl-wide">
<div className="vl-callout"><strong>Start here</strong><p>Plain-language explanations with simple examples. Each idea builds on the one before it. Scripture is the final authority; logic is a gift of God for thinking His thoughts after Him.</p></div>
{primer.map(p=><section key={p.id} className="vl-lesson"><h3>{p.title}</h3><p className="vl-plain"><strong>In plain words:</strong> {p.plain}</p>{p.body.map((b,i)=><p key={i}><Txt t={b}/></p>)}</section>)}
<h2>Worked conversations</h2><p>Short examples of the method in a courteous, Scripture-grounded style (1 Peter 3:15).</p>
{dialogues.map(d=><div key={d.id} className="vl-dialogue"><h3>{d.title}</h3>{d.lines.map((l,i)=><p key={i} className={'vl-line vl-'+l.who.toLowerCase()}><strong>{l.who==='Note'?'Method':l.who}:</strong> <Txt t={l.text}/></p>)}</div>)}
<h2>Glossary</h2>
<div className="searchbar"><input aria-label="Search glossary" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search terms, meanings, examples…"/></div>
<div className="vl-tabs" role="group" aria-label="Glossary group">{groups.map(g=><button key={g} className={g===group?'active':''} onClick={()=>setGroup(g)}>{g}</button>)}</div>
<div className="vl-glossary">{list.map(g=><div key={g.term} className="vl-term"><strong>{g.term}</strong><span className="vl-pill">{g.group}</span><p>{g.meaning}</p><p className="vl-eg"><em>Example:</em> {g.example}</p></div>)}{!list.length&&<p className="empty">No matching terms.</p>}</div>
</div>}
export function LogicInduction(){
const[open,setOpen]=useState<string|null>(null);
return <div className="vl-article vl-wide">
<div className="vl-callout"><strong>Induction in plain words</strong><p>Induction reasons from cases you have seen to a conclusion that is <em>probably</em> true. It never guarantees the result the way deduction does. Strong inductions use enough, representative cases; weak ones do not.</p></div>
<h2>Five kinds of inductive reasoning</h2>
<div className="vl-glossary">{inductionKinds.map(k=><div key={k.id} className="vl-term"><strong>{k.name}</strong><p>{k.plain}</p><p className="vl-eg"><em>Example:</em> {k.example}</p><p><em>Strong when:</em> {k.strong}</p></div>)}</div>
<h2>How to judge an induction</h2>
<ol><li>How many cases? More is usually stronger.</li><li>Are they representative, or picked to fit?</li><li>Were counter-examples counted?</li><li>For causes: did the cause come first, and are other causes ruled out?</li><li>For analogies: are the shared features relevant?</li><li>Is the conclusion stated as “probably,” not “certainly”?</li></ol>
<h2>Incorrect processes of induction</h2><p>Tap an item to see why it fails and how to repair it.</p>
<div className="vl-glossary">{faultyInduction.map(f=><div key={f.id} className="vl-term"><button className="vl-toggle" aria-expanded={open===f.id} onClick={()=>setOpen(open===f.id?null:f.id)}><strong>{f.name}</strong></button><p>{f.meaning}</p><p className="vl-eg"><em>Example:</em> {f.example}</p>{open===f.id&&<><p><em>Why it fails:</em> {f.why}</p><p><em>How to fix it:</em> {f.fix}</p></>}</div>)}</div>
<h2>Induction and the transcendental argument</h2>
<p><strong>The problem.</strong> {inductionPresup.problem}</p>
<p><strong>The Christian account.</strong> <Txt t={inductionPresup.christian}/></p>
<p><strong>The internal critique.</strong> {inductionPresup.critique}</p>
<h3>Objections and responses</h3><ul>{inductionPresup.objections.map((o,i)=><li key={i}>{o}</li>)}</ul>
<p className="hint">The argument shows what induction depends on. It is not a claim that non-Christians cannot do science.</p>
</div>}
export function LogicLevels(){
const[done,setDone]=useState<Record<string,number>>(()=>load(KEY,{}));
const[level,setLevel]=useState<number>(1);const[idx,setIdx]=useState(0);
const[b,setB]=useState<Record<string,string>>(()=>load(BKEY,{}));const[sample,setSample]=useState(false);
useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(done))}catch{}},[done]);
useEffect(()=>{try{localStorage.setItem(BKEY,JSON.stringify(b))}catch{}},[b]);
const qs=levelQs.filter(q=>q.level===level);const q=qs[idx];
const score=(l:number)=>levelQs.filter(x=>x.level===l&&done[x.id]===x.answer).length;
const missed=levelQs.filter(x=>done[x.id]!==undefined&&done[x.id]!==x.answer);
return <div className="vl-article vl-wide">
<div className="vl-callout"><strong>Practice ladder</strong><p>Start at Level 1 and move up. Level 6 helps you build a short transcendental argument. Progress is saved in this browser.</p></div>
<div className="vl-tabs" role="tablist" aria-label="Levels">{[1,2,3,4,5].map(l=><button key={l} role="tab" aria-selected={level===l} className={level===l?'active':''} onClick={()=>{setLevel(l);setIdx(0)}}>L{l} · {score(l)}/{levelQs.filter(x=>x.level===l).length}</button>)}<button role="tab" aria-selected={level===6} className={level===6?'active':''} onClick={()=>setLevel(6)}>L6 · Build</button></div>
{level<6&&q&&<><h3>{levelNames[level]}</h3><div className="vl-question"><small>QUESTION {idx+1} OF {qs.length}</small><h3>{q.prompt}</h3>{q.options.map((o,i)=><button key={o} className={'vl-option '+(done[q.id]===i?'chosen':'')} onClick={()=>setDone(d=>({...d,[q.id]:i}))}><span>{String.fromCharCode(65+i)}</span>{o}</button>)}{done[q.id]!==undefined&&<div className="vl-feedback"><strong>{done[q.id]===q.answer?'Correct.':'Review the reasoning.'}</strong><p><Txt t={q.explanation}/></p></div>}</div>
<div className="vl-actions"><button disabled={idx===0} onClick={()=>setIdx(i=>i-1)}>Previous</button><button disabled={idx>=qs.length-1} onClick={()=>setIdx(i=>i+1)}>Next</button><button onClick={()=>{setDone(d=>{const n={...d};qs.forEach(x=>delete n[x.id]);return n});setIdx(0)}}>Reset this level</button></div></>}
{level===6&&<><h3>Level 6 · Build a short transcendental argument</h3><p>Fill in each step in your own words. Keep it fair, specific and tied to Scripture.</p>{builder.fields.map(([k,label,hint])=><div key={k} className="vl-notes"><label htmlFor={'b-'+k}>{label}</label><textarea id={'b-'+k} rows={3} value={b[k]||''} onChange={e=>setB(x=>({...x,[k]:e.target.value}))} placeholder={hint}/></div>)}
<div className="vl-actions"><button onClick={()=>setSample(s=>!s)}>{sample?'Hide sample':'Show a sample answer'}</button><button onClick={()=>setB({})}>Clear</button></div>
{sample&&<div className="vl-feedback">{builder.fields.map(([k,label])=><p key={k}><strong>{label}</strong><br/><Txt t={(builder.sample as Record<string,string>)[k]}/></p>)}</div>}</>}
{missed.length>0&&level<6&&<div className="vl-notes"><strong>Review the ones you missed ({missed.length})</strong><ul>{missed.map(m=><li key={m.id}>{m.prompt}<br/><em>Answer: {m.options[m.answer]}</em></li>)}</ul></div>}
</div>}
