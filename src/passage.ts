import books from './bibleBooks.json';
import {bibleHubUrl} from './bibleLink';

export type Corp=Record<string,string[][]>;
export type Item={ref:string,en:string,orig?:string,url:string|null};
export type Found={kind:'bible'|'quran',title:string,items:Item[],note?:string,error?:string};

const ONE_CHAPTER=new Set(['Obadiah','Philemon','2 John','3 John','Jude']);
const AB:Record<string,string[]>={
'Genesis':['gen','ge','gn'],'Exodus':['exod','exo','ex'],'Leviticus':['lev','le','lv'],'Numbers':['num','nu','nm','nb'],'Deuteronomy':['deut','dt','de'],
'Joshua':['josh','jos','jsh'],'Judges':['judg','jdg','jg'],'Ruth':['rth','ru'],'1 Samuel':['sam','sa','sm'],'2 Samuel':['sam','sa','sm'],
'1 Kings':['kgs','ki','kin','kings'],'2 Kings':['kgs','ki','kin','kings'],'1 Chronicles':['chron','chr','ch'],'2 Chronicles':['chron','chr','ch'],
'Ezra':['ezr'],'Nehemiah':['neh','ne'],'Esther':['esth','es'],'Job':['jb'],'Psalms':['ps','psa','psalm','pslm','psm','pss'],
'Proverbs':['prov','pro','prv','pr'],'Ecclesiastes':['eccl','eccles','ecc','ec','qoh'],'Song of Solomon':['song','sos','ss','song of songs','canticles','sg'],
'Isaiah':['isa','is'],'Jeremiah':['jer','je','jr'],'Lamentations':['lam','la'],'Ezekiel':['ezek','eze','ezk'],'Daniel':['dan','da','dn'],
'Hosea':['hos','ho'],'Joel':['jl'],'Amos':['am'],'Obadiah':['obad','ob'],'Jonah':['jon','jnh'],'Micah':['mic','mc'],'Nahum':['nah','na'],
'Habakkuk':['hab','hb'],'Zephaniah':['zeph','zep','zp'],'Haggai':['hag','hg'],'Zechariah':['zech','zec','zc'],'Malachi':['mal','ml'],
'Matthew':['matt','mt'],'Mark':['mrk','mk','mr'],'Luke':['luk','lk'],'John':['jhn','jn'],'Acts':['ac'],'Romans':['rom','ro','rm'],
'1 Corinthians':['cor','co'],'2 Corinthians':['cor','co'],'Galatians':['gal','ga'],'Ephesians':['eph','ephes'],'Philippians':['phil','php','pp'],
'Colossians':['col'],'1 Thessalonians':['thess','thes','th'],'2 Thessalonians':['thess','thes','th'],'1 Timothy':['tim','ti'],'2 Timothy':['tim','ti'],
'Titus':['tit'],'Philemon':['philem','phm','pm'],'Hebrews':['heb'],'James':['jas','jm'],'1 Peter':['pet','pe','pt'],'2 Peter':['pet','pe','pt'],
'1 John':['jn','jhn','jo'],'2 John':['jn','jhn','jo'],'3 John':['jn','jhn','jo'],'Jude':['jud','jd'],'Revelation':['rev','re','rv','revelations','the revelation']};

