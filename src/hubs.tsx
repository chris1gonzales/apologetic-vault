export type HubDef={id:string,label:string,pages:[string,string][]};
export const hubs:HubDef[]=[
{id:'scripture',label:'Scripture',pages:[['bibleReader','Bible Reader'],['scripture','Research'],['sources','Sources'],['confession1689','1689 Confession'],['workspace','Workspace']]},
{id:'islam',label:'Islam & the Qur’an',pages:[['quran','Qur’anic research'],['hadith','Hadith'],['muhammadQuran','Muhammad & origins'],['christologyIslam','Deity of Christ'],['trinity4171','Qur’an 4:171'],['torahQuran','Torah & Qur’anic accounts']]},
{id:'manuscripts',label:'Manuscripts & textual criticism',pages:[['textualCriticism','Inerrancy & the Bible’s text'],['manuscriptCriticism','OT & Qur’an manuscripts']]},
{id:'method',label:'Apologetics method',pages:[['logicArgumentation','Logic & TAG'],['apologeticsFramework','Standards & method']]},
{id:'other',label:'Other teachings',pages:[['wordFaith','Word of Faith & NAR'],['catholic','Roman Catholicism'],['lds','Latter-day Saints'],['jw','Jehovah’s Witnesses'],['worldviews','Comparative worldviews']]},
{id:'libraries',label:'Libraries',pages:[['publiclibrary','Public domain'],['rts','RTS'],['drive','Drive catalog']]}];
export const hubOf=(page:string)=>hubs.find(h=>h.pages.some(p=>p[0]===page));
export function HubBar({hub,page,nav}:{hub:HubDef,page:string,nav:(p:any)=>void}){
return <nav className="hub-bar" aria-label={hub.label}><span className="hub-title">{hub.label}</span><div className="hub-tabs">{hub.pages.map(([id,l])=><button key={id} className={id===page?'active':''} aria-current={id===page?'page':undefined} onClick={()=>nav(id)}>{l}</button>)}</div></nav>}
