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
import apologeticsFramework from './apologeticsFrameworkData.json';
import muhammadQuran from './muhammadQuranData.json';
import textualCriticism from './textualCriticismData.json';
import wordFaith from './wordFaithExegesis.json';
import c1689 from './c1689.json';

export type Entry={t:string;x:string;a:string;p:string;l:string;s?:string};
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
walk(out,quranComparisons as never,'quran',A(1));
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
(historyData.councils as unknown[]).forEach((x,i)=>add(out,x,'Council '+(i+1),'churchHistory',A(0)));(historyData.events as unknown[]).forEach((x,i)=>add(out,x,'Heresy '+(i+1),'churchHistory',A(0)));(historyData.baptist as unknown[]).forEach((x,i)=>add(out,x,'Baptist history '+(i+1),'baptistLine',A(0)));
walk(out,primarySources as never,'sources',A(8));walk(out,publicLibrary as never,'publiclibrary',A(8));walk(out,rtsResources as never,'rts',A(8));
(driveCatalog.driveSources as unknown[]).forEach((x,i)=>add(out,x,'Drive source '+(i+1),'drive',A(8)));
built=out;return out}
export async function loadInline():Promise<Entry[]>{const m=await import('./searchInline.json');const arr=(m.default||m) as {p:string;t:string;x:string}[];const base=buildStatic();const keys=base.map(e=>e.l);const AR:Record<string,number>={christologyIslam:1,trinity4171:1,quran:1,hadith:1,torahQuran:1,manuscriptCriticism:2,understandingText:2,textualCriticism:2,logicArgumentation:5,apologeticsFramework:5,muhammadQuran:1,wordFaith:6,sources:8,scripture:9,privacy:8,confessions:0};const out:Entry[]=[];for(const r of arr){const x=clean(r.x);if(x.length<25)continue;const probe=x.slice(0,70).toLowerCase();if(keys.some(k=>k.includes(probe)))continue;const t=clean(r.t||x.slice(0,60));out.push({t,x,a:A(AR[r.p]??9),p:r.p,l:(t+' '+x).toLowerCase()})}return out}
export async function loadQuran():Promise<Entry[]>{const r=await fetch('/corpus/pickthall.json');if(!r.ok)throw Error('HTTP '+r.status);const d=await r.json() as string[][];const out:Entry[]=[];d.forEach((s,i)=>s.forEach((v,j)=>{const t='Qur’an '+(i+1)+':'+(j+1)+' (Pickthall)';out.push({t,x:v,a:A(1),p:'quran',l:(t+' '+v).toLowerCase()})}));return out}
export type Hit={e:Entry;score:number};
export function tokens(q:string){return q.toLowerCase().split(/[^\p{L}\p{N}’']+/u).filter(w=>w.length>1||/\d/.test(w))}
export function run(all:Entry[],q:string,area:string):Hit[]{const toks=tokens(q);if(!toks.length)return[];const phrase=q.trim().toLowerCase();const hits:Hit[]=[];for(const e of all){if(area!=='All'&&e.a!==area)continue;let ok=true,sc=0;const tl=e.t.toLowerCase();for(const w of toks){const i=e.l.indexOf(w);if(i<0){ok=false;break}sc+=tl.includes(w)?10:1;let n=0,at=i;while(at>=0&&n<5){n++;at=e.l.indexOf(w,at+w.length)}sc+=n}if(!ok)continue;if(toks.length>1){if(tl.includes(phrase))sc+=20;else if(e.l.includes(phrase))sc+=8}sc-=Math.min(e.x.length,3000)/3000;hits.push({e,score:sc})}return hits.sort((a,b)=>b.score-a.score)}
export function snippet(e:Entry,q:string){const toks=tokens(q);const xl=e.x.toLowerCase();let at=-1;for(const w of toks){const i=xl.indexOf(w);if(i>=0&&(at<0||i<at))at=i}if(at<0)return e.x.slice(0,170);const s=Math.max(0,at-60);return (s>0?'…':'')+e.x.slice(s,s+190)+(s+190<e.x.length?'…':'')}
