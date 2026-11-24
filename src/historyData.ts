export type SrcB='checked'|'secondary'|'verify';
export type Src={t:string,u:string,b:SrcB,n?:string};
export type Point={x:string,b:SrcB,n?:string};
export type Council={id:string,name:string,year:string,place:string,answered:string,scripture:string[],points:Point[],src:Src[]};
export type Event={id:string,when:string,title:string,body:string,fathers?:string,b:SrcB,src:Src[]};
export type Card={id:string,title:string,points:Point[],src:Src[]};

const SCH_NIC:Src={t:'Schaff, History of the Christian Church, vol. 3, §120 (Nicaea)',u:'https://ccel.org/ccel/schaff/hcc3.iii.xii.iv.html',b:'checked',n:'Standard English history, nineteenth-century and Protestant. Use the facts, not the editorial judgments.'};

export const councils:Council[]=[
{id:'nicaea',name:'Nicaea I',year:'325',place:'Nicaea in Bithynia (now İznik)',
answered:'Arius, who taught that the Word was not coeternal with the Father.',
scripture:['John 1:1–18','Colossians 1:15–20','Philippians 2:5–11'],
points:[
{x:'Attendance is uncertain. Tradition says 318 bishops. Eusebius gave about 250, and the Latin subscription lists name only 224 bishops and country bishops. Schaff suggests the counts may reflect growing attendance.',b:'checked'},
{x:'A modern historian, Ramsay MacMullen, thinks about 200 bishops attended and that the figure was inflated to 318 within a generation, a number that matches Abraham’s 318 servants in Genesis 14:14. This is one scholar’s estimate.',b:'secondary'},
{x:'The creed confessed the Son as begotten, not made, and of one substance (homoousios) with the Father. The word is not in Scripture. Schaff notes it existed before the council and that Constantine backed it when a milder formula failed. The creed is a summary of what Scripture says in John 1:1 and Colossians 1:15–20, and it stands under that Scripture.',b:'checked'},
{x:'The Holy Spirit received only a brief clause. Fuller treatment was left to Constantinople in 381.',b:'checked'},
{x:'The council issued twenty canons on church discipline.',b:'checked'},
{x:'Arius and two bishops who refused to sign, Theonas and Secundus, were banished to Illyria and his books were burned. Accounts of his later recall conflict: Jerome says he was pardoned before the council closed, and Socrates says he was recalled but barred from Alexandria.',b:'checked'},
{x:'The council settled that Easter be kept by all on one and the same day. Eusebius reports this as the united judgment of those present. That the council adopted the Roman and Alexandrian reckoning is stated by modern summaries, not by the Eusebius text I read.',b:'checked',n:'The decision itself is checked; the reckoning is secondary.'}],
src:[SCH_NIC,
{t:'Eusebius, Life of Constantine (on Easter)',u:'https://bkv.unifr.ch/works/cpg-3496-1/versions/the-life-of-the-blessed-emperor-constantine/divisions/154',b:'checked'},
{t:'Constantine’s letter on the keeping of Easter (Fordham Sourcebook, from NPNF 2/14)',u:'https://sourcebooks.web.fordham.edu/source/const1-easter.asp',b:'checked'},
{t:'Ramsay MacMullen on the attendance figure (Yale University Press)',u:'https://yalebooks.yale.edu/?p=9955',b:'secondary'},
{t:'Britannica: First Council of Nicaea',u:'https://www.britannica.com/event/First-Council-of-Nicaea-325',b:'secondary',n:'Reference work.'},
{t:'Encyclopedia.com: Nicaea I, Council of (on Arius)',u:'https://encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/nicaea-i-council',b:'secondary',n:'Reprint of a Catholic encyclopedia.'}]},

{id:'constantinople',name:'Constantinople I',year:'381',place:'Constantinople',
answered:'Arian groups, the Macedonians (who denied the Spirit’s deity), and Apollinarianism.',
scripture:['Matthew 28:19','John 15:26','Acts 5:3–4','1 Corinthians 2:10–11'],
points:[
{x:'Emperor Theodosius I called it. About 150 bishops came, all from the East.',b:'secondary'},
{x:'It reaffirmed Nicaea, condemned the Arian groups and the Macedonians, and condemned Apollinarianism, which was answered by affirming the full humanity of Christ.',b:'secondary',n:'Britannica did not list the condemnations; they rest on Encyclopedia.com and the Orthodox Church in America.'},
{x:'The creed called “Nicene” in churches today is the 381 text. Whether it was an expansion of the 325 creed is disputed. Britannica says it was probably an independent document built on an existing baptismal creed, and that until the early 1900s it was assumed to be an enlargement. A Cambridge article says an expansion did take place at Constantinople, though the form recited at Chalcedon may contain later additions. J. N. D. Kelly argued that missing documents do not require rejecting the expansion view.',b:'verify',n:'Scholars are divided. The app does not pick a side.'},
{x:'One canon gave the bishop of Constantinople precedence of honour after Rome. Pope Damasus I apparently accepted the creed but not that canon.',b:'secondary'}],
src:[
{t:'Britannica: First Council of Constantinople',u:'https://www.britannica.com/event/Council-of-Constantinople-AD-381',b:'secondary'},
{t:'Britannica: Nicene Creed (origin dispute)',u:'https://www.britannica.com/topic/Nicene-Creed',b:'secondary'},
{t:'Mark Edwards on the Creed (Cambridge Companion to the Council of Nicaea)',u:'https://www.cambridge.org/core/product/390BBFCFD3285033A40C55B807AF7B6C/core-reader',b:'secondary'},
{t:'Orthodox Church in America: the Second Ecumenical Council',u:'https://oca.org/orthodoxy/the-orthodox-faith/church-history/fourth-century/the-second-ecumenical-council',b:'secondary',n:'Confessional host. Used for the condemnations only.'}]},

{id:'ephesus',name:'Ephesus',year:'431',place:'Ephesus',
answered:'Nestorius, who refused to call Mary Theotokos (“God-bearer”).',
scripture:['Luke 1:35','John 1:14','Galatians 4:4','Romans 9:5'],
points:[
{x:'Cyril of Alexandria opened the council on 22 June, without waiting for John of Antioch and the Eastern bishops. He began with 160 bishops, rising to 198 before Nestorius was deposed. Nestorius came with 16.',b:'checked'},
{x:'The first session approved Cyril’s second letter to Nestorius as consistent with the Nicene faith, condemned Nestorius’s reply, and deposed him. Cyril’s letter says the holy virgin is to be called mother of God.',b:'checked'},
{x:'The acts record no separate stand-alone definition of Theotokos. The title was upheld by approving Cyril’s letter. Historians such as Richard Price describe this as the council’s approval of the title.',b:'secondary',n:'Whether to call this a formal definition is a historians’ judgment.'},
{x:'John of Antioch arrived about 26–27 June and held a rival council of about 42 bishops that deposed Cyril. The division lasted until a compromise around 433.',b:'checked'},
{x:'The council confirmed the Nicene creed and forbade any other faith (Canon VII). Canon IV deposes clergy who hold the teaching of Nestorius or Celestius, the Pelagian associate. The Percival text numbers eight canons, and some manuscripts have only six. Schaff’s history says six.',b:'checked'}],
src:[
{t:'Schaff, History of the Christian Church, vol. 3, §138 (Ephesus)',u:'https://ccel.org/ccel/schaff/hcc3.iii.xii.xxii.html',b:'checked'},
{t:'Council of Ephesus: acts and canons (NPNF 2/14, Fordham)',u:'https://sourcebooks.web.fordham.edu/basis/ephesus.html',b:'checked'},
{t:'Encyclopedia.com: Ephesus, Council of (approval of Cyril’s letter)',u:'https://encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/ephesus-council',b:'secondary',n:'Reprint of the New Catholic Encyclopedia.'},
{t:'Council of Ephesus: Cyril’s letters (EWTN library, same translation)',u:'https://www.ewtn.com/catholicism/library/council-of-ephesus-1460',b:'checked',n:'Catholic host; used for the text.'},
{t:'Richard Price, Marian Piety and the Nestorian Controversy (Studies in Church History)',u:'https://resolve.cambridge.org/core/journals/studies-in-church-history/article/marian-piety-and-the-nestorian-controversy/ED9AF0BE10464DFA462E17A9F3AC7329',b:'secondary',n:'Only the abstract page was seen.'}]},

{id:'chalcedon',name:'Chalcedon',year:'451',place:'Chalcedon',
answered:'Eutyches, who blurred the two natures of Christ, and the earlier errors of Arius, Apollinarius and Nestorius.',
scripture:['John 1:14','Hebrews 2:14–17','Philippians 2:6–8','Colossians 2:9'],
points:[
{x:'The Definition gave first place to the 325 creed, ratified the 381 creed, upheld Ephesus and Cyril’s letters against Nestorius, and added Leo’s letter against Eutyches.',b:'checked'},
{x:'It confesses one Christ, acknowledged in two natures with no confusion, no change, no division and no separation. The property of each nature is kept, and both come together in one person and one subsistence.',b:'checked'},
{x:'It calls Mary “God-bearer” as regards Christ’s humanity, and forbids anyone to produce or teach another creed, on pain of deposition for clergy and anathema for monks and laity.',b:'checked'},
{x:'The surviving Greek text reads “from two natures,” but the old Latin reads “in two natures.” Schaff and Hefele judge “in” to be the original and think “from” was introduced in the Monophysite interest. Baur and Dorner argued the reverse.',b:'secondary',n:'These are nineteenth-century editors. A modern critical edition (Price and Gaddis) has not been opened.'},
{x:'A popular summary: against Arius the full deity of Christ, against Apollinarius his full humanity, against Nestorius one person, and against Eutyches two natures not blurred together.',b:'secondary'}],
src:[
{t:'Dogmatic Definition of Chalcedon (EWTN, full text)',u:'https://www.ewtn.com/catholicism/teachings/dogmatic-definition-of-the-council-of-chalcedon-451-ad-entire-93',b:'checked',n:'Catholic host; translation of the full text.'},
{t:'Definition of Faith of Chalcedon with Hefele’s note (NPNF 2/14)',u:'https://tertullian.org/fathers2/NPNF2-14/Npnf2-14-100.htm',b:'secondary'},
{t:'Christian History (Christianity Today): The Council of Chalcedon',u:'https://www.christianitytoday.com/1990/10/461-council-of-chalcedon/',b:'secondary',n:'Popular, edited by historians.'}]}
];

