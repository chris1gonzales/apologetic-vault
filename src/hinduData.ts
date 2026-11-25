import type {SrcB,Src,Point} from './historyData';
export type {SrcB,Src,Point};
export type Card={id:string,title:string,intro?:string,points:Point[],src:Src[]};
export type Critique={id:string,title:string,hindu:string,hinduB:SrcB,scripture:string[],response:string,src:Src[]};
export type Book={t:string,w:string,u?:string,read:'part'|'no'};
export type Quote={id:string,ref:string,tr:string,quote:string,note:string,b:SrcB,src:Src[]};

const SEP_SHA:Src={t:'Stanford Encyclopedia of Philosophy: Śaṅkara',u:'https://plato.stanford.edu/entries/shankara/',b:'checked',n:'Peer-reviewed, open access.'};
const IEP_UP:Src={t:'Internet Encyclopedia of Philosophy: The Upaniṣads',u:'https://iep.utm.edu/upanisad/',b:'checked',n:'Peer-reviewed, open access.'};
const IEP_RAM:Src={t:'Internet Encyclopedia of Philosophy: Rāmānuja',u:'https://iep.utm.edu/ramanuja/',b:'checked',n:'Peer-reviewed, open access.'};
const IEP_HP:Src={t:'Internet Encyclopedia of Philosophy: Hindu Philosophy (S. Ranganathan)',u:'https://iep.utm.edu/hindu-ph/',b:'checked',n:'Peer-reviewed, open access. Read through the Advaita, Viśiṣṭādvaita, Dvaita and Neo-Hinduism sections.'};
const IEP_SAN:Src={t:'Internet Encyclopedia of Philosophy: Sāṅkhya',u:'https://iep.utm.edu/sankhya/',b:'checked',n:'Peer-reviewed, open access.'};
const IEP_YOGA:Src={t:'Internet Encyclopedia of Philosophy: The Yoga Sūtras of Patañjali (E. Bryant)',u:'https://iep.utm.edu/yoga/',b:'checked',n:'Peer-reviewed, open access. First half read.'};
const IEP_KASH:Src={t:'Internet Encyclopedia of Philosophy: Kashmiri Shaiva Philosophy (D. P. Lawrence)',u:'https://iep.utm.edu/kashmiri/',b:'checked',n:'Peer-reviewed, open access.'};
const SEP_NY:Src={t:'Stanford Encyclopedia of Philosophy: Analytic Philosophy in Early Modern India (Nyāya and Vaiśeṣika)',u:'https://plato.stanford.edu/entries/early-modern-india/',b:'secondary',n:'Peer-reviewed. Seen as excerpts; the dates are from its opening paragraph.'};
const SAET:Src={t:'St Andrews Encyclopaedia of Theology: Bhakti (A. Barua, 2024)',u:'https://www.saet.ac.uk/Hinduism/Bhakti',b:'checked',n:'University-hosted, peer-reviewed. Nearly all read; the closing poem and bibliography were not.'};
const BR_BHAKTI:Src={t:'Britannica: Bhakti',u:'https://www.britannica.com/topic/bhakti',b:'secondary',n:'Reference work, limited use.'};
const BR_PIL:Src={t:'Britannica: Hinduism, rites of passage and pilgrimage',u:'https://www.britannica.com/topic/Hinduism/Pilgrimage',b:'secondary',n:'Reference work, limited use.'};
const BR_DEI:Src={t:'Britannica: Hinduism, deities and worship',u:'https://www.britannica.com/topic/Hinduism/Deities',b:'secondary',n:'Reference work, limited use.'};
const BR_AVA:Src={t:'Britannica: Avatar',u:'https://britannica.com/EBchecked/topic/45474/avatar',b:'secondary',n:'Reference work, limited use.'};
const BR_GITA:Src={t:'Britannica: Bhagavadgita, study and analysis',u:'https://www.britannica.com/topic/Bhagavadgita/Study-and-analysis',b:'secondary',n:'Reference work, limited use.'};
const CAM_KARMA:Src={t:'Cambridge Element: Karma and Rebirth in Hinduism (open access)',u:'https://www.cambridge.org/core/elements/karma-and-rebirth-in-hinduism/93C67F86CB4CA592A37E8BBD96F18018',b:'secondary',n:'University-press series. Seen as excerpts; not read in full.'};
const SEP_PERS:Src={t:'Stanford Encyclopedia of Philosophy: Personhood in Classical Indian Philosophy',u:'https://plato.stanford.edu/entries/personhood-india/',b:'secondary',n:'Seen as an excerpt.'};
const DASG:Src={t:'Dasgupta, A History of Indian Philosophy, vol. 1 (Cambridge, 1922; free at Project Gutenberg)',u:'https://www.gutenberg.org/ebooks/12956',b:'secondary',n:'Chapters on the Upaniṣads and Śaṅkara were read through a summarizing tool. A 1922 work, so used for how the schools argue, not for modern dating.'};
const IEP_MAD:Src={t:'Internet Encyclopedia of Philosophy: Madhva',u:'https://iep.utm.edu/madhva/',b:'secondary',n:'Seen as a search excerpt; the Hindu Philosophy entry above is the page read in full.'};

