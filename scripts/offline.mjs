import {readdir,readFile,writeFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
async function walk(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=dir+'/'+e.name;if(e.isDirectory())out.push(...await walk(p));else if(!['sw.js','_headers'].includes(e.name))out.push(p)}return out}
const files=(await walk('dist')).sort();const hash=createHash('sha256');for(const f of files){hash.update(f);hash.update(await readFile(f))}
const cache='vr-offline-'+hash.digest('hex').slice(0,20);
const core=[],large=[];for(const f of files){const p='/'+f.slice(5);((await stat(f)).size>2e6?large:core).push(p)}
const sw=`const CACHE=${JSON.stringify(cache)}, CORE=${JSON.stringify(core)}, LARGE=${JSON.stringify(large)}, ALL=CORE.concat(LARGE);
let largeJob=null;
async function fetchLarge(){const c=await caches.open(CACHE);for(const p of LARGE){if(await c.match(p))continue;try{const r=await fetch(new Request(p,{cache:'reload'}));if(r.ok)await c.put(p,r)}catch(_){}}}
function startLarge(){if(!largeJob)largeJob=fetchLarge().finally(()=>{largeJob=null});return largeJob}
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(CORE.map(p=>new Request(p,{cache:'reload'})))})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('vr-offline-')&&k!==CACHE)await caches.delete(k);await self.clients.claim();startLarge()})()));
self.addEventListener('message',e=>{
if(e.data==='VR_ACTIVATE')self.skipWaiting();
if(e.data==='VR_STATUS'||e.data==='VR_FETCH')e.waitUntil((async()=>{
if(e.data==='VR_FETCH')startLarge();
const c=await caches.open(CACHE);const have=await Promise.all(ALL.map(p=>c.match(p).then(Boolean)));
const done=have.filter(Boolean).length;
e.ports[0]&&e.ports[0].postMessage({ready:done===ALL.length,done,total:ALL.length,busy:!!largeJob,cache:CACHE});
if(e.data==='VR_FETCH'&&largeJob)await largeJob;
})())});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;if(e.request.mode==='navigate'){e.respondWith(caches.open(CACHE).then(c=>c.match('/index.html')).then(r=>r||fetch(e.request)));return;}if(ALL.includes(u.pathname))e.respondWith(caches.open(CACHE).then(c=>c.match(u.pathname)).then(r=>r||fetch(e.request)));});`;
await writeFile('dist/sw.js',sw);
console.log('Offline manifest:',core.length,'core +',large.length,'large',cache);
