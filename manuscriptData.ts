export const banner='Scripture is inspired by God and is the ultimate, unmoving standard of truth by its own testimony (2 Timothy 3:16; 1689 1.5). The Confession is subordinate to it. Manuscripts show how texts were transmitted; they do not rank above Scripture, and they do not make a text inspired. Every other text, including the Qur’an, is measured by Scripture.';
export type Case={id:string,ref:string,title:string,variant:string,witnesses:string,evidence:string,views:string[],doctrine:string,verify:string};
export const otCases:Case[]=[
{id:'deut',ref:'Deuteronomy 32:8',title:'“Sons of Israel” or “sons of God”?',
variant:'The Masoretic Text says the Most High divided the nations by the number of the “sons of Israel.” A Dead Sea fragment (4QDeutj) and the Septuagint point to “sons of God.” Most Septuagint witnesses read “angels of God.”',
witnesses:'Masoretic Text; 4QDeutj (Dead Sea Scrolls); Septuagint; later Greek revisions (Aquila, Symmachus, Theodotion) agree with the Masoretic reading.',
evidence:'Some scholars argue the scroll and the Septuagint preserve the older wording and that the Masoretic wording is a later change. Others read “sons of God” as angels or as the heavenly host, without any claim that other gods equal the LORD.',
views:['Weigh the older witnesses: the scroll and Septuagint may preserve the original reading.','Keep the Masoretic reading as the received text and note the variant in the margin.','Either way, the passage teaches God’s sovereignty over the nations (compare Acts 17:26); it does not teach other gods of equal rank.'],
doctrine:'No central doctrine depends on the choice. Do not build a doctrine of a “divine council” on this variant alone; read it with Psalm 82 and Deuteronomy 4:19–20 carefully.',verify:'Check the scroll’s reading and the Septuagint witnesses in a critical edition (BHS/BHQ apparatus).'},
{id:'jer',ref:'Jeremiah',title:'Two forms of Jeremiah',
variant:'The Greek Jeremiah is about one-eighth shorter than the Hebrew Masoretic text, and the order of the chapters differs after Jeremiah 25:13.',
witnesses:'Masoretic Text (longer); Septuagint (shorter, different order); 4QJerb agrees with the Septuagint; other Qumran copies (such as 4QJera and 4QJerc) follow the Masoretic text.',
evidence:'The Scrolls show that both forms circulated in Hebrew in the same period. Which is older is unresolved. Some argue the longer text grew by editing; others argue the shorter text is an abridgment.',
views:['The Masoretic form is the received Hebrew text, and the Reformation churches used it.','The Septuagint form may reflect another Hebrew text of the same book.','The differences are mostly additions, omissions and order, not changes of teaching.'],
doctrine:'No doctrine is changed. The case shows that a book could exist in more than one form in the period before the text was fixed, which Reformed writers handle by distinguishing the autographs from later copies (1689 1.8).',verify:'Compare the two forms in a parallel edition and see how modern translations treat the long text.'},
{id:'sam',ref:'1 Samuel 17–18',title:'David and Goliath: a long and a short story',
variant:'The Masoretic text of 1 Samuel 17–18 is substantially longer than the Septuagint (Codex Vaticanus), which lacks several passages.',
witnesses:'Masoretic Text (long); Septuagint Vaticanus (short); 4QSama (Dead Sea Scrolls).',
evidence:'One survey of 4QSama concludes it most likely contained the long version, so the scroll does not clearly favor the shorter Greek. Scholars disagree about which form is earlier.',
views:['The long Hebrew text is the received text.','The short Greek may be an early form, or a shortening by the translators or later copyists.','The evidence is unsettled; a claim that the scroll settles it overstates the evidence.'],
doctrine:'No doctrine depends on this. It is a good example of not overstating what a manuscript proves.',verify:'Read the survey of 4QSama’s readings and the Septuagint omissions; do not rely on a single scholar’s summary.'},
{id:'ps22',ref:'Psalm 22:16',title:'“Like a lion” or “they pierced”?',
variant:'Most Masoretic manuscripts read “like a lion my hands and my feet.” The Septuagint reads “they have pierced my hands and feet.” A fragment from Nahal Hever (5/6HevPs) has a verb form meaning “dug.”',
witnesses:'Masoretic Text; Septuagint; Nahal Hever fragment (about the first century AD).',
evidence:'The Nahal Hever fragment shows that at least one Hebrew tradition had a verb here, supporting the Greek. The fragment is damaged, and the meaning of the verb is discussed.',
views:['Read the verb, as the Greek and the Hebrew fragment support, and see it taken up in the Gospels’ account of the crucifixion (Psalm 22:1, 18 and Matthew 27).','Follow the Masoretic reading “like a lion” and note the variant.','Do not rest the messianic reading of Psalm 22 on this one word: the psalm as a whole is cited in the New Testament (Matthew 27:35, 46).'],
doctrine:'The New Testament’s use of Psalm 22 does not depend on this word. State the evidence fairly and avoid claiming the Masoretic text was altered by Christians.',verify:'Check the fragment’s reading in the Discoveries in the Judaean Desert edition.'},
{id:'gen',ref:'Genesis 5 and 11',title:'The patriarchal ages differ across witnesses',
variant:'The Masoretic Text, the Septuagint and the Samaritan Pentateuch give different ages for the patriarchs in Genesis 5 and 11.',
witnesses:'Masoretic Text; Septuagint; Samaritan Pentateuch.',
evidence:'The three traditions give different totals for the time from creation to the flood and to Abraham. Scholars debate whether the differences come from scribal change or deliberate harmonizing.',
views:['Hold the Masoretic numbers as the received text.','Note that the numbers differ and avoid building a precise date for creation on them.'],
doctrine:'No doctrine is changed. Treat the figures cautiously, and distinguish what Scripture says from what any single chronology claims.',verify:'Compare the three tables in a critical edition before citing any total.'},
{id:'isa',ref:'Isaiah',title:'The Great Isaiah Scroll compared with the later text',
variant:'The Great Isaiah Scroll from Qumran (1QIsaa) is about a thousand years older than the medieval Masoretic manuscripts.',
witnesses:'1QIsaa and other Qumran Isaiah copies; Masoretic Text (Aleppo and Leningrad Codices).',
evidence:'The scroll differs from the later text in spelling and in some small wording differences, but the book’s message and structure are the same.',
views:['It supports the careful copying of the Hebrew text over a long period.','It is not proof that every letter is identical, so avoid claiming it.'],
doctrine:'No doctrine is changed. Use it as evidence of transmission, not as proof of inspiration.',verify:'Verify the scroll’s date and examples against the Shrine of the Book publications.'}];
export const otWitnesses:[string,string,string][]=[
['Masoretic Text (MT)','Standard Hebrew text of the Old Testament, copied and marked by Jewish scribes. Earliest complete copies: Aleppo Codex (about 930 AD) and Leningrad Codex (1008–1009 AD).','The base of most Reformation and modern translations.'],
['Dead Sea Scrolls','Hebrew and Aramaic copies from about the 3rd century BC to the 1st century AD, including every Old Testament book except Esther.','They show several text forms in the same period, mostly close to the MT.'],
['Septuagint (LXX)','Greek translation, begun in the 3rd century BC for the Torah. Manuscripts include Vaticanus and Sinaiticus (4th century AD).','Sometimes reflects a different Hebrew text.'],
['Samaritan Pentateuch','The Torah as kept by the Samaritans.','Thousands of small differences from the MT, most minor.'],
['Peshitta, Vulgate, Targums','Syriac, Latin and Aramaic translations from the early centuries AD.','Useful for checking how the Hebrew was read.']];
export const otMethod=['Start from Scripture as the ultimate standard (Isaiah 8:20; 1689 1.1, 1.5).','Identify the variant and each witness, with its date, language and nature (copy or translation).','Prefer the reading that best explains the others; weigh age, spread and the habits of scribes.','Remember that a translation (such as the Septuagint) is a witness to a Hebrew text, not itself the Hebrew.','Check whether any doctrine depends on the reading; usually none does.','Record the variant and your reasons; avoid saying a manuscript “proves” more than it shows.'];
export type Qsec={id:string,title:string,body:string[]};
export const quranSections:Qsec[]=[
{id:'account',title:'The Islamic account of the text',body:[
'Muslims hold that Muhammad received the Qur’an from about 610 to 632 AD, that it was memorized and written during his life, and that it was collected into a book soon after.',
'Sahih al-Bukhari reports that after the battle of Yamama, when many who knew the Qur’an by heart had died, Abu Bakr had Zayd ibn Thabit collect it (Bukhari 4986, Khan 6:61:509).',
'It reports that, to settle differences in recitation, ‘Uthman had copies made from Hafsa’s manuscripts and sent to the provinces (Bukhari 4987, Khan 6:61:510). Zayd also reported a verse of Surat al-Ahzab found with Khuzayma (Bukhari 4988).',
'These reports can be read in the Hadith Research module. They are Muslim sources, quoted to show what Muslims believe about their text.']},
{id:'mss',title:'Early manuscripts',body:[
'The earliest manuscripts are written in the Hijazi script, which lacks most vowels and does not distinguish many consonants. Readers had to know the text beforehand.',
'Radiocarbon dates published by the holding institutions: the Birmingham folios, parchment 568–645 AD (95.4%); the Tübingen fragment, 649–675 AD (more than 95%); the Sana’a palimpsest’s lower text, 578–669 AD (95%).',
'The radiocarbon date is for the parchment, and the writing could be later. Ranges are not always straightforward to interpret.',
'One scholarly assessment of the Birmingham folios is that they descend from the ‘Uthmanic text type and are not a pre-‘Uthmanic copy.']},
{id:'sanaa',title:'The Sana’a palimpsest',body:[
'It has two layers: an erased lower text and a later upper text. The upper text is close to the standard text. The lower text contains variants from the standard text, and its chapter order differs in places.',
'One example given in the literature is in Q 2:87, where the lower text has a different phrase from the standard one.',
'Scholars disagree about its meaning. Some treat the lower text as the only known material witness to a non-standard recension; others argue it was never a full codex but a collection of leaves.']},
{id:'readings',title:'The recognized readings (qirā’āt)',body:[
'The Muslim tradition recognizes several authorized ways of reciting the text. Ibn Mujāhid (d. 324/936) surveyed seven earlier readers, and his seven became widely accepted.',
'Muslim scholars stress that the differences are mostly small, such as vowels, a conjunction, or a prefix. Two readings in wide use today are Ḥafṣ (most common) and Warsh (common in North and West Africa).',
'Muslims link the variety of readings to the “seven aḥruf” reports, teaching that the Qur’an was revealed in more than one authorized mode.',
'A critical question: are the readings divinely revealed modes, or later scribal and recitation traditions? Muslim and non-Muslim scholars answer differently.']},
{id:'codices',title:'Variant codices',body:[
'Early Muslim sources report that the Companions Ibn Mas‘ūd and Ubayy ibn Ka‘b had their own codices.',
'Reports say Ibn Mas‘ūd’s did not include the first chapter and the last two (Q 1, 113, 114), and that Ubayy’s had 116 chapters, including two (al-Khal‘ and al-Ḥafd) not in the standard text.',
'The historicity of these codices is debated. Nöldeke accepted Ibn Mas‘ūd’s and doubted Ubayy’s. None survives as a manuscript.',
'The standard text was fixed under ‘Uthman, and other versions were set aside (Bukhari 4987). Muslims say this ended disputes; critics say it removed comparison evidence.']}];
export const quranQuestions=['Does the Qur’an’s claim to be preserved (Q 15:9) refer to the wording, the recitation, or the message?','How do the lower text of the Sana’a palimpsest and the reported variant codices relate to the standard text?','Were the qirā’āt revealed modes or later traditions of reading?','What does the standardization under ‘Uthman show: protection of the text, or loss of earlier forms?','How should radiocarbon dates of parchment be used alongside the dating of the writing?'];
export type Row={topic:string,bible:string,islam:string,critical:string};
export const sideBySide:Row[]=[
{topic:'What is claimed about preservation',bible:'Scripture was inspired by God and kept pure in all ages by His care (1689 1.8). The claim is about God’s providence in the whole tradition (or in a received text, depending on the Reformed position), and does not rest on a single manuscript or edition.',islam:'The Qur’an is preserved by God (Q 15:9) and was transmitted by mass memorization and writing, so the text in use is the one given to Muhammad.',critical:'Scholars study how each text was transmitted by comparing manuscripts, and do not judge the theological claims.'},
{topic:'Variants',bible:'Thousands of variants are recorded openly in critical editions; most are spelling and word order; none changes a central doctrine.',islam:'Variants in the readings are real but small, and are all authorized (the seven aḥruf and qirā’āt).',critical:'The Sana’a lower text and reports of variant codices indicate more diversity in the earliest period than the standard account suggests.'},
{topic:'Standardization',bible:'No single authority standardized the text. Copies spread widely, and the evidence of variants is preserved.',islam:'‘Uthman standardized the text and had other copies set aside to stop disputes (Bukhari 4987).',critical:'Scholars debate the date and extent of standardization.'},
{topic:'Oral and written transmission',bible:'Written copies were central from the start, and the Dead Sea Scrolls show the books in written form before the New Testament era.',islam:'Memorization was central, with writing as support.',critical:'Both oral and written factors are studied; the Hijazi script’s lack of marks made prior knowledge necessary.'},
{topic:'What manuscripts can show',bible:'Transmission and faithful preservation. They do not make Scripture inspired (it is by its own testimony).',islam:'Early dates support early existence of the text, and Muslims point to this.',critical:'Dates and variants are data; interpretation depends on assumptions.'},
{topic:'Judged by Scripture',bible:'The Bible is the standard.',islam:'The Qur’an’s content is measured by Scripture, not by manuscript history. Questions of transmission cannot decide whether a text is revelation; its teaching about God, Christ and salvation must be tested by Scripture (Galatians 1:8; 1 John 4:1–3).',critical:'Not applicable.'}];
export const links:[string,string,string][]=[
['Corpus Coranicum','https://corpuscoranicum.de/','Qur’anic manuscripts and variants (Berlin-Brandenburg Academy).'],
['Birmingham Qur’an manuscript','https://www.birmingham.ac.uk/facilities/cadbury/birmingham-quran-mingana-collection/birmingham-quran/faqs','University of Birmingham: the manuscript and its radiocarbon dating.'],
['Tübingen Ma VI 165 (digital)','http://idb.ub.uni-tuebingen.de/diglit/MaVI165','University of Tübingen Library: the dated fragment.'],
['Coranica project','http://www.coranica.de/','German-French project on early Qur’an manuscripts.'],
['Sana’a palimpsest (Institute of Ismaili Studies)','https://www.iis.ac.uk/?p=11850','Description of the palimpsest and Asma Hilali’s edition.'],
['Dead Sea Scrolls Digital Library','https://www.deadseascrolls.org.il/','Israel Museum images of the scrolls.'],
['Aleppo Codex','http://www.aleppocodex.org/','Images and text of the Aleppo Codex.'],
['Tanzil','https://tanzil.net/','Qur’an text; terms of use apply.'],
['Bible Hub','https://biblehub.com/','Verse-by-verse study with parallel versions.']];
export type Ed={id:string,name:string,url:string,access:'Free to read'|'Paid / library'|'Free images'|'Mixed',note:string};
export const editions:Record<'Old Testament'|'New Testament'|'Dead Sea Scrolls'|'Qur’an',Ed[]>={
'Old Testament':[
{id:'bhq',name:'Biblia Hebraica Quinta (BHQ)',url:'https://www.die-bibel.de/en/biblia-hebraica-quinta-bhq',access:'Paid / library',note:'German Bible Society. The new critical edition, planned in about twenty volumes with roughly half published. It replaces BHS for the books it covers.'},
{id:'bhqpub',name:'BHQ: list of published volumes',url:'https://www.die-bibel.de/en/biblia-hebraica-quinta-bhq-publications',access:'Paid / library',note:'Check here whether the volume for your book (for example Deuteronomy, Jeremiah or Psalms) has been published.'},
{id:'editions',name:'German Bible Society: scholarly editions overview',url:'https://www.die-bibel.de/en/scholarly-bible-editions',access:'Mixed',note:'Landing page for BHS, BHQ, the Septuagint and the Vulgate. BHS is still the standard for books BHQ has not reached.'},
{id:'bhqlogos',name:'BHQ with apparatus (Logos)',url:'https://www.logos.com/product/186552/biblia-hebraica-quinta-with-apparatus-bhq',access:'Paid / library',note:'Digital edition; volume count varies by product.'},
{id:'bhqacc',name:'BHQ fascicles (Accordance)',url:'https://www.accordancebible.com/product/biblia-hebraica-quinta-9-fascicle-set/',access:'Paid / library',note:'Digital edition in Accordance.'}],
'New Testament':[
{id:'na',name:'Nestle-Aland Novum Testamentum Graece',url:'https://www.die-bibel.de/en/novum-testamentum-graece-nestle-aland',access:'Paid / library',note:'German Bible Society. The standard critical edition. NA28 is current and the 29th edition is in preparation.'},
{id:'na28',name:'NA28 information page',url:'https://www.die-bibel.de/en/the-na-28',access:'Mixed',note:'Description of the 28th edition.'},
{id:'nalogos',name:'NA28 with apparatus (Logos)',url:'https://www.logos.com/product/29980/nestle-aland-greek-new-testament-28th-edition-with-critical-apparatus',access:'Paid / library',note:'Digital edition with the critical apparatus.'},
{id:'ntvmr',name:'New Testament Virtual Manuscript Room (Münster)',url:'https://ntvmr.uni-muenster.de/',access:'Free images',note:'The INTF’s open online archive of Greek New Testament manuscript images and transcriptions.'},
{id:'ecm',name:'Editio Critica Maior (digital)',url:'https://ntvmr.uni-muenster.de/ecm',access:'Free to read',note:'The digital ECM within the Virtual Manuscript Room.'},
{id:'intf',name:'INTF projects (Münster)',url:'https://uni-muenster.de/INTF/Projects.html',access:'Free to read',note:'Institute for New Testament Textual Research: the ECM, the Nestle-Aland and the Coherence-Based Genealogical Method.'}],
'Dead Sea Scrolls':[
{id:'dsslib',name:'Leon Levy Dead Sea Scrolls Digital Library',url:'https://www.deadseascrolls.org.il/',access:'Free images',note:'Israel Museum images of the scrolls, including 4QDeutj, the Great Isaiah Scroll and others.'},
{id:'djd',name:'Discoveries in the Judaean Desert (DJD) index',url:'https://orion.huji.ac.il/resources/djd.shtml',access:'Free to read',note:'The Orion Center’s index of the official 40-volume Oxford edition (editio princeps). The volumes themselves are sold by Oxford University Press or held by libraries.'},
{id:'aleppo',name:'Aleppo Codex',url:'http://www.aleppocodex.org/',access:'Free images',note:'Images and text of the Aleppo Codex.'}],
'Qur’an':[
{id:'cc',name:'Corpus Coranicum',url:'https://corpuscoranicum.de/',access:'Free to read',note:'Berlin-Brandenburg Academy: manuscripts, variants and parallel texts.'},
{id:'birm',name:'Birmingham Qur’an manuscript (FAQ and dating)',url:'https://www.birmingham.ac.uk/facilities/cadbury/birmingham-quran-mingana-collection/birmingham-quran/faqs',access:'Free to read',note:'University of Birmingham: the folios and the radiocarbon result.'},
{id:'tub',name:'Tübingen Ma VI 165 (digital)',url:'http://idb.ub.uni-tuebingen.de/diglit/MaVI165',access:'Free images',note:'University of Tübingen Library: the dated fragment.'},
{id:'coranica',name:'Coranica project',url:'http://www.coranica.de/',access:'Free to read',note:'German-French project on early Qur’an manuscripts.'},
{id:'sanaa',name:'Sana’a palimpsest (Institute of Ismaili Studies)',url:'https://www.iis.ac.uk/?p=11850',access:'Free to read',note:'Description of the palimpsest and Asma Hilali’s edition.'}]};
const E=(k:keyof typeof editions,id:string)=>editions[k].find(e=>e.id===id)!;
export const caseEditions:Record<string,Ed[]>={
deut:[E('Dead Sea Scrolls','dsslib'),E('Old Testament','bhqpub'),E('Dead Sea Scrolls','djd')],
jer:[E('Old Testament','bhqpub'),E('Dead Sea Scrolls','djd'),E('Dead Sea Scrolls','dsslib')],
sam:[E('Old Testament','bhqpub'),E('Dead Sea Scrolls','djd')],
ps22:[E('Dead Sea Scrolls','djd'),E('Old Testament','bhqpub'),E('Old Testament','editions')],
gen:[E('Old Testament','bhqpub'),E('Old Testament','editions')],
isa:[E('Dead Sea Scrolls','dsslib'),E('Dead Sea Scrolls','aleppo'),E('Old Testament','bhqpub')]};
export const quranEditions:Record<string,Ed[]>={
account:[E('Qur’an','cc')],
mss:[E('Qur’an','birm'),E('Qur’an','tub'),E('Qur’an','coranica'),E('Qur’an','cc')],
sanaa:[E('Qur’an','sanaa'),E('Qur’an','cc')],
readings:[E('Qur’an','cc')],
codices:[E('Qur’an','cc')]};

