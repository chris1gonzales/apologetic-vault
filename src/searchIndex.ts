import * as data from './data';
import * as tqTexts from './tqTexts';
import * as tqExtra from './tqExtra';
import * as tqIndex from './tqIndex';
import * as tqAbrogation from './tqAbrogation';
import * as tqDoctrine from './tqDoctrine';
import * as torahQuranData from './torahQuranData';
import * as tqContradictions from './tqContradictions';
import * as quranComparisons from './quranComparisons';
import * as manuscriptData from './manuscriptData';
import * as textualPositions from './textualPositions';
import * as hinduData from './hinduData';
import * as shiaSunniData from './shiaSunniData';
import {lessons as courseLessons} from './studyData';
import {trackA as trackALessons} from './trackA';
import {trackB as trackBLessons} from './trackB';
import {trackC as trackCLessons} from './trackC';
import * as understandingTextData from './understandingTextData';
import * as logicData from './logicData';
import * as logicLabData from './logicLabData';
import * as worldviews from './worldviews';
import * as confessionsMod from './confessions';
import * as primarySources from './primarySources';
import * as historyData from './historyData';
import * as publicLibrary from './publicLibrary';
import * as rtsResources from './rtsResources';
import * as driveCatalog from './driveCatalog';
import * as moreScenarios from './moreScenarios';
import * as theodicyScenarios from './theodicyScenarios';
import {allOT} from './otherTeachingsData';
import {iAmSearch} from './iAmStatements';
import {ntMethodSearch} from './ntMethod';
import {raptureSearch} from './raptureTiming';
import apologeticsFramework from './apologeticsFrameworkData.json';
import muhammadQuran from './muhammadQuranData.json';
import textualCriticism from './textualCriticismData.json';
import wordFaith from './wordFaithExegesis.json';
import c1689 from './c1689.json';

