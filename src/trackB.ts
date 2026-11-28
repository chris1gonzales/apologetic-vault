// Track B: Islam (v3.41). Built only from pages already in the app (hadith, Muhammad and origins, Qur'an comparisons,
// Torah and Qur'anic accounts, Deity of Christ, Sunni and Shia, manuscripts). Badge rule as in the rest of the course:
// a line the app page does not badge is shown as Secondary, never higher. Qur'an and hadith references are pointers
// to the app's pages, not translations. Scripture lines are summaries; the linked pages are NASB 1995 at Bible Hub.
import type {Lesson} from './studyData';
import type {Gate} from './trackA';

export const trackBGroup='Track B: Islam';

export const trackB:Lesson[]=[
{id:'b-sources',n:1,title:'Sources: the Qur’an, the hadith and how to treat them',group:trackBGroup,
pages:[['hadith','Hadith'],['muhammadQuran','Muhammad & origins'],['quran','Qur’anic research']],
passage:{ref:'1 Peter 3:15',line:'Give a reason for the hope that is in you, with gentleness and respect.'},
facts:[
{x:'Sunni and Shia Muslims share the same Qur’an. They divide over who should lead after Muhammad.',b:'verify',n:'From the Sunni and Shia page, which keeps some lines at Verify.'},
{x:'The hadith are studied as evidence of what Islam claims, not as revelation. Scripture alone is God’s Word and the final authority (1689 1.1, 1.10).',b:'checked'},
{x:'Quote the other side word for word. The ninth commandment forbids misrepresenting a neighbor’s words, and a critique of a misquoted source proves nothing.',b:'secondary'},
{x:'The bundled Bukhari collection uses sunnah.com numbering (1–7563). Other Sunni collections (Muslim, Abu Dawud, Tirmidhi, Nasa’i, Ibn Majah) are external links until verified files are supplied.',b:'secondary'},
{x:'The Qur’an is early but not a continuous biography. Fuller narratives are in later sīrah and hadith. Sort each report as Qur’anic, early external testimony, later sīrah or hadith.',b:'secondary'},
{x:'Traditional dates: first revelation about 610, Hijrah 622, death 632. These are traditional dates.',b:'secondary'}],
refs:[
{r:'1 Peter 3:15',what:'Give a reason for your hope with gentleness and respect.',side:'bible'},
{r:'Proverbs 18:13',what:'Hear the other side fully before answering.',side:'bible'},
{r:'Exodus 20:16',what:'Do not bear false witness against a neighbor.',side:'bible'},
{r:'Galatians 1:8–9',what:'Another gospel, even from an angel, is to be rejected.',side:'bible'},
{r:'Bukhari 1–7563',what:'The numbering range of the bundled Bukhari collection (sunnah.com numbering).',side:'other',kind:'Hadith'}],
qs:[
{q:'What do Sunni and Shia Muslims share, and what do they divide over?',a:'The same Qur’an. They divide over who should lead after Muhammad.',b:'verify'},
{q:'How does the course treat the hadith?',a:'As evidence of what Islam claims, not as revelation. Scripture is the final authority.',b:'checked'},
{q:'Which commandment grounds quoting the other side accurately?',a:'The ninth: do not bear false witness (Exodus 20:16).',b:'secondary'}],
explain:'In your own words: why do we state a Muslim source accurately before answering it?'},

{id:'b-beliefs',n:2,title:'What Islam teaches, in its own terms',group:trackBGroup,
pages:[['torahQuran','Torah & Qur’anic accounts'],['christologyIslam','Deity of Christ']],
passage:{ref:'Isaiah 45:5',line:'There is no God besides the LORD.'},
facts:[
{x:'Islam holds that God is one, and the Qur’an forbids saying “Three” (Q 4:171). The page states that Nicene Christianity also confesses one God, so the disagreement is about whether the Son is truly divine.',b:'secondary'},
{x:'Muslims hold that prophets are protected from major sin, so there is no inherited guilt. Each soul bears only its own load (Q 6:164), and Adam repents and is forgiven (Q 2:37).',b:'secondary'},
{x:'The Qur’an treats Jesus as the Messiah, messenger of Allah, His word and a spirit from Him (Q 4:171), and condemns saying Allah is the Messiah, son of Mary (Q 5:72).',b:'secondary'},
{x:'The Qur’an has no sacrificial priesthood. It says the flesh and blood of sacrifices do not reach Allah; devotion does (Q 22:37).',b:'secondary'},
{x:'Muslims describe the revelation as coming through Gabriel (Q 2:97) and claim a divine origin for it (Q 53:3–4).',b:'secondary'},
{x:'The course has no separate page on the five pillars or on practice in Islam. This lesson covers only what the app’s pages state.',b:'secondary',n:'A gap in the app, not in Islam.'}],
refs:[
{r:'Isaiah 45:5',what:'There is no God besides the LORD.',side:'bible'},
{r:'Deuteronomy 6:4',what:'The LORD is one.',side:'bible'},
{r:'Romans 5:12–19',what:'Death and condemnation through Adam; righteousness through Christ.',side:'bible'},
{r:'Hebrews 9:22',what:'Without the shedding of blood there is no forgiveness.',side:'bible'},
{r:'Q 4:171',what:'Messiah, messenger, His word, a spirit from Him; do not say “Three.”',side:'other',kind:'Qur’an',answers:'John 1:1–14'},
{r:'Q 6:164',what:'Each soul bears only its own load.',side:'other',kind:'Qur’an',answers:'Romans 5:12–19'},
{r:'Q 22:37',what:'The flesh and blood of the sacrifices do not reach Allah; devotion does.',side:'other',kind:'Qur’an',answers:'Hebrews 9:22'},
{r:'Q 2:37',what:'Adam repents and is forgiven.',side:'other',kind:'Qur’an'}],
qs:[
{q:'Which Qur’an verse says each soul bears only its own load, and what Scripture passage does it stand against?',a:'Q 6:164. Romans 5:12–19 (condemnation through Adam).',b:'secondary'},
{q:'What does the page say the real disagreement over the Trinity is?',a:'Whether the one God has eternally distinct personal relations and whether the Son is truly divine.',b:'secondary'},
{q:'What does the app lack on Islamic practice?',a:'A separate page on the five pillars and practice; the lesson covers only what the pages state.',b:'secondary'}],
explain:'In your own words: state what a Muslim means by “God is one” before you answer it.'},

{id:'b-torah',n:3,title:'Torah, Gospel and the Qur’an',group:trackBGroup,
pages:[['torahQuran','Torah & Qur’anic accounts'],['quran','Qur’anic research']],
passage:{ref:'Luke 24:44',line:'Christ divides the Old Testament into the Law, the Prophets and the Psalms.'},
facts:[
{x:'The app sets Q 3:3, 5:46–48 and 5:68 (affirming earlier revelation) beside Q 2:75, 2:79 and 4:46 (about distortion). It labels this an apparent tension that needs contextual analysis.',b:'secondary'},
{x:'Common Muslim interpretations separate the original Torah and Gospel from later corruption. The extent and type of taḥrīf are debated among commentators.',b:'secondary'},
{x:'The cited passages alone do not settle a universal textual-corruption claim. The meaning of “Gospel” differs between the two traditions.',b:'secondary'},
{x:'Adam is made from earth, placed in a garden, warned off one tree, led astray and cast out in both accounts. They differ on the result: the Qur’an has Adam forgiven with no inherited guilt, while Scripture teaches death and condemnation through Adam (Romans 5:12–19).',b:'secondary'},
{x:'Genesis 3:15 gives the first promise of a Redeemer. The Qur’an has no counterpart.',b:'secondary'}],
refs:[
{r:'Luke 24:44',what:'The Law, the Prophets and the Psalms.',side:'bible'},
{r:'Matthew 5:17–18',what:'Not an iota will pass from the Law until all is accomplished.',side:'bible'},
{r:'Genesis 3:15',what:'The first promise of a Redeemer.',side:'bible'},
{r:'Romans 5:12–19',what:'Death through Adam; righteousness through Christ.',side:'bible'},
{r:'Q 3:3',what:'Mentions the Torah and the Gospel (Injīl).',side:'other',kind:'Qur’an'},
{r:'Q 5:46',what:'Cited on the page for the confirmation of earlier scripture (with 5:47–48, 5:68).',side:'other',kind:'Qur’an'},
{r:'Q 2:75',what:'Cited on the page among passages about distortion (with 2:79, 4:46).',side:'other',kind:'Qur’an'}],
qs:[
{q:'How does the app classify the tension between Qur’an passages that affirm and passages that accuse earlier scripture?',a:'As an apparent tension needing contextual analysis; the passages alone do not settle a universal corruption claim.',b:'secondary'},
{q:'Where do the Adam accounts agree and where do they differ?',a:'They agree on the outline. They differ on the result: forgiven with no inherited guilt (Qur’an) versus death and condemnation through Adam (Romans 5:12–19).',b:'secondary'},
{q:'Which Genesis verse has no Qur’anic counterpart?',a:'Genesis 3:15, the first promise of a Redeemer.',b:'secondary'}],
explain:'In your own words: why does it matter that the Qur’an points to the Torah and Gospel?'},

{id:'b-text',n:4,title:'The text and the readings',group:trackBGroup,
pages:[['manuscriptCriticism','OT & Qur’an manuscripts'],['phraseQuran','Phrase search']],
passage:{ref:'2 Timothy 3:16',line:'Scripture is “inspired by God.” Early dates do not make a text revelation.'},
facts:[
{x:'The Sana’a palimpsest has an erased lower text and a later upper text. The upper text is close to the standard text; the lower text has variants, and its chapter order differs in places.',b:'secondary'},
{x:'Scholars disagree about its meaning: some treat the lower text as a witness to a non-standard recension; others say it was a collection of leaves.',b:'secondary'},
{x:'Ibn Mujāhid (d. 324/936) surveyed seven earlier readers, and his seven became widely recognized readings (qirāʾāt). In Q 1:4, Ḥafṣ reads māliki (Master/Owner) and Warsh reads maliki (King).',b:'secondary'},
{x:'The same command to bow to Adam appears in Q 2:34 and 18:50. The app calls this narrative expansion, not inherent contradiction. Internal parallels are not manuscript variants.',b:'secondary'},
{x:'The same caution applies to the Bible’s manuscripts. Never claim a manuscript proves more than it shows, and never equate a variant with wholesale corruption.',b:'secondary'}],
refs:[
{r:'2 Timothy 3:16',what:'Scripture is inspired by God.',side:'bible'},
{r:'Isaiah 8:20',what:'Authority is the law and the testimony.',side:'bible'},
{r:'Q 1:4',what:'Māliki / maliki: the Ḥafṣ and Warsh readings.',side:'other',kind:'Qur’an'},
{r:'Q 2:34',what:'Angels commanded to bow to Adam; Iblis refuses.',side:'other',kind:'Qur’an'},
{r:'Q 18:50',what:'The same account; Iblis is one of the jinn.',side:'other',kind:'Qur’an'}],
qs:[
{q:'What is the Sana’a palimpsest?',a:'A manuscript with an erased lower text and a later upper text; the lower text has variants.',b:'secondary'},
{q:'What are the two readings of Q 1:4 in the app’s example?',a:'Ḥafṣ: māliki (Master/Owner). Warsh: maliki (King).',b:'secondary'},
{q:'Why does the app say 2:34 and 18:50 are not manuscript variants?',a:'They are internal parallels, classified as narrative expansion, not manuscript disagreement.',b:'secondary'}],
explain:'In your own words: why does an early manuscript not make a text revelation?'},

{id:'b-response',n:5,title:'The Scripture-based response, plus Sunni and Shia',group:trackBGroup,
pages:[['christologyIslam','Deity of Christ'],['shiaSunni','Sunni & Shia']],
passage:{ref:'John 1:1',line:'The Word was with God and was God.'},
facts:[
{x:'The doctrine of the Trinity is one undivided divine essence in three persons. Q 5:72 condemns saying that Allah is the Messiah, son of Mary. Nicene Christianity does not teach that the Father became Jesus or that Jesus is a second god.',b:'secondary'},
{x:'The numeral “three” in Q 4:171 does not itself name the three. A Muslim may understand Nicene theology and still reject it.',b:'secondary'},
{x:'On the crucifixion, the app records common Muslim readings of Q 4:157 (a denial that Jesus was successfully killed) against the Gospels and Paul, which affirm His death (1 Corinthians 15:3–4). It calls this a substantive disagreement, not an internal Qur’anic contradiction.',b:'secondary'},
{x:'Five Qur’an verses are read differently by Shia and Sunni commentators: 5:55, 5:67, 5:3, 3:61 and 33:33.',b:'verify',n:'Sunni commentary in the commentators’ own words was not fully checked.'},
{x:'The Reformed response is not a side in the Sunni–Shia dispute. It asks what authority governs belief (Scripture) and who is the one Mediator (1 Timothy 2:5).',b:'verify'}],
refs:[
{r:'John 1:1',what:'The Word was with God and was God.',side:'bible'},
{r:'John 20:28',what:'Thomas calls Jesus his Lord and his God.',side:'bible'},
{r:'1 Corinthians 15:3–4',what:'Christ died for our sins, was buried and was raised.',side:'bible'},
{r:'1 Timothy 2:5',what:'One God and one Mediator, the man Christ Jesus.',side:'bible'},
{r:'Q 5:72',what:'Condemns saying Allah is the Messiah, son of Mary.',side:'other',kind:'Qur’an',answers:'John 20:28'},
{r:'Q 4:157',what:'The verse read by common Muslim exegesis as denying that Jesus was successfully killed.',side:'other',kind:'Qur’an',answers:'1 Corinthians 15:3–4'},
{r:'Q 5:55',what:'One of the five verses Shia and Sunni commentators read differently (see the page).',side:'other',kind:'Qur’an'}],
qs:[
{q:'What does Q 5:72 condemn, and what does the Trinity not claim?',a:'It condemns saying Allah is the Messiah, son of Mary. The Trinity does not say the Father became Jesus or that Jesus is a second god.',b:'secondary'},
{q:'Which Scripture passage answers the denial in Q 4:157?',a:'1 Corinthians 15:3–4 (with the Gospel passion accounts).',b:'secondary'},
{q:'Name the five Qur’an verses compared in the Sunni and Shia page.',a:'Q 5:55, 5:67, 5:3, 3:61 and 33:33.',b:'verify'}],
explain:'In your own words: answer “Christians worship three gods” in one minute, using Scripture.'},

{id:'b-salvation',n:6,title:'Salvation and judgment in Islam',group:trackBGroup,
pages:[['quran','Qur’anic research'],['torahQuran','Torah & Qur’anic accounts']],
passage:{ref:'Ephesians 2:8–9',line:'Saved by grace through faith, not by works.'},
facts:[
{x:'Islamic teaching relates divine mercy, faith and deeds in judgment. The app warns against caricaturing it as merit without divine mercy.',b:'secondary',n:'The page keeps its sources as “verify editions.”'},
{x:'The Qur’an stresses divine mercy and repentance (Q 39:53–54) and God’s sovereign forgiveness (Q 4:48, 39:53). The app notes that justice and forgiveness are defined differently, and it contrasts the accounts without assuming identical definitions.',b:'secondary'},
{x:'Muslim perspectives often stress hope in mercy and fear of judgment. Interpretations of Q 46:9 vary, and the app says to distinguish certainty of final salvation from presumption.',b:'secondary'},
{x:'Reformed teaching is justification by grace alone through faith alone, with good works as fruit (1689 11.1–11.2).',b:'checked'},
{x:'Reformed theology locates the vindication of divine justice in Christ’s propitiatory atonement (Romans 3:25–26).',b:'secondary'},
{x:'Intercession is denied in some Qur’an passages and described by divine permission in others (Q 2:255). A common Muslim distinction is between unauthorized and permitted intercession. The Bible names one Mediator (1 Timothy 2:5).',b:'secondary'},
{x:'Assurance in Reformed teaching rests on Christ’s promises and the Spirit (Romans 8:1; 1 John 5:13).',b:'secondary'}],
refs:[
{r:'Ephesians 2:8–9',what:'Saved by grace through faith, not of works.',side:'bible'},
{r:'Romans 3:25–26',what:'God is both just and the justifier of the one who has faith in Jesus.',side:'bible'},
{r:'Romans 8:1',what:'No condemnation for those in Christ Jesus.',side:'bible'},
{r:'1 John 5:13',what:'Written so that believers may know they have eternal life.',side:'bible'},
{r:'1 Timothy 2:5',what:'One God and one Mediator.',side:'bible'},
{r:'Q 39:53–54',what:'Repentance, faith, righteous deeds and divine mercy (as the app summarizes it).',side:'other',kind:'Qur’an',answers:'Ephesians 2:8–9'},
{r:'Q 4:48',what:'Cited on the page about how God forgives justly.',side:'other',kind:'Qur’an',answers:'Romans 3:25–26'},
{r:'Q 46:9',what:'Cited on the page about assurance; interpretations vary.',side:'other',kind:'Qur’an',answers:'Romans 8:1'},
{r:'Q 2:255',what:'Intercession only by Allah’s leave (as the app summarizes it).',side:'other',kind:'Qur’an',answers:'1 Timothy 2:5'}],
qs:[
{q:'What does the app warn against when describing Islamic salvation?',a:'Caricaturing it as merit without divine mercy.',b:'secondary'},
{q:'Which Scripture passage speaks to how God can forgive justly?',a:'Romans 3:25–26.',b:'secondary'},
{q:'What does the Bible name that the intercession passages in the Qur’an do not?',a:'One Mediator between God and men (1 Timothy 2:5).',b:'secondary'},
{q:'How does the 1689 Confession state faith’s role in justification?',a:'Faith is the alone instrument of justification (1689 11.2).',b:'checked'}],
explain:'In your own words: explain grace alone in a way a Muslim friend would recognize and weigh.'}
];