export type Ms={id:string,side:'Torah'|'Qur’an',name:string,date:string,what:string,note:string,url?:string};
export const manuscripts:Ms[]=[
{id:'ketef',side:'Torah',name:'Ketef Hinnom silver amulets',date:'about 7th–6th century BC (dating debated)',what:'Two small silver scrolls with a form of the priestly blessing (Numbers 6:24–26).',note:'Among the earliest known biblical text; some scholars propose a later date.'},
{id:'dss',side:'Torah',name:'Dead Sea Scrolls (Pentateuch copies)',date:'about 3rd century BC–1st century AD',what:'Dozens of copies of the books of Moses from the caves near Qumran.',note:'More than 600 years before Muhammad; text generally close to the later Hebrew text, with some variants.',url:'https://www.deadseascrolls.org.il/'},
{id:'nash',side:'Torah',name:'Nash Papyrus',date:'about 2nd–1st century BC',what:'A fragment with the Ten Commandments and the Shema.',note:'Shows liturgical use of Torah passages.'},
{id:'lxx',side:'Torah',name:'Septuagint (Greek)',date:'begun 3rd century BC; manuscripts 4th century AD onward',what:'Greek translation of the Torah, later all of the Old Testament.',note:'Independent witness; sometimes preserves different readings.'},
{id:'sam',side:'Torah',name:'Samaritan Pentateuch',date:'tradition ancient; medieval manuscripts',what:'The Torah as preserved by the Samaritans.',note:'Thousands of small differences from the Hebrew text, most minor.'},
{id:'aleppo',side:'Torah',name:'Aleppo Codex',date:'about 930 AD',what:'Hebrew Bible with Masoretic vowel and accent markings.',note:'Partly damaged; key reference for the Masoretic tradition.',url:'http://www.aleppocodex.org/'},
{id:'len',side:'Torah',name:'Leningrad Codex',date:'1008–1009 AD',what:'Complete Hebrew Bible; basis of modern critical editions.',note:'Public-domain text widely available online.',url:'https://www.sefaria.org/'},
{id:'birm',side:'Qur’an',name:'Birmingham Qur’an folios (Mingana 1572a)',date:'radiocarbon 568–645 AD (reported)',what:'Two parchment leaves with parts of Q 18–20 in Hijazi script.',note:'Dating applies to the parchment, not necessarily the writing; ranges are debated.'},
{id:'sanaa',side:'Qur’an',name:'Ṣan‘ā’ palimpsest (DAM 01-27.1)',date:'lower text radiocarbon about 578–669 AD (reported)',what:'A manuscript with an erased earlier text beneath the visible Qur’an.',note:'The lower text shows some differences in wording and order from the standard text; scholars discuss their significance.',url:'https://corpuscoranicum.de/'},
{id:'tub',side:'Qur’an',name:'Tübingen fragment (Ma VI 165)',date:'radiocarbon about 649–675 AD (reported; verify)',what:'An early Qur’an fragment.',note:'Among the earliest dated copies.'},
{id:'topkapi',side:'Qur’an',name:'Topkapı and Samarkand Kufic manuscripts',date:'about 8th–9th century AD (Samarkand radiocarbon 775–995 at 95.4%, another folio 595–855; Topkapı dating verify)',what:'Large early codices traditionally linked to the ‘Uthmanic text.',note:'The link to ‘Uthman is a tradition. Neither is shown to be a copy he sent; dating is a range and under discussion.'}
];

