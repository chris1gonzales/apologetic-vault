import {useEffect,useState} from 'react';
// Hash format: #page or #page?tab=x  (study pages: #study?id=...)
export function parseHash(){const h=location.hash.slice(1);const i=h.indexOf('?');return{page:i<0?h:h.slice(0,i),params:new URLSearchParams(i<0?'':h.slice(i+1))}}
export function buildHash(page:string,params:URLSearchParams){const s=params.toString();return '#'+page+(s?'?'+s:'')}
// Tab state kept in the URL: a tab click adds a history entry; Back/Forward restore it.
export function useUrlTab<T extends string>(initial:T,valid:readonly string[],override?:T):[T,(v:T)=>void]{
const read=():T=>{const v=parseHash().params.get('tab');return (v&&valid.includes(v)?v:initial) as T};
const [val,setVal]=useState<T>(()=>override??read());
useEffect(()=>{const f=()=>setVal(read());window.addEventListener('popstate',f);return()=>window.removeEventListener('popstate',f)},[]);
const set=(v:T)=>{setVal(v);try{const {page,params}=parseHash();if(params.get('tab')===v||(v===initial&&!params.has('tab')))return;if(v===initial)params.delete('tab');else params.set('tab',v);history.pushState(null,'',buildHash(page,params))}catch{}};
return [val,set]}
