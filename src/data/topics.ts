import { Topic } from '../types';

export const TOPICS: Topic[] = [
  {
    id: "education",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / UNICEF Education Partner",
    title: {
      uz: "1. Ta'lim inqirozi va Bolalar huquqlari",
      en: "1. Global Education Crisis & Children's Rights",
      ru: "1. Кризис образования и права детей"
    },
    short: {
      uz: "244 milliondan ortiq bola maktabga borish imkoniyatidan mahrum bo'lib, kelajak poydevori buzilmoqda.",
      en: "Over 244 million children are denied the opportunity to attend school worldwide.",
      ru: "Более 244 миллионов детей во всем мире лишены возможности посещать школу."
    },
    fullArticle: {
      uz: `Ta'lim inson taraqqiyotining, tinchlikning va har bir shaxs erkinligining eng mustahkam poydevoridir. Birlashgan Millatlar Tashkilotining Bolalar huquqlari to'g'risidagi konvensiyasiga muvofiq, har bir bola o'zining kelib chiqishi, ijtimoiy holati yoki yashash joyidan qat'i nazar, sifatli va bepul boshlang'ich ta'lim olishga mutlaq huquqlidir. Shunga qaramasdan, bugungi XXI asrda dunyo bo'ylab 244 milliondan ortiq bola va o'smir maktab eshigini hatto ochib ko'rish imkoniyatiga ega emas. Ushbu inqiroz nafaqat alohida bolalarning taqdirini, balki butun jamiyatlarning kelajakdagi iqtisodiy, ma'naviy va ilmiy salohiyatini jiddiy xavf ostiga qo'ymoqda.

Ta'limdan mahrum bo'lishning asosiy sabablari qashshoqlik, harbiy to'qnashuvlar, gender kamsitishlari va infratuzilmaning yetishmasligidir. Qashshoq oilalarda bolalar ko'pincha maktabga borish o'rniga oilaning tirikchiligiga yordam berish uchun mehnat bozoriga jalb etiladi. Ayniqsa, qiz bolalar ta'limida hanuzgacha chuqur tengsizliklar saqlanib qolmoqda: dunyoning ko'plab chekka hududlarida qizlarni erta turmushga berish, uy yumushlariga band qilish yoki maktablarda xavfsiz sanitariya sharoitlarining yo'qligi sababli ularning o'qishini to'xtatish holatlari odatiy holga aylangan. Urush va qurolli nizolar kechayotgan hududlarda esa maktab binolari vayron qilinadi, harbiy kazarmalarga aylantiriladi yoki tinch aholi uchun mutlaqo xavfli nuqtaga aylanadi.

Ta'lim inqirozi faqat maktabga bormaslik bilangina cheklanmaydi; uning ikkinchi va eng xavfli jihati — "o'rganish qashshoqligi" (learning poverty) deb ataladigan muammodir. Jahon banki va UNICEF ma'lumotlariga ko'ra, kam va o'rta daromadli mamlakatlarda 10 yoshli bolalarning qariyb 70 foizi oddiy matnni o'qib, uning ma'nosini tushunib yetish imkoniyatiga ega emas. Ushbu bolalar maktabga rasman qatnayotgan bo'lsa-da, malakali o'qituvchilarning yetishmasligi, zamonaviy darsliklarning yo'qligi va sinfxonalarning haddan tashqari to'lib ketganligi sababli yetarli bilim ololmaydi.

Raqamli tafovut (digital divide) esa ushbu muammoni yanada chuqurlashtirdi. So'nggi yillarda dunyo bo'ylab masofaviy ta'lim va raqamli vositalar keng tarqalgan bo'lsa-da, dunyodagi har uch boladan biri internet yoki kompyuter vositalaridan mutlaqo foydalana olmaydi. Shaharlardagi farzandlar zamonaviy onlayn platformalar orqali bilimini mustahkamlash imkoniga ega bo'lgan bir paytda, qishloq yoki urush hududlaridagi bolalar oddiy qog'oz daftarga ham ega bo'lolmay qolmoqda. Bu esa jamiyatda boy va kambag'al qatlamlar o'rtasidagi tafovutni keyingi avlodlarda yanada kattalashtiradi.

Ta'limsiz qolgan bola voyaga yetgach, yuqori maoshli va xavfsiz kasb egasi bo'lish imkoniyatini yo'qotadi. U qashshoqlik zanjiridan chiqa olmay, noqonuniy ekspluatatsiya, zo'ravonlik yoki radikal oqimlar ta'siriga tushib qolish xavfi ostida qoladi. YUNESKO hisob-kitoblariga ko'ra, har bir bola boshlang'ich ta'limni to'liq tugatsa, jahondagi global qashshoqlik darajasi 12 foizga, o'rta ta'limni tugatsa esa ikki barobarga kamayishi mumkin. Ta'lim nafaqat shaxsiy farovonlik garovi, balki jinoyatchilikni kamaytiruvchi, sog'lom turmush tarzini shakllantiruvchi va ayollar huquqlarini mustahkamlovchi eng kuchli ijtimoiy quroldir.

Ushbu global fojeani bartaraf etish uchun xalqaro hamjamiyat va milliy hukumatlar zudlik bilan qat'iy choralar ko'rishi lozim. Birinchidan, davlat byudjetlarida ta'limga ajratiladigan xarajatlar miqdori kamida YaIMning 4-6 foiziga yetkazilishi zarur. Ikkinchidan, o'qituvchilarning nufuzi, maoshi va kasbiy malakasini oshirish eng ustuvor vazifa bo'lishi shart. Uchinchidan, nogironligi bo'lgan bolalar, qochqinlar va qizlar uchun mutlaqo xavfsiz, inklyuziv ta'lim muhiti yaratilishi lozim. Har bir bola ta'lim olishga loyiq va har bir inson bu adolatli kurashda o'z hissasini qo'shishi darkor.`,
      en: `Education is often described as a gateway to opportunity, but for millions of children it remains a door they cannot reach. School is more than a place where children learn mathematics, languages, science, or history. It is a place where they develop confidence, friendships, problem-solving skills, and a sense of belonging. When a child is pushed out of education, the loss can follow them for years. The consequences are not limited to one student: communities lose future teachers, engineers, doctors, entrepreneurs, and citizens who could have contributed to solving the problems around them.

UNICEF and other international organizations continue to document a major global education gap. Conflict, poverty, displacement, disability, discrimination, and weak infrastructure can all keep children away from classrooms. In emergencies, schools may be destroyed, occupied, closed, or simply too dangerous to reach. Families facing poverty may have to choose between school and basic survival. Girls can face additional barriers where social expectations, safety concerns, early marriage, or lack of sanitation prevent regular attendance. Children with disabilities may also be excluded when schools lack accessible buildings, trained teachers, learning materials, or support services.

The education crisis is therefore not simply about counting how many children are sitting in classrooms. It is also about the quality and safety of the education they receive. A child can technically be enrolled but still learn very little if the classroom is overcrowded, the teacher has insufficient support, textbooks are unavailable, or the child arrives hungry and exhausted. Digital learning can expand access, but it cannot automatically solve inequality. A student without reliable electricity, a device, internet access, or a quiet place to study may be left further behind.

The effects of lost education are especially serious during childhood because development happens quickly. Years spent outside school can reduce literacy and numeracy, make later learning harder, and narrow employment opportunities. Education is also closely connected to health, protection, and participation. Schools can provide meals, vaccination information, psychosocial support, protection from exploitation, and trusted adults who notice when a child is in danger. For children affected by war or disaster, returning to school can provide a sense of routine and normality when almost everything else has changed.

Solving the problem requires more than building classrooms. Governments and communities need to remove the barriers that keep particular groups away from education. That means investing in teachers, safe school buildings, inclusive learning materials, sanitation, transport, school meals, and support for children with disabilities. In conflict-affected areas, schools and education workers need protection, while emergency education must continue when ordinary systems are interrupted. Families living in poverty may need social protection so that a child's education does not become the price paid for household survival.

Technology can help when it is designed around real needs. Online lessons, open educational resources, digital libraries, and low-bandwidth learning can reach students who cannot easily access a traditional classroom. But technology should complement, not replace, strong public education systems. Children need teachers, human relationships, safe spaces, and opportunities to ask questions. The digital divide is itself an education inequality, so expanding internet access must happen alongside investment in schools.

Education should also be treated as a right rather than a privilege reserved for children who happen to be born in stable and wealthy circumstances. The Convention on the Rights of the Child places children's development and participation at the center of international child-rights standards. A fair education system listens to children, respects their dignity, protects them from violence, and prepares them to participate in decisions affecting their lives.

The global education crisis is difficult, but it is not hopeless. Every new classroom, trained teacher, accessible textbook, safe route to school, scholarship, school meal, and supportive adult can change a child's trajectory. The strongest response is one that combines public investment with community action and, most importantly, treats every child's potential as valuable. When a child receives the chance to learn, the benefit does not end with a certificate. It can influence a family, a community, and an entire generation.`,
      ru: `Образование — это краеугольный камень человеческого развития, мира и свободы каждого человека. Согласно Конвенции ООН о правах ребенка, каждый ребенок, независимо от происхождения, социального статуса или места жительства, имеет неотъемлемое право на качественное и бесплатное образование. Однако сегодня более 244 миллионов детей и подростков в мире лишены возможности посещать школу. Этот кризис подрывает не только индивидуальные судьбы, но и экономический, моральный и интеллектуальный потенциал целых поколений.

Причины кризиса образования глубоки: крайняя нищета, вооруженные конфликты, дискриминация и разрушение базовой инфраструктуры. В бедных семьях дети часто вынуждены работать вместо учебы, чтобы помочь выжить близким. Девочки сталкиваются с особыми барьерами: ранние браки, домашние обязанности и отсутствие безопасных условий в школах часто вынуждают их бросать учебу. В зонах боевых действий школы подвергаются бомбардировкам, превращаются в военные объекты или закрываются из-за постоянной опасности.

Кризис образования заключается не только в отсутствии доступа к классам, но и в так называемой «бедности обучения». По данным ЮНИСЕФ и Всемирного банка, в странах с низким и средним уровнем дохода около 70% 10-летних детей не способны прочитать и осмыслить простейший текст. Даже посещая занятия, дети страдают от нехватки квалифицированных учителей, отсутствия книг и переполненных классов. Без базовой грамотности ребенок не может выйти из ловушки бедности и реализовать свой потенциал.

Для преодоления этого кризиса правительства и мировое сообщество обязаны рассматривать образование как абсолютный приоритет. Инвестиции в подготовку учителей, бесплатные школьные обеды, безопасный транспорт и защиту школ в зонах конфликтов — это не благотворительность, а фундаментальная обязанность перед будущим поколением.`
    },
    sources: [
      { name: "UNICEF — Education Statistics & Crisis Report", url: "https://www.unicef.org/education" },
      { name: "UNESCO Global Education Monitoring Report", url: "https://en.unesco.org/gem-report/" }
    ]
  },
  {
    id: "conflict",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / Conflict Documentation",
    title: {
      uz: "2. Qurolli nizolar va Urush oqibatlari",
      en: "2. Armed Conflicts and Child Protection in War",
      ru: "2. Вооруженные конфликты и последствия войн"
    },
    short: {
      uz: "Dunyoda har 6 boladan biri urush va qurolli nizolar hududida hayot kechirmoqda.",
      en: "Worldwide, 1 in every 6 children lives in a war or conflict zone.",
      ru: "Каждый шестой ребенок в мире живет в зоне активных военных действий."
    },
    fullArticle: {
      uz: `Qurolli to'qnashuvlar va urushlar insoniyat tarixidagi eng halokatli fojealardan biri bo'lib, ular jamiyatlarning infratuzilmasini, iqtisodiyotini va eng muhimi, begunoh insonlar hayotini barbod qiladi. Birlashgan Millatlar Tashkilotining Bolalar jamg'armasi (UNICEF) ma'lumotlariga ko'ra, bugungi kunda dunyoda har oltita boladan biri qurolli to'qnashuvlar hududida yoki uning xavfli chegaralarida yashashga majbur. Urushlar bolalarning eng muqaddas huquqlarini — yashash, sog'lom o'sish, xavfsizlik va o'z ota-onalari bag'rida bo'lish huquqlarini qo'pol ravishda buzadi.

Urush hududlarida yashovchi bolalar har kuni o'lim, jarohatlanish, yetimlik va ocharchilik tahdidi ostida yashaydilar. Bomba portlashlari, minomyot zarbalari va otishmalar oqibatida minglab begunoh bolalar hayotdan ko'z yumadi yoki umrbod nogiron bo'lib qoladi. Portlamay qolgan minalar va o'q-dorilar urush tugaganidan yillar o'tib ham bolalar hayotiga tahdid solishda davom etadi. Bolalar o'yinchoq deb o'ylab topib olgan minalar ularning qo'l-oyoqlaridan yoki hayotidan judo qilishi insoniyat vijdoni uchun tuzalmas yaradir.

Urushning yana bir eng shafqatsiz oqibati — bolalarni noqonuniy ravishda qurolli guruhlarga jalb qilish (askarlikka majburlash) hodisasidir. O'n minglab o'g'il va qiz bolalar zo'ravonlik bilan o'g'irlanib, ularga qurol tutqaziladi, josuslik, qo'riqchilik yoki hatto xudkush hujumlarida foydalaniladi. Qiz bolalar esa qurolli to'dalarda jinsiy zo'ravonlik va qullik qurboniga aylanadi. Bunday og'ir muhitda ulg'aygan bolalarning ruhiyatida chuqur travmalar shakllanadi, ular tinch hayotga moslashish qobiliyatini deyarli yo'qotadilar.

Shuningdek, qurolli nizolar maktablar, kasalxonalar, elektr tarmoqlari va toza suv inshootlarini vayron qiladi. Tibbiy tizim falajlangan sharoitda oddiy shamollash, infektsiya yoki to'yib ovqatlanmaslik kabi davolasa bo'ladigan holatlar ham o'limga olib keladi. Qutqaruvchilar va gumanitar tashkilotlarning yordam karvonlari harbiy blokadalar sababli qamal ostidagi hududlarga kira olmaydi, natijada millionlab bolalar ochlikdan qirilib ketadi.

Urushdan qochgan bolalar qochqinlarga aylanib, xorijiy davlatlarda yoki vaqtinchalik chodirlarda boshpanasiz, hujjatsiz va himoyasiz qoladilar. Ularning ta'limi yillar davomida to'xtab qoladi, o'z vatanlaridan, do'stlaridan va madaniyatlaridan uzilib qolish ularni chuqur depressiyaga yetaklaydi. Bolalar urushni boshlamaydilar, biroq uning eng og'ir tovonini to'laydilar.

Xalqaro gumanitar qonunlar, xususan Jeneva konventsiyalari tinch aholini va bolalarni qurolli mojarolarda himoya qilishni qat'iy talab qiladi. Barcha davlatlar va xalqaro tashkilotlar urush zonalarida bolalarga qarshi sodir etilayotgan jinoyatlarni javobgarlikka tortishi, gumanitar yo'laklarni zudlik bilan ochishi va bolalarga psixologik hamda tibbiy reabilitatsiya yordamini ko'rsatishi shart. Tinchlik — bu bolalarga berilishi kerak bo'lgan eng birinchi va eng oliy in'omdir.`,
      en: `Armed conflict changes childhood in ways that are difficult to reverse. A child who should be thinking about school, friends, games, and the future may instead be thinking about whether a family member is safe, whether there will be food tomorrow, or whether it is possible to sleep without hearing explosions. UNICEF has reported that more than one in six children globally live in areas affected by conflict. This is not an abstract statistic: it represents millions of individual lives interrupted by violence, fear, displacement, and the destruction of essential services.

Children are especially vulnerable during war because they depend on adults and public systems for protection. When families are separated, when communities are displaced, or when institutions collapse, children can lose the safety nets that normally protect them. They may be injured or killed, abducted, recruited by armed groups, subjected to sexual violence, or exposed to exploitation. Even children who survive physically can experience long-term psychological stress. Constant fear can affect sleep, concentration, relationships, learning, and a child's ability to feel safe again.

Conflict also destroys the infrastructure that makes ordinary life possible. Schools and hospitals may be damaged or forced to close. Water systems, electricity networks, roads, and food supply chains can stop functioning. A school that is still standing may become inaccessible because the journey to it is dangerous. A hospital may lack medicine or staff. A family may be unable to reach clean water because the local system has been damaged. These effects are connected: when education, healthcare, nutrition, water, and protection fail together, children face several risks at the same time.

Displacement is one of the most visible consequences. Families may leave their homes suddenly, carrying only what they can manage. Some cross international borders and become refugees; others remain inside their own country as internally displaced people. UNHCR reported that 117.8 million people were forcibly displaced at the end of 2025, following years of exceptionally high displacement. Children are a major part of these populations, and displacement can mean interrupted education, uncertain legal status, crowded living conditions, separation from relatives, and difficulty accessing healthcare or documentation.

The damage can continue after the fighting stops. A child returning to school may find that the building has been destroyed or that teachers have left. Communities may be contaminated by unexploded ordnance. Families may have lost homes, income, and relatives. Trauma can remain long after the headlines disappear. Recovery therefore requires more than a ceasefire. Children need safe housing, education, healthcare, psychological support, family tracing and reunification, legal protection, and opportunities to rebuild their communities.

International humanitarian law and child-rights standards provide important protections, but protection on paper is not enough. Governments, armed actors, humanitarian organizations, and international institutions have responsibilities to reduce harm and allow essential assistance to reach children. Schools and hospitals should be protected from attack, humanitarian workers need safe access, and children should never be treated as legitimate targets or as expendable parts of a conflict.

Children can also be powerful participants in recovery. Their voices are often ignored because adults assume that young people have nothing useful to say about war and peace. Yet children understand their own experiences and can identify what makes a school, shelter, neighborhood, or aid program feel safe. Listening to them does not mean placing responsibility for ending a war on children. It means recognizing their right to be heard when decisions directly affect their lives.

The long-term solution to conflict is ultimately political: societies need peaceful ways to resolve disputes, protect human rights, and address the conditions that allow violence to grow. Humanitarian aid saves lives, but peace creates the possibility of rebuilding. For children, the goal should be more than survival. They deserve the chance to return to learning, reconnect with family, play without fear, and imagine a future that is not defined by the war they were born into.`,
      ru: `Вооруженные конфликты калечат детство так, как ничто другое на планете. Ребенок, который должен учиться, мечтать и играть, вместо этого сталкивается с грохотом снарядов, гибелью родных и потерей крова. По данным международных агентств, более чем каждый шестой ребенок в мире проживает в районах, затронутых вооруженным насилием. Это десятки миллионов судеб, разорванных войной.

Война разрушает жизненно важную инфраструктуру: школы, больницы, водопроводные и электрические сети. Дети лишаются медицинской помощи и доступа к чистой воде, что приводит к гибели от элементарных инфекций. Тысячи несовершеннолетних становятся жертвами противопехотных мин или насильственно вербуются в вооруженные формирования. Психологические травмы, полученные в детстве под бомбежками, сопровождают человека всю оставшуюся жизнь.

Защита детей в условиях войны — императивное требование международного права. Больницы и школы должны иметь неприкосновенный статус, а виновные в преступлениях против детей должны нести строжайшую ответственность перед международными трибуналами.`
    },
    sources: [
      { name: "UNICEF — Children under attack", url: "https://www.unicef.org/take-action/campaigns/children-under-attack" },
      { name: "UNHCR — Global Trends in Forced Displacement", url: "https://www.unhcr.org/global-trends" }
    ]
  },
  {
    id: "climate",
    img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / Climate Crisis Documentation",
    title: {
      uz: "3. Iqlim o'zgarishi va Ekologik inqiroz",
      en: "3. Climate Change & Global Ecological Breakdown",
      ru: "3. Изменение климата и экологический кризис"
    },
    short: {
      uz: "1 milliarddan ortiq bola iqlim xavf-xatarlari o'ta yuqori bo'lgan hududlarda yashamoqda.",
      en: "Over 1 billion children live in areas at extreme climate and environmental risk.",
      ru: "Более 1 миллиарда детей живут в регионах с экстремальным климатическим риском."
    },
    fullArticle: {
      uz: `Iqlim o'zgarishi bugungi kunda shunchaki ilmiy munozara yoki kelajak taxmini emas, balki butun insoniyat hayotini ostin-ustun qilayotgan real global inqirozdir. Atmosferadagi issiqxona gazlarining haddan tashqari ko'payishi, o'rmonlarning kesilishi va sanoat chiqindilarining nazoratsiz chiqarilishi oqibatida sayyoramizning o'rtacha harorati misli ko'rilmagan darajada ko'tarilib bormoqda. Ushbu global isishning eng achinarli haqiqati shundaki, undan eng ko'p zarar ko'rayotganlar — tabiatni ifloslantirishda zarracha hissasi bo'lmagan bolalar va yosh avlod vakillaridir.

UNICEF tomonidan chop etilgan "Bolalar uchun iqlim xavfi indeksi" (Children's Climate Risk Index) hisobotiga ko'ra, jahondagi deyarli har ikkinchi bola — taxminan 1 milliard bola iqlim ofatlari bo'yicha "o'ta yuqori xavf" zonasida yashamoqda. Bu bolalar suv toshqinlari, qurg'oqchilik, ekstremal issiqlik to'lqinlari, havoning zaharli ifloslanishi va qishloq xo'jaligining tanazzuli bilan har kuni to'qnash kelmoqda. Bolalar organizmi kattalarnikiga qaraganda issiqlik urishiga, suvsizlanishga va havodagi iflos zarrachalarga ancha ta'sirchan bo'lib, ularning o'pka va miya rivojlanishiga tuzatib bo'lmas shikast yetadi.

Qurg'oqchilik va yerlarning cho'llanishi millionlab fermer oilalarni daromadsiz qoldirmoqda. Qurg'oqchilik tufayli hosil nobud bo'lganda, bolalar birinchi navbatda to'yib ovqatlanmaslikdan aziyat chekadi. Oziq-ovqat va ichimlik suvi taqchilligi oqibatida oilalar o'z yashash joylarini tashlab, "iqlim qochqinlari"ga aylanishga majbur bo'lmoqdalar. Xalqaro ekspertlarning baholashicha, agar global isish sur'atlari to'xtatilmasa, 2050 yilga kelib 200 milliondan ortiq inson faqat iqlim omillari sababli o'z vatanini tark etishi mumkin.

Ekologik inqiroz bolalarning ta'lim olish huquqini ham buzadi. Kuchli tayfunlar, toshqinlar va o'rmon yong'inlari har yili o'n minglab maktablarni vayron qiladi yoki vaqtinchalik evakuatsiya markazlariga aylantiradi. Maktabga borish yo'llari xavfli bo'lib qoladi, issiqlik to'lqinlari esa sinflarda o'qish jarayonini chidab bo'lmas darajaga yetkazadi. Natijada bolalar oylar davomida darslardan uzilib, bilimdan orqada qoladilar.

Shu bilan birga, biologik xilma-xillikning yo'qolib borishi, okeanlarning kislotalanishi va chuchuk suv zaxiralarining qurishi kelajak avlodlarning omon qolish imkoniyatlarini pasaytirmoqda. Biz nafaqat bugungi kun, balki ertangi kunimizni ham xavf ostiga qo'ymoqdamiz. Sayyora — barcha insoniyatning yagona umumiy uyidir va uning ekotizimlarini tiklash zudlik bilan amalga oshirilishi shart bo'lgan eng kechiktirib bo'lmas vazifadir.

Iqlim inqiroziga qarshi kurashish uchun davlatlar qazilma yoqilg'i (ko'mir, neft, gaz) iste'molini keskin kamaytirib, qayta tiklanuvchi energiya manbalariga — quyosh, shamol va gidroenergetikaga tezkorlik bilan o'tishi zarur. Maktablar va jamoat binolari energiya tejamkor va iqlim ofatlariga bardoshli qilib qayta qurilishi kerak. Har bir yosh avlod vakiliga ekologik madaniyatni yoshligidan singdirish va qaror qabul qilish jarayonlarida yoshlarning fikrini inobatga olish shart. Tabiatni asrash — bolalarimizning hayotini asrash demakdir.`,
      en: `Climate change is often discussed through temperature charts, emissions targets, and international negotiations, but its human meaning becomes clearest when we ask what happens to a child during a heatwave, drought, flood, wildfire, or storm. Children are not responsible for creating the climate crisis, yet they are among the people who can face its most serious consequences. UNICEF's Children's Climate Risk Report found that nearly half of the world's children—about 1.1 billion—are exposed to at least three overlapping climate hazards. Almost every child is exposed to at least one.

Climate hazards rarely arrive alone. A drought can reduce crops, increase food prices, and make water harder to find. Extreme heat can affect children's health and concentration at school. A flood can damage a home, destroy a classroom, contaminate water, and force a family to move. A tropical storm can interrupt electricity and healthcare. When several hazards overlap, the risks multiply. UNICEF's analysis emphasizes that children’s exposure interacts with the strength of the social services around them. The same heatwave can be far more dangerous for a child who has no safe water, cooling, healthcare, or secure housing.

Children's bodies are still developing, which can make them less able to cope with extreme heat, polluted air, infectious disease, and poor nutrition. Climate shocks can also disrupt learning. A school may close after a disaster, a child may need to help a family recover, or repeated displacement may make continuous education impossible. These interruptions matter because education is cumulative: missing weeks or months repeatedly can create learning gaps that are difficult to close.

The climate crisis is also an inequality crisis. Children who contribute least to global emissions can live in places with fewer resources for adaptation. A wealthy community may be able to strengthen buildings, improve drainage, provide cooling centers, or restore services quickly. A poorer community may have limited infrastructure and fewer financial resources. This means climate policy cannot focus only on reducing emissions, important as that is. It must also invest in adaptation and resilience, especially for children who are already vulnerable.

There are practical ways to make communities safer. Schools can be designed to remain usable during extreme weather, with shade, ventilation, safe water, resilient buildings, and emergency plans. Health systems can prepare for heat-related illness and climate-sensitive diseases. Water and sanitation systems can be strengthened against droughts and floods. Social protection can help families recover after disasters without pulling children out of school. Early-warning systems can give communities time to move to safety.

Children should also be included in climate action. This does not mean asking young people to solve a problem created largely by adults. It means respecting their right to information, participation, and education. Children can learn about local environmental risks, contribute ideas to school projects, and help communities understand how climate impacts are experienced on the ground. Climate education can build practical skills as well as scientific knowledge.

Reducing greenhouse-gas emissions remains essential because adaptation has limits. Governments and businesses can accelerate clean energy, improve efficiency, protect ecosystems, expand sustainable transport, and reduce pollution. Individuals can make meaningful choices too, but responsibility should not be shifted entirely onto households. Large systems—energy, industry, agriculture, transport, buildings, and public policy—shape most of the conditions in which people live.

The climate crisis should therefore be understood as a child-rights issue. A livable planet supports children's rights to health, education, development, family life, and protection. A damaged environment can undermine all of them simultaneously. The encouraging part is that climate action can produce benefits far beyond emissions: cleaner air, safer schools, stronger water systems, healthier cities, and more resilient communities. Protecting children from climate change is not only about preparing for a difficult future. It is about building a healthier present for everyone.`,
      ru: `Климатический кризис перестал быть абстрактным прогнозом — он стал суровой реальностью, угрожающей основам выживания человечества. Экстремальные засухи, катастрофические наводнения, лесные пожары и загрязнение атмосферы наносят самый сокрушительный удар по детям. Согласно отчетам ЮНИСЕФ, свыше 1 миллиарда детей живут в условиях критического климатического риска.

Детский организм крайне уязвим к тепловым ударам, токсичному воздуху и нехватке чистой воды. Потеря урожаев ведет к хроническому детскому недоеданию, а стихийные бедствия разрушают школы и больницы. Дети не несут ответственности за выбросы парниковых газов, но именно им приходится расплачиваться своим здоровьем и будущим.

Борьба с климатическим кризисом требует немедленного перехода на возобновляемую энергетику, защиты лесов и океанов, а также создания устойчивой к стихиям инфраструктуры в наиболее уязвимых регионах планеты.`
    },
    sources: [
      { name: "UNICEF — Children's Climate Risk Report", url: "https://www.unicef.org/reports/childrens-climate-risk-report-2026" },
      { name: "IPCC — Climate Change Impacts and Adaptation", url: "https://www.ipcc.ch/" }
    ]
  },
  {
    id: "poverty",
    img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / Global Poverty Documentation",
    title: {
      uz: "4. Qashshoqlik va Ochlik",
      en: "4. Global Poverty, Hunger and Child Malnutrition",
      ru: "4. Бедность, голод и недоедание"
    },
    short: {
      uz: "1.1 milliard inson o'ta qashshoqlikda yashamoqda, har kuni minglab bolalar to'yib ovqatlanmaslikdan nobud bo'ladi.",
      en: "1.1 billion people live in acute multidimensional poverty worldwide.",
      ru: "1.1 миллиарда человек живут в условиях крайней многомерной нищеты."
    },
    fullArticle: {
      uz: `Qashshoqlik faqat hamyonda pulning yo'qligi emas; bu inson sha'nini, salomatligini va imkoniyatlarini bo'g'uvchi ko'p qirrali og'ir zanjirdir. Bugungi kunda dunyoda 1.1 milliarddan ortiq inson ko'p o'lchovli o'ta qashshoqlikda (multidimensional poverty) yashamoqda. Ularning qariyb yarmini voyaga yetmagan bolalar tashkil qiladi. Qashshoqlik bolaning eng oddiy va hayotiy ehtiyojlarini — to'yimli oziq-ovqat, toza ichimlik suvi, tibbiy yordam, issiq kiyim va xavfsiz boshpanani tortib oladi.

Bolalik davridagi ochlik va to'yib ovqatlanmaslik (malnutrition) inson organizmida orqaga qaytarib bo'lmaydigan salbiy oqibatlarni qoldiradi. Hayotining dastlabki 1000 kunida zarur oqsillar, vitaminlar va minerallarni ololmagan bolalarning bo'yi o'smay qoladi (stunting), immuniteti zaiflashadi va eng dahshatlisi, miya hujayralarining rivojlanishi sekinlashadi. JSST ma'lumotlariga ko'ra, 5 yoshgacha bo'lgan bolalar o'limining qariyb yarmi bevosita yoki bilvosita to'yib ovqatlanmaslik bilan bog'liqdir. Dunyoda har kuni minglab chaqaloqlar bir bo'lak non yoki bir qultum sutga zor bo'lib vafot etmoqda.

Qashshoqlik zanjiri avloddan avlodga o'tish xususiyatiga ega. Kambag'al oilada tug'ilgan bola ko'pincha maktabga borolmaydi, uning o'rniga og'ir jismoniy mehnatga jalb etiladi. Ulg'aygach, u o'qimaganligi va malakasiz bo'lganligi sababli faqat arzimagan haq to'lanadigan qora mehnat bilan shug'ullanishga majbur bo'ladi. Natijada uning o'z farzandlari ham yana shu qashshoqlik girdobiga g'arq bo'ladi. Ushbu ayanchli zanjirni uzish faqat sifatli ta'lim va tizimli ijtimoiy himoya orqali mumkin.

Resurslarning global miqyosda adolatsiz taqsimlanishi qashshoqlikning eng asosiy harakatlantiruvchi kuchidir. Sayyoramizda yetishtirilayotgan oziq-ovqat mahsulotlari barcha 8 milliard insonni ortig'i bilan to'ydirishga yetadi. Biroq har yili ishlab chiqarilgan oziq-ovqatning uchdan bir qismi isrof qilinadi yoki axlatga tashlanadi. Ayni paytda eng boy bir necha kishining boyligi milliardlab kambag'al insonlarning umumiy mulkidan ko'proqni tashkil etmoqda. Bu kabi ijtimoiy tengsizlik insoniyat sivilizatsiyasining eng katta adolatsizligidir.

Iqlim ofatlari va inflyatsiya ham kambag'allikni yanada kuchaytirmoqda. Oziq-ovqat narxlarining keskin oshishi eng avvalo kam ta'minlangan oilalarning byudjetiga zarba beradi. Ota-onalar bola uchun dori yoki darslik sotib olish bilan oddiy oziq-ovqat sotib olish o'rtasida shafqatsiz tanlov qilishga majbur bo'ladilar.

Global qashshoqlikka barham berish uchun davlatlar kambag'al oilalar uchun maqsadli pul yordamlari (cash transfers), bepul maktab tushliklari va kafolatlangan tibbiy sug'urta tizimlarini yo'lga qo'yishi shart. Shuningdek, kichik fermerlarga subsidiyalar berish, mahalliy qishloq xo'jaligini qo'llab-quvvatlash va oziq-ovqat isrofgarchiligini qonuniy taqiqlash zarur. Dunyoda hech bir bola och holda uyquga ketmasligi kerak.`,
      en: `Poverty is more than the absence of money. It can mean unstable housing, insufficient food, limited access to healthcare, unsafe water, weak educational opportunities, and constant uncertainty about the next day. For children, poverty is especially damaging because childhood is a period of rapid physical, emotional, and intellectual development. When basic needs are not met, a child may have fewer opportunities to learn and develop, even when they are talented, motivated, and determined.

Economic hardship can affect children before they enter school. Poor nutrition can influence physical growth and concentration. Families may delay medical care because they cannot afford transport, medicines, or consultation costs. A child may share a crowded home without a quiet place to study. If parents lose work because of illness, conflict, or economic shocks, children may be expected to help earn income or care for younger relatives. These pressures can turn a temporary financial problem into a long-term cycle.

Hunger is closely connected to poverty, but it should not be treated as a simple problem of food quantity. Families need reliable access to nutritious food, clean water, healthcare, and the ability to recover from shocks. A household may have food today but still be highly vulnerable if prices rise sharply or income disappears. Climate events, conflict, unemployment, and displacement can all make food insecurity worse. Children are particularly sensitive to these disruptions because their bodies and brains require consistent nutrition.

The relationship between poverty and education is also powerful. Families with very limited resources may struggle with transportation, uniforms, supplies, internet access, or school fees where they exist. In some situations, children work to supplement household income. Missing school reduces future opportunities, which can make it harder to escape poverty as an adult. This is why policies that keep children in school can have effects far beyond the classroom.

Poverty is not caused by one single factor. It can reflect low wages, unemployment, discrimination, weak public services, conflict, environmental disasters, unequal access to land and finance, or historical disadvantage. Some families experience several of these at once. The result is that two children with equal ability can have completely different opportunities because of the circumstances into which they were born.

Effective responses therefore need to be broader than charity. Social protection programs can provide families with cash or other support during difficult periods. Free or affordable healthcare can prevent medical costs from pushing households deeper into poverty. School meals can improve nutrition while helping children attend classes. Investment in water, sanitation, transport, electricity, and housing can improve the environment in which families live. Decent work and fair wages can reduce the need for children to compensate for inadequate household income.

Local communities also matter. Community organizations, schools, volunteers, and responsible businesses can identify families who are being missed by formal systems. But community support should strengthen, not replace, public responsibility. Children have rights regardless of whether their parents have a high income, and access to essential services should not depend entirely on the generosity of strangers.

Ending poverty will not happen through one organization or one policy. It requires cooperation among governments, communities, schools, international institutions, businesses, and citizens. The goal should not simply be to make poverty slightly less painful. It should be to create conditions in which every child can grow up with enough food, safe housing, healthcare, education, protection, and the freedom to imagine a future beyond survival.`,
      ru: `Бедность — это не просто нехватка денег, это лишение базового человеческого достоинства. Сегодня более 1.1 миллиарда человек живут в крайней бедности, и половина из них — дети. Хронический голод лишает развивающийся мозг питательных веществ, вызывая необратимые задержки роста и когнитивного развития.

Мир производит достаточно продовольствия, чтобы накормить каждого жителя Земли, однако колоссальное неравенство и несправедливое распределение ресурсов приводят к тому, что миллионы тонн продуктов выбрасываются, пока дети умирают от голода. Преодоление бедности требует безусловных социальных гарантий, бесплатных обедов в школах и доступной медицины.`
    },
    sources: [
      { name: "World Bank — Global Child Poverty Trends", url: "https://www.worldbank.org/en/topic/poverty" },
      { name: "UN World Food Programme (WFP)", url: "https://www.wfp.org/" }
    ]
  },
  {
    id: "water",
    img: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / Water Security Mission",
    title: {
      uz: "5. Toza suv va Sanitariya yetishmovchiligi",
      en: "5. Safe Drinking Water Scarcity and Sanitation",
      ru: "5. Дефицит чистой воды и санитарии"
    },
    short: {
      uz: "2.2 milliard inson xavfsiz ichimlik suvidan mahrum, bu har yili yuz minglab bolalar o'limiga sabab bo'ladi.",
      en: "Over 2.2 billion people lack access to safely managed drinking water.",
      ru: "Более 2.2 миллиардов людей лишены доступа к безопасной питьевой воде."
    },
    fullArticle: {
      uz: `Suv — hayot manbai deb ataladi, biroq bugungi kunda dunyoda 2.2 milliarddan ortiq inson xavfsiz, tozalanagan ichimlik suvidan mahrum holda yashamoqda. Yana 3.5 milliard inson sanitariya jihatidan xavfsiz hojatxonalarga ega emas. Toza suv va sanitariya yetishmovchiligi shunchaki noqulaylik emas, balki har kuni minglab insonlar, ayniqsa jajji bolalar hayotiga zomin bo'layotgan eng jiddiy sog'liqni saqlash fojiasidir.

Ifloslangan suv va sanitariya qoidalariga rioya qilmaslik vabo, ichterlama, dizenteriya va gepatit kabi o'ta xavfli yuqumli kasalliklarning asosiy o'chog'idir. Jahon sog'liqni saqlash tashkiloti (JSST) ma'lumotlariga ko'ra, har yili 5 yoshgacha bo'lgan 300 000 dan ortiq bola faqat iflos suv va yomon sanitariya sababli kelib chiqqan diareya kasalliklaridan vafot etadi. Bu har kuni 800 dan ortiq begunoh bolaning bevaqt o'limi demakdir.

Suv taqchilligi ayniqsa qizlar va ayollarning hayotiga og'ir yuk bo'lib tushadi. Ko'plab Afrika va Osiyo qishloqlarida toza suv manbalari uylardan bir necha chaqirim uzoqlikda joylashgan. Qiz bolalar har kuni ertalab 4-6 soatlab og'ir chelaklar va bidonlarni ko'tarib suv tashishga majbur bo'ladi. Bu mashaqqatli mehnat ularning bel va umurtqa pog'onasi salomatligiga zarar yetkazadi, eng muhimi, ularni maktabga borish va ta'lim olish imkoniyatidan butunlay mahrum qiladi.

Bundan tashqari, dunyo bo'ylab har uchta maktabdan birida xavfsiz ichimlik suvi va qizlar uchun ajratilgan gigiyenik hojatxonalar mavjud emas. Balog'at yoshiga yetgan o'smir qizlar gigiyena sharoitlari yo'qligi sababli oyiga bir necha kun darslarni qoldirishga majbur bo'ladi va oqibatda o'qishni tashlab ketishadi. Shu sababli maktablarda toza suv va sanitariya infratuzilmasini yaratish qizlar ta'limini rivojlantirishning ajralmas shartidir.

Iqlim o'zgarishi, sanoat chiqindilarining daryolarga oqizilishi va yer osti suvlarining nazoratsiz olinishi toza suv inqirozini yanada chuqurlashtirmoqda. Shaharlar kengaygani sari chuchuk suv resurslari kamayib bormoqda, yer osti suvlari pestitsidlar va og'ir metallar bilan zaharlanmoqda. Agar zudlik bilan tejamkor texnologiyalar joriy etilmasa, 2030 yilga borib global suv taqchilligi 40 foizga yetishi mumkin.

Har bir inson uchun toza suv huquqini ta'minlash xalqaro hamjamiyatning eng asosiy burchidir. Bunga erishish uchun suv tarmoqlarini modernizatsiya qilish, qishloq joylarida chuqur artezian quduqlarini qazish, suvni filtrlash stantsiyalarini qurish va daryolarni ifloslantirgan korxonalarga qat'iy jazo choralari qo'llash zarur. Toza suv — bu sog'lom kelajakning poydevoridir.`,
      en: `Clean water is so ordinary for many people that it is easy to forget how much of modern life depends on it. We drink it, cook with it, wash with it, grow food with it, and use it in hospitals and schools. Yet access to safe water and sanitation remains deeply unequal. WHO and UNICEF monitoring has shown that billions of people still lack safely managed drinking water, sanitation, or hygiene services. For children, the consequences can reach almost every part of daily life.

Unsafe water can carry pathogens that cause diarrhoeal disease and other infections. When sanitation systems fail, human waste can contaminate drinking-water sources and living environments. Poor hygiene makes transmission easier. These risks become especially serious for young children because repeated illness can contribute to malnutrition and missed school. A child who is sick repeatedly cannot learn consistently, while a family caring for that child may lose time and income.

Water scarcity creates another set of problems. In drought-prone communities, families may have to travel long distances to collect water. Children, especially girls in some settings, may spend hours helping with collection instead of attending school. Water may also be expensive when it must be purchased from private suppliers. During emergencies, people may have no choice but to use unsafe sources because there is no alternative.

Climate change can intensify these challenges. Drought can reduce water availability, while floods can contaminate wells and damage sanitation infrastructure. Extreme weather can interrupt electricity and water treatment systems. This means water policy and climate policy cannot be separated. Communities need infrastructure that can continue operating when conditions become more difficult.

Schools are an important part of the solution. A school cannot be considered fully safe if children have no reliable drinking water, toilets, or handwashing facilities. Water and sanitation also influence whether adolescent girls can attend school comfortably and consistently. Investment in school WASH systems can therefore support health, dignity, attendance, and learning at the same time.

Health facilities have even higher requirements. Hospitals and clinics need reliable water for drinking, cleaning, sterilization, infection prevention, and patient care. If a health center has no safe water, even basic medical procedures become more difficult and dangerous. Strong WASH systems are therefore part of healthcare infrastructure, not an optional extra.

Solutions vary by location. Some communities need new piped networks; others need protected wells, rainwater systems, water treatment, wastewater management, or improved maintenance of existing infrastructure. Technology can help, but long-term success depends on governance, financing, local capacity, and maintenance. A water system that works for six months and then breaks is not a durable solution.

Water access is also a question of dignity and rights. People should not have to risk illness to drink, walk for hours to find a toilet, or choose between buying food and buying water. Children should not lose educational opportunities because a household lacks a safe water source. International development efforts increasingly recognize that water, sanitation, hygiene, health, nutrition, education, and climate resilience are interconnected.`,
      ru: `Доступ к чистой воде и базовой санитарии — фундаментальное право каждого человека. Однако свыше 2.2 миллиарда людей не имеют безопасной питьевой воды, а 3.5 миллиарда лишены надлежащих туалетов. Загрязненная вода переносит холеру, дизентерию и тиф, унося каждый день жизни более 800 детей в возрасте до пяти лет.

Нехватка воды непропорционально ложится на плечи женщин и девочек, которые тратят часы на переноску тяжелых емкостей вместо учебы. Решение водного кризиса требует колоссальных инвестиций в очистные сооружения, школьные санитарные блоки и защиту водоемов от промышленных стоков.`
    },
    sources: [
      { name: "WHO / UNICEF Joint Monitoring Programme for Water Supply", url: "https://washdata.org/" },
      { name: "UN Water — Global Water Crisis Facts", url: "https://www.unwater.org/" }
    ]
  },
  {
    id: "health",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / Public Health Care",
    title: {
      uz: "6. Sog'liqni saqlash inqirozi va Epidemiyalar",
      en: "6. Global Healthcare Inequity and Epidemic Preparedness",
      ru: "6. Кризис здравоохранения и эпидемии"
    },
    short: {
      uz: "Millionlab bolalar oddiy emlashlar va asosiy tibbiy yordamdan mahrum bo'lib qolmoqda.",
      en: "Millions of children lack access to routine vaccines and basic healthcare.",
      ru: "Миллионы детей лишены плановой вакцинации и базовой медицинской помощи."
    },
    fullArticle: {
      uz: `Sog'liqni saqlash tizimlaridagi tengsizlik dunyodagi eng fojiali adolatsizliklardan biridir. Boy davlatlarda aholi eng so'nggi tibbiy innovatsiyalar, robotlashgan operatsiyalar va zamonaviy dori vositalaridan foydalanayotgan bir paytda, rivojlanayotgan davlatlarda millionlab insonlar va bolalar oddiy paratsetamol, antibiotik yoki toza shprits topa olmay hayotdan ko'z yummoqda. Har yili 5 milliondan ortiq bola 5 yoshga to'lmasdan vafot etadi, holbuki ushbu o'limlarning aksariyatini oddiy va arzon tibbiy vositalar orqali oldini olish mumkin edi.

Emlash (vaktsinatsiya) — insoniyat tarixidagi eng katta ilmiy yutuqlardan biri bo'lib, u har yili 4 milliondan ortiq inson hayotini saqlab qoladi. Biroq JSST va UNICEF hisobotlariga ko'ra, dunyo bo'ylab 25 milliondan ortiq bola ("nol doza"li bolalar) qizamiq, poliomiyelit, difteriya va ko'kyo'tal kabi o'limli kasalliklarga qarshi birorta ham vaksina olmagan. Vaksinalar sovuqlik zanjirini (cold chain) talab qiladi, ammo chekka qishloqlarda elektr energiyasining yo'qligi sababli dorilarni saqlash imkonsiz bo'lib qolmoqda.

Global epidemiyalar va pandemiyalar sog'liqni saqlash tizimlarining zaifligini yaqqol ko'rsatib berdi. Biror yangi virus tarqalganda, barcha e'tibor va resurslar unga yo'naltiriladi va natijada onalar salomatligi, bezgak, sil va OIV kabi boshqa o'ta jiddiy kasalliklarga qarshi kurash to'xtab qoladi. Malakali shifokorlar va hamshiralarning yetishmasligi esa inqirozni yanada chuqurlashtiradi. Rivojlangan mamlakatlar kam ta'minlangan hududlardagi shifokorlarni o'zlariga jalb qilishi oqibatida kambag'al davlatlarda bir shifokorga 10 000 dan ortiq aholi to'g'ri keladigan holatlar uchramoqda.

Bolalarning ruhiy salomatligi ham sog'liqni saqlashning e'tibordan chetda qolayotgan jiddiy muammosidir. Zo'ravonlik, urush, qashshoqlik va ijtimoiy tarmoqlardagi bosimlar tufayli dunyoda har yettinchi o'smir ruhiy tushkunlik, xavotir (anxiety) va depressiyadan aziyat chekmoqda. Ko'plab jamiyatlarda ruhiy salomatlik mavzusi qoralanadi (stigma), psixologik yordam esa deyarli mavjud emas.

Dori vositalari ishlab chiqaruvchi yirik farmatsevtika kompaniyalarining monopoliya siyosati ham kambag'al qatlam uchun dori-darmonlarni yetib bo'lmas darajada qimmat qilib qo'ymoqda. Hayotni saqlab qoluvchi patentlangan dorilar kambag'al davlatlar fuqarolari uchun bir necha yillik maosh narxiga teng bo'ladi.

Sog'liqni saqlash barcha uchun teng va erkin huquq bo'lishi kerak. Buning uchun xalqaro darajada vaksinalarni adolatli taqsimlash, birlamchi tibbiy-sanitariya yordamini kuchaytirish, qishloq vrachlik punktlarini quyosh panellari va muzlatgichlar bilan ta'minlash hamda har bir onaga bepul tug'uruq xizmatini ko'rsatish zarur. Hech bir ona dori yo'qligi sababli farzandining jon berishini ko'z yosh bilan kuzatib turmasligi shart.`,
      en: `A healthcare crisis is not only what happens when hospitals are overwhelmed. It can begin much earlier, when a child cannot reach a clinic, a family cannot afford medicine, a vaccine is unavailable, or a preventable disease spreads through a community. Health is closely connected to every other area of life: education, nutrition, clean water, housing, safety, and economic security. When one part fails, the others can become weaker too.

Vaccination shows how powerful prevention can be. The World Health Organization describes immunization as one of the most successful public-health interventions and estimates that vaccines currently prevent millions of deaths every year. Vaccines reduce the risk of serious infectious diseases by preparing the immune system to respond. They also help protect communities because high coverage can reduce transmission and limit outbreaks.

Yet vaccines do not reach everyone equally. Conflict can interrupt routine immunization programs. Remote communities may be far from health facilities. Misinformation can reduce confidence in vaccination. Supply problems, shortages of trained workers, and weak health systems can create gaps even when vaccines exist. The lesson is important: having a medical technology is not the same as having an accessible health system.

Children need more than vaccines. They need maternal and newborn care, nutrition support, treatment for common infections, dental care, mental-health support, disability services, and emergency care. A child who is malnourished may be more vulnerable to infection; a child repeatedly absent from school because of illness may fall behind; a family paying large medical costs may have less money for food or education.

Pandemics demonstrate how quickly health emergencies can become social emergencies. When an infectious disease spreads widely, hospitals can face shortages while schools close and families lose income. The COVID-19 pandemic also exposed differences between communities with strong healthcare infrastructure and those with limited access to testing, treatment, vaccines, and reliable information. Recovery requires rebuilding trust and systems rather than simply waiting for the next crisis.

Health systems need strong primary care because most health needs are not solved in intensive-care units. Local clinics, community health workers, vaccination programs, maternal care, pharmacies, laboratories, and public-health surveillance can prevent small problems from becoming emergencies. Strong primary healthcare also makes services easier to reach for families who cannot travel long distances.

Mental health deserves the same seriousness. Children affected by war, displacement, violence, bullying, disasters, or family financial stress can experience anxiety, depression, trauma, or other difficulties. A child may appear physically healthy while struggling internally. Schools can play a valuable role by providing supportive adults, safe spaces, and referral pathways to qualified professionals.

Healthcare is ultimately about more than keeping people alive. It is about giving children the physical and mental conditions they need to learn, grow, play, and participate in society. Prevention, accessible treatment, trustworthy information, and strong public-health institutions can save lives long before a crisis reaches the news. Protecting children's health is therefore not merely a medical responsibility. It is an investment in every other part of their future.`,
      ru: `Неравенство в доступе к медицинской помощи уносит миллионы детских жизней. Более 25 миллионов детей в мире не получили даже первой дозы базовых вакцин против кори, столбняка и полиомиелита. В бедных странах тысячи младенцев гибнут от излечимых инфекций из-за банального отсутствия антибиотиков.

Пандемии доказали, что безопасность здоровья неделима: пока вирус циркулирует в одной части света, под угрозой находится все человечество. Доступ к бесплатной первичной медпомощи, вакцинам и охране психического здоровья детей должен стать всеобщим достоянием.`
    },
    sources: [
      { name: "World Health Organization — Immunization Coverage", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" },
      { name: "UNICEF Global Health Dashboard", url: "https://data.unicef.org/topic/child-health/" }
    ]
  },
  {
    id: "childlabor",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / Child Labor Investigation",
    title: {
      uz: "7. Bolalar mehnati va Shafqatsiz ekspluatatsiya",
      en: "7. Hazardous Child Labor and Economic Exploitation",
      ru: "7. Детский труд и экономическая эксплуатация"
    },
    short: {
      uz: "Dunyoda 160 million bola og'ir va xavfli mehnatga majburlanib, bolaligidan mahrum qilinmoqda.",
      en: "160 million children are forced into hazardous child labor worldwide.",
      ru: "160 миллионов детей вынуждены заниматься тяжелым и опасным трудом."
    },
    fullArticle: {
      uz: `Bolalar mehnati insoniyatning eng og'riqli va sharmandali muammolaridan biri bo'lib, u yosh avlodning jismoniy, aqliy va ma'naviy kamolotini parokanda qiladi. Xalqaro Mehnat Tashkiloti (XMT) va UNICEF hisobotlariga binoan, bugungi kunda dunyoda 160 million bola mehnat qilib kun ko'rishga majbur. Ulardan 79 millioni esa hayoti va salomatligi uchun bevosita xavfli bo'lgan og'ir sharoitlarda — chuqur konlarda, zaharli kimyoviy moddalar qo'llaniladigan plantatsiyalarda, g'isht zavodlarida va issiq sexlarda ishlatilmoqda.

Bolalar nima uchun ishlaydi? Bu savolning tagida doimo qashshoqlik, ishsizlik va ijtimoiy adolatsizlik yotadi. Ota-onaning maoshi oilaning boshlang'ich ehtiyojlarini qondirishga yetmaganda, bolalar oila byudjetini to'ldirish uchun maktabdan olib chiqiladi. Ko'plab yirik transmilliy korporatsiyalar va mahalliy biznes egalari xarajatlarni qisqartirish maqsadida ataylab bolalarni ishga oladilar, chunki bolalarga kattalarga nisbatan ancha kam haq to'lanadi, ular o'z haq-huquqlarini talab qila olmaydi va kasaba uyushmalariga a'zo bo'la olmaydi.

Bolalar mehnati qishloq xo'jaligi sohasida eng keng tarqalgan: dunyodagi ishlaydigan bolalarning 70 foizdan ortig'i kakao, kofe, paxta va tamaki plantatsiyalarida kun bo'yi quyosh ostida og'ir yuk ko'tarib, xavfli pestitsidlar bilan nafas olib ishlaydi. Ko'pchiligimiz sevadigan shokolad yoki zamonaviy smartfonlar batareyalarida ishlatiladigan kobalt metalli aynan yarim yalang'och, och bolalarning qonli va mashaqqatli mehnati evaziga qazib olinmoqda. Bu esa har bir iste'molchini o'ylantirishi shart bo'lgan haqiqatdir.

Erta yoshdagi og'ir mehnat bolalarning tanasini mayib qiladi. Umurtqa pog'onasining qiyshayishi, zaharli gazlar tufayli nafas yo'llarining yallig'lanishi, ko'rish qobiliyatining pasayishi va ish jarayonidagi baxtsiz hodisalar bolalarni yoshligidanoq nogiron qilib qo'yadi. Bundan tashqari, maktabga bormagan bola umrining oxirigacha savodsiz bo'lib qolib, qashshoqlik va ekspluatatsiya qurboni bo'lishda davom etadi.

Eng dahshatlisi — bolalarni noqonuniy odam savdosi (trafficking), qarz qulligi va noqonuniy xizmatlarga majburlash kabi eng yovuz ekspluatatsiya shakllaridir. Millionlab bolalar o'z uylaridan olisda, qul kabi zanjirband holda saqlanadi. Bu insoniyat nomiga dog' tushiruvchi jinoyatdir.

Bolalar mehnatini butunlay yo'q qilish uchun global darajada qat'iy choralar ko'rilishi zarur. Birinchidan, ishlab chiqaruvchi kompaniyalar o'z ta'minot zanjirlarida bolalar mehnatidan foydalanmasligini shaffof audit orqali isbotlashi va bolalar mehnati bor mahsulotlarga qat'iy embargo qo'yilishi kerak. Ikkinchidan, kambag'al oilalarga moddiy ko'mak berish orqali bolalarni ishdan chiqarib, maktabga qaytarish shart. Uchinchidan, bolalar mehnatiga yo'l qo'ygan ish beruvchilarga nisbatan jinoiy javobgarlik choralari kuchaytirilishi lozim. Har bir bola bolalik quvonchini his qilishga haqlidir.`,
      en: `Child labour is one of the clearest examples of how poverty, weak protection, and unequal opportunity can collide. The International Labour Organization and UNICEF have estimated that around 160 million children are engaged in child labour worldwide, including tens of millions in hazardous work. These children are not simply helping at home or learning useful skills. Child labour, as defined by international standards, refers to work that deprives children of their childhood, potential, dignity, or education and can harm their development.

Children work for many different reasons. Poverty is a major driver because a family may depend on every available source of income. But poverty is rarely the only factor. Weak access to quality education, discrimination, migration, conflict, inadequate social protection, and informal economies can all increase risk. In some communities, children work because adults cannot find stable employment. In others, children are recruited because employers believe they are cheaper, easier to control, or less likely to challenge unsafe conditions.

Agriculture remains a major sector for child labour. Children may work on family farms or in commercial supply chains, sometimes doing dangerous tasks involving heavy loads, machinery, pesticides, or long hours. Child labour also occurs in services, manufacturing, mining, construction, domestic work, and other informal activities. Hazardous work can cause immediate injuries and can expose children to chemicals, extreme temperatures, unsafe machinery, violence, or exploitation.

The educational cost is enormous. A child who works long hours may arrive at school exhausted, miss classes, or leave school entirely. Once a child falls behind, returning can become harder. Without education, their future employment choices can narrow, making them more vulnerable to low-paid or unsafe work as adults. This creates a cycle: poverty pushes children into work, work reduces education, and reduced education can reinforce poverty.

Not every form of work performed by a young person is automatically child labour. Age-appropriate household responsibilities, safe learning experiences, and legally permitted work for older adolescents can be different from work that harms a child's development or interferes with schooling. The key questions are the child's age, the nature of the work, the number of hours, the conditions, and whether the activity damages health, safety, dignity, or education.

Ending harmful child labour therefore requires more than simply telling children to stop working. If a family depends on a child's income, removing that income without support can make the household more vulnerable. Effective strategies combine social protection with accessible education, decent work for adults, stronger labour inspection, birth registration, safe migration systems, and enforcement against exploitation.

Businesses also have a role. Supply chains can hide child labour when companies do not know where raw materials come from or when subcontracting is poorly monitored. Responsible companies need due diligence, transparent sourcing, effective grievance systems, and action when abuses are identified. Consumers can ask questions about how products are made, but the primary responsibility for protecting children cannot be transferred to individual shoppers.

A world without harmful child labour is possible, but it requires changing the conditions that make exploitation profitable and survival dependent on children's work. Every child deserves time to learn, rest, play, develop skills safely, and imagine a future that is larger than the job they were forced to do. Protecting that future is not charity. It is a basic responsibility to children and to society.`,
      ru: `Детский труд — одна из самых позорных страниц современной цивилизации. Свыше 160 миллионов детей лишены детства и вынуждены тяжело трудиться на фабриках, в шахтах и на плантациях. Почти половина из них занята опасным трудом, вдыхая ядохимикаты и перенося непосильные грузы.

Основной драйвер детского труда — крайняя бедность взрослых и безответственность глобальных корпораций, закрывающих глаза на цепочки поставок ради максимизации прибыли. Искоренение детского труда требует жесткого международного законодательства, запрета импорта товаров с использованием детского труда и адресной поддержки семей.`
    },
    sources: [
      { name: "ILO / UNICEF Joint Report on Child Labour", url: "https://www.ilo.org/global/topics/child-labour/lang--en/index.htm" },
      { name: "UN Global Compact — Ending Child Labour", url: "https://unglobalcompact.org/" }
    ]
  },
  {
    id: "refugees",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / Refugee & Displacement Crisis",
    title: {
      uz: "8. Qochqinlik, Boshpanasizlik va Majburiy ko'chish",
      en: "8. Global Forced Displacement and Child Refugees",
      ru: "8. Беженцы, отсутствие дома и вынужденное переселение"
    },
    short: {
      uz: "117 milliondan ortiq inson o'z uyini tashlab ketishga majbur bo'lgan, ularning 40 foizdan ortig'i bolalardir.",
      en: "Over 117 million people are forcibly displaced worldwide, over 40% of whom are children.",
      ru: "Более 117 миллионов человек стали вынужденными переселенцами, свыше 40% из них — дети."
    },
    fullArticle: {
      uz: `O'z uyini, vatanini, maktabini va yaqinlarini tashlab, noma'lumlik sari qochish inson boshidan kechirishi mumkin bo'lgan eng og'ir sinovlardan biridir. BMTning Qochqinlar bo'yicha Oliy komissarligi (UNHCR) ma'lumotlariga ko'ra, dunyo bo'ylab majburiy ko'chirilgan insonlar soni rekord darajaga — 117.8 million kishiga yetdi. Ushbu qochqinlarning 40 foizdan ortig'ini voyaga yetmagan bolalar tashkil qiladi. Urushlar, ta'qiblar, etnik mojarolar va iqlim ofatlari millionlab begunoh bolalarni o'z uylaridan quvib chiqarmoqda.

Qochish jarayoni bolalar uchun dahshatli xavf-xatarlar bilan to'la. Ular muzdek dengizlarni kichik qayiqlar bilan kesib o'tishda cho'kib ketish, cho'llarda ochlik va chanqoqlikdan nobud bo'lish yoki tikanli simlar bilan to'silgan chegaralarda sovuqdan muzlash xavfi ostida qoladilar. Minglab bolalar qochish jarayonida ota-onalaridan ajralib qoladi (unaccompanied minors). Ota-onasiz qolgan bola esa odam savdogarlari, zo'ravonlar va jinoyatchilar uchun eng oson o'ljaga aylanadi.

Qochqinlar lagerlaridagi sharoitlar ko'pincha insoniy yashash mezonlariga javob bermaydi. Loy va chang bosgan chodirlarda toza ichimlik suvi, elektr energiyasi va isitish tizimi bo'lmaydi. Bir necha ming kishiga mo'ljallangan joylarda yuz minglab odamlar yillab yashashga majbur bo'ladi. Bolalar bunday lagerlarda to'yimli ovqat topolmaydi, yuqumli kasalliklar tez tarqaladi va eng achinarlisi, ularning ta'lim olish imkoniyati yillar davomida to'xtab qoladi.

Ko'plab qochqin bolalar o'zlarining shaxsini tasdiqlovchi hujjatlaridan (tug'ilganlik haqidagi guvohnoma, pasport) ayriladi yoki ularga bunday hujjatlar umuman berilmaydi. "Fuqaroligi yo'q" (stateless) bo'lib qolgan bola qonuniy jihatdan hech qaysi davlatga tegishli bo'lmaydi. Bu esa ularga maktabga kirish, shifoxonada davolanish yoki kelajakda qonuniy ishga joylashish imkoniyatini bermaydi. Ular jamiyatning "ko'rinmas" a'zolariga aylanadi.

Bundan tashqari, qochqin bolalar begona mamlakatlarda ko'pincha ksenofobiya, til to'sig'i va kamsitishlarga duch keladilar. Mahalliy maktablarda ularni chetlatish, tahqirlash holatlari uchraydi. Urush va qochish dahshatlarini o'z ko'zi bilan ko'rgan bolalar chuqur post-travmatik stress sindromidan (PTSD) aziyat chekadi, ammo ularga professional psixologik yordam ko'rsatuvchi mutaxassislar yetishmaydi.

Qochqinlar inqirozi butun dunyoning umumiy sinovidir. Birorta ham davlat bu muammodan o'zini chetga torta olmaydi. Xalqaro hamjamiyat qochqin bolalarni zudlik bilan xavfsiz boshpana, ta'lim va tibbiy xizmatlar bilan ta'minlashi, oilalarni birlashtirish dasturlarini tezlashtirishi va ularning insoniy qadr-qimmatini himoya qilishi shart. Har bir qochqin bola bir kun kelib o'z vatanini qayta quradigan iqtidorli shaxsga aylanishi mumkin.`,
      en: `For a person forced to leave home, the word “displacement” can hide an enormous amount of loss. Home is not only a building. It can mean school, relatives, language, familiar streets, documents, possessions, community, and a feeling of belonging. When people flee because of war, persecution, violence, or other serious threats, they may leave these things behind in a matter of hours. Children often experience the consequences most intensely because their development depends on stable relationships and routines.

UNHCR's Global Trends data shows the scale of the challenge. At the end of 2025, 117.8 million people worldwide were forcibly displaced, including refugees, asylum-seekers, and people displaced within their own countries by conflict or violence. Although the global total fell during 2025 for the first time in a decade, the number remains extraordinarily high, and many returns occurred in difficult circumstances.

Refugee children may face interrupted education from the moment they flee. They can lose access to school records, move repeatedly, or arrive in places where schools are already overcrowded. Language barriers can make learning harder. Some children have experienced violence or the death of relatives, which can affect concentration and emotional wellbeing. Others may have to work or care for younger siblings because their family has lost income.

Internally displaced children face many of the same problems while remaining inside their own country. They may live in temporary shelters, with relatives, or in camps. Their legal and administrative situation can vary, and they may struggle to access health services, schooling, clean water, and protection. Because they have not crossed an international border, their needs can sometimes receive less public attention even though the disruption is severe.

The first priority during displacement is safety. Families need shelter, food, clean water, healthcare, protection from violence, and reliable information. Children who are separated from parents or caregivers need systems for identification and family reunification. Humanitarian organizations also work to prevent trafficking, exploitation, recruitment by armed groups, and other forms of abuse that can become more likely when children are alone or living in unstable conditions.

Education should begin as early as possible, even during an emergency. Temporary learning spaces can provide more than academic lessons. They offer routine, social connection, trusted adults, and a place where children can regain a sense of normality. Over time, displaced children need pathways into national education systems, recognition of previous learning, language support, and opportunities to continue beyond basic schooling.

Host communities also matter. Most refugees are hosted in low- and middle-income countries, which can place pressure on local schools, housing, health systems, and labour markets. Supporting refugees therefore also means supporting the communities that receive them. International assistance can help expand infrastructure and services so that displaced families and host communities are not forced into competition over scarce resources.

Displacement is not a permanent identity. A child who becomes a refugee today can become a doctor, engineer, teacher, artist, entrepreneur, or community leader tomorrow. The way governments and societies respond can either protect that potential or allow years of disruption to limit it. The best response combines immediate humanitarian protection with long-term opportunities for education, belonging, safety, and self-reliance.`,
      ru: `Вынужденное переселение ломает привычный мир ребенка за считанные часы. Более 117 миллионов людей в мире вынуждены покинуть родные дома, спасаясь от войн, репрессий и катастроф. Дети-беженцы сталкиваются с годами пропущенной учебы, языковыми барьерами, потерей документов и тяжелейшими психологическими травмами.

Принимающие страны и мировое сообщество обязаны открывать для детей-беженцев двери школ, обеспечивать юридическую защиту и интеграцию. Статус беженца — это не клеймо, а временная трагедия, и долг человечества — помочь детям вернуть украденное детство.`
    },
    sources: [
      { name: "UNHCR — Global Trends & Displacement Statistics", url: "https://www.unhcr.org/global-trends" },
      { name: "UNICEF — Refugee and Migrant Children Support", url: "https://www.unicef.org/emergencies" }
    ]
  },
  {
    id: "digital",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / Digital Youth and Cybersecurity",
    title: {
      uz: "9. Raqamli xavfsizlik, Kiberbulling va Onlayn tahdidlar",
      en: "9. Digital Safety, Cyberbullying and Child Protection Online",
      ru: "9. Цифровая безопасность, кибербуллинг и онлайн-угрозы"
    },
    short: {
      uz: "Internetdagi xavf-xatarlar, kiberzo'ravonlik va shaxsiy ma'lumotlar o'g'irlanishi yoshlar ruhiyatiga jiddiy zarba bermoqda.",
      en: "Online exploitation, algorithmic manipulation, and cyberbullying pose unprecedented threats to youth.",
      ru: "Кибербуллинг, онлайн-эксплуатация и манипуляция данными наносят серьезный вред молодежи."
    },
    fullArticle: {
      uz: `Raqamli texnologiyalar, internet va sun'iy intellekt insoniyatga ulkan imkoniyatlar eshigini ochdi. Bugungi kunda bolalar dunyoning istalgan burchagidagi ma'lumotlarni bir soniyada topishi, xorijiy tillarni onlayn o'rganishi va o'z qobiliyatlarini global miqyosda namoyon etishi mumkin. Biroq ushbu ulkan raqamli makon ayni paytda bolalar va yoshlar uchun misli ko'rilmagan yangi xavf-xatarlar, ruhiy bosimlar va jinoyatlar maydoniga ham aylandi. Raqamli xavfsizlik XXI asrda bolalarni himoya qilishning eng muhim yo'nalishlaridan biriga aylanib ulgurdi.

Kiberbulling (internetdagi tazyiq va haqoratlar) zamonaviy bolalar duch kelayotgan eng keng tarqalgan ofatdir. An'anaviy zo'ravonlik maktab binosi yoki ko'cha bilan cheklangan bo'lsa, kiberbulling kecha-yu kunduz bolaning shaxsiy xonasiga, telefoniga kirib boradi. Ijtimoiy tarmoqlardagi haqoratomuz izohlar, masxaralovchi memlar, shantaj va asossiz tuhmatlar tezlik bilan tarqalib, bolaning ruhiyatini sindiradi. Tadqiqotlarga ko'ra, kiberbulling qurboni bo'lgan o'smirlarda o'ziga past baho berish, chuqur tushkunlik, yolg'izlik hissi va hatto o'z joniga qasd qilish (suicide) fikrlari bir necha barobar yuqori bo'ladi.

Yana bir jiddiy tahdid — internetdagi kiberjinoyatchilar va yirtqichlarning (online predators) bolalarga nisbatan olib boradigan ovidir (grooming). Bolalarning ishonuvchanligi va tajribasizligidan foydalangan jinoyatchilar soxta profillar ortiga yashirinib, ularning shaxsiy ma'lumotlarini, yashash manzillarini yoki intim suratlarini qo'lga kiritadilar. Keyinchalik esa bu ma'lumotlar orqali bolani shantaj qilib, og'ir jinoyatlarga undash hollari ko'paymoqda.

Shaxsiy ma'lumotlarning o'g'irlanishi va algoritmlar orqali manipulyatsiya qilish ham bolalar salomatligiga zarar yetkazadi. Ko'plab yirik platformalar foydalanuvchilarning e'tiborini iloji boricha ko'proq ushlab turish uchun giyohvandlikka o'xshash qaramlik keltirib chiqaruvchi algoritmlarni qo'llaydi. Buning oqibatida bolalar soatlab ekranga termulib, uyqusizlik, jismoniy harakatsizlik va diqqatning tarqoqligiga (ADHD) duchor bo'lmoqdalar. Shuningdek, nerealistik go'zallik standartlari va filtrlangan hayot tarzi o'smirlarda tana qiyofasidan qoniqmaslik kasalliklarini keltirib chiqarmoqda.

Sun'iy intellekt rivojlanishi bilan deepfake texnologiyalari orqali soxta tasvirlar yaratish, shaxslarning ovozi va yuzini o'zgartirish orqali tovlamachilik qilish xavfi ortdi. Bolalar bu kabi ilg'or texnologik aldovlarni farqlashga hali tayyor emas.

Raqamli makonni bolalar uchun xavfsiz qilish ko'p tomonlama yondashuvni talab qiladi. Hukumatlar internet platformalariga bolalarni himoya qiluvchi qat'iy talablarni yuklovchi qonunlarni qabul qilishi shart. Texnologik kompaniyalar bolalar akkauntlarida xavfli kontentni avtomatik bloklovchi, maxfiylikni yuqori darajada ta'minlovchi tizimlarni joriy etishi zarur. Maktablarda va oilada esa bolalarga "raqamli gigiyena", shaxsiy chegaralarni himoya qilish va internetdagi har bir xabarga tanqidiy nazar bilan qarash o'rgatilishi shart. Texnologiya bolalarning hayotini boyitishi kerak, ularni yo'q qilishi emas.`,
      en: `The internet has transformed childhood. Children can learn from a teacher thousands of kilometres away, communicate with relatives, create videos, play games, join communities, and discover information that previous generations could not access so easily. But the same technologies can expose children to bullying, exploitation, manipulation, hate, harmful content, privacy violations, and other risks. UNICEF warns that children are spending more time online while technology, including artificial intelligence, is changing the way digital experiences are created and delivered.

Cyberbullying is one of the most visible risks. A hurtful message or humiliating image can spread quickly and follow a child beyond school. Unlike traditional bullying, online abuse can happen at any hour and can reach a large audience. The victim may feel that there is no place to escape. Schools and families therefore need to treat online harm as a real form of harm rather than dismissing it as “just the internet.”

Privacy is another major issue. Children may share photos, locations, usernames, personal stories, or other information without understanding how long that information can remain available or who might use it. Platforms can also collect and analyze data about users. UNICEF emphasizes that children's rights to privacy and freedom of expression apply in digital environments too. Protecting children does not mean eliminating their online rights; it means designing digital spaces that respect both safety and participation.

Artificial intelligence adds new opportunities and new risks. AI can support personalized learning, translation, accessibility, creativity, and research. At the same time, algorithms can influence what children see, recommend content that keeps them engaged, or make harmful material easier to create. UNICEF has highlighted the growing risks of technology-facilitated sexual exploitation and abuse, including situations where offenders manipulate children into sharing sexual material.

Digital safety should therefore begin with education. Children need to know how to create strong passwords, recognize scams, manage privacy settings, report abuse, question suspicious information, and seek help when something feels wrong. They also need to understand that screenshots, recordings, and forwarded messages can make private mistakes public. Adults should teach these skills without creating an atmosphere where children are too afraid to report a problem.

Parents and teachers have responsibilities too. Monitoring can be useful, but constant surveillance can undermine trust. A better approach combines age-appropriate boundaries with open communication. Children should know which adults they can approach if they encounter bullying, sexual exploitation, threats, or disturbing content. Schools can create clear reporting systems and teach digital citizenship as part of education rather than waiting for an incident.

Technology companies have responsibilities beyond providing a “report” button. Platforms that are widely used by children should build safety into product design, respond to abuse reports, reduce harmful recommendation patterns, protect personal data, and make age-appropriate controls understandable. Companies should also cooperate with child-protection authorities when serious exploitation occurs, while respecting due process and privacy.

A safer internet is therefore not an internet without risk. It is an environment in which risks are reduced, harmful behavior is addressed, privacy is respected, and children have the knowledge and support needed to navigate technology confidently. The goal should be simple: children should be able to benefit from the digital world without having to trade away their safety, dignity, or rights.`,
      ru: `Интернет стер границы и открыл неограниченные горизонты для знаний, однако создал и беспрецедентные угрозы для психики подрастающего поколения. Кибербуллинг проникает в личные смартфоны детей 24 часа в сутки, приводя к тревожности, депрессии и суицидальным рискам.

Кроме травли, дети сталкиваются с цифровым шантажом, утечками персональных данных и манипулятивными алгоритмами, вызывающими зависимость. Защита детей в сети требует жесткого регулирования социальных сетей, обучения цифровой гигиене и доверительного диалога между родителями и детьми.`
    },
    sources: [
      { name: "UNICEF — Keeping children safe online", url: "https://www.unicef.org/protection/keeping-children-safe-online" },
      { name: "Internet Watch Foundation (IWF)", url: "https://www.iwf.org.uk/" }
    ]
  },
  {
    id: "rights",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    credit: "Photo: Unsplash / Youth Advocacy & Rights",
    title: {
      uz: "10. Tengsizlik, Bolalar Huquqlari va Fikr bildirish erkinligi",
      en: "10. Global Inequality, Child Rights and Freedom of Expression",
      ru: "10. Неравенство, права детей и свобода выражения мнений"
    },
    short: {
      uz: "Ko'plab jamiyatlarda bolalar o'z fikrini erkin bildirish va qaror qabul qilishda ishtirok etish imkoniyatidan mahrum.",
      en: "In many societies, children and youth are excluded from decisions that directly shape their future.",
      ru: "Во многих обществах дети лишены права голоса в решениях, определяющих их будущее."
    },
    fullArticle: {
      uz: `Bolalar huquqlari to'g'risidagi xalqaro konvensiyaning 12-moddasida aniq belgilab qo'yilgan: har bir bola o'z hayotiga taalluqli bo'lgan barcha masalalarda o'z fikrini erkin bildirish huquqiga ega va uning fikri yoshi hamda kamolot darajasiga muvofiq jiddiy e'tiborga olinishi shart. Afsuski, bugungi dunyoda bolalar ko'pincha jamiyatning passiv ob'ekti sifatida ko'riladi, ularning ovozi oilada ham, maktabda ham, davlat miqyosida ham deyarli eshitilmaydi. Tengsizlik va erkinlikning bo'g'ilishi insoniyat salohiyatini pasaytiruvchi jiddiy to'siqdir.

Gender, millat, diniy e'tiqod yoki nogironlik sababli yuzaga keladigan kamsitishlar (diskriminatsiya) jamiyatda chuqur yaralarni hosil qiladi. Nogironligi bo'lgan bolalar ko'plab mamlakatlarda hatto ko'chaga chiqish imkoniyatidan mahrum — binolarda panduslar yo'q, maktablarda maxsus o'qituvchilar yo'q, jamoatchilik transporti moslashtirilmagan. Ular jamiyatdan ajratilgan holda uyda yashashga majbur bo'ladi. Holbuki inklyuziv jamiyat barcha insonlarga teng imkoniyatlar yaratib berishi kerak.

Qiz bolalarning huquqlari hanuzgacha ko'plab an'anaviy jamiyatlarda poymol qilinmoqda. Qizlarning o'qishi, kasb tanlashi, o'z taqdirini o'zi belgilashi o'rniga ularni erta turmushga berish amaliyoti hali ham uchrab turadi. Har yili dunyoda 12 million qiz bola 18 yoshga to'lmasdan turmushga chiqariladi. Bu esa ularning kelajagini, ta'limini va orzularini bir zumda kulga aylantiradi.

Fikr bildirish erkinligi — bu bolalarga shunchaki gapirish huquqini berish emas, balki ularni tinglash, ularning fikrlari bilan hisoblashish va ularni jamiyat hayotiga jalb qilish demakdir. Bolalar o'z maktabida qanday o'qishni xohlashadi? Ular o'z mahallasida qanday xavfsiz muhit bo'lishini istashadi? Iqlim o'zgarishi haqida ular nima deb o'ylashadi? Yoshlar bu savollarga kattalardan ham ko'ra aniqroq, beg'ubor va haqiqatgo'y javoblarni berishga qodirdir. Buni Greta Tunberg kabi yosh ekofaollarning global harakatlari yaqqol isbotlab berdi.

Tengsizlikka qarshi kurashish maktablardan boshlanishi lozim. Ta'lim muassasalarida o'quvchilar o'rtasida o'zini-o'zi boshqarish tizimlari, erkin bahs-munozara klublari va fikr bildirish maydonchalari yaratilishi shart. O'qituvchilar va ota-onalar bolalarga qo'rquv emas, balki hurmat va ishonch bilan munosabatda bo'lishi, ularning savollarini rag'batlantirishi zarur.

Inson qadri va erkinligi — barqaror dunyoning asosi hisoblanadi. Bolalar kelajakning emas, bugungi kunning ham to'laqonli fuqarolaridir. Ularning ovozini eshitish, ularning orzulariga quloq solish va ularning huquqlarini har qanday zo'ravonlikdan qat'iy himoya qilish har bir ongli insonning muqaddas burchidir. Faqat bolalarini hurmat qilgan va ularga erkinlik bergan jamiyatgina chinakam buyuk kelajakka erisha oladi.`,
      en: `Children's rights are sometimes discussed as if they were a list of special privileges, but the opposite is closer to the truth. Child rights recognize that every young person has human dignity and needs particular protection and opportunities while growing. The Convention on the Rights of the Child establishes widely recognized principles concerning survival, development, protection, non-discrimination, and participation. These principles matter because children are not simply future adults; they are people with rights today.

One of those rights is the right to express views and have those views taken seriously in matters affecting the child. This does not mean that adults must always do exactly what a child requests. It means that children should have meaningful opportunities to speak, and decision-makers should consider their views according to their age and maturity. Listening is especially important in schools, healthcare, family services, child protection, and policies that directly affect young people.

Inequality can make participation much harder. A child who speaks the dominant language, has internet access, feels safe at school, and has supportive adults may find it easier to be heard than a child facing poverty, disability, discrimination, displacement, or violence. If participation systems only hear the easiest voices, they can reproduce inequality instead of reducing it.

Discrimination is another central challenge. Children can face unequal treatment because of disability, gender, nationality, migration status, family circumstances, language, or other characteristics. Equal rights do not require every child to receive exactly the same support. Sometimes fairness requires additional support so that children facing greater barriers can participate on genuinely equal terms.

Freedom of expression is particularly important in the digital age. UNICEF notes that children's rights to privacy and freedom of expression continue to apply online. A child may express an opinion through a school project, a community organization, a social-media post, or a creative work. These opportunities can help young people develop confidence and civic skills. At the same time, children need protection from harassment, exploitation, hate, and manipulation.

The balance between participation and protection is sometimes misunderstood. Protecting a child does not mean silencing them. Likewise, giving a child a voice does not mean leaving them alone to deal with adult responsibilities. The strongest systems do both: they create safe opportunities for children to participate while providing adults and institutions that carry responsibility for protection.

Schools are ideal places to practice these principles. Student councils, class discussions, anonymous feedback, project-based learning, and respectful debate can teach children that their opinions matter and that disagreement does not have to become hostility. Teachers can model how to listen carefully, ask follow-up questions, and change a decision when evidence or student experiences show that a different approach is better.

Communities can also create youth-led projects where children contribute to environmental campaigns, volunteering, peer education, cultural activities, and awareness work. Adults should provide supervision and resources without taking ownership of every idea. When young people see a real connection between their ideas and outcomes, participation becomes more than a ceremonial exercise.

A society that listens to children is not automatically a society that agrees with every child. It is a society that recognizes their dignity enough to hear them. When children can safely express ideas, question decisions, access information, and participate in their communities, they practice the skills needed for responsible citizenship. Protecting that voice is therefore not only a child-rights issue. It is an investment in the quality of tomorrow's society.`,
      ru: `Права детей — это не привилегия, а фундаментальное признание человеческого достоинства каждого ребенка. Статья 12 Конвенции ООН о правах ребенка провозглашает право детей свободно выражать свое мнение по всем вопросам, затрагивающим их жизнь, и обязывает взрослых учитывать их взгляды.

К сожалению, во многих обществах голос детей систематически игнорируется. Девочки сталкиваются с патриархальными барьерами, дети с инвалидностью лишены доступной среды, а бедность лишает подростков шанса быть услышанными. Уважение к правам детей и создание условий для свободного диалога — залог демократического и гуманного общества.`
    },
    sources: [
      { name: "UNICEF — Convention on the Rights of the Child", url: "https://www.unicef.org/child-rights-convention" },
      { name: "UN Committee on the Rights of the Child", url: "https://www.ohchr.org/en/treaty-bodies/crc" }
    ]
  }
];

export const CATEGORIES = [
  { id: "story", label: { uz: "Hikoya", en: "Story", ru: "История" } },
  { id: "opinion", label: { uz: "Fikr-mulohaza", en: "Opinion", ru: "Мнение" } },
  { id: "poem", label: { uz: "She'r", en: "Poem", ru: "Стихотворение" } },
  { id: "experience", label: { uz: "Shaxsiy tajriba", en: "Personal Experience", ru: "Личный опыт" } },
  { id: "analysis", label: { uz: "Tahlil", en: "Analysis", ru: "Анализ" } }
];
