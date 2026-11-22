const BOOKS=['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Psalm','Proverbs','Ecclesiastes','Song of Solomon','Song of Songs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation'];
const ONE=['Obadiah','Philemon','2 John','3 John','Jude'];
export function bibleHubUrl(ref:string):string|null{
const book=BOOKS.filter(b=>ref.startsWith(b+' ')).sort((a,b)=>b.length-a.length)[0];if(!book)return null;
const m=ref.slice(book.length+1).match(/^(\d+)(?::(\d+))?/);if(!m)return null;
let slug=book.toLowerCase().replace(/ /g,'_');if(slug==='psalm')slug='psalms';if(slug==='song_of_songs')slug='song_of_solomon';
let ch=m[1],v=m[2];if(ONE.includes(book)&&!v){v=ch;ch='1'}
return 'https://biblehub.com/nasb/'+slug+'/'+ch+(v?'-'+v:'')+'.htm'}
export function Ref({r}:{r:string}){const u=bibleHubUrl(r);if(!u)return <>{r}</>;
return <a href={u} target="_blank" rel="noopener noreferrer" title="Open in the NASB on Bible Hub (internet required)" onClick={e=>e.stopPropagation()} style={{color:'inherit',textDecoration:'underline dotted',textUnderlineOffset:3}}>{r}</a>}
