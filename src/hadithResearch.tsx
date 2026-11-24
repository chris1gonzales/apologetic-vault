import {useEffect,useMemo,useState} from 'react';
import './hadithResearch.css';

type Hadith={n:number;bk:number;h:number;nar:string;en:string;ar:string;k?:string};
type Corpus={format:string;source:string;books:Record<string,string>;records:Hadith[]};
type Target='christologyIslam'|'muhammadQuran'|'trinity4171'|'quran'|'apologeticsFramework';

const corpusUrl='/corpus/bukhari-full.json';
const noteKey='veritas-bukhari-private-notes';
const pageSize=25;

const related:{test:RegExp;page:Target;label:string}[]=[
 {test:/\b(jesus|'isa|`isa|son of mary|messiah)\b/i,page:'christologyIslam',label:'Christology & Islam'},
 {test:/\b(trinity|three|son of allah|begotten)\b/i,page:'trinity4171',label:'Trinity: Qur’an 4:171'},
 {test:/\b(revelation|inspiration|inspired|gabriel|qur'an|quran|verse|surah|sura)\b/i,page:'muhammadQuran',label:'Muhammad & Qur’an Origins'},
 {test:/\b(torah|taurat|gospel|injil|people of the scripture|jews and christians)\b/i,page:'apologeticsFramework',label:'Biblical Apologetics'},
];

const label=(r:Hadith)=>`Bukhari ${r.n}`;
function khanLabel(k?:string){if(!k)return '';const [v,b,n]=k.split(':');return `Khan Vol. ${v}, Book ${b}, No. ${n}`}

export default function HadithResearch({onOpen}:{onOpen?:(page:Target)=>void}){
 const [corpus,setCorpus]=useState<Corpus|null>(null),[loadError,setLoadError]=useState('');
 const [query,setQuery]=useState(''),[book,setBook]=useState('all'),[reference,setReference]=useState(''),[selected,setSelected]=useState<Hadith|null>(null),[error,setError]=useState(''),[page,setPage]=useState(0),[showArabic,setShowArabic]=useState(true);
 const [notes,setNotes]=useState<Record<string,string>>(()=>{try{return JSON.parse(localStorage.getItem(noteKey)||'{}')}catch{return {}}});
 useEffect(()=>{try{localStorage.setItem(noteKey,JSON.stringify(notes))}catch{}},[notes]);
 useEffect(()=>{let live=true;fetch(corpusUrl).then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json()}).then((d:Corpus)=>{if(live)setCorpus(d)}).catch(e=>{if(live)setLoadError(e instanceof Error?e.message:'Load failed')});return()=>{live=false}},[]);

 const data=corpus?.records??[];
 const books=useMemo(()=>Object.entries(corpus?.books??{}).map(([id,name])=>({id,name})).sort((a,b)=>+a.id-+b.id),[corpus]);
 const byKhan=useMemo(()=>{const m=new Map<string,Hadith>();for(const r of data)if(r.k)m.set(r.k,r);return m},[data]);
 const matches=useMemo(()=>{const q=query.trim().toLowerCase();return data.filter(r=>(book==='all'||String(r.bk)===book)&&(!q||(r.nar+' '+r.en).toLowerCase().includes(q)||String(r.n)===q||(r.k??'')===q))},[data,book,query]);
 const visible=matches.slice(page*pageSize,(page+1)*pageSize);
 const noteId=(r:Hadith)=>'b'+r.n;
 const noteFor=(r:Hadith)=>notes[noteId(r)]??(r.k?notes[r.k.replace(/[a-z]$/,'')]??'':'');
 const links=selected?related.filter(x=>x.test.test(selected.nar+' '+selected.en)):[];

 function lookup(){
  const s=reference.trim().toLowerCase().replace(/^(sahih\s+)?(al-)?bukhari\s*/,'').replace(/\s+/g,'');
  let found:Hadith|undefined;
  const khan=/^(?:v(?:ol)?\.?)?(\d+)[:/,.-](\d+)[:/,.-](\d+)([a-z]?)$/.exec(s);
  if(khan)found=byKhan.get(`${+khan[1]}:${+khan[2]}:${+khan[3]}${khan[4]}`);
  else if(/^\d+(\.\d+)?$/.test(s))found=data.find(r=>r.n===+s);
  else{setError('Enter a Bukhari number (e.g. 3949) or a Khan Volume:Book:Number (e.g. 5:59:285).');return}
  if(!found){setError(khan?'That Khan reference is not in the matched set. Try the Bukhari number, or search the text.':'No report with that Bukhari number.');return}
  setSelected(found);setError('');
 }

 return <div className="hadith-page">
  <div className="page-head"><span className="eyebrow">ISLAMIC PRIMARY SOURCE RESEARCH</span><h1>Hadith Research</h1><p>The complete Sahih al-Bukhari in Arabic with the English translation of M. Muhsin Khan, studied from a confessional Reformed Baptist position. The collection is built into the app and works offline.</p></div>

  <section className="panel hadith-framing">
   <h2>Why a Reformed Christian studies the hadith</h2>
   <p>Scripture alone is God’s Word and the final authority (1689 Confession 1.1, 1.10). The hadith are studied as evidence of what Islam claims, not as revelation. Christians are called to give a reason for their hope (1 Peter 3:15) and to take every thought captive to Christ (2 Corinthians 10:5). That includes testing Islam by its own sources and showing where they fail.</p>
   <p><strong>Why the text is given word for word.</strong> The ninth commandment forbids misrepresenting a neighbor’s words, and a critique of a misquoted source proves nothing. The reports below are the Muhsin Khan translation as published, unaltered. Notes and cross-references sit beside the text, never inside it.</p>
  </section>

  <section className="panel"><h2>Find a report</h2>
   {!corpus&&!loadError&&<p className="hint">Loading the Bukhari collection…</p>}
   {loadError&&<p role="alert" className="hadith-error">The Bukhari collection could not be loaded ({loadError}). Open this page once while online so it can be stored for offline use.</p>}
   <div className="hadith-filters"><input name="search-hadith-text-1" autoComplete="off" aria-label="Search Hadith text" value={query} onChange={e=>{setQuery(e.target.value);setPage(0)}} placeholder="Search English text and narrators: Jesus, revelation, prayer…"/><select name="book-2" aria-label="Book" value={book} onChange={e=>{setBook(e.target.value);setPage(0)}}><option value="all">All books</option>{books.map(b=><option key={b.id} value={b.id}>{b.id}. {b.name}</option>)}</select></div>
   <div className="hadith-inline"><input name="report-reference-3" autoComplete="off" aria-label="Report reference" value={reference} onChange={e=>setReference(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')lookup()}} placeholder="Bukhari 3949 or Khan 5:59:285"/><button className="hadith-open" onClick={lookup} disabled={!data.length}>Go to report</button></div>
   {error&&<p role="alert" className="hadith-error">{error}</p>}
   <label className="hadith-toggle"><input name="checkbox-4" type="checkbox" checked={showArabic} onChange={e=>setShowArabic(e.target.checked)}/> Show Arabic text</label>
   {data.length>0&&<p className="hint">{matches.length.toLocaleString()} of {data.length.toLocaleString()} reports. Showing up to {pageSize} per page.</p>}
   <div className="hadith-results">{visible.map(r=><button key={r.n} className={'hadith-result '+(selected?.n===r.n?'selected':'')} onClick={()=>setSelected(r)}><strong>{label(r)}{r.k?` · ${r.k}`:''}</strong><small>{r.nar} {r.en.slice(0,160)}{r.en.length>160?'…':''}</small></button>)}{data.length>0&&matches.length===0&&<p>No matching reports found.</p>}</div>
   <div className="hadith-pagination"><button disabled={page===0} onClick={()=>setPage(p=>p-1)}>Previous</button><span>Page {page+1} of {Math.max(1,Math.ceil(matches.length/pageSize))}</span><button disabled={(page+1)*pageSize>=matches.length} onClick={()=>setPage(p=>p+1)}>Next</button></div>
  </section>

  {selected&&<section className="panel">
   <h2>{label(selected)}</h2>
   <p className="hint">Book {selected.bk}{corpus?.books[String(selected.bk)]?` (${corpus.books[String(selected.bk)]})`:''}, Hadith {selected.h}{selected.k?` · ${khanLabel(selected.k)}`:' · Not matched to a Khan Volume/Book/Number'}</p>
   {showArabic&&selected.ar&&<p className="hadith-arabic" dir="rtl" lang="ar">{selected.ar}</p>}
   <p className="hadith-full-text"><strong>{selected.nar}</strong> {selected.en}</p>
   <p className="hint">Translation: M. Muhsin Khan. A Sunni Islamic source, included for research; inclusion is not endorsement. This is a translation; the Arabic above is the source text. No authenticity grading has been added.</p>
   {links.length>0&&onOpen&&<div className="hadith-related"><strong>Related studies</strong><div>{links.map(x=><button key={x.page} className="text-btn" onClick={()=>onOpen(x.page)}>{x.label} →</button>)}</div></div>}
   <label htmlFor="hadith-notes">Private research notes</label>
   <textarea id="hadith-notes" rows={5} value={noteFor(selected)} onChange={e=>setNotes(n=>({...n,[noteId(selected)]:e.target.value}))} placeholder="Notes are saved in this browser only"/>
  </section>}

  <section className="panel"><h2>About this edition</h2>
   <p>Numbering follows sunnah.com (Bukhari 1–7563), with book and hadith-in-book references. The older Khan Volume:Book:Number from your IslamHouse PDF is shown wherever the report could be matched by text ({byKhan.size.toLocaleString()} reports). Lettered numbers such as 1:8:385l are kept as separate reports.</p>
   <p>The IslamHouse PDF has no Volume 9, Book 83 and stops at Volume 5, Book 59, No. 411. Those reports are included here from the full collection, under their Bukhari numbers only.</p>
   <p className="hint">Source: Sahih al-Bukhari, Arabic text and Khan translation with sunnah.com numbering, from the public-domain <a href="https://github.com/fawazahmed0/hadith-api" target="_blank" rel="noopener noreferrer">fawazahmed0/hadith-api</a> dataset. Verify any quotation against <a href="https://sunnah.com/bukhari" target="_blank" rel="noopener noreferrer">sunnah.com</a> before publishing it.</p>
  </section>

  <section className="panel"><h2>Other Sunni hadith collections</h2><p>These collections remain external references until separate source files are supplied and verified.</p><div className="hadith-collections">{[['Sahih Muslim','muslim'],['Sunan Abi Dawud','abudawud'],['Jami at-Tirmidhi','tirmidhi'],['Sunan an-Nasa’i','nasai'],['Sunan Ibn Majah','ibnmajah']].map(([name,code])=><a key={code} href={'https://sunnah.com/'+code} target="_blank" rel="noopener noreferrer">{name} ↗</a>)}</div></section>
 </div>
}