export const texts:Card[]=[
{id:'sruti',title:'The texts: śruti and smṛti',
intro:'Hindu traditions do not share one canon. What follows is the standard scholarly map, with dates given as ranges and each source named.',
points:[
{x:'The Vedic collections run in four layers: the Saṃhitās (hymns), the Brāhmaṇas (ritual commentary), the Āraṇyakas, and the Upaniṣads at the end. Several schools treat the Vedic Upaniṣads as śruti, timeless revealed knowledge. The Upaniṣads were composed in a ritual setting and begin to ask philosophical questions.',b:'checked'},
{x:'The Hindu Philosophy entry says there is no single philosophical doctrine shared by all Hindus. It defines Hindu philosophy by a textual connection to the Vedas.',b:'checked'},
{x:'Upaniṣad dates by source. Internet Encyclopedia of Philosophy: composed orally, roughly 700–300 BCE, with the early group (Bṛhadāraṇyaka, Chāndogya) at about 700–500 BCE. St Andrews: about 800–200 BCE. Dasgupta: the earliest compiled by 500 BCE. Britannica: 1000–600 BCE.',b:'verify',n:'Four sources, four ranges. The app gives the range and does not pick one.'},
{x:'Gītā dates by source. The Yoga entry gives c. 4th century BCE. The Hindu Philosophy entry says the epics reached final form in the first two centuries CE. Britannica says perhaps the 1st or 2nd century CE. St Andrews says around the turn of the first millennium.',b:'verify',n:'The sources conflict. The app shows a range.'},
{x:'The Upaniṣads lack a single system. Different teachers say different things about the self and ultimate reality, and the diversity reflects competing Vedic schools.',b:'checked'},
{x:'The Bhagavad Gītā is part of the Mahābhārata. It brings together Upaniṣadic teaching and Sāṃkhya-Yoga, and it answers the tension between ritual action and knowledge with the path of devotion.',b:'secondary'},
{x:'The Purāṇas, the two epics (Mahābhārata, Rāmāyaṇa) and the Āgamas are major texts in practice. The Hindu Philosophy entry says the precise dates of the Purāṇas are not known. Rocher and Hazra are cited by a specialist as judging a useful date nearly impossible.',b:'verify',n:'Rocher, The Purāṇas (1986), is the lead and was not read.'},
{x:'Flood’s introduction stresses that Hinduism is better described through ritual and practice, including tantric traditions, than through a list of doctrines. This is why the Practices page matters as much as the doctrine pages.',b:'secondary',n:'From the WorldCat description of Flood, An Introduction to Hinduism (Cambridge, 1996).'}],
src:[IEP_UP,IEP_HP,SAET,BR_GITA,CAM_KARMA]}];

export const primary:Quote[]=[
{id:'tat',ref:'Chāndogya Upaniṣad 6.8.7',tr:'Max Müller, The Upanishads, part 1 (Sacred Books of the East, vol. 1, 1879; public domain)',
quote:'It is the True. It is the Self, and thou, O Śvetaketu, art it.',
note:'The father repeats this refrain to his son Śvetaketu after each illustration (the tree seed, salt in water, the bees’ honey). Müller’s note says “sat” should be read as the True, the highest substance, Brahman. His footnotes lean on Śaṅkara’s commentary, so that note is one tradition’s reading and not the plain text. Rāmānuja and Madhva read “tat tvam asi” differently (see Schools). Chāndogya 6.9.3 states rebirth in the text itself.',b:'checked',
src:[{t:'Müller, The Upanishads, part 1 (SBE 1), contents page',u:'https://www.sacred-texts.com/hin/sbe01/',b:'checked',n:'Public domain. Read at a scan on the Internet Archive; confirm the wording at the page.'},{t:'Internet Archive scan of Müller, The Upanishads',u:'https://archive.org/details/upanishads01ml',b:'checked',n:'Public domain.'},IEP_UP]},
{id:'gita1866',ref:'Bhagavad Gītā 18.66',tr:'K. T. Telang, The Bhagavadgîtâ (Sacred Books of the East, vol. 8, 1882; public domain)',
quote:'Forsaking all duties, come to me as (your) sole refuge.',
note:'Telang continues “I will release you from all sins. Be not grieved.” His footnote on “duties” says duties “of caste or order.” Commentators divide: Śaṅkara reads it as renunciation of action and the devotional schools read it as surrender to Krishna. The St Andrews entry also gives “abandoning all duties [dharma],” the same sense. Elsewhere Telang renders 18.47: “One’s duty, though defective, is better than another’s duty well performed.” The Gītā commands duty and also says to forsake duty, and scholars treat how these fit as an open question.',b:'checked',
src:[{t:'Telang, The Bhagavadgîtâ (SBE 8), contents',u:'https://sacred-texts.com/hin/sbe08/',b:'checked',n:'Public domain. Read at a scan on the Internet Archive; confirm the wording at the page.'},SAET]}];

