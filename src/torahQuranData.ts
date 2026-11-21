export const standard={
title:'The unmoving standard',
lead:'Scripture is inspired by God and is the highest and ultimate standard of truth by its own testimony (2 Timothy 3:16; 1689 1.5). Manuscripts do not make it so; they show it has been faithfully preserved (1689 1.8). Everything else — creeds and confessions, manuscripts, scholarship, and every other religious text — is measured by it, never the reverse.',
tiers:[
['Scripture (the Bible)','The ultimate, unmoving standard. Self-attesting and sufficient. “To the law and to the testimony! If they do not speak according to this word, it is because they have no light” (Isaiah 8:20). See also 2 Timothy 3:16–17 and 2 Peter 1:20–21; 1689 1.1, 1.4–5, 1.10.'],
['The 1689 Confession','A subordinate standard. It summarizes what Scripture teaches and has authority only as it agrees with Scripture. Where it differs from Scripture, Scripture wins. The framers themselves invited correction from God’s Word.'],
['Manuscripts, history and scholarship','Evidence about how texts were copied and transmitted. They never decide what is true; they are not the ground of Scripture’s authority. They are used inside the Scripture-first framework, not as a neutral court above it.'],
['The Qur’an and other texts','Examined fairly in their own terms, then measured against Scripture. They are not a second standard and the comparison is not between equals.']],
cautions:['Scripture is inspired by God and is the ultimate standard by its own testimony (2 Timothy 3:16; 1689 1.5). Manuscripts do not make it so; they show it has been faithfully preserved (1689 1.8). The same limit applies to Qur’an manuscripts: early dates do not make a text revelation.','State the other view accurately and in a form its adherents would recognize before judging it (Proverbs 18:13; 1 Peter 3:15–16).','Hold your own confessional wording loosely enough to be corrected by Scripture.']};
export type Account={id:string,topic:string,torah:string,quran:string,agree:string,differ:string[],muslim:string,scripture:string};
export const accounts:Account[]=[
{id:'adam',topic:'Adam, the garden and the first sin',torah:'Genesis 1:26–3:24',quran:'Q 2:30–39; 7:11–25; 20:115–123',
agree:'Adam is made from earth and placed in a garden. He is told to avoid one tree, is led astray, and then is cast out.',
differ:['The Qur’an places the blame on Adam (and the pair together) and Satan, while Genesis records the woman deceived first and then the man’s own transgression.','In the Qur’an Adam repents and is forgiven (Q 2:37), and there is no inherited guilt; Scripture teaches that death and condemnation came through Adam’s sin (Romans 5:12–19).','Genesis 3:15 gives the first promise of a Redeemer; the Qur’an has no counterpart.','Iblis is commanded to prostrate to Adam and refuses (Q 7:11–12); Genesis does not record this.'],
muslim:'Muslims hold that prophets are protected from major sin and that Adam’s repentance wipes the slate clean, so there is no original sin.',
scripture:'Scripture teaches the guilt and corruption of Adam’s sin passed to his descendants and that a Redeemer was promised (Romans 5:12–19; 1689 6.1–3).'},
{id:'noah',topic:'Noah and the flood',torah:'Genesis 6:9–9:17',quran:'Q 11:25–49; 29:14–15; 71',
agree:'Noah warns a wicked generation, builds an ark, and survives a flood sent by God. Noah preaches for a long time (950 years, Genesis 9:29; Q 29:14).',
differ:['In the Qur’an one of Noah’s sons refuses to board and is drowned (Q 11:42–43); Genesis names three sons who enter the ark.','The ark rests on al-Jūdī (Q 11:44); Genesis says the mountains of Ararat (Genesis 8:4).','The Qur’an does not record the covenant and rainbow (Genesis 9:8–17).','Genesis stresses a covenant promise; the Qur’an stresses warning and judgment.'],
muslim:'Muslims note that the accounts share the main events and view the Qur’an as correcting details.',
scripture:'Genesis gives the original account with the covenant at the center. Where the Qur’an adds or changes details it is judged by it (Isaiah 8:20).'},
{id:'abraham',topic:'Abraham and the son offered',torah:'Genesis 12–22',quran:'Q 2:124–135; 14:35–41; 21:51–70; 37:99–113',
agree:'Abraham is called, receives a promise, and is tested by being told to offer his son. A ram is provided as a substitute.',
differ:['Genesis names Isaac as the son (Genesis 22:2); the Qur’an does not name the son (Q 37:100–113), and Muslim tradition divides, with many holding it was Ishmael.','The Qur’an has Abraham breaking idols and surviving a fire (Q 21:51–70), which is not in Genesis.','The Qur’an says Abraham and Ishmael built the Ka‘ba (Q 2:125–127); Genesis does not mention this.','Genesis centers on the covenant promise passing through Isaac (Genesis 17:19–21), taken up in Galatians 4:28.'],
muslim:'Many Muslim scholars say the unnamed son is Ishmael; others, including early authorities, say Isaac.',
scripture:'Genesis 22:2 is explicit: “your son, your only son Isaac.” The covenant promise runs through Isaac (Genesis 17:19–21; Hebrews 11:17–19).'},
{id:'joseph',topic:'Joseph in Egypt',torah:'Genesis 37–50',quran:'Q 12',
agree:'Joseph is favored by his father, betrayed by his brothers, sold to Egypt, falsely accused, rises in Egypt, and forgives his brothers.',
differ:['The Qur’an calls Egypt’s ruler “the king” (malik), not “Pharaoh,” in this account; Genesis uses “Pharaoh.”','The Qur’an has the women cutting their hands over Joseph (Q 12:31); Genesis does not.','The Qur’an closes with Jacob and the family reunited; Genesis continues to Jacob’s blessings and Joseph’s death.'],
muslim:'Muslims view Q 12 as the “best of stories” and see differences as additional detail.',
scripture:'Genesis is the detailed historical record. Note the Christian reading of Joseph as a figure pointing to God’s providence (Genesis 50:20).'},
{id:'moses',topic:'Moses, Pharaoh and the golden calf',torah:'Exodus 1–15; 32',quran:'Q 20:9–98; 26:10–68; 28:3–43; 10:90–92',
agree:'Moses is saved as a baby, called by God, confronts Pharaoh, leads Israel out, and Pharaoh’s army drowns.',
differ:['The Qur’an puts a “Hāmān” in Pharaoh’s court (Q 28:6, 38; 40:36); a Haman appears in Esther, centuries later, in the Persian court.','Pharaoh’s wife (Q 28:9) adopts Moses; Exodus 2:5–10 says Pharaoh’s daughter.','In the Qur’an a “Sāmirī” makes the calf (Q 20:85–97); Exodus 32 says Aaron made it.','The Qur’an has Pharaoh’s body preserved as a sign (Q 10:90–92); Exodus 14:28 says all the army drowned.'],
muslim:'Muslims reply that Hāmān could be an Egyptian title or a different person, and that Sāmirī may be a descriptive name for a man not otherwise known.',
scripture:'Exodus is the primary account. Where the Qur’an differs on names and events, the Torah is the standard; the Qur’an does not alter it (Isaiah 8:20).'},
{id:'mary',topic:'Mary, Jesus and the family of Imran',torah:'Numbers 26:59; Luke 1–2',quran:'Q 3:33–47; 19:16–36',
agree:'Mary is chosen, conceives Jesus miraculously, and the birth is announced by an angel.',
differ:['Mary is called “sister of Aaron” and daughter of “Imran” (Q 19:28; 3:35), while Numbers 26:59 has Miriam as Aaron’s sister about 1,400 years earlier.','Jesus speaks as a baby in the cradle (Q 19:29–33); the Gospels do not report this.','The Qur’an says Jesus is a messenger only (Q 4:171) and denies the cross (Q 4:157), while the Gospels testify to the death and resurrection (Luke 24; 1 Corinthians 15:3–5).'],
muslim:'Muslims take “sister of Aaron” as a figure of speech (“of Aaron’s line” or “like Aaron”), and see “Imran” as a family name.',
scripture:'The Gospels, written within living memory of the events, are the primary witness; see the Christology and Qur’an 4:171 modules for fuller treatment (Luke 1:1–4).'}
];
export const tahrif={
title:'What the Qur’an says about the Torah',
intro:'Several passages treat the Torah as available in Muhammad’s time and as guidance. Citations below are to the Qur’an and are summarized, not quoted.',
verses:[
['Q 5:43–46','Jews have the Torah “with God’s judgment,” and it contains guidance and light.'],
['Q 5:47','The People of the Gospel are told to judge by what God sent down in it.'],
['Q 10:94','Muhammad is told to ask those who have been reading the Book before him if he is in doubt.'],
['Q 3:3','The Qur’an confirms what came before it, the Torah and the Gospel.']],
muslim:'Muslim scholars differ. Many hold that the text was altered (taḥrīf al-lafẓ); others hold that the meaning was distorted (taḥrīf al-ma‘nā) while the text stayed. Some argue the Torah of Moses is not the same as the surviving text.',
pressure:'Dead Sea Scroll copies of the Pentateuch predate Muhammad by more than 600 years and match the later text closely, so any alteration of the text itself would have to be earlier than them. That presses the claim that the surviving Torah was corrupted after Muhammad affirmed it. Note the limit: manuscripts show how the text was preserved. The inspiration and truth of Scripture rest on its own testimony, not on them (see the standard above).'};
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
{id:'tub',side:'Qur’an',name:'Tübingen fragment (Ma VI 165)',date:'radiocarbon about 649–675 AD (reported)',what:'An early Qur’an fragment.',note:'Among the earliest dated copies.'},
{id:'topkapi',side:'Qur’an',name:'Topkapı and Samarkand Kufic manuscripts',date:'about 8th–9th century AD',what:'Large early codices traditionally linked to the ‘Uthmanic text.',note:'The traditional link to ‘Uthman is a tradition; palaeographic dating is later.'}
];
export const method=[
'Start from Scripture as the unmoving standard; state this openly, as everyone has an ultimate standard (2 Corinthians 10:5).',
'Describe the other account in a form its adherents would accept, with the Muslim response beside each difference.',
'Compare the account with the Torah, noting agreements and differences without exaggeration.',
'Judge differences by Scripture. Where the Qur’an adds or changes an account, the Torah is the standard.',
'Use manuscript evidence for what it can show (transmission), not to prove inspiration.',
'Ask what each position presupposes about revelation and preservation, in an internal critique (see the Logic lab).',
'Keep a gentle, courteous tone (1 Peter 3:15–16; 2 Timothy 2:24–25).'];
export const links:[string,string,string][]=[
['Dead Sea Scrolls Digital Library','https://www.deadseascrolls.org.il/','High-resolution images of the scrolls (Israel Museum). Linked, not copied.'],
['Aleppo Codex','http://www.aleppocodex.org/','Images and text of the Aleppo Codex.'],
['Sefaria','https://www.sefaria.org/','Hebrew Bible texts and translations (check each text’s license).'],
['Corpus Coranicum','https://corpuscoranicum.de/','Qur’anic manuscripts and variants (Berlin-Brandenburg Academy).'],
['Tanzil','https://tanzil.net/','Qur’an text; terms of use apply.'],
['Bible Hub','https://biblehub.com/','Verse-by-verse Bible study with parallel versions.']];
