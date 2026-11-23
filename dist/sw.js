const CACHE="vr-offline-b61d831e09d7dd610d20", CORE=["/assets/index-1QcdrPYP.css","/assets/index-Cm5f8m6B.js","/corpus/greek-sblgnt.json","/corpus/pickthall.json","/corpus/quran-english-curated.json","/corpus/quran-simple-v1.1.txt","/favicon.svg","/icon-192.png","/icon-512.png","/index.html","/manifest.webmanifest"], LARGE=["/corpus/bsb.json","/corpus/bukhari-full.json","/corpus/hebrew-wlc.json","/corpus/kjv.json","/references/saheeh-international.pdf"], ALL=CORE.concat(LARGE);
let largeJob=null;
async function fetchLarge(){const c=await caches.open(CACHE);for(const p of LARGE){if(await c.match(p))continue;try{const r=await fetch(new Request(p,{cache:'reload'}));if(r.ok)await c.put(p,r)}catch(_){}}}
function startLarge(){if(!largeJob)largeJob=fetchLarge().finally(()=>{largeJob=null});return largeJob}
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(CORE.map(p=>new Request(p,{cache:'reload'})));self.skipWaiting()})()));
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
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;if(e.request.mode==='navigate'){e.respondWith(caches.open(CACHE).then(c=>c.match('/index.html')).then(r=>r||fetch(e.request)));return;}if(ALL.includes(u.pathname))e.respondWith(caches.open(CACHE).then(c=>c.match(u.pathname)).then(r=>r||fetch(e.request)));});