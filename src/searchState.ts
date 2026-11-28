// Remembers the last search view so "Back to results" can restore it (kept in memory only).
export const searchState={saved:{q:'',area:'All',limit:40,y:0} as {q:string;area:string;limit:number;y:number;view?:'grouped'|'list';ex?:string[]},restore:false};