export const events:Event[]=[
{id:'sabellius',when:'c. 268',title:'Modalism condemned at Antioch',body:'The Council of Antioch deposed Paul of Samosata and condemned Sabellianism, the teaching that Father, Son and Spirit are temporary manifestations of one being.',fathers:'Answered later by the Nicene Fathers, who confessed three distinct persons in one God.',b:'secondary',src:[{t:'Christian History Institute timeline: Heresy in the early church',u:'https://christianhistoryinstitute.org/magazine/article/heresy-in-the-early-church-timeline',b:'secondary'}]},
{id:'arius',when:'c. 318–325',title:'Arius and the Nicene reply',body:'Arius taught that the Son had a beginning. Nicaea condemned him and wrote “of one substance” into the creed. Britannica notes the formula had no safeguard against Monarchianism, which prolonged the dispute.',fathers:'Athanasius attended Nicaea as a young deacon and became its champion.',b:'secondary',src:[{t:'Britannica: Theological controversies of the 4th and 5th centuries',u:'https://www.britannica.com/topic/Christianity/Theological-controversies-of-the-4th-and-5th-centuries',b:'secondary'},{t:'Schaff on Nicaea',u:'https://ccel.org/ccel/schaff/hcc3.iii.xii.iv.html',b:'checked'},{t:'Catholic Encyclopedia: Nicaea (Athanasius as deacon)',u:'https://www.newadvent.org/advent/cathen/11044a.htm',b:'secondary',n:'Dated and confessional.'}]},
{id:'arian-ascendancy',when:'328–361',title:'Arian ascendancy',body:'A period of factions and confusion in which Nicene bishops such as Athanasius were deposed and banished.',b:'secondary',src:[{t:'Christian History Institute timeline',u:'https://christianhistoryinstitute.org/magazine/article/heresy-in-the-early-church-timeline',b:'secondary'}]},
{id:'apollinaris',when:'360–380',title:'Apollinaris of Laodicea',body:'Represented an Alexandrian Christology. Condemned at Constantinople in 381, and Chalcedon later affirmed against him the full humanity of Christ.',fathers:'Gregory of Nazianzus, one of the Cappadocian Fathers, led part of the 381 council.',b:'secondary',src:[{t:'Britannica: Theological controversies',u:'https://www.britannica.com/topic/Christianity/Theological-controversies-of-the-4th-and-5th-centuries',b:'secondary'},{t:'Encyclopedia.com: First Council of Constantinople',u:'https://encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/constantinople-first-council',b:'secondary'}]},
{id:'pelagius',when:'411–429',title:'Pelagius, Caelestius and Augustine',body:'Pelagius stressed the goodness and freedom of the human will and Caelestius denied original sin. Augustine answered that no one reaches righteousness by his own effort and that all depend on God’s grace. African bishops condemned them in 416 and at Carthage in 418, where Schaff counts over two hundred bishops and eight or nine canons. The emperor Honorius issued edicts against the Pelagians, after which Pope Zosimus, who had earlier defended Pelagius, reversed himself and condemned both men. Ephesus Canon IV deposed clergy who held Celestius’s teaching. Julian of Eclanum carried on the dispute until Augustine’s death in 430.',fathers:'Augustine of Hippo.',b:'checked',src:[{t:'Schaff, History of the Christian Church, vol. 3 (Pelagian controversy)',u:'https://ccel.org/ccel/schaff/hcc3.iii.xii.xxxiii.html',b:'checked'},{t:'Letter 201 (419), emperors Honorius and Theodosius to Aurelius',u:'https://ccel.org/ccel/schaff/npnf101.vii.1.CCI.html',b:'checked',n:'Refers back to the earlier decree expelling Pelagius and Celestius from Rome.'},{t:'Britannica: Pelagianism',u:'https://www.britannica.com/topic/Pelagianism',b:'secondary'},{t:'Council of Ephesus Canon IV (NPNF 2/14)',u:'https://sourcebooks.web.fordham.edu/basis/ephesus.html',b:'checked'}]},
{id:'honorius-note',when:'Note',title:'A correction and a date',body:'Britannica’s article names “Honorius I” as a bishop of Rome who condemned Pelagianism in 418. The source texts show the actor was the emperor Honorius. The pope in 418 was Zosimus. A scholarly summary dates the emperor’s law to 30 April 418, addressed to Palladius, prefect of Italy, expelling Pelagius and Caelestius from Rome, and dates his letter to Aurelius of Carthage to 9 June 419. The date rests on the Collectio Quesnelliana as summarized by M. Victoria Escribano; I have not seen the primary text.',b:'secondary',src:[{t:'Schaff on Zosimus and Honorius',u:'https://ccel.org/ccel/schaff/hcc3.iii.xii.xxxiii.html',b:'checked'},{t:'Escribano, Enforcement of anti-Pelagian laws (Oxford patristics conference blog summary)',u:'https://oxfordpatristics.blogspot.com/2019/05/m-victoria-escribano-enforcement-of.html',b:'secondary',n:'Summary of a paper, not the paper.'}]},
{id:'nestorius',when:'428–431',title:'Nestorius and Cyril',body:'Nestorius objected to calling Mary Theotokos because he taught she bore only the human Jesus. Cyril of Alexandria defended the term. Ephesus deposed Nestorius, and his writings were burned.',fathers:'Cyril of Alexandria.',b:'checked',src:[{t:'Schaff on Ephesus',u:'https://ccel.org/ccel/schaff/hcc3.iii.xii.xxii.html',b:'checked'},{t:'Britannica: Theological controversies',u:'https://www.britannica.com/topic/Christianity/Theological-controversies-of-the-4th-and-5th-centuries',b:'secondary'}]},
{id:'eutyches',when:'440s–451',title:'Eutyches and Chalcedon',body:'Eutyches taught one nature in Christ after the incarnation, so stressing his divinity that his humanity was lost. He was condemned at Constantinople. A council at Ephesus in 449 deposed Eastern leaders who agreed with Leo, and Leo called it a robber synod. Chalcedon in 451 settled the matter with Leo’s Tome and the Definition.',fathers:'Pope Leo I.',b:'secondary',src:[{t:'Christian History (Christianity Today): The Council of Chalcedon',u:'https://www.christianitytoday.com/1990/10/461-council-of-chalcedon/',b:'secondary'},{t:'Britannica: Theological controversies',u:'https://www.britannica.com/topic/Christianity/Theological-controversies-of-the-4th-and-5th-centuries',b:'secondary'}]},
{id:'orange',when:'529',title:'Pelagianism fades',body:'Christian History Institute reports that Pelagianism died out after the condemnation at the Council of Orange. I have not opened the canons of Orange.',b:'verify',src:[{t:'Christian History Institute timeline',u:'https://christianhistoryinstitute.org/magazine/article/heresy-in-the-early-church-timeline',b:'secondary'}]}
];