export const schools:Card[]=[
{id:'darsanas',title:'The six darśanas and the three Vedānta schools',
intro:'Vedānta is one of the six classical systems. The three Vedānta schools below disagree on what the Upaniṣads teach about God, the soul and the world.',
points:[
{x:'The six systems are Nyāya, Vaiśeṣika, Sāṅkhya, Yoga, Pūrvamīmāṃsā and Vedānta. Nyāya, Vaiśeṣika, Mīmāṃsā and Vedānta treat the Vedic Upaniṣads as śruti. Sāṃkhya and Yoga are usually read as supporting the Vedas.',b:'checked'},
{x:'Advaita (Śaṅkara). Reality is brahman, a nondual ground beyond individuality and plurality. The self (ātman) is pure consciousness, numerically identical with brahman. The world is an indeterminable appearance, neither identical with brahman nor a second reality. Ignorance (avidyā) superimposes the self onto the mind and body, and liberation comes from directly recognizing one’s nondual nature.',b:'checked'},
{x:'Advaita teaches two levels: the conventional (vyāvahārika) and the ultimate (pāramārthika). Dasgupta describes the world-appearance as neither fully real nor wholly unreal, like silver mistaken for a shell, and holds that it seems real only while ignorance lasts.',b:'checked'},
{x:'The Hindu Philosophy entry says Śaṅkara held most beliefs about a plurality of objects and persons to be ultimately false, and also that he held a lower personal Brahman and a higher impersonal one. It notes Paul Hacker’s finding that only some works attributed to Śaṅkara are by the commentator on the Brahma Sūtras. Stanford adds that he rarely used the word māyā, that the label māyāvādin misrepresents him, and that later Advaitins developed māyā into a cosmogonic theory whose fit with Śaṅkara is debated.',b:'checked'},
{x:'Śaṅkara’s dates are a range: 788–820 CE (Dasgupta and earlier scholars), about 700–750 CE (Nakamura), late seventh to early eighth century (Potter). The Hindu Philosophy entry places his commentary in the 8th century. Dasgupta says his teacher’s teacher Gauḍapāda, about 780 CE, revived the monism of the Upaniṣads, and dates the Brahma Sūtras tentatively to about the second century BCE.',b:'checked'},
{x:'Bhedābheda. The Hindu Philosophy entry says all the commentaries before Śaṅkara held Bhedābheda, the view that Brahman is both different and not different from creation.',b:'checked'},
{x:'Viśiṣṭādvaita (Rāmānuja). Brahman is Viṣṇu (Nārāyaṇa) with Lakṣmī. Persons and things make up brahman’s body, and brahman stands to them as a soul to its body. Souls are real and eternal but not omniscient or all-powerful. Past karma clouds our nature, and the way out is bhakti joined with karma yoga, duty done without attachment to results. Rāmānuja insists that dharma is never abandoned, unlike Śaṅkara.',b:'checked'},
{x:'Rāmānuja rejects creation out of nothing. He argues that pure undifferentiated consciousness is impossible, and that ignorance presupposes an individual who is ignorant, so Advaita cannot treat individuality as mere māyā. His dates are traditionally 1017–1137 CE, and recent scholarship gives 1077–1157 CE.',b:'checked'},
{x:'Dvaita (Madhva). Brahman is the personal God Viṣṇu. The system teaches fivefold difference: between souls and God, souls and souls, matter and God, matter and matter, and matter and souls. Souls fall into an eternal hierarchy, those in the lowest hells are eternally damned, and whether one is liberated is at Brahman’s discretion, pleased most by bhakti. Madhva calls his system tattvavāda, the realist view, and the name “dualism” is thought misleading. He reads “tat tvam asi” as “you are not that,” and his dates are given as 1238–1317 or c. 1199–1278, with the commentary dated to the 13th century.',b:'checked',n:'Read at the Hindu Philosophy entry and the St Andrews entry. The date is a range.'}],
src:[IEP_HP,SEP_SHA,IEP_RAM,IEP_UP,DASG,SAET,IEP_MAD]},
{id:'classical',title:'The other classical systems',
points:[
{x:'Sāṅkhya is one of the major orthodox schools and is atheistic. It teaches two eternal, independent kinds of entity: Nature (prakṛti), which is single, and persons (puruṣas), which are many. Its classical text is Īśvarakṛṣṇa’s Sāṅkhya-Kārikā, seventy-two stanzas, from about 350 CE. Liberation comes by realizing the difference between Nature and persons. The entry notes the school is silent about the Vedas, the Brahmins and caste.',b:'checked',n:'The Hindu Philosophy entry puts the Kārikā in the 4th century CE. Another published sourcebook gives c. 350–450 CE.'},
{x:'Yoga takes over Sāṅkhya’s dualism and adds a method and a theistic element, a special puruṣa called Īśvara. The aim is kaivalya, “aloneness,” the isolation of the puruṣa from Nature. The Yoga Sūtras are dated to roughly the 1st or 2nd century CE and no later than the 5th, and the Hindu Philosophy entry puts Patañjali around the 3rd. Posture takes only three brief sūtras, and the entry calls the modern emphasis on it a Western phenomenon.',b:'checked',n:'Dates are a range. Vyāsa’s commentary, the first extant, is dated about the 4th or 5th century.'},
{x:'Nyāya accepts four sources of knowledge: perception, inference, analogy and reliable testimony. It argues that God’s existence can be known from creation, since an artifact has a maker. The Vedānta schools say reason alone cannot reach God. Vaiśeṣika lists six categories, from substance to inherence, and is a thoroughgoing realism. The two merged into Navya-Nyāya around the 11th or 12th century.',b:'checked'},
{x:'Nyāya and Vaiśeṣika dates. Stanford gives the Nyāya-sūtra at c. 100 CE and the Vaiśeṣika-sūtra at c. 100 BCE. The Hindu Philosophy entry places Gautama in the 2nd century CE and Kaṇāda in the 1st century CE.',b:'verify',n:'The two sources differ on the Vaiśeṣika date.'},
{x:'Pūrvamīmāṃsā centers on dharma as Vedic injunction, in Jaimini’s Mīmāṃsā Sūtra (1st century CE). The early school did not treat liberation as a goal, and Kumārila (7th century) was the first to. It holds the Vedas to be eternal and authorless, because words are eternal. Nyāya and the theistic Vedānta schools make God the Vedas’ author.',b:'checked'},
{x:'On reason and God. All three major Vedānta commentators accept the Vedas as the ultimate source of knowledge of Brahman, and all three say reason alone cannot prove God.',b:'checked'}],
src:[IEP_HP,IEP_SAN,IEP_YOGA,SEP_NY]},
{id:'saiva',title:'Śaiva, Śākta and tantric traditions',
points:[
{x:'“Kashmiri Shaivism” is a group of monistic and tantric traditions that flourished in Kashmir from the late first millennium CE into the early second. They must be distinguished from the dualistic Śaiva Siddhānta. The central philosophy is Pratyabhijñā, “Recognition,” of Utpaladeva (c. 925–975 CE) and Abhinavagupta (c. 975–1025 CE). Its central claim is the recognition “I am Shiva.”',b:'checked'},
{x:'In Śākta tantrism Shakti as the Goddess is herself the ultimate deity. In monistic Kashmiri Shaivism she is folded into Shiva’s nature. Tantra is distinguished by the pursuit of power in this entry’s account.',b:'checked'},
{x:'Śaiva Siddhānta. Its scriptures are the twenty-eight Śaiva Āgamas and the twelve Tirumuṟai, with poets such as Appar (c. 600 CE), Campantar (c. 680) and Māṇikkavācakar (c. 900). It holds that Shiva (pati), the self (paśu) and the fetters (pāśa) are distinct. The path begins with initiation (dīkṣā) from a teacher, and the liberated self is like Shiva but stays distinct from him.',b:'checked'},
{x:'A scholar of Śaivism (Alexis Sanderson) puts the main body of the early Tantras between about 400 and 800 CE, says a Śaiva may worship the Goddess instead of Śiva, and warns that tantrics were not rebels against ritual but “super-ritualists.” Śaiva Siddhānta is described as the more restrained branch. Other cults described there include transgressive rites, which this page does not detail.',b:'verify',n:'From one chapter, read in part from a copy whose source and title I could not confirm. Not linked.'},
{x:'Śākta traditions (the Goddess as supreme) are known in outline only. No scholarly work on the Goddess traditions was read for this page. Kinsley, Hindu Goddesses, and Coburn on the Devī-māhātmya are the leads.',b:'verify'}],
src:[IEP_KASH,SAET]},
{id:'vaishnava',title:'Devotional schools and later movements',
points:[
{x:'Caitanya (Gauḍīya Vaiṣṇava, 1486–1534) teaches that ultimate reality is the union of Krishna and Rādhā, with the world related to them by nondifference and difference (bhedābheda). ISKCON is part of this lineage.',b:'checked'},
{x:'Vallabha (1479–1531) teaches pure nondualism (śuddhādvaita). Liberation is through grace, called nourishment (puṣṭi), independent of human means.',b:'checked'},
{x:'Vīraśaiva or Liṅgāyat (Basava, 1106–1167) is devotion to Shiva in Kannada songs that criticize social hierarchy.',b:'checked'},
{x:'The Sants (Kabīr, Nānak, Ravidās) praise a formless God, reject Vedic authority and Brahmanical privilege, and do not worship Viṣṇu’s avatars.',b:'checked'},
{x:'Neo-Hinduism. The Hindu Philosophy entry traces the idea that all religions lead to the same goal to Vivekānanda and Radhakrishnan, who identify Hinduism with Vedānta. It calls this a modern reformulation of Advaita, and says critics call it bad history, since Rāmānuja and Madhva would reject it.',b:'checked'}],
src:[SAET,IEP_HP]}];

