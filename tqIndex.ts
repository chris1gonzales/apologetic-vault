export type Row={id:string,book:string,subject:string,torah:string,quran:string,status:'shared'|'differs'|'thematic'|'absent',account:string,note:string};
export const rows:Row[]=[
{
"id": "p1",
"book": "Genesis",
"subject": "Creation of heaven and earth",
"torah": "Genesis 1:1–31",
"quran": "7:54; 21:30–33",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p2",
"book": "Genesis",
"subject": "Six days of creation",
"torah": "Genesis 1:1–31",
"quran": "10:3; 50:38",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p3",
"book": "Genesis",
"subject": "Creation of Adam",
"torah": "Genesis 2:7",
"quran": "15:26–29; 38:71–72",
"status": "shared",
"account": "adam",
"note": ""
},
{
"id": "p4",
"book": "Genesis",
"subject": "Creation of woman",
"torah": "Genesis 2:18–24",
"quran": "4:1; 7:189",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p5",
"book": "Genesis",
"subject": "Garden of Eden",
"torah": "Genesis 2:8–17",
"quran": "2:35; 7:19",
"status": "shared",
"account": "adam",
"note": ""
},
{
"id": "p6",
"book": "Genesis",
"subject": "Temptation and fall",
"torah": "Genesis 3:1–24",
"quran": "2:35–39; 7:19–27",
"status": "differs",
"account": "adam",
"note": "See the Adam account for the differences (the serpent, forgiveness, inherited guilt)."
},
{
"id": "p7",
"book": "Genesis",
"subject": "Cain and Abel",
"torah": "Genesis 4:1–16",
"quran": "5:27–31",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p8",
"book": "Genesis",
"subject": "Noah and the flood",
"torah": "Genesis 6–9",
"quran": "11:25–49; 71:1–28",
"status": "differs",
"account": "noah",
"note": "In Q 11:42–43 a son stays out of the ark. Genesis 7:7, 13 has the whole family enter."
},
{
"id": "p9",
"book": "Genesis",
"subject": "Abraham's calling",
"torah": "Genesis 12:1–9",
"quran": "21:51–73; 29:26–27",
"status": "shared",
"account": "abraham",
"note": ""
},
{
"id": "p10",
"book": "Genesis",
"subject": "Abraham's covenant",
"torah": "Genesis 15; 17",
"quran": "2:124–129",
"status": "differs",
"account": "abraham",
"note": "Genesis 17:19–21 makes the covenant with Isaac. Q 2:124–129 has Abraham and Ishmael raise the sacred house."
},
{
"id": "p11",
"book": "Genesis",
"subject": "Birth of Ishmael",
"torah": "Genesis 16",
"quran": "14:39",
"status": "thematic",
"account": "",
"note": "Q 14:39 thanks God for Ishmael and Isaac in old age. The Qur’an does not tell Hagar’s story from Genesis 16."
},
{
"id": "p12",
"book": "Genesis",
"subject": "Promise of Isaac",
"torah": "Genesis 17:15–21; 18:9–15",
"quran": "11:69–73",
"status": "shared",
"account": "isaac",
"note": ""
},
{
"id": "p13",
"book": "Genesis",
"subject": "Sodom and Gomorrah",
"torah": "Genesis 19",
"quran": "7:80–84; 11:77–83",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p14",
"book": "Genesis",
"subject": "Sacrifice of Abraham's son",
"torah": "Genesis 22:1–19",
"quran": "37:100–113",
"status": "differs",
"account": "isaac",
"note": "Genesis 22:2 names Isaac. Q 37 does not name the son."
},
{
"id": "p15",
"book": "Genesis",
"subject": "Jacob's descendants",
"torah": "Genesis 29–30; 35",
"quran": "2:132–133; 12:6",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p16",
"book": "Genesis",
"subject": "Joseph and his brothers",
"torah": "Genesis 37",
"quran": "12:4–22",
"status": "shared",
"account": "joseph",
"note": ""
},
{
"id": "p17",
"book": "Genesis",
"subject": "Joseph and Potiphar's wife",
"torah": "Genesis 39",
"quran": "12:23–35",
"status": "shared",
"account": "joseph",
"note": ""
},
{
"id": "p18",
"book": "Genesis",
"subject": "Joseph's imprisonment",
"torah": "Genesis 40",
"quran": "12:36–42",
"status": "shared",
"account": "joseph",
"note": ""
},
{
"id": "p19",
"book": "Genesis",
"subject": "Pharaoh's dreams",
"torah": "Genesis 41",
"quran": "12:43–49",
"status": "shared",
"account": "joseph",
"note": ""
},
{
"id": "p20",
"book": "Genesis",
"subject": "Joseph's reconciliation",
"torah": "Genesis 42–46",
"quran": "12:58–100",
"status": "shared",
"account": "joseph",
"note": ""
},
{
"id": "p21",
"book": "Exodus",
"subject": "Israel enslaved in Egypt",
"torah": "Exodus 1:8–14",
"quran": "28:4",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p22",
"book": "Exodus",
"subject": "Killing of Hebrew male children",
"torah": "Exodus 1:15–22",
"quran": "28:4; 2:49",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p23",
"book": "Exodus",
"subject": "Moses placed in the river",
"torah": "Exodus 2:1–10",
"quran": "20:37–40; 28:7–13",
"status": "differs",
"account": "mosesmother",
"note": "Exodus 2:5 says Pharaoh’s daughter. Q 28:9 says Pharaoh’s wife."
},
{
"id": "p24",
"book": "Exodus",
"subject": "Moses kills an Egyptian",
"torah": "Exodus 2:11–15",
"quran": "28:15–21",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p25",
"book": "Exodus",
"subject": "Moses flees to Midian",
"torah": "Exodus 2:15–22",
"quran": "28:22–28",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p26",
"book": "Exodus",
"subject": "The burning bush",
"torah": "Exodus 3:1–22",
"quran": "20:9–36; 27:7–12",
"status": "shared",
"account": "sinai",
"note": ""
},
{
"id": "p27",
"book": "Exodus",
"subject": "Moses' staff becomes a serpent",
"torah": "Exodus 4:1–5",
"quran": "7:107; 20:17–21",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p28",
"book": "Exodus",
"subject": "Moses' hand becomes white",
"torah": "Exodus 4:6–7",
"quran": "20:22; 28:32",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p29",
"book": "Exodus",
"subject": "Moses and Aaron before Pharaoh",
"torah": "Exodus 5–7",
"quran": "20:43–56",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p30",
"book": "Exodus",
"subject": "Egyptian plagues",
"torah": "Exodus 7–12",
"quran": "7:130–136",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p31",
"book": "Exodus",
"subject": "Parting of the sea",
"torah": "Exodus 14:21–29",
"quran": "26:60–66",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p32",
"book": "Exodus",
"subject": "Pharaoh's drowning",
"torah": "Exodus 14:26–28",
"quran": "10:90–92",
"status": "differs",
"account": "moses",
"note": "Q 10:90–92 adds Pharaoh’s confession and the preserving of his body. Exodus records neither."
},
{
"id": "p33",
"book": "Exodus",
"subject": "Manna and quail",
"torah": "Exodus 16",
"quran": "2:57; 7:160",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p34",
"book": "Exodus",
"subject": "Water from the rock",
"torah": "Exodus 17:1–7",
"quran": "2:60",
"status": "thematic",
"account": "",
"note": "The Qur’an follows Exodus 17 (2:60). Numbers 20, where Moses strikes the rock and is barred from the land, has no Qur’anic counterpart."
},
{
"id": "p35",
"book": "Exodus",
"subject": "Moses on Mount Sinai",
"torah": "Exodus 19; 24",
"quran": "7:142–145",
"status": "shared",
"account": "sinai",
"note": ""
},
{
"id": "p36",
"book": "Exodus",
"subject": "Golden calf",
"torah": "Exodus 32",
"quran": "7:148–154; 20:83–98",
"status": "differs",
"account": "aaron",
"note": "Exodus 32:4 has Aaron make the calf. Q 20:85, 95 has al-Sāmirī make it."
},
{
"id": "p37",
"book": "Exodus",
"subject": "Moses requests to see God",
"torah": "Exodus 33:18–23",
"quran": "7:143",
"status": "differs",
"account": "",
"note": "In Exodus 33 God hides Moses in the rock and passes by. In Q 7:143 the mountain is turned to dust and Moses falls senseless."
},
{
"id": "p38",
"book": "Leviticus",
"subject": "Animal sacrifices",
"torah": "Leviticus 1–7",
"quran": "22:34–37",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p39",
"book": "Leviticus",
"subject": "Prohibition against pork",
"torah": "Leviticus 11:7–8",
"quran": "2:173; 5:3",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p40",
"book": "Leviticus",
"subject": "Prohibition against consuming blood",
"torah": "Leviticus 17:10–14",
"quran": "6:145",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p41",
"book": "Leviticus",
"subject": "Prohibition against incest",
"torah": "Leviticus 18:6–18",
"quran": "4:23",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p42",
"book": "Leviticus",
"subject": "Prohibition against adultery",
"torah": "Leviticus 20:10",
"quran": "17:32; 24:2",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p43",
"book": "Leviticus",
"subject": "Prohibition against homosexual acts",
"torah": "Leviticus 18:22",
"quran": "7:80–81",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p44",
"book": "Leviticus",
"subject": "Retaliation for bodily injury",
"torah": "Leviticus 24:19–20",
"quran": "5:45",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p45",
"book": "Leviticus",
"subject": "Care for the poor",
"torah": "Leviticus 19:9–10",
"quran": "2:177; 9:60",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p46",
"book": "Leviticus",
"subject": "Just weights and measurements",
"torah": "Leviticus 19:35–36",
"quran": "17:35; 83:1–3",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p47",
"book": "Leviticus",
"subject": "Annual Day of Atonement",
"torah": "Leviticus 16",
"quran": "",
"status": "absent",
"account": "",
"note": ""
},
{
"id": "p48",
"book": "Leviticus",
"subject": "Levitical priesthood",
"torah": "Leviticus 8–9",
"quran": "",
"status": "absent",
"account": "",
"note": ""
},
{
"id": "p49",
"book": "Numbers",
"subject": "Israel refuses to enter the promised land",
"torah": "Numbers 13–14",
"quran": "5:20–26",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p50",
"book": "Numbers",
"subject": "Forty years in the wilderness",
"torah": "Numbers 14:33–34",
"quran": "5:26",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p51",
"book": "Numbers",
"subject": "Korah's rebellion",
"torah": "Numbers 16",
"quran": "28:76–82",
"status": "thematic",
"account": "",
"note": "The Qur’an judges Qārūn for wealth and pride (28:76–82). Numbers 16 is a rebellion against Moses and Aaron’s priesthood."
},
{
"id": "p52",
"book": "Numbers",
"subject": "Water from the rock",
"torah": "Numbers 20:1–13",
"quran": "7:160",
"status": "thematic",
"account": "",
"note": "The Qur’an follows Exodus 17 (2:60). Numbers 20, where Moses strikes the rock and is barred from the land, has no Qur’anic counterpart."
},
{
"id": "p53",
"book": "Numbers",
"subject": "Balaam",
"torah": "Numbers 22–24",
"quran": "7:175–176 (traditional association; unnamed)",
"status": "thematic",
"account": "",
"note": "Q 7:175–176 describes an unnamed man who was given signs and turned away. Linking him to Balaam is a later tradition, not stated in the Qur’an."
},
{
"id": "p54",
"book": "Numbers",
"subject": "The red heifer",
"torah": "Numbers 19",
"quran": "2:67–73 (possible thematic parallel, not the same stated purpose)",
"status": "thematic",
"account": "",
"note": "Q 2:67–73 is about a cow slain to identify a murderer (compare Deuteronomy 21:1–9). Numbers 19 is a purification ritual."
},
{
"id": "p55",
"book": "Numbers",
"subject": "Bronze serpent",
"torah": "Numbers 21:4–9",
"quran": "",
"status": "absent",
"account": "",
"note": ""
},
{
"id": "p56",
"book": "Deuteronomy",
"subject": "God is one",
"torah": "Deuteronomy 6:4",
"quran": "112:1–4",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p57",
"book": "Deuteronomy",
"subject": "Prohibition against idolatry",
"torah": "Deuteronomy 5:7–9",
"quran": "4:36; 17:22",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p58",
"book": "Deuteronomy",
"subject": "Honoring parents",
"torah": "Deuteronomy 5:16",
"quran": "17:23–24",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p59",
"book": "Deuteronomy",
"subject": "Prohibition against murder",
"torah": "Deuteronomy 5:17",
"quran": "6:151; 17:33",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p60",
"book": "Deuteronomy",
"subject": "Prohibition against theft",
"torah": "Deuteronomy 5:19",
"quran": "5:38",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p61",
"book": "Deuteronomy",
"subject": "Prohibition against false testimony",
"torah": "Deuteronomy 5:20",
"quran": "22:30; 25:72",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p62",
"book": "Deuteronomy",
"subject": "Sabbath observance",
"torah": "Deuteronomy 5:12–15",
"quran": "4:154; 16:124",
"status": "differs",
"account": "",
"note": "The Qur’an says the Sabbath was laid on those who differed about it (16:124) and rebukes Israel for breaking it (4:154). It does not command it for Muslims."
},
{
"id": "p63",
"book": "Deuteronomy",
"subject": "False prophets",
"torah": "Deuteronomy 13:1–5; 18:20–22",
"quran": "6:93",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p64",
"book": "Deuteronomy",
"subject": "Israel as a chosen people",
"torah": "Deuteronomy 7:6–8",
"quran": "2:47; 44:32",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p65",
"book": "Deuteronomy",
"subject": "Moses receives divine revelation",
"torah": "Deuteronomy 5:22",
"quran": "5:44; 7:145",
"status": "shared",
"account": "",
"note": ""
},
{
"id": "p66",
"book": "Deuteronomy",
"subject": "Circumcision of the heart",
"torah": "Deuteronomy 10:16; 30:6",
"quran": "",
"status": "absent",
"account": "",
"note": ""
}
];
