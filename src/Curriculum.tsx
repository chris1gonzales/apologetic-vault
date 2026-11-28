import {useEffect,useMemo,useState} from 'react';
import {Ref} from './bibleLink';
import {lessons,groupsOrder,type Lesson,type B} from './studyData';
import {trackA,gateA,trackAGroup} from './trackA';
import {trackB,gateB,trackBGroup} from './trackB';
import {trackC,gateC,trackCGroup} from './trackC';
import './study.css';
const KEY='vr-course-v1';
type Prog={done:Record<string,boolean>,cards:Record<string,{ok:number,miss:number}>,gates:Record<string,{best:number,passed:boolean,tries:number}>,rev:Record<string,{at:number,stage:number}>,notes:Record<string,string>};
const empty=():Prog=>({done:{},cards:{},gates:{},rev:{},notes:{}});
const load=():Prog=>{try{const p=JSON.parse(localStorage.getItem(KEY)||'{}');return {done:p.done||{},cards:p.cards||{},gates:p.gates||{},rev:p.rev||{},notes:p.notes||{}}}catch{return empty()}};
const allLessons=[...trackA,...trackB,...trackC,...lessons];const tag=(l:Lesson)=>l.id.startsWith('a-')?'A':l.id.startsWith('b-')?'B':l.id.startsWith('c-')?'C':'R';const PASS=8;const DAY=86400000;const GAPS=[1,3,7];
const lab=(b:B)=>b==='checked'?'Checked at source':b==='secondary'?'Secondary only':'Verify';
const Badge=({b}:{b?:B})=>b?<span className={'ut-badge ut-'+b}>{lab(b)}</span>:null;
type Card={id:string,lesson:string,kind:'ref2what'|'what2ref'|'pair',front:string,back:string,side:'bible'|'other',tag?:string};
function buildCards(ls:Lesson[]):Card[]{const out:Card[]=[];for(const l of ls){l.refs.forEach((r,i)=>{const id=l.id+':'+i;
out.push({id:id+'a',lesson:l.id,kind:'ref2what',front:r.r,back:r.what,side:r.side,tag:r.kind});
out.push({id:id+'b',lesson:l.id,kind:'what2ref',front:r.what,back:r.r,side:r.side,tag:r.kind});
if(r.answers)out.push({id:id+'c',lesson:l.id,kind:'pair',front:r.r+' — '+r.what,back:r.answers,side:'other',tag:r.kind})})}return out}
const shuffle=<T,>(a:T[])=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
function RefList({l}:{l:Lesson}){const bible=l.refs.filter(r=>r.side==='bible'),other=l.refs.filter(r=>r.side==='other');
return <><h3>References to know</h3>{bible.length>0&&<><h4>Scripture</h4><ul className="st-refs">{bible.map(r=><li key={r.r}><strong><Ref r={r.r}/></strong> — {r.what}</li>)}</ul></>}
{other.length>0&&<><h4>The other side’s sources</h4><ul className="st-refs">{other.map(r=><li key={r.r}><strong>{r.r}</strong> <small>({r.kind})</small> — {r.what}{r.answers&&<> <em>Answered by <Ref r={r.answers}/></em></>}</li>)}</ul></>}</>}
function QList({l,show}:{l:Lesson,show?:boolean}){return <><h3>Review questions</h3><ol className="st-qs">{l.qs.map((q,i)=><li key={i}><p><strong>{q.q}</strong></p><details open={show}><summary>Show answer</summary><p>{q.a} <Badge b={q.b}/></p></details></li>)}</ol></>}
function Lesson1({l,toggle,onOpen,done,note,setNote}:{l:Lesson,toggle:()=>void,onOpen:(p:string)=>void,done:boolean,note:string,setNote:(t:string)=>void}){return <article className="ut-card st-lesson" id={'les-'+l.id}>
<h2>Lesson {l.n}. {l.title}</h2>
<p className="st-passage"><strong>Key passage: <Ref r={l.passage.ref}/></strong> — {l.passage.line}</p>
<h3>Core facts</h3><ul className="ch-points">{l.facts.map((f,i)=><li key={i}><Badge b={f.b}/> {f.x}{f.n&&<small className="ch-n"> {f.n}</small>}</li>)}</ul>
<RefList l={l}/><QList l={l}/>
{l.explain&&<div className="no-print"><h3>Explain it yourself</h3><p>{l.explain}</p><textarea className="st-note-box" rows={3} value={note} onChange={e=>setNote(e.target.value)} placeholder="Write it in a few sentences. Saved on this device only."/></div>}
<div className="st-actions no-print">{l.pages.map(([p,n])=><button key={p} className="text-btn" onClick={()=>onOpen(p)}>Open: {n} →</button>)}<button className={done?'secondary':'primary'} onClick={toggle}>{done?'Marked done ✓':'Mark lesson done'}</button></div></article>}
function Drill({prog,setProg,lessonId,setLessonId,pool}:{prog:Prog,setProg:(p:Prog)=>void,lessonId:string,setLessonId:(s:string)=>void,pool:Lesson[]}){
const [kind,setKind]=useState<'ref2what'|'what2ref'|'pair'|'all'>('all'),[side,setSide]=useState<'both'|'bible'|'other'>('both'),[seed,setSeed]=useState(0),[i,setI]=useState(0),[shown,setShown]=useState(false);
const deck=useMemo(()=>{const cardsAll=buildCards(lessonId==='all'?pool:pool.filter(l=>l.id===lessonId)).filter(c=>(kind==='all'||c.kind===kind)&&(side==='both'||c.side===side));
const sc=(c:Card)=>{const p=prog.cards[c.id];return p?(p.miss-p.ok):0};
return shuffle(cardsAll).sort((a,b)=>sc(b)-sc(a))},[lessonId,kind,side,seed,pool]);// eslint-disable-line
useEffect(()=>{setI(0);setShown(false)},[lessonId,kind,side,seed]);
const c=deck[i];const grade=(ok:boolean)=>{if(!c)return;const p=prog.cards[c.id]||{ok:0,miss:0};setProg({...prog,cards:{...prog.cards,[c.id]:{ok:p.ok+(ok?1:0),miss:p.miss+(ok?0:1)}}});setShown(false);setI(i+1)};
const names={ref2what:'Reference → what it says',what2ref:'Topic → reference',pair:'Their source → the Scripture that answers it'};
return <div className="panel st-drill"><div className="st-ctl no-print">
<label>Lesson <select value={lessonId} onChange={e=>setLessonId(e.target.value)}><option value="all">All lessons</option>{pool.map(l=><option key={l.id} value={l.id}>{tag(l)}{l.n}. {l.title}</option>)}</select></label>
<label>Drill <select value={kind} onChange={e=>setKind(e.target.value as any)}><option value="all">Mixed</option><option value="ref2what">{names.ref2what}</option><option value="what2ref">{names.what2ref}</option><option value="pair">{names.pair}</option></select></label>
<label>Sources <select value={side} onChange={e=>setSide(e.target.value as any)}><option value="both">Both</option><option value="bible">Scripture</option><option value="other">Other side</option></select></label>
<button className="text-btn" onClick={()=>setSeed(seed+1)}>Reshuffle</button></div>
{deck.length===0?<p>No cards for this filter.</p>:!c?<div><p><strong>Deck finished.</strong> {deck.length} cards. Cards you missed come up first next time.</p><button className="primary" onClick={()=>setSeed(seed+1)}>Go again</button></div>:
<div className="st-card"><small>{i+1} of {deck.length} · {names[c.kind]}{c.tag?' · '+c.tag:''}</small>
<p className="st-front">{c.front}</p>
{shown?<><p className="st-back">{c.kind==='ref2what'||c.kind==='pair'?c.back:c.back}</p>
<div className="st-actions"><button className="secondary" onClick={()=>grade(false)}>Missed it</button><button className="primary" onClick={()=>grade(true)}>Got it</button></div></>:<button className="primary" onClick={()=>setShown(true)}>Show answer</button>}</div>}
<p className="hint no-print">Self-graded. Scores are kept on this device only.</p></div>}
function plainText(){const o:string[]=['VERITAS REFORMATA — STUDY COURSE','Scripture is the final standard. Badges mirror the app pages; open each page for sources.',''];
for(const l of allLessons){o.push(`LESSON ${tag(l)}${l.n}. ${l.title}`,`Key passage: ${l.passage.ref} — ${l.passage.line}`,'Core facts:');
l.facts.forEach(f=>o.push(`- ${f.b?'['+lab(f.b)+'] ':''}${f.x}`));o.push('References to know:');
l.refs.forEach(r=>o.push(`- ${r.r} (${r.side==='bible'?'Scripture':r.kind}) — ${r.what}${r.answers?' [Answered by '+r.answers+']':''}`));
o.push('Review questions:');l.qs.forEach((q,i)=>o.push(`${i+1}. ${q.q}`,`   Answer: ${q.a}`));o.push('')}
return o.join('\n')}
type GItem={q:string,opts:string[],a:number,why:string};
const mkGate=(src:{q:string,opts:string[],a:number,why:string}[]):GItem[]=>src.map(g=>{const idx=shuffle(g.opts.map((_,k)=>k));return {q:g.q,opts:idx.map(k=>g.opts[k]),a:idx.indexOf(g.a),why:g.why}});
function Gate({prog,setProg,id,src,title,unlocks}:{prog:Prog,setProg:(p:Prog)=>void,id:string,src:typeof gateA,title:string,unlocks:string}){
const [items,setItems]=useState<GItem[]>(()=>mkGate(src));const [ans,setAns]=useState<(number|null)[]>(()=>src.map(()=>null));const [done,setDone]=useState(false);
const st=prog.gates[id];const score=ans.filter((a,i)=>a===items[i].a).length;
const submit=()=>{setDone(true);const sc=ans.filter((a,i)=>a===items[i].a).length;setProg({...prog,gates:{...prog.gates,[id]:{best:Math.max(st?.best||0,sc),passed:!!st?.passed||sc>=PASS,tries:(st?.tries||0)+1}}})};
const again=()=>{setItems(mkGate(src));setAns(src.map(()=>null));setDone(false);window.scrollTo({top:0})};
return <div className="panel st-gate"><h2>{title}</h2>
<p>Ten questions on the lessons in this track. Score {PASS} or more to pass. Passing unlocks {unlocks}. Questions and answer order change each attempt. No timer; use the lessons if you need them.</p>
{st&&<p className="st-note"><strong>{st.passed?'Passed ✓':'Not passed yet'}</strong> · best score {st.best}/10 · {st.tries} attempt{st.tries===1?'':'s'}</p>}
<ol className="st-qs">{items.map((it,i)=><li key={i}><p><strong>{it.q}</strong></p>
{it.opts.map((o,k)=>{const picked=ans[i]===k;const mark=done?(k===it.a?' st-right':picked?' st-wrong':''):'';return <label key={k} className={'st-opt'+(picked?' st-picked':'')+mark}><input type="radio" name={'g'+i} checked={picked} disabled={done} onChange={()=>{const a=[...ans];a[i]=k;setAns(a)}}/> {o}</label>})}
{done&&<p className="st-why"><small>{ans[i]===it.a?'Correct. ':'Not quite. '}{it.why}</small></p>}</li>)}</ol>
{!done?<div className="st-actions"><button className="primary" disabled={ans.some(a=>a===null)} onClick={submit}>Submit answers</button><small>{ans.filter(a=>a!==null).length} of {src.length} answered</small></div>
:<div className="panel st-note"><p><strong>Score: {score} of {src.length}.</strong> {score>=PASS?'You passed. Unlocked: '+unlocks+'.':'Below the pass mark of '+PASS+'. Review the lessons and try again.'}</p><button className="primary" onClick={again}>{score>=PASS?'Retake for practice':'Try again'}</button></div>}</div>}