export const doctrines:Card[]=[
{id:'doctrines',title:'Core doctrines',
intro:'Each doctrine is stated the way its own school states it. Do not treat “Hinduism” as one position.',
points:[
{x:'Ātman and brahman. The Upaniṣads treat both at length. Ātman moves from meaning breath or body to an essence or consciousness. Brahman moves from the power of speech to the underlying reality. Śāṇḍilya equates the two (Chāndogya 3.14.4), but other teachers do not. Dasgupta says the central teaching is their identity, and that Brahman is described by negation, “neti neti.”',b:'checked'},
{x:'Karma began as ritual action and was extended to moral cause and effect in later Upaniṣads. Yājñavalkya holds that present actions shape future outcomes but are not fully fixed. Dasgupta traces rebirth mainly to desire, with karma linking desire to results. Karma and rebirth go together in Hindu traditions, though they could be separated in theory.',b:'checked'},
{x:'Saṃsāra, the cycle of birth, death and rebirth, appears explicitly only in later Upaniṣads (Kaṭha, Śvetāśvatara). Mokṣa also appears explicitly only in later texts, and early texts often present immortality as the main aim. Dasgupta says liberation is realizing one’s nature as Brahman, not a new acquisition.',b:'checked'},
{x:'The four aims of life are dharma, artha, kāma and mokṣa (the puruṣārthas). The Hindu Philosophy entry lists them and notes that early Pūrvamīmāṃsā does not treat liberation as an end.',b:'checked'},
{x:'Most classical Indian philosophers hold that living beings are caught in saṃsāra, which is marked by suffering, and that the highest goal is liberation.',b:'secondary'},
{x:'Hindu views of karma and rebirth vary by text, tradition and figure, and a sweeping generalization about “the” Hindu doctrine misleads.',b:'secondary',n:'From a Cambridge University Press Element, read as excerpts.'},
{x:'Avatāra means a “descent” of a deity into the world and usually refers to the ten appearances of Viṣṇu (the daśāvatāra). The list varies by region, and the Bhāgavata Purāṇa lists twenty-four while noting Viṣṇu’s forms are innumerable.',b:'secondary'},
{x:'The Gītā names three paths: karma yoga, jñāna yoga and bhakti yoga. It resolves the tension between ritual action and knowledge with devotion, since one need not renounce action, only desire for its results.',b:'checked'},
{x:'For Rāmānuja, bhakti is joined with disinterested action and is itself a direct, perception-like knowledge of brahman. His heirs divide over grace: the Northern school holds that grace depends on effort, and the Southern that it is freely given.',b:'checked'}],
src:[IEP_UP,IEP_RAM,IEP_HP,DASG,BR_AVA,CAM_KARMA,SEP_PERS]}];