export const baptist:Card[]=[
{id:'origins',title:'Where the Particular Baptists came from',points:[
{x:'Gordon Belyea traces them to English Puritan semi-Separatism, not to Anabaptism. In 1616 Henry Jacob gathered a church in Southwark, called the JLJ church for its first pastors Jacob, Lathrop and Jessey. It was independent, semi-Separatist and not yet Baptist.',b:'checked'},
{x:'In 1633 some members left after receiving a further baptism. It is unclear whether they rejected infant baptism itself or only its administration by the Church of England.',b:'checked'},
{x:'The date of Spilsbury’s church is disputed. Ivey, citing Crosby and the Jessey church records, gives 1633 as when his group left the JLJ church. Ivey also says the group cannot be shown to be Baptist before 1638, when it merged with Kiffin’s group. Belyea calls Spilsbury’s church the first that can clearly be called Calvinist Baptist, with members leaving the JLJ church by 1638. A 2023 article notes controversy over the timing and says Spilsbury pastored a believer’s-baptism group by 1638, possibly as early as 1633. The app gives 1633 as the secession and 1638 as the earliest clearly Baptist date.',b:'verify',n:'Two dates, two events; historians differ on which counts as the founding.'},
{x:'About 1640 the JLJ church divided again. Richard Blunt, convinced of immersion, consulted Dutch believers and returned to baptize others. Spilsbury’s church later adopted immersion on biblical grounds, not by a line of succession.',b:'checked'}],
src:[
{t:'Gordon Belyea, Origins of the Particular Baptists (Themelios 32.3)',u:'https://www.thegospelcoalition.org/themelios/article/origins-of-the-particular-baptists/',b:'checked',n:'Evangelical journal. Read through a page-summary tool; confirm quotations at the source.'},
{t:'Barry Howson, First and Second London Baptist Confessions (McGill thesis, 1996)',u:'https://escholarship.mcgill.ca/downloads/w0892c94v',b:'secondary',n:'Unpublished thesis. Used as a pointer to Lumpkin and McGlothlin.'}]},

{id:'1644',title:'The First London Confession (1644)',points:[
{x:'Seven Particular Baptist churches in London published it. It was meant to answer rumors tying them to the rebellious Anabaptists of Münster and to show they were orthodox, law-abiding Calvinists.',b:'checked'},
{x:'It was not independent. W. J. McGlothlin showed that 29 of its 53 articles come from the 1596 True Confession (a London-Amsterdam Congregational confession) and that three more (36–38) come from the 1603 Points of Difference. Renihan says about half came from the True Confession. The thesis adds that Stanley Nelson found some articles close to William Ames’s Marrow of Theology.',b:'checked',n:'McGlothlin and Renihan agree. The Ames link rests on the thesis.'},
{x:'The printed subscribers number sixteen names in seven groups, with John Mabbatt printed twice, so there are fifteen distinct men. Daniel Featley, a hostile contemporary, also said sixteen. A Baptist history says each church sent two delegates, except Spilsbury’s, which sent three, which makes fifteen.',b:'checked',n:'The transcription was read through a summary tool; a facsimile has not been seen.'},
{x:'It was revised in 1646 after Featley’s criticisms, and again in 1651. It first made immersion essential to baptism.',b:'checked'}],
src:[
{t:'W. J. McGlothlin, Sources of the First Calvinistic Baptist Confession',u:'https://zenodo.org/record/1549841/files/article.pdf',b:'checked',n:'Classic Baptist historian. Lumpkin’s Baptist Confessions of Faith is the standard collection.'},
{t:'James Renihan, Confessing the Faith in 1644 and 1689',u:'https://mail.reformedreader.org/rbs/renihan01.htm',b:'checked',n:'Reformed Baptist scholar; partisan but recognized.'},
{t:'The 1644 text with subscribers (Pugh appendix)',u:'https://www.reformedreader.org/history/pugh/appendice01.htm',b:'checked'},
{t:'Ivey, Origin of the English Baptists, ch. 2 (1633 and 1638 dates)',u:'https://www.reformedreader.org/history/ivey/ch02.htm',b:'secondary'},
{t:'Belyea on the 1644 confession and immersion',u:'https://www.thegospelcoalition.org/themelios/article/origins-of-the-particular-baptists/',b:'checked'},
{t:'Ivey, Origin of the English Baptists (London Confessions chapter)',u:'https://www.reformedreader.org/history/ivey/ch03.htm',b:'secondary'},
{t:'The 1644 Confession (Fordham Modern History Sourcebook)',u:'https://sourcebooks.web.fordham.edu/mod/1644baptists.asp',b:'checked'}]},

{id:'1689',title:'The Second London Confession (1677, adopted 1689)',points:[
{x:'It was published in 1677 and took the date 1689 because over a hundred churches endorsed it at a general assembly in London that year. The assembly’s own concluding statement says upwards of one hundred churches met from the third of the seventh month to the eleventh, 1689, which is 3–11 September. The circular letter calling it is dated 22 July 1689. Renihan says 108 churches were represented or sent word.',b:'checked',n:'The assembly’s statement is the primary text; the letter date is from the CCEL copy of Ivimey.'},
{x:'The reasons: copies of the 1644 had become scarce, it did not address matters such as the Sabbath, Thomas Collier’s teaching troubled the churches, and they wished to show Puritan agreement. Benjamin Keach said in 1692 that he knew nothing of the 1644 until told of it that year.',b:'checked'},
{x:'Its editors modelled it on Westminster and followed Savoy wherever Savoy differed from Westminster. They kept Westminster’s order and often its wording. Savoy was the 1658 Congregational revision by John Owen and others.',b:'checked'},
{x:'Renihan says the 1689 and the 1644 do not differ in substance, only in expression and source documents. That is his view.',b:'secondary'},
{x:'William Collins and Nehemiah Coxe, elders of the Petty France church, probably edited it. Renihan says this cannot be stated with certainty.',b:'secondary'},
{x:'One CCEL page says 146 of its 160 paragraphs come from Savoy, eight from 1644 and six from Collins and Coxe, and that five of the seven 1644 churches signed in 1689. That section is anonymous, gives no method and cites no source. Renihan’s list of first subscribers names 36 congregations but does not mark which belonged to the 1644 seven, so five or four cannot be checked from it. The total of 160 paragraphs is confirmed in this app’s text.',b:'verify',n:'Treat these counts as an unconfirmed claim.'}],
src:[
{t:'Renihan, The 1689 Confession in its Historical and Theological Context',u:'https://ccel.org/ccel/anonymous/bcf.iv.ii.html',b:'checked'},
{t:'The 1689 assembly’s concluding statement (3–11 September 1689)',u:'https://www.blueletterbible.org/study/ccc/baptist/ending_Statement.cfm',b:'checked'},
{t:'Letter calling the assembly, 22 July 1689 (CCEL, from Ivimey)',u:'https://www.ccel.org/creeds/bcf/letter.htm',b:'checked'},
{t:'Renihan, Origins of the 1689 Confession (Collins and Coxe)',u:'https://ccel.org/ccel/anonymous/bcf.iv.iii.html',b:'secondary'},
{t:'Documentary sources page (the 146/8/6 count)',u:'https://ccel.org/ccel/anonymous/bcf.iii.iv.html',b:'verify',n:'Unattributed. Not verified.'},
{t:'Reformed Baptist Seminary: Haykin lecture on the purpose of the 1689 (video, no transcript)',u:'https://rbs.org/featured/2015/7/5/random-sermon',b:'verify',n:'Content of the lecture was not seen.'},
{t:'Southern Seminary: A Confessing People (Lumpkin as the key source)',u:'https://equip.sbts.edu/publications/magazine/a-confessing-people-a-brief-history-of-baptist-confessions-of-faith/',b:'secondary'}]},

{id:'compare',title:'Where the 1689 differs from Westminster and Savoy',points:[
{x:'The church: the 1689 and Savoy stress the local church and deny synods authority over it. Westminster weights the universal church and synods. The 1689 has two offices, elders and deacons, where Savoy has four.',b:'secondary',n:'From the thesis; check against the 1689 text in this app.'},
{x:'Baptism and the Supper: the 1689 uses “ordinance” where the others use “sacrament,” limits baptism to professing believers by immersion, and speaks of the Supper as a memorial.',b:'secondary',n:'From the thesis. The 1689 wording itself is in this app.'},
{x:'Religious liberty: the 1689 drops Westminster’s and Savoy’s statements about the magistrate protecting the church and suppressing heresy, and keeps the magistrate’s civil authority.',b:'secondary'},
{x:'Covenant: the 1689 chapter 7 has three paragraphs. It has no separate paragraph on the covenant of works as Westminster has, and no paragraph saying there are not two covenants of grace. But the 1689 names the covenant of works in 19.6 and 20.1, and 7.3 founds the covenant of grace on the eternal covenant transaction between the Father and the Son.',b:'checked',n:'Checked against the 1689 text in this app and Westminster 7.2.'},
{x:'Westminster dates: the Assembly’s minutes record the Confession finished on 26 November 1646, and it went to Parliament that December. The Church of Scotland’s General Assembly approved it on 27 August 1647, and the second English printing with proof texts was ordered in April 1647. The English Parliament approved it in 1648 except chapters 30 and 31 and parts of chapters 20 and 24. So 1646 is the date of completion and 1647 the date of Scottish approval and printing.',b:'checked',n:'Assembly minutes via Cambridge Digital Library; Scottish act via Christian History Institute; 1648 via Britannica and Schaff-Herzog.'}],
src:[
{t:'The 1689 text with proof texts (this app)',u:'#confession1689',b:'checked'},
{t:'Assembly minutes: Confession finished 26 Nov 1646 (Cambridge Digital Library)',u:'https://cudl.lib.cam.ac.uk/view/MS-WESTMINSTER-CONFESSION-00001/3',b:'checked'},
{t:'Scottish approval, 27 Aug 1647 (Christian History Institute)',u:'https://christianhistoryinstitute.org/dailyquote/8/27',b:'secondary'},
{t:'Britannica: Westminster Confession (Parliament 1648)',u:'https://www.britannica.com/topic/Westminster-Confession',b:'secondary'},
{t:'Westminster Confession ch. 7 (CCEL)',u:'https://ccel.org/ccel/anonymous/westminster3/westminster3.i.vii.html',b:'checked'},
{t:'Howson thesis (chapters 3–4 on the comparison)',u:'https://escholarship.mcgill.ca/downloads/w0892c94v',b:'secondary'}]}
];

