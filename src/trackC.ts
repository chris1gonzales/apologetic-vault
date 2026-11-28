// Track C: Other teachings (v3.43). Built only from pages already in the app (Roman Catholicism, Latter-day Saints,
// Jehovah's Witnesses, Word of Faith, Hinduism, Logic and transcendental apologetics). Badge rule as in the rest of the
// course: a line the app page does not badge is shown as Secondary, never higher. Lines about what a tradition teaches
// mirror the app page's own status. Scripture lines are summaries; the linked pages are NASB 1995 at Bible Hub.
// Gaps stated in the lessons: the app has no Roman Catholic or Word of Faith page on the person of Christ, and no Word of
// Faith page on how a person is saved. Those lines are marked Verify and are not presented as settled.
import type {Lesson} from './studyData';
import type {Gate} from './trackA';

export const trackCGroup='Track C: Other teachings';

export const trackC:Lesson[]=[
{id:'c-christ',n:1,title:'Who is Jesus? Five answers measured by Scripture',group:trackCGroup,
pages:[['lds','Latter-day Saints'],['jw','Jehovah’s Witnesses'],['hinduSchools','Hinduism: schools'],['wordFaith','Word of Faith'],['catholic','Roman Catholicism']],
passage:{ref:'John 1:14',line:'The Word became flesh and dwelt among us.'},
facts:[
{x:'Latter-day Saints teach that the Father, Son and Holy Ghost are three distinct beings united in purpose, not one being in three persons. They also teach that Jesus is the Firstborn spirit child of the Father and that Lucifer is another spirit son.',b:'checked'},
{x:'Jehovah’s Witnesses reject the Trinity. They teach that the Father is superior to the Son, that the Word is “a god” and the first being God created, and that Jesus in heaven is the archangel Michael.',b:'checked'},
{x:'Witnesses also teach that Jesus was raised a spirit creature, not in his body of flesh, and they give him “obeisance” and not worship.',b:'checked'},
{x:'Hindu sources describe Viṣṇu as descending in many avatars. The page says this claim concerns what the tradition says, and does not assess whether any avatar is historical.',b:'secondary'},
{x:'The Scripture answer in each case is the same. The Word was God and became flesh once (John 1:1–3, 14), is the image of the invisible God and Creator of all things (Colossians 1:15–17), and has the fullness of deity dwelling in bodily form (Colossians 2:9). Thomas called him “my Lord and my God” and was not corrected (John 20:28).',b:'checked',n:'Scripture lines are summaries, with short NASB 1995 wording only.'},
{x:'Roman Catholicism confesses the Trinity and the Council of Chalcedon: one person, two natures, fully God and fully man. The app’s Catholic pages record no dispute over the person of Christ, so this course does not invent one. The disagreement with Rome lies elsewhere (lessons 2 and 3).',b:'verify',n:'This is a gap in the app, not a finding: no Catholic page covers Christology. Confirm against the Catechism before relying on it.'},
{x:'Word of Faith teachers are not one voice. Many affirm the deity of Christ. The app’s page lists, as a proposition to examine and not as what every adherent teaches, the claim that Christ ceased to be spiritually united to God. It answers that the Son never ceased to be God and that his finished sacrifice is sufficient, and tells the reader to verify the precise claim before attributing it.',b:'secondary',n:'The page does not badge this row, so it is Secondary. Name the teacher and the statement before you say anyone teaches it.'}],
refs:[
{r:'John 1:1–3',what:'The Word was with God and was God; all things were made through him.',side:'bible'},
{r:'John 1:14',what:'The Word became flesh and dwelt among us.',side:'bible'},
{r:'John 20:28',what:'Thomas: “My Lord and my God.”',side:'bible'},
{r:'Colossians 1:15–17',what:'Image of the invisible God, Creator of all things.',side:'bible'},
{r:'Colossians 2:9',what:'In him all the fullness of deity dwells in bodily form.',side:'bible'},
{r:'Hebrews 1:8',what:'The Father addresses the Son as God.',side:'bible'},
{r:'Titus 2:13',what:'Our great God and Savior, Christ Jesus.',side:'bible'},
{r:'Luke 24:36–43',what:'The risen Jesus has flesh and bones and eats.',side:'bible'},
{r:'Gospel Topics: Godhead',what:'LDS: three distinct beings united in purpose.',side:'other',kind:'LDS',answers:'Deuteronomy 6:4'},
{r:'Should You Believe in the Trinity?',what:'Witnesses: the Trinity is a later church dogma.',side:'other',kind:'Watchtower',answers:'John 1:1–3'},
{r:'jw.org: John 1:1',what:'Witnesses: the Word is “a god,” the first created.',side:'other',kind:'Watchtower',answers:'Colossians 1:15–17'}],
qs:[
{q:'How do Latter-day Saints describe the Godhead, and how does that differ from Scripture’s teaching?',a:'Three distinct beings united in purpose. Scripture presents one God (Deuteronomy 6:4) and the Son as God (John 1:1; John 20:28).',b:'checked'},
{q:'What do Witnesses teach about the Word in John 1:1?',a:'That he is “a god” and the first created being. Colossians 1:15–17 says all things were made through him.',b:'checked'},
{q:'Where does the app say the Catholic disagreement lies, if not in the person of Christ?',a:'In authority and in how a person is made right with God (lessons 2 and 3).',b:'verify'},
{q:'What must you do before saying a Word of Faith teacher holds a claim?',a:'Name the teacher and the statement. The page lists claims as propositions to examine, not what every adherent teaches.',b:'secondary'}],
explain:'In your own words: why do all of these answers about Jesus come back to John 1:1–14?'},

{id:'c-authority',n:2,title:'Where does final authority sit?',group:trackCGroup,
pages:[['catholic','Roman Catholicism'],['lds','Latter-day Saints'],['jw','Jehovah’s Witnesses'],['wordFaith','Word of Faith'],['hinduTexts','Hinduism: texts']],
passage:{ref:'Isaiah 8:20',line:'To the law and the testimony: what does not speak according to this word has no dawn.'},
facts:[
{x:'Rome teaches that Scripture and Sacred Tradition flow from the same source and are received with equal devotion. Vatican I defined that the Pope, when he speaks ex cathedra on faith or morals, is infallible.',b:'checked'},
{x:'Latter-day Saints accept the Book of Mormon, Doctrine and Covenants and Pearl of Great Price as scripture alongside the Bible, and hold that a living prophet and apostles lead by continuing revelation.',b:'checked'},
{x:'Witnesses use their own New World Translation and tie salvation to belonging to the organization and obeying the Governing Body. The app shows both of those lines as Secondary.',b:'secondary'},
{x:'The Word of Faith page lists, as propositions to examine, that modern apostles hold authority equal to the Twelve and Paul, and that modern prophetic messages may be mistaken yet still be divine revelation. It sets Acts 1:21–26 and Ephesians 2:19–22 against the first and Deuteronomy 18:20–22 against the second.',b:'secondary',n:'Not a claim that every Word of Faith teacher says this. Continuationists answer on some points, and the page says so.'},
{x:'Hindu sources differ. Pūrvamīmāṃsā holds the Vedas to be eternal and authorless. Nyāya and the theistic Vedānta schools make God their author.',b:'checked'},
{x:'Scripture is the final standard, and the Confession is subordinate to it. Its authority rests wholly on God (1689 1.4). Nothing is to be added to Scripture, whether by new revelation or traditions of men (1689 1.6), and Scripture is the supreme judge of every controversy of religion (1689 1.10).',b:'checked'},
{x:'Berea tested even apostolic preaching by the Scriptures (Acts 17:11). A second gospel is to be rejected even from an angel (Galatians 1:8–9).',b:'checked'}],
refs:[
{r:'2 Timothy 3:16–17',what:'Scripture is inspired by God and equips for every good work.',side:'bible'},
{r:'Isaiah 8:20',what:'Test every word by the law and the testimony.',side:'bible'},
{r:'Acts 17:11',what:'The Bereans examined the Scriptures daily.',side:'bible'},
{r:'Galatians 1:8–9',what:'Even an angel who preaches another gospel is accursed.',side:'bible'},
{r:'Jude 1:3',what:'The faith was once for all handed down to the saints.',side:'bible'},
{r:'Ephesians 2:19–22',what:'The household is built on the foundation of the apostles and prophets.',side:'bible'},
{r:'CCC 80–82',what:'Rome: Scripture and Tradition from one source, received with equal devotion.',side:'other',kind:'Catechism',answers:'2 Timothy 3:16–17'},
{r:'Pastor Aeternus ch. 4',what:'Vatican I: papal infallibility.',side:'other',kind:'Vatican I',answers:'Galatians 1:8–9'},
{r:'Gospel Topics: scriptures',what:'LDS: added scripture beside the Bible.',side:'other',kind:'LDS',answers:'Galatians 1:8–9'}],
qs:[
{q:'How does Rome describe the relation of Scripture and Tradition?',a:'As flowing from the same source and received with equal devotion (CCC 80–82).',b:'checked'},
{q:'What do Latter-day Saints accept as scripture beside the Bible?',a:'The Book of Mormon, Doctrine and Covenants and Pearl of Great Price.',b:'checked'},
{q:'Which passage shows the Bereans testing apostolic preaching?',a:'Acts 17:11.',b:'checked'},
{q:'How should you describe the Word of Faith claims about modern apostles and prophecy?',a:'As propositions to examine, not what every adherent teaches.',b:'secondary'}],
explain:'In your own words: if a church says its leaders cannot err, what does Isaiah 8:20 tell you to do with that claim?'},

{id:'c-saved',n:3,title:'How is a person made right with God?',group:trackCGroup,
pages:[['catholic','Roman Catholicism'],['lds','Latter-day Saints'],['jw','Jehovah’s Witnesses'],['hinduPractice','Hinduism: practices'],['wordFaith','Word of Faith']],
passage:{ref:'Ephesians 2:8–9',line:'Salvation is by grace through faith, and not by works.'},
facts:[
{x:'Rome teaches that justification is the renewal of the inner man, merited by Christ’s Passion and granted through baptism. Trent condemns anyone who says the sinner is justified by faith alone (session 6, canon 9). The Catechism says that after the first grace, believers can merit an increase of grace and eternal life.',b:'checked'},
{x:'Rome also teaches that the Mass is a propitiatory sacrifice (Trent, session 22, canon 3). Scripture says Christ offered one sacrifice for sins for all time (Hebrews 10:10–14).',b:'checked'},
{x:'Latter-day Saints teach salvation by grace “after all we can do,” with faith, repentance, baptism, the gift of the Spirit and temple covenants required for exaltation. Nearly all people receive one of three kingdoms of glory.',b:'checked'},
{x:'Witnesses tie salvation to belonging to the organization and obeying the Governing Body. They teach that only 144,000 go to heaven and that the rest live on a paradise earth.',b:'secondary'},
{x:'Hindu sources teach karma and rebirth, with liberation from the cycle. The Gītā also offers release to those who take refuge in Krishna. The page calls this the nearest point of contact, and says the difference is the ground: the Christian account rests it on Christ bearing the penalty, so God is just and the justifier (Romans 3:26).',b:'checked'},
{x:'On the Holy Spirit, the Word of Faith page lists the claim that tongues are a required sign of salvation or of the Spirit, and tells the reader to separate Pentecostal claims about initial evidence of Spirit baptism from claims about salvation. Mainstream Word of Faith appears to teach Spirit baptism as a later, separate experience. Some Pentecostal groups, such as Oneness, make it a requirement. This is not settled in the app.',b:'verify',n:'The app has no Word of Faith page on how a person is saved. The mainstream position rests on a critic’s blog, a Hagin testimony and part of a Bible college statement of faith, not primary teaching. Verify before attributing it.'},
{x:'Scripture: the sinner is justified by faith apart from works (Romans 3:28; 4:4–5; 5:1). Salvation is a gift of grace through faith (Ephesians 2:8–9). Anyone who does not have the Spirit of Christ does not belong to him (Romans 8:9), so the Spirit marks every believer from the first, not a second level.',b:'checked'},
{x:'The 1689 Confession says God justifies by pardoning sins and accepting sinners as righteous for Christ’s sake alone, not by infusing righteousness (11.1). Faith is the alone instrument of justification, yet is never alone in the person justified (11.2).',b:'checked'}],
refs:[
{r:'Romans 3:28',what:'A man is justified by faith apart from works of the Law.',side:'bible'},
{r:'Romans 4:4–5',what:'To the one who does not work but believes, his faith is credited as righteousness.',side:'bible'},
{r:'Romans 5:1',what:'Justified by faith, we have peace with God.',side:'bible'},
{r:'Romans 8:9',what:'Anyone who does not have the Spirit of Christ does not belong to him.',side:'bible'},
{r:'Ephesians 2:8–9',what:'Saved by grace through faith, not from works.',side:'bible'},
{r:'Titus 3:5',what:'He saved us not on the basis of deeds but according to his mercy.',side:'bible'},
{r:'Hebrews 10:10–14',what:'One offering for sins for all time.',side:'bible'},
{r:'Trent, session 6, canon 9',what:'Rome: anathema on justification by faith alone.',side:'other',kind:'Trent',answers:'Romans 3:28'},
{r:'CCC 2006–2010',what:'Rome: merit toward eternal life after first grace.',side:'other',kind:'Catechism',answers:'Ephesians 2:8–9'},
{r:'2 Nephi 25:23',what:'LDS: grace after all we can do.',side:'other',kind:'LDS',answers:'Ephesians 2:8–9'},
{r:'Trent, session 22, canon 3',what:'Rome: the Mass is a propitiatory sacrifice.',side:'other',kind:'Trent',answers:'Hebrews 10:10–14'}],
qs:[
{q:'What does Trent canon 9 condemn?',a:'The claim that the sinner is justified by faith alone.',b:'checked'},
{q:'How do Latter-day Saints state the relation of grace and works?',a:'Saved by grace after all we can do, with faith, repentance, baptism, the gift of the Spirit and temple covenants for exaltation.',b:'checked'},
{q:'Which verse says that anyone without the Spirit of Christ does not belong to him?',a:'Romans 8:9.',b:'checked'},
{q:'What is the status of the claim about Spirit baptism and salvation in Word of Faith?',a:'Verify. The app has no page on it, and mainstream Word of Faith appears to treat it as separate, with some Pentecostal groups differing.',b:'verify'}],
explain:'In your own words: what does Romans 8:9 say about whether a believer must wait for a second experience of the Spirit?'},

{id:'c-method',n:4,title:'Testing any claim fairly',group:trackCGroup,
pages:[['logicArgumentation','Logic and transcendental apologetics'],['hinduResponse','Hinduism: Reformed response']],
passage:{ref:'1 Peter 3:15',line:'Be ready to give a defense, with gentleness and respect.'},
facts:[
{x:'An internal critique grants the other position’s commitments for the sake of argument and asks whether they hold together and account for their own standards. It is not misquoting an opponent or manufacturing a contradiction.',b:'secondary'},
{x:'State the opposing view as its informed adherents would recognize it, then find a precise gap. This is how Track B and the earlier lessons in this track treat each tradition.',b:'secondary'},
{x:'Van Til stressed that no one is religiously neutral, and that unbelievers still know much in God’s world through common grace. The conflict is over the source and ground of that knowledge, not over whether non-Christians can reason.',b:'secondary'},
{x:'The transcendental argument asks what must be true for reasoning, knowledge and moral judgment to be possible. The page presents it as valid in form but says that its premise that only the triune God makes these possible must be argued, not merely asserted.',b:'secondary'},
{x:'Worked example: Advaita says unity is ultimate and plurality an appearance. But the argument for Advaita is given by a teacher to a student, and it uses distinctions between speaker and hearer, truth and error. The page says that is a transcendental problem for the position. Rāmānuja makes a related point inside Hinduism.',b:'secondary',n:'The Hindu claim is Checked on the page. The response is the app’s argument and is Secondary here.'},
{x:'Worked example: “All paths lead to the same goal” is a modern reformulation of Advaita and not what the classical teachers held. It also makes an exclusive claim about ultimate reality, so it does not stand above the disagreement.',b:'secondary'},
{x:'Scripture grounds both parts of the method. Test everything (Acts 17:11) and reason with people on their ground (Acts 17:22–31), while every thought is taken captive to Christ (2 Corinthians 10:5).',b:'checked'}],
refs:[
{r:'1 Peter 3:15',what:'Be ready to give a defense, with gentleness and respect.',side:'bible'},
{r:'Acts 17:22–31',what:'Paul reasons with the Athenians from their own altar and poets.',side:'bible'},
{r:'2 Corinthians 10:5',what:'Every thought is taken captive to the obedience of Christ.',side:'bible'},
{r:'Romans 1:18–23',what:'All people know God and suppress the truth.',side:'bible'},
{r:'Colossians 2:3',what:'In Christ are hidden all the treasures of wisdom and knowledge.',side:'bible'},
{r:'Proverbs 1:7',what:'The fear of the LORD is the beginning of knowledge.',side:'bible'},
{r:'John 14:6',what:'Christ is the way, the truth and the life.',side:'bible'}],
qs:[
{q:'What is an internal critique?',a:'Granting the other position’s commitments and asking whether they hold together and account for their own standards.',b:'secondary'},
{q:'What does the transcendental argument page say about its key premise?',a:'It must be argued against serious alternatives, not merely asserted.',b:'secondary'},
{q:'Which verse tells you to test even apostolic preaching by the Scriptures?',a:'Acts 17:11.',b:'checked'}],
explain:'In your own words: how would you state a view you disagree with so its own adherents would agree with your summary?'}
];