export const bhakti:Card[]=[
{id:'origin',title:'Origins, poets and collections',
points:[
{x:'Bhakti arose in South India in the 7th to 10th centuries, in Tamil poems by the Āḻvārs (to Viṣṇu) and the Nāyaṉmārs (to Śiva). St Andrews puts the start of Tamil bhakti composition at around the sixth century, so the date is a range.',b:'checked'},
{x:'The Āḻvār poems were gathered around the eleventh century into the Nālāyira Divya Prabandham, “four thousand poems.” The Nāyaṉār hymns include the Tēvāram, the central part of the Śaiva devotional canon. Of the 63 Nāyaṉmārs, nine are from lower castes and three are women.',b:'checked'},
{x:'The word bhakti itself appears in the Śvetāśvatara Upaniṣad at 6.23, which St Andrews dates to about 500 BCE. It puts the Bhāgavata-purāṇa at about 900 CE and the Devī-māhātmya at about 600 CE.',b:'checked',n:'Dates are one source’s estimate.'},
{x:'The Gītā treats bhakti as superior to knowledge and to ritual action. Its verse 18.66, “abandoning all duties come to me for refuge,” is treated by commentators as the Gītā’s quintessential message.',b:'checked'},
{x:'St Andrews says Śaṅkara himself arguably did not rank devotion beneath nonduality, though some later Advaitins did.',b:'checked'},
{x:'Britannica says Muslim ideas of surrender to God may have influenced Hindu bhakti from the start, and that Kabīr introduced Sufi elements.',b:'secondary',n:'Britannica’s hedge, not a settled point.'}],
src:[SAET,BR_BHAKTI]},
{id:'caste',title:'Bhakti and caste',
points:[
{x:'The St Andrews entry says bhakti has an egalitarian edge. It also says bhakti movements generally did not call for dissolving social hierarchy. They created enclaves where caste was irrelevant to the spiritual goal, and were often absorbed back into Brahmanical norms. It calls how far bhakti rejects caste “an intensely contested topic.”',b:'checked',n:'The app uses this framing as written.'},
{x:'Britannica says many, but not all, bhakti movements were open to both genders and all castes.',b:'secondary'}],
src:[SAET,BR_BHAKTI]}];