type HowRow={feat:string,why:string,ref:string,url:string,b:B,note:string};
const HOW:HowRow[]=[
{feat:'Gates, drills and lesson questions',why:'You answer from memory before you see the answer. Taking a test, not only re-reading, improved later recall in the studies reviewed.',ref:'Roediger and Karpicke 2006, Psychological Science 17(3), 249–255',url:'https://pubmed.ncbi.nlm.nih.gov/16507066/',b:'secondary',note:'Abstract read. The study used prose passages and recall, not Bible doctrine or Qur’an comparisons.'},
{feat:'Review due at 1, 3 and 7 days',why:'Spreading study over time beats massing it. The best gap grows with how long you need to remember.',ref:'Cepeda and others 2006, Psychological Bulletin 132(3), 354–380',url:'https://pubmed.ncbi.nlm.nih.gov/16719566/',b:'secondary',note:'Abstract read. The 1, 3 and 7 day gaps are my fixed choice, not tuned to you or taken from a study.'},
{feat:'Explain it yourself box',why:'Explaining to yourself helped students understand and apply what they read.',ref:'Chi and others 1994, Cognitive Science 18, 439–477',url:'https://asu.elsevierpure.com/en/publications/eliciting-self-explanations-improves-understanding/',b:'secondary',note:'Abstract read. The study used science text. The box saves only on this device, and nothing checks what you write.'},
{feat:'Overall mix of testing and spacing',why:'A large review rated practice testing and distributed practice as high utility, and self-explanation and interleaved practice as moderate.',ref:'Dunlosky and others 2013, Psychological Science in the Public Interest 14(1), 4–58',url:'https://www.psychologicalscience.org/journals/pspi/1529100612453266/',b:'secondary',note:'Abstract read through the publisher and a university record. The full paper was not opened.'},
{feat:'Pass mark of 8 of 10 to unlock the next track',why:'Mastery learning asks you to reach a set standard before moving on.',ref:'Bloom 1968, “Learning for Mastery,” Evaluation Comment 1(2)',url:'https://eric.ed.gov/?id=ED053419',b:'secondary',note:'I found the record and secondary summaries, but did not read the paper. The 8 of 10 line is my choice.'},
{feat:'Shuffled answer options',why:'This only stops you memorising where the right answer sits. It is not a research finding.',ref:'None',url:'',b:'verify',note:'Course design choice.'},
{feat:'Order: Scripture, Islam, other teachings, then the rest',why:'It builds from the standard outward, as the course’s Scripture-first framework requires.',ref:'None',url:'',b:'verify',note:'Course design choice, not a learning-science result.'},
];
const HOWGAPS=[
'No mixing of topics inside drills. Interleaved practice helped in some maths studies (Rohrer and Taylor 2007, Instructional Science 35, 481–498) but the evidence is mixed, and it has not been shown for this subject.',
'The review gaps are the same for everyone and every lesson.',
'No confidence rating before you answer.',
'A retry of a gate repeats the same questions, so a pass can partly reflect remembering the questions.',
'The app has not been tested on learners. Nothing here shows this course improves learning.',
];

