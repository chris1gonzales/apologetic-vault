import SrcLink from './SrcLink';
type Claim={t:string,src:string[],st:'checked'|'secondary'|'verify'};
type Stage={n:string,title:string,source:string,claims:Claim[],views:string};
const stages:Stage[]=[
{n:'1',title:'Oral stage: revelation, recitation and memory',source:'Later reports (hadith and sīra). The Qur’an itself speaks of recitation, but the accounts of how it was learned come after the events.',
claims:[
{t:'Muslim tradition says the revelations were given between about 610 and 632 CE and were first preserved in memory. Parts were also written on parchment, stone, palm leaves and shoulder bones.',src:['birm'],st:'checked'},
{t:'Anas reports that four men of the Anṣār collected the Qur’an in the Prophet’s lifetime: Ubayy, Muʿādh ibn Jabal, Abū Zayd and Zayd ibn Thābit.',src:['bukh3810'],st:'checked'}],
views:'Muslim scholars treat the Prophet’s own recitation and the Companions’ memorization as the primary channel. Critical scholars ask how much of the later account reflects the earliest period, and Sadeghi and Goudarzi describe early transmission as semi-oral, with hearers writing down the text recited by the Prophet.'},
{n:'2',title:'Written fragments and Companion codices',source:'Reports in hadith and tafsīr, plus the earliest material evidence (see stage 6).',
claims:[
{t:'Early copies are reported under the names of Companions such as Ibn Masʿūd and Ubayy, with differing sūra order and some different readings. Jeffery collected these reports and the Kitāb al-Maṣāḥif of Ibn Abī Dāwūd.',src:['jeffery'],st:'verify'},
{t:'Sadeghi and Bergmann argue that the lower text of the Ṣanʿāʾ palimpsest belongs to a text type other than the ʿUthmānic one.',src:['sb2010','sg2012'],st:'verify'}],
views:'Traditional scholars hold that these were personal copies that gave way to the ʿUthmānic standard. Critical scholars use them to study how the text was fixed.'},
{n:'3',title:'Abū Bakr’s collection',source:'Ṣaḥīḥ al-Bukhārī, compiled long after the events.',
claims:[
{t:'After heavy losses among reciters at Yamāma, ʿUmar urged Abū Bakr to have the Qur’an collected. Zayd ibn Thābit did the work, and the sheets passed from Abū Bakr to ʿUmar to Ḥafṣa.',src:['bukh4986'],st:'checked'}],
views:'Muslim scholars accept the report. Critical scholars ask how far a hadith in a ninth-century collection can describe events in 632–634, and compare it with other accounts of the collection.'},
{n:'4',title:'ʿUthmān’s standard text',source:'Ṣaḥīḥ al-Bukhārī and Ibn Abī Dāwūd’s Kitāb al-Maṣāḥif.',
claims:[
{t:'When Ḥudhayfa saw differences in recitation, ʿUthmān asked Ḥafṣa for the sheets and had Zayd, ʿAbdullāh ibn al-Zubayr, Saʿīd ibn al-ʿĀṣ and ʿAbd al-Raḥmān ibn al-Ḥārith copy them. If they disagreed with Zayd, they were to write in the dialect of Quraysh. Copies went to the provinces, and other material was ordered burned.',src:['bukh4987'],st:'checked'},
{t:'Déroche’s study of the Umayyad-period codices concludes that the written history is more complex than the traditional account.',src:['deroche14'],st:'checked'}],
views:'Traditional Muslim scholarship treats this as the standardization of the text. Scholars differ on when the consonantal text reached closure; Sinai argues the evidence fits the conventional early dating.'},
{n:'5',title:'The reading traditions (qirāʾāt) and the seven readers',source:'Later works on the readings. Ibn Mujāhid wrote the Kitāb al-Sabʿa about 324/936.',
claims:[
{t:'Ibn Mujāhid (d. 324/936) surveyed readings from seven earlier specialists. He accepted almost every reading of his seven, and Ibn al-Nadīm seems the earliest to read his choice of seven as excluding all others.',src:['melchert'],st:'checked'}],
views:'The seven and ten readings are the Muslim account of recitation that matches a consonantal text. How early the readings were fixed, and how they relate to the aḥruf, is a standing discussion.'},
{n:'6',title:'Material evidence: manuscripts and inscriptions',source:'Physical objects, dated by script and by radiocarbon, with ranges rather than exact years.',
claims:[
{t:'Birmingham (Mingana 1572a): parchment dated 568–645 CE at 95.4%, with parts of Q 18–20 in Ḥijāzī script. Another early folio’s parchment has been dated 609–94 CE at 95.2% (Dutton).',src:['birm','sinai1'],st:'checked'},
{t:'Ṣanʿāʾ palimpsest: one leaf’s parchment dates to roughly 578–669 CE. The upper text follows the standard text; the lower text shows variants. Hilali argues the lower text may not have been a complete codex.',src:['sanaa','sg2012'],st:'secondary'},
{t:'Samarkand (Tashkent) Kufic codex: dating is uncertain, with one radiocarbon result 775–995 and another folio 595–855. It is not shown to be a copy sent by ʿUthmān.',src:['samarkand'],st:'secondary'},
{t:'Dome of the Rock (72 AH / 692 CE): Qur’anic inscriptions that differ in small ways from the standard text, mainly shifts of person. Whelan discusses what they show about the text at the end of the first century AH.',src:['whelan','dotr'],st:'verify'}],
views:'Some scholars argue the manuscripts show a text close to the ʿUthmānic one from an early date. Others point to variants and to the shortage of securely dated material from before 700. Radiocarbon dates the animal skin, not the writing.'}];
export const caution='Where the claims come from. Each claim shows how I checked it: “page read at source” means I read the cited page; “secondary only” means I have only an encyclopedia or similar summary; “verify” means it rests on a paywalled or library work that has not been read yet.';
const lab={checked:'Page read at source',secondary:'Secondary only',verify:'Verify against the original'};
export default function Transmission(){return <div className="vl-article vl-wide"><h2>From oral recitation to written text</h2><p>Six stages, in order, with the kind of source and how late it is at each step. Muslim tradition, critical scholarship and the manuscripts are set out as each side holds them.</p><div className="vl-caution"><strong>Biblical standard.</strong><p>Scripture is the highest and unmoving standard by its own testimony (2 Timothy 3:16; Isaiah 40:8; Matthew 5:18). Manuscripts show how a text was kept (1689 1.8), for the Qur’an as for the Old and New Testaments. They do not decide inspiration or truth. The question for the Qur’an is what its own claims, its history and its content show, tested by Scripture.</p></div><p className="hint">{caution}</p>{stages.map(s=><div key={s.n} className="vl-term"><strong>Stage {s.n}: {s.title}</strong><p><em>Kind of source:</em> {s.source}</p>{s.claims.map((c,i)=><div key={i} style={{margin:'6px 0'}}><p style={{margin:0}}>{c.t}</p><p style={{margin:0,fontSize:'.85em'}}><em>{lab[c.st]}.</em> <SrcLink ids={c.src}/></p></div>)}<p><em>How it is read:</em> {s.views}</p></div>)}<div className="vl-caution"><strong>Pressure point.</strong><p>The Qur’an says its words are preserved (15:9). The traditional accounts themselves describe collection, standardization and the removal of other copies. Muslims understand this as protecting the text; critics ask whether it fits an unbroken written record from the beginning. For the biblical argument, the useful question is not whether manuscripts exist, but what is claimed for them. The Bible’s own record is open about variants, and its authority rests on God’s word, not on a single standardized copy.</p></div></div>}
