import {useEffect,useMemo,useState,type FormEvent} from 'react';
import {bibleHubUrl} from './bibleLink';
import './phrase.css';

type Corp=Record<string,string[][]>;
type Row={b:string,c:number,v:number,t:string,k:string,n:number};
type Mode='exact'|'all'|'some'|'none';

const SURAHS=['Al-Fatihah','Al-Baqarah','Ali ʿImran','An-Nisa','Al-Maʾidah','Al-Anʿam','Al-Aʿraf','Al-Anfal','At-Tawbah','Yunus','Hud','Yusuf','Ar-Raʿd','Ibrahim','Al-Hijr','An-Nahl','Al-Isra','Al-Kahf','Maryam','Ta-Ha','Al-Anbiya','Al-Hajj','Al-Muʾminun','An-Nur','Al-Furqan','Ash-Shuʿara','An-Naml','Al-Qasas','Al-ʿAnkabut','Ar-Rum','Luqman','As-Sajdah','Al-Ahzab','Saba','Fatir','Ya-Sin','As-Saffat','Sad','Az-Zumar','Ghafir','Fussilat','Ash-Shura','Az-Zukhruf','Ad-Dukhan','Al-Jathiyah','Al-Ahqaf','Muhammad','Al-Fath','Al-Hujurat','Qaf','Adh-Dhariyat','At-Tur','An-Najm','Al-Qamar','Ar-Rahman','Al-Waqiʿah','Al-Hadid','Al-Mujadilah','Al-Hashr','Al-Mumtahanah','As-Saff','Al-Jumuʿah','Al-Munafiqun','At-Taghabun','At-Talaq','At-Tahrim','Al-Mulk','Al-Qalam','Al-Haqqah','Al-Maʿarij','Nuh','Al-Jinn','Al-Muzzammil','Al-Muddaththir','Al-Qiyamah','Al-Insan','Al-Mursalat','An-Naba','An-Naziʿat','ʿAbasa','At-Takwir','Al-Infitar','Al-Mutaffifin','Al-Inshiqaq','Al-Buruj','At-Tariq','Al-Aʿla','Al-Ghashiyah','Al-Fajr','Al-Balad','Ash-Shams','Al-Layl','Ad-Duha','Ash-Sharh','At-Tin','Al-ʿAlaq','Al-Qadr','Al-Bayyinah','Az-Zalzalah','Al-ʿAdiyat','Al-Qariʿah','At-Takathur','Al-ʿAsr','Al-Humazah','Al-Fil','Quraysh','Al-Maʿun','Al-Kawthar','Al-Kafirun','An-Nasr','Al-Masad','Al-Ikhlas','Al-Falaq','An-Nas'];