const norm=(s:string)=>s.toLowerCase().replace(/[.’']/g,'').replace(/\s+/g,' ').trim();
function lead(s:string){return s.replace(/^(iii|ii|i)\s+/,m=>({'iii ':'3 ','ii ':'2 ','i ':'1 '} as Record<string,string>)[m]||m).replace(/^([123])(?=[a-z])/,'$1 ')}
const table=(()=>{const t=new Map<string,string[]>();const add=(k:string,n:string)=>{const a=t.get(k)||[];if(!a.includes(n))a.push(n);t.set(k,a)};
for(const b of books){add(norm(b.name),b.name);const m=b.name.match(/^([123]) (.+)$/);for(const a of AB[b.name]||[]){add(m?m[1]+' '+a:a,b.name)}
if(m)add(m[1]+' '+norm(m[2]),b.name)}return t})();

export function findBook(raw:string):{book?:string,error?:string}{
const k=lead(norm(raw));if(!k)return{error:'Type a book name, for example John or Gen.'};
const ex=table.get(k);if(ex&&ex.length===1)return{book:ex[0]};
if(ex&&ex.length>1)return{error:`“${raw}” fits more than one book: ${ex.join(', ')}.`};
const pre=new Set<string>();for(const [key,names] of table)if(key.startsWith(k)&&k.length>=3)names.forEach(n=>pre.add(n));
if(pre.size===1)return{book:[...pre][0]};
if(pre.size>1)return{error:`“${raw}” fits more than one book: ${[...pre].slice(0,6).join(', ')}.`};
return{error:`I don’t know a Bible book called “${raw}”. For the Qur’an, start with Q or Surah.`}}

export type Range={c1:number,v1:number|null,c2:number,v2:number|null,whole:boolean};
function ranges(rest:string,oneCh:boolean):Range|string{
const r=rest.replace(/[–—−]/g,'-').replace(/\s*([-:])\s*/g,'$1').replace(/\./g,':').trim();
let m:RegExpMatchArray|null;
const n=(x:string)=>parseInt(x,10);
if(!r)return 'Add a chapter or verse, for example 3:16.';
if(oneCh){
 if((m=r.match(/^(\d+)$/)))return{c1:1,v1:n(m[1]),c2:1,v2:n(m[1]),whole:false};
 if((m=r.match(/^(\d+)-(\d+)$/)))return{c1:1,v1:n(m[1]),c2:1,v2:n(m[2]),whole:false};
 if((m=r.match(/^1:(\d+)(?:-(\d+))?$/)))return{c1:1,v1:n(m[1]),c2:1,v2:n(m[2]||m[1]),whole:false};
 return 'This book has one chapter. Try a verse or range, for example 3-10.'}
if((m=r.match(/^(\d+)$/)))return{c1:n(m[1]),v1:null,c2:n(m[1]),v2:null,whole:true};
if((m=r.match(/^(\d+)-(\d+)$/)))return{c1:n(m[1]),v1:null,c2:n(m[2]),v2:null,whole:true};
if((m=r.match(/^(\d+):(\d+)$/)))return{c1:n(m[1]),v1:n(m[2]),c2:n(m[1]),v2:n(m[2]),whole:false};
if((m=r.match(/^(\d+):(\d+)-(\d+)$/)))return{c1:n(m[1]),v1:n(m[2]),c2:n(m[1]),v2:n(m[3]),whole:false};
if((m=r.match(/^(\d+):(\d+)-(\d+):(\d+)$/)))return{c1:n(m[1]),v1:n(m[2]),c2:n(m[3]),v2:n(m[4]),whole:false};
return 'I could not read that. Try forms like 3:16, 3:16-21, 1:1-2:3, 23 or 22-24.'}

const QRE=/^(?:q|qur'?an|quran|koran|surah|sura|surat)(?![a-z])\.?\s*(.*)$/i;
export const isQuran=(s:string)=>QRE.test(s.trim().replace(/[’]/g,"'"));
export const MAX=600;
const dash='–';

export function lookupBible(input:string,en:Corp,orig:Corp|null):Found{
const s=input.trim();
const m=s.match(/^((?:[123]|i{1,3})?\s*[A-Za-z][A-Za-z.'’ ]*?)\s*(\d[\d\s:.\-–—−]*)$/);
if(!m)return{kind:'bible',title:s,items:[],error:'Start with a book name, then a chapter or verse range, for example John 3:16-21. For the Qur’an, start with Q or Surah.'};
const b=findBook(m[1]);if(!b.book)return{kind:'bible',title:s,items:[],error:b.error};
const book=b.book,chs=en[book];if(!chs)return{kind:'bible',title:s,items:[],error:`${book} is not in the stored text.`};
const rg=ranges(m[2],ONE_CHAPTER.has(book));if(typeof rg==='string')return{kind:'bible',title:s,items:[],error:rg};
const last=chs.length;
if(rg.c1<1||rg.c1>last||rg.c2<1||rg.c2>last)return{kind:'bible',title:s,items:[],error:`${book} has ${last} chapter${last===1?'':'s'}.`};
if(rg.c2<rg.c1)return{kind:'bible',title:s,items:[],error:'The range runs backward; put the earlier chapter first.'};
const v1=rg.v1??1,v2=rg.v2??chs[rg.c2-1].length;
if(rg.v1!==null&&(v1<1||v1>chs[rg.c1-1].length))return{kind:'bible',title:s,items:[],error:`${book} ${rg.c1} has ${chs[rg.c1-1].length} verses.`};
if(rg.v2!==null&&(v2<1||v2>chs[rg.c2-1].length))return{kind:'bible',title:s,items:[],error:`${book} ${rg.c2} has ${chs[rg.c2-1].length} verses.`};
if(rg.c1===rg.c2&&v2<v1)return{kind:'bible',title:s,items:[],error:'The range runs backward; put the earlier verse first.'};
const items:Item[]=[];let cut=false;
outer:for(let c=rg.c1;c<=rg.c2;c++){const vs=chs[c-1];const a=c===rg.c1?v1:1,z=c===rg.c2?v2:vs.length;
 for(let v=a;v<=z;v++){if(items.length>=MAX){cut=true;break outer}
  items.push({ref:`${c}:${v}`,en:vs[v-1],orig:orig?.[book]?.[c-1]?.[v-1],url:bibleHubUrl(`${book} ${c}:${v}`)})}}
const single=ONE_CHAPTER.has(book);
const fmt=(c:number,v:number)=>single?String(v):`${c}:${v}`;
const label=rg.whole?(rg.c1===rg.c2?`${book} ${rg.c1}`:`${book} ${rg.c1}${dash}${rg.c2}`):
 (rg.c1===rg.c2&&v1===v2?`${book} ${fmt(rg.c1,v1)}`:rg.c1===rg.c2?`${book} ${fmt(rg.c1,v1)}${dash}${v2}`:`${book} ${fmt(rg.c1,v1)}${dash}${fmt(rg.c2,v2)}`);
return{kind:'bible',title:label,items,note:cut?`Showing the first ${MAX} verses. Narrow the range to see the rest.`:undefined}}

export function parseArabic(raw:string):Record<string,string>{const m:Record<string,string>={};
for(const l of raw.split('\n')){const p=l.split('|');if(p.length>=3&&/^\d+$/.test(p[0])&&/^\d+$/.test(p[1]))m[p[0]+':'+p[1]]=p.slice(2).join('|').trim()}return m}

export function lookupQuran(input:string,en:string[][],ar:Record<string,string>|null):Found{
const s=input.trim().replace(/[’]/g,"'");const m=s.match(QRE);
const rest=m?m[1]:s;
const e=(msg:string):Found=>({kind:'quran',title:s,items:[],error:msg});
const rg=ranges(rest,false);if(typeof rg==='string')return e(rg);
const last=en.length;
if(rg.c1<1||rg.c1>last||rg.c2<1||rg.c2>last)return e(`The Qur’an has ${last} surahs.`);
if(rg.c2<rg.c1)return e('The range runs backward; put the earlier surah first.');
const v1=rg.v1??1,v2=rg.v2??en[rg.c2-1].length;
if(rg.v1!==null&&(v1<1||v1>en[rg.c1-1].length))return e(`Surah ${rg.c1} has ${en[rg.c1-1].length} verses.`);
if(rg.v2!==null&&(v2<1||v2>en[rg.c2-1].length))return e(`Surah ${rg.c2} has ${en[rg.c2-1].length} verses.`);
if(rg.c1===rg.c2&&v2<v1)return e('The range runs backward; put the earlier verse first.');
const items:Item[]=[];let cut=false;
outer:for(let c=rg.c1;c<=rg.c2;c++){const vs=en[c-1];const a=c===rg.c1?v1:1,z=c===rg.c2?v2:vs.length;
 for(let v=a;v<=z;v++){if(items.length>=MAX){cut=true;break outer}
  items.push({ref:`${c}:${v}`,en:vs[v-1],orig:ar?.[c+':'+v],url:`https://quran.com/${c}:${v}`})}}
const label=rg.whole?(rg.c1===rg.c2?`Q ${rg.c1}`:`Q ${rg.c1}${dash}${rg.c2}`):
 (rg.c1===rg.c2&&v1===v2?`Q ${rg.c1}:${v1}`:rg.c1===rg.c2?`Q ${rg.c1}:${v1}${dash}${v2}`:`Q ${rg.c1}:${v1}${dash}${rg.c2}:${v2}`);
return{kind:'quran',title:label,items,note:cut?`Showing the first ${MAX} verses. Narrow the range to see the rest.`:undefined}}
