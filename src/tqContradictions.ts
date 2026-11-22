// Torah–Qur’an contradiction cards. English: KJV and Pickthall (1930), public domain. Muslim explanations carry a status: checked (excerpt seen at source), secondary, or verify.
export type Strength='Direct conflict'|'Different detail'|'Addition only'|'Depends on reading';
export type Mus={w:string,t:string,s:'checked'|'secondary'|'verify'};
export type Contra={id:string,acct:string,title:string,type:string,strength:Strength,tref:string,qref:string,t:string,q:string,bible:string[][],quran:string[][],muslim:Mus[],assess:string,mss:string,src:string[]};
export const contradictions:Contra[]=[
{
"id": "signs",
"acct": "moses",
"title": "Moses’ signs: nine, or three and then the plagues",
"type": "Count",
"strength": "Different detail",
"tref": "Exodus 4:1–9; 7:11–12:36",
"qref": "Q 7:107–108, 130–133; 17:101; 27:12",
"t": "Exodus gives three signs at the burning bush (rod, hand, river water) and then the plagues in Exodus 7–12. It never says “nine”. Readers usually count ten plagues.",
"q": "The Qur’an says Moses was given nine tokens (17:101; 27:12). The hand is one (27:12). Sūrat al-Aʿrāf names the staff, the hand, and then famine and dearth of fruits, the flood, locusts, vermin, frogs and blood (7:107–108, 130–133).",
"bible": [
[
"Exodus 4:1–9",
"1 And Moses answered and said, But, behold, they will not believe me, nor hearken unto my voice: for they will say, The Lord hath not appeared unto thee. 2 And the Lord said unto him, What is that in thine hand? And he said, A rod. 3 And he said, Cast it on the ground. And he cast it on the ground, and it became a serpent; and Moses fled from before it. 4 And the Lord said unto Moses, Put forth thine hand, and take it by the tail. And he put forth his hand, and caught it, and it became a rod in his hand: 5 That they may believe that the Lord God of their fathers, the God of Abraham, the God of Isaac, and the God of Jacob, hath appeared unto thee. 6 And the Lord said furthermore unto him, Put now thine hand into thy bosom. And he put his hand into his bosom: and when he took it out, behold, his hand was leprous as snow. 7 And he said, Put thine hand into thy bosom again. And he put his hand into his bosom again; and plucked it out of his bosom, and, behold, it was turned again as his other flesh. 8 And it shall come to pass, if they will not believe thee, neither hearken to the voice of the first sign, that they will believe the voice of the latter sign. 9 And it shall come to pass, if they will not believe also these two signs, neither hearken unto thy voice, that thou shalt take of the water of the river, and pour it upon the dry land: and the water which thou takest out of the river shall become blood upon the dry land."
],
[
"Exodus 7:11–12",
"11 Then Pharaoh also called the wise men and the sorcerers: now the magicians of Egypt, they also did in like manner with their enchantments. 12 For they cast down every man his rod, and they became serpents: but Aaron’s rod swallowed up their rods."
]
],
"quran": [
[
"Q 7:130–133",
"130 And we straitened Pharaoh's folk with famine and dearth of fruits, that peradventure they might heed 131 But whenever good befell them, they said: This is ours; and whenever evil smote them they ascribed it to the evil auspices of Moses and those with him. Surely their evil auspice was only with Allah. But most of them knew not 132 And they said: Whatever portent thou bringest wherewith to bewitch us, we shall not put faith in thee 133 So We sent against them the flood and the locusts and the vermin and the frogs and the blood - a succession of clear signs. But they were arrogant and became a guilty folk"
],
[
"Q 17:101",
"101 And verily We gave unto Moses nine tokens, clear proofs (of Allah's Sovereignty). Do but ask the Children of Israel how he came unto them, then Pharaoh said unto him: Lo! I deem thee one bewitched, O Moses"
],
[
"Q 27:12",
"12 And put thy hand into the bosom of thy robe, it will come forth white but unhurt. (This will be one) among nine tokens unto Pharaoh and his people Lo! they were ever evil-living folk"
]
],
"muslim": [
{
"w": "Ibn Kathir on 17:101, reporting Ibn ʿAbbās, Mujāhid, ʿIkrima, al-Shaʿbī and Qatāda",
"t": "The nine are the hand, the staff, the years of famine, the failure of the crops, the flood, the locusts, the lice, the frogs and the blood.",
"s": "checked"
},
{
"w": "Ibn Kathir on 17:101, reporting Muḥammad ibn Kaʿb",
"t": "A different list: the hand, the staff, the five signs in sūrat al-Aʿrāf, the destruction of wealth and the rock.",
"s": "checked"
},
{
"w": "Ibn Kathir on 17:102",
"t": "Gives the list again as: staff, hand, years of famine, the sea, the flood, the locusts, the lice, the frogs and the blood (“the sea” where the other list has “failure of crops”).",
"s": "checked"
},
{
"w": "Maʿārif al-Qurʾān on 17:101",
"t": "Says the number nine does not mean there cannot be more than nine miracles, and also reports a hadith (Abū Dāwūd, al-Nasāʾī, al-Tirmidhī, Ibn Mājah) in which “nine clear signs” means nine commandments.",
"s": "checked"
}
],
"assess": "The Muslim commentators do not agree on which nine, and some of their lists include things Exodus does not record (a flood, failed crops) or put the sea among the signs. Exodus is the fuller and earlier account, and the Qur’an itself says to “ask the Children of Israel” (17:101), whose Scripture is Exodus. Exodus gives no count of nine, so this is a mismatch in number and content, not a deleted verse. It is judged by Scripture (Isaiah 8:20).",
"mss": "Exodus is attested at Qumran (including the paleo-Hebrew scroll 4QpaleoExodm), in the SP and in the LXX; the SP and LXX have longer readings in the plague narratives, but the same plagues (verify in the apparatus). I know of no manuscript that has a flood in place of the hail or that gives a count of nine (verify).",
"src": [
"ik17101",
"maarif17101"
]
},
{
"id": "magicians",
"acct": "moses",
"title": "The magicians: they imitate and fail, or they believe",
"type": "Detail or event",
"strength": "Different detail",
"tref": "Exodus 7:11–12; 8:18–19; 9:11",
"qref": "Q 7:112–126",
"t": "The magicians copy the rod sign (7:11–12), fail at the lice and say, “This is the finger of God” (8:18–19), and cannot stand before Moses because of the boils (9:11). Exodus records no belief and no threat from Pharaoh against them.",
"q": "The magicians fall down prostrate and say, “We believe in the Lord of the Worlds, the Lord of Moses and Aaron” (7:120–122). Pharaoh says they believed before he gave leave and calls it a plot (7:123).",
"bible": [
[
"Exodus 7:11–12",
"11 Then Pharaoh also called the wise men and the sorcerers: now the magicians of Egypt, they also did in like manner with their enchantments. 12 For they cast down every man his rod, and they became serpents: but Aaron’s rod swallowed up their rods."
],
[
"Exodus 8:18–19",
"18 And the magicians did so with their enchantments to bring forth lice, but they could not: so there were lice upon man, and upon beast. 19 Then the magicians said unto Pharaoh, This is the finger of God: and Pharaoh’s heart was hardened, and he hearkened not unto them; as the Lord had said."
],
[
"Exodus 9:11",
"11 And the magicians could not stand before Moses because of the boils; for the boil was upon the magicians, and upon all the Egyptians."
]
],
"quran": [
[
"Q 7:115–123",
"115 They said: O Moses! Either throw (first) or let us be the first throwers 116 He said: Throw! And when they threw they cast a spell upon the people's eyes, and overawed them, and produced a mighty spell 117 And We inspired Moses (saying): Throw thy staff! And lo! it swallowed up their lying show 118 Thus was the Truth vindicated and that which they were doing was made vain 119 Thus were they there defeated and brought low 120 And the wizards fell down prostrate 121 Crying: We believe in the Lord of the Worlds 122 The Lord of Moses and Aaron 123 Pharaoh said: Ye believe in Him before I give you leave! Lo! this is the plot that ye have plotted in the city that ye may drive its people hence. But ye shall come to know"
]
],
"muslim": [
{
"w": "Common Muslim reading",
"t": "The Qur’an records what Exodus leaves out, so Exodus is not contradicted. This is how it is usually put; I have not tied it to a named commentator.",
"s": "verify"
},
{
"w": "Other Qur’anic passages",
"t": "The same event appears in 20:70 and 26:46–51 (verify the wording in the Qur’an text).",
"s": "verify"
}
],
"assess": "Exodus is silent on what happened to the magicians after 9:11, so this is mostly an addition. The tension is that Exodus has them admit “the finger of God” and still leaves Pharaoh hardened, while the Qur’an has them worship. It is judged by Scripture, which has no scene of the magicians’ faith.",
"mss": "Exodus is attested at Qumran (including the paleo-Hebrew scroll 4QpaleoExodm), in the SP and in the LXX; the SP and LXX have longer readings in the plague narratives, but the same plagues (verify in the apparatus).",
"src": [
"tabari"
]
},
{
"id": "pharaohbody",
"acct": "moses",
"title": "Pharaoh’s belief at the sea and his body",
"type": "Detail or event",
"strength": "Addition only",
"tref": "Exodus 9:27; 10:16; 14:26–28",
"qref": "Q 10:90–92",
"t": "Pharaoh and his host drown, and “there remained not so much as one of them” (14:28). Earlier Pharaoh says, “I have sinned” (9:27; 10:16) and hardens again. No deathbed confession is recorded.",
"q": "As he drowns Pharaoh says, “I believe that there is no Allah save Him in Whom the Children of Israel believe” (10:90). He is told, “this day We save thee in thy body that thou mayst be a portent for those after thee” (10:92).",
"bible": [
[
"Exodus 9:27",
"27 And Pharaoh sent, and called for Moses and Aaron, and said unto them, I have sinned this time: the Lord is righteous, and I and my people are wicked."
],
[
"Exodus 14:26–28",
"26 And the Lord said unto Moses, Stretch out thine hand over the sea, that the waters may come again upon the Egyptians, upon their chariots, and upon their horsemen. 27 And Moses stretched forth his hand over the sea, and the sea returned to his strength when the morning appeared; and the Egyptians fled against it; and the Lord overthrew the Egyptians in the midst of the sea. 28 And the waters returned, and covered the chariots, and the horsemen, and all the host of Pharaoh that came into the sea after them; there remained not so much as one of them."
]
],
"quran": [
[
"Q 10:90–92",
"90 And We brought the Children of Israel across the sea, and Pharaoh with his hosts pursued them in rebellion and transgression, till, when the (fate of) drowning overtook him, he exclaimed: I believe that there is no Allah save Him in Whom the Children of Israel believe, and I am of those who surrender (unto Him) 91 What! Now! When hitherto thou hast rebelled and been of the wrong-doers 92 But this day We save thee in thy body that thou mayst be a portent for those after thee. Lo! most of mankind are heedless of Our portents"
]
],
"muslim": [
{
"w": "Ibn ʿAbbās and others of the salaf (reported by Ibn Kathir, quoted by IslamQA)",
"t": "Some Israelites doubted that Pharaoh had died, so the sea threw up his body as a sign.",
"s": "checked"
},
{
"w": "IslamQA (answer 72516)",
"t": "The verse does not mean the body was preserved down to our time; its purpose was to show the Israelites he was dead.",
"s": "checked"
},
{
"w": "Maʿārif al-Qurʾān on 10:92",
"t": "Allows that the body may have been kept from decay as a lesson for later generations, and says “it may still be there”.",
"s": "checked"
}
],
"assess": "Exodus does not contradict the body being found, since it says the host died. What it lacks is the confession at the moment of drowning. The Muslim answers differ among themselves: a sign for the Israelites then, or a sign preserved until now. Scripture’s own pattern is that Pharaoh’s confessions came with hardening (Exodus 9:27, 34–35).",
"mss": "Exodus is attested at Qumran (including the paleo-Hebrew scroll 4QpaleoExodm), in the SP and in the LXX; the SP and LXX have longer readings in the plague narratives, but the same plagues (verify in the apparatus).",
"src": [
"maarif1092",
"islamqa72516",
"tabarihist"
]
},
{
"id": "mosesmarriage",
"acct": "moses",
"title": "Moses’ marriage: Zipporah, or two unnamed women and a contract",
"type": "Name or identity",
"strength": "Different detail",
"tref": "Exodus 2:15–22; 3:1; 18:1–6; Numbers 12:1",
"qref": "Q 28:22–28",
"t": "The priest of Midian has seven daughters who draw water (2:16). Their father is Reuel (2:18) and later Jethro (18:1). Moses is given Zipporah, and she bears Gershom (2:21–22). Numbers 12:1 speaks of an Ethiopian (Cushite) woman whom Moses had married; whether she is Zipporah or another wife is debated. Exodus records no term of service.",
"q": "Moses meets two women at the water of Midian (28:23). Their father is unnamed, and says, “I fain would marry thee to one of these two daughters of mine on condition that thou hirest thyself to me for eight pilgrimages. Then if thou completest ten it will be of thine own accord” (28:27).",
"bible": [
[
"Exodus 2:16–22",
"16 Now the priest of Midian had seven daughters: and they came and drew water, and filled the troughs to water their father’s flock. 17 And the shepherds came and drove them away: but Moses stood up and helped them, and watered their flock. 18 And when they came to Reuel their father, he said, How is it that ye are come so soon to day? 19 And they said, An Egyptian delivered us out of the hand of the shepherds, and also drew water enough for us, and watered the flock. 20 And he said unto his daughters, And where is he? why is it that ye have left the man? call him, that he may eat bread. 21 And Moses was content to dwell with the man: and he gave Moses Zipporah his daughter. 22 And she bare him a son, and he called his name Gershom: for he said, I have been a stranger in a strange land."
],
[
"Exodus 18:1–6",
"1 When Jethro, the priest of Midian, Moses’ father in law, heard of all that God had done for Moses, and for Israel his people, and that the Lord had brought Israel out of Egypt; 2 Then Jethro, Moses’ father in law, took Zipporah, Moses’ wife, after he had sent her back, 3 And her two sons; of which the name of the one was Gershom; for he said, I have been an alien in a strange land: 4 And the name of the other was Eliezer; for the God of my father, said he, was mine help, and delivered me from the sword of Pharaoh: 5 And Jethro, Moses’ father in law, came with his sons and his wife unto Moses into the wilderness, where he encamped at the mount of God: 6 And he said unto Moses, I thy father in law Jethro am come unto thee, and thy wife, and her two sons with her."
],
[
"Numbers 12:1",
"1 And Miriam and Aaron spake against Moses because of the Ethiopian woman whom he had married: for he had married an Ethiopian woman."
],
[
"Genesis 29:18–20",
"18 And Jacob loved Rachel; and said, I will serve thee seven years for Rachel thy younger daughter. 19 And Laban said, It is better that I give her to thee, than that I should give her to another man: abide with me. 20 And Jacob served seven years for Rachel; and they seemed unto him but a few days, for the love he had to her."
]
],
"quran": [
[
"Q 28:22–28",
"22 And when he turned his face toward Midian, he said: Peradventure my Lord will guide me in the right road 23 And when he came unto the water of Midian he found there a whole tribe of men, watering. And he found apart from them two women keeping back (their flocks). He said: What aileth you? The two said: We cannot give (our flocks) to drink till the shepherds return from the water; and our father is a very old man 24 So he watered (their flock) for them. Then he turned aside into the shade, and said: My Lord! I am needy of whatever good Thou sendest down for me 25 Then there came unto him one of the two women, walking shyly. She said: Lo! my father biddeth thee, that he may reward thee with a payment for that thou didst water (the flock) for us. Then, when he came unto him and told him the (whole) story, he said: Fear not! Thou hast escaped from the wrongdoing folk 26 One of the two women said: O my father! Hire him! For the best (man) that thou canst hire in the strong, the trustworthy 27 He said: Lo! I fain would marry thee to one of these two daughters of mine on condition that thou hirest thyself to me for (the term of) eight pilgrimages. Then if thou completest ten it will be of thine own accord, for I would not make it hard for thee. Allah willing, thou wilt find me of the righteous 28 He said: That (is settled) between thee and me. Whichever of the two terms I fulfil, there will be no injustice to me, and Allah is Surety over what we say"
]
],
"muslim": [
{
"w": "Maʿārif al-Qurʾān on 28:27",
"t": "Names the father as Shuʿayb and says eight years of service stood for the dower (mahr). The talk was an agreement to marry, not the formal marriage.",
"s": "checked"
},
{
"w": "Ibn Kathir on 28:25–28",
"t": "The father offers one of his two daughters for eight years, with the other two as a favour. The woman who spoke is taken to be the one who walked behind Moses.",
"s": "checked"
},
{
"w": "Jethro and Shuʿayb",
"t": "The text of 28:22–28 does not name the father. Many Muslim writers identify him as Shuʿayb, and some link Shuʿayb to Jethro; others reject that. I have not checked the works that argue it.",
"s": "verify"
},
{
"w": "Numbers 12:1",
"t": "I did not find a Muslim commentary on the Ethiopian wife.",
"s": "verify"
}
],
"assess": "Exodus names the father (Reuel, Jethro) and the wife (Zipporah) and counts seven daughters; the Qur’an counts two, names no one, and supplies a work contract. The nearest thing in Scripture to a work-for-bride arrangement is Jacob and Rachel (Genesis 29:18–20), not Moses. Exodus 2 and 18 are the earlier account, and the Qur’an is judged by them.",
"mss": "Exodus is attested at Qumran (including the paleo-Hebrew scroll 4QpaleoExodm), in the SP and in the LXX; the SP and LXX have longer readings in the plague narratives, but the same plagues (verify in the apparatus). The Reuel/Jethro difference lies inside Exodus itself, and does not come from the Qur’an.",
"src": [
"ik2827",
"maarif2827",
"tabarihist"
]
},
{
"id": "river",
"acct": "saul",
"title": "Saul and the river: a test that belongs to Gideon",
"type": "Detail or event",
"strength": "Different detail",
"tref": "1 Samuel 17:1–3; Judges 7:1–7",
"qref": "Q 2:249",
"t": "In 1 Samuel 17 Saul and the Philistines face each other across the valley of Elah (17:2–3); there is no river test. The water test is Gideon’s, at the spring of Harod against Midian (Judges 7:1–7).",
"q": "“Allah will try you by (the ordeal of) a river. Whosoever therefore drinketh thereof he is not of me… save him who taketh thereof in the hollow of his hand” (2:249).",
"bible": [
[
"1 Samuel 17:1–3",
"1 Now the Philistines gathered together their armies to battle, and were gathered together at Shochoh, which belongeth to Judah, and pitched between Shochoh and Azekah, in Ephes–dammim. 2 And Saul and the men of Israel were gathered together, and pitched by the valley of Elah, and set the battle in array against the Philistines. 3 And the Philistines stood on a mountain on the one side, and Israel stood on a mountain on the other side: and there was a valley between them."
],
[
"Judges 7:4–7",
"4 And the Lord said unto Gideon, The people are yet too many; bring them down unto the water, and I will try them for thee there: and it shall be, that of whom I say unto thee, This shall go with thee, the same shall go with thee; and of whomsoever I say unto thee, This shall not go with thee, the same shall not go. 5 So he brought down the people unto the water: and the Lord said unto Gideon, Every one that lappeth of the water with his tongue, as a dog lappeth, him shalt thou set by himself; likewise every one that boweth down upon his knees to drink. 6 And the number of them that lapped, putting their hand to their mouth, were three hundred men: but all the rest of the people bowed down upon their knees to drink water. 7 And the Lord said unto Gideon, By the three hundred men that lapped will I save you, and deliver the Midianites into thine hand: and let all the other people go every man unto his place."
]
],
"quran": [
[
"Q 2:249",
"249 And when Saul set out with the army, he said: Lo! Allah will try you by (the ordeal of) a river. Whosoever therefore drinketh thereof he is not of me, and whosoever tasteth it not he is of me, save him who taketh (thereof) in the hollow of his hand. But they drank thereof, all save a few of them. And after he had crossed (the river), he and those who believed with him, they said: We have no power this day against Goliath and his hosts. But those who knew that they would meet Allah exclaimed: How many a little company hath overcome a mighty host by Allah's leave! Allah is with the steadfast"
]
],
"muslim": [
{
"w": "Ibn Kathir on 2:249",
"t": "Ṭālūt marched with the Israelites who obeyed him. Ibn ʿAbbās: whoever took a handful quenched his thirst, and those who drank freely did not.",
"s": "checked"
},
{
"w": "Tazkīr al-Qurʾān",
"t": "Places the crossing at the river Jordan.",
"s": "checked"
},
{
"w": "Muslim reading in general",
"t": "The Qur’an tells its own account and is not taken from Judges. I have not tied this to a named commentator.",
"s": "verify"
}
],
"assess": "The test, the “few” who pass and the drinking are those of Judges 7, which concerns Gideon and Midian. The Qur’an places them in Saul’s war with Goliath. 1 Samuel 17 has no such test. Scripture is the earlier and fuller account and the Qur’an is judged by it.",
"mss": "Judges is attested at Qumran and in the LXX (verify the fragments for chapter 7). 1 Samuel 17 differs in the LXX and the Hebrew in length (the LXX is shorter), but I know of no manuscript that puts a river test in it (verify).",
"src": [
"ik2249",
"sefaria",
"tabarihist"
]
},
{
"id": "three100",
"acct": "saul",
"title": "Saul’s soldiers: three hundred, three hundred and thirteen, or eighty thousand",
"type": "Count",
"strength": "Different detail",
"tref": "Judges 7:3–7",
"qref": "Q 2:249–250 (no number given)",
"t": "Gideon’s army falls from 32,000 to 10,000 and then to 300 (Judges 7:3, 6–7). The 300 are Gideon’s.",
"q": "The Qur’an gives no number. It says “all save a few of them” drank (2:249) and speaks of “a little company” (2:249).",
"bible": [
[
"Judges 7:2–7",
"2 And the Lord said unto Gideon, The people that are with thee are too many for me to give the Midianites into their hands, lest Israel vaunt themselves against me, saying, Mine own hand hath saved me. 3 Now therefore go to, proclaim in the ears of the people, saying, Whosoever is fearful and afraid, let him return and depart early from mount Gilead. And there returned of the people twenty and two thousand; and there remained ten thousand. 4 And the Lord said unto Gideon, The people are yet too many; bring them down unto the water, and I will try them for thee there: and it shall be, that of whom I say unto thee, This shall go with thee, the same shall go with thee; and of whomsoever I say unto thee, This shall not go with thee, the same shall not go. 5 So he brought down the people unto the water: and the Lord said unto Gideon, Every one that lappeth of the water with his tongue, as a dog lappeth, him shalt thou set by himself; likewise every one that boweth down upon his knees to drink. 6 And the number of them that lapped, putting their hand to their mouth, were three hundred men: but all the rest of the people bowed down upon their knees to drink water. 7 And the Lord said unto Gideon, By the three hundred men that lapped will I save you, and deliver the Midianites into thine hand: and let all the other people go every man unto his place."
]
],
"quran": [
[
"Q 2:249–250",
"249 And when Saul set out with the army, he said: Lo! Allah will try you by (the ordeal of) a river. Whosoever therefore drinketh thereof he is not of me, and whosoever tasteth it not he is of me, save him who taketh (thereof) in the hollow of his hand. But they drank thereof, all save a few of them. And after he had crossed (the river), he and those who believed with him, they said: We have no power this day against Goliath and his hosts. But those who knew that they would meet Allah exclaimed: How many a little company hath overcome a mighty host by Allah's leave! Allah is with the steadfast 250 And when they went into the field against Goliath and his hosts they said: Our Lord! Bestow on us endurance, make our foothold sure, and give us help against the disbelieving folk"
]
],
"muslim": [
{
"w": "Ibn Kathir on 2:249",
"t": "Says the army was eighty thousand, according to al-Suddī, “but Allah knows best”. It also reports al-Barāʾ ibn ʿĀzib: the Companions at Badr were more than 310, as many as those who crossed the river with Ṭālūt.",
"s": "checked"
},
{
"w": "al-Ṭabāṭabāʾī, al-Mīzān",
"t": "Says 313 men were left with Ṭālūt, and that this is reported in Shiʿa and Sunni chains.",
"s": "checked"
},
{
"w": "Al-Ṭabarī",
"t": "I have not read his account of the number.",
"s": "verify"
}
],
"assess": "The number 300 is Gideon’s in Scripture (Judges 7:6–7). The Muslim figures (313, over 310, eighty thousand) come from later reports. The 313 is tied to Badr. The Qur’an’s own text is silent, so the question of how “Saul and the 300” came to be said is a matter of the reports, not of the Qur’an.",
"mss": "Judges 7 is attested at Qumran and in the LXX (verify the fragments).",
"src": [
"ik2249",
"almizan2249"
]
},
{
"id": "davidkingdom",
"acct": "saul",
"title": "David kills Goliath: the daughter and the kingdom",
"type": "Chronology",
"strength": "Different detail",
"tref": "1 Samuel 17:25; 2 Samuel 2:4; 5:1–5",
"qref": "Q 2:251",
"t": "David kills Goliath, and the king promises his daughter to the man who does (1 Samuel 17:25). Saul keeps reigning for years (1 Samuel 18–31). David is anointed over Judah after Saul’s death (2 Samuel 2:4) and then over all Israel (5:3).",
"q": "“So they routed them by Allah’s leave and David slew Goliath; and Allah gave him the kingdom and wisdom, and taught him of that which He willeth” (2:251).",
"bible": [
[
"1 Samuel 17:25",
"25 And the men of Israel said, Have ye seen this man that is come up? surely to defy Israel is he come up: and it shall be, that the man who killeth him, the king will enrich him with great riches, and will give him his daughter, and make his father’s house free in Israel."
],
[
"2 Samuel 2:4",
"4 And the men of Judah came, and there they anointed David king over the house of Judah. And they told David, saying, That the men of Jabesh–gilead were they that buried Saul."
],
[
"2 Samuel 5:3–5",
"3 So all the elders of Israel came to the king to Hebron; and king David made a league with them in Hebron before the Lord: and they anointed David king over Israel. 4 David was thirty years old when he began to reign, and he reigned forty years. 5 In Hebron he reigned over Judah seven years and six months: and in Jerusalem he reigned thirty and three years over all Israel and Judah."
]
],
"quran": [
[
"Q 2:251",
"251 So they routed them by Allah's leave and David slew Goliath; and Allah gave him the kingdom and wisdom, and taught him of that which He willeth. And if Allah had not repelled some men by others the earth would have been corrupted. But Allah is a Lord of Kindness to (His) creatures"
]
],
"muslim": [
{
"w": "Ibn Kathir on 2:251",
"t": "Notes that Israelite accounts say David killed Goliath with a sling, and that Ṭālūt promised his daughter to whoever killed Jālūt.",
"s": "checked"
},
{
"w": "Timing of “gave him the kingdom”",
"t": "Whether 2:251 means the kingdom followed at once, or only in the end, is a question for the Arabic and the commentaries. I have not checked them.",
"s": "verify"
}
],
"assess": "Both accounts agree that David killed Goliath and that a king’s daughter was offered. Scripture records a long gap before David reigns, and the Qur’an’s verse can be read as compressing it. This is the mildest of the cases and is listed so the list is honest about it.",
"mss": "4QSama (Qumran) and the LXX differ from the Masoretic Text in the David and Goliath chapters (the LXX omits some of 17:12–31). The differences do not touch these verses (verify).",
"src": [
"ik2249"
]
},
{
"id": "jacobblind",
"acct": "joseph",
"title": "Jacob’s sight: grief and a shirt, or age",
"type": "Detail or event",
"strength": "Different detail",
"tref": "Genesis 37:33–35; 45:26–28; 48:10",
"qref": "Q 12:84, 93–96",
"t": "Jacob mourns many days and refuses comfort (37:34–35). When told Joseph is alive his heart faints, “for he believed them not”, and his spirit revives when he sees the wagons Joseph sent (45:26–27). His eyes are dim “for age” years later (48:10), with no healing recorded.",
"q": "“His eyes were whitened with the sorrow that he was suppressing” (12:84). He tells his sons, “Go with this shirt of mine and lay it on my father’s face, he will become (again) a seer” (12:93), and he does (12:96).",
"bible": [
[
"Genesis 37:33–35",
"33 And he knew it, and said, It is my son’s coat; an evil beast hath devoured him; Joseph is without doubt rent in pieces. 34 And Jacob rent his clothes, and put sackcloth upon his loins, and mourned for his son many days. 35 And all his sons and all his daughters rose up to comfort him; but he refused to be comforted; and he said, For I will go down into the grave unto my son mourning. Thus his father wept for him."
],
[
"Genesis 45:26–28",
"26 And told him, saying, Joseph is yet alive, and he is governor over all the land of Egypt. And Jacob’s heart fainted, for he believed them not. 27 And they told him all the words of Joseph, which he had said unto them: and when he saw the wagons which Joseph had sent to carry him, the spirit of Jacob their father revived: 28 And Israel said, It is enough; Joseph my son is yet alive: I will go and see him before I die."
],
[
"Genesis 48:10",
"10 Now the eyes of Israel were dim for age, so that he could not see. And he brought them near unto him; and he kissed them, and embraced them."
]
],
"quran": [
[
"Q 12:84",
"84 And he turned away from them and said: Alas, my grief for Joseph! And his eyes were whitened with the sorrow that he was suppressing"
],
[
"Q 12:93–96",
"93 Go with this shirt of mine and lay it on my father's face, he will become (again) a seer; and come to me with all your folk 94 When the caravan departed their father had said: Truly I am conscious of the breath of Joseph, though ye call me dotard 95 (Those around him) said: By Allah, lo! thou art in thine old aberration 96 Then, when the bearer of glad tidings came, he laid it on his face and he became a seer once more. He said: Said I not unto you that I know from Allah that which ye know not"
]
],
"muslim": [
{
"w": "Ibn Kathir on 12:96",
"t": "Reports al-Suddī: Yahūdhā brought the shirt and laid it on his father’s face, and his sight was restored.",
"s": "checked"
},
{
"w": "al-Muntakhab",
"t": "Says his eyes turned opaque from grief.",
"s": "checked"
},
{
"w": "Whether it was total blindness",
"t": "Some may read “whitened” as dimmed from weeping. I have not checked a commentator for this.",
"s": "verify"
}
],
"assess": "Genesis ties Jacob’s dim sight to age (48:10) and has no shirt, no scent and no healing; his spirit revives at the sight of the wagons (45:27). The Qur’an adds a miracle of sight that Scripture does not record. It is judged by Scripture.",
"mss": "Genesis is attested at Qumran, in the Samaritan Pentateuch (SP) and in the Septuagint (LXX), and all three keep the same outline of these chapters (verify the exact fragments and the apparatus).",
"src": [
"ik1284",
"ik12096"
]
},
{
"id": "jacobknew",
"acct": "joseph",
"title": "Jacob believes Joseph is dead, or knows he lives",
"type": "Detail or event",
"strength": "Different detail",
"tref": "Genesis 37:33–35; 45:26",
"qref": "Q 12:84–87, 94–96",
"t": "Jacob accepts the coat as proof: “an evil beast hath devoured him” (37:33). He says he will go down to the grave mourning (37:35). Told Joseph lives, he does not believe it (45:26).",
"q": "Jacob says, “I know from Allah that which ye know not” (12:86), tells his sons to “ascertain concerning Joseph” (12:87), and says, “I am conscious of the breath of Joseph” (12:94).",
"bible": [
[
"Genesis 37:33–35",
"33 And he knew it, and said, It is my son’s coat; an evil beast hath devoured him; Joseph is without doubt rent in pieces. 34 And Jacob rent his clothes, and put sackcloth upon his loins, and mourned for his son many days. 35 And all his sons and all his daughters rose up to comfort him; but he refused to be comforted; and he said, For I will go down into the grave unto my son mourning. Thus his father wept for him."
],
[
"Genesis 45:26",
"26 And told him, saying, Joseph is yet alive, and he is governor over all the land of Egypt. And Jacob’s heart fainted, for he believed them not."
]
],
"quran": [
[
"Q 12:86–87",
"86 He said: I expose my distress and anguish only unto Allah, and I know from Allah that which ye know not 87 Go, O my sons, and ascertain concerning Joseph and his brother, and despair not of the Spirit of Allah. Lo! none despaireth of the Spirit of Allah save disbelieving folk"
],
[
"Q 12:94–96",
"94 When the caravan departed their father had said: Truly I am conscious of the breath of Joseph, though ye call me dotard 95 (Those around him) said: By Allah, lo! thou art in thine old aberration 96 Then, when the bearer of glad tidings came, he laid it on his face and he became a seer once more. He said: Said I not unto you that I know from Allah that which ye know not"
]
],
"muslim": [
{
"w": "Ibn Kathir on 12:84",
"t": "Reads “I know from Allah that which ye know not” as Jacob’s hope of every kind of good from Allah.",
"s": "checked"
}
],
"assess": "Genesis shows Jacob grieving and unbelieving until proof arrives. The Qur’an shows him confident that Joseph lives. The difference is real, and it affects what each text says about how God gave knowledge to the patriarchs. Genesis records God speaking to Jacob (28:13–15; 46:2–4), but no word from God about Joseph’s fate before the news reaches him (verify).",
"mss": "Genesis is attested at Qumran, in the Samaritan Pentateuch (SP) and in the Septuagint (LXX), and all three keep the same outline of these chapters (verify the exact fragments and the apparatus).",
"src": [
"ik1284"
]
},
{
"id": "parentsbow",
"acct": "joseph",
"title": "Joseph’s parents bow to him: his mother had died",
"type": "Chronology",
"strength": "Depends on reading",
"tref": "Genesis 35:16–19; 37:9–10; 42:6; 43:26",
"qref": "Q 12:99–100",
"t": "Rachel dies giving birth to Benjamin (35:18–19), before Joseph is sold. In Genesis the brothers bow to Joseph (42:6; 43:26). Jacob rebukes the dream that has his “mother” bowing (37:10). There is no scene of Jacob and his wife bowing in Egypt.",
"q": "“He placed his parents on the dais and they fell down before him prostrate” (12:100). Joseph says, “This is the interpretation of my dream of old.”",
"bible": [
[
"Genesis 35:16–19",
"16 And they journeyed from Beth–el; and there was but a little way to come to Ephrath: and Rachel travailed, and she had hard labour. 17 And it came to pass, when she was in hard labour, that the midwife said unto her, Fear not; thou shalt have this son also. 18 And it came to pass, as her soul was in departing, (for she died) that she called his name Ben–oni: but his father called him Benjamin. 19 And Rachel died, and was buried in the way to Ephrath, which is Beth–lehem."
],
[
"Genesis 37:9–10",
"9 And he dreamed yet another dream, and told it his brethren, and said, Behold, I have dreamed a dream more; and, behold, the sun and the moon and the eleven stars made obeisance to me. 10 And he told it to his father, and to his brethren: and his father rebuked him, and said unto him, What is this dream that thou hast dreamed? Shall I and thy mother and thy brethren indeed come to bow down ourselves to thee to the earth?"
],
[
"Genesis 42:6",
"6 And Joseph was the governor over the land, and he it was that sold to all the people of the land: and Joseph’s brethren came, and bowed down themselves before him with their faces to the earth."
]
],
"quran": [
[
"Q 12:99–100",
"99 And when they came in before Joseph, he took his parents unto him, and said: Come into Egypt safe, if Allah will 100 And he placed his parents on the dais and they fell down before him prostrate, and he said: O my father! This is the interpretation of my dream of old. My Lord hath made it true, and He hath shown me kindness, since He took me out of the prison and hath brought you from the desert after Satan had made strife between me and my brethren. Lo! my Lord is tender unto whom He will. He is the Knower, the Wise"
]
],
"muslim": [
{
"w": "Ibn Kathir on 12:100, reporting al-Suddī and Ibn Zayd",
"t": "The “parents” were Jacob and Joseph’s maternal aunt, because his mother had died long before.",
"s": "checked"
},
{
"w": "Ibn Kathir on 12:100, reporting Ibn Isḥāq and al-Ṭabarī",
"t": "Both parents were alive. Ibn Jarīr (al-Ṭabarī) adds that the apparent words of the Qur’an show his mother was alive.",
"s": "checked"
},
{
"w": "Al-Ṭabarī’s own text",
"t": "I have only seen it through Ibn Kathir.",
"s": "verify"
}
],
"assess": "The point of the conflict is Rachel. If the Qur’an means Joseph’s mother, as al-Ṭabarī says the words show, Genesis 35 says she was already dead. The other reading, an aunt, keeps the Qur’an consistent with Genesis, but departs from the plain wording al-Ṭabarī reads. Note that Genesis 37:10 itself speaks of “thy mother” in the dream, which readers explain in different ways (verify).",
"mss": "Genesis is attested at Qumran, in the Samaritan Pentateuch (SP) and in the Septuagint (LXX), and all three keep the same outline of these chapters (verify the exact fragments and the apparatus).",
"src": [
"ik12100",
"tabari",
"tabarihist"
]
},
{
"id": "kingprice",
"acct": "joseph",
"title": "“The king”, not Pharaoh; and the price of Joseph",
"type": "Name or identity",
"strength": "Different detail",
"tref": "Genesis 37:27–28; 41:14–16; 47:5–6",
"qref": "Q 12:19–20, 43, 50",
"t": "Genesis calls Joseph’s ruler “Pharaoh” throughout (41:14; 47:5). Joseph is drawn from the pit by Midianite traders and sold to Ishmaelites for “twenty pieces of silver” (37:28).",
"q": "In sūrat Yūsuf the ruler is always “the king” (12:43, 50), and the word “Pharaoh” does not occur in the surah (checked in the stored text). A caravan’s waterdrawer finds him and “they sold him for a low price, a number of silver coins” (12:19–20). The Arabic is “darāhima maʿdūda”, a few dirhams.",
"bible": [
[
"Genesis 37:27–28",
"27 Come, and let us sell him to the Ishmeelites, and let not our hand be upon him; for he is our brother and our flesh. And his brethren were content. 28 Then there passed by Midianites merchantmen; and they drew and lifted up Joseph out of the pit, and sold Joseph to the Ishmeelites for twenty pieces of silver: and they brought Joseph into Egypt."
],
[
"Genesis 41:14–16",
"14 Then Pharaoh sent and called Joseph, and they brought him hastily out of the dungeon: and he shaved himself, and changed his raiment, and came in unto Pharaoh. 15 And Pharaoh said unto Joseph, I have dreamed a dream, and there is none that can interpret it: and I have heard say of thee, that thou canst understand a dream to interpret it. 16 And Joseph answered Pharaoh, saying, It is not in me: God shall give Pharaoh an answer of peace."
]
],
"quran": [
[
"Q 12:19–20",
"19 And there came a caravan, and they sent their waterdrawer. He let down his pail (into the pit). He said: Good luck! Here is a youth. And they hid him as a treasure, and Allah was Aware of what they did 20 And they sold him for a low price, a number of silver coins; and they attached no value to him"
],
[
"Q 12:43",
"43 And the king said: Lo! I saw in a dream seven fat kine which seven lean were eating, and seven green ears of corn and other (seven) dry. O notables! Expound for me my vision, if ye can interpret dreams"
]
],
"muslim": [
{
"w": "Observation from the stored text",
"t": "The word “Pharaoh” does not appear in Pickthall’s sūrat Yūsuf; the ruler is called “the king” (12:43, 50, and others).",
"s": "checked"
},
{
"w": "Why “king”",
"t": "Some writers say the ruler in Joseph’s time was not a native Egyptian king and so not styled “Pharaoh”. I have not traced who argues it or how well.",
"s": "verify"
},
{
"w": "The sum",
"t": "12:20 gives no figure, so it does not directly conflict with twenty pieces of silver (Genesis 37:28).",
"s": "checked"
}
],
"assess": "The title is a real difference of naming, and the price is not a conflict because the Qur’an gives no number. Genesis 37:27–28 is itself hard to read as to who sold Joseph, the brothers or the Midianites, and the Qur’an’s “they sold him” does not settle it. Scripture is the earlier account.",
"mss": "The Hebrew of Genesis 37:28 reads twenty pieces of silver. Some versions differ on the unit or the number (verify in the apparatus).",
"src": [
"ik12100",
"tabari"
]
},
{
"id": "abrahamfire",
"acct": "abraham",
"title": "Abraham thrown into the fire",
"type": "Addition",
"strength": "Addition only",
"tref": "Genesis 11:28; 15:7",
"qref": "Q 21:51–70; 29:24",
"t": "Genesis says Haran died “in the land of his nativity, in Ur of the Chaldees” (11:28) and that the Lord “brought thee out of Ur” (15:7). It tells no story of a fire.",
"q": "Abraham breaks his people’s idols (21:58). His people say, “Burn him” (21:68). “We said: O fire, be coolness and peace for Abraham” (21:69). In 29:24: “Then Allah saved him from the Fire.”",
"bible": [
[
"Genesis 11:28",
"28 And Haran died before his father Terah in the land of his nativity, in Ur of the Chaldees."
],
[
"Genesis 15:7",
"7 And he said unto him, I am the Lord that brought thee out of Ur of the Chaldees, to give thee this land to inherit it."
]
],
"quran": [
[
"Q 21:68–70",
"68 They cried: Burn him and stand by your gods, if ye will be doing 69 We said: O fire, be coolness and peace for Abraham 70 And they wished to set a snare for him, but We made them the greater losers"
],
[
"Q 29:24",
"24 But the answer of his folk was only that they said: \"Kill him\" or \"Burn him.\" Then Allah saved him from the Fire. Lo! herein verily are portents for folk who believe"
]
],
"muslim": [
{
"w": "Ibn Kathir on 21:68–70, reporting Ibn ʿAbbās",
"t": "When Abraham was thrown into the fire, the angel of the rain asked when he would be commanded to send rain, but Allah’s command was swifter.",
"s": "checked"
},
{
"w": "Hadith (Bukhārī) quoted on alim.org",
"t": "Abraham said, while being thrown into the fire, “Allah alone is sufficient for us and He is the best protector.”",
"s": "secondary"
},
{
"w": "A modern commentator quoted on alim.org (verify attribution)",
"t": "Says the Qur’an does not state Abraham was bodily thrown into the fire, and that 29:24 points to his not having been thrown in.",
"s": "secondary"
}
],
"assess": "There is no furnace in Scripture. The story is found in Genesis Rabbah 38, where a rabbinic midrash reads the Hebrew “Ur” as “fire” and has Haran die in it. That is a later Jewish tradition, not Scripture. Critics say this shows where the Qur’an’s account came from; Muslims say it was revealed independently. For the taḥrīf question the useful point is that the earliest Genesis texts do not show a removed fire story.",
"mss": "Genesis is attested at Qumran, in the Samaritan Pentateuch (SP) and in the Septuagint (LXX), and all three keep the same outline of these chapters (verify the exact fragments and the apparatus).",
"src": [
"ik2169",
"thetorahfire",
"sefaria",
"tabarihist"
]
},
{
"id": "lotwife",
"acct": "abraham",
"title": "Lot’s wife: looked back, or stayed behind and betrayed",
"type": "Detail or event",
"strength": "Different detail",
"tref": "Genesis 19:15–26",
"qref": "Q 7:83; 11:81; 15:60; 26:171; 66:10",
"t": "The angels seize the hand of Lot, his wife and his daughters and bring them out (19:16). She looks back and becomes a pillar of salt (19:26).",
"q": "She is “of those who stayed behind” (7:83; 15:60; 26:171) and is judged with Noah’s wife as one who “betrayed” her husband (66:10). 11:81 says “let not one of you turn round (all) save thy wife”. No salt is mentioned.",
"bible": [
[
"Genesis 19:15–17",
"15 And when the morning arose, then the angels hastened Lot, saying, Arise, take thy wife, and thy two daughters, which are here; lest thou be consumed in the iniquity of the city. 16 And while he lingered, the men laid hold upon his hand, and upon the hand of his wife, and upon the hand of his two daughters; the Lord being merciful unto him: and they brought him forth, and set him without the city. 17 And it came to pass, when they had brought them forth abroad, that he said, Escape for thy life; look not behind thee, neither stay thou in all the plain; escape to the mountain, lest thou be consumed."
],
[
"Genesis 19:26",
"26 But his wife looked back from behind him, and she became a pillar of salt."
]
],
"quran": [
[
"Q 7:83",
"83 And We rescued him and his household, save his wife, who was of those who stayed behind"
],
[
"Q 11:81",
"81 (The messengers) said: O Lot! Lo! we are messengers of thy Lord; they shall not reach thee. So travel with thy people in a part of the night, and let not one of you turn round - (all) save thy wife. Lo! that which smiteth them will smite her (also). Lo! their tryst is (for) the morning. Is not the morning nigh"
],
[
"Q 66:10",
"10 Allah citeth an example for those who disbelieve: the wife of Noah and the wife of Lot, who were under two of Our righteous slaves yet betrayed them so that they (the husbands) availed them naught against Allah and it was said (unto them): Enter the Fire along with those who enter"
]
],
"muslim": [
{
"w": "The wording of 11:81",
"t": "The exception “save thy wife” can be read as excepting her from the order to leave, or from the order not to turn. Pickthall’s “(all) save thy wife” takes it one way. I have not checked the commentaries.",
"s": "verify"
}
],
"assess": "Genesis has her brought out and then looking back; the Qur’an has her decreed to stay behind and calls her a betrayer, which Genesis never says. Genesis 7:7 puts Noah’s wife in the ark, and the Qur’an’s pairing of the two wives (66:10) goes beyond Genesis. It is judged by Scripture.",
"mss": "Genesis is attested at Qumran, in the Samaritan Pentateuch (SP) and in the Septuagint (LXX), and all three keep the same outline of these chapters (verify the exact fragments and the apparatus).",
"src": [
"sefaria"
]
},
{
"id": "kaaba",
"acct": "abraham",
"title": "Abraham and Ishmael build the House",
"type": "Place",
"strength": "Addition only",
"tref": "Genesis 12:7–8; 13:18; 21:14–21; 22:9; 25:18",
"qref": "Q 2:125–129; 14:37",
"t": "Abraham builds altars at Shechem, Bethel, Hebron and Moriah (12:7–8; 13:18; 22:9). Hagar and Ishmael go to the wilderness of Beersheba (21:14) and Ishmael dwells in Paran (21:21). His sons dwell from Havilah to Shur “before Egypt” (25:18). Scripture does not mention a house built by Abraham and Ishmael.",
"q": "“When Abraham and Ishmael were raising the foundations of the House” (2:127). “I have settled some of my posterity in an uncultivable valley near unto Thy holy House” (14:37).",
"bible": [
[
"Genesis 13:18",
"18 Then Abram removed his tent, and came and dwelt in the plain of Mamre, which is in Hebron, and built there an altar unto the Lord."
],
[
"Genesis 21:14–21",
"14 And Abraham rose up early in the morning, and took bread, and a bottle of water, and gave it unto Hagar, putting it on her shoulder, and the child, and sent her away: and she departed, and wandered in the wilderness of Beer–sheba. 15 And the water was spent in the bottle, and she cast the child under one of the shrubs. 16 And she went, and sat her down over against him a good way off, as it were a bowshot: for she said, Let me not see the death of the child. And she sat over against him, and lift up her voice, and wept. 17 And God heard the voice of the lad; and the angel of God called to Hagar out of heaven, and said unto her, What aileth thee, Hagar? fear not; for God hath heard the voice of the lad where he is. 18 Arise, lift up the lad, and hold him in thine hand; for I will make him a great nation. 19 And God opened her eyes, and she saw a well of water; and she went, and filled the bottle with water, and gave the lad drink. 20 And God was with the lad; and he grew, and dwelt in the wilderness, and became an archer. 21 And he dwelt in the wilderness of Paran: and his mother took him a wife out of the land of Egypt."
],
[
"Genesis 25:18",
"18 And they dwelt from Havilah unto Shur, that is before Egypt, as thou goest toward Assyria: and he died in the presence of all his brethren."
]
],
"quran": [
[
"Q 2:125–127",
"125 And when We made the House (at Makka) a resort for mankind and sanctuary, (saying): Take as your place of worship the place where Abraham stood (to pray). And We imposed a duty upon Abraham and Ishmael, (saying): Purify My house for those who go around and those who meditate therein and those who bow down and prostrate themselves (in worship) 126 And when Abraham prayed: My Lord! Make this a region of security and bestow upon its people fruits, such of them as believe in Allah and the Last Day, He answered: As for him who disbelieveth, I shall leave him in contentment for a while, then I shall compel him to the doom of Fire - a hapless journey's end 127 And when Abraham and Ishmael were raising the foundations of the House, (Abraham prayed): Our Lord! Accept from us (this duty). Lo! Thou, only Thou, art the Hearer, the Knower"
],
[
"Q 14:37",
"37 Our Lord! Lo! I have settled some of my posterity in an uncultivable valley near unto Thy holy House, our Lord! that they may establish proper worship; so incline some hearts of men that they may yearn toward them, and provide Thou them with fruits in order that they may be thankful"
]
],
"muslim": [
{
"w": "The Arabic of 2:125 and 2:127",
"t": "Neither verse names a place. Pickthall’s “(at Makka)” in 2:125 is the translator’s addition (checked against the stored Arabic).",
"s": "checked"
},
{
"w": "Paran",
"t": "Some Muslim writers identify Paran (Genesis 21:21) with the Ḥijāz. I have not checked who argues it or from what.",
"s": "verify"
}
],
"assess": "Scripture has no house in Arabia, and its Ishmael material points to the region between Havilah and Shur (Genesis 25:18). The Qur’an’s verses name no place, and the link to Mecca depends on other verses and on tradition. This is an addition, not a reversal of Scripture. It is judged by Scripture, where God appoints the place of worship (Deuteronomy 12:5).",
"mss": "Genesis is attested at Qumran, in the Samaritan Pentateuch (SP) and in the Septuagint (LXX), and all three keep the same outline of these chapters (verify the exact fragments and the apparatus).",
"src": [
"sefaria"
]
},
{
"id": "raven",
"acct": "adam",
"title": "Cain, the raven and the burial of Abel",
"type": "Addition",
"strength": "Addition only",
"tref": "Genesis 4:8–15",
"qref": "Q 5:27–32",
"t": "Cain kills Abel, is cursed, and says, “My punishment is greater than I can bear” (4:13). Nothing is said about how Abel was buried.",
"q": "“Then Allah sent a raven scratching up the ground, to show him how to hide his brother’s naked corpse. He said: Woe unto me!… And he became repentant” (5:31).",
"bible": [
[
"Genesis 4:8–15",
"8 And Cain talked with Abel his brother: and it came to pass, when they were in the field, that Cain rose up against Abel his brother, and slew him. 9 And the Lord said unto Cain, Where is Abel thy brother? And he said, I know not: Am I my brother’s keeper? 10 And he said, What hast thou done? the voice of thy brother’s blood crieth unto me from the ground. 11 And now art thou cursed from the earth, which hath opened her mouth to receive thy brother’s blood from thy hand; 12 When thou tillest the ground, it shall not henceforth yield unto thee her strength; a fugitive and a vagabond shalt thou be in the earth. 13 And Cain said unto the Lord, My punishment is greater than I can bear. 14 Behold, thou hast driven me out this day from the face of the earth; and from thy face shall I be hid; and I shall be a fugitive and a vagabond in the earth; and it shall come to pass, that every one that findeth me shall slay me. 15 And the Lord said unto him, Therefore whosoever slayeth Cain, vengeance shall be taken on him sevenfold. And the Lord set a mark upon Cain, lest any finding him should kill him."
]
],
"quran": [
[
"Q 5:27–32",
"27 But recite unto them with truth the tale of the two sons of Adam, how they offered each a sacrifice, and it was accepted from the one of them and it was not accepted from the other. (The one) said: I will surely kill thee. (The other) answered: Allah accepteth only from those who ward off (evil) 28 Even if thou stretch out thy hand against me to kill me, I shall not stretch out my hand against thee to kill thee, lo! I fear Allah, the Lord of the Worlds 29 Lo! I would rather thou shouldst bear the punishment of the sin against me and thine own sin and become one of the owners of the fire. That is the reward of evil-doers 30 But (the other's) mind imposed on him the killing of his brother, so he slew him and became one of the losers 31 Then Allah sent a raven scratching up the ground, to show him how to hide his brother's naked corpse. He said: Woe unto me! Am I not able to be as this raven and so hide my brother's naked corpse? And he became repentant 32 For that cause We decreed for the Children of Israel that whosoever killeth a human being for other than manslaughter or corruption in the earth, it shall be as if he had killed all mankind, and whoso saveth the life of one, it shall be as if he had saved the life of all mankind. Our messengers came unto them of old with clear proofs (of Allah's Sovereignty), but afterwards lo! many of them became prodigals in the earth"
]
],
"muslim": [
{
"w": "Ibn Kathir on 5:27–31",
"t": "I have not read the commentary text for this verse.",
"s": "verify"
},
{
"w": "Scholar Joseph Witztum (Princeton, 2011), as reported on WikiIslam",
"t": "Argues the Qur’an’s version is earlier than the Jewish sources, and that Pirke de-Rabbi Eliezer is a post-Islamic midrash. I did not read the thesis.",
"s": "secondary"
}
],
"assess": "Genesis has no burial and no raven. In the Jewish sources the story takes two forms: in Pirke de-Rabbi Eliezer it is Adam who learns from a raven, and in Tanḥuma it is Cain who learns from two birds (reported on WikiIslam; verify in the texts). Which came first is disputed. Genesis 4:13 records Cain’s complaint, not repentance, so “became repentant” is a difference. It is judged by Scripture.",
"mss": "Genesis is attested at Qumran, in the SP and in the LXX. I know of no copy with a burial story in Genesis 4 (verify). The Targums add material, and their dates are debated (verify).",
"src": [
"ik531",
"wikiraven",
"sefaria",
"tabarihist"
]
},
{
"id": "goldencalf",
"acct": "aaron",
"title": "The golden calf: Aaron or the Sāmirī",
"type": "Name or identity",
"strength": "Direct conflict",
"tref": "Exodus 32:1–6, 21–24; Deuteronomy 9:20",
"qref": "Q 20:85–97",
"t": "Aaron collects the gold, fashions the calf, builds an altar and proclaims a feast (32:2–5). He says, “I cast it into the fire, and there came out this calf” (32:24). “The Lord was very angry with Aaron” (Deuteronomy 9:20).",
"q": "“As-Sāmirī hath misled them” (20:85). The Sāmirī produces the calf (20:88). Aaron had warned them (20:90).",
"bible": [
[
"Exodus 32:1–6",
"1 And when the people saw that Moses delayed to come down out of the mount, the people gathered themselves together unto Aaron, and said unto him, Up, make us gods, which shall go before us; for as for this Moses, the man that brought us up out of the land of Egypt, we wot not what is become of him. 2 And Aaron said unto them, Break off the golden earrings, which are in the ears of your wives, of your sons, and of your daughters, and bring them unto me. 3 And all the people brake off the golden earrings which were in their ears, and brought them unto Aaron. 4 And he received them at their hand, and fashioned it with a graving tool, after he had made it a molten calf: and they said, These be thy gods, O Israel, which brought thee up out of the land of Egypt. 5 And when Aaron saw it, he built an altar before it; and Aaron made proclamation, and said, To morrow is a feast to the Lord. 6 And they rose up early on the morrow, and offered burnt offerings, and brought peace offerings; and the people sat down to eat and to drink, and rose up to play."
],
[
"Exodus 32:21–24",
"21 And Moses said unto Aaron, What did this people unto thee, that thou hast brought so great a sin upon them? 22 And Aaron said, Let not the anger of my lord wax hot: thou knowest the people, that they are set on mischief. 23 For they said unto me, Make us gods, which shall go before us: for as for this Moses, the man that brought us up out of the land of Egypt, we wot not what is become of him. 24 And I said unto them, Whosoever hath any gold, let them break it off. So they gave it me: then I cast it into the fire, and there came out this calf."
],
[
"Deuteronomy 9:20",
"20 And the Lord was very angry with Aaron to have destroyed him: and I prayed for Aaron also the same time."
]
],
"quran": [
[
"Q 20:85–92",
"85 He said: Lo! We have tried thy folk in thine absence, and As-Samiri hath misled them 86 Then Moses went back unto his folk, angry and sad. He said: O my people! Hath not your Lord promised you a fair promise? Did the time appointed then appear too long for you, or did ye wish that wrath from your Lord should come upon you, that ye broke tryst with me 87 They said: We broke not tryst with thee of our own will, but we were laden with burdens of ornaments of the folk, then cast them (in the fire), for thus As-Samiri proposed 88 Then he produced for them a calf, of saffron hue, which gave forth a lowing sound. And they cried: This is your god and the god of Moses, but he hath forgotten 89 See they not, then, that it returneth no saying unto them and possesseth for them neither hurt nor use 90 And Aaron indeed had told them beforehand: O my people! Ye are but being seduced therewith, for lo! your Lord is the Beneficent, so follow me and obey my order 91 They said: We shall by no means cease to be its votaries till Moses return unto us 92 He (Moses) said: O Aaron! What held thee back when thou didst see them gone astray"
]
],
"muslim": [
{
"w": "Aaron’s part",
"t": "The Qur’an clears Aaron of making the calf, and takes the Sāmirī to be the maker (20:85–90).",
"s": "checked"
},
{
"w": "The name “Sāmirī”",
"t": "Samaria was named in the time of Omri (1 Kings 16:24), long after Moses. Some Muslim writers say “Sāmirī” need not mean a Samaritan and may be a tribal or personal name. I have not checked who argues it.",
"s": "verify"
}
],
"assess": "This is a direct conflict over who made the calf. Exodus puts it on Aaron, and the Lord’s anger with him is recorded in Deuteronomy 9:20. The name “Sāmirī” for a man at Sinai is also an anachronism if it means a man of Samaria (1 Kings 16:24). It is judged by Scripture.",
"mss": "Exodus is attested at Qumran (including the paleo-Hebrew scroll 4QpaleoExodm), in the SP and in the LXX; the SP and LXX have longer readings in the plague narratives, but the same plagues (verify in the apparatus).",
"src": [
"sefaria"
]
},
{
"id": "solomonjinn",
"acct": "solomon",
"title": "Solomon, the jinn and the wind",
"type": "Addition",
"strength": "Addition only",
"tref": "1 Kings 4:29–34; 5:13–18",
"qref": "Q 27:17–18; 34:12–14; 38:36–38",
"t": "Solomon has wisdom beyond all the east and Egypt (4:29–30). He raises a levy of Israelites and works with Hiram’s builders for the temple (5:13–18). No jinn and no wind are mentioned.",
"q": "“Unto Solomon (We gave) the wind… and (We gave him) certain of the jinn who worked before him” (34:12). His armies of jinn, humankind and birds are gathered (27:17). The jinn did not know of his death until a creature gnawed his staff (34:14).",
"bible": [
[
"1 Kings 4:29–30",
"29 And God gave Solomon wisdom and understanding exceeding much, and largeness of heart, even as the sand that is on the sea shore. 30 And Solomon’s wisdom excelled the wisdom of all the children of the east country, and all the wisdom of Egypt."
],
[
"1 Kings 5:13–18",
"13 And king Solomon raised a levy out of all Israel; and the levy was thirty thousand men. 14 And he sent them to Lebanon, ten thousand a month by courses: a month they were in Lebanon, and two months at home: and Adoniram was over the levy. 15 And Solomon had threescore and ten thousand that bare burdens, and fourscore thousand hewers in the mountains; 16 Beside the chief of Solomon’s officers which were over the work, three thousand and three hundred, which ruled over the people that wrought in the work. 17 And the king commanded, and they brought great stones, costly stones, and hewed stones, to lay the foundation of the house. 18 And Solomon’s builders and Hiram’s builders did hew them, and the stonesquarers: so they prepared timber and stones to build the house."
]
],
"quran": [
[
"Q 34:12–14",
"12 And unto Solomon (We gave) the wind, whereof the morning course was a month's journey and the evening course a month's journey, and We caused the fount of copper to gush forth for him, and (We gave him) certain of the jinn who worked before him by permission of his Lord. And such of them as deviated from Our command, them We caused to taste the punishment of flaming Fire 13 They made for him what he willed: synagogues and statues, basins like wells and boilers built into the ground. Give thanks, O House of David! Few of My bondmen are thankful 14 And when We decreed death for him, nothing showed his death to them save a creeping creature of the earth which gnawed away his staff. And when he fell the jinn saw clearly how, if they had known the Unseen, they would not have continued in despised toil"
],
[
"Q 27:17–18",
"17 And there were gathered together unto Solomon his armies of the jinn and humankind, and of the birds, and they were set in battle order 18 Till, when they reached the Valley of the Ants, an ant exclaimed: O ants! Enter your dwellings lest Solomon and his armies crush you, unperceiving"
]
],
"muslim": [
{
"w": "Common Muslim reading",
"t": "The jinn worked by Allah’s permission, in addition to what Scripture records. I have not tied this to a named commentator.",
"s": "verify"
},
{
"w": "Late-antique Jewish texts",
"t": "The Testament of Solomon (a Jewish or Christian text of uncertain date) tells of demons building the temple. Whether it is a source or a parallel is disputed (verify).",
"s": "verify"
}
],
"assess": "Scripture says the temple was built by a levy of Israelites and Hiram’s craftsmen (1 Kings 5:13–18). The Qur’an adds jinn labour and the wind. This is an addition and not a reversal. Solomon’s fall into idolatry is covered on the main Solomon account.",
"mss": "1 Kings differs between the Hebrew and the Septuagint in order and wording in places (verify for chapter 5). Neither has jinn.",
"src": [
"sefaria"
]
},
{
"id": "maryaaron",
"acct": "mary",
"title": "Mary, “sister of Aaron”, and Miriam",
"type": "Chronology",
"strength": "Depends on reading",
"tref": "Numbers 26:59; Exodus 15:20; Luke 1:5, 36",
"qref": "Q 19:27–28; 3:35–36; 66:12",
"t": "Amram’s wife Jochebed bore Aaron, Moses and “Miriam their sister” (Numbers 26:59). Miriam “the sister of Aaron” leads the women (Exodus 15:20). Luke 1:5 says Elizabeth was “of the daughters of Aaron”, and 1:36 calls her Mary’s cousin.",
"q": "The people say to Mary, “O sister of Aaron! Thy father was not a wicked man nor was thy mother a harlot” (19:28). She is “Mary, daughter of ʿImrān” (66:12) and her mother is the wife of ʿImrān (3:35–36).",
"bible": [
[
"Numbers 26:59",
"59 And the name of Amram’s wife was Jochebed, the daughter of Levi, whom her mother bare to Levi in Egypt: and she bare unto Amram Aaron and Moses, and Miriam their sister."
],
[
"Exodus 15:20",
"20 And Miriam the prophetess, the sister of Aaron, took a timbrel in her hand; and all the women went out after her with timbrels and with dances."
],
[
"Luke 1:5",
"5 There was in the days of Herod, the king of Judea, a certain priest named Zacharias, of the course of Abia: and his wife was of the daughters of Aaron, and her name was Elisabeth."
],
[
"Luke 1:36",
"36 And, behold, thy cousin Elisabeth, she hath also conceived a son in her old age: and this is the sixth month with her, who was called barren."
]
],
"quran": [
[
"Q 19:27–28",
"27 Then she brought him to her own folk, carrying him. They said: O Mary! Thou hast come with an amazing thing 28 O sister of Aaron! Thy father was not a wicked man nor was thy mother a harlot"
],
[
"Q 3:35–36",
"35 (Remember) when the wife of 'Imran said: My Lord! I have vowed unto Thee that which is in my belly as a consecrated (offering). Accept it from me. Lo! Thou, only Thou, art the Hearer, the Knower 36 And when she was delivered she said: My Lord! Lo! I am delivered of a female - Allah knew best of what she was delivered - the male is not as the female; and lo! I have named her Mary, and lo! I crave Thy protection for her and for her offspring from Satan the outcast"
],
[
"Q 66:12",
"12 And Mary, daughter of 'Imran, whose body was chaste, therefor We breathed therein something of Our Spirit. And she put faith in the words of her Lord and His scriptures, and was of the obedient"
]
],
"muslim": [
{
"w": "Hadith (Ṣaḥīḥ Muslim)",
"t": "The Prophet is said to have answered that people named their children after prophets and righteous men before them. I have not opened the hadith to check the number or wording.",
"s": "verify"
},
{
"w": "“Sister” as descendant",
"t": "Some take “sister of Aaron” to mean one of Aaron’s line, or one who resembled him in piety. I have not tied this to a named commentator.",
"s": "verify"
}
],
"assess": "If “sister of Aaron” and “daughter of ʿImrān” point to the Exodus family, more than a thousand years separate Miriam from Jesus’ mother. If they mean descent or likeness, there is no conflict, and Luke 1:5 supports the idea of a family of Aaron’s line. So the verdict depends on the reading, and the reading must be argued from the Arabic and the commentaries, not assumed. See also the main Mary account.",
"mss": "Numbers 26 and Exodus 15 are attested at Qumran, in the SP and in the LXX with the same names (verify).",
"src": [
"sunnah"
]
}
];
export const contraTypes:string[]=["Addition", "Chronology", "Count", "Detail or event", "Name or identity", "Place"];