export const practices:Card[]=[
{id:'worship',title:'Worship: pūjā and darśan',
points:[
{x:'Worship (pūjā) is described as the central action of practical Hinduism and as a transactional exchange in which worshippers approach a deity through respectful interaction with its powers. Many rituals aim at auspiciousness.',b:'secondary'},
{x:'Temple pūjā uses water, bells, hymns and incense. The food offered is eaten by devotees as prasād, “grace.” The heart of pūjā is described as an exchange of glances with the image (darśan).',b:'checked'},
{x:'Images are consecrated: an image-maker consecrates the image, life-breath (prāṇa) is established in it by a mantra, and the eyes are painted last. The deity is then awakened, fed and fanned.',b:'checked'},
{x:'Images are treasured and believed to hold power, but are also understood as dispensable.',b:'secondary'},
{x:'Vedic fire rituals were largely replaced in Purāṇic and modern Hinduism by image worship and devotion, though many rites can be traced to the Vedic period.',b:'secondary'}],
src:[SAET,BR_DEI,BR_PIL]},
{id:'samskara',title:'Life-cycle rites (saṃskāra) and pilgrimage',
points:[
{x:'The saṃskāras are rites of passage from conception to cremation. They prepare a person for an event or a stage of life by removing taints or generating new qualities. Family priests, usually brahmins, perform most of them.',b:'secondary'},
{x:'Practice varies by family, region and caste. Some families keep every rite and others only the ones most important to them.',b:'secondary',n:'From the Cultural Atlas, a government-funded community resource and not scholarship. Flood’s Hindu Practice is the lead.'},
{x:'Pilgrimage includes rites for ancestors and recently deceased kin, and sacred places are praised in Sanskrit and regional devotional texts.',b:'secondary'}],
src:[BR_PIL,{t:'Cultural Atlas: Hinduism rituals and practices',u:'https://culturalatlas.sbs.com.au/religions/hinduism/resources/hinduism-rituals-and-practices',b:'secondary',n:'Not a scholarly work.'}]},
{id:'festivals',title:'Devotion, festivals and pilgrimage',
points:[
{x:'The classical paths are karma (action), jñāna (knowledge) and bhakti (devotion). Bhakti practice includes reciting the deity’s name, singing hymns, pilgrimage, daily offerings and darśan.',b:'secondary'},
{x:'Festivals named in the St Andrews entry include the Rām Līlā near Varanasi, the Annakūṭa festival in the Vallabha tradition, and the annual Vārkarī pilgrimage on foot to Pandharpur. The Devī-māhātmya is recited especially at the great autumn festival.',b:'checked',n:'Examples only, not a festival calendar.'},
{x:'A full scholarly festival calendar was not read for this page.',b:'verify',n:'Flood (ed.), Hindu Practice (Oxford, 2020), covers pilgrimage and festivals. Not read.'}],
src:[SAET,BR_BHAKTI]}];

