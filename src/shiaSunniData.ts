import type {SrcB,Src,Point} from './historyData';
export type {SrcB,Src,Point};
export type Card={id:string,title:string,intro?:string,points:Point[],src:Src[]};
export type Verse={id:string,ref:string,url:string,text:string,shia:string,shiaB:SrcB,sunni:string,sunniB:SrcB,note?:string,src:Src[]};
export type Reply={id:string,title:string,claim:string,claimB:SrcB,scripture:string[],response:string};
export type Book={t:string,w:string,u?:string,read:'part'|'no'};

const IRAN_DOC:Src={t:'Encyclopaedia Iranica, “Shiʿite Doctrine” (M. A. Amir-Moezzi, 2005)',u:'https://www.iranicaonline.org/articles/shiite-doctrine/',b:'checked',n:'Read in full. Peer-reviewed, signed by a leading scholar of early Shiʿism.'};
const IRAN_GHADIR:Src={t:'Encyclopaedia Iranica, “Ḡadīr Ḵomm” (M. Dakake; A. Kazemi Moussavi)',u:'https://www.iranicaonline.org/articles/gadir-komm-/',b:'checked',n:'Read in full. Peer-reviewed. Dakake wrote the part on the Shiʿite literature and Kazemi Moussavi the part on the festival.'};
const STUDY:Src={t:'Daftary and Miskinzoda (eds.), The Study of Shiʿi Islam (I.B. Tauris with the Institute of Ismaili Studies, 2014), open access',u:'https://library.oapen.org/handle/20.500.12657/99188',b:'checked',n:'Read from the PDF: Madelung’s Introduction (pp. 3–9) and the passages cited on this page. The book was not read in full. The Institute of Ismaili Studies is a Shiʿi (Ismaili) institution; its series says opinions belong to the authors alone.'};
const LATIF:Src={t:'Latif, doctoral thesis on four historians’ accounts of Saqīfa (University of Leeds, 2019)',u:'https://etheses.whiterose.ac.uk/id/eprint/25911/1/Latif_F_School%20of%20Languages%2C%20Cultures%20and%20Societies_PhD_2019.pdf',b:'secondary',n:'Unpublished thesis. Read sections 2.2.1 and 2.3.1 and the introduction. Useful because it summarizes several published scholars, but it is one student’s synthesis.'};

export const outline:Card[]=[
{id:'outline',title:'The dispute in outline',intro:'Sunni and Shia Muslims share the same Qurʾan. They divide over who had the right to lead the community after Muḥammad, and so over what the leader’s office is. These points use Madelung’s own statements of each side.',points:[
{x:'Madelung opens his 1997 book by saying that no event in history divided Islam more deeply or for longer than the succession to Muḥammad.',b:'checked',n:'Madelung, The Succession to Muḥammad (Cambridge, 1997), Introduction. Read from an Internet Archive full-text copy, first part only, so confirm the wording against the Cambridge print.'},
{x:'The Sunni position, as he states it: Muḥammad did not explicitly appoint Abū Bakr but preferred him, as his order that Abū Bakr lead the prayers in his final illness showed, and the community’s agreement confirmed what was in the end God’s choice.',b:'checked',n:'Same source and caution.'},
{x:'The Shia position, as he states it: ʿAlī was appointed by the Prophet, and his position was taken from him by Abū Bakr with the support of most of the Companions.',b:'checked',n:'Same source and caution.'},
{x:'Madelung says most modern historians treat the Sunni–Shia split as a later development and Abū Bakr’s succession as unproblematic at the time, and he calls that view unsound.',b:'checked',n:'Same source and caution.'},
{x:'Madelung also says the Qurʾan makes no provision for, and no allusion to, the succession of Muḥammad. So each side argues from reports about what the Prophet said and did, not from a verse that names a successor.',b:'checked',n:'Same source and caution. This is Madelung’s statement. Shia exegesis reads several verses as pointing to ʿAlī (see the verses section), and Madelung does not accept that they name a successor.'}],
src:[STUDY,LATIF]},
{id:'madelung2014',title:'Madelung’s later view: Fāṭima as heir, and the Shiʿi claim called “specious”',intro:'In his Introduction to the 2014 volume Madelung revises the position of his 1997 book. This is one historian’s reconstruction. It fits neither the traditional Sunni nor the traditional Shia account, and this page does not adopt it.',points:[
{x:'He argues that the Qurʾanic inheritance rules (4:11–14) gave a daughter the first claim when there was no son, and that a testament could name only an executor (waṣī), who could not become heir and successor unless he held a Qurʾanic share.',b:'checked',n:'Madelung, Introduction, p. 4.'},
{x:'From this he concludes that the Qurʾanic rules made the Prophet’s daughter Fāṭima his prime heir and successor. He says his understanding of the succession dispute developed after the 1997 book because he realized this.',b:'checked',n:'Introduction, p. 6 (footnote 3).'},
{x:'He calls the Shiʿi claim that ʿAlī was appointed waṣī “specious”, because without a testament there could be no waṣī in the legal sense. He adds that the Ghadīr Khumm proclamation was reasonably understood as showing that the Prophet meant to entrust his cousin with carrying out his will.',b:'checked',n:'Introduction, p. 6. He uses the word “specious” of the claim as the Shia are usually understood to make it, that ʿAlī succeeded to the Prophet’s office.'},
{x:'He says the critical historian must suspend judgement on whom Muḥammad finally meant as executor, because the circumstantial evidence for Abū Bakr and for ʿAlī is equal.',b:'checked',n:'Introduction, p. 7.'},
{x:'He judges that the establishment of the Quraysh caliphate was, in modern terms, a coup d’état against the Prophet’s house.',b:'checked',n:'Introduction, p. 5. This is a strong claim by one scholar. Latif, in her thesis, calls Madelung’s work partisan and says he selects accounts that suit a pro-Shiʿi version (secondary).'}],
src:[STUDY,LATIF]}];

