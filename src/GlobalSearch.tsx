import {useEffect,useMemo,useState} from 'react';
import {Search} from 'lucide-react';
import {AREAS,buildStatic,loadInline,loadQuran,run,snippet,tokens,type Entry} from './searchIndex';
import './globalSearch.css';
const PAGE_NAMES:Record<string,string>={passageFinder:'Find a passage',churchHistory:'Councils & the Fathers',baptistLine:'The Baptist line',history:'Historical Theology',study:'Study',simulator:'Apologetics Simulator',torahQuran:'Torah & Qur’anic accounts',quran:'Qur’anic research',muhammadQuran:'Muhammad & origins',manuscriptCriticism:'OT & Qur’an manuscripts',understandingText:'Understanding the text',textualCriticism:'Inerrancy & the Bible’s text',logicArgumentation:'Logic & TAG',apologeticsFramework:'Standards & method',worldviews:'Comparative worldviews',wordFaith:'Word of Faith & NAR',comparisons:'Roman Catholicism',catholic:'Roman Catholicism',lds:'Latter-day Saints',jw:'Jehovah’s Witnesses',confessions:'Creeds & Confessions',confession1689:'1689 Confession',sources:'Sources',publiclibrary:'Public domain library',rts:'RTS library',drive:'Drive catalog',christologyIslam:'Deity of Christ',trinity4171:'Qur’an 4:171',hadith:'Hadith',scripture:'Scripture research',privacy:'Privacy & deployment'};
function Mark({text,q}:{text:string;q:string}){const t=tokens(q).map(w=>w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));if(!t.length)return <>{text}</>;const re=new RegExp('('+t.join('|')+')','gi');return <>{text.split(re).map((s,i)=>i%2?<mark key={i}>{s}</mark>:s)}</>}
export type Go={page:string;title:string;study?:string};
export default function GlobalSearch({query,setQuery,onGo,nav}:{query:string;setQuery:(q:string)=>void;onGo:(g:Go)=>void;nav:(p:any)=>void}){
const [base]=useState<Entry[]>(()=>buildStatic());
const [extra,setExtra]=useState<Entry[]>([]);const [quran,setQuran]=useState<Entry[]|null>(null);const [qerr,setQerr]=useState(false);
const [area,setArea]=useState('All');const [limit,setLimit]=useState(40);
useEffect(()=>{let on=true;loadInline().then(x=>{if(on)setExtra(x)}).catch(()=>{});loadQuran().then(x=>{if(on)setQuran(x)}).catch(()=>{if(on)setQerr(true)});return()=>{on=false}},[]);
const all=useMemo(()=>[...base,...extra,...(quran||[])],[base,extra,quran]);
const hits=useMemo(()=>run(all,query,'All'),[all,query]);
const counts=useMemo(()=>{const c:Record<string,number>={};hits.forEach(h=>{c[h.e.a]=(c[h.e.a]||0)+1});return c},[hits]);
const shown=useMemo(()=>hits.filter(h=>area==='All'||h.e.a===area),[hits,area]);
useEffect(()=>setLimit(40),[query,area]);
const ready=quran!==null||qerr;
return <div className="gs"><div className="page-head"><span className="eyebrow">SEARCH THE WHOLE APP</span><h1>Search</h1><p>Searches the studies, 1689 Confession, Torah and Qur’an accounts and contradiction cards, Roman Catholic, LDS and JW comparisons, manuscripts, logic and method pages, sources, and the Qur’an (Pickthall). Everything is stored in the app, so it works offline. The Bible text and the hadith have their own searches.</p></div>
<div className="searchbar gs-bar"><Search size={19}/><input name="search-the-whole-app-1" autoComplete="off" autoFocus type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search topics, doctrines, verses, names…" aria-label="Search the whole app"/></div>
<p className="hint gs-links">Looking for Bible verse text or a hadith? <button className="text-btn" onClick={()=>nav('bibleReader')}>Open the Bible reader</button> · <button className="text-btn" onClick={()=>nav('passageFinder')}>Find a passage range</button> · <button className="text-btn" onClick={()=>nav('hadith')}>Open the hadith search</button>{!ready&&' · Loading the Qur’an text…'}{qerr&&' · Qur’an text unavailable offline until cached'}</p>
{tokens(query).length>0&&<><div className="gs-chips" role="tablist" aria-label="Filter by area"><button className={area==='All'?'active':''} onClick={()=>setArea('All')}>All <span>{hits.length}</span></button>{AREAS.filter(a=>counts[a]).map(a=><button key={a} className={area===a?'active':''} onClick={()=>setArea(a)}>{a} <span>{counts[a]}</span></button>)}</div>
<p className="hint">{shown.length} result{shown.length===1?'':'s'}{shown.length>limit?' · showing '+limit:''}</p>
<ol className="gs-list">{shown.slice(0,limit).map((h,i)=><li key={i}><button onClick={()=>onGo({page:h.e.p,title:h.e.t,study:h.e.s})}><span className="gs-meta"><span className="gs-area">{h.e.a}</span><span className="gs-page">{h.e.s?'Study':PAGE_NAMES[h.e.p]||h.e.p}</span></span><strong><Mark text={h.e.t} q={query}/></strong><span className="gs-snip"><Mark text={snippet(h.e,query)} q={query}/></span></button></li>)}</ol>
{shown.length>limit&&<button className="secondary" onClick={()=>setLimit(l=>l+40)}>Show more</button>}
{!shown.length&&<p className="empty">Nothing found for “{query}”. Try fewer or different words. For verse text use the Bible reader.</p>}</>}
{tokens(query).length===0&&<p className="empty">Type at least two letters. All words must match, so “justification merit” finds entries containing both.</p>}
</div>}
