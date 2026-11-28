// Study course content (v3.39). Every fact below is restated from a page already in the app.
// Badge rule: a fact carries the badge shown on the app page it comes from. Where the page
// shows no badge for the line, the course uses "secondary" (never higher). Open the linked page for the sources.
export type B='checked'|'secondary'|'verify';
export type Fact={x:string,b?:B,n?:string};
export type RefRow={r:string,what:string,side:'bible'|'other',kind?:string,answers?:string};
export type QA={q:string,a:string,b?:B};
export type Lesson={id:string,n:number,title:string,group:string,pages:[string,string][],passage:{ref:string,line:string},facts:Fact[],refs:RefRow[],qs:QA[],explain?:string};

export const groupsOrder=['Foundation','Scripture and tools','Historical theology','Islam and the Qur’an','Manuscripts and the text','Other teachings','Hinduism'];

export const lessons:Lesson[]=[
{id:'method',n:1,title:'The apologetic method: Scripture is the final standard',group:'Foundation',
pages:[['apologeticsFramework','Standards & method'],['logicArgumentation','Logic & TAG']],
passage:{ref:'2 Timothy 3:16–17',line:'All Scripture is “inspired by God.” It is the standard by its own testimony, and everything else is measured by it.'},
facts:[
{x:'Scripture is the ultimate, unmoving standard by its own testimony (2 Timothy 3:16; Isaiah 8:20; 1689 1.4). Manuscripts do not make it so; they show it has been faithfully preserved (1689 1.8).'},
{x:'The 1689 Confession is a subordinate standard. Where it differs from Scripture, Scripture wins.'},
{x:'Manuscripts, history and scholarship are evidence about how texts were copied. They never decide what is true, and they are not a neutral court above Scripture.'},
{x:'The Qur’an and other texts are examined fairly in their own terms, then measured against Scripture. They are not a second standard.'},
{x:'Method controls: quote the claim and name the exact source; exegete in context; identify the kind and date of evidence; state the strongest informed objection; conclude only what the text warrants.'}],
refs:[
{r:'2 Timothy 3:16–17',what:'Scripture is inspired by God and equips for every good work.',side:'bible'},
{r:'Isaiah 8:20',what:'To the law and the testimony: what does not speak according to this word has no dawn.',side:'bible'},
{r:'2 Peter 1:20–21',what:'Prophecy came by the Holy Spirit, not by human will.',side:'bible'},
{r:'Proverbs 1:7',what:'The fear of the LORD is the beginning of knowledge (presuppositional anchor).',side:'bible'},
{r:'Colossians 2:3–8',what:'All treasures of wisdom are in Christ; do not be taken captive by empty philosophy.',side:'bible'},
{r:'1 Peter 3:15',what:'Be ready to give an answer with gentleness and respect.',side:'bible'},
{r:'2 Corinthians 10:4–5',what:'Take every thought captive to Christ.',side:'bible'},
{r:'Proverbs 18:13',what:'Answering before hearing is folly; state the other view accurately first.',side:'bible'}],
qs:[
{q:'What makes Scripture the ultimate standard, and what does the app say manuscripts do?',a:'Its own testimony (2 Timothy 3:16; 1689 1.4). Manuscripts show it was faithfully preserved (1689 1.8); they do not make it authoritative.'},
{q:'Where Scripture and the 1689 Confession differ, which wins?',a:'Scripture. The Confession is a subordinate summary.'},
{q:'Which verse tells you to state the other side’s view accurately before judging it?',a:'Proverbs 18:13 (with 1 Peter 3:15–16).'},
{q:'How does the app treat the Qur’an and other texts?',a:'Fairly in their own terms first, then measured against Scripture. They are not a second standard.'}]},

{id:'logic',n:2,title:'Logic and the transcendental argument',group:'Foundation',
pages:[['logicArgumentation','Logic & TAG']],
passage:{ref:'Proverbs 26:4–5',line:'Do not answer a fool on his terms, and answer a fool on his terms, to show where it leads.'},
facts:[
{x:'The transcendental argument has three steps: pick what everyone relies on (logic, uniform nature, moral obligation); ask what it requires; show that only the Christian worldview supplies that foundation.',b:'secondary',n:'The page notes the argument must be defended, not just announced.'},
{x:'Straw man: replacing an opponent’s claim with a weaker one. Example: “Christians believe in three gods.” The doctrine is one essence in three persons.',b:'secondary'},
{x:'Equivocation: switching meanings of a key word. “One” as one being versus one person.',b:'secondary'},
{x:'Begging the question uses a premise that assumes the conclusion. The page cautions that every worldview has basic commitments; the question is whether the argument gives substantive justification.',b:'secondary'}],
refs:[
{r:'Proverbs 26:4–5',what:'Both moves: do not answer on his terms; answer on his terms to expose where it leads.',side:'bible'},
{r:'Isaiah 55:8–9',what:'God’s thoughts are higher than ours (used with logic reflecting God’s mind).',side:'bible'},
{r:'1 Corinthians 14:33',what:'God is not a God of confusion but of peace.',side:'bible'},
{r:'Romans 1:18–21',what:'God is plainly known from creation, yet people suppress the truth.',side:'bible'}],
qs:[
{q:'State the three steps of the transcendental argument.',a:'Pick what everyone relies on; ask what it requires; show only the Christian worldview supplies it.',b:'secondary'},
{q:'Which fallacy is “Christians believe in three gods, so the Trinity is polytheism”?',a:'Straw man.',b:'secondary'},
{q:'Which two verses give both moves of answering a fool?',a:'Proverbs 26:4 and 26:5.'}]},

{id:'tools',n:3,title:'Searching and reading Scripture in the app',group:'Scripture and tools',
pages:[['bibleReader','Bible Reader'],['passageFinder','Find a passage'],['phraseSearch','Phrase search'],['confession1689','1689 Confession']],
passage:{ref:'Acts 17:11',line:'The Bereans examined the Scriptures daily to see whether these things were so.'},
facts:[
{x:'Phrase search (Bible and Qur’an tabs) tries an exact phrase first, then all words in any order, then at least half the words, ranked.'},
{x:'Results show a few verses on each side of a hit within the same chapter or surah. The Bible side uses the BSB or KJV with Old and New Testament and book filters.'},
{x:'The Qur’an side searches Pickthall, with an Allah/God search aid. Verse links go to Bible Hub (NASB) for the Bible and quran.com for the Qur’an.'},
{x:'The 1689 Confession page lists scripture proofs for each paragraph and links them to Bible Hub.'}],
refs:[
{r:'Acts 17:11',what:'The Bereans tested Paul’s message by the Scriptures.',side:'bible'},
{r:'Luke 1:1–4',what:'Luke wrote an orderly account so Theophilus could know the certainty of what he was taught.',side:'bible'}],
qs:[
{q:'In what order does phrase search try to match?',a:'Exact phrase, then all words in any order, then at least half the words.'},
{q:'Which text does the Qur’an phrase search use?',a:'Pickthall, with an Allah/God search aid.'}]},

{id:'councils',n:4,title:'Councils and the Fathers: Nicaea to Chalcedon',group:'Historical theology',
pages:[['churchHistory','Councils & the Fathers'],['history','Studies']],
passage:{ref:'John 1:1–18',line:'The Word was with God and was God, and the Word became flesh.'},
facts:[
{x:'Nicaea I (325) answered Arius, who taught that the Word was not coeternal with the Father. It confessed the Son as begotten, not made, of one substance (homoousios) with the Father.',b:'checked'},
{x:'Attendance is uncertain: tradition says 318 bishops; Eusebius gave about 250; the Latin subscription lists name 224.',b:'checked'},
{x:'The word homoousios is not in Scripture. The creed is a summary of John 1:1 and Colossians 1:15–20 and stands under that Scripture.',b:'checked'},
{x:'Ramsay MacMullen estimates about 200 bishops; this is one scholar’s estimate.',b:'secondary'},
{x:'Chalcedon (451) confesses one Christ in two natures with no confusion, no change, no division, no separation. It answered Eutyches and the earlier errors of Arius, Apollinarius and Nestorius.',b:'checked'}],
refs:[
{r:'John 1:1–18',what:'The eternal Word, God, who became flesh.',side:'bible'},
{r:'Colossians 1:15–20',what:'Christ, the image of the invisible God, creator and head.',side:'bible'},
{r:'Philippians 2:5–11',what:'Christ Jesus, in the form of God, took the form of a servant.',side:'bible'},
{r:'John 1:14',what:'The Word became flesh.',side:'bible'},
{r:'Hebrews 2:14–17',what:'He shared in flesh and blood and was made like his brothers.',side:'bible'},
{r:'Colossians 2:9',what:'In him all the fullness of deity dwells bodily.',side:'bible'}],
qs:[
{q:'Whom did Nicaea answer, and what word did it use for the Son’s relation to the Father?',a:'Arius; homoousios, of one substance with the Father.',b:'checked'},
{q:'What are the four negatives in the Chalcedonian definition?',a:'No confusion, no change, no division, no separation.',b:'checked'},
{q:'Is homoousios a biblical word?',a:'No. It is not in Scripture; the creed summarizes John 1:1 and Colossians 1:15–20 and stands under them.',b:'checked'},
{q:'Which attendance figures are given for Nicaea, and which is traditional?',a:'318 is traditional; about 250 (Eusebius); 224 named in the Latin lists.',b:'checked'}]},

{id:'baptist',n:5,title:'The Baptist line and the 1689 Confession',group:'Historical theology',
pages:[['baptistLine','The Baptist line'],['confessions','Creeds & Confessions'],['confession1689','1689 Confession']],
passage:{ref:'Acts 17:11',line:'Confessions are tested by the Scriptures, as the Bereans tested Paul.'},
facts:[
{x:'The Second London Confession was published in 1677 and took the date 1689 because over a hundred churches endorsed it at a general assembly in London that year (3–11 September).',b:'checked'},
{x:'Renihan says 108 churches were represented or sent word.',b:'checked'},
{x:'Its editors modelled it on Westminster and followed Savoy (the 1658 Congregational revision) wherever Savoy differed from Westminster.',b:'checked'},
{x:'The First London Confession is dated 1644. Copies had become scarce by 1677, and the churches wished to show Puritan agreement.',b:'checked'}],
refs:[
{r:'Acts 17:11',what:'Test every teaching by the Scriptures.',side:'bible'},
{r:'Isaiah 8:20',what:'The final test is the law and the testimony.',side:'bible'}],
qs:[
{q:'Why does a 1677 confession carry the date 1689?',a:'Over a hundred churches endorsed it at a general assembly in London in 1689 (3–11 September).',b:'checked'},
{q:'Which two earlier confessions did the editors follow?',a:'Westminster, and Savoy wherever Savoy differed from Westminster.',b:'checked'}]},

{id:'quran-text',n:6,title:'The Qur’an’s text: manuscripts and readings',group:'Islam and the Qur’an',
pages:[['manuscriptCriticism','OT & Qur’an manuscripts'],['quran','Qur’anic research'],['phraseQuran','Phrase search']],
passage:{ref:'2 Timothy 3:16',line:'Early dates for a text do not make it revelation; Scripture is inspired by God by its own testimony.'},
facts:[
{x:'The Sana’a palimpsest has two layers: an erased lower text and a later upper text. The upper text is close to the standard text; the lower text has variants, and its chapter order differs in places.',b:'secondary'},
{x:'Scholars disagree about its meaning: some treat the lower text as a witness to a non-standard recension; others say it was a collection of leaves.',b:'secondary'},
{x:'Ibn Mujāhid (d. 324/936) surveyed seven earlier readers, and his seven became widely recognized readings (qirāʾāt).',b:'secondary'},
{x:'In al-Fātiḥah 1:4, Ḥafṣ reads māliki (Master/Owner) and Warsh reads maliki (King).',b:'secondary'},
{x:'The same command to bow to Adam appears in Q 2:34 and 18:50; 18:50 says Iblis was among the jinn. The app calls this narrative expansion, not inherent contradiction.',b:'secondary'},
{x:'The same standing caution applies: early manuscript dates do not make a text revelation.'}],
refs:[
{r:'Q 1:4',what:'Māliki / maliki: the Ḥafṣ and Warsh readings of “Master/King of the Day of Judgment.”',side:'other',kind:'Qur’an'},
{r:'Q 2:87',what:'The verse given as an example where the Sana’a lower text has a different phrase.',side:'other',kind:'Qur’an'},
{r:'Q 2:34',what:'Angels commanded to bow to Adam; Iblis refuses.',side:'other',kind:'Qur’an'},
{r:'Q 18:50',what:'The same account; Iblis is one of the jinn.',side:'other',kind:'Qur’an'},
{r:'Q 3:3',what:'Mentions the Torah and the Gospel (Injīl).',side:'other',kind:'Qur’an'},
{r:'Q 55:13',what:'The refrain “Which of your Lord’s favors will you two deny?”',side:'other',kind:'Qur’an'},
{r:'2 Timothy 3:16',what:'Scripture is inspired by God.',side:'bible'}],
qs:[
{q:'What is the Sana’a palimpsest?',a:'A manuscript with an erased lower text and a later upper text; the lower text has variants from the standard text.',b:'secondary'},
{q:'Which verse is the Ḥafṣ and Warsh example, and what are the two readings?',a:'Q 1:4. Ḥafṣ: māliki (Master/Owner). Warsh: maliki (King).',b:'secondary'},
{q:'Which two verses give the bowing-to-Adam account, and what does 18:50 add?',a:'Q 2:34 and 18:50. 18:50 says Iblis was one of the jinn.',b:'secondary'}]},

{id:'muhammad',n:7,title:'Muhammad, the sources and the hadith',group:'Islam and the Qur’an',
pages:[['muhammadQuran','Muhammad & origins'],['apologeticsFramework','Standards & method'],['hadith','Hadith']],
passage:{ref:'Galatians 1:8–9',line:'Even an angel from heaven preaching another gospel is accursed; the message is tested by the gospel already delivered.'},
facts:[
{x:'Traditional chronology: birth about 570, first revelation about 610, Hijrah to Medina 622, conquest of Mecca 630, death 632.',b:'secondary',n:'These are traditional dates.'},
{x:'The Qur’an is early but not a continuous biography. Fuller narratives are in later sīrah and hadith collections.',b:'secondary'},
{x:'Sort every report as Qur’anic, early external testimony, later sīrah, or hadith, and compare independent attestations before affirming details.',b:'secondary'},
{x:'Deuteronomy 13:1–5 and 18:20–22 are Christian tests for prophetic claims, not descriptions written about Muhammad.',b:'secondary'},
{x:'The app bundles the Bukhari collection for search and links its hadith to related studies (Christology, Trinity, Qur’anic origins).'}],
refs:[
{r:'Galatians 1:8–9',what:'Another gospel, even from an angel, is accursed.',side:'bible'},
{r:'1 John 4:1–3',what:'Test the spirits; confess that Jesus Christ has come in the flesh.',side:'bible'},
{r:'Deuteronomy 13:1–5',what:'A prophet who leads to other gods is to be rejected, even with a sign.',side:'bible'},
{r:'Deuteronomy 18:20–22',what:'The test of a prophet who speaks in the LORD’s name.',side:'bible'},
{r:'Hebrews 1:1–3',what:'God has spoken finally by his Son.',side:'bible'},
{r:'Q 33:40',what:'Cited in the Muhammad’s-life study; check the page for how it is used.',side:'other',kind:'Qur’an'},
{r:'Q 48:1–3',what:'Cited in the Muhammad’s-life study.',side:'other',kind:'Qur’an'},
{r:'Q 2:97',what:'Gabriel as the mediator of the revelation.',side:'other',kind:'Qur’an'},
{r:'Q 53:3–4',what:'Cited on the page for the claim of divine origin of the revelation.',side:'other',kind:'Qur’an'}],
qs:[
{q:'Give the traditional dates for the Hijrah and Muhammad’s death.',a:'622 and 632.',b:'secondary'},
{q:'What four categories does the method use to sort reports about Muhammad?',a:'Qur’anic, early external testimony, later sīrah, hadith.',b:'secondary'},
{q:'Which Old Testament passages are tests of a prophet?',a:'Deuteronomy 13:1–5 and 18:20–22.',b:'secondary'}]},

{id:'christ-islam',n:8,title:'The deity of Christ and Qur’an 4:171, 5:72',group:'Islam and the Qur’an',
pages:[['christologyIslam','Deity of Christ'],['trinity4171','Qur’an 4:171']],
passage:{ref:'John 1:1–14',line:'The Word was God, all things were made through him, and the Word became flesh.'},
facts:[
{x:'The doctrine is one undivided divine essence in three persons. The Son shares the one essence and assumed a complete human nature without ceasing to be God.',b:'secondary'},
{x:'Q 5:72 condemns those who say that Allah is the Messiah, son of Mary. Nicene Christianity does not teach that the Father became Jesus or that Jesus is a second god.',b:'secondary'},
{x:'Q 4:171 calls Jesus the Messiah, messenger of Allah, His word and a spirit from Him, forbids saying “Three,” affirms one God, and rejects offspring.',b:'secondary'},
{x:'Grammar: the numeral thalāthatun (“three”) does not itself name the three; min (“from”) need not mean a share of divine essence. A Muslim may understand Nicene theology and still reject it.',b:'secondary'},
{x:'The real disagreement is whether the one God has eternally distinct personal relations and whether the Son is truly divine.',b:'secondary'}],
refs:[
{r:'John 1:1–14',what:'The eternal Word was God, creator, and became flesh.',side:'bible'},
{r:'Matthew 28:19',what:'One name, three persons: Father, Son and Holy Spirit.',side:'bible'},
{r:'John 20:28',what:'Thomas: “My Lord and my God.”',side:'bible'},
{r:'Isaiah 9:6',what:'The child is called Mighty God.',side:'bible'},
{r:'Titus 2:13',what:'Our great God and Savior Jesus Christ.',side:'bible'},
{r:'Q 4:171',what:'Messiah, messenger, His word, a spirit from Him; “do not say Three.”',side:'other',kind:'Qur’an',answers:'John 1:1–14'},
{r:'Q 5:72',what:'Condemns saying Allah is the Messiah, son of Mary.',side:'other',kind:'Qur’an',answers:'Matthew 28:19'}],
qs:[
{q:'What does the Trinity claim, and what does it not claim?',a:'One undivided essence in three persons. It is not three gods, three parts, or Mary as a person of the Trinity.',b:'secondary'},
{q:'Which verse of the Qur’an condemns saying that Allah is the Messiah, son of Mary?',a:'Q 5:72.',b:'secondary'},
{q:'Name the four descriptions of Jesus in Q 4:171.',a:'The Messiah, messenger of Allah, His word, and a spirit from Him.',b:'secondary'},
{q:'Which passage shows Thomas confessing Jesus as God?',a:'John 20:28.'}]},

{id:'torah-quran',n:9,title:'Torah and the Qur’anic accounts',group:'Islam and the Qur’an',
pages:[['torahQuran','Torah & Qur’anic accounts']],
passage:{ref:'Romans 5:12–19',line:'Through one man sin entered the world; through one man’s obedience many are made righteous.'},
facts:[
{x:'Adam is made from earth, placed in a garden, warned off one tree, led astray and cast out. Both accounts agree on this outline.',b:'secondary'},
{x:'The Qur’an has Adam repent and be forgiven (Q 2:37) with no inherited guilt. Scripture teaches that death and condemnation came through Adam’s sin (Romans 5:12–19).',b:'secondary'},
{x:'Genesis 3:15 gives the first promise of a Redeemer; the Qur’an has no counterpart.',b:'secondary'},
{x:'Muslims hold that prophets are protected from major sin, so there is no original sin.',b:'secondary'},
{x:'The app lays out each account in parallel: Genesis 1:26–3:24 beside Q 2:30–39; 7:11–25; 20:115–123; Noah in Genesis 6:9–9:17 beside Q 11:25–49; 29:14–15; 71.',b:'secondary'}],
refs:[
{r:'Genesis 1:26–3:24',what:'Creation of Adam, the garden and the fall.',side:'bible'},
{r:'Genesis 3:15',what:'The first promise of a Redeemer.',side:'bible'},
{r:'Romans 5:12–19',what:'Death and condemnation through Adam; righteousness through Christ.',side:'bible'},
{r:'Genesis 6:9–9:17',what:'Noah and the flood.',side:'bible'},
{r:'Q 2:30–39',what:'The Qur’anic Adam account; 2:37 is Adam’s repentance.',side:'other',kind:'Qur’an',answers:'Romans 5:12–19'},
{r:'Q 7:11–25',what:'Iblis refuses to bow to Adam (7:11–12); Adam and his wife are expelled.',side:'other',kind:'Qur’an',answers:'Genesis 3:15'},
{r:'Q 20:115–123',what:'Adam forgets, is led astray, and is forgiven.',side:'other',kind:'Qur’an'},
{r:'Q 11:25–49',what:'Noah and the flood.',side:'other',kind:'Qur’an'}],
qs:[
{q:'Which verse has Adam repent in the Qur’an, and what does Scripture teach instead about Adam’s sin?',a:'Q 2:37. Scripture: death and condemnation came through Adam (Romans 5:12–19).',b:'secondary'},
{q:'Which Genesis verse is the first promise of a Redeemer?',a:'Genesis 3:15.',b:'secondary'},
{q:'Give the Genesis and Qur’an references for Noah.',a:'Genesis 6:9–9:17; Q 11:25–49 (also 29:14–15 and surah 71).',b:'secondary'}]},

{id:'shia-sunni',n:10,title:'Sunni and Shia: the dispute over authority',group:'Islam and the Qur’an',
pages:[['shiaSunni','Sunni & Shia']],
passage:{ref:'1 Timothy 2:5',line:'There is one God and one Mediator between God and men, the man Christ Jesus.'},
facts:[
{x:'The page presents the disagreement in each side’s own scholars’ words: who should lead after Muhammad, and what the Ghadīr event means.',b:'verify'},
{x:'Five Qur’an verses are read differently by Shia and Sunni commentators: 5:55, 5:67, 5:3, 3:61 and 33:33.',b:'verify',n:'Sunni commentary in the commentators’ own words was not fully checked.'},
{x:'Madelung (2014) states his own reconstruction: he calls the Shiʿi waṣī claim “specious” and argues for Fāṭima as heir. The 2014 volume was published with the Institute of Ismaili Studies.',b:'verify'},
{x:'The Reformed response is not a side in the dispute. It asks what authority governs belief (Scripture) and who is the one Mediator.',b:'verify'}],
refs:[
{r:'1 Timothy 2:5',what:'One God and one Mediator, the man Christ Jesus.',side:'bible'},
{r:'Isaiah 8:20',what:'Authority is the law and the testimony.',side:'bible'},
{r:'Acts 17:11',what:'Test claims of authority by Scripture.',side:'bible'},
{r:'Q 5:55',what:'One of the five verses Shia and Sunni commentators read differently (see the page for each reading).',side:'other',kind:'Qur’an'},
{r:'Q 5:67',what:'One of the five contested verses; the page sets the Shia and Sunni readings side by side.',side:'other',kind:'Qur’an'},
{r:'Q 5:3',what:'One of the five contested verses (completion of the religion); see the page for both readings.',side:'other',kind:'Qur’an'},
{r:'Q 3:61',what:'One of the five contested verses; see the page for both readings.',side:'other',kind:'Qur’an'},
{r:'Q 33:33',what:'One of the five contested verses; see the page for both readings.',side:'other',kind:'Qur’an'}],
qs:[
{q:'Name the five Qur’an verses the page compares.',a:'Q 5:55, 5:67, 5:3, 3:61 and 33:33.',b:'verify'},
{q:'How does the page present Madelung’s 2014 argument?',a:'As his own reconstruction: Fāṭima as heir, the Shiʿi waṣī claim “specious.”',b:'verify'}]},

{id:'bible-text',n:11,title:'The Bible’s text: manuscripts and variants',group:'Manuscripts and the text',
pages:[['understandingText','Understanding the text'],['textualCriticism','Inerrancy & the Bible’s text'],['manuscriptCriticism','OT & Qur’an manuscripts']],
passage:{ref:'Numbers 6:24–26',line:'The priestly blessing, found on the Ketef Hinnom silver amulets.'},
facts:[
{x:'The Ketef Hinnom silver scrolls (about 600 BCE) carry a version of the priestly blessing (Numbers 6:24–26). The Israel Museum calls them the oldest known copies of biblical text, about 500 years older than the Dead Sea Scrolls. They are amulets, not a copy of the Torah.',b:'checked'},
{x:'Four terms: manuscript, codex, textual witness, textual variant.',b:'checked'},
{x:'The page covers the Septuagint, the Dead Sea Scrolls, the Nash Papyrus, the Samaritan Pentateuch, the Masoretes, the Aleppo and Leningrad Codices, and the Cairo Genizah.',b:'checked'},
{x:'Variant examples: “sons of Israel” or “sons of God”; two forms of Jeremiah; a long and a short David and Goliath; Psalm 22 “like a lion” or “they pierced”; the Great Isaiah Scroll compared with the later text.',b:'secondary'},
{x:'Scripture’s authority does not rest on manuscripts; manuscripts show faithful preservation (1689 1.8).'}],
refs:[
{r:'Numbers 6:24–26',what:'The priestly blessing on the Ketef Hinnom amulets.',side:'bible'},
{r:'Psalm 22:16',what:'Textual variant: “like a lion” or “they pierced.”',side:'bible'},
{r:'Deuteronomy 31:24–26',what:'Moses commands the book of the law to be kept by the ark.',side:'bible'},
{r:'2 Timothy 3:16',what:'Scripture is inspired by God.',side:'bible'}],
qs:[
{q:'What is on the Ketef Hinnom amulets, and how old are they?',a:'The priestly blessing (Numbers 6:24–26), about 600 BCE. They are amulets, not a copy of the Torah.',b:'checked'},
{q:'Which Psalm 22 variant is a standard example?',a:'“Like a lion” or “they pierced” (Psalm 22:16).',b:'secondary'},
{q:'What do manuscripts do for Scripture’s authority?',a:'They show faithful preservation; they do not ground its authority (1689 1.8).'}]},

{id:'wof',n:12,title:'Word of Faith and the New Apostolic Reformation',group:'Other teachings',
pages:[['wordFaith','Word of Faith & NAR']],
passage:{ref:'Ephesians 2:19–22',line:'The household of God is built on the foundation of the apostles and prophets, Christ Jesus himself the cornerstone.'},
facts:[
{x:'Claim: modern apostles hold authority equal to the Twelve and Paul. Response: Acts 1:21–26 requires a witness of the ministry and resurrection; Paul grounds his commission in seeing the risen Christ; Revelation 21:14 shows the Twelve as foundational.',b:'secondary'},
{x:'The wider use of apostolos for delegates (Philippians 2:25) does not give the authority of Christ’s commissioned witnesses.',b:'secondary'},
{x:'Claim: modern prophecy may be mistaken yet still be divine revelation. Response: biblical prophecy claims divine speech (Deuteronomy 18:20–22; Jeremiah 23:16–32), and 1 Corinthians 14:29 requires evaluation.',b:'secondary'},
{x:'The page states the continuationist counter-points fairly (for example, the duration of equipping in Ephesians 4:13).',b:'secondary'}],
refs:[
{r:'Acts 1:21–26',what:'Replacing Judas requires a witness from Jesus’ ministry through the resurrection.',side:'bible'},
{r:'1 Corinthians 9:1',what:'Paul: “Have I not seen Jesus our Lord?”',side:'bible'},
{r:'Revelation 21:14',what:'The wall’s twelve foundations bear the names of the twelve apostles.',side:'bible'},
{r:'Ephesians 2:19–22',what:'The foundation of the apostles and prophets.',side:'bible'},
{r:'Deuteronomy 18:20–22',what:'The test of a prophet.',side:'bible'},
{r:'Jeremiah 23:16–32',what:'Prophets who speak visions from their own minds.',side:'bible'},
{r:'1 Corinthians 14:29',what:'Let the others weigh what is said.',side:'bible'}],
qs:[
{q:'Which passage sets the requirements for replacing an apostle?',a:'Acts 1:21–26.',b:'secondary'},
{q:'What does 1 Corinthians 14:29 require of prophecy?',a:'Evaluation by others.',b:'secondary'}]},

{id:'catholic',n:13,title:'Roman Catholicism: the Rosary and Mary',group:'Other teachings',
pages:[['catholic','Roman Catholicism']],
passage:{ref:'1 Timothy 2:5',line:'There is one God and one mediator between God and men, the man Christ Jesus.'},
facts:[
{x:'Catholic teaching encourages the Rosary: a repeated sequence of Hail Marys with meditations on the life of Christ. The Hail Mary asks Mary to pray for sinners now and at the hour of death (CCC 2676–2679, 2708).',b:'checked'},
{x:'Reformed response: Scripture records Gabriel greeting Mary, not the church praying to her. The only mediator is Christ, and believers come boldly to his throne (Hebrews 4:16). Jesus warns against vain repetition (Matthew 6:7).',b:'checked'},
{x:'The page also addresses adoration, celibacy and anointing.',b:'checked'}],
refs:[
{r:'1 Timothy 2:5',what:'One mediator between God and men.',side:'bible'},
{r:'Hebrews 4:14–16',what:'Approach the throne of grace with confidence.',side:'bible'},
{r:'Matthew 6:7–8',what:'Do not heap up empty phrases.',side:'bible'},
{r:'Luke 1:28',what:'Gabriel’s greeting to Mary.',side:'bible'},
{r:'Luke 11:27–28',what:'Blessed rather are those who hear the word of God and keep it.',side:'bible'},
{r:'CCC 2676–2679',what:'The Catechism on the Hail Mary.',side:'other',kind:'Catechism',answers:'1 Timothy 2:5'},
{r:'CCC 2708',what:'The Catechism on meditation and the Rosary.',side:'other',kind:'Catechism',answers:'Matthew 6:7–8'}],
qs:[
{q:'Which verse is the main reply to praying to Mary as an intercessor?',a:'1 Timothy 2:5, with Hebrews 4:16.',b:'checked'},
{q:'Which Catechism numbers does the page cite for the Hail Mary?',a:'CCC 2676–2679 (and 2708 for the Rosary).',b:'checked'}]},

{id:'lds',n:14,title:'Latter-day Saints: added scripture and the nature of God',group:'Other teachings',
pages:[['lds','Latter-day Saints']],
passage:{ref:'Galatians 1:8–9',line:'If anyone preaches another gospel, even an angel from heaven, let him be accursed.'},
facts:[
{x:'The Church accepts the Book of Mormon, Doctrine and Covenants and Pearl of Great Price as scripture alongside the Bible. The Book of Mormon carries the subtitle “Another Testament of Jesus Christ.”',b:'checked'},
{x:'Reformed response: the faith was once for all delivered (Jude 3), and Scripture is complete and sufficient (1689 1.1, 1.6).',b:'checked'},
{x:'The page lists further topics: God once a man, the Godhead, spirit brothers, exaltation, Bible translation, the apostasy, Joseph Smith, grace and works, three degrees, baptism for the dead and the burning-in-the-bosom test.',b:'checked'}],
refs:[
{r:'Galatians 1:8–9',what:'Another gospel is accursed, even from an angel.',side:'bible'},
{r:'Jude 3',what:'The faith was once for all delivered to the saints.',side:'bible'},
{r:'Revelation 22:18–19',what:'Do not add to the words of this book.',side:'bible'},
{r:'Deuteronomy 4:2',what:'Do not add to or take from the word.',side:'bible'},
{r:'2 Timothy 3:16–17',what:'Scripture equips for every good work.',side:'bible'},
{r:'Book of Mormon',what:'Added scripture, subtitled Another Testament of Jesus Christ.',side:'other',kind:'LDS scripture',answers:'Galatians 1:8–9'}],
qs:[
{q:'Which three books are accepted beside the Bible?',a:'The Book of Mormon, Doctrine and Covenants, and Pearl of Great Price.',b:'checked'},
{q:'Which verse says the faith was once for all delivered?',a:'Jude 3.',b:'checked'}]},

{id:'jw',n:15,title:'Jehovah’s Witnesses: the Trinity and the deity of Christ',group:'Other teachings',
pages:[['jw','Jehovah’s Witnesses']],
passage:{ref:'John 20:28',line:'Thomas answered him, “My Lord and my God!”'},
facts:[
{x:'Witnesses teach that God is Jehovah alone, the Father is superior to the Son, and the Holy Spirit is not a person. The Trinity is called a later church dogma (Should You Believe in the Trinity?).',b:'checked'},
{x:'Reformed response: Matthew 28:19 joins one name and three persons; the Son is called Mighty God; Thomas worships Jesus as “my Lord and my God” (1689 2.3).',b:'checked'},
{x:'Witnesses teach Michael is another name for Jesus; the page also covers the New World Translation, the 144,000, 1914, blood and shunning.',b:'checked'}],
refs:[
{r:'Matthew 28:19',what:'Baptize in the name of the Father, Son and Holy Spirit.',side:'bible'},
{r:'John 10:30',what:'I and the Father are one.',side:'bible'},
{r:'John 20:28',what:'My Lord and my God.',side:'bible'},
{r:'Isaiah 9:6',what:'Mighty God.',side:'bible'},
{r:'Titus 2:13',what:'Our great God and Savior Jesus Christ.',side:'bible'},
{r:'2 Corinthians 13:14',what:'The grace of the Lord Jesus, the love of God, the fellowship of the Holy Spirit.',side:'bible'},
{r:'Should You Believe in the Trinity?',what:'The Watch Tower brochure the page cites for the denial.',side:'other',kind:'Watch Tower',answers:'John 20:28'}],
qs:[
{q:'Which verses are listed against “the Trinity is a later dogma”?',a:'Matthew 28:19; John 10:30; John 20:28; Isaiah 9:6; Titus 2:13; 2 Corinthians 13:14.',b:'checked'},
{q:'Whom do Witnesses say Michael is?',a:'Jesus in his heavenly existence.',b:'checked'}]},

{id:'hindu-texts',n:16,title:'Hindu texts and doctrines',group:'Hinduism',
pages:[['hinduTexts','Hinduism'],['hinduSchools','Schools'],['hinduBhakti','Bhakti']],
passage:{ref:'Romans 1:19–21',line:'What can be known of God is plain, yet people suppress the truth.'},
facts:[
{x:'There is no single canon. The Vedic collections run in four layers: Saṃhitās, Brāhmaṇas, Āraṇyakas and Upaniṣads. Śruti texts are treated as revealed.',b:'checked'},
{x:'Upaniṣad and Gītā dates vary by source; the app gives ranges and does not pick one.',b:'verify'},
{x:'Ātman and brahman: the Upaniṣads treat both; Dasgupta says the central teaching is their identity.',b:'checked'},
{x:'The four aims of life (puruṣārthas): dharma, artha, kāma, mokṣa.',b:'checked'},
{x:'The Gītā names three paths: karma yoga, jñāna yoga and bhakti yoga.',b:'checked'},
{x:'Chāndogya 6.8.7 (Müller, SBE): “thou, O Śvetaketu, art it.” The note is one tradition’s reading; Rāmānuja and Madhva read tat tvam asi differently.',b:'checked'},
{x:'Gītā 18.66 (Telang): forsaking all duties, come to me as sole refuge. 18.47 says one’s own duty is better than another’s. Scholars treat how these fit as open.',b:'checked'}],
refs:[
{r:'Chāndogya Upaniṣad 6.8.7',what:'Tat tvam asi: the self is the True.',side:'other',kind:'Upaniṣad',answers:'John 1:1–3'},
{r:'Bhagavad Gītā 18.66',what:'Abandon all duties and take refuge in me.',side:'other',kind:'Gītā'},
{r:'Bhagavad Gītā 18.47',what:'One’s own duty, though defective, is better than another’s well performed.',side:'other',kind:'Gītā'},
{r:'Chāndogya Upaniṣad 3.14.4',what:'Śāṇḍilya equates ātman and brahman.',side:'other',kind:'Upaniṣad'},
{r:'Romans 1:19–21',what:'God is plainly known from creation; people suppress the truth.',side:'bible'}],
qs:[
{q:'What are the four aims of life?',a:'Dharma, artha, kāma, mokṣa.',b:'checked'},
{q:'Where does the Gītā say “forsake all duties,” and where does it commend one’s own duty?',a:'18.66 and 18.47.',b:'checked'},
{q:'Why does the app give ranges for Upaniṣad and Gītā dates?',a:'The sources conflict, so it does not pick one.',b:'verify'}]},

{id:'hindu-reply',n:17,title:'A Reformed reply to Hindu thought',group:'Hinduism',
pages:[['hinduResponse','Response'],['hinduPractice','Practice']],
passage:{ref:'Colossians 1:16–17',line:'All things were created through him and for him, and in him all things hold together.'},
facts:[
{x:'The One and the Many: Advaita makes unity ultimate and plurality an appearance. The argument itself uses distinctions (speaker, hearer, premise, conclusion), a transcendental problem for the position. Rāmānuja makes a related point inside Hinduism.',b:'checked'},
{x:'Creation: Scripture teaches God made the world out of nothing and called it good. Madhva’s school keeps the world real, so a Hindu may share this point against Advaita.',b:'checked'},
{x:'Reason and God: Nyāya argues God can be known by reason; the three Vedānta commentators say reason alone cannot prove God. Both are partly right by Scripture’s standard.',b:'checked'},
{x:'The page also treats karma, rebirth and sin.',b:'checked'}],
refs:[
{r:'John 1:1–3',what:'The Word, God, made all things.',side:'bible'},
{r:'Genesis 1:31',what:'God saw everything he had made, and it was very good.',side:'bible'},
{r:'Psalm 33:6–9',what:'By the word of the LORD the heavens were made.',side:'bible'},
{r:'Hebrews 11:3',what:'The universe was created by the word of God.',side:'bible'},
{r:'Psalm 19:1–4',what:'The heavens declare the glory of God.',side:'bible'},
{r:'1 Corinthians 1:21',what:'The world did not know God through wisdom.',side:'bible'},
{r:'Colossians 1:16–17',what:'All things created through and for Christ.',side:'bible'}],
qs:[
{q:'What is the transcendental problem the page raises against Advaita?',a:'The argument must use distinctions it says are not ultimately real.',b:'checked'},
{q:'Which Hindu school keeps the world real, so it shares the creation point?',a:'Madhva’s school.',b:'checked'}]}
];

export const lessonById=(id:string)=>lessons.find(l=>l.id===id);