export default function Curriculum({onOpen,start}:{onOpen:(p:string)=>void,start?:string}){
const startR=!!start&&lessons.some(l=>l.id===start);
const [prog,setProgState]=useState<Prog>(load);const [view,setView]=useState<'a'|'gate'|'b'|'gateB'|'c'|'gateC'|'lessons'|'drill'|'print'>(startR?'lessons':'a');
const [curA,setCurA]=useState<string>(trackA[0].id);const [curB,setCurB]=useState<string>(trackB[0].id);const [curC,setCurC]=useState<string>(trackC[0].id);const [cur,setCur]=useState<string>(startR?start!:lessons[0].id);const [dl,setDl]=useState('all');
const setProg=(p:Prog)=>{setProgState(p);try{localStorage.setItem(KEY,JSON.stringify(p))}catch{}};
const unB=!!prog.gates.A?.passed;const unC=!!prog.gates.B?.passed;const unlocked=!!prog.gates.C?.passed;const pool=[...trackA,...(unB?trackB:[]),...(unC?trackC:[]),...(unlocked?lessons:[])];
const doneA=trackA.filter(l=>prog.done[l.id]).length;const doneB=trackB.filter(l=>prog.done[l.id]).length;const doneC=trackC.filter(l=>prog.done[l.id]).length;const doneN=lessons.filter(l=>prog.done[l.id]).length;
const lessonA=trackA.find(l=>l.id===curA)||trackA[0];const lessonB=trackB.find(l=>l.id===curB)||trackB[0];const lessonC=trackC.find(l=>l.id===curC)||trackC[0];const lesson=lessons.find(l=>l.id===cur)||lessons[0];
const now=Date.now();const due=allLessons.filter(l=>{const r=prog.rev[l.id];return prog.done[l.id]&&r&&r.stage<GAPS.length&&now-r.at>=GAPS[r.stage]*DAY});
const toggle=(l:Lesson)=>{const d=!prog.done[l.id];const rev={...prog.rev};if(d)rev[l.id]={at:Date.now(),stage:0};else delete rev[l.id];setProg({...prog,done:{...prog.done,[l.id]:d},rev})};
const reviewed=(id:string)=>{const r=prog.rev[id];if(r)setProg({...prog,rev:{...prog.rev,[id]:{at:Date.now(),stage:r.stage+1}}})};
const setNote=(id:string,t:string)=>setProg({...prog,notes:{...prog.notes,[id]:t}});
const download=()=>{const b=new Blob([plainText()],{type:'text/plain'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download='veritas-study-course.txt';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)};
const Nav=({list,c,set}:{list:Lesson[],c:Lesson,set:(id:string)=>void})=><div className="st-actions no-print"><button className="text-btn" disabled={list.indexOf(c)===0} onClick={()=>set(list[list.indexOf(c)-1].id)}>← Previous</button><button className="text-btn" onClick={()=>{setDl(c.id);setView('drill')}}>Drill this lesson’s references</button>{list.indexOf(c)<list.length-1?<button className="text-btn" onClick={()=>set(list[list.indexOf(c)+1].id)}>Next →</button>:list===trackA?<button className="primary" onClick={()=>setView('gate')}>Take Gate A →</button>:list===trackB?<button className="primary" onClick={()=>setView('gateB')}>Take Gate B →</button>:list===trackC?<button className="primary" onClick={()=>setView('gateC')}>Take Gate C →</button>:null}</div>;
return <section className="va-module st-module"><div className="page-head"><span className="eyebrow">STUDY COURSE · VERSION 3.46</span><h1>Study course</h1><p>Start with Track A, the biblical foundations, and pass its gate. Track B (Islam) comes next, with its own gate, then Track C (other teachings) and its gate. The course lessons after that cover the history, the manuscripts and the other teachings in the app. Works offline.</p></div>
<div className="va-tabs no-print"><button className={view==='a'?'active':''} onClick={()=>setView('a')}>Track A</button><button className={view==='gate'?'active':''} onClick={()=>setView('gate')}>Gate A{unB?' ✓':''}</button><button className={view==='b'?'active':''} onClick={()=>setView('b')}>{unB?'Track B':'🔒 Track B'}</button><button className={view==='gateB'?'active':''} onClick={()=>setView('gateB')}>{unB?'Gate B':'🔒 Gate B'}{unC?' ✓':''}</button><button className={view==='c'?'active':''} onClick={()=>setView('c')}>{unC?'Track C':'🔒 Track C'}</button><button className={view==='gateC'?'active':''} onClick={()=>setView('gateC')}>{unC?'Gate C':'🔒 Gate C'}{unlocked?' ✓':''}</button><button className={view==='lessons'?'active':''} onClick={()=>setView('lessons')}>{unlocked?'Course lessons':'🔒 Course lessons'}</button><button className={view==='drill'?'active':''} onClick={()=>setView('drill')}>Reference drills</button><button className={view==='print'?'active':''} onClick={()=>setView('print')}>Print or export</button></div>
<div className="panel st-note"><strong>Progress:</strong> Track A {doneA} of {trackA.length} lessons done{unB?'; Track B '+doneB+' of '+trackB.length:''}{unC?'; Track C '+doneC+' of '+trackC.length:''}{unlocked?'; course lessons '+doneN+' of '+lessons.length+'.':'; next gate not yet passed.'} <span className="ut-badge ut-checked">Checked at source</span> <span className="ut-badge ut-secondary">Secondary only</span> <span className="ut-badge ut-verify">Verify</span> Scripture quotation marks hold NASB 1995 wording only; everything else is a summary. Qur’an and hadith references are pointers to the app’s pages, not translations. Open the linked page for sources.</div>
<details className="panel st-note no-print"><summary><strong>How this course teaches</strong> <span className="ut-badge ut-verify">Verify</span></summary>
<p>The course borrows several study methods that cognitive science and education research support. Each row says what the app does, what the research says, and how much I checked. The research describes general learning. It does not test this course.</p>
{HOW.map(h=><div key={h.feat} className="st-how"><strong>{h.feat}</strong> <Badge b={h.b}/><br/>{h.why}<br/><small>{h.url?<a href={h.url} target="_blank" rel="noopener noreferrer">{h.ref}</a>:h.ref}. {h.note}</small></div>)}
<p><strong>What it does not do yet</strong></p><ul>{HOWGAPS.map(g=><li key={g}>{g}</li>)}</ul>
<small>Secondary here means I read the abstract or record, not the whole paper. Open the link to confirm before you rely on it.</small></details>
{due.length>0&&view!=='print'&&<div className="panel st-note no-print"><strong>Review due:</strong> {due.map(l=><span key={l.id} className="st-due">{l.title} <button className="text-btn" onClick={()=>reviewed(l.id)}>Mark reviewed</button></span>)}<br/><small>Re-read the lesson and answer its questions from memory. Reviews are spaced at 1, 3 and 7 days.</small></div>}
{view==='a'&&<><nav className="st-toc no-print" aria-label="Track A lessons"><div><strong>{trackAGroup}</strong><div>{trackA.map(l=><button key={l.id} className={(curA===l.id?'active ':'')+(prog.done[l.id]?'done':'')} onClick={()=>{setCurA(l.id);window.scrollTo({top:0})}}>{l.n}. {l.title}{prog.done[l.id]?' ✓':''}</button>)}</div></div></nav>
<Lesson1 l={lessonA} toggle={()=>toggle(lessonA)} onOpen={onOpen} done={!!prog.done[lessonA.id]} note={prog.notes[lessonA.id]||''} setNote={t=>setNote(lessonA.id,t)}/><Nav list={trackA} c={lessonA} set={setCurA}/></>}
{view==='gate'&&<Gate key="A" prog={prog} setProg={setProg} id="A" src={gateA} title="Gate A: Biblical foundations" unlocks="Track B (Islam)"/>}
{view==='b'&&(!unB?<div className="panel"><h2>🔒 Locked</h2><p>Track B opens after you pass Gate A (score {PASS} of 10 or more).</p><div className="st-actions"><button className="primary" onClick={()=>setView('gate')}>Go to Gate A</button></div></div>:<><nav className="st-toc no-print" aria-label="Track B lessons"><div><strong>{trackBGroup}</strong><div>{trackB.map(l=><button key={l.id} className={(curB===l.id?'active ':'')+(prog.done[l.id]?'done':'')} onClick={()=>{setCurB(l.id);window.scrollTo({top:0})}}>{l.n}. {l.title}{prog.done[l.id]?' ✓':''}</button>)}</div></div></nav>
<Lesson1 l={lessonB} toggle={()=>toggle(lessonB)} onOpen={onOpen} done={!!prog.done[lessonB.id]} note={prog.notes[lessonB.id]||''} setNote={t=>setNote(lessonB.id,t)}/><Nav list={trackB} c={lessonB} set={setCurB}/></>)}
{view==='gateB'&&(!unB?<div className="panel"><h2>🔒 Locked</h2><p>Gate B opens after you pass Gate A.</p><div className="st-actions"><button className="primary" onClick={()=>setView('gate')}>Go to Gate A</button></div></div>:<Gate key="B" prog={prog} setProg={setProg} id="B" src={gateB} title="Gate B: Islam" unlocks="Track C (other teachings)"/>)}
{view==='c'&&(!unC?<div className="panel"><h2>🔒 Locked</h2><p>Track C opens after you pass Gate B (score {PASS} of 10 or more).</p><div className="st-actions"><button className="primary" onClick={()=>setView(unB?'gateB':'gate')}>{unB?'Go to Gate B':'Go to Gate A'}</button></div></div>:<><nav className="st-toc no-print" aria-label="Track C lessons"><div><strong>{trackCGroup}</strong><div>{trackC.map(l=><button key={l.id} className={(curC===l.id?'active ':'')+(prog.done[l.id]?'done':'')} onClick={()=>{setCurC(l.id);window.scrollTo({top:0})}}>{l.n}. {l.title}{prog.done[l.id]?' ✓':''}</button>)}</div></div></nav>
<Lesson1 l={lessonC} toggle={()=>toggle(lessonC)} onOpen={onOpen} done={!!prog.done[lessonC.id]} note={prog.notes[lessonC.id]||''} setNote={t=>setNote(lessonC.id,t)}/><Nav list={trackC} c={lessonC} set={setCurC}/></>)}
{view==='gateC'&&(!unC?<div className="panel"><h2>🔒 Locked</h2><p>Gate C opens after you pass Gate B.</p><div className="st-actions"><button className="primary" onClick={()=>setView(unB?'gateB':'gate')}>{unB?'Go to Gate B':'Go to Gate A'}</button></div></div>:<Gate key="C" prog={prog} setProg={setProg} id="C" src={gateC} title="Gate C: Other teachings" unlocks="the course lessons"/>)}
{view==='lessons'&&(!unlocked?<div className="panel"><h2>🔒 Locked</h2><p>The course lessons open after you pass Gate C (score {PASS} of 10 or more). This keeps the order: Scripture first, then Islam, then the other teachings, each measured by Scripture.</p><div className="st-actions"><button className="primary" onClick={()=>setView(unC?'gateC':unB?'gateB':'gate')}>{unC?'Go to Gate C':unB?'Go to Gate B':'Go to Gate A'}</button><button className="secondary" onClick={()=>setView('a')}>Back to Track A</button></div></div>:
<><nav className="st-toc no-print" aria-label="Lessons">{groupsOrder.map(g=><div key={g}><strong>{g}</strong><div>{lessons.filter(l=>l.group===g).map(l=><button key={l.id} className={(cur===l.id?'active ':'')+(prog.done[l.id]?'done':'')} onClick={()=>{setCur(l.id);window.scrollTo({top:0})}}>{l.n}. {l.title}{prog.done[l.id]?' ✓':''}</button>)}</div></div>)}</nav>
<Lesson1 l={lesson} toggle={()=>toggle(lesson)} onOpen={onOpen} done={!!prog.done[lesson.id]} note={prog.notes[lesson.id]||''} setNote={t=>setNote(lesson.id,t)}/><Nav list={lessons} c={lesson} set={setCur}/></>)}
{view==='drill'&&<><Drill prog={prog} setProg={setProg} lessonId={dl} setLessonId={setDl} pool={pool}/>{!unlocked&&<p className="hint">Cards for later tracks and lessons unlock as you pass each gate.</p>}</>}
{view==='print'&&<><div className="panel no-print"><p>Print the whole course with answers, or download it as plain text.</p><div className="st-actions"><button className="primary" onClick={()=>window.print()}>Print</button><button className="secondary" onClick={download}>Download .txt</button><button className="text-btn" onClick={()=>{if(confirm('Clear lesson progress, gate results and drill scores on this device?'))setProg(empty())}}>Reset progress</button></div></div>
{allLessons.map(l=><article key={l.id} className="ut-card st-lesson st-print"><h2>{l.id.startsWith('a-')?'Track A, lesson ':l.id.startsWith('b-')?'Track B, lesson ':l.id.startsWith('c-')?'Track C, lesson ':'Lesson '}{l.n}. {l.title}</h2><p className="st-passage"><strong>Key passage: {l.passage.ref}</strong> — {l.passage.line}</p><h3>Core facts</h3><ul className="ch-points">{l.facts.map((f,i)=><li key={i}><Badge b={f.b}/> {f.x}</li>)}</ul><RefList l={l}/><QList l={l} show/></article>)}</>}
</section>}
