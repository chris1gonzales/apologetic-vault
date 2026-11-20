import {useEffect,useState} from 'react';
type St={ready:boolean,done:number,total:number};
export default function OfflineStatus(){
const [online,setOnline]=useState(navigator.onLine),[status,setStatus]=useState('Preparing offline files…'),[waiting,setWaiting]=useState<ServiceWorker|null>(null),[hidden,setHidden]=useState(false),[ready,setReady]=useState(false),[help,setHelp]=useState(false);
useEffect(()=>{
const sync=()=>setOnline(navigator.onLine);window.addEventListener('online',sync);window.addEventListener('offline',sync);
let disposed=false,timer:number|undefined,tries=0,reg:ServiceWorkerRegistration|undefined;
const ask=(msg:string)=>new Promise<St|null>(res=>{const w=reg?.active;if(!w){res(null);return}const ch=new MessageChannel();const t=window.setTimeout(()=>res(null),8000);ch.port1.onmessage=e=>{clearTimeout(t);res(e.data);ch.port1.close()};w.postMessage(msg,[ch.port2])});
const poll=async()=>{if(disposed)return;tries++;const r=await ask(tries%4===1?'VR_FETCH':'VR_STATUS');if(disposed)return;
if(r?.ready){setReady(true);setStatus('Offline research ready');window.setTimeout(()=>!disposed&&setHidden(true),4000);return}
if(r)setStatus(`Saving offline files… ${r.done}/${r.total}`);
if(tries>150){setStatus('Offline files incomplete — stay online and reload');return}
timer=window.setTimeout(poll,2500)};
const inspect=()=>{if(disposed)return;setWaiting(reg?.waiting||null)};
if(!('serviceWorker' in navigator)||location.port==='5173'){setStatus('Offline installation requires the production HTTPS site')}
else navigator.serviceWorker.register('/sw.js').then(r=>{if(disposed)return;reg=r;inspect();r.addEventListener('updatefound',()=>{r.installing?.addEventListener('statechange',inspect)});navigator.serviceWorker.ready.then(()=>{if(!disposed&&!timer)poll()});r.update().catch(()=>{})}).catch(()=>setStatus('Offline setup failed; reconnect and reload'));
return()=>{disposed=true;clearTimeout(timer);window.removeEventListener('online',sync);window.removeEventListener('offline',sync)}},[]);
if(hidden&&!waiting)return null;
return <div role="status" style={{position:'fixed',bottom:12,right:12,zIndex:90,background:'#111827',color:'#fff',padding:'8px 12px',border:'1px solid #bfa66c',borderRadius:8,maxWidth:'85vw',fontSize:12}}>
<button aria-label="Dismiss" onClick={()=>setHidden(true)} style={{float:'right',marginLeft:10,background:'none',border:0,color:'#fff',fontSize:16,lineHeight:1,cursor:'pointer'}}>×</button>
{online?'Online':'Offline'} · {status}{ready&&' ✓'}
{waiting&&<button style={{marginLeft:8}} onClick={()=>{navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload(),{once:true});waiting.postMessage('VR_ACTIVATE')}}>Apply update</button>}
<div><button onClick={()=>setHelp(h=>!h)} style={{background:'none',border:0,color:'#bfa66c',padding:0,fontSize:11,cursor:'pointer'}}>{help?'Hide help':'Install help'}</button>{help&&<div style={{marginTop:4}}>Use your browser’s Install app or Add to Home Screen option. External sites require internet. Export notes before clearing site data.</div>}</div></div>}