export const critique:Critique[]=[
{id:'one-many',title:'The One and the Many',
hindu:'In Advaita, ultimate reality is nondual brahman and plurality belongs to the conventional level.',hinduB:'checked',
scripture:['John 1:1–3','Genesis 1:1','Colossians 1:16–17','Matthew 28:19'],
response:'The Christian claim is that unity and diversity are equally ultimate because God is one in essence and three in persons. Advaita makes unity ultimate and plurality an appearance. The argument for Advaita, however, is given by a teacher to a student from a scripture, and it uses distinctions between a speaker and a hearer, truth and error, and premise and conclusion. That is a transcendental problem for the position: it must use what it says is not ultimately real. Rāmānuja makes a related point inside Hinduism when he argues that ignorance presupposes an individual who is ignorant.',
src:[SEP_SHA,IEP_RAM,IEP_HP]},
{id:'creation',title:'Creation and the reality of the world',
hindu:'Advaita treats the world as an indeterminable appearance. Rāmānuja rejects creation from nothing and makes souls and the cosmos brahman’s body.',hinduB:'checked',
scripture:['Genesis 1:31','Psalm 33:6–9','Hebrews 11:3','Romans 1:20'],
response:'Scripture teaches that God made the world out of nothing by His word and called it very good. The world is real, ordered and knowable because God made it and sustains it. If the world is an appearance, or if matter is an eternal feature of God’s body, the order that makes knowledge, science and moral distinctions possible has no Creator to ground it. Madhva’s school keeps the world real, so a Hindu may share this point against Advaita.',
src:[SEP_SHA,IEP_RAM,IEP_HP]},
{id:'reason',title:'Reason and God',
hindu:'Nyāya argues that God’s existence can be known by reason from creation, while the three Vedānta commentators say reason alone cannot prove God.',hinduB:'checked',
scripture:['Romans 1:19–21','Psalm 19:1–4','1 Corinthians 1:21','Proverbs 1:7'],
response:'Scripture says God is plainly known from creation, yet that people suppress the truth (Romans 1:18–21), and that the world did not come to know God through its own wisdom (1 Corinthians 1:21). Both Hindu positions are partly right and partly wrong by that standard. Nyāya is right that the creation points to a Maker. The Vedānta schools are right that fallen reason does not get to saving knowledge. The Reformed claim is that Scripture is the self-attesting ground of both, and that the argument starts from God and not from neutral reason.',
src:[IEP_HP]},
{id:'karma',title:'Karma, rebirth and sin',
hindu:'Karma and rebirth go together in most Hindu traditions, and liberation is release from saṃsāra. In Madhva’s school the lowest souls are eternally damned and liberation is at Brahman’s discretion.',hinduB:'checked',
scripture:['Hebrews 9:27','Romans 3:23–26','Romans 6:23','Ephesians 2:8–9'],
response:'Scripture teaches that people die once and then face judgment, not a cycle of rebirths. Sin is guilt before a holy God, and the answer is the substitutionary death of Christ received by faith, not the working off of a record over many lives. Karma, as a law, has no forgiveness in it, and in non-theistic readings no lawgiver. Many Hindu theists do speak of grace, and the Rāmānuja schools debate its place, so a conversation should ask which school the person holds.',
src:[IEP_UP,IEP_RAM,IEP_HP,CAM_KARMA]},
{id:'grace',title:'Surrender and grace',
hindu:'The Gītā says to forsake duties and take refuge in Krishna, who promises to release the devotee from sins. Vallabha teaches liberation by grace independent of human means.',hinduB:'checked',
scripture:['Romans 3:21–26','Ephesians 2:8–9','Titus 3:4–7','Hebrews 10:10–14'],
response:'This is the nearest point of contact in the whole hub, and it should be handled honestly. Scripture also teaches salvation by grace and refuge in a person. The difference is the ground. In the Christian account God is just and the justifier because Christ bore the penalty (Romans 3:26). The Gītā verse states the promise of release without giving that ground in the verse itself, and commentators read it differently, from renunciation to devotional surrender. A good conversation asks what the promise rests on.',
src:[SAET,IEP_HP]},
{id:'avatar',title:'Avatars and the incarnation',
hindu:'Viṣṇu descends in ten or more avatars, and the Gītā teaches devotion to Kṛṣṇa.',hinduB:'secondary',
scripture:['John 1:14','Hebrews 9:26–28','1 Peter 3:18','Philippians 2:5–8'],
response:'The incarnation is a single event in history: the Word became flesh once, died once for sins, and rose. The avatars are many and repeated, and the sources describe them as appearances of the deity, not an atonement for sin. This claim is about what each tradition says, not about whether any avatar is historical, which this page does not assess.',
src:[BR_AVA,BR_GITA]},
{id:'moksha',title:'Liberation and the resurrection',
hindu:'Mokṣa is liberation from the cycle of rebirth. In Advaita it is the recognition that one was always brahman.',hinduB:'checked',
scripture:['1 Corinthians 15:42–54','Philippians 3:20–21','Revelation 21:1–4','John 11:25–26'],
response:'Scripture teaches the resurrection of the body and a renewed creation, not escape from embodiment. In Advaita the goal is the recognition that one was always brahman. In the biblical account the goal is fellowship with God by grace, in a body raised from the dead.',
src:[SEP_PERS,SEP_SHA,DASG]},
{id:'authority',title:'Authority: śruti and Scripture',
hindu:'Pūrvamīmāṃsā holds the Vedas to be eternal and authorless. Nyāya and the theistic Vedānta schools instead make God their author.',hinduB:'checked',
scripture:['2 Timothy 3:16–17','2 Peter 1:20–21','John 17:17','Isaiah 8:20'],
response:'The Bible claims to be God-breathed words given through chosen men in history, and it is the final standard (2 Timothy 3:16–17). The Mīmāṃsā claim that the Vedas have no author is a sharp contrast with this. The Upaniṣads, by the scholarly dates in the sources, are a collection composed over centuries by many teachers who disagree with each other. The Reformed claim is that the one self-attesting God of Scripture is the precondition of knowledge, and every rival authority borrows from that precondition while denying it (Romans 1:18–21).',
src:[IEP_UP,IEP_HP]},
{id:'idol',title:'Worship, images and the one true God',
hindu:'Pūjā before a consecrated image is the center of practical Hinduism. The image receives life-breath by a mantra, and the deity is awakened, fed and fanned.',hinduB:'checked',
scripture:['Exodus 20:3–5','Isaiah 44:9–20','Acts 17:22–31','Romans 1:18–25'],
response:'Scripture forbids worshipping God by images and forbids other gods, and Isaiah 44 answers a craftsman who makes an image and then bows to it. The scholarly description above is the practice that passage addresses. Hindu traditions range from monotheistic-leaning devotion to many-deity village cults, and some teach that images are only aids, so a faithful response begins by learning which one is in front of you. Paul’s speech in Athens (Acts 17) is the model: he begins from what the listeners know, quotes their own poets, and calls them to repent because God has appointed a day of judgment through the risen Christ.',
src:[SAET,BR_DEI,BR_PIL]},
{id:'universal',title:'“All paths lead to the same goal”',
hindu:'The idea that all religions lead to one goal comes from Neo-Hinduism, a modern reformulation of Advaita, and not from the classical Vedānta teachers.',hinduB:'checked',
scripture:['John 14:6','Acts 4:12','1 Timothy 2:5','Matthew 7:13–14'],
response:'Two points. First, the claim is a modern Advaita position. Rāmānuja and Madhva, who hold a personal God and real souls, would reject it, and the Hindu Philosophy entry says critics call it bad history. Second, Scripture teaches one mediator and one name by which people are saved. The claim that all paths are one also makes an exclusive claim about the nature of ultimate reality, so it does not stand above the disagreement.',
src:[IEP_HP]}];