export const gateB:Gate[]=[
{lesson:'b-sources',q:'How does the course treat the hadith?',opts:['As revelation equal to Scripture','As evidence of what Islam claims, not as revelation','As worthless and never to be cited','As authoritative only where they agree with the Bible’s wording'],a:1,why:'The hadith page says they are studied as evidence of Islam’s claims. Scripture alone is the final authority (1689 1.1, 1.10).'},
{lesson:'b-sources',q:'A friend quotes a Muslim source loosely, and you want to answer. What does the course say to do first?',opts:['Answer from memory to save time','Quote the source word for word and state it accurately before judging it','Skip the source and argue from the Bible alone','Assume the worst reading'],a:1,why:'The app’s ninth-commandment rule: a critique of a misquoted source proves nothing.'},
{lesson:'b-beliefs',q:'Which Qur’an verse does the app pair with “each soul bears only its own load”?',opts:['Q 6:164','Q 5:72','Q 1:4','Q 33:40'],a:0,why:'Q 6:164 is the verse on the doctrine page; it stands against Romans 5:12–19.'},
{lesson:'b-beliefs',q:'What does the app say the real disagreement over the Trinity is?',opts:['Whether Christians worship three gods','Whether the one God has eternally distinct personal relations and whether the Son is truly divine','Whether Mary is part of the Trinity','Whether God is one'],a:1,why:'Both traditions confess one God; the disagreement is about distinct personal relations and the Son’s deity.'},
{lesson:'b-torah',q:'How does the app classify Qur’an passages that affirm earlier scripture beside passages about distortion?',opts:['A proven contradiction','Settled: the Bible is corrupt','An apparent tension needing contextual analysis','Irrelevant to the comparison'],a:2,why:'The page says the passages alone do not settle a universal corruption claim.'},
{lesson:'b-torah',q:'Which Genesis verse has no Qur’anic counterpart, according to the app?',opts:['Genesis 1:1','Genesis 3:15','Genesis 22:2','Genesis 12:3'],a:1,why:'Genesis 3:15, the first promise of a Redeemer.'},
{lesson:'b-text',q:'What does the Sana’a palimpsest consist of?',opts:['One complete early codex with no variants','An erased lower text and a later upper text, with variants in the lower','A copy of the Bible in Arabic','A printed edition from the 1920s'],a:1,why:'The upper text is close to the standard text; the lower text has variants.'},
{lesson:'b-text',q:'Why does the app say Q 2:34 and Q 18:50 are not manuscript variants?',opts:['They differ in every manuscript','They are internal parallels, classified as narrative expansion','They were added later','They contradict each other directly'],a:1,why:'The app separates internal parallels from manuscript variants and calls this narrative expansion.'},
{lesson:'b-response',q:'Which Scripture passage does the course pair with the denial in Q 4:157?',opts:['1 Corinthians 15:3–4','Genesis 3:15','Psalm 119:105','Isaiah 45:5'],a:0,why:'Paul and the Gospels affirm Jesus’ death; the app calls the issue a substantive disagreement.'},
{lesson:'b-salvation',q:'What does the app warn against when describing Islamic salvation?',opts:['Mentioning divine mercy','Caricaturing it as merit without divine mercy','Comparing it with Scripture','Quoting the Qur’an'],a:1,why:'The grace-or-works comparison says to avoid that caricature.'}
];