export const gateC:Gate[]=[
{lesson:'c-christ',q:'A Latter-day Saint says the Father, Son and Spirit are three beings united in purpose. What does the app record about this teaching?',opts:['They are one being in three persons','They are three distinct beings united in purpose, not one being in three persons','They are three names for one person at different times','They are three gods of equal rank who rule separately'],a:1,why:'The LDS page records three distinct beings united in purpose, which the lesson sets against one God (Deuteronomy 6:4) and the Son as God (John 20:28).'},
{lesson:'c-christ',q:'How does the course treat Roman Catholic teaching on the person of Christ?',opts:['As denying his deity','As agreeing with Nicaea and Chalcedon, with the real disagreement over authority and justification, marked Verify','As the same as Jehovah’s Witnesses','As having no teaching on Christ'],a:1,why:'The app’s Catholic pages record no Christology dispute. The course says so plainly and flags it Verify because it is a gap in the app.'},
{lesson:'c-christ',q:'Which Scripture does the lesson use to answer the claim that the Word is “a god,” the first created being?',opts:['Colossians 1:15–17 and John 1:1–3','Matthew 28:19 alone','Revelation 7:4','Luke 2:7'],a:0,why:'Colossians 1:15–17 says all things were created through him, and John 1:1–3 says the Word was God and made all things.'},
{lesson:'c-authority',q:'How does Rome describe the relation of Scripture and Sacred Tradition?',opts:['Scripture alone is final','Tradition outranks Scripture','Both flow from the same source and are received with equal devotion','Tradition is a private opinion'],a:2,why:'The Catechism, CCC 80–82, says they flow from the same source and are to be received with equal devotion. The lesson sets this against Isaiah 8:20 and Acts 17:11.'},
{lesson:'c-authority',q:'Which passage shows hearers testing even apostolic preaching by the Scriptures?',opts:['Acts 17:11','Acts 2:38','Romans 13:1','Hebrews 13:17'],a:0,why:'The Bereans examined the Scriptures daily to see whether what Paul said was so (Acts 17:11).'},
{lesson:'c-authority',q:'How should you describe the Word of Faith claims about modern apostles and prophecy?',opts:['As what every Word of Faith teacher says','As propositions the page asks you to examine, not what every adherent teaches','As settled and fully verified teaching','As taken from the 1689 Confession'],a:1,why:'The page says its claims are representative propositions, not quotations or assertions that every adherent teaches them.'},
{lesson:'c-saved',q:'What does Trent session 6, canon 9 condemn?',opts:['The Mass','Indulgences','The claim that the sinner is justified by faith alone','Infant baptism'],a:2,why:'Canon 9 condemns saying the sinner is justified by faith alone. The lesson answers it with Romans 3:28 and Ephesians 2:8–9.'},
{lesson:'c-saved',q:'How do Latter-day Saints state grace and works, according to the app?',opts:['Grace alone, apart from any condition','Works alone','Grace after all we can do, with baptism, the gift of the Spirit and temple covenants required for exaltation','Karma over many lives'],a:2,why:'The LDS page records salvation by grace after all we can do (2 Nephi 25:23), with those requirements for exaltation.'},
{lesson:'c-saved',q:'How does the course treat the claim that Spirit baptism is required for salvation in Word of Faith?',opts:['As proven by the app','As Verify: mainstream Word of Faith appears to treat it as separate and later, some Pentecostal groups differ, and the app has no page on it','As a Roman Catholic doctrine','As false in every group'],a:1,why:'The sourcing check rested on a critic’s blog, a Hagin testimony and part of a statement of faith, so it is Verify. The Scripture to set beside it is Romans 8:9.'},
{lesson:'c-method',q:'What makes an internal critique fair?',opts:['Quoting the opponent loosely','Granting the opponent’s commitments and asking whether they hold together, after stating the view as its adherents would','Assuming the worst reading','Refusing to hear the other side'],a:1,why:'The logic page says an internal critique differs from misquoting an opponent or manufacturing contradictions, and requires representing the strongest alternative accurately.'}
];
