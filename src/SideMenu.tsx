import {useEffect,useState} from 'react';
import {ChevronDown,ChevronRight} from 'lucide-react';
export type MenuGroup={id:string;label:string;items:[string,string][]};
export const menuGroups:MenuGroup[]=[
{id:'start',label:'Start',items:[['home','Overview'],['search','Search'],['curriculum','Study course']]},
{id:'scripture',label:'Scripture',items:[['bibleReader','Bible Reader'],['passageFinder','Find a passage'],['phraseSearch','Phrase search'],['scripture','Scripture research'],['workspace','Scripture workspace'],['exegesis','Biblical Exegesis'],['confession1689','1689 Confession'],['sources','Sources']]},
{id:'theology',label:'Theology and history',items:[['theology','Systematic Theology'],['history','Historical Theology'],['churchHistory','Councils & the Fathers'],['baptistLine','The Baptist line'],['confessions','Creeds & Confessions']]},
{id:'apologetics',label:'Apologetics and method',items:[['apologetics','Christian Apologetics'],['simulator','Apologetics Simulator'],['logicArgumentation','Logic & TAG'],['apologeticsFramework','Standards & method']]},
{id:'islam',label:'Islam and the Qur’an',items:[['quran','Qur’anic research'],['phraseQuran','Qur’an phrase search'],['shiaSunni','Sunni & Shia'],['hadith','Hadith'],['muhammadQuran','Muhammad & origins'],['christologyIslam','Deity of Christ'],['trinity4171','Qur’an 4:171'],['torahQuran','Torah & Qur’anic accounts']]},
{id:'other',label:'Other teachings',items:[['wordFaith','Word of Faith & NAR'],['catholic','Roman Catholicism'],['lds','Latter-day Saints'],['jw','Jehovah’s Witnesses'],['worldviews','Comparative worldviews'],['hinduTexts','Hinduism']]},
{id:'manuscripts',label:'Manuscripts and text',items:[['criticism','Textual Criticism'],['textualCriticism','Inerrancy & the Bible’s text'],['understandingText','Understanding the text'],['manuscriptCriticism','OT & Qur’an manuscripts']]},
{id:'library',label:'Libraries',items:[['library','Research Library'],['publiclibrary','Public domain'],['rts','RTS'],['drive','Drive catalog']]},
{id:'personal',label:'Personal',items:[['notes','My Notes & Bookmarks'],['privacy','Privacy & Deployment']]}];
const alias=(p:string)=>p.startsWith('hindu')?'hinduTexts':p==='comparisons'?'catholic':p==='study'?'':p;
export const groupOf=(page:string)=>{const a=alias(page);return menuGroups.find(g=>g.items.some(i=>i[0]===a))?.id||''};
export default function SideMenu({page,nav}:{page:string;nav:(p:any)=>void}){
const [open,setOpen]=useState<Record<string,boolean>>(()=>({[groupOf(page)||'start']:true}));
useEffect(()=>{const g=groupOf(page);if(g)setOpen(o=>o[g]?o:{...o,[g]:true})},[page]);
const cur=alias(page);
return <div className="side-menu">{menuGroups.map(g=>{const isOpen=!!open[g.id];const has=g.id===groupOf(page);return <div key={g.id} className={'menu-group'+(has?' has-current':'')}><button className="menu-head" aria-expanded={isOpen} onClick={()=>setOpen(o=>({...o,[g.id]:!o[g.id]}))}>{isOpen?<ChevronDown size={16}/>:<ChevronRight size={16}/>}<span>{g.label}</span></button>{isOpen&&<div className="menu-items">{g.items.map(([id,l])=><button key={id} className={'nav-link menu-link '+(id===cur?'current':'')} aria-current={id===cur?'page':undefined} onClick={()=>nav(id)}>{l}</button>)}</div>}</div>})}</div>}