export const imamate:Card[]=[
{id:'imamate',title:'The imamate and walāya',intro:'What Shiʿi doctrine says an imam is. This is the deepest difference from Sunni teaching, deeper than the question of who was first.',points:[
{x:'Shiʿi doctrine is usually summed up in five principles. Three are fully shared with Sunnism: the unity of God, prophethood, and reward and punishment in the next life. The other two are divine justice and the imamate, called the principles of the School.',b:'checked',n:'Iranica, “Shiʿite Doctrine”.'},
{x:'The same entry calls the five-part list reductionist and late. Almost all texts that set it out date from the 17th and 18th centuries onward, and authors disagree on the list. Present it as a common summary, not as a fixed creed.',b:'checked',n:'Iranica, “Shiʿite Doctrine”.'},
{x:'Amir-Moezzi says Shiʿism is at root an imamology: theology, ethics, Qurʾan interpretation, law, ritual and the last things all take their meaning from the figure of the imam.',b:'checked',n:'Iranica, “Shiʿite Doctrine”.'},
{x:'The key term is walāya, “alliance” or “friendship” with God and loyalty to the imam, paired with barāʾa, dissociation from the imam’s enemies. Shiʿites often call themselves the people of walāya.',b:'checked',n:'Iranica, “Shiʿite Doctrine”.'},
{x:'The entry describes three levels of the imam: a religious scholar, an initiatory guide with supernatural knowledge, and, at the most esoteric level, the revealed face of God. It says the last is meant only for initiates and was seen as highly subversive.',b:'checked',n:'This is Amir-Moezzi’s account, based mainly on the earliest hadith corpus, written down about 864–961 CE (al-Kulaynī, d. 940–41; Ibn Bābawayh, d. 991). He says later rationalist schools covered this early esoteric Shiʿism with theological and legal dogma, so the page does not claim that all Shia teach it today.'},
{x:'The Qurʾan is called the “silent book” and the imam the “speaking Qurʾan”.',b:'checked',n:'Iranica, “Shiʿite Doctrine”.'},
{x:'In Shiʿite doctrine the Companions who rejected ʿAlī’s election are counted among the adversaries of the initiated guide.',b:'checked',n:'Iranica, “Shiʿite Doctrine”.'}],
src:[IRAN_DOC]}];

