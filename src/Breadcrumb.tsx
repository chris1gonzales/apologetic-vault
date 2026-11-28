import {menuGroups,groupOf} from './SideMenu';
import {ChevronRight} from 'lucide-react';
export default function Breadcrumb({page,nav,study,fromSearch,onBack}:{page:string;nav:(p:any)=>void;study?:{moduleId:string;moduleTitle:string;title:string};fromSearch:boolean;onBack:()=>void}){
if(page==='home')return null;
const alias=page.startsWith('hindu')?'hinduTexts':page==='comparisons'?'catholic':page;
const modId=page==='study'&&study?study.moduleId:alias;
const g=menuGroups.find(x=>x.id===groupOf(modId));
const item=g?.items.find(i=>i[0]===modId);
const crumbs:{label:string;go?:()=>void}[]=[];
if(g&&g.id!=='start')crumbs.push({label:g.label,go:()=>nav(g.items[0][0])});
if(item)crumbs.push({label:item[1],go:page==='study'?()=>nav(modId):undefined});
if(page==='study'&&study)crumbs.push({label:study.title});
return <nav className="crumbs no-print" aria-label="Breadcrumb">
{fromSearch&&<button className="crumb-back" onClick={onBack}>← Back to results</button>}
<ol>{crumbs.map((c,i)=><li key={i}>{i>0&&<ChevronRight size={13} aria-hidden="true"/>}{c.go?<button onClick={c.go}>{c.label}</button>:<span aria-current={i===crumbs.length-1?'page':undefined}>{c.label}</span>}</li>)}</ol></nav>}