export type Entry={t:string;x:string;a:string;p:string;l:string;s?:string;f?:string;f2?:string};
export const AREAS=['1689 Confession & creeds','Islam & the Qur’an','Manuscripts & textual criticism','Roman Catholicism','LDS & Jehovah’s Witnesses','Apologetics method','Other teachings','Study modules','Sources & libraries','Scripture'] as const;
const A=(n:number)=>AREAS[n];
const TK=['title','topic','name','heading','subject','term','passage','question','q','label','book','id'];
const SKIP=/^(https?:\/\/|\/|#)/;
function strs(v:unknown,out:string[],depth=0){if(depth>8)return;if(typeof v==='string'){if(v.trim()&&!SKIP.test(v))out.push(v.trim())}else if(Array.isArray(v))v.forEach(x=>strs(x,out,depth+1));else if(v&&typeof v==='object')Object.values(v as Record<string,unknown>).forEach(x=>strs(x,out,depth+1))}
function titleOf(o:unknown,fb:string):string{if(typeof o==='string')return o.slice(0,80);if(Array.isArray(o)){const f=o.find(x=>typeof x==='string');return f?String(f).slice(0,80):fb}if(o&&typeof o==='object'){const r=o as Record<string,unknown>;for(const k of TK){const v=r[k];if(typeof v==='string'&&v.trim().length>2)return v.trim().slice(0,90)}}return fb}
const clean=(s:string)=>s.replace(/\s+/g,' ').trim();
function add(out:Entry[],o:unknown,fb:string,p:string,a:string,s?:string){const parts:string[]=[];strs(o,parts);const x=clean(parts.join(' · '));if(x.length<12)return;const t=clean(titleOf(o,fb));out.push({t,x,a,p,l:(t+' '+x).toLowerCase(),s})}
function walk(out:Entry[],mod:Record<string,unknown>,p:string,a:string,skip:string[]=[]){for(const [k,v] of Object.entries(mod)){if(k==='default'||typeof v==='function'||skip.includes(k))continue;if(Array.isArray(v))v.forEach((it,i)=>add(out,it,k+' '+(i+1),p,a));else if(v&&typeof v==='object'){const vals=Object.entries(v as Record<string,unknown>);if(vals.length&&vals.every(([,x])=>x&&typeof x==='object'))vals.forEach(([kk,it])=>add(out,it,kk,p,a));else add(out,v,k,p,a)}}}
let built:Entry[]|null=null;
export function buildStatic():Entry[]{if(built)return built;const out:Entry[]=[];
(data.studies as unknown as {id:string}[]).forEach(s=>add(out,s,s.id,'study',A(7),s.id));
(data.scenarios as unknown[]).forEach((s,i)=>add(out,s,'Scenario '+(i+1),'simulator',A(7)));
walk(out,moreScenarios as never,'simulator',A(7));walk(out,theodicyScenarios as never,'simulator',A(7));
for(const m of [tqTexts,tqExtra,tqIndex,tqAbrogation,tqDoctrine,torahQuranData,tqContradictions])walk(out,m as never,'torahQuran',A(1));
walk(out,quranComparisons as never,'torahQuran',A(1));
(muhammadQuran as unknown[]).forEach((x,i)=>add(out,x,'Muhammad study '+(i+1),'muhammadQuran',A(1)));
walk(out,manuscriptData as never,'manuscriptCriticism',A(2));walk(out,textualPositions as never,'textualCriticism',A(2));walk(out,understandingTextData as never,'understandingText',A(2));
(textualCriticism as unknown[]).forEach((x,i)=>add(out,x,'Textual study '+(i+1),'textualCriticism',A(2)));
walk(out,logicData as never,'logicArgumentation',A(5));walk(out,logicLabData as never,'logicArgumentation',A(5));
(apologeticsFramework as unknown[]).forEach((x,i)=>add(out,x,'Framework '+(i+1),'apologeticsFramework',A(5)));
walk(out,worldviews as never,'worldviews',A(5));
(wordFaith as unknown[]).forEach((x,i)=>add(out,x,'Word of Faith '+(i+1),'wordFaith',A(6)));
allOT.forEach(r=>add(out,{title:r.topic,kind:r.kind,area:r.area,teaching:r.teaching,cites:r.cites,scripture:r.scripture,response:r.response,note:r.note},r.topic,r.trad==='rc'?'catholic':r.trad,r.trad==='rc'?A(3):r.trad==='lds'?A(4):A(4)));
walk(out,confessionsMod as never,'confessions',A(0));
(c1689.chapters as {n:number;title:string;paras:unknown[]}[]).forEach(ch=>ch.paras.forEach((para,i)=>{const parts:string[]=[];strs(para,parts);const x=clean(parts.join(' '));if(x.length<12)return;const t='1689 '+ch.n+'.'+(i+1)+' '+ch.title;out.push({t,x,a:A(0),p:'confession1689',l:(t+' '+x).toLowerCase()})}));
[...trackALessons,...trackBLessons,...trackCLessons,...courseLessons].forEach(l=>{add(out,{t:l.title,p:l.passage.line,f:l.facts.map(f=>f.x),r:l.refs.map(r=>r.r+' '+r.what),q:l.qs.map(q=>q.q+' '+q.a)},(l.id.startsWith('a-')?'Study course Track A lesson ':l.id.startsWith('b-')?'Study course Track B lesson ':l.id.startsWith('c-')?'Study course Track C lesson ':'Study course lesson ')+l.n+': '+l.title,'curriculum',A(1))});(shiaSunniData.outline as unknown[]).forEach((x,i)=>add(out,x,'Sunni and Shia '+(i+1),'shiaSunni',A(1)));(shiaSunniData.imamate as unknown[]).forEach((x,i)=>add(out,x,'The imamate '+(i+1),'shiaSunni',A(1)));(shiaSunniData.ghadir as unknown[]).forEach((x,i)=>add(out,x,'Ghadīr Khumm '+(i+1),'shiaSunni',A(1)));(shiaSunniData.verses as unknown[]).forEach((x,i)=>add(out,x,'Disputed verse '+(i+1),'shiaSunni',A(1)));(shiaSunniData.sources as unknown[]).forEach((x,i)=>add(out,x,'Saqīfa sources '+(i+1),'shiaSunni',A(1)));(shiaSunniData.reply as unknown[]).forEach((x,i)=>add(out,x,'Sunni and Shia response '+(i+1),'shiaSunni',A(1)));(historyData.councils as unknown[]).forEach((x,i)=>add(out,x,'Council '+(i+1),'churchHistory',A(0)));(historyData.events as unknown[]).forEach((x,i)=>add(out,x,'Heresy '+(i+1),'churchHistory',A(0)));(historyData.baptist as unknown[]).forEach((x,i)=>add(out,x,'Baptist history '+(i+1),'baptistLine',A(0)));(hinduData.texts as unknown[]).forEach((x,i)=>add(out,x,'Hinduism texts '+(i+1),'hinduTexts',A(0)));(hinduData.schools as unknown[]).forEach((x,i)=>add(out,x,'Hinduism schools '+(i+1),'hinduSchools',A(0)));(hinduData.doctrines as unknown[]).forEach((x,i)=>add(out,x,'Hindu doctrine '+(i+1),'hinduSchools',A(0)));(hinduData.bhakti as unknown[]).forEach((x,i)=>add(out,x,'Bhakti '+(i+1),'hinduBhakti',A(0)));(hinduData.primary as unknown[]).forEach((x,i)=>add(out,x,'Hindu primary text '+(i+1),'hinduTexts',A(0)));(hinduData.practices as unknown[]).forEach((x,i)=>add(out,x,'Hindu practice '+(i+1),'hinduPractice',A(0)));(hinduData.critique as unknown[]).forEach((x,i)=>add(out,x,'Hinduism response '+(i+1),'hinduResponse',A(0)));
iAmSearch.parts.forEach(p=>add(out,{title:'Jesus’ “I am” statements: '+p.title,sub:p.sub,body:p.body,rows:(p.rows||[]).map(r=>r.say+' '+r.ref+' '+r.ot),k:'ego eimi I AM Exodus 3:14 Septuagint'},p.title,'iAm',A(7)));iAmSearch.lxx.forEach(r=>add(out,{title:'“I am” in the Septuagint: '+r.ref,g:r.greek,h:r.hebrew,n:r.note,k:'ego eimi I AM Septuagint LXX ani hu'},r.ref,'iAm',A(7)));iAmSearch.objections.forEach(o=>add(out,{title:'“I am” objection: '+o.claim,a:o.answer},o.claim,'iAm',A(7)));
ntMethodSearch.parts.forEach(p=>add(out,{title:'NT textual criticism: '+p.title,sub:p.sub,body:[...p.body,p.differ],k:'textual criticism lectio brevior difficilior Byzantine Alexandrian Western text-type external internal evidence manuscripts papyri majuscule minuscule lectionary'},p.title,'ntMethod',A(2)));ntMethodSearch.views.forEach(v=>add(out,{title:'NT text viewpoint: '+v.name,a:v.text+' '+v.for_+' '+v.against,k:'critical text Majority Text Textus Receptus Confessional Text'},v.name,'ntMethod',A(2)));ntMethodSearch.variants.forEach(v=>add(out,{title:'NT variant: '+v[0],a:v[1]},v[0],'ntMethod',A(2)));
raptureSearch.views.forEach(v=>add(out,{title:'Rapture timing: '+v.name,a:v.line+' '+v.authors+' '+v.case_+' '+v.hard,k:'rapture tribulation pretribulation midtribulation posttribulation pre-wrath prewrath Darby Scofield Daniel seventieth week Revelation 3:10'},v.name,'rapture',A(7)));raptureSearch.passages.forEach(p=>add(out,{title:'Rapture passage: '+p.ref,a:p.note+' '+(p.gr||'')},p.ref,'rapture',A(7)));[...raptureSearch.history,...raptureSearch.puritans].forEach((t,i)=>add(out,{title:'Rapture history and the Puritans '+(i+1),a:t},'Rapture history','rapture',A(7)));
walk(out,primarySources as never,'sources',A(8));walk(out,publicLibrary as never,'publiclibrary',A(8));walk(out,rtsResources as never,'rts',A(8));
(driveCatalog.driveSources as unknown[]).forEach((x,i)=>add(out,x,'Drive source '+(i+1),'drive',A(8)));
built=out;return out}
export async function loadInline():Promise<Entry[]>{const m=await import('./searchInline.json');const arr=(m.default||m) as {p:string;t:string;x:string}[];const base=buildStatic();const keys=base.map(e=>e.l);const AR:Record<string,number>={christologyIslam:1,trinity4171:1,quran:1,hadith:1,torahQuran:1,manuscriptCriticism:2,understandingText:2,textualCriticism:2,logicArgumentation:5,apologeticsFramework:5,muhammadQuran:1,wordFaith:6,sources:8,scripture:9,privacy:8,confessions:0};const out:Entry[]=[];for(const r of arr){const x=clean(r.x);if(x.length<25)continue;const probe=x.slice(0,70).toLowerCase();if(keys.some(k=>k.includes(probe)))continue;const t=clean(r.t||x.slice(0,60));out.push({t,x,a:A(AR[r.p]??9),p:r.p,l:(t+' '+x).toLowerCase()})}return out}
export async function loadQuran():Promise<Entry[]>{const r=await fetch('/corpus/pickthall.json');if(!r.ok)throw Error('HTTP '+r.status);const d=await r.json() as string[][];const out:Entry[]=[];d.forEach((s,i)=>s.forEach((v,j)=>{const t='Qur’an '+(i+1)+':'+(j+1)+' (Pickthall)';out.push({t,x:v,a:A(1),p:'quran',l:(t+' '+v).toLowerCase()})}));return out}
export type Hit={e:Entry;score:number;part?:boolean};
export function fold(v:string){return v.normalize('NFD').replace(/[\u0300-\u036f\u02bf\u02be\u02bb\u02bc]/g,'').replace(/[’‘`]/g,"'")}
export function tokens(q:string){return fold(q.toLowerCase()).split(/[^\p{L}\p{N}’']+/u).filter(w=>w.length>1||/\d/.test(w))}
const STOP=new Set(['the','of','to','in','on','and','or','is','are','was','does','do','did','can','how','what','why','who','where','when','which','it','for','with','about','be','that','this','an']);
const QU=['quran','qur’an',"qur'an",'koran'];
const SYN:Record<string,string[]>={allah:['allah','god'],god:['god','allah'],quran:QU,'qur’an':QU,"qur'an":QU,koran:QU,muhammad:['muhammad','mohammed','muhammed'],mohammed:['muhammad','mohammed'],muhammed:['muhammad','muhammed'],jesus:['jesus','isa','ʿisa','christ'],christ:['christ','jesus'],hadith:['hadith','hadīth','hadiths'],trinity:['trinity','trinitarian'],mormon:['mormon','latter-day','lds'],lds:['lds','latter-day','mormon'],witnesses:['witnesses','watchtower','jw'],jw:['jw','witnesses','watchtower'],catholic:['catholic','rome','roman'],justification:['justification','justified','justify'],bible:['bible','scripture','biblical'],scripture:['scripture','bible'],sin:['sin','sinner','sinners','sins'],abrogation:['abrogat','naskh'],naskh:['naskh','abrogat'],abrogated:['abrogat','naskh'],corruption:['corrupt','tahrif','tahrīf'],tahrif:['tahrif','tahrīf','corrupt'],'eternal':['eternal','everlasting'],security:['security','perseverance','assurance'],assurance:['assurance','security'],hell:['hell','gehenna','jahannam'],paradise:['paradise','heaven','jannah'],prophet:['prophet','prophets','nabi','rasul']};
const SYNF:Record<string,string[]>={};for(const k of Object.keys(SYN)){const fk=fold(k);SYNF[fk]=[...(SYNF[fk]||[]),...SYN[k].map(fold)]}
function alts(w:string):string[]{const s=new Set<string>([w]);(SYNF[w]||[]).forEach(x=>s.add(x));if(w.length>3&&w.endsWith('s'))s.add(w.slice(0,-1));if(w.length>5&&w.endsWith('ing'))s.add(w.slice(0,-3));if(w.length>4&&w.endsWith('ed'))s.add(w.slice(0,-2));return [...s]}
function runOne(all:Entry[],q:string,area:string):Hit[]{const raw=tokens(q);if(!raw.length)return[];const core=raw.filter(w=>!STOP.has(w));const groups=(core.length?core:raw).map(alts);const phrase=fold(q.trim().toLowerCase());const full:Hit[]=[],part:Hit[]=[];const need=groups.length>=3?Math.ceil(groups.length*0.6):groups.length>=2?1:groups.length;for(const e of all){if(area!=='All'&&e.a!==area)continue;const tl=(e.f2??=fold(e.t.toLowerCase()));const el=(e.f??=fold(e.l));let m=0,sc=0,th=false;for(const g of groups){let at=-1,v='';for(const a of g){const k=el.indexOf(a);if(k>=0&&(at<0||k<at)){at=k;v=a}}if(at<0)continue;m++;if(tl.includes(v))th=true;sc+=tl.includes(v)?10:1;let n=0,p=at;while(p>=0&&n<5){n++;p=el.indexOf(v,p+v.length)}sc+=n}if(m<need)continue;if(m===groups.length){if(groups.length>1){if(tl.includes(phrase))sc+=20;else if(el.includes(phrase))sc+=8}sc-=Math.min(e.x.length,3000)/3000;full.push({e,score:sc})}else if(th){part.push({e,score:sc*0.2-Math.min(e.x.length,3000)/3000,part:true})}}full.sort((a,b)=>b.score-a.score);if(full.length>=10||groups.length<2)return full;part.sort((a,b)=>b.score-a.score);return [...full,...part.slice(0,60)]}
type PG={h:string[];r?:string[]};
const PHR:PG[]=[
{h:['sola fide'],r:['justification by faith alone','faith alone','justified by faith']},
{h:['sola scriptura'],r:['scripture alone','scripture only']},
{h:['sola gratia'],r:['grace alone']},
{h:['solus christus'],r:['christ alone']},
{h:['soli deo gloria'],r:['glory to god alone']},
{h:['pactum salutis'],r:['covenant of redemption','counsel of peace']},
{h:['ordo salutis'],r:['order of salvation','application of redemption']},
{h:['historia salutis'],r:['history of redemption','redemptive history']},
{h:['covenant of works'],r:['covenant of life','adamic covenant']},
{h:['covenant of grace'],r:['gracious covenant']},
{h:['protoevangelium'],r:['first gospel','seed of the woman']},
{h:['total depravity','total inability','original sin'],r:['depravity','fallen nature']},
{h:['unconditional election','predestination','foreordination','election']},
{h:['limited atonement','particular redemption','definite atonement']},
{h:['irresistible grace','effectual calling','effectual grace']},
{h:['perseverance of the saints','preservation of the saints','eternal security']},
{h:['tulip','five points of calvinism','doctrines of grace']},
{h:['supralapsarian','infralapsarian','lapsarian','decree order']},
{h:['mortification'],r:['putting to death sin']},
{h:['vivification'],r:['made alive','quickening']},
{h:['sanctification'],r:['holiness','progressive sanctification']},
{h:['christus victor'],r:['victory of christ',"christ's triumph"]},
{h:['penal substitution','substitutionary atonement','propitiation']},
{h:['amillennial','postmillennial','premillennial','amillennialism','postmillennialism','premillennialism'],r:['millennium','thousand years','revelation 20']},
{h:['inaugurated eschatology'],r:['already and not yet','inaugurated']},
{h:['dispensationalism','dispensational','pretribulation']},
{h:['noahic','covenant with noah']},
{h:['davidic','covenant with david']},
{h:['typology'],r:['type and antitype','shadow and fulfillment']},
{h:['perichoresis'],r:['mutual indwelling','coinherence']},
{h:['concurrence','divine concurrence'],r:['providence']}];
const wb=(t:string)=>new RegExp('(^|[^\\p{L}\\p{N}])'+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'($|[^\\p{L}\\p{N}])','u');
const PHF=PHR.map(g=>({h:g.h.map(fold),r:(g.r||[]).map(fold)})).map(g=>({...g,hr:[...g.h,...g.r].map(t=>[t,wb(t)] as [string,RegExp])}));
export function expandQuery(q:string){const fq=fold(q.toLowerCase()).trim();const out=new Set<string>();for(const g of PHF){for(const [t,re] of g.hr){if(!re.test(fq))continue;const isHead=g.h.includes(t);const targets=isHead?[...g.h,...g.r]:g.h;for(const u of targets)if(u!==t)out.add(fq.replace(re,(_m,a,b)=>a+u+b))}}out.delete(fq);return [...out].slice(0,8)}
export function run(all:Entry[],q:string,area:string):Hit[]{const base=runOne(all,q,area);const ex=expandQuery(q);if(!ex.length)return base;const best=new Map<Entry,Hit>();for(const h of base)best.set(h.e,h);for(const x of ex){for(const h of runOne(all,x,area)){const sc=h.score*0.85;const o=best.get(h.e);if(!o||(o.part&&!h.part)||(o.part===h.part&&sc>o.score))best.set(h.e,{...h,score:sc})}}const full:Hit[]=[],part:Hit[]=[];for(const h of best.values())(h.part?part:full).push(h);full.sort((a,b)=>b.score-a.score);part.sort((a,b)=>b.score-a.score);return [...full,...part.slice(0,60)]}
export function snippet(e:Entry,q:string){const toks=tokens(q);const xl=e.x.toLowerCase();let at=-1;for(const w of toks){const i=xl.indexOf(w);if(i>=0&&(at<0||i<at))at=i}if(at<0)return e.x.slice(0,170);const s=Math.max(0,at-60);return (s>0?'…':'')+e.x.slice(s,s+190)+(s+190<e.x.length?'…':'')}
