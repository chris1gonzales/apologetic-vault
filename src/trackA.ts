// Track A: Biblical foundations (v3.40).
// Scripture wording checked against NASB 1995 at Bible Hub (/nasb/ pages). Short quotation marks hold NASB 1995 wording only; everything else is a summary.
// Confession lines were read in the app's own 1689 text (src/c1689.json). Paragraph numbers are given only where read there.
import type {Lesson} from './studyData';

export type Gate={q:string,opts:string[],a:number,why:string,lesson:string};
export const trackAGroup='Track A: Biblical foundations';

export const trackA:Lesson[]=[
{id:'a-scripture',n:1,title:'Scripture: the Word of God',group:trackAGroup,
pages:[['confession1689','1689 Confession'],['bibleReader','Bible Reader']],
passage:{ref:'2 Timothy 3:16–17',line:'All Scripture is “inspired by God” and equips the man of God for every good work.'},
facts:[
{x:'Scripture is the only sufficient, certain and infallible rule of saving knowledge, faith and obedience (1689 1.1).',b:'checked'},
{x:'Its authority does not depend on any man or church. It rests wholly on God, its author (1689 1.4).',b:'checked'},
{x:'The church’s witness may lead us to honor Scripture, but full persuasion comes from the Spirit’s inward work (1689 1.5).',b:'checked'},
{x:'Isaiah 8:20 gives the test: whatever does not agree with the law and the testimony has “no dawn.”',b:'checked'},
{x:'The Old Testament in Hebrew and the New in Greek were inspired by God and kept pure in all ages (1689 1.8). Scripture is read by comparing Scripture with Scripture (1689 1.9).',b:'checked'},
{x:'2 Peter 1:21 says no prophecy came by man’s will. Men spoke “moved by the Holy Spirit.”',b:'checked'}],
refs:[
{r:'2 Timothy 3:16–17',what:'Scripture is inspired by God and fits a person for every good work.',side:'bible'},
{r:'2 Peter 1:20–21',what:'Prophecy did not come from human will; men spoke as the Holy Spirit moved them.',side:'bible'},
{r:'Isaiah 8:20',what:'Test every teaching by the law and the testimony.',side:'bible'},
{r:'Psalm 119:105',what:'God’s word is a lamp for the path.',side:'bible'},
{r:'Acts 17:11',what:'The Bereans checked what they heard against the Scriptures.',side:'bible'}],
qs:[
{q:'On what does Scripture’s authority rest, according to 1689 1.4?',a:'On God, its author, and not on any man or church.',b:'checked'},
{q:'What does the church’s witness do, and what gives full persuasion (1689 1.5)?',a:'It may lead us to honor Scripture. The Spirit’s inward work gives full persuasion.',b:'checked'},
{q:'Which verse says Scripture is inspired by God, and what is it for?',a:'2 Timothy 3:16–17. It equips for every good work.'}],
explain:'In your own words: why can we call Scripture the final standard without arguing in a circle?'},

{id:'a-god',n:2,title:'God and the Trinity',group:trackAGroup,
pages:[['confession1689','1689 Confession'],['churchHistory','Councils & the Fathers']],
passage:{ref:'Matthew 28:19',line:'One name, and in it the Father, the Son and the Holy Spirit.'},
facts:[
{x:'There is one only living and true God (1689 2.1). Deuteronomy 6:4 is the root text for His oneness.',b:'checked'},
{x:'In that one being are three subsistences, the Father, the Son and the Holy Spirit, of one substance, power and eternity, each with the whole essence, the essence undivided (1689 2.3).',b:'checked'},
{x:'The Father is neither begotten nor proceeding; the Son is eternally begotten; the Spirit proceeds (1689 2.3).',b:'checked'},
{x:'Matthew 28:19 gives one name for three persons. 2 Corinthians 13:14 names Father, Son and Spirit together in one blessing.',b:'checked'},
{x:'1689 2.3 lists 1 John 5:7 among its proofs. That verse’s Greek text is disputed, so the doctrine here stands on the other passages.',b:'verify',n:'Open the app’s manuscripts pages for the textual evidence.'}],
refs:[
{r:'Deuteronomy 6:4',what:'The LORD is one.',side:'bible'},
{r:'Matthew 28:19–20',what:'Baptize in the one name of Father, Son and Holy Spirit.',side:'bible'},
{r:'2 Corinthians 13:14',what:'Grace of the Lord Jesus, love of God, fellowship of the Holy Spirit.',side:'bible'},
{r:'Isaiah 45:5',what:'There is no God besides the LORD.',side:'bible'}],
qs:[
{q:'State the Trinity in one sentence using 1689 2.3.',a:'One God in three persons (subsistences), of one substance, power and eternity, the essence undivided.',b:'checked'},
{q:'Why is “three gods” a wrong summary?',a:'The Confession says each person has the whole divine essence and the essence is undivided. It is one God, not three.',b:'checked'},
{q:'Which proof text in 1689 2.3 is textually disputed?',a:'1 John 5:7.',b:'verify'}],
explain:'In your own words: how would you answer “Christians worship three gods”?'},

{id:'a-fall',n:3,title:'Creation and the fall',group:trackAGroup,
pages:[['confession1689','1689 Confession']],
passage:{ref:'Genesis 1:27',line:'“God created man in His own image.”'},
facts:[
{x:'God made man, male and female, after His own image in knowledge, righteousness and true holiness (1689 4.2).',b:'checked'},
{x:'In Genesis 2:16–17 God gave a command and a warning: they could eat freely from every tree but one, and the day they ate from it they would “surely die.”',b:'checked'},
{x:'Satan used the serpent to deceive Eve, and Adam willfully broke the command (1689 6.1).',b:'checked'},
{x:'Adam and Eve stood in the place of all mankind. Guilt was imputed and a corrupt nature passed to their descendants (1689 6.3). Romans 5:12 says sin entered the world through one man, and death through sin.',b:'checked'}],
refs:[
{r:'Genesis 1:27',what:'Man made in God’s image, male and female.',side:'bible'},
{r:'Genesis 2:16–17',what:'The command and the warning of death.',side:'bible'},
{r:'Genesis 3:1–6',what:'The serpent’s deceit and the first sin.',side:'bible'},
{r:'Romans 5:12',what:'Sin and death entered through one man and spread to all.',side:'bible'},
{r:'Romans 3:23',what:'All have sinned and fall short of God’s glory.',side:'bible'}],
qs:[
{q:'What does being made in God’s image include, in 1689 4.2?',a:'Knowledge, righteousness and true holiness.',b:'checked'},
{q:'What was the penalty God named in Genesis 2:17?',a:'Death, in the day they ate.'},
{q:'What does 1689 6.3 say passes to Adam’s descendants?',a:'Guilt imputed and a corrupted nature.',b:'checked'}],
explain:'In your own words: why does the fall matter for how a person is saved?'},

{id:'a-covenant',n:4,title:'Covenant and the promise',group:trackAGroup,
pages:[['confession1689','1689 Confession']],
passage:{ref:'Genesis 3:15',line:'The promise of a coming seed who will defeat the serpent.'},
facts:[
{x:'The gap between God and the creature is so great that any reward of life comes through God’s voluntary condescension, which He has expressed by covenant (1689 7.1).',b:'checked'},
{x:'The covenant of grace was revealed first to Adam in the promise of salvation by the seed of the woman, and then by further steps until it was complete in the New Testament (1689 7.3, which cites Genesis 3:15).',b:'checked'},
{x:'Genesis 3:15 says the woman’s seed will bruise the serpent’s head and the serpent will bruise His heel.',b:'checked'},
{x:'The course adds Genesis 12 (the promise to Abraham) and Jeremiah 31 (the new covenant) as steps along the same line. These are not in the 1689 7.3 proof list.',b:'verify',n:'Added by the course. Open the linked pages and check the wording there.'}],
refs:[
{r:'Genesis 3:15',what:'The first promise: the woman’s seed against the serpent.',side:'bible'},
{r:'Genesis 12:1–3',what:'The promise to Abraham that all families will be blessed (course addition).',side:'bible'},
{r:'Jeremiah 31:31–34',what:'The promised new covenant (course addition).',side:'bible'},
{r:'Hebrews 8:6',what:'Christ is mediator of a better covenant (course addition).',side:'bible'}],
qs:[
{q:'To whom was the covenant of grace first revealed, and in what promise (1689 7.3)?',a:'To Adam, in the promise of salvation by the seed of the woman.',b:'checked'},
{q:'Which verse is the first promise of a Savior?',a:'Genesis 3:15.'},
{q:'Which two passages does the course add beyond 7.3?',a:'Genesis 12 and Jeremiah 31.',b:'verify'}],
explain:'In your own words: how does one promise run from Genesis 3 to the New Testament?'},

{id:'a-christ',n:5,title:'The person of Christ',group:trackAGroup,
pages:[['confession1689','1689 Confession'],['churchHistory','Councils & the Fathers']],
passage:{ref:'Philippians 2:6–8',line:'“Although He existed in the form of God,” He took the form of a bond-servant.'},
facts:[
{x:'The Son of God is very and eternal God, of one substance with the Father, and took on man’s nature in the fullness of time (1689 8.2).',b:'checked'},
{x:'John 1:1 says the Word was with God and was God. John 1:14 says the Word became flesh; the NASB calls Him the “only begotten” from the Father.',b:'checked'},
{x:'Colossians 2:9 says all the fullness of Deity dwells in Him bodily.',b:'checked'},
{x:'Philippians 2:6–8 moves from His existing in the form of God to taking a servant’s form and dying on a cross.',b:'checked'},
{x:'The office of mediator belongs to Christ alone and cannot be passed to anyone else (1689 8.9). 1 Timothy 2:5 says there is one mediator between God and men.',b:'checked'}],
refs:[
{r:'John 1:1',what:'The Word was with God and was God.',side:'bible'},
{r:'John 1:14',what:'The Word became flesh and dwelt among us.',side:'bible'},
{r:'Colossians 2:9',what:'The fullness of Deity dwells in Christ bodily.',side:'bible'},
{r:'Philippians 2:6–8',what:'Form of God, then servant, then the cross.',side:'bible'},
{r:'1 Timothy 2:5',what:'One God and one mediator.',side:'bible'}],
qs:[
{q:'What two natures does 1689 8.2 describe in the one Son?',a:'Fully God (of one substance with the Father) and fully man (He took man’s nature).',b:'checked'},
{q:'Which verse says there is one mediator between God and men?',a:'1 Timothy 2:5.'},
{q:'In Philippians 2:6, what does the NASB say about His existence before taking a servant’s form?',a:'That He existed in the form of God.'}],
explain:'In your own words: why must the Mediator be both God and man?'},

{id:'a-work',n:6,title:'The work of Christ',group:trackAGroup,
pages:[['confession1689','1689 Confession']],
passage:{ref:'1 Corinthians 15:3–4',line:'Christ died for our sins, was buried and was raised on the third day.'},
facts:[
{x:'Isaiah 53:5 speaks of One “pierced through” for our transgressions, with “chastening” for our well-being and healing by His “scourging.”',b:'checked'},
{x:'1 Corinthians 15:3–4 gives the gospel as delivered: died for our sins, buried, raised on the third day, all according to the Scriptures.',b:'checked'},
{x:'Christ died for the sins of the elect and rose again for their justification (1689 11.4).',b:'checked'},
{x:'Acts 17:31 says God fixed a day to judge the world through the man He appointed, and proved it by raising Him from the dead.',b:'checked'},
{x:'Christ is prophet, priest and king (1689 8.1 and 8.9).',b:'checked'}],
refs:[
{r:'Isaiah 53:5',what:'The suffering servant wounded for our transgressions.',side:'bible'},
{r:'1 Corinthians 15:3–4',what:'The gospel: death, burial, resurrection.',side:'bible'},
{r:'Acts 17:31',what:'The resurrection is God’s proof of the appointed Judge.',side:'bible'},
{r:'Romans 4:25',what:'Delivered over for our sins and raised for our justification.',side:'bible'}],
qs:[
{q:'What are the three events in the gospel of 1 Corinthians 15:3–4?',a:'Christ died for our sins, was buried and was raised on the third day.'},
{q:'According to 1689 11.4, for whom did Christ die and rise?',a:'For all the elect: He died for their sins and rose for their justification.',b:'checked'},
{q:'Which three offices does the Confession give Christ?',a:'Prophet, priest and king.',b:'checked'}],
explain:'In your own words: what did the cross do that the resurrection then confirmed?'},

{id:'a-justify',n:7,title:'Justification by faith',group:trackAGroup,
pages:[['confession1689','1689 Confession']],
passage:{ref:'Romans 3:28',line:'“A man is justified by faith apart from works of the Law.”'},
facts:[
{x:'God justifies by pardoning sins and accounting persons righteous for Christ’s sake alone, not by pouring righteousness into them (1689 11.1).',b:'checked'},
{x:'Faith is the alone instrument of justification. It is never alone in the person, but always accompanied by other graces and works by love (1689 11.2).',b:'checked'},
{x:'Romans 3:23–24 says all have sinned and are justified “as a gift” by His grace through the redemption in Christ Jesus.',b:'checked'},
{x:'Ephesians 2:8–9 says salvation is by grace through faith, not of ourselves and not of works.',b:'checked'},
{x:'Justification is applied personally when the Holy Spirit applies Christ to the person in due time (1689 11.4).',b:'checked'}],
refs:[
{r:'Romans 3:23–24',what:'All sinned; justified as a gift by grace through the redemption in Christ.',side:'bible'},
{r:'Romans 3:28',what:'Justified by faith apart from works of the Law.',side:'bible'},
{r:'Ephesians 2:8–9',what:'Saved by grace through faith, not by works.',side:'bible'},
{r:'Galatians 2:16',what:'No one is justified by works of the Law but through faith in Christ.',side:'bible'}],
qs:[
{q:'In 1689 11.1, what does God do in justifying, and what does He not do?',a:'He pardons and counts righteous for Christ’s sake alone. He does not infuse righteousness.',b:'checked'},
{q:'What is faith’s role in justification (1689 11.2)?',a:'The alone instrument, never alone in the person.',b:'checked'},
{q:'Which verse says justification is “as a gift”?',a:'Romans 3:24.'}],
explain:'In your own words: how is “by faith alone” different from “faith that does nothing”?'},

{id:'a-spirit',n:8,title:'The Holy Spirit and the new birth',group:trackAGroup,
pages:[['confession1689','1689 Confession']],
passage:{ref:'John 3:3',line:'Unless one is born again he cannot see the kingdom of God.'},
facts:[
{x:'God effectually calls those He has predestined, by His Word and Spirit, out of sin and death to grace and salvation in Christ (1689 10.1).',b:'checked'},
{x:'That call is of God’s free and special grace alone. The person is wholly passive, dead in sins, until quickened and renewed by the Holy Spirit (1689 10.2).',b:'checked'},
{x:'Ezekiel 36:26 promises a new heart and a new spirit. Titus 3:5 names the “regeneration” and renewing by the Holy Spirit.',b:'checked'},
{x:'Titus 3:4–7 is a proof text in 1689 11.4.',b:'checked'}],
refs:[
{r:'John 3:3',what:'The new birth is needed to see the kingdom.',side:'bible'},
{r:'Ezekiel 36:26',what:'God gives a new heart and a new spirit.',side:'bible'},
{r:'Titus 3:5',what:'Saved by mercy, through regeneration and renewing by the Spirit.',side:'bible'},
{r:'Ephesians 2:4–5',what:'Made alive with Christ when dead in transgressions.',side:'bible'}],
qs:[
{q:'In 1689 10.2, who acts first in effectual calling, and what is the person’s part at that moment?',a:'God acts. The person is wholly passive, being dead in sins until the Spirit quickens him.',b:'checked'},
{q:'Which verse uses the word “regeneration” in the NASB?',a:'Titus 3:5.'},
{q:'Which Old Testament verse promises a new heart?',a:'Ezekiel 36:26.'}],
explain:'In your own words: why does the Confession say the person is “wholly passive” at the start?'},

{id:'a-church',n:9,title:'The church, baptism and the Lord’s Supper',group:trackAGroup,
pages:[['confession1689','1689 Confession'],['baptistLine','Baptist line']],
passage:{ref:'1 Corinthians 11:26',line:'“You proclaim the Lord’s death until He comes.”'},
facts:[
{x:'The universal church consists of the whole number of the elect gathered under Christ, its head (1689 26.1).',b:'checked'},
{x:'Baptism and the Lord’s Supper are ordinances appointed by the Lord Jesus to continue in His church to the end of the world (1689 28.1).',b:'checked'},
{x:'Baptism is a sign of fellowship with Christ in His death and resurrection. Immersion is necessary to the due administration of it (1689 29.1 and 29.4).',b:'checked'},
{x:'The Lord’s Supper was instituted on the night He was betrayed, for perpetual remembrance of His death (1689 30.1). Paul delivers it in 1 Corinthians 11:23–26.',b:'checked'}],
refs:[
{r:'Matthew 28:19–20',what:'The commission: disciple, baptize, teach.',side:'bible'},
{r:'1 Corinthians 11:23–26',what:'The institution of the Lord’s Supper.',side:'bible'},
{r:'Romans 6:3–4',what:'Baptized into His death and raised to walk in newness of life.',side:'bible'},
{r:'Ephesians 1:22–23',what:'Christ is head over all things to the church.',side:'bible'}],
qs:[
{q:'What mode of baptism does 1689 29.4 name?',a:'Immersion, the dipping of the person in water.',b:'checked'},
{q:'How many ordinances does 1689 28.1 name?',a:'Two: baptism and the Lord’s Supper.',b:'checked'},
{q:'What does the Supper proclaim, and until when (1 Corinthians 11:26)?',a:'The Lord’s death, until He comes.'}],
explain:'In your own words: what does each ordinance picture about the gospel?'},

{id:'a-last',n:10,title:'Last things: resurrection and judgment',group:trackAGroup,
pages:[['confession1689','1689 Confession']],
passage:{ref:'1 Corinthians 15:51–52',line:'We will all be changed “in a moment, in the twinkling of an eye, at the last trumpet.”'},
facts:[
{x:'At death the body returns to dust and the soul returns to God. The righteous are with Christ (1689 31.1).',b:'checked'},
{x:'At the last day the living saints will be changed and all the dead raised with the selfsame bodies, though with different qualities (1689 31.2).',b:'checked'},
{x:'God has appointed a day to judge the world in righteousness by Jesus Christ (1689 32.1). Acts 17:31 says the same.',b:'checked'},
{x:'Revelation 22:20 ends the Bible with Christ’s “Yes, I am coming quickly” and the church’s “Come, Lord Jesus.”',b:'checked'}],
refs:[
{r:'1 Corinthians 15:51–52',what:'The dead raised and the living changed at the last trumpet.',side:'bible'},
{r:'Acts 17:31',what:'A day fixed to judge the world through the appointed Man.',side:'bible'},
{r:'Revelation 22:20',what:'Christ’s promise to come and the church’s answer.',side:'bible'},
{r:'1 Thessalonians 4:16–17',what:'The Lord descends and the dead in Christ rise first.',side:'bible'}],
qs:[
{q:'Whom does God judge by, according to 1689 32.1?',a:'By Jesus Christ.',b:'checked'},
{q:'Will the dead be raised with the same bodies or new ones (1689 31.2)?',a:'The selfsame bodies, with different qualities.',b:'checked'},
{q:'Which verse ends the Bible with “Come, Lord Jesus”?',a:'Revelation 22:20.'}],
explain:'In your own words: what hope does the resurrection give a believer today?'}
];