export const tiers:{h:string,b:string}[]=[
{h:'Primary texts and standard scholarship',b:'Schaff’s Nicene and Post-Nicene Fathers and History (dated but the standard English corpus), Lumpkin and McGlothlin on the Baptist confessions, university scholars such as Edwards, Price and MacMullen. Belyea, Renihan and Haykin are recognized in Baptist history but write from inside the tradition.'},
{h:'Reference works and church hosts',b:'Britannica, the older Catholic Encyclopedia and Encyclopedia.com can be dated or confessional. EWTN, the OCA and Fordham host translations; I used them for texts, not for contested claims.'},
{h:'Not used',b:'Wikipedia and its talk pages, Scribd, blogs and unattributed pages are not cited as evidence.'}];

export const reading:{t:string,w:string}[]=[
{t:'Nicene and Post-Nicene Fathers, Series II, vol. 14',w:'The Seven Ecumenical Councils, ed. Schaff and Wace (free at CCEL).'},
{t:'Baptist Confessions of Faith',w:'William L. Lumpkin (Judson Press, 2nd ed. 1969).'},
{t:'To the Judicious and Impartial Reader',w:'James M. Renihan (Founders Press), an exposition of the 1689.'},
{t:'For the Vindication of the Truth',w:'James M. Renihan (Founders Press), an exposition of the 1644.'},
{t:'Acts of the Council of Chalcedon',w:'Richard Price and Michael Gaddis (Liverpool University Press). Not yet opened here.'}];