export const ghadir:Card[]=[
{id:'ghadir',title:'Ghadīr Khumm',intro:'The pool on the road back from the Farewell Pilgrimage where, on all accounts, Muḥammad spoke about ʿAlī. The sides disagree about what he meant.',points:[
{x:'Shiʿites say the Prophet announced ʿAlī’s authority over the community at Ghadīr Khumm on 18 Dhū’l-Ḥijja, 10 AH (16 March 632), on the way back from the Farewell Pilgrimage.',b:'checked',n:'Iranica, “Ḡadīr Ḵomm”.'},
{x:'Many Sunni authorities also accept that a prophetic announcement about ʿAlī was made there, but they do not treat it as a political appointment. Some of the fullest collections of Ghadīr reports are in Sunni sources: Aḥmad b. Ḥanbal’s Musnad, Ibn ʿAsākir’s history of Damascus and Ibn Kathīr’s al-Bidāya wa’l-nihāya.',b:'checked',n:'Iranica, “Ḡadīr Ḵomm”. So “Sunnis reject the event” is wrong. The dispute is over its meaning.'},
{x:'The Shiʿite account in the entry: God told Muḥammad to reveal ʿAlī’s walāya, he hesitated, and Qurʾan 5:67 came down. He then said that whoever has him as mawlā has ʿAlī as mawlā. Qurʾan 5:3 was revealed later that day. The entry ties both verses to the event only in the Shiʿite tradition.',b:'checked',n:'Iranica, “Ḡadīr Ḵomm”.'},
{x:'Twelver authorities argued at length that mawlā here means political authority. In Twelver doctrine, codified in the 10th–11th centuries, the event is mainly evidence for naṣṣ, the designation of each imam by his predecessor. al-Kulaynī’s al-Kāfī, the earliest of the four canonical Twelver hadith works, files it under the chapters on designation.',b:'checked',n:'Iranica, “Ḡadīr Ḵomm”.'},
{x:'The scholars Latif collects split on the meaning. She reports that Lalani and Jafri read it as an affirmation of ʿAlī’s designation; Dakake reads it as showing ʿAlī’s unique closeness to the Prophet, not the imamate; Halm and Ayoub hold that the Prophet did not intend a designation; Shaban calls an appointment highly improbable.',b:'secondary',n:'Latif, section 2.2.1, pp. 39–41. She also gives the usual summary that Shiʿi scholars read mawlā as “imām” and Sunnis read it as “close friend”. Read through a summarizing tool, so confirm at the page.'},
{x:'Dating: the entry says Ghadīr Khumm does not appear among ʿAlī’s own arguments for his legitimacy in the Nahj al-balāgha, and that it seems to have become an important argument for ʿAlid legitimacy in the 2nd/8th century. The earliest datable references are in the poet Kumayt b. Zayd’s Hāshimiyyāt and the Kitāb Sulaym b. Qays.',b:'checked',n:'Iranica, “Ḡadīr Ḵomm”.'},
{x:'Dakake argues elsewhere that evidence in both Sunni and Shiʿi sources suggests the Ghadīr tradition was already in fairly wide circulation by the late Umayyad period. She dates the core of Kitāb Sulaym to the early 2nd/8th century.',b:'checked',n:'Dakake, “Writing and Resistance”, in The Study of Shiʿi Islam, pp. 188–189. The Iranica entry itself says only “perhaps” 2nd/8th century for Kitāb Sulaym.'},
{x:'The festival: ʿĪd-e Ghadīr became a public holiday in 352/963, when the Buyid ruler of Baghdad ordered it celebrated. The entry knows of no public observance before then. Chroniclers treat it as an innovation. It led to clashes with Sunnis, with casualties in 371/981, and Buyid officials banned it in 382/992 and 392/1001. The Safavids revived it.',b:'checked',n:'Iranica, “Ḡadīr Ḵomm”.'}],
src:[IRAN_GHADIR,LATIF,STUDY]}];