export const method=[
{h:'Learn the school first',b:'Advaita, Viśiṣṭādvaita, Dvaita, Śaiva Siddhānta, and village or household devotion give very different answers to the same question. Ask what the person actually believes and practises before arguing.'},
{h:'Start from the transcendental question',b:'Ask what the person’s view must assume for reasoning, morality and the reality of persons to make sense. The Christian answer is the triune God who has spoken. Test every answer against Scripture, not against this page.'},
{h:'Use their best sources fairly',b:'Quote Śaṅkara, Rāmānuja and the Upaniṣads accurately and in context. A misquoted opponent proves nothing. The Reformed tradition holds that Scripture alone is the final judge (2 Timothy 3:16–17).'},
{h:'Speak as Paul did',b:'In Acts 17 Paul reasons from what the listeners know, names the one true God, and ends with the resurrection. He was patient and clear (1 Peter 3:15).'}];

export const tiers=[
{h:'Most reliable',b:'Primary texts in public-domain translation (Müller, Telang), university-press and peer-reviewed scholarship: the Stanford and Internet Encyclopedias of Philosophy, the St Andrews Encyclopaedia of Theology, and the books under Reading.'},
{h:'Use with care',b:'Britannica and other reference works. They are accurate on broad points and should not be the only support for a contested claim. Dasgupta’s History of Indian Philosophy is a standard older work. Doniger’s The Hindus (Penguin, 2009) is a synthesis and contested, so it is Secondary only.'},
{h:'Not used as evidence',b:'Wikipedia, blogs, devotional sites, and unattributed community pages.'}];

export const reading:Book[]=[
{t:'Gavin Flood, An Introduction to Hinduism (Cambridge, 1996)',w:'The standard university textbook. Emphasises ritual and tantric traditions over doctrine. Chapters include Hindu ritual and Hindu theology and philosophy.',u:'https://search.worldcat.org/title/An-introduction-to-Hinduism/oclc/60305287',read:'no'},
{t:'Patrick Olivelle, The Early Upaniṣads (Oxford, 1998)',w:'Scholarly translation of twelve Upaniṣads with the Sanskrit text. The Sanskrit is free at UT Austin; the English is not.',u:'https://sites.utexas.edu/sanskrit/resources/early-upanisads-olivelle-edition/',read:'no'},
{t:'Stephanie Jamison and Joel Brereton, The Rigveda (Oxford, 2014)',w:'The first complete English translation of the Rigveda in over a century.',u:'https://www.india.oup.com/product/the-rigveda3-volume-set-9780197626955',read:'no'},
{t:'Gavin Flood (ed.), Hindu Practice (Oxford History of Hinduism, 2020)',w:'Scholarly collection on renunciation, ritual, pilgrimage and festivals. Flood is the editor, with chapters by Olivelle, Bronkhorst and others.',u:'https://india.oup.com/?p=66913',read:'no'},
{t:'Sushil Mittal and Gene Thursby (eds.), The Hindu World (Routledge, 2004)',w:'Twenty-four chapters by specialists on literatures, traditions and practices.',u:'https://www.routledge.com/The-Hindu-World/Mittal-Thursby/p/book/9780415772273',read:'no'},
{t:'Surendranath Dasgupta, A History of Indian Philosophy, vol. 1 (Cambridge, 1922)',w:'Free on Project Gutenberg. Dated, so use it for how the schools argue, not for modern dating. The Upaniṣad and Śaṅkara chapters were read for this hub.',u:'https://www.gutenberg.org/ebooks/12956',read:'part'},
{t:'Karl Potter (ed.), Encyclopedia of Indian Philosophies (Motilal Banarsidass)',w:'Volume 3 covers Advaita Vedānta up to Śaṅkara and his pupils. A paid resource. No catalogue page was located.',read:'no'},
{t:'Greg Bahnsen and Cornelius Van Til on the method',w:'For the Reformed response, read Van Til, The Defense of the Faith, and Bahnsen, Always Ready, then apply them to the specific Hindu school.',read:'no'}];