// Modern and dated English forms that Pickthall (1930) and modern phrasing disagree on.
const SYN:Record<string,string>={god:'allah',save:'but',thee:'you',thou:'you',ye:'you',thy:'your',thine:'your',hath:'has',doth:'does',shalt:'shall',unto:'to',wilt:'will',dost:'do',hast:'have'};
const STOP=new Set(['the','of','and','a','to','in','is','he','his','that','it','for','be','with','as','on','by','an','or','at','from','this','who','are','was','not','but']);
const WRE=/[\p{L}\p{N}’'ʼ]+/gu;

function nw(raw:string,syn:boolean){let w=raw.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[’'ʼ]/g,'');if(!w)return '';if(syn&&SYN[w])w=SYN[w];return w}
function toks(text:string,syn:boolean){const out:{w:string,s:number,e:number}[]=[];const re=new RegExp(WRE.source,'gu');let m:RegExpExecArray|null;while((m=re.exec(text))){const w=nw(m[0],syn);if(w)out.push({w,s:m.index,e:m.index+m[0].length})}return out}

const cache:Record<string,any>={};
async function load(key:string,url:string){if(cache[key])return cache[key];const r=await fetch(url);if(!r.ok)throw Error('HTTP '+r.status);return cache[key]=await r.json()}

function bibleRows(d:Corp):Row[]{const out:Row[]=[];Object.keys(d).forEach((b,bi)=>{d[b].forEach((ch,ci)=>ch.forEach((t,vi)=>{out.push({b,c:ci+1,v:vi+1,t,k:' '+toks(t,false).map(x=>x.w).join(' ')+' ',n:bi})}))});return out}
function quranRows(d:string[][],syn:boolean):Row[]{const out:Row[]=[];d.forEach((s,si)=>s.forEach((t,vi)=>{out.push({b:SURAHS[si]||'Surah '+(si+1),c:si+1,v:vi+1,t,k:' '+toks(t,syn).map(x=>x.w).join(' ')+' ',n:si})}));return out}

function runSearch(rows:Row[],q:string,syn:boolean):{mode:Mode,hits:Row[],qt:string[]}{
 const qt=toks(q,syn).map(x=>x.w);
 if(!qt.length)return{mode:'none',hits:[],qt};
 const phrase=' '+qt.join(' ')+' ';
 const ex=rows.filter(r=>r.k.includes(phrase));
 if(ex.length||qt.length<2)return{mode:'exact',hits:ex,qt};
 let set=[...new Set(qt)].filter(w=>!STOP.has(w));if(!set.length)set=[...new Set(qt)];
 const scored=rows.map(r=>({r,s:set.reduce((a,w)=>a+(r.k.includes(' '+w+' ')?1:0),0)})).filter(x=>x.s>0);
 const all=scored.filter(x=>x.s===set.length);
 if(all.length)return{mode:'all',hits:all.map(x=>x.r),qt:set};
 const need=Math.max(2,Math.ceil(set.length/2));
 const some=scored.filter(x=>x.s>=need).sort((a,b)=>b.s-a.s);
 return{mode:'some',hits:some.map(x=>x.r),qt:set}}

function Hl({text,qt,mode,syn}:{text:string,qt:string[],mode:Mode,syn:boolean}){
 const tk=toks(text,syn);const mark=new Array(tk.length).fill(false);
 if(mode==='exact'){for(let i=0;i+qt.length<=tk.length;i++){let ok=true;for(let j=0;j<qt.length;j++)if(tk[i+j].w!==qt[j]){ok=false;break}if(ok)for(let j=0;j<qt.length;j++)mark[i+j]=true}}
 else{const s=new Set(qt);tk.forEach((x,i)=>{if(s.has(x.w))mark[i]=true})}
 const out:any[]=[];let pos=0;
 tk.forEach((x,i)=>{if(!mark[i])return;if(x.s>pos)out.push(text.slice(pos,x.s));
  // merge a run of adjacent marked words (and the gap between them) into one highlight
  let j=i;while(j+1<tk.length&&mark[j+1])j++;
  if(i>0&&mark[i-1])return;
  out.push(<mark className="ph-hit" key={i}>{text.slice(x.s,tk[j].e)}</mark>);pos=tk[j].e});
 if(pos<text.length)out.push(text.slice(pos));
 return <>{out}</>}

function Engine({kind,active}:{kind:'bible'|'quran',active:boolean}){
 const isQ=kind==='quran';
 const [tr,setTr]=useState<'bsb'|'kjv'>('bsb');
 const [syn,setSyn]=useState(true);
 const [data,setData]=useState<any>(null);
 const [err,setErr]=useState('');
 const [input,setInput]=useState('');
 const [q,setQ]=useState('');
 const [test,setTest]=useState<'all'|'ot'|'nt'>('all');
 const [book,setBook]=useState('all');
 const [surah,setSurah]=useState('all');
 const [ctx,setCtx]=useState(3);
 const [shown,setShown]=useState(40);
 const [open,setOpen]=useState<Record<string,boolean>>({});
 useEffect(()=>{if(!active)return;let on=true;setErr('');
  const key=isQ?'pick':tr;const url=isQ?'/corpus/pickthall.json':'/corpus/'+tr+'.json';
  load(key,url).then(d=>{if(on)setData(d)}).catch(e=>{if(on)setErr('Could not load the text ('+String(e)+'). Open the app once online so the texts can be stored.')});
  return()=>{on=false}},[active,isQ,tr]);
 const rows=useMemo(()=>data?(isQ?quranRows(data,syn):bibleRows(data)):[],[data,isQ,syn]);
 const books=useMemo(()=>isQ||!data?[]:Object.keys(data),[data,isQ]);
 const bookList=books.filter((_,i)=>test==='all'||(test==='ot'?i<39:i>=39));
 const pool=useMemo(()=>rows.filter(r=>isQ?(surah==='all'||String(r.c)===surah):((test==='all'||(test==='ot'?r.n<39:r.n>=39))&&(book==='all'||r.b===book))),[rows,isQ,surah,test,book]);
 const res=useMemo(()=>q?runSearch(pool,q,isQ&&syn):{mode:'none' as Mode,hits:[] as Row[],qt:[] as string[]},[pool,q,isQ,syn]);
 useEffect(()=>{setShown(40);setOpen({})},[q,test,book,surah,tr,syn]);
 function submit(e?:FormEvent){e?.preventDefault();setQ(input.trim())}
 const key=(r:Row)=>r.b+r.c+':'+r.v;
 const ref=(r:Row)=>isQ?`Q ${r.c}:${r.v} (${r.b})`:`${r.b} ${r.c}:${r.v}`;
 const url=(r:Row)=>isQ?`https://quran.com/${r.c}:${r.v}`:bibleHubUrl(`${r.b} ${r.c}:${r.v}`);
 function around(r:Row){const list:string[]=isQ?data[r.c-1]:data[r.b][r.c-1];const out:{v:number,t:string,main:boolean}[]=[];for(let v=Math.max(1,r.v-ctx);v<=Math.min(list.length,r.v+ctx);v++)out.push({v,t:list[v-1],main:v===r.v});return out}
 const visible=res.hits.slice(0,shown);
 const allOpen=visible.length>0&&visible.every(r=>open[key(r)]);
 const examples=isQ?['lord of the worlds','no compulsion in religion','the straight path','no god but God']:['in the beginning','for God so loved','the word became flesh','it is finished'];
 return <div hidden={!active}>
  <form className="ph-form" onSubmit={submit} role="search">
   <input type="search" name={'phrase-'+kind} aria-label={isQ?'Search the Qur’an for a phrase':'Search the Bible for a phrase'} autoComplete="off" value={input} onChange={e=>setInput(e.target.value)} placeholder={isQ?'Type a phrase or words, e.g. no compulsion in religion':'Type a phrase or words, e.g. for God so loved'}/>
   <button className="primary" type="submit">Search</button>
  </form>
  <div className="ph-chips">{examples.map(x=><button key={x} type="button" className="pf-chip" onClick={()=>{setInput(x);setQ(x)}}>{x}</button>)}</div>
  <div className="ph-opts">
   {!isQ&&<><label>Translation <select value={tr} onChange={e=>setTr(e.target.value as any)}><option value="bsb">BSB (Berean Standard Bible)</option><option value="kjv">KJV</option></select></label>
    <label>Testament <select value={test} onChange={e=>{setTest(e.target.value as any);setBook('all')}}><option value="all">Whole Bible</option><option value="ot">Old Testament</option><option value="nt">New Testament</option></select></label>
    <label>Book <select value={book} onChange={e=>setBook(e.target.value)}><option value="all">All books</option>{bookList.map(b=><option key={b} value={b}>{b}</option>)}</select></label></>}
   {isQ&&<><label>Surah <select value={surah} onChange={e=>setSurah(e.target.value)}><option value="all">All surahs</option>{SURAHS.map((s,i)=><option key={s} value={String(i+1)}>{i+1}. {s}</option>)}</select></label>
    <label className="ph-check"><input type="checkbox" checked={syn} onChange={e=>setSyn(e.target.checked)}/> Match modern wording (God/Allah, you/thee/thou, but/save)</label></>}
   <label>Verses around each match <select value={ctx} onChange={e=>setCtx(Number(e.target.value))}>{[1,2,3,4,5,6,8,10].map(n=><option key={n} value={n}>{n} each side</option>)}</select></label>
  </div>
  {!data&&!err&&<p className="hint">Loading the text…</p>}
  {err&&<p className="pf-err">{err}</p>}
  {data&&!q&&<p className="hint">{isQ?'Pickthall’s 1930 English, all 114 surahs.':(tr==='bsb'?'Berean Standard Bible, all 66 books.':'King James Version, all 66 books.')} Phrases are matched inside a single verse. Capitals, punctuation, hyphens and curly quotes are ignored.</p>}
  {data&&q&&<>
   <div className="ph-sum">
    <strong>{res.hits.length.toLocaleString()} {res.hits.length===1?'verse':'verses'}</strong>
    {res.mode==='exact'&&res.hits.length>0&&<span> contain the exact phrase.</span>}
    {res.mode==='all'&&<span> contain all the words, in any order. No verse has the exact phrase.</span>}
    {res.mode==='some'&&<span> contain most of the words, best matches first. No verse has all of them.</span>}
    {res.hits.length===0&&<span> found. Try fewer or different words{isQ?', or switch on modern wording; Pickthall’s English is dated (for example “no deity save Him”).':'.'}</span>}
   </div>
   {visible.length>0&&<div className="ph-row"><button type="button" className="text-btn" onClick={()=>{const o:Record<string,boolean>={};if(!allOpen)visible.forEach(r=>{o[key(r)]=true});setOpen(o)}}>{allOpen?'Hide surrounding verses':'Show '+ctx+' verses either side of every match'}</button></div>}
   <div className="ph-list">
    {visible.map(r=>{const o=!!open[key(r)];const u=url(r);return <article className="ph-card" key={key(r)}>
     <header><strong>{ref(r)}</strong>{u&&<a href={u} target="_blank" rel="noopener noreferrer" title={isQ?'Open on Quran.com (internet required)':'Open in the NASB on Bible Hub (internet required)'}>{isQ?'Quran.com ↗':'NASB ↗'}</a>}</header>
     {!o&&<p className="ph-main"><Hl text={r.t} qt={res.qt} mode={res.mode} syn={isQ&&syn}/></p>}
     {o&&around(r).map(x=><p key={x.v} className={x.main?'ph-main':'ph-ctx'}><sup>{x.v}</sup> {x.main?<Hl text={x.t} qt={res.qt} mode={res.mode} syn={isQ&&syn}/>:x.t}</p>)}
     <button type="button" className="text-btn" onClick={()=>setOpen(s=>({...s,[key(r)]:!o}))}>{o?'Hide surrounding verses':'Show '+ctx+' verses either side'}</button>
    </article>})}
   </div>
   {res.hits.length>shown&&<button type="button" className="secondary" onClick={()=>setShown(s=>s+40)}>Show 40 more ({res.hits.length-shown} left)</button>}
  </>}
 </div>}

export default function PhraseSearch({start='bible'}:{start?:'bible'|'quran'}){
 const [tab,setTab]=useState<'bible'|'quran'>(start);
 const [seen,setSeen]=useState<Record<string,boolean>>({[start]:true});
 const pick=(t:'bible'|'quran')=>{setTab(t);setSeen(s=>({...s,[t]:true}))};
 return <div className="ph-page">
  <div className="page-head"><span className="eyebrow">FIND BY WORDS</span><h1>Phrase search</h1><p>Search the Bible and the Qur’an separately by a phrase or a few words. Each match can open with the verses around it. Everything is stored on the device, so it works offline.</p></div>
  <div className="ph-tabs" role="tablist"><button role="tab" aria-selected={tab==='bible'} className={tab==='bible'?'active':''} onClick={()=>pick('bible')}>Bible</button><button role="tab" aria-selected={tab==='quran'} className={tab==='quran'?'active':''} onClick={()=>pick('quran')}>Qur’an</button></div>
  {seen.bible&&<Engine kind="bible" active={tab==='bible'}/>}
  {seen.quran&&<Engine kind="quran" active={tab==='quran'}/>}
  <div className="panel ph-note"><h3>Texts and licensing</h3>
   <p><strong>Bible:</strong> the Berean Standard Bible, which its publisher placed in the public domain on April 30, 2023 (<a href="https://berean.bible/licensing.htm" target="_blank" rel="noopener noreferrer">berean.bible ↗</a>), and the King James Version. <span className="ut-badge ut-checked">Checked at source</span></p>
   <p><strong>Qur’an:</strong> Pickthall, <em>The Meaning of the Glorious Koran</em> (1930). Secondary sources describe it as public domain; I have not seen a rights statement from a publisher. <span className="ut-badge ut-secondary">Secondary only</span></p>
   <p className="hint">The “modern wording” option only changes how words are matched. It never changes the text shown. Nothing here searches the Arabic. Reference links open the NASB on Bible Hub and the Qur’an on Quran.com, and need an internet connection.</p>
  </div>
 </div>}