export const verses:Verse[]=[
{id:'v555',ref:'Qurʾan 5:55',url:'https://quran.com/5:55',text:'Paraphrase: your friend or guardian (walī) is God, His Messenger and the believers who pray and give alms while bowing. What walī means here is part of the dispute.',
 shia:'Shiʿi tradition applies the verse to ʿAlī. The early Shiʿi commentary of al-Ḥibarī reports Ibn ʿAbbās as saying it was revealed especially concerning ʿAlī.',shiaB:'checked',
 sunni:'One Sunni commentary, Maʿāriful Qurʾān, says the verse names God, His Messenger and the believers who pray, give zakāt and bow as the true friends of Muslims. It reports that some narrations link it to ʿAlī giving a ring while bowing, notes that scholars debate the chain, and says the wording is general even if the report is accepted. It does not treat the verse as being about succession or the imamate.',sunniB:'checked',
 note:'This is one Sunni commentator, not the Sunni position. A commentary by al-Ṭabarī or Ibn Kathīr was not read. Amir-Moezzi, p. 123, notes that such reports occur in Shiʿi works “innumerably”.',
 src:[{t:'Maʿāriful Qurʾān on 5:55 (Quran.com)',u:'https://quran.com/5:55/tafsirs/en-tafsir-maarif-ul-quran',b:'checked',n:'Read through a summarizing tool; confirm the wording at the page. I know from background that this is a Deobandi Sunni commentary; the page does not say so.'},STUDY]},
{id:'v567',ref:'Qurʾan 5:67',url:'https://quran.com/5:67',text:'Paraphrase: the Messenger is told to proclaim what has been sent down to him, and that if he does not, he has not delivered the message.',
 shia:'The Shiʿi tradition, as Iranica reports it, says God ordered Muḥammad to reveal ʿAlī’s walāya, he hesitated, and this verse came down at Ghadīr. al-Ḥibarī reports Ibn ʿAbbās saying the Prophet was ordered to declare ʿAlī, then took his hand and spoke the mawlā words.',shiaB:'checked',
 sunni:'No Sunni commentary on this verse was read.',sunniB:'verify',
 note:'Iranica says this link between the verse and Ghadīr is made only in the Shiʿite tradition.',
 src:[IRAN_GHADIR,STUDY]},
{id:'v53',ref:'Qurʾan 5:3',url:'https://quran.com/5:3',text:'Paraphrase: today God has perfected the religion, completed His favour, and approved Islam as the religion.',
 shia:'The Shiʿite tradition, as Iranica reports it, says this verse was revealed later on the day of Ghadīr.',shiaB:'checked',
 sunni:'No Sunni commentary on this verse was read.',sunniB:'verify',
 note:'Iranica ties the verse to the event only in the Shiʿite tradition.',src:[IRAN_GHADIR]},
{id:'v3361',ref:'Qurʾan 3:61',url:'https://quran.com/3:61',text:'Paraphrase: the mutual-cursing (mubāhala) verse, where each side is to call its sons, its women and itself together.',
 shia:'al-Ḥibarī reports Ibn ʿAbbās saying it was revealed about the “selves” of the Messenger and ʿAlī, with “our women” meaning Fāṭima and “our sons” meaning al-Ḥasan and al-Ḥusayn.',shiaB:'checked',
 sunni:'No Sunni commentary on this verse was read.',sunniB:'verify',src:[STUDY]},
{id:'v3333',ref:'Qurʾan 33:33',url:'https://quran.com/33:33',text:'Paraphrase: God wishes to remove impurity from the “people of the House” (ahl al-bayt) and make them pure. Who the ahl al-bayt are is the question.',
 shia:'al-Ḥibarī lists around ten traditions from Companions, above all from Umm Salama, the Prophet’s wife, that identify the ahl al-bayt with the Five of the Cloak: Muḥammad, ʿAlī, Fāṭima, al-Ḥasan and al-Ḥusayn.',shiaB:'checked',
 sunni:'Amir-Moezzi reports that Lammens and Strothmann saw only the wives in 33:33, that Paret read the term as the adherents of the Kaʿba cult, and that Madelung reads it as the descendants of Hāshim. He adds, after Goldziher, that the majority opinion very early identified the ahl al-bayt with Fāṭima, ʿAlī, al-Ḥasan and al-Ḥusayn, and that almost all the early interpretations al-Ṭabarī records lean that way.',sunniB:'checked',
 note:'The first group are Western scholars, not Sunni authorities. The page does not give a Sunni commentary on this verse in the commentators’ own words.',
 src:[{t:'Amir-Moezzi, “Reflections on the Expression dīn ʿAlī”, in The Study of Shiʿi Islam, pp. 34–35',u:'https://library.oapen.org/handle/20.500.12657/99188',b:'checked',n:'Read from the PDF.'},STUDY]}];

export const sources:Card[]=[
{id:'saqifa',title:'How far can the accounts of Saqīfa be trusted?',intro:'Saqīfa is the meeting where the first caliph was chosen. All the narratives we have were written down long after it.',points:[
{x:'Latif says there are no sources contemporary with the events and that the earliest extant accounts date from the Abbasid period, two to three centuries later.',b:'secondary',n:'Latif, thesis introduction.'},
{x:'She studies four historians: al-Ṭabarī and al-Balādhurī, who align with proto-Sunnism; al-Yaʿqūbī, with early proto-Imāmī Shiʿism; and Ibn Aʿtham, tentatively with Batrī Zaydism. Each, she argues, arranged his material to support a particular view of the succession.',b:'secondary',n:'Latif, thesis introduction and contents.'},
{x:'Madelung, in his 1997 preface, says he finds the wholesale rejection of the Muslim narrative sources as late fiction unjustified. That is a method choice, and other scholars take a more sceptical view.',b:'checked',n:'Madelung 1997, Preface. Same Internet Archive caution as above.'},
{x:'The page therefore states what each side holds and what the sources say, and does not claim to decide what happened at Saqīfa.',b:'verify',n:'This describes the page’s method, not a historical claim.'}],
src:[LATIF]}];

