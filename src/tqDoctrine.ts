export type Doc={topic:string,torah:string,quran:string,reformed:string};
export const doctrines:Doc[]=[
{topic:'Image of God',torah:'Humanity is created in God’s image (Genesis 1:26–27).',quran:'Humanity is honoured by Allah (Q 17:70), with no image-of-God statement. Q 42:11 says nothing is like Him.',reformed:'Man is made in God’s image with knowledge, righteousness and holiness (Colossians 3:10; Ephesians 4:24; 1689 4.2). That image is why murder is forbidden (Genesis 9:6).'},
{topic:'Human sin',torah:'Adam’s disobedience affects humanity and creation (Genesis 3; Romans 5:12–19).',quran:'Each soul bears only its own load (Q 6:164). Adam repents and is forgiven (Q 2:37).',reformed:'Adam stood for all his descendants and his sin is counted to them (Romans 5:12–19; 1689 6.1–3). Each person also sins personally (Romans 3:23).'},
{topic:'Covenant',torah:'God makes covenants with Noah, Abraham and Israel (Genesis 9; 15; 17; Exodus 19:5).',quran:'Allah takes covenants with prophets and peoples (for example Q 2:63; 33:7).',reformed:'The covenants are one plan of grace that is fulfilled in Christ (Galatians 3:16–17; Hebrews 8; 1689 7.1–3).'},
{topic:'Blood atonement',torah:'“The life of the flesh is in the blood… it is the blood that maketh an atonement” (Leviticus 17:11).',quran:'The flesh and blood of the sacrifices do not reach Allah; devotion does (Q 22:37).',reformed:'The sacrifices pointed to Christ, whose blood alone takes away sin (Hebrews 9:22; 10:4, 10; 1689 8.5).'},
{topic:'Priesthood',torah:'An Aaronic priesthood offers the sacrifices (Leviticus 8–9).',quran:'No sacrificial priesthood.',reformed:'Christ is the final priest after the order of Melchizedek (Psalm 110:4; Hebrews 7–10; 1689 8.1, 8.10).'},
{topic:'Mediation',torah:'Moses and the priests mediate the covenant (Exodus 20:19; Leviticus 16).',quran:'Intercession is only by Allah’s leave (Q 2:255).',reformed:'“One mediator between God and men, the man Christ Jesus” (1 Timothy 2:5; 1689 8.1, 8.6).'},
{topic:'Sabbath',torah:'Seventh-day rest is a sign for Israel (Exodus 31:13–17).',quran:'The Sabbath is laid on earlier communities (Q 16:124). Friday congregational prayer is commanded (Q 62:9).',reformed:'The Sabbath was made for man and is kept now on the Lord’s Day (Mark 2:27–28; Hebrews 4:9–10; 1689 22.7–8).'},
{topic:'Repentance',torah:'Repentance, covenant mercy and prescribed atonement (Leviticus 16; Psalm 51).',quran:'Repentance, faith, righteous deeds and divine mercy (Q 39:53–54).',reformed:'Repentance is a saving grace given by God and rests on Christ’s atonement, not on repentance as a work (Acts 11:18; Ephesians 2:8–9; 1689 15.1–2; 11.1).'}];
export type QS={ref:string,says:string,note?:string};
export const qOnScripture:QS[]=[
{ref:'Q 2:41',says:'Confirms what its audience already possesses of Scripture.'},
{ref:'Q 2:44',says:'Rebukes those who read the Scripture yet do not practise it.'},
{ref:'Q 3:3–4',says:'Says Allah revealed the Torah and the Gospel before, as guidance.'},
{ref:'Q 3:93',says:'Tells the Jews to produce the Torah and read it (about food laws).'},
{ref:'Q 5:43',says:'Notes that they have the Torah, in which Allah delivered judgment. This implies a Torah present in Muhammad’s time.',note:'pressure'},
{ref:'Q 5:44',says:'Says the Torah contains guidance and light, and prophets judged by it.'},
{ref:'Q 5:45',says:'Repeats the Torah’s law of a life for a life, an eye for an eye.'},
{ref:'Q 5:46',says:'Says Jesus confirmed the Torah before him.'},
{ref:'Q 5:48',says:'Says the Qur’an confirms earlier Scripture and is a “watcher” over it.'},
{ref:'Q 5:68',says:'Tells the People of the Scripture they have nothing until they observe the Torah and the Gospel.',note:'pressure'},
{ref:'Q 10:94',says:'Tells Muhammad, if in doubt, to ask those who read the Scripture before him.',note:'pressure'},
{ref:'Q 21:7',says:'Tells its audience to ask “the followers of the Reminder” if they do not know.'}];
export const qPressure='These verses send the reader to the Torah and the Gospel as they existed in Muhammad’s day. That is hard to square with a claim that those books had already been wholly corrupted. This is the pressure point the manuscript evidence tests: the Dead Sea Scrolls (third century BC to first century AD) and the Septuagint predate Muhammad by centuries. Muslims reply that the verses accuse only some people of distortion (Q 2:75; 4:46; 5:13) or that the Torah the Qur’an means is not the text now in the Jewish canon.';