export const gateA:Gate[]=[
{lesson:'a-scripture',q:'A friend says, “The Bible is only authoritative because the church said so.” Which reply follows 1689 1.4–1.5?',opts:['The church’s approval gives Scripture its authority.','Its authority rests wholly on God, its author. The church’s witness may lead us to honor it, and full persuasion comes from the Spirit.','Scripture has authority only where science confirms it.','Only the original manuscripts have authority, so we cannot know.'],a:1,why:'1689 1.4 grounds authority in God. 1.5 gives the church’s witness and the Spirit’s inward work their places.'},
{lesson:'a-god',q:'Which statement matches 1689 2.3?',opts:['Three gods who agree with each other','One person who appears in three modes','One God in three persons of one substance, each with the whole essence','The Son is a created being made by the Father'],a:2,why:'2.3 says three subsistences of one substance, power and eternity, the essence undivided.'},
{lesson:'a-fall',q:'Which option sums up Genesis 2:16–17 and 1689 6.3?',opts:['God warned that eating from one tree meant death. Adam stood for all, so guilt and a corrupt nature came to his descendants.','God allowed every tree and gave no warning.','Only Adam was affected; his descendants start neutral.','The fall removed God’s image entirely and made people non-moral.'],a:0,why:'Genesis 2:17 gives the warning. 1689 6.3 says guilt was imputed and corruption conveyed.'},
{lesson:'a-covenant',q:'To whom, and in what promise, does 1689 7.3 say the covenant of grace was first revealed?',opts:['Abraham, in the promise of a land','Moses, in the law','Adam, in the promise of salvation by the seed of the woman','David, in the promise of a throne'],a:2,why:'7.3 cites Genesis 3:15 for the first revelation to Adam.'},
{lesson:'a-christ',q:'Which option fits Philippians 2:6–8, John 1:14 and 1689 8.2 together?',opts:['The Son became a different person and ceased to be God','The eternal Son, existing in the form of God, took on man’s nature and was obedient to death','Christ was only a man exalted to godhood','Christ only appeared to be human'],a:1,why:'The NASB says He existed in the form of God. 8.2 says very God took man’s nature.'},
{lesson:'a-work',q:'According to 1689 11.4 and 1 Corinthians 15:3–4, what did Christ do for the elect?',opts:['He died for their sins and rose for their justification','He showed them an example and nothing more','He died only so that they could earn merit','He rose but did not die for sins'],a:0,why:'11.4 says He died for their sins and rose again for their justification.'},
{lesson:'a-justify',q:'A person says, “My faith itself is the righteousness God counts.” What does 1689 11.1–11.2 say?',opts:['That is correct; faith is the righteousness.','God counts Christ’s righteousness for Christ’s sake alone. Faith is the alone instrument that receives it.','Faith plus works earns it.','Righteousness is poured into the person at baptism.'],a:1,why:'11.1 says God does not impute faith itself as righteousness. 11.2 calls faith the alone instrument.'},
{lesson:'a-spirit',q:'In 1689 10.2, what is the person’s part at the moment of effectual calling?',opts:['He chooses first, then God responds','He cooperates equally with God','He is wholly passive, dead in sins, until the Spirit quickens him','He earns the call by foreseen faith'],a:2,why:'10.2 says the call is not from anything foreseen in man and he is wholly passive until quickened.'},
{lesson:'a-church',q:'Which pair does 1689 28.1 name as ordinances, and what mode does 29.4 name for baptism?',opts:['Baptism and the Lord’s Supper; immersion','Seven sacraments; sprinkling','Baptism and confirmation; pouring','The Lord’s Supper alone; no set mode'],a:0,why:'28.1 names two ordinances. 29.4 says immersion is necessary to the due administration.'},
{lesson:'a-last',q:'What does 1689 31.2 say about the resurrection of the dead?',opts:['Souls are reborn in new bodies','The dead are raised with the selfsame bodies, with different qualities','There is no bodily resurrection','Only the living are changed; the dead stay as souls'],a:1,why:'31.2 says all the dead will be raised with the selfsame bodies, though different in quality.'}
];
