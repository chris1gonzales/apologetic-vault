export const abVerses:{ref:string,en:string,ar:string}[]=[
{
"ref": "Q 2:106",
"en": "Nothing of our revelation (even a single verse) do we abrogate or cause be forgotten, but we bring (in place) one better or the like thereof. Knowest thou not that Allah is Able to do all things",
"ar": "مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَا أَوْ مِثْلِهَا ۗ أَلَمْ تَعْلَمْ أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ"
},
{
"ref": "Q 16:101",
"en": "And when We put a revelation in place of (another) revelation, - and Allah knoweth best what He revealeth - they say: Lo! thou art but inventing. Most of them know not",
"ar": "وَإِذَا بَدَّلْنَا آيَةً مَّكَانَ آيَةٍ ۙ وَاللَّهُ أَعْلَمُ بِمَا يُنَزِّلُ قَالُوا إِنَّمَا أَنتَ مُفْتَرٍ ۚ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ"
},
{
"ref": "Q 22:52",
"en": "Never sent We a messenger or a prophet before thee but when He recited (the message) Satan proposed (opposition) in respect of that which he recited thereof. But Allah abolisheth that which Satan proposeth. Then Allah establisheth His revelations. Allah is Knower, Wise",
"ar": "وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ وَلَا نَبِيٍّ إِلَّا إِذَا تَمَنَّىٰ أَلْقَى الشَّيْطَانُ فِي أُمْنِيَّتِهِ فَيَنسَخُ اللَّهُ مَا يُلْقِي الشَّيْطَانُ ثُمَّ يُحْكِمُ اللَّهُ آيَاتِهِ ۗ وَاللَّهُ عَلِيمٌ حَكِيمٌ"
},
{
"ref": "Q 87:6",
"en": "We shall make thee read (O Muhammad) so that thou shalt not forget",
"ar": "سَنُقْرِئُكَ فَلَا تَنسَىٰ"
},
{
"ref": "Q 87:7",
"en": "Save that which Allah willeth. Lo! He knoweth the disclosed and that which still is hidden",
"ar": "إِلَّا مَا شَاءَ اللَّهُ ۚ إِنَّهُ يَعْلَمُ الْجَهْرَ وَمَا يَخْفَىٰ"
},
{
"ref": "Q 15:9",
"en": "Lo! We, even We, reveal the Reminder, and lo! We verily are its Guardian",
"ar": "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ"
},
{
"ref": "Q 6:115",
"en": "Perfected is the Word of thy Lord in truth and justice. There is naught that can change His words. He is the Hearer, the Knower",
"ar": "وَتَمَّتْ كَلِمَتُ رَبِّكَ صِدْقًا وَعَدْلًا ۚ لَّا مُبَدِّلَ لِكَلِمَاتِهِ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ"
},
{
"ref": "Q 18:27",
"en": "And recite that which hath been revealed unto thee of the Scripture of thy Lord. There is none who can change His words, and thou wilt find no refuge beside Him",
"ar": "وَاتْلُ مَا أُوحِيَ إِلَيْكَ مِن كِتَابِ رَبِّكَ ۖ لَا مُبَدِّلَ لِكَلِمَاتِهِ وَلَن تَجِدَ مِن دُونِهِ مُلْتَحَدًا"
}
];
export type Row={ex:string,ab:string,note:string};
export const abTable:Row[]=[
{ex:'The direction of prayer',ab:'Q 2:142–150 (Jerusalem to the Kaaba)',note:'Widely accepted as a change of ruling. Muslim scholars agree. (verify the hadith references)'},
{ex:'Wine',ab:'Q 2:219, then 4:43, then 5:90–91',note:'Some call this naskh; others call it gradual legislation in stages, not replacement. (verify)'},
{ex:'Widow’s waiting period',ab:'Q 2:240 (a year), then 2:234 (four months and ten days)',note:'Often listed as naskh by classical exegetes; some read 2:240 as a bequest option, not a rule. (verify)'},
{ex:'Fasting ransom',ab:'Q 2:184, then 2:185',note:'Reported as naskh in some early exegesis; others read 2:184 as a concession for those unable to fast. (verify)'},
{ex:'Night vigil',ab:'Q 73:2–4, then 73:20',note:'Commonly listed as a lightening of a duty.'},
{ex:'Offering before speaking privately with the Prophet',ab:'Q 58:12, then 58:13',note:'Commonly cited example of a short-lived ruling.'},
{ex:'Restraint and forbearance toward opponents',ab:'Q 9:5 (the “sword verse”) and related verses',note:'Some classical exegetes treat many verses of forbearance as abrogated by 9:5; others limit it to the situation of the verse and its context. The claimed number of abrogated verses varies widely. (verify who holds which view)'},
{ex:'Stoning for adultery',ab:'Recitation lifted, ruling kept (reports of ʿUmar in the hadith collections)',note:'The Qur’anic text is said to have been withdrawn while the ruling remains. Muslims who accept this call it a kind of naskh; others dispute the reports. (verify)'}];
export const abTypes:[string,string][]=[
['Ruling and wording both lifted','The command and its recitation are both removed.'],
['Ruling lifted, wording stays','The verse remains in the Qur’an but its command no longer applies. This is the most discussed kind.'],
['Wording lifted, ruling stays','The words are withdrawn from the text while the command continues (the stoning example).']];
export const abViews:[string,string][]=[
['Classical majority','Naskh is real and found in the Qur’an and the Sunna. Ṭabarī and Ibn Kathīr discuss it on 2:106; al-Suyūṭī’s al-Itqān lists about twenty-one cases (verify the count), while other scholars list many more.'],
['Limiting scholars','Shah Wali Allah of Delhi cut the list to about five cases (verify). Many modern Muslim writers accept it only for a few rulings.'],
['Rejecting voices','Abū Muslim al-Iṣfahānī is reported to have denied naskh within the Qur’an, reading 2:106 as about earlier scriptures; some modern Muslims agree. (verify via al-Rāzī’s tafsīr)']];
export const abPressure=[
'The Qur’an says no one can change God’s words (6:115; 18:27) and that the Qur’an is preserved (15:9), yet it also says God replaces verses (2:106; 16:101; 22:52). Muslims explain this as a replacement by God, not a change by men, but the discussion shows that a rule can lose force while its words are kept.',
'Q 5:44–47 tells the people of the Torah and the Gospel to judge by what God sent down in them. That is hard to hold together with the claims that those books were changed, replaced or ended.',
'The Bible’s pattern is different. Christ fulfils the law and the prophets (Matthew 5:17–18; Hebrews 10:1), and the 1689 treats the ceremonial laws as ended in Christ (19.3) while the moral law still binds (19.5). Fulfilment keeps what was promised. It does not say an earlier word was wrong, or cancel its moral demand.',
'Scripture also says the word of God does not pass away (Isaiah 40:8; Matthew 24:35), and that no later angel or message can overturn the apostolic gospel (Galatians 1:8). Measure every claim of later revelation by that standard.'];
export type D2={topic:string,quran:string,muslim:string,bible:string,pressure:string};
export const doctrines2:D2[]=[
{topic:'God’s oneness (tawḥīd) and shirk',quran:'Q 112; 4:48 (shirk is not forgiven if unrepented); 59:22–24 (names of God).',muslim:'Sunni, Shiʿa and Sufi writers agree on one God. They differ on how to understand the names and attributes (Ashʿarī, Māturīdī, Atharī views). (verify)',bible:'One God in three persons (Deuteronomy 6:4; Matthew 28:19; 2 Corinthians 13:14; 1689 2.1, 2.3).',pressure:'The Qur’an denies a Trinity of “three” as it understands it (4:171; 5:73). The question is whether that matches the Trinity the Bible teaches: one essence, three persons. Do not say 5:116 defines the Trinity as Father, Son and Mary.'},
{topic:'Prophethood and the finality of Muhammad',quran:'Q 33:40 (“seal of the prophets”); 3:81; 7:157.',muslim:'Most Muslims hold that Muhammad is the final prophet. The Ahmadiyya movement disagrees and is rejected by most Muslims. (verify)',bible:'God has spoken finally in his Son (Hebrews 1:1–2); test a prophet by his message (Deuteronomy 13:1–5; 18:20–22; 1 John 4:1–3); 1689 1.1.',pressure:'A later prophet must be tested by earlier revelation. If the message denies the Son, the Bible says to reject it (1 John 2:22–23).'},
{topic:'Revelation and the Qur’an as the word of God',quran:'Q 85:21–22 (a preserved tablet); 43:3–4; 15:9.',muslim:'Classical Sunni creeds say the Qur’an is God’s uncreated speech; the Muʿtazila said it was created, which led to the miḥna under al-Maʾmūn, where Aḥmad ibn Ḥanbal resisted. (verify details)',bible:'The Word became flesh (John 1:1, 14); Scripture is breathed out by God (2 Timothy 3:16; 1689 1.1, 1.4).',pressure:'Both sides say their book is God’s word. The question is which revelation supplies the standard that can be reasoned from, and whether its claims fit the facts and its own account of God.'},
{topic:'Predestination (qadar) and free will',quran:'Q 54:49; 57:22; 18:29; 81:29.',muslim:'Ashʿarīs speak of acquisition (kasb); the Muʿtazila stressed human freedom; the Jabriyya stressed compulsion. Mainstream Sunnis accept both divine decree and human responsibility. (verify)',bible:'God ordains all things without being the author of sin or removing the liberty of creatures (Ephesians 1:11; Proverbs 16:9; Acts 2:23; 1689 3.1, 9.1–4).',pressure:'Reformed teaching is not Islamic fate. It grounds the decree in the character of the Triune God and in Christ the Mediator, and it leaves man responsible. Compare how each tradition keeps God just.'},
{topic:'Sin, forgiveness and judgment',quran:'Q 6:164; 39:53; 4:48; 21:47 (scales); 7:8–9.',muslim:'Forgiveness comes by God’s mercy and repentance, weighed against deeds. Muslims differ on whether good deeds can outweigh major sins and on the fate of grave sinners. (verify)',bible:'Sin is counted and punished, and God justifies the ungodly through Christ’s blood without compromising justice (Romans 3:23–26; Proverbs 17:15; 1689 11.1, 8.5).',pressure:'How can a holy God forgive without justice being done? The Bible answers with substitution. The Qur’anic answer rests on mercy alone.'},
{topic:'Angels, jinn and the unseen',quran:'Q 2:30–34; 18:50 (Iblis is of the jinn); 72 (Sūrat al-Jinn); 2:102 (Hārūt and Mārūt).',muslim:'Most hold that Iblis was a jinn and not an angel, and read 2:34 and 18:50 together; some classical authors say otherwise. (verify)',bible:'Angels are ministering spirits (Hebrews 1:14); fallen angels are in judgment (Jude 6; 2 Peter 2:4); Satan is a fallen angel in the biblical account.',pressure:'The two accounts of Iblis differ at the point where the Qur’an places him among the jinn. Compare that with Ezekiel 28 and Isaiah 14 as read in the church.'},
{topic:'The afterlife and intercession',quran:'Q 2:255; 20:109; 21:28; 19:71 (all will come to it).',muslim:'Sunni Muslims accept intercession by the Prophet by God’s leave, with hadith about the crossing (ṣirāṭ); Muʿtazila limited it. (verify the hadith references)',bible:'Christ ever lives to make intercession (Hebrews 7:25); one mediator (1 Timothy 2:5); resurrection and final judgment (1689 31–32).',pressure:'Intercession in Islam depends on God’s permission and on his choice. In the Bible it rests on a finished work of the Mediator.'},
{topic:'Jesus and Mary in the Qur’an',quran:'Q 3:45–59; 4:157, 171; 5:72–75, 116; 19:16–36; 9:30.',muslim:'Jesus is a messenger, born of the virgin Mary, and not divine. Muslims disagree on what happened at the end of his earthly life, and some Muslims read 4:157 differently. (verify)',bible:'Jesus is God and man in one person (John 1:1, 14; 20:28; Colossians 2:9; 1689 8.2); he was crucified and rose (1 Corinthians 15:3–4).',pressure:'Read the Qur’anic texts in context and measure them by the earlier witness. See the Qur’an 4:171 and Christology pages for detail.'},
{topic:'Law, jihad and non-Muslims',quran:'Q 2:256; 9:5, 29; 5:44–47; 60:8–9.',muslim:'Classical jurists developed rules for war, treaty, and the dhimma. Modern Muslims differ widely, from limiting jihad to defence to broader readings. Present each view as it is held. (verify)',bible:'Christ’s kingdom is not advanced by the sword (John 18:36; Matthew 26:52); love enemies (Matthew 5:44); the civil magistrate bears the sword for justice (Romans 13:4; 1689 24.1–2); liberty of conscience (1689 21).',pressure:'Judge the doctrine by what its texts and its recognised interpreters teach, and distinguish this from the conduct of individual Muslims.'}];
