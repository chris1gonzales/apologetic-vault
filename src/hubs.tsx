export type HubDef={id:string,label:string,pages:[string,string][],also?:string[]};
export const hubs:HubDef[]=[
{id:'scripture',label:'Scripture',pages:[['bibleReader','Bible Reader'],['passageFinder','Find a passage'],['phraseSearch','Phrase search'],['scripture','Research'],['sources','Sources'],['confession1689','1689 Confession'],['workspace','Workspace']]},
{id:'history',label:'Historical theology',pages:[['rapture','Rapture timing'],['history','Studies'],['churchHistory','Councils & the Fathers'],['baptistLine','The Baptist line'],['confessions','Creeds & Confessions']]},
{id:'islam',label:'Islam & the Qur’an',pages:[['quran','Qur’anic research'],['phraseQuran','Phrase search'],['shiaSunni','Sunni & Shia'],['hadith','Hadith'],['muhammadQuran','Muhammad & origins'],['christologyIslam','Deity of Christ'],['trinity4171','Qur’an 4:171'],['iAm','Jesus’ “I am” sayings'],['torahQuran','Torah & Qur’anic accounts']]},
{id:'manuscripts',label:'Manuscripts & textual criticism',pages:[['textualCriticism','Inerrancy & the Bible’s text'],['understandingText','Understanding the text'],['ntMethod','NT method'],['manuscriptCriticism','OT & Qur’an manuscripts']]},
{id:'method',label:'Apologetics method',pages:[['logicArgumentation','Logic & TAG'],['apologeticsFramework','Standards & method']]},
{id:'other',label:'Other teachings',pages:[['wordFaith','Word of Faith & NAR'],['catholic','Roman Catholicism'],['lds','Latter-day Saints'],['jw','Jehovah’s Witnesses'],['worldviews','Comparative worldviews'],['hinduTexts','Hinduism']],also:['hinduSchools','hinduBhakti','hinduPractice','hinduResponse']},
{id:'libraries',label:'Libraries',pages:[['publiclibrary','Public domain'],['rts','RTS'],['drive','Drive catalog']]}];
export const hubOf=(page:string)=>hubs.find(h=>h.pages.some(p=>p[0]===page)||(h.also||[]).includes(page));
export function HubBar({hub,page,nav}:{hub:HubDef,page:string,nav:(p:any)=>void}){
return <nav className="hub-bar" aria-label={hub.label}><span className="hub-title">{hub.label}</span><div className="hub-tabs">{hub.pages.map(([id,l])=><button key={id} className={(id===page||(id==='hinduTexts'&&page.startsWith('hindu')))?'active':''} aria-current={(id===page||(id==='hinduTexts'&&page.startsWith('hindu')))?'page':undefined} onClick={()=>nav(id)}>{l}</button>)}</div></nav>}