export const reply:Reply[]=[
{id:'authority',title:'Who decides what the sources mean?',claim:'Madelung says the Qurʾan makes no provision for the succession (1997 Introduction). Each side therefore rests its case on later reports, which Latif says were written two to three centuries after the event. Shiʿi doctrine answers by making the imam the “speaking Qurʾan” (Iranica, Amir-Moezzi).',claimB:'checked',
 scripture:['2 Timothy 3:16-17','2 Peter 1:19-21','Acts 17:11'],
 response:'The Reformed answer is that God has spoken in Scripture, which is sufficient, and that Scripture is its own interpreter. The 1689 Confession says the infallible rule for interpreting Scripture is Scripture itself (1.9), and that the supreme judge in all disputes is the Holy Spirit speaking in Scripture (1.10). No later office is needed to make it clear, and none can stand above it. Van Til’s question can be put kindly to either side: what must be true for any report, chain or imam to be an ultimate authority? A finite witness cannot certify itself. Only the God who has spoken can ground his own word.'},
{id:'mediator',title:'The imam as guide and the one Mediator',claim:'Amir-Moezzi describes the imam at the highest level as the revealed face of God, and says walāya, loyalty to the imam, sits at the centre of Shiʿi doctrine (Iranica).',claimB:'checked',
 scripture:['1 Timothy 2:5','Hebrews 7:25','John 14:6'],
 response:'Scripture gives one mediator between God and men, the man Christ Jesus, who always lives to intercede. Loyalty to a human guide, however holy, cannot stand where loyalty to Christ stands. The 1689 Confession names the Lord Jesus as the Mediator between God and man (8.1). The page makes no claim about what any Muslim believes personally. Ask first which account of the imam the person holds.'},
{id:'fairness',title:'Speaking about both sides fairly',claim:'Both sides accept that Muḥammad spoke about ʿAlī at Ghadīr Khumm. They differ on what he meant (Iranica; Latif).',claimB:'checked',
 scripture:['Proverbs 18:13','1 Peter 3:15'],
 response:'A misstated opponent proves nothing. Do not tell a Sunni that Sunnis reject Ghadīr, or tell a Shia that every Shia holds the esoteric teaching of the early sources. Take no side in the quarrel over the caliphate; the point to press is the question of authority and the one Mediator.'}];

export const notCovered:string[]=[
'Sunni commentary (al-Ṭabarī, Ibn Kathīr, al-Rāzī) on 5:3, 5:67 and 3:61, and a Sunni commentary on 33:33 in the commentator’s own words.',
'The primary hadith wording in Bukhārī, Muslim, Aḥmad and al-Kāfī. Iranica and the scholars above are cited for what the reports contain; the reports themselves were not read.',
'The wider Sunni–Shia differences in law, ritual, the Companions and the end times. Only the succession, the imamate, Ghadīr and the verses are covered.',
'Zaydi, Ismaili and other Shiʿi branches. al-Ḥibarī is described in the volume as Zaydi-leaning, so the commentary quoted above reflects an early strand, not Twelver teaching in general.',
'Qurʾān quotations on this page are the wording in the sources cited (Yusuf Ali in al-Ḥibarī’s chapter) or marked paraphrases of mine. Use the Phrase search for the Pickthall wording.'];

export const reading:Book[]=[
{t:'Daftary and Miskinzoda (eds.), The Study of Shiʿi Islam (2014)',w:'Open access. Madelung’s Introduction; Amir-Moezzi on dīn ʿAlī and on al-Ḥibarī’s commentary; Dakake on Kitāb Sulaym.',u:'https://library.oapen.org/handle/20.500.12657/99188',read:'part'},
{t:'Farhad Daftary, A History of Shiʿi Islam (2013)',w:'Open access on OAPEN and the Institute of Ismaili Studies. The OAPEN PDF would not open here.',u:'https://library.oapen.org/handle/20.500.12657/101408',read:'no'},
{t:'Wilferd Madelung, The Succession to Muḥammad (Cambridge University Press, 1997)',w:'Introduction and preface only, from a full-text copy.',read:'part'},
{t:'Encyclopaedia Iranica, “Shiʿite Doctrine” and “Ḡadīr Ḵomm”',w:'Both read in full.',u:'https://www.iranicaonline.org/articles/shiite-doctrine/',read:'part'},
{t:'S. H. M. Jafri, Origins and Early Development of Shiʿa Islam',w:'Cited by Latif as reading Ghadīr as designation. Not read.',read:'no'},
{t:'L. Veccia Vaglieri, “Ghadīr Khumm”, Encyclopaedia of Islam, 2nd ed.',w:'Cited by Latif and Amir-Moezzi. Not read.',read:'no'}];
