// ===== آيات الشاشة الترحيبية (تم فصلها من index.html) =====
// ملف منفصل يحتوي على مصفوفة verses: كل عنصر = آية بالعربي (arabic) + الترجمات (translations) + رقم/اسم السورة (number).
// لازم يتحمّل قبل أول كود بيستخدم verses (محمّل في index.html قبل سكربت عرض الآيات مباشرةً).

const verses = [{
    arabic: [`ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ`, `هُدًى لِّلْمُتَّقِينَ`, ``],
    translations: [
      [`This is the Book about which there is no doubt,`, `a guidance for those conscious of Allah.`, ``]
    ],
    number: `سورة البقرة / Al-Baqarah، الآية 2`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ`,
      `الَّذِي خَلَقَكُمْ وَالَّذِينَ مِنْ قَبْلِكُمْ`,
      `لَعَلَّكُمْ تَتَّقُونَ`
    ],
    translations: [
      [
        `O mankind, worship your Lord,`,
        `who created you and those before you,`,
        `that you may become righteous.`
      ],
      [
        `Ô hommes ! Adorez votre Seigneur,`,
        `qui vous a créés ainsi que ceux qui vous ont précédés,`,
        `afin que vous atteigniez la piété.`
      ],
      [
        `¡Oh humanidad! Adorad a vuestro Señor,`,
        `quien os creó a vosotros y a quienes os precedieron,`,
        `para que podáis ser piadosos.`
      ],
      [
        `О люди! Поклоняйтесь вашему Господу,`,
        `Который создал вас и тех, кто был до вас,`,
        `быть может, вы станете богобоязненными.`
      ],
      [
        `O ihr Menschen! Dient eurem Herrn,`,
        `der euch und diejenigen vor euch erschaffen hat,`,
        `damit ihr gottesfürchtig werdet.`
      ],
      [
        `O människor! Tillbe er Herre,`,
        `som har skapat er och dem före er,`,
        `så att ni må bli gudfruktiga.`
      ],
      [
        `A dhaoine uaisle! Déan adhradh do bhur dTiarna,`,
        `a chruthaigh sibh agus iad siúd roimh sibh,`,
        `ionas go mbeidh sibh cráifeach.`
      ],
      [
        `O mensheid! Aanbid jullie Heer,`,
        `die jullie en degenen vóór jullie heeft geschapen,`,
        `opdat jullie godvrezend mogen worden.`
      ],
      [
        `اے لوگو! اپنے رب کی عبادت کرو،`,
        `جس نے تمہیں اور تم سے پہلے لوگوں کو پیدا کیا،`,
        `تاکہ تم پرہیزگار بن جاؤ۔`
      ],
      [
        `Wahai manusia! Sembahlah Tuhanmu,`,
        `yang telah menciptakan kamu dan orang-orang sebelum kamu,`,
        `agar kamu bertakwa.`
      ],
      [
        `Ey insanlar! Rabbinize kulluk edin,`,
        `sizi ve sizden öncekileri yaratan,`,
        `umulur ki sakınırsınız.`
      ],
      [
        `ای مردم! پروردگارتان را عبادت کنید،`,
        `که شما و پیشینیان شما را آفرید،`,
        `باشد که پرهیزگار شوید.`
      ],
      [
        `হে মানবজাতি! তোমরা তোমাদের প্রতিপালকের ইবাদত করো,`,
        `যিনি তোমাদের ও তোমাদের পূর্ববর্তীদের সৃষ্টি করেছেন,`,
        `যাতে তোমরা মুত্তাকি হতে পারো।`
      ],
      [
        `Ó humanidade! Adorai o vosso Senhor,`,
        `que vos criou e aos que vieram antes de vós,`,
        `para que possais ser piedosos.`
      ],
      [
        `人类啊！你们当崇拜你们的主，`,
        `他创造了你们以及你们之前的人，`,
        `以便你们敬畏。`
      ],
      [
        `人々よ！あなた方の主を崇拝せよ、`,
        `あなた方とその前の者たちを創造された方を、`,
        `そうすればあなた方は敬虔になるであろう。`
      ],
      [
        `사람들이여! 너희의 주님을 경배하라,`,
        `너희와 너희 이전 사람들을 창조하신 분을,`,
        `그리하여 너희가 경건하게 되도록 하라.`
      ],
      [
        `O uomini! Adorate il vostro Signore,`,
        `che ha creato voi e coloro che vi hanno preceduto,`,
        `affinché possiate essere timorati di Dio.`
      ],
      [
        `O ludzie! Czcijcie waszego Pana,`,
        `który stworzył was i tych przed wami,`,
        `abyście byli bogobojni.`
      ],
      [
        `О люди! Поклоняйтеся вашому Господу,`,
        `який створив вас і тих, хто був до вас,`,
        `щоб ви стали богобоязливими.`
      ]
    ],
    number: `سورة البقرة / Al-Baqarah، الآية 21`
  },

  {
    arabic: [
      `لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا`,
      `لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ`,
      `رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ`
    ],

    translations: [
      [
        `Allah does not burden a soul beyond that it can bear.`,
        `It will have [the consequence of] what it has earned, and it will bear [the consequence of] what it has earned.`,
        `Our Lord, do not impose blame upon us if we forget or make a mistake… Our Lord, do not lay upon us a burden like that which You laid upon those before us… Pardon us, forgive us, and have mercy upon us. You are our protector, so give us victory over the disbelieving people.`
      ],
      [
        `Allah n’impose à aucune âme une charge supérieure à sa capacité.`,
        `Elle recevra le bien qu’elle aura acquis et supportera le mal qu’elle aura commis.`,
        `Notre Seigneur, ne nous punis pas si nous oublions ou faisons erreur… Ne nous impose pas de fardeau comme Tu l’as imposé à ceux d’avant nous… Pardonne-nous, fais-nous miséricorde et accorde-nous la victoire sur les mécréants.`
      ],
      [
        `Allah no carga a ninguna alma más allá de su capacidad.`,
        `Obtendrá el bien que haya adquirido y sufrirá el mal que haya cometido.`,
        `Nuestro Señor, no nos castigues si olvidamos o erramos… No nos impongas una carga como la que impusiste a los que nos precedieron… Perdónanos, ten misericordia de nosotros y danos la victoria sobre los incrédulos.`
      ],
      [
        `Аллах не возлагает на душу сверх её возможностей.`,
        `Она получит то, что приобрела, и понесёт то, что совершила.`,
        `Господь наш, не наказывай нас, если мы забыли или ошиблись… Не возлагай на нас бремя, как возложил на тех, кто был до нас… Прости нас, помилуй нас и помоги нам против неверующих.`
      ],
      [
        `Allah belastet keine Seele über ihr Vermögen hinaus.`,
        `Sie erhält, was sie erworben hat, und trägt, was sie sich zugezogen hat.`,
        `Unser Herr, strafe uns nicht, wenn wir vergessen oder Fehler machen… Lege uns keine Last auf wie denen vor uns… Vergib uns, erbarme Dich unser und gib uns Sieg über die Ungläubigen.`
      ],
      [
        `Allah belastar ingen själ utöver dess förmåga.`,
        `Den får vad den har förtjänat och bär vad den har gjort.`,
        `Herre, straffa oss inte om vi glömmer eller gör fel… Lägg inte på oss en börda som du lade på dem före oss… Förlåt oss, förbarma dig över oss och ge oss seger över de otrogna.`
      ],
      [
        `Allah belast geen ziel boven haar vermogen.`,
        `Zij krijgt wat zij heeft verdiend en draagt wat zij heeft verworven.`,
        `Onze Heer, straf ons niet als wij vergeten of fouten maken… Leg ons geen last op zoals U dat deed bij degenen voor ons… Vergeef ons, heb genade met ons en geef ons overwinning op de ongelovigen.`
      ],
      [
        `اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا۔`,
        `اسے اس کی کمائی ہوئی نیکی ملے گی اور برائی کا بوجھ بھی اسی پر ہوگا۔`,
        `اے ہمارے رب! اگر ہم بھول جائیں یا خطا کریں تو ہمیں نہ پکڑ… ہم پر ایسا بوجھ نہ ڈال جیسا تو نے ہم سے پہلے لوگوں پر ڈالا… ہمیں معاف فرما، رحم فرما اور کافروں پر ہمیں غلبہ عطا فرما۔`
      ],
      [
        `Allah tidak membebani seseorang melainkan sesuai dengan kemampuannya.`,
        `Ia mendapat pahala dari apa yang diusahakannya dan menanggung apa yang dilakukannya.`,
        `Ya Tuhan kami, janganlah Engkau menghukum kami jika kami lupa atau salah… Janganlah Engkau bebankan kepada kami seperti yang Engkau bebankan kepada orang sebelum kami… Ampunilah kami, rahmatilah kami, dan tolonglah kami atas orang-orang kafir.`
      ],
      [
        `Allah hiçbir nefse gücünün yettiğinden fazlasını yüklemez.`,
        `İyilik yapan iyiliğini, kötülük yapan da karşılığını görür.`,
        `Rabbimiz, unutursak veya hata yaparsak bizi sorumlu tutma… Bizden öncekilere yüklediğin gibi bize yük yükleme… Bizi bağışla, bize merhamet et ve kâfirlere karşı bize yardım et.`
      ]
    ],

    number: `سورة البقرة / Al-Baqarah، الآية 286`
  },

  {
    arabic: [
      `إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ`,
      `وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ`,
      `لآيَاتٍ لِّأُولِي الْأَلْبَابِ`
    ],
    translations: [
      [
        `Indeed, in the creation of the heavens and the earth,`,
        `and the alternation of the night and the day,`,
        `are signs for those of understanding.`
      ],
      [
        `Certes, dans la création des cieux et de la terre,`,
        `et dans l’alternance de la nuit et du jour,`,
        `il y a des signes pour les doués d’intelligence.`
      ],
      [
        `Ciertamente, en la creación de los cielos y la tierra,`,
        `y en la alternancia de la noche y el día,`,
        `hay signos para los dotados de entendimiento.`
      ],
      [
        `Воистину, в сотворении небес и земли,`,
        `и в смене ночи и дня,`,
        `есть знамения для обладающих разумом.`
      ],
      [
        `Wahrlich, in der Schöpfung der Himmel und der Erde,`,
        `und im Wechsel von Nacht und Tag,`,
        `sind Zeichen für die Verständigen.`
      ],
      [
        `Sannerligen, i skapelsen av himlarna och jorden,`,
        `och i nattens och dagens växling,`,
        `finns tecken för dem som har förstånd.`
      ],
      [
        `Go deimhin, i gcruthú na bhflaitheas agus na talún,`,
        `agus i malartú na hoíche agus an lae,`,
        `tá comharthaí do dhaoine tuisceana.`
      ],
      [
        `Waarlijk, in de schepping van de hemelen en de aarde,`,
        `en in de afwisseling van de nacht en de dag,`,
        `zijn tekenen voor verstandigen.`
      ],
      [
        `بے شک آسمانوں اور زمین کی تخلیق میں،`,
        `اور رات اور دن کے بدلنے میں،`,
        `عقل والوں کے لیے نشانیاں ہیں۔`
      ],
      [
        `Sesungguhnya dalam penciptaan langit dan bumi,`,
        `dan pergantian malam dan siang,`,
        `terdapat tanda-tanda bagi orang-orang yang berakal.`
      ],
      [
        `Şüphesiz göklerin ve yerin yaratılışında,`,
        `gece ile gündüzün değişmesinde,`,
        `akıl sahipleri için ibretler vardır.`
      ],
      [
        `بی‌تردید در آفرینش آسمان‌ها و زمین،`,
        `و در رفت‌وآمد شب و روز،`,
        `نشانه‌هایی برای خردمندان است.`
      ],
      [
        `নিশ্চয়ই আসমান ও জমিনের সৃষ্টিতে,`,
        `এবং রাত ও দিনের পরিবর্তনে,`,
        `বুদ্ধিমানদের জন্য নিদর্শন রয়েছে।`
      ],
      [
        `Certamente, na criação dos céus e da terra,`,
        `e na alternância da noite e do dia,`,
        `há sinais para os dotados de entendimento.`
      ],
      [
        `在天地的创造中，`,
        `以及昼夜的交替中，`,
        `对于有理智的人确有迹象。`
      ],
      [
        `まことに、天と地の創造において、`,
        `そして昼と夜の交替において、`,
        `理解ある者への印がある。`
      ],
      [
        `실로 하늘과 땅의 창조와`,
        `밤과 낮의 교체 속에는`,
        `지혜 있는 자들을 위한 징표가 있다.`
      ],
      [
        `In verità, nella creazione dei cieli e della terra,`,
        `e nell’alternanza della notte e del giorno,`,
        `ci sono segni per i dotati di intelletto.`
      ],
      [
        `Zaprawdę, w stworzeniu niebios i ziemi,`,
        `i w następstwie nocy i dnia,`,
        `są znaki dla ludzi rozumnych.`
      ],
      [
        `Воістину, у створенні небес і землі,`,
        `і у зміні ночі та дня,`,
        `є знаки для розумних людей.`
      ]
    ],
    number: `سورة آل عمران / Al-'Imran، الآية 190`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ`,
      `الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ`,
      `وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً`
    ],
    translations: [
      [
        `O mankind, fear your Lord,`,
        `who created you from one soul and created from it its mate`,
        `and dispersed from both of them many men and women.`
      ],
      [
        `Ô hommes ! Craignez votre Seigneur,`,
        `qui vous a créés d’une seule âme et a créé d’elle son épouse`,
        `et a répandu à partir d’eux de nombreux hommes et femmes.`
      ],
      [
        `¡Oh humanidad! Temed a vuestro Señor,`,
        `quien os creó a partir de una sola alma y creó de ella a su pareja`,
        `y de ambos dispersó muchos hombres y mujeres.`
      ],
      [
        `О люди! Бойтесь вашего Господа,`,
        `Который создал вас из одной души и создал из неё её супругу`,
        `и распространил от них множество мужчин и женщин.`
      ],
      [
        `O ihr Menschen! Fürchtet euren Herrn,`,
        `der euch aus einer einzigen Seele erschuf und aus ihr ihre Partnerin erschuf`,
        `und aus beiden viele Männer und Frauen verbreitete.`
      ],
      [
        `O människor! Frukta er Herre,`,
        `som skapade er från en enda själ och skapade av den dess maka`,
        `och spred från dem många män och kvinnor.`
      ],
      [
        `A dhaoine uaisle! Bígí ar eagla roimh bhur dTiarna,`,
        `a chruthaigh sibh as anam amháin agus chruthaigh uaidh a chéile`,
        `agus scaip uaidh fir agus mná iomadúla.`
      ],
      [
        `O mensheid! Vrees jullie Heer,`,
        `die jullie uit één ziel schiep en daaruit zijn partner schiep`,
        `en uit beiden vele mannen en vrouwen verspreidde.`
      ],
      [
        `اے لوگو! اپنے رب سے ڈرو،`,
        `جس نے تمہیں ایک جان سے پیدا کیا اور اس سے اس کا جوڑا بنایا`,
        `اور ان دونوں سے بہت سے مرد اور عورتیں پھیلائیں۔`
      ],
      [
        `Wahai manusia! Bertakwalah kepada Tuhanmu,`,
        `yang telah menciptakan kamu dari satu jiwa dan darinya menciptakan pasangannya`,
        `dan dari keduanya Dia mengembangbiakkan banyak laki-laki dan perempuan.`
      ],
      [
        `Ey insanlar! Rabbinizden sakının,`,
        `sizi tek bir candan yaratan ve ondan eşini yaratan,`,
        `ve ikisinden birçok erkek ve kadın yayan.`
      ],
      [
        `ای مردم! از پروردگارتان پروا کنید،`,
        `که شما را از یک نفس آفرید و از آن همسرش را آفرید`,
        `و از آن دو مردان و زنان بسیاری پراکنده ساخت.`
      ],
      [
        `হে মানবজাতি! তোমরা তোমাদের প্রতিপালককে ভয় করো,`,
        `যিনি তোমাদেরকে এক প্রাণ থেকে সৃষ্টি করেছেন এবং তা থেকে তার জোড়া সৃষ্টি করেছেন`,
        `এবং তাদের দু’জন থেকে বহু পুরুষ ও নারী ছড়িয়ে দিয়েছেন।`
      ],
      [
        `Ó humanidade! Temei o vosso Senhor,`,
        `que vos criou de uma única alma e dela criou sua companheira`,
        `e de ambos espalhou muitos homens e mulheres.`
      ],
      [
        `人类啊！你们当敬畏你们的主，`,
        `他从一个生命创造了你们，并从其中创造了它的配偶`,
        `并从二者繁衍出许多男女。`
      ],
      [
        `人々よ！あなた方の主を畏れよ、`,
        `彼はあなた方を一つの魂から創造し、その伴侶をそこから創造し、`,
        `そしてそこから多くの男女を広げた。`
      ],
      [
        `사람들이여! 너희의 주님을 경외하라,`,
        `그분은 너희를 하나의 영혼으로부터 창조하시고 그로부터 배우자를 창조하시며`,
        `그 둘로부터 많은 남성과 여성을 퍼뜨리셨다.`
      ],
      [
        `O uomini! Temete il vostro Signore,`,
        `che vi ha creati da un’unica anima e da essa ha creato la sua compagna`,
        `e da entrambi ha diffuso molti uomini e donne.`
      ],
      [
        `O ludzie! Bójcie się waszego Pana,`,
        `który stworzył was z jednej duszy i z niej stworzył jej małżonkę`,
        `i z nich rozprzestrzenił wielu mężczyzn i kobiety.`
      ],
      [
        `О люди! Бійтеся вашого Господа,`,
        `який створив вас з однієї душі і з неї створив її пару`,
        `і з них поширив багато чоловіків і жінок.`
      ]
    ],
    number: `سورة النساء / An-Nisa، الآية 1`
  },

  {
    arabic: [
      `أَفَلَا يَتَدَبَّرُونَ الْقُرآنَ`,
      `وَلَوْ كَانَ مِنْ عِندِ غَيْرِ اللَّهِ`,
      `لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا`
    ],
    translations: [
      [
        `Then do they not reflect upon the Qur'an?`,
        `If it had been from [any] other than Allah,`,
        `they would have found within it much contradiction.`
      ],
      [
        `Ne méditent-ils donc pas sur le Coran ?`,
        `S'il venait d'un autre qu'Allah,`,
        `ils y trouveraient de nombreuses contradictions.`,
        ``
      ],
      [
        `¿Acaso no reflexionan sobre el Corán?`,
        `Si hubiera sido de otro que no sea Allah,`,
        `habrían encontrado en él muchas contradicciones.`,
        ``
      ],
      [
        `Разве они не размышляют над Кораном?`,
        `Если бы он был не от Аллаха,`,
        `они нашли бы в нём множество противоречий.`,
        ``
      ],
      [
        `Denken sie denn nicht über den Koran nach?`,
        `Wäre er von jemand anderem als Allah,`,
        `so würden sie darin viele Widersprüche finden.`,
        ``
      ],
      [
        `Begrundar de inte Koranen?`,
        `Om den hade kommit från någon annan än Allah,`,
        `skulle de ha funnit många motsägelser i den.`,
        ``
      ],
      [
        `Nach smaoiníonn siad ar an gCórán?`,
        `Dá mba ó aon duine eile seachas Allah a bheadh sé,`,
        `d’fheicfidís go leor contrárthachtaí ann.`,
        ``
      ],
      [
        `Denken zij dan niet na over de Koran?`,
        `Als hij van iemand anders dan Allah was gekomen,`,
        `zouden zij er veel tegenstrijdigheden in vinden.`,
        ``
      ],
      [
        `کیا یہ لوگ قرآن میں غور نہیں کرتے؟`,
        `اگر یہ اللہ کے سوا کسی اور کی طرف سے ہوتا،`,
        `تو وہ اس میں بہت زیادہ اختلاف پاتے۔`
      ],
      [
        `Maka apakah mereka tidak merenungkan Al-Qur'an?`,
        `Seandainya ia berasal dari selain Allah,`,
        `niscaya mereka akan menemukan banyak pertentangan di dalamnya.`
      ],
      [
        `Onlar Kur'an'ı düşünmüyorlar mı?`,
        `Eğer Allah’tan başkası tarafından olsaydı,`,
        `içinde birçok çelişki bulurlardı.`
      ],
      [
        `آیا در قرآن تدبر نمی‌کنند؟`,
        `اگر از سوی غیر خدا بود،`,
        `در آن اختلافات بسیاری می‌یافتند.`
      ],
      [
        `তারা কি কুরআন নিয়ে চিন্তা করে না?`,
        `যদি এটি আল্লাহ ছাড়া অন্য কারও পক্ষ থেকে হতো,`,
        `তাহলে এতে অনেক বিরোধ খুঁজে পেত।`
      ],
      [
        `Então, eles não refletem sobre o Alcorão?`,
        `Se fosse de outro além de Allah,`,
        `certamente encontrariam nele muitas contradições.`
      ],
      [
        `难道他们不思考《古兰经》吗？`,
        `如果它来自真主以外，`,
        `他们必会在其中发现许多矛盾。`
      ],
      [
        `彼らはクルアーンについて熟考しないのか？`,
        `もしそれがアッラー以外からのものであれば、`,
        `そこに多くの矛盾を見つけただろう。`
      ],
      [
        `그들은 꾸란을 깊이 생각하지 않는가?`,
        `만약 그것이 알্লাহ 외의 것으로부터 왔다면,`,
        `그 안에서 많은 모순을 발견했을 것이다.`
      ],
      [
        `Non riflettono sul Corano?`,
        `Se fosse da parte di altri che Allah,`,
        `vi avrebbero trovato molte contraddizioni.`
      ],
      [
        `Czy oni nie rozważają Koranu?`,
        `Gdyby pochodził od kogoś innego niż Allah,`,
        `znaleźliby w nim wiele sprzeczności.`
      ],
      [
        `Невже вони не розмірковують над Кораном?`,
        `Якби він був не від Аллаха,`,
        `вони знайшли б у ньому багато суперечностей.`
      ]
    ],
    number: `سورة النساء / An-Nisa، الآية 82`
  },

  {
    arabic: [`إِن يَشَأْ يُذْهِبْكُمْ أَيُّهَا النَّاسُ`, `وَيَأْتِ بِآخَرِينَ`, `وَكَانَ اللَّهُ عَلَىٰ ذَٰلِكَ قَدِيرًا`],
    translations: [
      [`If He wills, He can remove you, O mankind,`, `and bring others in your place.`, `And Allah is over that, competent.`]
    ],
    number: `سورة النساء / An-Nisa، الآية 133`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ قَدْ جَاءَكُمُ الرَّسُولُ بِالْحَقِّ مِن رَّبِّكُمْ`,
      `فَآمِنُوا خَيْرًا لَّكُمْ`,
      `وَإِن تَكْفُرُوا فَإِنَّ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَكَانَ اللَّهُ عَلِيمًا حَكِيمًا`
    ],
    translations: [
      [
        `O mankind, the Messenger has come to you with the truth from your Lord,`,
        `so believe; it is better for you.`,
        `But if you disbelieve — then indeed, to Allah belongs whatever is in the heavens and the earth. And ever is Allah Knowing and Wise.`
      ],
      [
        `Ô hommes ! Le Messager vous est certes venu avec la vérité de votre Seigneur,`,
        `croyez donc, cela est meilleur pour vous,`,
        `et si vous mécroyez, alors à Allah appartient ce qui est dans les cieux et la terre. Et Allah est Omniscient et Sage.`
      ],
      [
        `¡Oh humanidad! El Mensajero os ha venido con la verdad de vuestro Señor,`,
        `así que creed, es mejor para vosotros,`,
        `y si no creéis, entonces a Allah pertenece lo que hay en los cielos y en la tierra. Y Allah es Omnisciente y Sabio.`
      ],
      [
        `О люди! Посланник пришёл к вам с истиной от вашего Господа,`,
        `уверуйте, это лучше для вас,`,
        `а если вы не уверуете, то Аллаху принадлежит всё, что на небесах и на земле. И Аллах — Знающий, Мудрый.`
      ],
      [
        `O ihr Menschen! Der Gesandte ist zu euch mit der Wahrheit von eurem Herrn gekommen,`,
        `so glaubt, das ist besser für euch,`,
        `und wenn ihr ungläubig seid, so gehört Allah, was in den Himmeln und auf der Erde ist. Und Allah ist Allwissend, Allweise.`
      ],
      [
        `O människor! Sändebudet har kommit till er med sanningen från er Herre,`,
        `så tro, det är bättre för er,`,
        `och om ni förnekar, så tillhör Allah allt i himlarna och på jorden. Och Allah är Allvetande, Allvis.`
      ],
      [
        `A dhaoine uaisle! Tháinig an Teachtaire chugaibh leis an bhfírinne ó bhur dTiarna,`,
        `creidigí, is fearr daoibh é,`,
        `agus má shéanann sibh, is le Allah gach a bhfuil sna flaithis agus ar an talamh. Agus tá Allah Uile-Eolach, Uile-Eagnaí.`
      ],
      [
        `O mensheid! De Boodschapper is tot jullie gekomen met de waarheid van jullie Heer,`,
        `geloof dus, dat is beter voor jullie,`,
        `en als jullie ongelovig zijn, dan behoort Allah alles toe wat in de hemelen en op aarde is. En Allah is Alwetend, Alwijs.`
      ],
      [
        `اے لوگو! تمہارے پاس تمہارے رب کی طرف سے رسول حق لے کر آیا ہے،`,
        `پس ایمان لے آؤ، یہ تمہارے لیے بہتر ہے،`,
        `اور اگر تم کفر کرو تو بے شک اللہ ہی کے لیے ہے جو کچھ آسمانوں اور زمین میں ہے۔ اور اللہ جاننے والا، حکمت والا ہے۔`
      ],
      [
        `Wahai manusia! Telah datang kepada kalian Rasul dengan kebenaran dari Tuhan kalian,`,
        `maka berimanlah, itu lebih baik bagi kalian,`,
        `dan jika kalian ingkar, maka milik Allah apa yang ada di langit dan bumi. Dan Allah Maha Mengetahui lagi Maha Bijaksana.`
      ],
      [
        `Ey insanlar! Rabbinizden size hak ile bir elçi gelmiştir,`,
        `iman edin, bu sizin için daha hayırlıdır,`,
        `eğer inkâr ederseniz, göklerde ve yerde olanlar Allah’ındır. Allah her şeyi bilendir, hikmet sahibidir.`
      ],
      [
        `ای مردم! پیامبر با حق از سوی پروردگارتان نزد شما آمد،`,
        `پس ایمان بیاورید که برای شما بهتر است،`,
        `و اگر کفر ورزید، پس آنچه در آسمان‌ها و زمین است از آنِ خداست. و خدا دانا و حکیم است.`
      ],
      [
        `হে মানবজাতি! তোমাদের প্রতিপালকের পক্ষ থেকে সত্যসহ তোমাদের কাছে রাসূল এসেছেন,`,
        `অতএব তোমরা ঈমান আনো, এটি তোমাদের জন্য উত্তম,`,
        `আর যদি তোমরা কুফরি করো, তবে আসমান ও জমিনে যা কিছু আছে সবই আল্লাহর। আর আল্লাহ সর্বজ্ঞ, প্রজ্ঞাময়।`
      ],
      [
        `Ó humanidade! O Mensageiro chegou até vós com a verdade do vosso Senhor,`,
        `crede, isso é melhor para vós,`,
        `e se negardes, então a Allah pertence tudo o que há nos céus e na terra. E Allah é Onisciente, Sábio.`
      ],
      [
        `人类啊！使者已带着来自你们主的真理来临你们，`,
        `你们当信仰，这对你们更好，`,
        `如果你们不信，那么天地间的一切都属于真主。真主是全知的、全智的。`
      ],
      [
        `人々よ！使徒はあなた方の主からの真理と共に来た、`,
        `信仰せよ、それはあなた方にとってより良い、`,
        `もし不信仰ならば、天と地にあるすべてはアッラーのものである。アッラーは全知にして英明である。`
      ],
      [
        `사람들이여! 사도가 너희 주님으로부터 진리를 가지고 너희에게 왔으니,`,
        `믿어라, 그것이 너희에게 더 좋다,`,
        `만약 너희가 불신한다면 하늘과 땅에 있는 모든 것은 알্লাহ의 것이다. 알্লাহ는 전지전능하시다.`
      ],
      [
        `O uomini! Il Messaggero vi è giunto con la verità dal vostro Signore,`,
        `credete, è meglio per voi,`,
        `e se non credete, ad Allah appartiene ciò che è nei cieli e sulla terra. E Allah è Sapiente, Saggio.`
      ],
      [
        `O ludzie! Posłaniec przyszedł do was z prawdą od waszego Pana,`,
        `uwierzcie, to dla was lepsze,`,
        `a jeśli nie wierzycie, to do Allaha należy wszystko, co jest w niebiosach i na ziemi. I Allah jest Wszechwiedzący, Mądry.`
      ],
      [
        `О люди! Посланець прийшов до вас з істиною від вашого Господа,`,
        `увіруйте, це краще для вас,`,
        `а якщо ви не віруєте, то Аллаху належить усе, що на небесах і на землі. І Аллах — Всезнаючий, Мудрий.`
      ]
    ],
    number: `سورة النساء / An-Nisa، الآية 170`
  },

  {
    arabic: [`مَن جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا`, `وَمَن جَاءَ بِالسَّيِّئَةِ فَلَا يُجْزَىٰ إِلَّا مِثْلَهَا`, `وَهُمْ لَا يُظْلَمُونَ`],
    translations: [
      [`Whoever brings a good deed shall have ten times the like thereof to his credit,`, `and whoever brings an evil deed shall have only the recompense of the like thereof,`, `and they will not be wronged.`]
    ],
    number: `سورة الأنعام / Al-An'am، الآية 160`
  },

  {
    arabic: [
      `يَا بَنِي آدَمَ قَدْ أَنزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوَاَتِكُمْ وَرِيشًا`,
      `وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ`,
      `ذَٰلِكَ مِنْ آيَاتِ اللَّهِ لَعَلَّهُمْ يَذَّكَّرُونَ`
    ],
    translations: [
      [
        `O children of Adam, We have bestowed upon you clothing to cover your private parts and as adornment,`,
        `but the clothing of righteousness – that is better.`,
        `That is from the signs of Allah so that they may remember.`
      ],
      [
        `Ô enfants d’Adam, Nous vous avons donné des vêtements pour couvrir vos parties intimes et comme parure,`,
        `mais le vêtement de la piété est meilleur.`,
        `Cela fait partie des signes d’Allah afin qu’ils se rappellent.`
      ],
      [
        `¡Oh hijos de Adán! Os hemos dado vestimenta para cubrir vuestra desnudez y como adorno,`,
        `pero la vestimenta de la piedad es mejor.`,
        `Esto es de los signos de Allah para que recuerden.`
      ],
      [
        `О дети Адама! Мы ниспослали вам одежду, чтобы скрывать вашу наготу и как украшение,`,
        `но одежда богобоязненности — лучше.`,
        `Это из знамений Аллаха, чтобы они помнили.`
      ],
      [
        `O Kinder Adams! Wir haben euch Kleidung gegeben, um eure Scham zu bedecken und als Schmuck,`,
        `doch die Kleidung der Gottesfurcht ist besser.`,
        `Dies gehört zu den Zeichen Allahs, damit sie sich erinnern.`
      ],
      [
        `O Adams barn! Vi har gett er kläder för att täcka er nakenhet och som prydnad,`,
        `men gudsfruktans klädnad är bättre.`,
        `Detta är bland Allahs tecken så att de må minnas.`
      ],
      [
        `A chlann Ádhaimh! Thugamar éadaí daoibh chun bhur n-uaigneas a chlúdach agus mar mhaisiú,`,
        `ach is fearr éadaí na cráifeachta.`,
        `Is comharthaí de chuid Allah é seo chun go gcuimhneoidh siad.`
      ],
      [
        `O kinderen van Adam! Wij hebben jullie kleding gegeven om jullie schaamte te bedekken en als versiering,`,
        `maar de kleding van vroomheid is beter.`,
        `Dit is een van de tekenen van Allah zodat zij zich herinneren.`
      ],
      [
        `اے بنی آدم! ہم نے تمہیں لباس دیا تاکہ تم اپنی شرمگاہوں کو ڈھانپو اور زینت کے لیے بھی،`,
        `لیکن تقویٰ کا لباس سب سے بہتر ہے،`,
        `یہ اللہ کی نشانیوں میں سے ہے تاکہ وہ نصیحت حاصل کریں۔`
      ],
      [
        `Wahai anak cucu Adam! Kami telah menurunkan pakaian untuk menutupi aurat kalian dan sebagai perhiasan,`,
        `tetapi pakaian takwa itulah yang lebih baik.`,
        `Itu adalah di antara tanda-tanda Allah agar mereka ingat.`
      ],
      [
        `Ey Âdemoğulları! Size avret yerlerinizi örtecek ve süs olacak elbise indirdik,`,
        `ama takva elbisesi daha hayırlıdır.`,
        `Bu Allah’ın ayetlerindendir ki düşünüp ibret alasınız.`
      ],
      [
        `ای فرزندان آدم! ما برای شما لباسی فرستادیم تا عورت‌های شما را بپوشاند و زینت باشد،`,
        `اما لباس تقوا بهتر است.`,
        `این از نشانه‌های خداست تا پند گیرند.`
      ],
      [
        `হে আদম সন্তান! আমরা তোমাদের জন্য পোশাক দিয়েছি যাতে তোমাদের লজ্জাস্থান ঢেকে যায় এবং এটি সৌন্দর্যও,`,
        `কিন্তু তাকওয়ার পোশাকই উত্তম।`,
        `এটি আল্লাহর নিদর্শন যাতে তারা উপদেশ গ্রহণ করে।`
      ],
      [
        `Ó filhos de Adão! Nós vos demos vestimentas para cobrir vossas partes íntimas e como adorno,`,
        `mas a vestimenta da piedade é melhor.`,
        `Isso é um dos sinais de Allah para que eles recordem.`
      ],
      [
        `阿丹的子孙啊！我们已赐予你们衣服，以遮盖你们的羞体并作为装饰，`,
        `但敬畏的衣服更好。`,
        `这是真主的迹象之一，以便他们记取。`
      ],
      [
        `アーダムの子孫よ！われらはあなた方に衣服を与え、羞恥を隠し装飾とした、`,
        `しかし敬虔の衣はより良い。`,
        `これはアッラーの印の一つであり、彼らが思い出すためである。`
      ],
      [
        `아담의 자손들이여! 우리는 너희에게 옷을 내려 부끄러운 부분을 가리고 장식이 되게 하였으나,`,
        `경건의 옷이 더 좋다.`,
        `이는 알্লাহ의 징표 중 하나로 그들이 기억하도록 하기 위함이다.`
      ],
      [
        `O figli di Adamo! Vi abbiamo dato vesti per coprire le vostre parti intime e come ornamento,`,
        `ma la veste della pietà è migliore.`,
        `Questo è uno dei segni di Allah affinché ricordino.`
      ],
      [
        `O synowie Adama! Daliśmy wam odzież, aby zakrywała wasze części intymne i jako ozdobę,`,
        `lecz odzież bogobojności jest lepsza.`,
        `To jeden ze znaków Allaha, abyście pamiętali.`
      ],
      [
        `О сини Адама! Ми дали вам одяг, щоб приховувати ваші частини тіла і як прикрасу,`,
        `але одяг богобоязливості кращий.`,
        `Це один із знаків Аллаха, щоб вони пам’ятали.`
      ]
    ],
    number: `سورة الأعراف / Al-A'raf، الآية 26`
  },

  {
    arabic: [
      `يَا بَنِي آدَمَ لَا يَفْتِنَنَّكُمُ الشَّيْطَانُ كَمَا أَخْرَجَ أَبَوَيْكُم مِّنَ الْجَنَّةِ`,
      `يَنزِعُ عَنْهُمَا لِبَاسَهُمَا لِيُرِيَهُمَا سَوَآتِهِمَا`,
      `إِنَّهُ يَرَاكُمْ هُوَ وَقَبِيلُهُ مِنْ حَيْثُ لَا تَرَوْنَهُمْ ۗ إِنَّا جَعَلْنَا الشَّيَاطِينَ أَوْلِيَاءَ لِلَّذِينَ لَا يُؤْمِنُونَ`
    ],
    translations: [
      [
        `O children of Adam, let not Satan tempt you as he removed your parents from Paradise,`,
        `stripping them of their clothing to show them their private parts.`,
        `Indeed, he sees you and his tribe from where you do not see them. Indeed, We have made the devils allies of those who do not believe.`
      ],
      [
        `Ô enfants d’Adam, que Satan ne vous tente pas comme il a fait sortir vos parents du Paradis,`,
        `leur ôtant leurs vêtements pour leur montrer leurs parties intimes.`,
        `Il vous voit, lui et sa tribu, d’un endroit où vous ne les voyez pas. Nous avons fait des diables les alliés de ceux qui ne croient pas.`
      ],
      [
        `¡Oh hijos de Adán! Que Satanás no os tiente como sacó a vuestros padres del Paraíso,`,
        `despojándolos de sus vestiduras para mostrarles su desnudez.`,
        `Él os ve, junto con su tribu, desde donde vosotros no los veis. Hemos hecho a los demonios aliados de quienes no creen.`
      ],
      [
        `О дети Адама! Пусть сатана не искушает вас, как он вывел ваших родителей из Рая,`,
        `снимая с них одежду, чтобы показать им их наготу.`,
        `Он и его племя видят вас оттуда, откуда вы их не видите. Мы сделали шайтанов помощниками неверующих.`
      ],
      [
        `O Kinder Adams! Lasst euch nicht von Satan verführen, wie er eure Eltern aus dem Paradies vertrieb,`,
        `indem er ihnen ihre Kleidung nahm, um ihnen ihre Scham zu zeigen.`,
        `Er sieht euch und seine Sippe von dort, wo ihr sie nicht seht. Wir haben die Teufel zu Verbündeten der Ungläubigen gemacht.`
      ],
      [
        `O Adams barn! Låt inte Satan fresta er som han drev ut era föräldrar ur Paradiset,`,
        `och tog av dem deras kläder för att visa deras nakenhet.`,
        `Han och hans stam ser er från där ni inte ser dem. Vi har gjort djävlarna till de otrognas vänner.`
      ],
      [
        `A chlann Ádhaimh! Ná ligigí do Shátan sibh a mhealladh mar a d’ardaigh sé bhur dtuismitheoirí as an bPáras,`,
        `ag baint a gcuid éadaí díobh chun a náire a thaispeáint.`,
        `Feiceann sé sibh féin agus a chlann ó áit nach bhfeiceann sibh iad. Rinneamar na deamhain ina gcairde ag na mí-chreidmhigh.`
      ],
      [
        `O kinderen van Adam! Laat Satan jullie niet verleiden zoals hij jullie ouders uit het Paradijs heeft verdreven,`,
        `door hun kleding weg te nemen om hun schaamte te tonen.`,
        `Hij ziet jullie en zijn stam van waar jullie hen niet zien. Wij hebben de duivels tot vrienden gemaakt van de ongelovigen.`
      ],
      [
        `اے بنی آدم! شیطان تمہیں فتنہ میں نہ ڈالے جیسے اس نے تمہارے ماں باپ کو جنت سے نکال دیا،`,
        `اور ان سے ان کا لباس اتار لیا تاکہ ان کی شرمگاہیں دکھائے،`,
        `وہ اور اس کا قبیلہ تمہیں وہاں سے دیکھتے ہیں جہاں تم انہیں نہیں دیکھ سکتے۔ ہم نے شیطانوں کو کافروں کے دوست بنا دیا ہے۔`
      ],
      [
        `Wahai anak cucu Adam! Janganlah setan menipu kalian sebagaimana ia mengeluarkan kedua orang tua kalian dari surga,`,
        `menanggalkan pakaian mereka untuk memperlihatkan aurat mereka.`,
        `Sesungguhnya ia dan kaumnya melihat kalian dari tempat yang kalian tidak dapat melihat mereka. Kami menjadikan setan sebagai pelindung orang-orang yang tidak beriman.`
      ],
      [
        `Ey Âdemoğulları! Şeytan sizi, anne babanızı cennetten çıkardığı gibi fitneye düşürmesin,`,
        `onların elbiselerini çıkarıp avret yerlerini göstermesi için.`,
        `O ve kabilesi sizi görür ama siz onları göremezsiniz. Biz şeytanları inanmayanların dostları kıldık.`
      ],
      [
        `ای فرزندان آدم! شیطان شما را فریب ندهد همان‌گونه که پدر و مادرتان را از بهشت بیرون کرد،`,
        `و لباسشان را از تنشان گرفت تا عورتشان را نشان دهد،`,
        `او و قبیله‌اش شما را از جایی می‌بینند که شما آنها را نمی‌بینید. ما شیاطین را دوستان کافران قرار دادیم.`
      ],
      [
        `হে আদম সন্তান! শয়তান যেন তোমাদের ফিতনায় না ফেলে যেমন সে তোমাদের পিতামাতাকে জান্নাত থেকে বের করে দিয়েছিল,`,
        `এবং তাদের পোশাক খুলে তাদের লজ্জাস্থান দেখিয়েছিল,`,
        `সে ও তার দল তোমাদের এমন স্থান থেকে দেখে যেখানে তোমরা তাদের দেখতে পাও না। আমরা শয়তানদেরকে অবিশ্বাসীদের বন্ধু বানিয়েছি।`
      ],
      [
        `Ó filhos de Adão! Que Satanás não vos tente como ele expulsou vossos pais do Paraíso,`,
        `retirando suas vestes para mostrar-lhes suas partes íntimas.`,
        `Ele e sua tribo vos veem de onde vós não os vedes. Fizemos dos demônios aliados dos que não creem.`
      ],
      [
        `阿丹的子孙啊！不要让恶魔诱惑你们，就像他使你们的父母从乐园中出来一样，`,
        `剥去他们的衣服以显露他们的羞体，`,
        `他和他的族类从你们看不见的地方看见你们。我们使恶魔成为不信者的盟友。`
      ],
      [
        `アーダムの子孫よ！悪魔に惑わされてはならない。彼はあなた方の両親を楽園から追い出したように、`,
        `衣服を剥ぎ取り、彼らの裸を見せた。`,
        `彼とその一族はあなた方を見ているが、あなた方は彼らを見ることができない。われらは悪魔を不信仰者の友とした。`
      ],
      [
        `아담의 자손들이여! 사탄이 너희를 유혹하지 못하게 하라. 그는 너희 부모를 천국에서 쫓아낸 것처럼,`,
        `그들의 옷을 벗겨 그들의 부끄러운 부분을 드러냈다.`,
        `그와 그의 무리는 너희를 너희가 보지 못하는 곳에서 본다. 우리는 사탄들을 불신자들의 친구로 만들었다.`
      ],
      [
        `O figli di Adamo! Non lasciate che Satana vi tenti come ha fatto uscire i vostri genitori dal Paradiso,`,
        `strappando loro le vesti per mostrare la loro nudità.`,
        `Egli e la sua stirpe vi vedono da dove voi non li vedete. Abbiamo reso i demoni alleati dei miscredenti.`
      ],
      [
        `O synowie Adama! Niech szatan was nie zwodzi, tak jak wyprowadził waszych rodziców z Raju,`,
        `zdejmując z nich odzież, aby ukazać ich nagość.`,
        `On i jego plemię widzą was z miejsca, z którego wy ich nie widzicie. Uczyniliśmy szatanów sojusznikami niewierzących.`
      ],
      [
        `О сини Адама! Нехай сатана не спокушає вас, як він вивів ваших батьків з Раю,`,
        `знімаючи з них одяг, щоб показати їхню наготу.`,
        `Він і його плем’я бачать вас звідти, звідки ви їх не бачите. Ми зробили шайтанів союзниками невіруючих.`
      ]
    ],
    number: `سورة الأعراف / Al-A'raf، الآية 27`
  },

  {
    arabic: [
      `يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ`,
      `وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا`,
      `إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ`
    ],
    translations: [
      [
        `O children of Adam, take your adornment at every mosque,`,
        `and eat and drink, but do not be extravagant.`,
        `Indeed, He does not like those who commit excess.`
      ],
      [
        `Ô enfants d’Adam, prenez votre parure à chaque mosquée,`,
        `et mangez et buvez, mais ne soyez pas excessifs.`,
        `Allah n’aime pas les extravagants.`
      ],
      [
        `¡Oh hijos de Adán! Tomad vuestra belleza en cada mezquita,`,
        `comed y bebed, pero no os excedáis.`,
        `Ciertamente, Él no ama a los derrochadores.`
      ],
      [
        `О дети Адама! Берите свои украшения при каждой мечети,`,
        `ешьте и пейте, но не излишествуйте.`,
        `Воистину, Он не любит расточительных.`
      ],
      [
        `O Kinder Adams! Nehmt euren Schmuck bei jeder Moschee,`,
        `esst und trinkt, aber verschwendet nicht.`,
        `Wahrlich, Er liebt die Maßlosen nicht.`
      ],
      [
        `O Adams barn! Ta er prydnad vid varje moské,`,
        `ät och drick, men var inte överdrivna.`,
        `Han älskar inte de som överdriver.`
      ],
      [
        `A chlann Ádhaimh! Glacaigí bhur n-áilleacht ag gach mosc,`,
        `ithigí agus ólaigí, ach ná bígí róthromchúiseach.`,
        `Ní thaitníonn leis an iomarcaíocht.`
      ],
      [
        `O kinderen van Adam! Neem jullie sier bij elke moskee,`,
        `eet en drink, maar wees niet buitensporig.`,
        `Hij houdt niet van de verspillers.`
      ],
      [
        `اے بنی آدم! ہر مسجد کے پاس اپنی زینت اختیار کرو،`,
        `اور کھاؤ پیو مگر اسراف نہ کرو،`,
        `بے شک اللہ اسراف کرنے والوں کو پسند نہیں کرتا۔`
      ],
      [
        `Wahai anak cucu Adam! Pakailah pakaian terbaik kalian di setiap masjid,`,
        `makan dan minumlah, tetapi jangan berlebihan.`,
        `Sesungguhnya Allah tidak menyukai orang-orang yang berlebihan.`
      ],
      [
        `Ey Âdemoğulları! Her mescitte süsünüzü alın,`,
        `yiyin ve için fakat israf etmeyin.`,
        `Allah israf edenleri sevmez.`
      ],
      [
        `ای فرزندان آدم! زینت خود را هنگام هر مسجدی برگیرید،`,
        `بخورید و بیاشامید ولی اسراف نکنید،`,
        `همانا خداوند اسراف‌کنندگان را دوست ندارد.`
      ],
      [
        `হে আদম সন্তান! প্রত্যেক মসজিদে তোমাদের সাজ-সজ্জা গ্রহণ করো,`,
        `খাও ও পান করো কিন্তু অপচয় করো না,`,
        `নিশ্চয়ই আল্লাহ অপচয়কারীদের ভালোবাসেন না।`
      ],
      [
        `Ó filhos de Adão! Tomai vossos adornos em cada mesquita,`,
        `comei e bebei, mas não sejais extravagantes.`,
        `Ele não ama os que cometem excessos.`
      ],
      [
        `阿丹的子孙啊！在每座清真寺前穿上你们的装饰，`,
        `吃喝，但不要浪费。`,
        `真主确实不喜爱浪费的人。`
      ],
      [
        `アーダムの子孫よ！すべてのモスクで装いを整え、`,
        `食べて飲むが、浪費してはならない。`,
        `確かにアッラーは浪費する者を愛されない。`
      ],
      [
        `아담의 자손들이여! 모든 모스크에서 너희의 단장을 취하라,`,
        `먹고 마시되 낭비하지 말라.`,
        `실로 알্লাহ는 낭비하는 자들을 사랑하지 않는다.`
      ],
      [
        `O figli di Adamo! Prendete il vostro ornamento in ogni moschea,`,
        `mangiate e bevete, ma non siate eccessivi.`,
        `Allah non ama gli eccessivi.`
      ],
      [
        `O synowie Adama! Przy każdej meczecie przywdziewajcie swoje ozdoby,`,
        `jedzcie i pijcie, ale nie marnotrawcie.`,
        `Allah nie kocha marnotrawców.`
      ],
      [
        `О сини Адама! Беріть свою прикрасу при кожній мечеті,`,
        `їжте і пийте, але не марнуйте.`,
        `Воістину, Аллах не любить марнотратних.`
      ]
    ],
    number: `سورة الأعراف / Al-A'raf، الآية 31`
  },

  {
    arabic: [
      `يَا بَنِي آدَمَ إِمَّا يَأْتِيَنَّكُمْ رُسُلٌ مِّنكُمْ يَقُصُّونَ عَلَيْكُمْ آيَاتِي`,
      `فَمَنِ اتَّقَىٰ وَأَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ`,
      ``
    ],
    translations: [
      [
        `O children of Adam, whenever there come to you messengers from among yourselves recounting My signs,`,
        `those who fear Allah and do righteous deeds – there will be no fear upon them, nor will they grieve.`,
        ``
      ],
      [
        `Ô enfants d’Adam, lorsque des messagers viendront à vous parmi vous, vous récitant Mes signes,`,
        `ceux qui craignent Allah et accomplissent de bonnes œuvres n’auront aucune crainte et ne seront point affligés.`,
        ``
      ],
      [
        `¡Oh hijos de Adán! Cuando os lleguen mensajeros de entre vosotros recitando Mis signos,`,
        `quienes teman a Allah y hagan buenas obras no tendrán temor ni se entristecerán.`,
        ``
      ],
      [
        `О дети Адама! Когда к вам придут посланники из вас, читающие Мои знамения,`,
        `те, кто богобоязнен и совершает праведные дела, не будут испытывать страха и не будут печалиться.`,
        ``
      ],
      [
        `O Kinder Adams! Wenn zu euch Gesandte aus eurer Mitte kommen, die Meine Zeichen vortragen,`,
        `so werden diejenigen, die Allah fürchten und rechtschaffene Werke tun, weder Angst noch Trauer haben.`,
        ``
      ],
      [
        `O Adams barn! När budbärare kommer till er från er själva som framför Mina tecken,`,
        `så kommer de som fruktar Allah och gör goda gärningar inte att frukta eller sörja.`,
        ``
      ],
      [
        `A chlann Ádhaimh! Nuair a thagann teachtairí chugaibh as bhur measc ag léamh Mo chomharthaí,`,
        `ní bheidh eagla ná brón ar na daoine a bhfuil eagla Dé orthu agus a dhéanann dea-ghníomhartha.`,
        ``
      ],
      [
        `O kinderen van Adam! Wanneer er boodschappers uit jullie midden tot jullie komen die Mijn tekenen voordragen,`,
        `dan zullen degenen die Allah vrezen en goede daden verrichten geen angst of verdriet kennen.`,
        ``
      ],
      [
        `اے بنی آدم! جب تمہارے پاس تم ہی میں سے رسول آئیں جو میری آیات تمہیں سنائیں،`,
        `تو جو لوگ تقویٰ اختیار کریں اور اصلاح کریں ان پر نہ کوئی خوف ہوگا اور نہ وہ غمگین ہوں گے۔`,
        ``
      ],
      [
        `Wahai anak cucu Adam! Jika datang kepada kalian rasul-rasul dari kalangan kalian yang membacakan ayat-ayat-Ku,`,
        `maka orang yang bertakwa dan berbuat baik tidak akan merasa takut dan tidak akan bersedih hati.`,
        ``
      ],
      [
        `Ey Âdemoğulları! Size içinizden ayetlerimi anlatan peygamberler geldiğinde,`,
        `kim Allah’tan korkar ve salih amel işlerse onlara korku yoktur ve onlar üzülmeyeceklerdir.`,
        ``
      ],
      [
        `ای فرزندان آدم! هنگامی که پیامبرانی از میان خودتان نزد شما آیات مرا بخوانند،`,
        `پس کسانی که تقوا پیشه کنند و اصلاح نمایند، نه ترسی بر آنان است و نه اندوهگین خواهند شد.`,
        ``
      ],
      [
        `হে আদম সন্তান! যখন তোমাদের মধ্য থেকে রাসূলগণ তোমাদের কাছে আমার আয়াতসমূহ পাঠ করবে,`,
        `যারা আল্লাহকে ভয় করে এবং সৎকর্ম করে তাদের কোন ভয় থাকবে না এবং তারা দুঃখিতও হবে না।`,
        ``
      ],
      [
        `Ó filhos de Adão! Quando mensageiros dentre vós vos vierem recitando Meus sinais,`,
        `aqueles que temerem a Allah e fizerem o bem não terão medo nem se entristecerão.`,
        ``
      ],
      [
        `阿丹的子孙啊！当来自你们中的使者向你们宣读我的迹象时，`,
        `凡敬畏真主并行善的人，将没有恐惧，也不会忧伤。`,
        ``
      ],
      [
        `アーダムの子孫よ！あなた方の中から使徒が現れ、わが印を語るとき、`,
        `アッラーを畏れ善行をする者には恐れも悲しみもない。`,
        ``
      ],
      [
        `아담의 자손들이여! 너희 가운데서 보낸 사자들이 나의 계시를 낭송할 때,`,
        `하나님을 두려워하고 선을 행하는 자들에게는 두려움도 슬픔도 없을 것이다.`,
        ``
      ],
      [
        `O figli di Adamo! Quando vi giungono messaggeri tra voi che vi recitano i Miei segni,`,
        `coloro che temono Allah e compiono il bene non avranno timore né si affliggeranno.`,
        ``
      ],
      [
        `O synowie Adama! Gdy przyjdą do was posłańcy spośród was, recytując Moje znaki,`,
        `ci, którzy boją się Allaha i czynią dobro, nie będą się lękać ani smucić.`,
        ``
      ],
      [
        `О сини Адама! Коли до вас прийдуть посланці з-поміж вас, які читають Мої знамення,`,
        `ті, хто боїться Аллаха і чинить добро, не матимуть страху і не будуть сумувати.`,
        ``
      ]
    ],
    number: `سورة الأعراف / Al-A'raf، الآية 35`
  },

  {
    arabic: [
      `قُلْ يَا أَيُّهَا النَّاسُ إِنِّي رَسُولُ اللَّهِ إِلَيْكُمْ جَمِيعًا`,
      `الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ۖ لَا إِلَٰهَ إِلَّا هُوَ`,
      `يُحْيِي وَيُمِيتُ ۖ فَآمِنُوا بِاللَّهِ وَرَسُولِهِ`
    ],
    translations: [
      [
        `Say, O mankind, indeed I am the Messenger of Allah to you all,`,
        `to Him belongs the dominion of the heavens and the earth; there is no deity except Him.`,
        `He gives life and causes death, so believe in Allah and His Messenger.`
      ],
      [
        `Dis : Ô hommes ! Je suis pour vous tous le Messager d’Allah,`,
        `à Lui appartient la souveraineté des cieux et de la terre, il n’y a de divinité que Lui,`,
        `Il donne la vie et donne la mort, alors croyez en Allah et en Son Messager.`
      ],
      [
        `Di: ¡Oh humanidad! Yo soy el Mensajero de Allah para todos vosotros,`,
        `a Él pertenece el dominio de los cielos y la tierra; no hay divinidad sino Él,`,
        `Él da la vida y da la muerte, así que creed en Allah y en Su Mensajero.`
      ],
      [
        `Скажи: О люди! Я — Посланник Аллаха ко всем вам,`,
        `Ему принадлежит власть над небесами и землёй, нет божества кроме Него,`,
        `Он оживляет и умерщвляет, так уверуйте в Аллаха и Его Посланника.`
      ],
      [
        `Sag: O ihr Menschen! Ich bin der Gesandte Allahs zu euch allen,`,
        `Ihm gehört die Herrschaft der Himmel und der Erde; es gibt keinen Gott außer Ihm,`,
        `Er gibt Leben und lässt sterben, so glaubt an Allah und Seinen Gesandten.`
      ],
      [
        `Säg: O människor! Jag är Allahs sändebud till er alla,`,
        `Hans är herraväldet över himlarna och jorden; ingen gud finns utom Han,`,
        `Han ger liv och orsakar död, så tro på Allah och Hans sändebud.`
      ],
      [
        `Abair: A dhaoine uaisle! Is mise Teachtaire Allah chugaibh go léir,`,
        `is leis an gceannas ar na flaithis agus an talamh é; níl dia ann ach Sé,`,
        `tugann Sé beatha agus bás, mar sin creidigí in Allah agus ina Theachtaire.`
      ],
      [
        `Zeg: O mensheid! Ik ben de Boodschapper van Allah tot jullie allen,`,
        `Hem behoort de heerschappij van de hemelen en de aarde; er is geen god behalve Hij,`,
        `Hij geeft leven en veroorzaakt de dood, geloof dus in Allah en Zijn Boodschapper.`
      ],
      [
        `کہہ دو: اے لوگو! میں تم سب کی طرف اللہ کا رسول ہوں،`,
        `اسی کے لیے آسمانوں اور زمین کی بادشاہی ہے، اس کے سوا کوئی معبود نہیں،`,
        `وہی زندگی دیتا ہے اور وہی موت دیتا ہے، پس اللہ اور اس کے رسول پر ایمان لاؤ۔`
      ],
      [
        `Katakanlah: Wahai manusia! Sesungguhnya aku adalah utusan Allah kepada kalian semua,`,
        `milik-Nya kerajaan langit dan bumi; tidak ada tuhan selain Dia,`,
        `Dia menghidupkan dan mematikan, maka berimanlah kepada Allah dan Rasul-Nya.`
      ],
      [
        `De ki: Ey insanlar! Ben Allah’ın hepinize gönderdiği elçiyim,`,
        `göklerin ve yerin mülkü O’na aittir; O’ndan başka ilah yoktur,`,
        `O diriltir ve öldürür, Allah’a ve Resulüne iman edin.`
      ],
      [
        `بگو: ای مردم! من فرستاده خدا به سوی همه شما هستم،`,
        `پادشاهی آسمان‌ها و زمین از آنِ اوست، هیچ معبودی جز او نیست،`,
        `او زنده می‌کند و می‌میراند، پس به خدا و پیامبرش ایمان بیاورید.`
      ],
      [
        `বলুন: হে মানবজাতি! আমি তোমাদের সকলের জন্য আল্লাহর রাসূল,`,
        `আসমান ও জমিনের মালিক তিনি, তিনি ছাড়া কোনো উপাস্য নেই,`,
        `তিনি জীবন দেন ও মৃত্যু দেন, অতএব আল্লাহ ও তাঁর রাসূলের প্রতি ঈমান আনো।`
      ],
      [
        `Dize: Ó humanidade! Eu sou o Mensageiro de Allah para todos vós,`,
        `a Ele pertence o domínio dos céus e da terra; não há divindade além d’Ele,`,
        `Ele dá a vida e a morte, então crede em Allah e em Seu Mensageiro.`
      ],
      [
        `你说：人类啊！我确是安拉派给你们全体的使者，`,
        `天地的国权只归他；除他外绝无应受崇拜的，`,
        `他使生与死，所以你们当信仰真主和他的使者。`
      ],
      [
        `言え：人々よ！私はあなた方全員へのアッラーの使徒である、`,
        `天と地の主権は彼のものであり、彼以外に神はない、`,
        `彼は生と死を与えるので、アッラーとその使徒を信じよ。`
      ],
      [
        `말하라: 사람들이여! 나는 너희 모두에게 보낸 알্লাহ의 사도이다,`,
        `하늘과 땅의 주권은 그분의 것이며 그 외에 신은 없다,`,
        `그분은 생명을 주고 죽음을 주시니 알্লাহ와 그의 사도를 믿어라.`
      ],
      [
        `Di’: O uomini! Io sono il Messaggero di Allah per tutti voi,`,
        `a Lui appartiene il dominio dei cieli e della terra; non c’è dio all’infuori di Lui,`,
        `Egli dà la vita e la morte, credete dunque in Allah e nel Suo Messaggero.`
      ],
      [
        `Powiedz: O ludzie! Jestem Posłańcem Allaha do was wszystkich,`,
        `do Niego należy królestwo niebios i ziemi; nie ma boga prócz Niego,`,
        `On daje życie i śmierć, więc wierzcie w Allaha i Jego Posłańca.`
      ],
      [
        `Скажи: О люди! Я — Посланець Аллаха до всіх вас,`,
        `Йому належить влада небес і землі; немає божества крім Нього,`,
        `Він дає життя і смерть, тож увіруйте в Аллаха і Його Посланця.`
      ]
    ],
    number: `سورة الأعراف / Al-A'raf، الآية 158`
  },

  {
    arabic: [
      `وَإِذَا قُرِئَ الْقُرآنُ فَاسْتَمِعُوا لَهُ`,
      `وَأَنصِتُوا لَعَلَّكُمْ تُرْحَمُونَ`,
      ``
    ],
    translations: [
      [
        `So when the Qur'an is recited, then listen to it`,
        `and pay attention that you may receive mercy.`,
        ``
      ],
      [
        `Et lorsque le Coran est récité, écoutez-le`,
        `et gardez le silence afin que vous obteniez la miséricorde.`,
        ``
      ],
      [
        `Y cuando se recite el Corán, escúchenlo`,
        `y guarden silencio para que puedan recibir misericordia.`,
        ``
      ],
      [
        `Когда читается Коран, слушайте его`,
        `и молчите, чтобы вы могли получить милость.`,
        ``
      ],
      [
        `Und wenn der Koran rezitiert wird, dann hört ihm zu`,
        `und schweigt, auf dass ihr Erbarmen findet.`,
        ``
      ],
      [
        `Och när Koranen reciteras, lyssna på den`,
        `och var tysta så att ni må få barmhärtighet.`,
        ``
      ],
      [
        `Agus nuair a léitear an Córán, éistigí leis`,
        `agus bígí ciúin ionas go bhfaighidh sibh trócaire.`,
        ``
      ],
      [
        `En wanneer de Koran wordt gereciteerd, luister er dan naar`,
        `en wees stil opdat jullie genade mogen ontvangen.`,
        ``
      ],
      [
        `اور جب قرآن پڑھا جائے تو اسے غور سے سنو`,
        `اور خاموش رہو تاکہ تم پر رحم کیا جائے۔`,
        ``
      ],
      [
        `Dan apabila Al-Qur'an dibacakan, maka dengarkanlah`,
        `dan diamlah agar kamu mendapat rahmat.`,
        ``
      ],
      [
        `Kur'an okunduğunda onu dinleyin`,
        `ve susun ki rahmete eresiniz.`,
        ``
      ],
      [
        `و هنگامی که قرآن خوانده می‌شود، به آن گوش دهید`,
        `و سکوت کنید تا مورد رحمت قرار گیرید.`,
        ``
      ],
      [
        `আর যখন কুরআন তিলাওয়াত করা হয়, তখন তা মনোযোগ দিয়ে শোনো`,
        `এবং চুপ থাকো যাতে তোমরা রহমত পেতে পারো।`,
        ``
      ],
      [
        `E quando o Alcorão for recitado, então escutem-no`,
        `e fiquem em silêncio para que possam receber misericórdia.`,
        ``
      ],
      [
        `当《古兰经》被诵读时，你们应当倾听`,
        `并保持安静，以便你们蒙受怜悯。`,
        ``
      ],
      [
        `クルアーンが読まれるとき、それに耳を傾けよ`,
        `そして静かにせよ、そうすれば慈悲を受けるであろう。`,
        ``
      ],
      [
        `꾸란이 낭송될 때 그것을 경청하고`,
        `침묵하라, 그래야 자비를 받을 수 있다.`,
        ``
      ],
      [
        `E quando il Corano viene recitato, ascoltatelo`,
        `e fate silenzio affinché possiate ricevere misericordia.`,
        ``
      ],
      [
        `A gdy recytowany jest Koran, słuchajcie go`,
        `i milczcie, abyście dostąpili miłosierdzia.`,
        ``
      ],
      [
        `Коли читається Коран, слухайте його`,
        `і мовчіть, щоб ви могли отримати милість.`,
        ``
      ]
    ],
    number: `سورة الأعراف / Al-A'raf، الآية 204`
  },

  {
    arabic: [
      `إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ`,
      `وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ`,
      `زَادَتْهُمْ إِيمَانًا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ`
    ],
    translations: [
      [
        `The believers are only those who, when Allah is mentioned, feel fear in their hearts`,
        `and when His Verses are recited unto them, they increase their Faith;`,
        `and they put their trust in their Lord (Alone).`
      ],
      [
        `Les croyants sont seulement ceux dont les cœurs frémissent lorsque le nom d’Allah est mentionné`,
        `et lorsque Ses versets leur sont récités, cela augmente leur foi,`,
        `et ils placent leur confiance en leur Seigneur seul.`
      ],
      [
        `Los creyentes son solo aquellos cuyos corazones tiemblan cuando se menciona a Allah`,
        `y cuando se les recitan Sus versículos, aumenta su fe,`,
        `y ponen su confianza en su Señor únicamente.`
      ],
      [
        `Верующие — это только те, у которых трепещут сердца, когда упоминается Аллах`,
        `и когда им читаются Его аяты, их вера увеличивается,`,
        `и они полагаются на своего Господа.`
      ],
      [
        `Die Gläubigen sind nur diejenigen, deren Herzen erzittern, wenn Allah erwähnt wird`,
        `und wenn Seine Verse ihnen vorgetragen werden, ihr Glaube zunimmt,`,
        `und die sich auf ihren Herrn verlassen.`
      ],
      [
        `De troende är endast de vars hjärtan skälver när Allah nämns`,
        `och när Hans verser reciteras för dem ökar deras tro,`,
        `och de förlitar sig på sin Herre.`
      ],
      [
        `Is iad na creidmhigh amháin iad siúd a mbíonn a gcroíthe ag crith nuair a luaitear Allah`,
        `agus nuair a léitear a véarsaí dóibh, méadaíonn a gcreideamh,`,
        `agus cuireann siad a muinín ina dTiarna.`
      ],
      [
        `De gelovigen zijn slechts degenen wiens harten beven wanneer Allah wordt genoemd`,
        `en wanneer Zijn verzen aan hen worden gereciteerd, neemt hun geloof toe,`,
        `en zij vertrouwen op hun Heer.`
      ],
      [
        `بے شک مومن وہی ہیں کہ جب اللہ کا ذکر کیا جاتا ہے تو ان کے دل کانپ اٹھتے ہیں`,
        `اور جب ان پر اس کی آیات پڑھی جاتی ہیں تو ان کا ایمان بڑھ جاتا ہے`,
        `اور وہ اپنے رب ہی پر بھروسہ کرتے ہیں۔`
      ],
      [
        `Sesungguhnya orang-orang beriman adalah mereka yang apabila disebut nama Allah, hati mereka bergetar`,
        `dan apabila dibacakan ayat-ayat-Nya, bertambah iman mereka,`,
        `dan hanya kepada Tuhan mereka bertawakal.`
      ],
      [
        `Müminler ancak Allah anıldığında kalpleri titreyen kimselerdir`,
        `ve ayetleri kendilerine okunduğunda imanları artar,`,
        `ve sadece Rablerine tevekkül ederler.`
      ],
      [
        `مؤمنان تنها کسانی هستند که وقتی نام خدا برده می‌شود، دل‌هایشان می‌لرزد`,
        `و هنگامی که آیاتش بر آنان خوانده می‌شود، ایمانشان افزوده می‌شود،`,
        `و بر پروردگارشان توکل می‌کنند.`
      ],
      [
        `মুমিন তারাই যাদের হৃদয় কেঁপে ওঠে যখন আল্লাহকে স্মরণ করা হয়`,
        `এবং যখন তাঁর আয়াত তাদের সামনে পাঠ করা হয়, তাদের ঈমান বৃদ্ধি পায়,`,
        `এবং তারা তাদের প্রতিপালকের উপরই ভরসা করে।`
      ],
      [
        `Os crentes são apenas aqueles cujos corações tremem quando Allah é mencionado`,
        `e quando Seus versículos lhes são recitados, sua fé aumenta,`,
        `e eles confiam apenas em seu Senhor.`
      ],
      [
        `信士只是那些当真主被提及时心中战栗的人`,
        `当有人向他们诵读他的启示时，他们的信仰增加，`,
        `并且只信赖他们的主。`
      ],
      [
        `信者とは、アッラーがذكرされると心が震える者たちである`,
        `そして彼の啓示が読まれると信仰が増し、`,
        `彼らは主にのみ信頼する。`
      ],
      [
        `믿는 자들은 알্লাহ가 언급될 때 마음이 떨리는 자들이며`,
        `그의 구절이 낭송될 때 믿음이 증가하고,`,
        `그들은 오직 주님께 의탁한다.`
      ],
      [
        `I credenti sono solo coloro i cui cuori tremano quando Allah viene menzionato`,
        `e quando i Suoi versetti vengono recitati loro, la loro fede aumenta,`,
        `e confidano nel loro Signore.`
      ],
      [
        `Wierzący są tylko tymi, których serca drżą, gdy wspomniany jest Allah`,
        `a gdy recytowane są im Jego wersety, ich wiara wzrasta,`,
        `i polegają na swoim Panu.`
      ],
      [
        `Віруючі — це лише ті, у кого тремтять серця, коли згадується Аллах`,
        `і коли їм читаються Його аяти, їхня віра зростає,`,
        `і вони покладаються на свого Господа.`
      ]
    ],
    number: `سورة الأنفال / Al-Anfal، الآية 2`
  },

  {
    arabic: [
      `لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ`,
      `عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ`,
      `حَرِيصٌ عَلَيْكُم بِالْمُؤْمِنِينَ`,
      `رَءُوفٌ رَّحِيمٌ`
    ],
    translations: [
      [
        `There has certainly come to you a Messenger from among yourselves,`,
        `Grievous to him is what you suffer;`,
        `[he is] concerned over you and to the believers is kind and merciful.`
      ],
      [
        `Certes, un Messager est venu à vous parmi vous-mêmes,`,
        `il lui est pénible ce que vous souffrez,`,
        `il est soucieux de vous et envers les croyants il est plein de bonté et de miséricorde.`
      ],
      [
        `Ciertamente os ha venido un Mensajero de entre vosotros mismos,`,
        `le duele lo que sufrís,`,
        `está preocupado por vosotros y es amable y misericordioso con los creyentes.`
      ],
      [
        `К вам уже пришёл Посланник из вас самих,`,
        `тяжело ему то, что вы страдаете,`,
        `он заботится о вас и к верующим сострадателен и милосерден.`
      ],
      [
        `Wahrlich, zu euch ist ein Gesandter aus euch selbst gekommen,`,
        `es ist ihm schwer, was ihr leidet,`,
        `er sorgt sich um euch und ist zu den Gläubigen gütig und barmherzig.`
      ],
      [
        `Sannerligen, en sändebud har kommit till er från er själva,`,
        `det är tungt för honom det ni lider,`,
        `han bryr sig om er och är mild och barmhärtig mot de troende.`
      ],
      [
        `Go deimhin, tháinig Teachta chugaibh as bhur measc féin,`,
        `tá sé trom air an méid a fhulaingíonn sibh,`,
        `tá sé buartha fúibh agus tá sé trócaireach leis na creidmhigh.`
      ],
      [
        `Er is zeker een Boodschapper tot jullie gekomen uit julliezelf,`,
        `het is zwaar voor hem wat jullie lijden,`,
        `hij is bezorgd over jullie en vriendelijk en barmhartig voor de gelovigen.`
      ],
      [
        `یقیناً تمہارے پاس تم ہی میں سے ایک رسول آیا ہے،`,
        `تمہاری تکلیف اس پر شاق گزرتی ہے،`,
        `وہ تمہارا بہت خیال رکھنے والا اور مومنوں پر نہایت مہربان اور رحم کرنے والا ہے۔`
      ],
      [
        `Sungguh telah datang kepada kalian seorang رسول dari kalangan kalian sendiri,`,
        `berat terasa olehnya penderitaan kalian,`,
        `ia sangat menginginkan kebaikan bagi kalian dan kepada orang-orang beriman ia penyayang lagi penyantun.`
      ],
      [
        `Andolsun, size kendi içinizden bir رسول gelmiştir,`,
        `sizin sıkıntıya düşmeniz ona ağır gelir,`,
        `sizin için çok düşkün ve müminlere karşı çok şefkatli ve merhametlidir.`
      ],
      [
        `به یقین، رسولی از خود شما به سویتان آمد،`,
        `رنج شما بر او سخت است،`,
        `او نسبت به شما دلسوز و نسبت به مؤمنان مهربان و رحیم است.`
      ],
      [
        `নিশ্চয়ই তোমাদের মধ্য থেকেই তোমাদের কাছে একজন রাসূল এসেছেন,`,
        `তোমাদের কষ্ট তাঁর জন্য কষ্টদায়ক,`,
        `তিনি তোমাদের প্রতি আগ্রহী এবং মুমিনদের প্রতি দয়ালু ও করুণাময়।`
      ],
      [
        `Certamente já vos chegou um Mensageiro dentre vós,`,
        `é-lhe penoso o que sofreis,`,
        `ele é zeloso por vós e para com os crentes é compassivo e misericordioso.`
      ],
      [
        `确已从你们之中来了一个使者，`,
        `你们所遭受的痛苦使他难过，`,
        `他关心你们，对信士是仁慈、慈悲的。`
      ],
      [
        `あなた方の中から一人の使徒がすでにあなた方に来た、`,
        `あなた方の苦しみは彼にとって辛いものであり、`,
        `彼はあなた方を思いやり、信者に対して慈悲深く優しい。`
      ],
      [
        `너희 가운데서 한 رسول이 이미 너희에게 왔으니,`,
        `너희의 고통은 그에게 тяж하다,`,
        `그는 너희를 염려하며 믿는 자들에게 자비롭고 الرحيم하다.`
      ],
      [
        `Certamente vi è venuto un Messaggero tra voi stessi,`,
        `gli pesa ciò che soffrite,`,
        `è premuroso per voi e verso i credenti è compassionevole e misericordioso.`
      ],
      [
        `Z pewnością przyszedł do was Posłaniec spośród was samych,`,
        `ciężko mu to, co was dotyka,`,
        `troszczy się o was i jest dla wierzących łagodny i miłosierny.`
      ],
      [
        `Воістину, до вас прийшов Посланник із вас самих,`,
        `йому тяжко те, що ви страждаєте,`,
        `він піклується про вас і до віруючих є співчутливим і милосердним.`
      ]
    ],
    number: `سورة التوبة / At-Tawbah، الآية 128`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ إِنَّمَا بَغْيُكُمْ عَلَىٰ أَنفُسِكُمْ`,
      `مَّتَاعَ الْحَيَاةِ الدُّنْيَا`,
      `ثُمَّ إِلَيْنَا مَرْجِعُكُمْ فَنُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ`
    ],
    translations: [
      [
        `O mankind, your transgression is only against yourselves,`,
        `a temporary enjoyment of worldly life;`,
        `then to Us is your return, and We will inform you of what you used to do.`
      ],
      [
        `Ô hommes ! Votre injustice ne retombe que sur vous-mêmes,`,
        `un bref jouissance de la vie d’ici-bas ;`,
        `puis c’est vers Nous que sera votre retour, et Nous vous informerons de ce que vous faisiez.`
      ],
      [
        `¡Oh humanidad! Vuestra transgresión solo recae sobre vosotros mismos,`,
        `un disfrute temporal de la vida mundanal;`,
        `luego a Nosotros será vuestro retorno, y os informaremos de lo que hacíais.`
      ],
      [
        `О люди! Ваше притеснение обращается лишь против вас самих,`,
        `это лишь временное наслаждение мирской жизни;`,
        `затем к Нам ваше возвращение, и Мы сообщим вам о том, что вы делали.`
      ],
      [
        `O ihr Menschen! Euer Unrecht richtet sich nur gegen euch selbst,`,
        `ein vergänglicher Genuss des diesseitigen Lebens;`,
        `dann ist eure Rückkehr zu Uns, und Wir werden euch über das berichten, was ihr getan habt.`
      ],
      [
        `O människor! Er orättvisa drabbar endast er själva,`,
        `en tillfällig njutning av det jordiska livet;`,
        `sedan är er återkomst till Oss, och Vi kommer att underrätta er om vad ni brukade göra.`
      ],
      [
        `A dhaoine uaisle! Níl bhur gcoire ach i gcoinne bhur n-anam féin,`,
        `saoire ghearr den saol seo;`,
        `ansin is chugainn a bheidh bhur bhfilleadh, agus cuirfimid in iúl daoibh cad a bhí sibh a dhéanamh.`
      ],
      [
        `O mensheid! Jullie onrecht is slechts tegen julliezelf,`,
        `een tijdelijk genot van het wereldse leven;`,
        `dan is jullie terugkeer tot Ons, en Wij zullen jullie berichten wat jullie deden.`
      ],
      [
        `اے لوگو! تمہاری زیادتی صرف تمہارے اپنے اوپر ہے،`,
        `دنیاوی زندگی کا مختصر فائدہ ہے؛`,
        `پھر تمہارا لوٹنا ہماری طرف ہے اور ہم تمہیں تمہارے اعمال بتا دیں گے۔`
      ],
      [
        `Wahai manusia! Kedzaliman kalian hanyalah terhadap diri kalian sendiri,`,
        `kesenangan sementara kehidupan dunia;`,
        `kemudian kepada Kami kalian kembali, dan Kami akan memberitahukan apa yang telah kalian kerjakan.`
      ],
      [
        `Ey insanlar! Haksızlığınız yalnızca kendinizedir,`,
        `dünya hayatının geçici bir zevki;`,
        `sonra dönüşünüz Bize olacaktır ve yaptıklarınızı size haber vereceğiz.`
      ],
      [
        `ای مردم! ستم شما فقط بر خودتان است،`,
        `بهره‌ای اندک از زندگی دنیا؛`,
        `سپس بازگشت شما به سوی ماست و شما را از آنچه انجام می‌دادید آگاه می‌کنیم.`
      ],
      [
        `হে মানবজাতি! তোমাদের অন্যায় কেবল তোমাদের নিজেদের বিরুদ্ধেই,`,
        `এটি পার্থিব জীবনের সাময়িক ভোগ;`,
        `অতঃপর তোমাদের প্রত্যাবর্তন আমাদের কাছেই এবং আমরা তোমাদের কৃতকর্ম জানিয়ে দেব।`
      ],
      [
        `Ó humanidade! Vossa transgressão é apenas contra vós mesmos,`,
        `um gozo temporário da vida mundana;`,
        `então a Nós será o vosso retorno, e informar-vos-emos do que fazíeis.`
      ],
      [
        `人类啊！你们的过分行为只会害及自身，`,
        `只是今世生活的短暂享受；`,
        `然后你们将归于我们，我们将告诉你们你们所做的一切。`
      ],
      [
        `人々よ！あなた方の不正は自分自身に対するものであり、`,
        `それは現世の一時的な享楽にすぎない、`,
        `その後あなた方は我らのもとへ帰り、あなた方の行いを告げられるであろう。`
      ],
      [
        `사람들이여! 너희의 죄악은 오직 너희 자신에게 돌아갈 뿐이며,`,
        `그것은 현세의 잠시적인 향락일 뿐이다,`,
        `그 후 너희는 우리에게로 돌아오게 되며 우리가 너희의 행위를 알려줄 것이다.`
      ],
      [
        `O uomini! La vostra trasgressione ricade solo su voi stessi,`,
        `un godimento temporaneo della vita mondana;`,
        `poi il vostro ritorno sarà verso di Noi e vi informeremo di ciò che facevate.`
      ],
      [
        `O ludzie! Wasze występki są tylko przeciw wam samym,`,
        `krótkotrwałą przyjemnością życia doczesnego;`,
        `potem powrócicie do Nas, a My poinformujemy was o tym, co czyniliście.`
      ],
      [
        `О люди! Ваша несправедливість повертається лише проти вас самих,`,
        `це лише тимчасове користування земним життям;`,
        `потім ваше повернення буде до Нас, і Ми сповістимо вас про те, що ви робили.`
      ]
    ],
    number: `سورة يونس / Yunus، الآية 23`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُم مَوْعِظَةٌ مِّن رَّبِّكُمْ`,
      `وَشِفَاءٌ لِمَا فِي الصُّدُورِ`,
      `وَهُدًى وَرَحْمَةٌ لِّلْمُؤْمِنِينَ`
    ],
    translations: [
      [
        `O humanity! Indeed, there has come to you a warning from your Lord,`,
        `a cure for what is in the hearts,`,
        `a guide, and a mercy for the believers.`
      ],
      [
        `Ô humanité ! Une exhortation vous est certes venue de votre Seigneur,`,
        `un remède pour ce qui est dans les cœurs,`,
        `une guidée et une miséricorde pour les croyants.`
      ],
      [
        `¡Oh humanidad! Ha llegado a vosotros una advertencia de vuestro Señor,`,
        `una cura para lo que hay en los corazones,`,
        `una guía y una misericordia para los creyentes.`
      ],
      [
        `О люди! К вам уже пришло наставление от вашего Господа,`,
        `исцеление для того, что в сердцах,`,
        `и руководство и милость для верующих.`
      ],
      [
        `O ihr Menschen! Zu euch ist eine Ermahnung von eurem Herrn gekommen,`,
        `eine Heilung für das, was in den Herzen ist,`,
        `eine Rechtleitung und eine Barmherzigkeit für die Gläubigen.`
      ],
      [
        `O människor! En förmaning har kommit till er från er Herre,`,
        `en bot för det som finns i hjärtana,`,
        `en vägledning och barmhärtighet för de troende.`
      ],
      [
        `A dhaoine uaisle! Tháinig comhairle chugaibh ó bhur dTiarna,`,
        `leigheas ar an méid atá sna croíthe,`,
        `agus treoir agus trócaire do na creidmhigh.`
      ],
      [
        `O mensheid! Er is tot jullie een vermaning gekomen van jullie Heer,`,
        `een genezing voor wat in de harten is,`,
        `een leiding en barmhartigheid voor de gelovigen.`
      ],
      [
        `اے لوگو! تمہارے پاس تمہارے رب کی طرف سے نصیحت آ چکی ہے،`,
        `دلوں کی بیماریوں کے لیے شفا،`,
        `اور ایمان والوں کے لیے ہدایت اور رحمت۔`
      ],
      [
        `Wahai manusia! Telah datang kepada kalian pelajaran dari Tuhan kalian,`,
        `penyembuh bagi penyakit yang ada di dalam dada,`,
        `dan petunjuk serta rahmat bagi orang-orang beriman.`
      ],
      [
        `Ey insanlar! Rabbinizden size bir öğüt gelmiştir,`,
        `kalplerde olanlara şifa,`,
        `ve müminler için hidayet ve rahmettir.`
      ],
      [
        `ای مردم! از سوی پروردگارتان برای شما پند آمده است،`,
        `شفا برای آنچه در سینه‌هاست،`,
        `و هدایت و رحمتی برای مؤمنان.`
      ],
      [
        `হে মানবজাতি! তোমাদের প্রতিপালকের পক্ষ থেকে তোমাদের কাছে উপদেশ এসেছে,`,
        `যা অন্তরের রোগের জন্য নিরাময়,`,
        `এবং মুমিনদের জন্য হিদায়াত ও রহমত।`
      ],
      [
        `Ó humanidade! Já vos chegou uma exortação do vosso Senhor,`,
        `uma cura para o que há nos corações,`,
        `e orientação e misericórdia para os crentes.`
      ],
      [
        `人类啊！你们的主已降示你们教诲，`,
        `是心中疾病的疗愈，`,
        `并为信士带来引导与慈悯。`
      ],
      [
        `人々よ！あなた方の主から訓戒がすでに来た、`,
        `心の中の病の癒しであり、`,
        `信者への導きと慈悲である。`
      ],
      [
        `사람들이여! 너희 주님으로부터 교훈이 너희에게 왔으니,`,
        `마음속 병의 치유이며,`,
        `믿는 자들에게는 인도와 자비이다.`
      ],
      [
        `O uomini! È giunta a voi un’esortazione dal vostro Signore,`,
        `una guarigione per ciò che è nei cuori,`,
        `e guida e misericordia per i credenti.`
      ],
      [
        `O ludzie! Przyszło do was napomnienie od waszego Pana,`,
        `uzdrowienie dla tego, co jest w sercach,`,
        `oraz przewodnictwo i miłosierdzie dla wierzących.`
      ],
      [
        `О люди! До вас уже прийшло настановлення від вашого Господа,`,
        `зцілення для того, що в серцях,`,
        `і керівництво та милість для віруючих.`
      ]
    ],
    number: `سورة يونس / Yunus، الآية 57`
  },

  {
    arabic: [
      `قُلِ انظُرُوا مَاذَا فِي السَّمَاوَاتِ وَالْأَرْضِ`,
      `وَمَا تُغْنِي الْآيَاتُ وَالنُّذُرُ`,
      `عَنْ قَوْمٍ لَّا يُؤْمِنُونَ`
    ],
    translations: [
      [
        `Say, “Look at what is in the heavens and the earth.”`,
        `But the signs and warnings do not avail`,
        `a people who do not believe.`
      ],
      [
        `Dis : « Regardez ce qui est dans les cieux et la terre. »`,
        `Mais les signes et les avertissements ne profitent pas`,
        `à un peuple qui ne croit pas.`
      ],
      [
        `Di: “Observad lo que hay en los cielos y en la tierra.”`,
        `Pero las señales y las advertencias no benefician`,
        `a un pueblo que no cree.`
      ],
      [
        `Скажи: «Посмотрите на то, что в небесах и на земле».`,
        `Но знамения и предостережения не приносят пользы`,
        `народу, который не верует.`
      ],
      [
        `Sag: „Schaut auf das, was in den Himmeln und auf der Erde ist.“`,
        `Doch die Zeichen und Warnungen nützen nichts`,
        `einem Volk, das nicht glaubt.`
      ],
      [
        `Säg: “Se på det som finns i himlarna och på jorden.”`,
        `Men tecknen och varningarna gagnar inte`,
        `ett folk som inte tror.`
      ],
      [
        `Abair: “Féach ar an méid atá sna spéartha agus sa talamh.”`,
        `Ach ní bhíonn tairbhe ag na comharthaí ná na rabhaidh`,
        `do phobal nach gcreideann.`
      ],
      [
        `Zeg: “Kijk naar wat er in de hemelen en op de aarde is.”`,
        `Maar de tekenen en waarschuwingen baten niet`,
        `een volk dat niet gelooft.`
      ],
      [
        `کہہ دو: دیکھو آسمانوں اور زمین میں کیا ہے۔`,
        `لیکن نشانیاں اور تنبیہیں فائدہ نہیں دیتیں`,
        `ان لوگوں کو جو ایمان نہیں لاتے۔`
      ],
      [
        `Katakanlah: “Perhatikan apa yang ada di langit dan di bumi.”`,
        `Namun tanda-tanda dan peringatan tidak bermanfaat`,
        `bagi kaum yang tidak beriman.`
      ],
      [
        `De ki: “Göklerde ve yerde olanlara bakın.”`,
        `Fakat ayetler ve uyarılar fayda vermez`,
        `inanmayan bir topluma.`
      ],
      [
        `بگو: در آنچه در آسمان‌ها و زمین است بنگرید.`,
        `اما نشانه‌ها و هشدارها سودی نمی‌دهد`,
        `برای قومی که ایمان نمی‌آورند.`
      ],
      [
        `বল: আকাশমণ্ডলী ও পৃথিবীতে যা আছে তা দেখো।`,
        `কিন্তু নিদর্শন ও সতর্কবাণী কোনো উপকার করে না`,
        `এমন জাতির জন্য যারা বিশ্বাস করে না।`
      ],
      [
        `Dize: “Observai o que há nos céus e na terra.”`,
        `Mas os sinais e advertências não beneficiam`,
        `um povo que não crê.`
      ],
      [
        `你说：“你们看看天地之间有什么。”`,
        `但迹象和警告对不信道的 قوم无益。`,
        ``
      ],
      [
        `言え：「天と地にあるものを見よ。」`,
        `しかし印と警告は、信じない قومには役立たない。`,
        ``
      ],
      [
        `말하라: “하늘과 땅에 있는 것을 보라.”`,
        `그러나 표징과 경고는 믿지 않는 قوم에게는 유익하지 않다.`,
        ``
      ],
      [
        `Di’: “Osservate ciò che è nei cieli e nella terra.”`,
        `Ma i segni e gli avvertimenti non giovano`,
        `a un popolo che non crede.`
      ],
      [
        `Powiedz: „Spójrzcie na to, co jest w niebiosach i na ziemi.”`,
        `Lecz znaki i ostrzeżenia nie przynoszą korzyści`,
        `ludziom, którzy nie wierzą.`
      ],
      [
        `Скажи: «Подивіться на те, що є на небесах і на землі».`,
        `Але знамення і застереження не приносять користі`,
        `людям, які не вірують.`
      ]
    ],
    number: `سورة يونس / Yunus، الآية 101`
  },

  {
    arabic: [
      `قُلْ يَا أَيُّهَا النَّاسُ إِن كُنتُمْ فِي شَكٍّ مِّن دِينِي`,
      `فَلَا أَعْبُدُ الَّذِينَ تَعْبُدُونَ مِن دُونِ اللَّهِ`,
      `وَلَٰكِنْ أَعْبُدُ اللَّهَ الَّذِي يَتَوَفَّاكُمْ وَأُمِرْتُ أَنْ أَكُونَ مِنَ الْمُؤْمِنِينَ`
    ],
    translations: [
      [
        `Say, O mankind, if you are in doubt about my religion,`,
        `I do not worship those you worship besides Allah,`,
        `but I worship Allah, Who will take your souls. And I have been commanded to be among the believers.`
      ],
      [
        `Dis : Ô hommes ! Si vous êtes dans le doute au sujet de ma religion,`,
        `je n’adore pas ceux que vous adorez en dehors d’Allah,`,
        `mais j’adore Allah qui vous fera mourir, et il m’a été ordonné d’être parmi les croyants.`
      ],
      [
        `Di: ¡Oh humanidad! Si estáis en duda sobre mi religión,`,
        `no adoro a quienes vosotros adoráis fuera de Allah,`,
        `pero adoro a Allah, Quien os hará morir, y se me ha ordenado estar entre los creyentes.`
      ],
      [
        `Скажи: О люди! Если вы сомневаетесь в моей религии,`,
        `я не поклоняюсь тем, кому вы поклоняетесь помимо Аллаха,`,
        `но я поклоняюсь Аллаху, Который умертвит вас, и мне велено быть среди верующих.`
      ],
      [
        `Sag: O ihr Menschen! Wenn ihr im Zweifel über meine Religion seid,`,
        `so diene ich nicht denen, die ihr außer Allah anbetet,`,
        `sondern ich diene Allah, der euch sterben lässt, und mir wurde befohlen, zu den Gläubigen zu gehören.`
      ],
      [
        `Säg: O människor! Om ni tvivlar på min religion,`,
        `så dyrkar jag inte dem ni dyrkar förutom Allah,`,
        `utan jag dyrkar Allah som tar era själar, och jag har blivit befalld att vara bland de troende.`
      ],
      [
        `Abair: A dhaoine uaisle! Má tá sibh amhrasach faoi mo reiligiún,`,
        `ní adhraim na rudaí a adhrann sibh seachas Allah,`,
        `ach adhraim Allah a thógfaidh bhur n-anamacha, agus ordaíodh dom a bheith i measc na gcreidmheach.`
      ],
      [
        `Zeg: O mensheid! Als jullie twijfelen aan mijn religie,`,
        `dan aanbid ik niet degenen die jullie naast Allah aanbidden,`,
        `maar ik aanbid Allah, Die jullie zielen zal nemen, en mij is bevolen tot de gelovigen te behoren.`
      ],
      [
        `کہہ دو: اے لوگو! اگر تم میرے دین کے بارے میں شک میں ہو،`,
        `تو میں ان کی عبادت نہیں کرتا جن کی تم اللہ کے سوا عبادت کرتے ہو،`,
        `بلکہ میں اللہ کی عبادت کرتا ہوں جو تمہاری جانیں قبض کرے گا اور مجھے مومنوں میں ہونے کا حکم دیا گیا ہے۔`
      ],
      [
        `Katakanlah: Wahai manusia! Jika kalian ragu tentang agamaku,`,
        `maka aku tidak menyembah apa yang kalian sembah selain Allah,`,
        `tetapi aku menyembah Allah yang akan mematikan kalian, dan aku diperintahkan untuk menjadi orang beriman.`
      ],
      [
        `De ki: Ey insanlar! Eğer dinim hakkında şüphedeyseniz,`,
        `ben Allah’tan başka taptıklarınıza ibadet etmem,`,
        `fakat sizin canınızı alacak Allah’a ibadet ederim ve müminlerden olmam emredildi.`
      ],
      [
        `بگو: ای مردم! اگر در دین من شک دارید،`,
        `من کسانی را که شما غیر از خدا می‌پرستید نمی‌پرستم،`,
        `بلکه خدا را می‌پرستم که جان شما را می‌گیرد و به من فرمان داده شده از مؤمنان باشم.`
      ],
      [
        `বলুন: হে মানবজাতি! যদি তোমরা আমার ধর্ম সম্পর্কে সন্দেহে থাকো,`,
        `আমি তাদের উপাসনা করি না যাদের তোমরা আল্লাহ ছাড়া উপাসনা করো,`,
        `বরং আমি আল্লাহর ইবাদত করি যিনি তোমাদের মৃত্যু দেবেন এবং আমাকে মুমিনদের অন্তর্ভুক্ত হতে আদেশ করা হয়েছে।`
      ],
      [
        `Dize: Ó humanidade! Se estais em dúvida sobre minha religião,`,
        `eu não adoro aqueles que adorais além de Allah,`,
        `mas adoro Allah, que vos fará morrer, e fui ordenado a estar entre os crentes.`
      ],
      [
        `你说：人类啊！如果你们对我的宗教怀疑，`,
        `我不崇拜你们在真主之外所崇拜的，`,
        `但我崇拜真主，他将使你们死亡，我奉命成为信士之一。`
      ],
      [
        `言え：人々よ！もしあなた方が私の宗教に疑いがあるなら、`,
        `私はあなた方がアッラー以外に崇拝するものを崇拝しない、`,
        `しかし私はあなた方の魂を取られるアッラーを崇拝し、私は信者の一人であるよう命じられた。`
      ],
      [
        `말하라: 사람들이여! 너희가 나의 종교에 대해 의심한다면,`,
        `나는 너희가 알্লাহ 외에 숭배하는 것을 숭배하지 않는다,`,
        `그러나 나는 너희의 생명을 거두실 알্লাহ를 숭배하며 믿는 자가 되도록 명령받았다.`
      ],
      [
        `Di’: O uomini! Se siete in dubbio sulla mia religione,`,
        `io non adoro ciò che voi adorate all’infuori di Allah,`,
        `ma adoro Allah, che prenderà le vostre anime, e mi è stato ordinato di essere tra i credenti.`
      ],
      [
        `Powiedz: O ludzie! Jeśli macie wątpliwości co do mojej religii,`,
        `nie czczę tego, co wy czcicie poza Allahem,`,
        `lecz czczę Allaha, który odbierze wasze dusze, i nakazano mi być wśród wierzących.`
      ],
      [
        `Скажи: О люди! Якщо ви сумніваєтесь у моїй релігії,`,
        `я не поклоняюсь тому, чому ви поклоняєтесь замість Аллаха`,
        `але поклоняюсь Аллаху, який забере ваші душі, і мені наказано бути серед віруючих.`
      ]
    ],
    number: `سورة يونس / Yunus، الآية 104`
  },

  {
    arabic: [
      `الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ`,
      `أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ`,
      ``
    ],
    translations: [
      [
        `Those who believe, and whose hearts find rest in the remembrance of Allah.`,
        `Verily, in the remembrance of Allah do hearts find rest.`,
        ``
      ],
      [
        `Ceux qui croient et dont les cœurs trouvent la tranquillité dans le rappel d’Allah.`,
        `N’est-ce pas par le rappel d’Allah que les cœurs s’apaisent ?`,
        ``
      ],
      [
        `Aquellos que creen y cuyos corazones encuentran tranquilidad en el recuerdo de Allah.`,
        `¿No es acaso en el recuerdo de Allah donde los corazones hallan sosiego?`,
        ``
      ],
      [
        `Те, которые уверовали, и сердца которых находят покой в поминании Аллаха.`,
        `Разве не в поминании Аллаха находят покой сердца?`,
        ``
      ],
      [
        `Diejenigen, die glauben und deren Herzen Ruhe im Gedenken Allahs finden.`,
        `Wahrlich, im Gedenken Allahs finden die Herzen Ruhe.`,
        ``
      ],
      [
        `De som tror och vars hjärtan finner ro i Allahs åminnelse.`,
        `Sannerligen, i Allahs åminnelse finner hjärtan ro.`,
        ``
      ],
      [
        `Iad siúd a chreideann agus a bhfaigheann a gcroíthe suaimhneas i gcuimhne Allah.`,
        `Go deimhin, i gcuimhne Allah a fhaigheann na croíthe suaimhneas.`,
        ``
      ],
      [
        `Degenen die geloven en wiens harten rust vinden in het gedenken van Allah.`,
        `Voorwaar, in het gedenken van Allah vinden de harten rust.`,
        ``
      ],
      [
        `جو لوگ ایمان لائے اور جن کے دل اللہ کے ذکر سے اطمینان پاتے ہیں۔`,
        `خبردار! اللہ کے ذکر سے ہی دلوں کو سکون ملتا ہے۔`,
        ``
      ],
      [
        `Orang-orang yang beriman dan hati mereka menjadi tenang dengan mengingat Allah.`,
        `Ingatlah, hanya dengan mengingat Allah hati menjadi tenang.`,
        ``
      ],
      [
        `İman edenler ve kalpleri Allah’ı zikretmekle huzur bulanlar.`,
        `Bilesiniz ki kalpler ancak Allah’ı zikretmekle huzur bulur.`,
        ``
      ],
      [
        `کسانی که ایمان آورده‌اند و دل‌هایشان با یاد خدا آرام می‌گیرد.`,
        `آگاه باشید که دل‌ها تنها با یاد خدا آرام می‌گیرند.`,
        ``
      ],
      [
        `যারা ঈমান এনেছে এবং যাদের হৃদয় আল্লাহর স্মরণে প্রশান্তি পায়।`,
        `জেনে রাখো, আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায়।`,
        ``
      ],
      [
        `Aqueles que creem e cujos corações encontram tranquilidade na lembrança de Allah.`,
        `Certamente, é na lembrança de Allah que os corações encontram paz.`,
        ``
      ],
      [
        `那些信道者，他们的心在记念真主中得到安宁。`,
        `确实，只有记念真主，心才会安宁。`,
        ``
      ],
      [
        `信仰する者たち、その心はアッラーの記念によって安らぐ。`,
        `確かに、アッラーの記念によって心は安らぐ。`,
        ``
      ],
      [
        `믿는 자들, 그들의 마음은 알্লাহ를 기억함으로써 평안을 얻는다.`,
        `실로 알্লাহ를 기억함으로써 마음은 평안을 얻는다.`,
        ``
      ],
      [
        `Coloro che credono e i cui cuori trovano pace nel ricordo di Allah.`,
        `In verità, è nel ricordo di Allah che i cuori trovano pace.`,
        ``
      ],
      [
        `Ci, którzy wierzą i których serca znajdują spokój w wspomnieniu Allaha.`,
        `Zaprawdę, w wspomnieniu Allaha serca znajdują spokój.`,
        ``
      ],
      [
        `Ті, які увірували, і чиї серця знаходять спокій у згадуванні Аллаха.`,
        `Воістину, у згадуванні Аллаха серця знаходять спокій.`,
        ``
      ]
    ],
    number: `سورة الرعد / Ar-Ra'd، الآية 28`
  },

  {
    arabic: [
      `إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ`,
      `وَإِنَّا لَهُ لَحَافِظُونَ`,
      ``
    ],
    translations: [
      [
        `Verily We: It is We Who have sent down the Dhikr (i.e. the Quran)`,
        `and surely, We will guard it (from corruption).`,
        ``
      ],
      [
        `En vérité, c'est Nous qui avons fait descendre le Rappel (le Coran),`,
        `et c'est Nous qui en sommes certainement les gardiens.`,
        ``
      ],
      [
        `En verdad, somos Nosotros quienes hemos revelado el Recuerdo (el Corán),`,
        `y ciertamente Nosotros lo protegeremos.`,
        ``
      ],
      [
        `Воистину, Мы ниспослали Напоминание (Коран),`,
        `и Мы, без сомнения, его оберегаем.`,
        ``
      ],
      [
        `Gewiss, Wir sind es, die die Ermahnung (den Koran) herabgesandt haben,`,
        `und Wir werden ihn sicherlich bewahren.`,
        ``
      ],
      [
        `Sannerligen, det är Vi som har uppenbarat Påminnelsen (Koranen),`,
        `och Vi kommer helt säkert att bevara den.`,
        ``
      ],
      [
        `Go deimhin, is sinne a sheol an Meabhrúchán (an Córán),`,
        `agus is sinne a chaomhnóimid é.`,
        ``
      ],
      [
        `Voorwaar, Wij zijn het die de Vermaning (de Koran) hebben neergezonden,`,
        `en Wij zullen hem zeker beschermen.`,
        ``
      ],
      [
        `بے شک ہم ہی نے یہ ذکر (قرآن) نازل کیا ہے،`,
        `اور ہم ہی اس کی حفاظت کرنے والے ہیں۔`,
        ``
      ],
      [
        `Sesungguhnya Kami-lah yang menurunkan Al-Dzikr (Al-Qur'an),`,
        `dan sesungguhnya Kami-lah yang menjaganya.`,
        ``
      ],
      [
        `Şüphesiz zikri (Kur'an'ı) biz indirdik,`,
        `ve onu muhakkak biz koruyacağız.`,
        ``
      ],
      [
        `بی‌تردید ما خود این ذکر (قرآن) را نازل کرده‌ایم،`,
        `و قطعاً ما نگهبان آن هستیم.`,
        ``
      ],
      [
        `নিশ্চয়ই আমরাই এই যিকর (কুরআন) অবতীর্ণ করেছি,`,
        `এবং আমরাই এর সংরক্ষণকারী।`,
        ``
      ],
      [
        `Certamente, Nós é que revelamos a Mensagem (o Alcorão),`,
        `e certamente Nós somos os seus guardiões.`,
        ``
      ],
      [
        `确实，是我们降示了《ذكر》（古兰经），`,
        `我们确实是它的保护者。`,
        ``
      ],
      [
        `確かに、われらがこの教え（クルアーン）を下したのはわれらであり、`,
        `われらは必ずそれを守る者である。`,
        ``
      ],
      [
        `실로 우리가 이 기억(꾸란)을 계시하였으며,`,
        `우리가 반드시 그것을 보존할 것이다.`,
        ``
      ],
      [
        `In verità, siamo Noi che abbiamo rivelato il Ricordo (il Corano),`,
        `e certamente Noi ne siamo i custodi.`,
        ``
      ],
      [
        `Zaprawdę, to My zesłaliśmy Wspomnienie (Koran),`,
        `i z pewnością My go strzeżemy.`,
        ``
      ],
      [
        `Воістину, Ми зіславили Нагадування (Коран),`,
        `і, безсумнівно, Ми його оберігаємо.`,
        ``
      ]
    ],
    number: `سورة الحجر / Al-Hijr، الآية 9`
  },

  {
    arabic: [
      `وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِكُلِّ شَيْءٍ`,
      `وَهُدًى وَرَحْمَةً وَبُشْرَى لِلْمُسْلِمِينَ`,
      ``
    ],
    translations: [
      [
        `And We have sent down to you the Book as clarification for all things`,
        `and as guidance and mercy and good tidings for the Muslims`,
        ``
      ],
      [
        `Et Nous avons fait descendre sur toi le Livre comme un exposé clair de toute chose`,
        `ainsi qu'une guidée, une miséricorde et une bonne annonce pour les Musulmans`,
        ``
      ],
      [
        `Y hemos revelado para ti el Libro como una explicación de todas las cosas`,
        `y como guía, misericordia y buena noticia para los musulmanes`,
        ``
      ],
      [
        `Мы ниспослали тебе Писание как разъяснение всякой вещи`,
        `как руководство, милость и благую весть для мусульман`,
        ``
      ],
      [
        `Und Wir haben dir das Buch als Erklärung für alles hinabgesandt`,
        `als Rechtleitung, Barmherzigkeit und frohe Botschaft für die Muslime`,
        ``
      ],
      [
        `Och Vi har uppenbarat Skriften för dig som en förklaring till allt`,
        `som vägledning, nåd och ett glatt budskap till muslimerna`,
        ``
      ],
      [
        `Agus táimid tar éis an Leabhar a thabhairt anuas chugat mar mhíniú ar gach rud`,
        `mar threoir, trócaire agus dea-scéal do na Moslamaigh`,
        ``
      ],
      [
        `En Wij hebben het Boek tot jou neergezonden als uitleg van alles`,
        `en als leiding, barmhartigheid en goed nieuws voor de moslims`,
        ``
      ],
      [
        `اور ہم نے آپ پر یہ کتاب نازل کی جو ہر چیز کو کھول کر بیان کرنے والی ہے`,
        `اور ہدایت اور رحمت اور مسلمانوں کے لیے خوشخبری ہے`,
        ``
      ],
      [
        `Dan Kami turunkan kepadamu Kitab untuk menjelaskan segala sesuatu`,
        `sebagai petunjuk, rahmat dan kabar gembira bagi orang-orang Muslim`,
        ``
      ],
      [
        `Sana bu Kitabı her şeyi açıklayan olarak indirdik`,
        `bir hidayet, rahmet ve Müslümanlar için müjde olarak`,
        ``
      ],
      [
        `و ما این کتاب را بر تو نازل کردیم که بیانگر هر چیز است`,
        `و هدایت و رحمت و بشارتی برای مسلمانان است`,
        ``
      ],
      [
        `আমি তোমার প্রতি এই কিতাব নাযিল করেছি যা সব কিছুর স্পষ্ট ব্যাখ্যা`,
        `এবং পথনির্দেশ, রহমত ও মুসলিমদের জন্য সুসংবাদ`,
        ``
      ],
      [
        `E revelamos a você o Livro como explicação para todas as coisas`,
        `como orientação, misericórdia e boas novas para os muçulmanos`,
        ``
      ],
      [
        `我已将经典降示给你，以阐明万事`,
        `作为对穆斯林的引导、恩典和喜讯`,
        ``
      ],
      [
        `われは万事を明らかにするためにあなたに啓典を下した`,
        `それは導きであり慈悲であり、ムスリムへの吉報である`,
        ``
      ],
      [
        `우리는 모든 것을 설명하는 책을 그대에게 계시하였으며`,
        `무슬림을 위한 인도와 자비와 기쁜 소식이라`,
        ``
      ],
      [
        `Abbiamo fatto scendere su di te il Libro come chiarimento di ogni cosa`,
        `guida, misericordia e lieta novella per i musulmani`,
        ``
      ],
      [
        `Zesłaliśmy tobie Księgę jako wyjaśnienie wszystkiego`,
        `jako drogowskaz, miłosierdzie i dobrą nowinę dla muzułmanów`,
        ``
      ],
      [
        `Ми зіслав тобі Писання як пояснення до всього`,
        `як настанову, милість і добру звістку для мусульман`,
        ``
      ]
    ],
    number: `سورة النحل / An-Nahl، الآية 89`
  },

  {
    arabic: [
      `إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ`,
      `وَيَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ وَالْبَغْيِ`,
      `يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ`
    ],
    translations: [
      [
        `Indeed, Allah commands justice, good conduct, and giving to relatives,`,
        `and forbids immorality, bad conduct, and oppression.`,
        `He admonishes you so that you may take heed.`
      ],
      [
        `Certes, Allah commande la justice, la bienfaisance et l’aide aux proches,`,
        `et Il interdit la turpitude, le blâmable et l’injustice.`,
        `Il vous exhorte afin que vous vous souveniez.`
      ],
      [
        `Ciertamente, Allah ordena la justicia, la bondad y dar a los parientes,`,
        `y prohíbe la indecencia, lo reprobable y la opresión.`,
        `Él os exhorta para que reflexionéis.`
      ],
      [
        `Воистину, Аллах повелевает справедливость, благодеяние и помощь родственникам,`,
        `и запрещает непристойность, зло и притеснение.`,
        `Он наставляет вас, чтобы вы помнили.`
      ],
      [
        `Wahrlich, Allah gebietet Gerechtigkeit, Wohltätigkeit und die Hilfe für Verwandte,`,
        `und verbietet Schändlichkeit, Verwerfliches und Unterdrückung.`,
        `Er ermahnt euch, damit ihr nachdenkt.`
      ],
      [
        `Sannerligen, Allah befaller rättvisa, godhet och att ge till släktingar,`,
        `och förbjuder omoral, det onda och förtryck.`,
        `Han förmanar er så att ni må minnas.`
      ],
      [
        `Go deimhin, ordaíonn Allah ceartas, dea-iompar agus cabhair do ghaolta,`,
        `agus cuireann cosc ar mhímhoráltacht, ar olc agus ar éagóir.`,
        `Tugann Sé comhairle daoibh chun go gcuimhneoidh sibh.`
      ],
      [
        `Waarlijk, Allah gebiedt rechtvaardigheid, goed gedrag en het geven aan verwanten,`,
        `en verbiedt zedeloosheid, het slechte en onderdrukking.`,
        `Hij vermaant jullie zodat jullie je zullen herinneren.`
      ],
      [
        `بے شک اللہ انصاف، احسان اور رشتہ داروں کو دینے کا حکم دیتا ہے،`,
        `اور بے حیائی، برائی اور ظلم سے روکتا ہے،`,
        `وہ تمہیں نصیحت کرتا ہے تاکہ تم یاد رکھو۔`
      ],
      [
        `Sesungguhnya Allah memerintahkan keadilan, kebaikan, dan memberi kepada kerabat,`,
        `dan melarang perbuatan keji, kemungkaran, dan ظلم.`,
        `Dia memberi pelajaran agar kalian mengambil pelajaran.`
      ],
      [
        `Şüphesiz Allah adaleti, iyiliği ve akrabaya vermeyi emreder,`,
        `ve hayâsızlığı, kötülüğü ve zulmü yasaklar.`,
        `Sizi öğüt verir ki hatırlayasınız.`
      ],
      [
        `بی‌تردید خداوند به عدالت، نیکی و بخشش به خویشاوندان فرمان می‌دهد،`,
        `و از فحشا، منکر و ستم نهی می‌کند،`,
        `شما را پند می‌دهد تا متذکر شوید.`
      ],
      [
        `নিশ্চয়ই আল্লাহ ন্যায়, ইহসান এবং আত্মীয়দের দান করার নির্দেশ দেন,`,
        `এবং অশ্লীলতা, মন্দ কাজ ও অত্যাচার থেকে নিষেধ করেন,`,
        `তিনি তোমাদের উপদেশ দেন যাতে তোমরা স্মরণ করো।`
      ],
      [
        `Certamente Allah ordena justiça, bondade e dar aos parentes,`,
        `e proíbe a imoralidade, o mal e a opressão.`,
        `Ele vos exorta para que lembreis.`
      ],
      [
        `真主确实命令公正、善行以及接济亲属，`,
        `并禁止淫秽、恶行和 ظلم（压迫）。`,
        `他劝诫你们，以便你们记取教诲。`
      ],
      [
        `まことにアッラーは正義、善行、親族への施しを命じ、`,
        `淫らな行い、悪行、 ظلمを禁じる。`,
        `あなた方が思い出すようにと諭される。`
      ],
      [
        `실로 알্লাহ는 정의와 선행, 친족에게 베푸는 것을 명령하시고,`,
        `음란함과 악행과 ظلم을 금하신다.`,
        `너희가 기억하도록 훈계하신다.`
      ],
      [
        `In verità Allah ordina giustizia, bontà e dare ai parenti,`,
        `e proibisce immoralità, male e oppressione.`,
        `Vi ammonisce affinché ricordiate.`
      ],
      [
        `Zaprawdę Allah nakazuje sprawiedliwość, dobroć i dawanie krewnym,`,
        `a zakazuje niegodziwości, zła i ucisku.`,
        `Napomina was, abyście pamiętali.`
      ],
      [
        `Воістину, Аллах наказує справедливість, добро і допомогу родичам,`,
        `і забороняє розпусту, зло та утиск.`,
        `Він наставляє вас, щоб ви пам’ятали.`
      ]
    ],
    number: `سورة النحل / An-Nahl، الآية 90`
  },

  {
    arabic: [
      `فَإِذَا قَرَأْتَ الْقُرآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ`,
      ``,
      ``
    ],
    translations: [
      [
        `So when you want to recite the Quran, seek refuge with Allah from Shaitan (Satan), the outcast (the cursed one).`,
        ``,
        ``
      ],
      [
        `Lorsque tu lis le Coran, cherche refuge auprès d’Allah contre Satan le maudit.`,
        ``,
        ``
      ],
      [
        `Cuando recites el Corán, busca refugio en Allah contra Satanás el maldito.`,
        ``,
        ``
      ],
      [
        `Когда ты читаешь Коран, ищи защиты у Аллаха от проклятого сатаны.`,
        ``,
        ``
      ],
      [
        `Wenn du den Koran verliest, suche Zuflucht bei Allah vor dem verfluchten Satan.`,
        ``,
        ``
      ],
      [
        `När du läser Koranen, sök skydd hos Allah från den fördömde Satan.`,
        ``,
        ``
      ],
      [
        `Nuair a léann tú an Chórán, iarr tearmann ó Allah i gcoinne Shátan, an mallaithe.`,
        ``,
        ``
      ],
      [
        `Wanneer je de Koran reciteert, zoek toevlucht bij Allah tegen de vervloekte Satan.`,
        ``,
        ``
      ],
      [
        `پس جب تم قرآن پڑھو تو شیطان مردود سے اللہ کی پناہ مانگو۔`,
        ``,
        ``
      ],
      [
        `Apabila engkau membaca Al-Qur’an, maka mohonlah perlindungan kepada Allah dari setan yang terkutuk.`,
        ``,
        ``
      ],
      [
        `Kur’an okuduğun zaman kovulmuş şeytandan Allah’a sığın.`,
        ``,
        ``
      ],
      [
        `پس هنگامی که قرآن می‌خوانی، از شیطان رانده‌شده به خدا پناه ببر.`,
        ``,
        ``
      ],
      [
        `অতএব যখন তুমি কুরআন পাঠ কর, তখন বিতাড়িত শয়তান থেকে আল্লাহর আশ্রয় প্রার্থনা কর।`,
        ``,
        ``
      ],
      [
        `Quando recitares o Alcorão, busca refúgio em Allah contra Satanás, o amaldiçoado.`,
        ``,
        ``
      ],
      [
        `当你诵读《古兰经》时，当求真主保护你免受被诅咒的恶魔的侵扰。`,
        ``,
        ``
      ],
      [
        `クルアーンを読むときは、呪われた悪魔からアッラーに保護を求めよ。`,
        ``,
        ``
      ],
      [
        `꾸란을 낭송할 때 저주받은 사탄으로부터 하나님께 보호를 구하라.`,
        ``,
        ``
      ],
      [
        `Quando reciti il Corano, cerca rifugio in Allah contro Satana il maledetto.`,
        ``,
        ``
      ],
      [
        `Kiedy czytasz Koran, szukaj schronienia u Allaha przed przeklętym szatanem.`,
        ``,
        ``
      ],
      [
        `Коли читаєш Коран, шукай захисту в Аллаха від проклятого шайтана.`,
        ``,
        ``
      ]
    ],
    number: `سورة النحل / An-Nahl، الآية 98`
  },

  {
    arabic: [
      `إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ`,
      `وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ`,
      `أَنَّ لَهُمْ أَجْرًا كَبِيرًا`
    ],
    translations: [
      [
        `Verily, this Quran guides to that which is most just and right`,
        `and gives glad tidings to the believers who work deeds of righteousness`,
        `that they shall have a great reward`
      ],
      [
        `En vérité, ce Coran guide vers ce qui est le plus juste et droit`,
        `et annonce de bonnes nouvelles aux croyants qui accomplissent des œuvres justes`,
        `qu'ils auront une grande récompense`
      ],
      [
        `En verdad, este Corán guía hacia lo más justo y recto`,
        `y da buenas noticias a los creyentes que hacen buenas obras`,
        `que tendrán una gran recompensa`
      ],
      [
        `Воистину, этот Коран ведет к тому, что справедливо и правильно`,
        `и приносит радостную весть верующим, которые творят добрые дела`,
        `что они получат великую награду`
      ],
      [
        `Wahrlich, dieser Koran leitet zu dem, was am gerechtesten und richtigsten ist`,
        `und verkündet den Gläubigen, die rechtschaffene Taten vollbringen, frohe Botschaft`,
        `dass sie eine große Belohnung haben werden`
      ],
      [
        `Sannerligen, denna Koran leder till det som är mest rättvist och rätt`,
        `och förkunnar glädjebud till de troende som utför rättfärdiga handlingar`,
        `att de ska få en stor belöning`
      ],
      [
        `Go deimhin, treoraíonn an Córán seo chuig an rud is ceart agus is dírí`,
        `agus tugann sé dea-scéal do na creidmhigh a dhéanann dea-ghníomhartha`,
        `go mbeidh luach saothair mór acu`
      ],
      [
        `Voorwaar, deze Koran leidt naar wat het meest rechtvaardig en juist is`,
        `en geeft blijde tijdingen aan de gelovigen die goede daden verrichten`,
        `dat zij een grote beloning zullen krijgen`
      ],
      [
        `بے شک یہ قرآن اس راستے کی ہدایت دیتا ہے جو سب سے زیادہ سیدھا ہے`,
        `اور ان مومنوں کو خوشخبری دیتا ہے جو نیک اعمال کرتے ہیں`,
        `کہ ان کے لیے بڑا اجر ہے`
      ],
      [
        `Sesungguhnya Al-Qur'an ini memberi petunjuk kepada (jalan) yang paling lurus`,
        `dan memberi kabar gembira kepada orang-orang beriman yang beramal saleh`,
        `bahwa mereka akan mendapat pahala yang besar`
      ],
      [
        `Şüphesiz bu Kur'an en doğru ve en sağlam yola iletir`,
        `ve salih ameller işleyen müminlere müjde verir`,
        `onlar için büyük bir mükâfat olduğunu`
      ],
      [
        `بی‌تردید این قرآن به راهی هدایت می‌کند که استوارتر است`,
        `و به مؤمنانی که کارهای شایسته انجام می‌دهند بشارت می‌دهد`,
        `که برای آنان پاداش بزرگی است`
      ],
      [
        `নিশ্চয়ই এই কুরআন সেই পথে পথনির্দেশ করে যা সর্বাধিক সরল`,
        `এবং সৎকর্মশীল মুমিনদের সুসংবাদ দেয়`,
        `যে তাদের জন্য রয়েছে বড় প্রতিদান`
      ],
      [
        `Certamente, este Alcorão guia para o que é mais correto e justo`,
        `e anuncia boas novas aos fiéis que praticam boas ações`,
        `que terão uma grande recompensa`
      ],
      [
        `这部《古兰经》确实引导人走向最正直的道路`,
        `并向行善的信士报喜`,
        `他们将获得重大的报酬`
      ],
      [
        `このクルアーンは最も正しい道へ導く`,
        `そして善行を行う信者に吉報を与える`,
        `彼らには大きな報奨がある`
      ],
      [
        `이 꾸란은 가장 올바른 길로 인도하며`,
        `선행을 하는 신자들에게 기쁜 소식을 전하니`,
        `그들에게는 큰 보상이 있을 것이다`
      ],
      [
        `In verità, questo Corano guida verso ciò che è più retto`,
        `e annuncia una buona novella ai credenti che compiono opere buone`,
        `che avranno una grande ricompensa`
      ],
      [
        `Zaprawdę, ten Koran prowadzi do tego, co jest najbardziej słuszne`,
        `i daje dobrą nowinę wierzącym, którzy czynią dobre uczynki`,
        `że otrzymają wielką nagrodę`
      ],
      [
        `Воістину, цей Коран веде до найправильнішого шляху`,
        `і сповіщає добру звістку віруючим, які чинять добрі справи`,
        `що на них чекає велика нагорода`
      ]
    ],
    number: `سورة الإسراء / Al-Isra، الآية 9`
  },

  {
    arabic: [
      `وَنُنَزِّلُ مِنَ الْقُرآنِ مَا هُوَ شِفَاءٌ`,
      `وَرَحْمَةٌ لِلْمُؤْمِنِينَ`,
      ``
    ],
    translations: [
      [
        `And We send down from the Quran that which is a healing and a mercy to those who believe (in Islamic Monotheism and act on it),`,
        `and it increases the Zalimun (polytheists and wrong-doers) nothing but loss.`,
        ``
      ],
      [
        `Et Nous faisons descendre du Coran ce qui est une guérison et une miséricorde pour ceux qui croient,`,
        `et cela n'augmente les injustes qu'en perte.`,
        ``
      ],
      [
        `Y hacemos descender del Corán lo que es una cura y una misericordia para los creyentes,`,
        `y no hace sino aumentar a los injustos en pérdida.`,
        ``
      ],
      [
        `Мы ниспосылаем из Корана то, что является исцелением и милостью для верующих,`,
        `а беззаконникам это только увеличивает убыток.`,
        ``
      ],
      [
        `Und Wir senden vom Koran herab, was Heilung und Barmherzigkeit für die Gläubigen ist,`,
        `doch den Ungerechten mehrt es nur den Verlust.`,
        ``
      ],
      [
        `Och Vi sänder ner av Koranen det som är bot och barmhärtighet för de troende,`,
        `men det ökar bara för förtryckarna i förlust.`,
        ``
      ],
      [
        `Agus cuirimid anuas ón gCórán an rud atá ina leigheas agus ina thrócaire do na creidmhigh,`,
        `agus ní dhéanann sé ach méadú ar chaillteanas do na héagóracha.`,
        ``
      ],
      [
        `En Wij zenden uit de Koran datgene neer wat een genezing en een barmhartigheid is voor de gelovigen,`,
        `maar het vermeerdert voor de onrechtvaardigen slechts het verlies.`,
        ``
      ],
      [
        `اور ہم قرآن میں وہ چیز نازل کرتے ہیں جو ایمان والوں کے لیے شفا اور رحمت ہے،`,
        `اور ظالموں کو یہ نقصان ہی میں اضافہ کرتا ہے`,
        ``
      ],
      [
        `Dan Kami turunkan dari Al-Qur'an sesuatu yang menjadi penawar dan rahmat bagi orang-orang yang beriman,`,
        `dan itu tidak menambah bagi orang-orang zalim selain kerugian`,
        ``
      ],
      [
        `Biz Kur'an'dan müminler için şifa ve rahmet olanı indiriyoruz,`,
        `zalimlere ise bu, yalnızca ziyanlarını artırır`,
        ``
      ],
      [
        `و ما از قرآن آنچه را که برای مؤمنان شفا و رحمت است نازل می‌کنیم،`,
        `و ستمگران را جز زیان نمی‌افزاید`,
        ``
      ],
      [
        `আমি কুরআন থেকে যা অবতীর্ণ করি তা মুমিনদের জন্য আরোগ্য ও রহমত,`,
        `আর তা জালিমদের ক্ষতিই বৃদ্ধি করে`,
        ``
      ],
      [
        `E fazemos descer do Alcorão aquilo que é cura e misericórdia para os fiéis,`,
        `mas isso não faz senão aumentar a perda dos injustos`,
        ``
      ],
      [
        `我从《古兰经》中降示对信士是治愈和恩典的，`,
        `但这只会增加不义者的亏损`,
        ``
      ],
      [
        `われはクルアーンから信者への癒しと慈悲を下すが、`,
        `それは不義者には損失を増すばかりである`,
        ``
      ],
      [
        `우리는 꾸란에서 믿는 자들에게 치유와 자비가 되는 것을 계시하나,`,
        `불의한 자들에게는 손실만 증가시킬 뿐이라`,
        ``
      ],
      [
        `E facciamo scendere dal Corano ciò che è guarigione e misericordia per i credenti,`,
        `ma per gli ingiusti aumenta solo la perdita`,
        ``
      ],
      [
        `Zsyłamy z Koranu to, co jest uzdrowieniem i miłosierdziem dla wierzących,`,
        `lecz niesprawiedliwym zwiększa to tylko stratę`,
        ``
      ],
      [
        `Ми зсилаємо з Корану те, що є зціленням і милістю для віруючих,`,
        `а несправедливим це лише збільшує втрату`,
        ``
      ]
    ],
    number: `سورة الإسراء / Al-Isra، الآية 82`
  },

  {
    arabic: [
      `قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ`,
      `عَلَى أَن يَأْتُوا بِمِثْلِ هَٰذَا الْقُرآنِ`,
      `لَا يَأْتُونَ بِمِثْلِهِ وَلَوْ كَانَ بَعْضُهُمْ لِبَعْضٍ ظَهِيرًا`
    ],
    translations: [
      [
        `If mankind and the jinn were to gather together to produce the like of this Quran,`,
        `they could not produce the like thereof, even if they helped one another.`,
        ``
      ],
      [
        `Dis : Si les hommes et les djinns s’unissaient pour produire quelque chose de semblable à ce Coran,`,
        `ils ne sauraient produire rien de semblable, même s’ils se soutenaient les uns les autres.`,
        ``
      ],
      [
        `Di: Si los hombres y los genios se reunieran para producir algo semejante a este Corán,`,
        `no podrían producir algo similar, aunque se ayudaran mutuamente.`,
        ``
      ],
      [
        `Скажи: Если бы люди и джинны собрались, чтобы создать нечто подобное этому Корану,`,
        `они не смогли бы создать подобное, даже если бы помогали друг другу.`,
        ``
      ],
      [
        `Sprich: Wenn sich die Menschen und die Dschinn zusammentäten, um etwas Gleiches wie diesen Koran hervorzubringen,`,
        `sie könnten nichts Gleiches hervorbringen, selbst wenn sie einander beistünden.`,
        ``
      ],
      [
        `Säg: Om människor och jinner förenade sig för att frambringa något liknande denna Koran,`,
        `skulle de inte kunna frambringa något liknande, även om de hjälpte varandra.`,
        ``
      ],
      [
        `Abair: Dá mba rud é go dtiocfadh daoine agus jinn le chéile chun a leithéid den Chórán seo a thabhairt,`,
        `ní fhéadfaidís a leithéid a thabhairt, fiú dá gcabhródh siad lena chéile.`,
        ``
      ],
      [
        `Zeg: Als de mensen en de djinn zich zouden verenigen om iets voort te brengen zoals deze Koran,`,
        `zouden zij niets dergelijks kunnen voortbrengen, zelfs al hielpen zij elkaar.`,
        ``
      ],
      [
        `کہہ دو: اگر انسان اور جن سب مل کر اس قرآن جیسا لانا چاہیں،`,
        `تو اس جیسا نہیں لا سکتے اگرچہ وہ ایک دوسرے کی مدد کریں۔`,
        ``
      ],
      [
        `Katakanlah: Jika manusia dan jin berkumpul untuk membuat yang serupa dengan Al-Qur’an ini,`,
        `mereka tidak akan mampu membuat yang serupa dengannya, sekalipun mereka saling membantu.`,
        ``
      ],
      [
        `De ki: Eğer insanlar ve cinler bu Kur’an’ın benzerini getirmek üzere toplansalar,`,
        `birbirlerine destek olsalar bile onun benzerini getiremezler.`,
        ``
      ],
      [
        `بگو: اگر انسان‌ها و جن‌ها گرد هم آیند تا مانند این قرآن را بیاورند،`,
        `نمی‌توانند همانند آن را بیاورند، هرچند یکدیگر را یاری دهند.`,
        ``
      ],
      [
        `বল: যদি মানুষ ও জিন একত্রিত হয় এই কুরআনের অনুরূপ কিছু আনার জন্য,`,
        `তবে তারা এর অনুরূপ কিছু আনতে পারবে না, যদিও তারা একে অপরকে সাহায্য করে।`,
        ``
      ],
      [
        `Dize: Se os humanos e os gênios se reunissem para produzir algo semelhante a este Alcorão,`,
        `não conseguiriam produzir algo semelhante, ainda que se ajudassem mutuamente.`,
        ``
      ],
      [
        `你说：如果人类和精灵联合起来，想创造一部类似这部《古兰经》的经典，`,
        `他们绝不能创造出类似的，即使他们互相帮助。`,
        ``
      ],
      [
        `言え：もし人間とジンがこのクルアーンのようなものを作ろうとして集まっても、`,
        `互いに助け合っても、それに似たものを作ることはできない。`,
        ``
      ],
      [
        `말하라: 인간과 진이 이 꾸란과 같은 것을 만들기 위해 함께 모인다 해도,`,
        `서로 도와도 그와 같은 것을 만들 수 없을 것이다.`,
        ``
      ],
      [
        `Di': Se gli uomini e i jinn si unissero per produrre qualcosa di simile a questo Corano,`,
        `non potrebbero produrne uno simile, anche se si aiutassero a vicenda.`,
        ``
      ],
      [
        `Powiedz: Gdyby ludzie i dżiny zebrali się, aby stworzyć coś podobnego do tego Koranu,`,
        `nie byliby w stanie stworzyć niczego podobnego, nawet gdyby sobie pomagali.`,
        ``
      ],
      [
        `Скажи: Якби люди й джини зібралися, щоб створити щось подібне до цього Корану,`,
        `вони не змогли б створити нічого подібного, навіть якби допомагали одне одному.`,
        ``
      ]
    ],
    number: `سورة الإسراء / Al-Isra، الآية 88`
  },

  {
    arabic: [
      `وَقُرْآنًا فَرَقْنَاهُ لِتَقْرَأَهُ عَلَى النَّاسِ عَلَىٰ مُكْثٍ`,
      ``,
      ``
    ],
    translations: [
      [
        `And (it is) a Quran which We have divided (into parts), that you might recite it to the people at intervals.`,
        ``,
        ``
      ],
      [
        `Et c’est un Coran que Nous avons fragmenté afin que tu le récites aux gens progressivement.`,
        ``,
        ``
      ],
      [
        `Y es un Corán que hemos dividido para que lo recites a la gente gradualmente.`,
        ``,
        ``
      ],
      [
        `И это Коран, который Мы разделили, чтобы ты читал его людям постепенно.`,
        ``,
        ``
      ],
      [
        `Und es ist ein Koran, den Wir in Teile gegliedert haben, damit du ihn den Menschen nach und nach vorträgst.`,
        ``,
        ``
      ],
      [
        `Och detta är en Koran som Vi har delat upp, så att du kan framföra den för människorna stegvis.`,
        ``,
        ``
      ],
      [
        `Agus is Corán é a roinneamar ionas go léifidh tú é do dhaoine go mall.`,
        ``,
        ``
      ],
      [
        `En het is een Koran die Wij hebben verdeeld, zodat jij hem geleidelijk aan de mensen kunt voordragen.`,
        ``,
        ``
      ],
      [
        `اور یہ قرآن ہم نے جدا جدا کر کے نازل کیا تاکہ تم اسے لوگوں کو ٹھہر ٹھہر کر سناؤ۔`,
        ``,
        ``
      ],
      [
        `Dan Al-Qur’an itu telah Kami turunkan secara berangsur-angsur agar engkau membacakannya kepada manusia perlahan-lahan.`,
        ``,
        ``
      ],
      [
        `Bu, insanlara ağır ağır okuyasın diye parça parça indirdiğimiz bir Kur’an’dır.`,
        ``,
        ``
      ],
      [
        `و این قرآنی است که آن را بخش‌بخش نازل کردیم تا آن را به‌آرامی بر مردم بخوانی.`,
        ``,
        ``
      ],
      [
        `আর এটি এমন এক কুরআন যা আমরা ভাগ করে নাজিল করেছি, যাতে তুমি তা ধীরে ধীরে মানুষের কাছে পাঠ কর।`,
        ``,
        ``
      ],
      [
        `E é um Alcorão que dividimos para que o recites às pessoas gradualmente.`,
        ``,
        ``
      ],
      [
        `这是一部《古兰经》，我已把它分段降示，以便你从容地向人们诵读。`,
        ``,
        ``
      ],
      [
        `これは人々にゆっくりと読誦するために、われが分割して下したクルアーンである。`,
        ``,
        ``
      ],
      [
        `이 꾸란은 우리가 나누어 계시한 것으로, 그대가 사람들에게 천천히 낭송하도록 한 것이다.`,
        ``,
        ``
      ],
      [
        `È un Corano che abbiamo suddiviso affinché tu lo reciti alla gente gradualmente.`,
        ``,
        ``
      ],
      [
        `To jest Koran, który podzieliliśmy, abyś recytował go ludziom stopniowo.`,
        ``,
        ``
      ],
      [
        `Це Коран, який Ми розділили, щоб ти читав його людям поступово.`,
        ``,
        ``
      ]
    ],
    number: `سورة الإسراء / Al-Isra، الآية 106`
  },

  {
    arabic: [
      `إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا`,
      `خَالِدِينَ فِيهَا لَا يَبْغُونَ عَنْهَا حِوَلًا`,
      ``
    ],
    translations: [
      [
        `Verily, those who believe and do righteous deeds shall have the Gardens of Al-Firdaus (Paradise) for their entertainment,`,
        `abiding therein forever.`,
        ``
      ],
      [
        `Certes, ceux qui croient et accomplissent de bonnes œuvres auront les jardins du Firdaws (Paradis) comme résidence,`,
        `où ils demeureront éternellement sans désir d’en changer.`,
        ``
      ],
      [
        `En verdad, quienes creen y hacen buenas obras tendrán los Jardines del Firdaws (Paraíso) como hospedaje,`,
        `en los que permanecerán eternamente sin desear cambiar de lugar.`,
        ``
      ],
      [
        `Воистину, те, которые уверовали и совершали праведные дела, получат Сады Фирдауса (Рая) как угощение,`,
        `и пребудут в них вечно, не желая ничего иного.`,
        ``
      ],
      [
        `Gewiss, diejenigen, die glauben und rechtschaffene Werke tun, werden die Gärten des Firdaus (Paradies) als Unterkunft haben,`,
        `in denen sie ewig bleiben und keinen Wechsel wünschen.`,
        ``
      ],
      [
        `Sannerligen, de som tror och gör goda gärningar kommer att få Paradisets trädgårdar (Al-Firdaws) som vistelse,`,
        `där de kommer att förbli för evigt utan att önska något annat.`,
        ``
      ],
      [
        `Go deimhin, beidh gairdíní Al-Firdaws (Paradise) ag na daoine a chreideann agus a dhéanann dea-ghníomhartha mar áit chónaithe,`,
        `agus fanfaidh siad ann go deo gan aon mhian le hathrú.`,
        ``
      ],
      [
        `Voorwaar, degenen die geloven en goede daden verrichten zullen de Tuinen van Al-Firdaus (Paradijs) als verblijf hebben,`,
        `waar zij eeuwig zullen verblijven zonder verandering te wensen.`,
        ``
      ],
      [
        `بے شک جو لوگ ایمان لائے اور نیک عمل کیے ان کے لیے جنت الفردوس کی مہمان نوازی ہے،`,
        `وہ اس میں ہمیشہ رہیں گے اور اس سے کبھی ہٹنا نہیں چاہیں گے۔`,
        ``
      ],
      [
        `Sesungguhnya orang-orang yang beriman dan beramal saleh akan mendapatkan surga Firdaus sebagai tempat tinggal,`,
        `mereka kekal di dalamnya dan tidak ingin pindah darinya.`,
        ``
      ],
      [
        `Şüphesiz iman edenler ve salih amel işleyenler için Firdevs cennetleri konaklama yeridir,`,
        `orada ebedi kalacaklar ve ondan ayrılmak istemeyeceklerdir.`,
        ``
      ],
      [
        `بی‌تردید کسانی که ایمان آورده و کارهای شایسته انجام داده‌اند، باغ‌های فردوس برای آنان منزلگاه است،`,
        `که در آن جاودانه خواهند ماند و هرگز خواهان تغییر آن نیستند.`,
        ``
      ],
      [
        `নিশ্চয়ই যারা ঈমান এনেছে ও সৎকর্ম করেছে তাদের জন্য জান্নাতুল ফিরদাউস রয়েছে আবাস হিসেবে,`,
        `তারা সেখানে চিরকাল থাকবে এবং তা থেকে সরে যেতে চাইবে না।`,
        ``
      ],
      [
        `Certamente, aqueles que creem e praticam boas ações terão os Jardins do Firdaws como hospedagem,`,
        `onde permanecerão eternamente sem desejar mudança.`,
        ``
      ],
      [
        `确实，那些信道并行善的人将拥有“法尔道斯”乐园作为居所，`,
        `他们将永居其中，不愿离去。`,
        ``
      ],
      [
        `確かに、信仰し善行を行う者にはフィルダウスの楽園が住処としてある、`,
        `彼らはそこに永遠に住み、そこから離れることを望まない。`,
        ``
      ],
      [
        `실로 믿고 선행을 하는 자들에게는 알-피르다우스의 천국이 거처로 주어지며,`,
        `그들은 그 안에 영원히 머물며 떠나기를 원하지 않는다.`,
        ``
      ],
      [
        `In verità, coloro che credono e compiono opere buone avranno i Giardini del Firdaws come dimora,`,
        `dove rimarranno in eterno senza desiderare cambiamento.`,
        ``
      ],
      [
        `Zaprawdę, ci którzy wierzą i czynią dobre uczynki, będą mieli Ogrody Firdausu jako siedzibę,`,
        `w których pozostaną na zawsze, nie pragnąc zmiany.`,
        ``
      ],
      [
        `Воістину, ті, які увірували і чинили праведні справи, матимуть Сади Фірдауса як обитель,`,
        `де вони залишаться навіки і не бажатимуть змін.`,
        ``
      ]
    ],
    number: `سورة الكهف / Al-Kahf، الآيات 107-108`
  },

  {
    arabic: [
      `وَمَن يَأْتِهِ مُؤْمِنًا قَدْ عَمِلَ الصَّالِحَاتِ فَأُولَٰئِكَ لَهُمُ الدَّرَجَاتُ الْعُلَىٰ`,
      `جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ`,
      `خَالِدِينَ فِيهَا ۚ وَذَٰلِكَ جَزَاءُ مَن تَزَكَّىٰ`
    ],
    translations: [
      [
        `But whoever comes to Him as a believer and has done righteous deeds, for such are the high ranks in the Hereafter,`,
        `Gardens of Eden, flowing beneath which are rivers, abiding therein forever.`,
        ``
      ],
      [
        `Mais celui qui vient à Lui en croyant et ayant accompli de bonnes œuvres, ceux-là auront les hauts degrés,`,
        `les Jardins d’Éden sous lesquels coulent les ruisseaux, où ils demeureront éternellement.`,
        `Telle est la récompense de celui qui se purifie.`
      ],
      [
        `Pero quien venga a Él como creyente y haya obrado rectamente, esos tendrán los grados más altos,`,
        `los Jardines del Edén por donde corren ríos, donde permanecerán eternamente.`,
        `Esa es la recompensa de quien se purifica.`
      ],
      [
        `А кто придет к Нему верующим, совершив праведные дела, тем — высшие степени,`,
        `сады Эдема, под которыми текут реки, где они пребудут вечно.`,
        `Таково вознаграждение тех, кто очистился.`
      ],
      [
        `Wer aber als Gläubiger zu Ihm kommt und rechtschaffene Werke getan hat, für sie sind die höchsten Stufen bestimmt,`,
        `Gärten von Eden, unter denen Flüsse fließen, in denen sie ewig bleiben werden.`,
        `Das ist der Lohn derer, die sich reinigen.`
      ],
      [
        `Men den som kommer till Honom som troende och har gjort goda gärningar, de får de högsta graderna,`,
        `Edens lustgårdar, under vilka floder rinner, där de ska förbli för evigt.`,
        `Detta är belöningen för dem som renar sig.`
      ],
      [
        `Ach an té a thagann chuige mar chreidmheach agus a dhéanann dea-ghníomhartha, beidh na céimeanna is airde acu,`,
        `Gairdíní Éidin a ritheann aibhneacha fúthu, áit a mbeidh siad go deo.`,
        `Is é sin luach saothair an té a ghlanann é féin.`
      ],
      [
        `Maar wie tot Hem komt als gelovige en goede daden heeft verricht, voor hen zijn de hoogste graden,`,
        `Tuinen van Eden waar rivieren onderdoor stromen, waarin zij eeuwig zullen verblijven.`,
        `Dat is de beloning voor wie zich zuivert.`
      ],
      [
        `اور جو اس کے پاس ایمان کے ساتھ آئے اور نیک اعمال کیے ہوں، تو ایسے لوگوں کے لیے بلند درجات ہیں،`,
        `ہمیشہ رہنے والے باغات جن کے نیچے نہریں بہتی ہیں،`,
        `اور یہی بدلہ ہے اس کا جو پاکیزگی اختیار کرے۔`
      ],
      [
        `Dan barang siapa datang kepada-Nya sebagai orang beriman dan telah beramal saleh, maka mereka itulah yang memperoleh درجات yang tinggi,`,
        `(yaitu) surga-surga عدن yang mengalir di bawahnya sungai-sungai, mereka kekal di dalamnya.`,
        `Dan itulah balasan bagi orang yang menyucikan diri.`
      ],
      [
        `Kim O’na mümin olarak gelir ve salih ameller işlemişse, işte onlar için en yüksek dereceler vardır,`,
        `altlarından ırmaklar akan Adn cennetleri, orada ebedî kalacaklardır.`,
        `Bu, arınan kimsenin mükâfatıdır.`
      ],
      [
        `و هر کس با ایمان و کارهای شایسته نزد او آید، برای آنان درجات والا خواهد بود،`,
        `باغ‌های جاودان که نهرها از زیر آن جاری است و در آن جاودانه می‌مانند،`,
        `و این پاداش کسی است که پاکی پیشه کند.`
      ],
      [
        `আর যে তাঁর কাছে মুমিন হয়ে এবং সৎকর্ম করে আসবে, তাদের জন্য রয়েছে উচ্চ মর্যাদা,`,
        `স্থায়ী জান্নাতসমূহ যার নিচে নদী প্রবাহিত, তারা সেখানে চিরকাল থাকবে,`,
        `এটাই সেই ব্যক্তির প্রতিদান যে নিজেকে পবিত্র করে।`
      ],
      [
        `Mas quem vier a Ele como crente e tiver praticado boas obras, هؤلاء terão os mais altos graus,`,
        `Jardins do Éden, sob os quais correm rios, onde permanecerão para sempre.`,
        `Essa é a recompensa de quem se purifica.`
      ],
      [
        `凡以信士之身来到他那里并行善的人，将获得最高的品级，`,
        `常住的乐园，其下诸河流淌，他们将永居其中。`,
        `这就是自我净化者的报酬。`
      ],
      [
        `信仰を持ち善行を行って彼のもとに来る者には、高い位がある。`,
        `エデンの園で、その下には川が流れ、彼らはそこに永遠に住む。`,
        `それが自らを清めた者への報いである。`
      ],
      [
        `믿음을 가지고 선행을 행하며 그분께 오는 자들에게는 높은 지위가 있으며,`,
        `그 아래로 강이 흐르는 에덴의 동산에서 그들은 영원히 머무르게 될 것이다.`,
        `그것이 스스로를 정화한 자들의 보상이다.`
      ],
      [
        `Chi giunge a Lui come credente e compie opere buone avrà i gradi più elevati,`,
        `i Giardini dell’Eden sotto cui scorrono fiumi, dove rimarranno in eterno.`,
        `Questa è la ricompensa di chi si purifica.`
      ],
      [
        `A kto przyjdzie do Niego jako wierzący i czyni dobre uczynki, dla takich są najwyższe stopnie,`,
        `Ogrody Edenu, pod którymi płyną rzeki, gdzie będą przebywać na zawsze.`,
        `Taka jest nagroda dla tych, którzy się oczyszczają.`
      ],
      [
        `А хто прийде до Нього віруючим і чинитиме добрі справи, для таких — найвищі ступені,`,
        `сади Едему, під якими течуть ріки, де вони перебуватимуть вічно.`,
        `Такою є нагорода для тих, хто очищується.`
      ]
    ],
    number: `سورة طه / Ta-Ha، الآيات 75-76`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ`,
      `إِنَّ زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ`,
      ``
    ],
    translations: [
      [
        `O mankind, fear your Lord;`,
        `Indeed, the earthquake of the Hour is a terrible thing.`,
        ``
      ],
      [
        `Ô hommes ! Craignez votre Seigneur ;`,
        `Le tremblement de l’Heure est une chose terrible.`,
        ``
      ],
      [
        `¡Oh humanidad! Temed a vuestro Señor;`,
        `El terremoto de la Hora es algo terrible.`,
        ``
      ],
      [
        `О люди! Бойтесь вашего Господа;`,
        `Поистине, землетрясение Часа — нечто великое.`,
        ``
      ],
      [
        `O ihr Menschen! Fürchtet euren Herrn;`,
        `Wahrlich, das Erdbeben der Stunde ist etwas Gewaltiges.`,
        ``
      ],
      [
        `O människor! Frukta er Herre;`,
        `Sannerligen är stundens jordskalv något fruktansvärt.`,
        ``
      ],
      [
        `A dhaoine uaisle! Eaglaigí bhur dTiarna;`,
        `go deimhin, is rud uafásach crith na hUaire.`,
        ``
      ],
      [
        `O mensheid! Vrees jullie Heer;`,
        `de aardbeving van het Uur is een verschrikkelijke zaak.`,
        ``
      ],
      [
        `اے لوگو! اپنے رب سے ڈرو؛`,
        `بے شک قیامت کا زلزلہ بڑی سخت چیز ہے۔`,
        ``
      ],
      [
        `Wahai manusia! Bertakwalah kepada Tuhan kalian;`,
        `sesungguhnya guncangan hari Kiamat adalah sesuatu yang sangat dahsyat.`,
        ``
      ],
      [
        `Ey insanlar! Rabbinizden sakının;`,
        `Şüphesiz kıyamet sarsıntısı büyük bir şeydir.`,
        ``
      ],
      [
        `ای مردم! از پروردگارتان پروا کنید؛`,
        `بی‌تردید زلزله قیامت چیز بزرگی است.`,
        ``
      ],
      [
        `হে মানবজাতি! তোমরা তোমাদের প্রতিপালককে ভয় করো;`,
        `নিশ্চয়ই কিয়ামতের ভূমিকম্প একটি ভয়ংকর বিষয়।`,
        ``
      ],
      [
        `Ó humanidade! Temei o vosso Senhor;`,
        `Certamente o terremoto da Hora é algo terrível.`,
        ``
      ],
      [
        `人类啊！你们当敬畏你们的主；`,
        `复活时刻的震动确是一件可怕的事。`,
        ``
      ],
      [
        `人々よ！あなた方の主を畏れよ；`,
        `まことに、終末の地震は重大な出来事である。`,
        ``
      ],
      [
        `사람들이여! 너희 주님을 두려워하라;`,
        `실로 종말의 지진은 عظ대한 일이다.`,
        ``
      ],
      [
        `O uomini! Temete il vostro Signore;`,
        `In verità il terremoto dell’Ora è una cosa terribile.`,
        ``
      ],
      [
        `O ludzie! Bójcie się waszego Pana;`,
        `Zaprawdę trzęsienie godziny jest czymś strasznym.`,
        ``
      ],
      [
        `О люди! Бійтеся вашого Господа;`,
        `Воістину, землетрус Години — велика річ.`,
        ``
      ]
    ],
    number: `سورة الحج / Al-Hajj، الآية 1`
  },

  {
    arabic: [
      `وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ وَلَا نَبِيٍّ`,
      `إِلَّا إِذَا تَمَنَّىٰ أَلْقَى الشَّيْطَانُ فِي أُمْنِيَّتِهِ`,
      `فَيَنسَخُ اللَّهُ مَا يُلْقِي الشَّيْطَانُ ثُمَّ يُحْكِمُ اللَّهُ آيَاتِهِ ۗ وَاللَّهُ عَلِيمٌ حَكِيمٌ`
    ],
    translations: [
      [
        `And We sent not before you any messenger or prophet`,
        `but when he wished, Satan threw into his wish`,
        `and Allah cancels what Satan throws and establishes His verses. And Allah is All-Knowing, All-Wise.`
      ],
      [
        `Nous n’avons envoyé avant toi ni messager ni prophète`,
        `sans que, lorsqu’il récitait, Satan ne jette quelque chose dans sa récitation`,
        `mais Allah abroge ce que Satan jette, puis Allah confirme Ses versets. Et Allah est Omniscient et Sage.`
      ],
      [
        `No enviamos antes de ti ningún mensajero ni profeta`,
        `sin que, cuando recitaba, Satanás interfiriera en su recitación`,
        `pero Allah elimina lo que Satanás arroja y luego establece Sus signos. Allah es Omnisciente, Sabio.`
      ],
      [
        `Мы не посылали до тебя ни посланника, ни пророка`,
        `без того, чтобы, когда он читал, сатана не внушал что-либо в его чтение`,
        `но Аллах уничтожает то, что внушает сатана, затем утверждает Свои знамения. Аллах — Знающий, Мудрый.`
      ],
      [
        `Wir sandten vor dir keinen Gesandten und keinen Propheten,`,
        `ohne dass, wenn er vortrug, der Satan etwas in seinen Vortrag einwarf,`,
        `doch Allah hebt auf, was der Satan einwirft, und festigt dann Seine Zeichen. Und Allah ist Allwissend und Allweise.`
      ],
      [
        `Vi sände före dig ingen budbärare eller profet`,
        `utan att när han reciterade, kastade Satan något i hans recitation`,
        `men Allah upphäver det som Satan kastar och stadfäster Sina tecken. Allah är Allvetande, Vis.`
      ],
      [
        `Níor sheolamar romhat aon teachtaire ná fáidh`,
        `gan go gcuirfeadh Sátan rud éigin ina aithris nuair a d’aithris sé`,
        `ach cuireann Allah ar ceal an méid a chuireann Sátan isteach, agus daingníonn Sé a chuid véarsaí. Tá Allah Uile-eolach, Uile-chliste.`
      ],
      [
        `Wij hebben vóór jou geen boodschapper of profeet gezonden`,
        `zonder dat, wanneer hij reciteerde, de satan iets in zijn recitatie wierp`,
        `maar Allah vernietigt wat de satan werpt en bevestigt daarna Zijn verzen. Allah is Alwetend, Alwijs.`
      ],
      [
        `اور ہم نے تم سے پہلے کوئی رسول اور نہ کوئی نبی بھیجا`,
        `مگر جب وہ تلاوت کرتا تو شیطان اس کی تلاوت میں کچھ ڈال دیتا`,
        `پھر اللہ شیطان کی ڈالی ہوئی چیز کو مٹا دیتا ہے اور اپنی آیات کو مضبوط کر دیتا ہے، اور اللہ خوب جاننے والا، حکمت والا ہے۔`
      ],
      [
        `Dan Kami tidak mengutus sebelum engkau seorang rasul dan tidak pula seorang nabi`,
        `melainkan apabila dia membaca, setan menyusupkan sesuatu dalam bacaannya`,
        `maka Allah menghapus apa yang disusupkan setan itu, kemudian Allah menguatkan ayat-ayat-Nya. Dan Allah Maha Mengetahui lagi Maha Bijaksana.`
      ],
      [
        `Senden önce hiçbir resul ve hiçbir peygamber göndermedik ki,`,
        `o bir şey okuduğu zaman şeytan onun okuyuşuna bir şey katmış olmasın`,
        `fakat Allah şeytanın kattığını giderir, sonra ayetlerini sağlamlaştırır. Allah her şeyi bilendir, hikmet sahibidir.`
      ],
      [
        `و پیش از تو هیچ پیامبر و فرستاده‌ای نفرستادیم`,
        `مگر اینکه هرگاه آرزو می‌کرد، شیطان در آرزویش چیزی می‌افکند`,
        `پس خداوند آنچه شیطان می‌افکند از میان می‌برد و سپس آیات خود را استوار می‌کند، و خداوند دانا و حکیم است.`
      ],
      [
        `আমি তোমার পূর্বে কোনো রাসূল বা নবী প্রেরণ করিনি`,
        `কিন্তু যখন সে তিলাওয়াত করত, শয়তান তার তিলাওয়াতে কিছু নিক্ষেপ করত`,
        `তখন আল্লাহ শয়তানের নিক্ষিপ্ত বিষয় মুছে দেন, তারপর তিনি তাঁর আয়াতসমূহ সুদৃঢ় করেন। আল্লাহ সর্বজ্ঞ, প্রজ্ঞাময়।`
      ],
      [
        `E não enviamos antes de ti mensageiro nem profeta algum`,
        `sem que, quando ele recitava, Satanás lançasse algo em sua recitação`,
        `mas Allah anula o que Satanás lança e depois confirma Seus versículos. Allah é Onisciente, Sábio.`
      ],
      [
        `在你之前，我未曾派遣任何使者或先知，`,
        `除非当他诵读时，恶魔在他的诵读中投下干扰，`,
        `但真主会消除恶魔所投下的，然后巩固他的启示。真主是全知的，至睿的。`
      ],
      [
        `あなた以前に、われは使徒や預言者を遣わしたが、`,
        `彼が朗誦するたびに、悪魔はその朗誦に何かを投げ入れた`,
        `しかしアッラーは悪魔の投げ入れたものを消し去り、その後に御自分の印を確固たるものにされる。アッラーは全知にして英明である。`
      ],
      [
        `너 이전에 우리는 어떤 사도나 예언자도 보내지 아니했으나,`,
        `그가 낭송할 때마다 사탄이 그의 낭송에 무엇인가를 끼어들게 했으나,`,
        `하나님께서는 사탄이 끼어든 것을 없애시고 그분의 계시를 확고히 하신다. 하나님은 모든 것을 아시며 지혜로우시다.`
      ],
      [
        `Non inviammo prima di te alcun messaggero né profeta`,
        `senza che, quando recitava, Satana non insinuasse qualcosa nella sua recitazione`,
        `ma Allah annulla ciò che Satana insinua e poi conferma i Suoi versetti. Allah è Sapiente, Saggio.`
      ],
      [
        `Nie wysłaliśmy przed tobą żadnego posłańca ani proroka,`,
        `aby, gdy recytował, szatan nie wtrącił czegoś do jego recytacji`,
        `lecz Allah usuwa to, co szatan wtrąca, a następnie umacnia swoje znaki. Allah jest Wszechwiedzący, Mądry.`
      ],
      [
        `Ми не посилали до тебе жодного посланця чи пророка,`,
        `щоб, коли він читав, шайтан не підкидав щось у його читання`,
        `але Аллах усуває те, що підкидає шайтан, і потім утверджує Свої знамення. Аллах — Всезнаючий, Мудрий.`
      ]
    ],
    number: `سورة الحج / Al-Hajj، الآية 52`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ`,
      `إِنَّ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ لَن يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ`,
      `وَإِن يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَّا يَسْتَنقِذُوهُ مِنْهُ ۚ ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ`
    ],
    translations: [
      [
        `O mankind, an example is set forth, so listen to it:`,
        `Those whom you call upon besides Allah cannot create a fly, even if they all gathered for it.`,
        `And if the fly snatched anything from them, they could not recover it. Weak are the seeker and the sought.`
      ],
      [
        `Ô hommes ! Une parabole vous est proposée, écoutez-la :`,
        `Ceux que vous invoquez en dehors d’Allah ne pourront jamais créer une mouche, même s’ils s’unissaient pour cela.`,
        `Et si la mouche leur enlevait quelque chose, ils ne pourraient pas le lui reprendre. Faible est celui qui demande et celui qui est demandé.`
      ],
      [
        `¡Oh humanidad! Se os propone un ejemplo, escuchadlo:`,
        `Aquellos a quienes invocáis fuera de Allah no pueden crear ni una mosca, aunque se reunieran para ello.`,
        `Y si la mosca les quitara algo, no podrían recuperarlo. Débiles son el que pide y el que es pedido.`
      ],
      [
        `О люди! Приводится притча, послушайте её:`,
        `Те, к кому вы взываете помимо Аллаха, не смогут создать даже муху, даже если бы собрались вместе для этого.`,
        `А если муха что-то у них украдёт, они не смогут это вернуть. Слаб и тот, кто просит, и тот, у кого просят.`
      ],
      [
        `O ihr Menschen! Ein Gleichnis wird angeführt, so hört es:`,
        `Jene, die ihr außer Allah anruft, können nicht einmal eine Fliege erschaffen, selbst wenn sie sich dafür zusammentäten.`,
        `Und wenn die Fliege ihnen etwas wegnimmt, können sie es nicht zurückholen. Schwach ist der Bittende und der Erbetene.`
      ],
      [
        `O människor! En liknelse ges, så lyssna till den:`,
        `De som ni anropar förutom Allah kan inte ens skapa en fluga, även om de samlades för det.`,
        `Och om flugan tog något från dem, kan de inte ta tillbaka det. Svag är den som ber och den som blir tillbedd.`
      ],
      [
        `A dhaoine uaisle! Tugtar sampla, éistigí leis:`,
        `ní féidir leo siúd a ghlaonn sibh orthu seachas Allah fiú cuileog a chruthú, fiú dá n-aontóidís chuige sin.`,
        `Agus dá dtógfadh an cuileog rud éigin uathu, ní fhéadfaidís é a aisghabháil. Lag an t-iarrthóir agus an t-iarrtha.`
      ],
      [
        `O mensheid! Er wordt een voorbeeld gegeven, luister ernaar:`,
        `Degenen die jullie naast Allah aanroepen kunnen zelfs geen vlieg scheppen, zelfs niet als zij zich daarvoor zouden verenigen.`,
        `En als de vlieg iets van hen zou wegnemen, kunnen zij het niet terughalen. Zwak is de zoeker en de gezochte.`
      ],
      [
        `اے لوگو! ایک مثال دی گئی ہے، اسے سنو:`,
        `جنہیں تم اللہ کے سوا پکارتے ہو وہ ایک مکھی بھی پیدا نہیں کر سکتے چاہے سب مل کر کوشش کریں۔`,
        `اور اگر مکھی ان سے کچھ چھین لے تو وہ اسے واپس نہیں لے سکتے۔ کمزور ہے مانگنے والا اور جس سے مانگا جاتا ہے۔`
      ],
      [
        `Wahai manusia! Telah dibuat sebuah perumpamaan, maka dengarkanlah:`,
        `Mereka yang kalian sembah selain Allah tidak akan dapat menciptakan seekor lalat sekalipun, meskipun mereka berkumpul untuk itu.`,
        `Dan jika lalat mengambil sesuatu dari mereka, mereka tidak dapat mengambilnya kembali. Lemahlah yang meminta dan yang diminta.`
      ],
      [
        `Ey insanlar! Bir örnek verilmiştir, onu dinleyin:`,
        `Allah’tan başka taptıklarınız bir sinek bile yaratamazlar, isterlerse toplansalar bile.`,
        `Ve sinek onlardan bir şey kapsa onu geri alamazlar. İsteyen de istenen de zayıftır.`
      ],
      [
        `ای مردم! مثالی زده شده است، پس به آن گوش دهید:`,
        `آنهایی که به جای خدا می‌خوانید حتی یک مگس هم نمی‌توانند بیافرینند، اگرچه همه جمع شوند.`,
        `و اگر مگس چیزی از آنان بگیرد، نمی‌توانند آن را بازپس گیرند. ناتوان است هم خواهنده و هم خواسته شده.`
      ],
      [
        `হে মানবজাতি! একটি উদাহরণ দেওয়া হয়েছে, তা শোনো:`,
        `তোমরা আল্লাহ ছাড়া যাদের ডাকো তারা একটি মাছিও সৃষ্টি করতে পারে না, যদিও সবাই একত্রিত হয়।`,
        `আর যদি মাছি তাদের কিছু ছিনিয়ে নেয়, তারা তা ফিরিয়ে আনতে পারে না। দুর্বল সেই যে চায় এবং যাকে চাওয়া হয়।`
      ],
      [
        `Ó humanidade! Um exemplo é apresentado, então ouvi-o:`,
        `Aqueles que invocais além de Allah não podem criar nem mesmo uma mosca, ainda que se unissem para isso.`,
        `E se a mosca lhes tirasse algo, não poderiam recuperá-lo. Fraco é o que pede e o que é pedido.`
      ],
      [
        `人类啊！已给你们举了一个例子，你们当听：`,
        `你们在真主之外所祈求的，连一只苍蝇都不能创造，即使他们联合起来也不能。`,
        `如果苍蝇夺走他们一点东西，他们也无法取回。请求者与被求者都是软弱的。`
      ],
      [
        `人々よ！一つの例えが示された、それを聞け：`,
        `あなた方がアッラー以外に祈るものは、たとえ集まっても一匹のハエすら創造できない。`,
        `もしハエが彼らから何かを奪っても、それを取り戻すことはできない。求める者も求められる者も弱い。`
      ],
      [
        `사람들이여! 비유가 주어졌으니 들으라:`,
        `너희가 알্লাহ 외에 부르는 자들은 비록 함께 모여도 파리 하나도 خلق할 수 없다.`,
        `만약 파리가 그들에게서 무엇을 빼앗아도 그것을 되찾을 수 없다. 구하는 자도 구함을 받는 자도 약하다.`
      ],
      [
        `O uomini! Vi è stato proposto un esempio, ascoltatelo:`,
        `Coloro che invocate all’infuori di Allah non possono creare nemmeno una mosca, anche se si unissero.`,
        `E se la mosca portasse via qualcosa da loro, non potrebbero recuperarlo. Debole è chi chiede e chi è richiesto.`
      ],
      [
        `O ludzie! Został podany przykład, posłuchajcie go:`,
        `Ci, których wzywacie poza Allahem, nie są w stanie stworzyć nawet muchy, nawet gdyby się zebrali.`,
        `A jeśli mucha coś im zabierze, nie mogą tego odzyskać. Słaby jest ten, kto prosi, i ten, o którego się prosi.`
      ],
      [
        `О люди! Наведено приклад, послухайте його:`,
        `Ті, до кого ви звертаєтесь замість Аллаха, не здатні створити навіть муху, навіть якщо зберуться разом.`,
        `А якщо муха щось у них забере, вони не зможуть це повернути. Слабкий і той, хто просить, і той, у кого просять.`
      ]
    ],
    number: `سورة الحج / Al-Hajj، الآية 73`
  },

  {
    arabic: [
      `وَإِنَّهُ لَتَنزِيلُ رَبِّ الْعَالَمِينَ`,
      `نَزَلَ بِهِ الرُّوحُ الْأَمِينُ`,
      `عَلَى قَلْبِكَ لِتَكُونَ مِنَ الْمُنذِرِينَ`
    ],
    translations: [
      [
        `And truly, this (the Quran) is a revelation from the Lord of the 'Alamin`,
        `sent down by the trustworthy Spirit (Angel Gabriel) upon your heart,`,
        `so that you may be of the warners.`
      ],
      [
        `Et c’est en vérité une révélation du Seigneur de l’univers,`,
        `descendue par l’Esprit fidèle (l’ange Gabriel) sur ton cœur,`,
        `afin que tu sois du nombre des avertisseurs.`
      ],
      [
        `Y ciertamente este (Corán) es una revelación del Señor de los mundos,`,
        `descendido por el Espíritu fiel (el ángel Gabriel) sobre tu corazón,`,
        `para que seas de los que advierten.`
      ],
      [
        `И поистине, это — ниспослание от Господа миров,`,
        `его принес Дух верный (ангел Джибриль) на твое сердце,`,
        `чтобы ты был из числа предостерегающих.`
      ],
      [
        `Und wahrlich, dies ist eine Offenbarung vom Herrn der Welten,`,
        `herabgebracht durch den vertrauenswürdigen Geist (den Engel Gabriel) auf dein Herz,`,
        `damit du zu den Warnern gehörst.`
      ],
      [
        `Och sannerligen, detta är en uppenbarelse från världarnas Herre,`,
        `nedförd av den pålitlige Anden (ängeln Gabriel) till ditt hjärta,`,
        `för att du ska vara en av varnarna.`
      ],
      [
        `Agus go deimhin, is nochta é seo ó Thiarna na cruinne,`,
        `a thug an Spiorad dílis (an t-aingeal Gabriel) anuas ar do chroí,`,
        `ionas go mbeidh tú ar dhuine de na rabhaidh.`
      ],
      [
        `En voorwaar, dit is een openbaring van de Heer der werelden,`,
        `neergezonden door de betrouwbare Geest (de engel Gabriël) op jouw hart,`,
        `opdat jij tot de waarschuwers behoort.`
      ],
      [
        `اور بے شک یہ رب العالمین کی طرف سے نازل کیا ہوا ہے،`,
        `اسے امانت دار روح (جبرائیل) نے آپ کے دل پر نازل کیا،`,
        `تاکہ آپ ڈرانے والوں میں سے ہوں۔`
      ],
      [
        `Dan sungguh, (Al-Qur’an) ini benar-benar diturunkan oleh Tuhan seluruh alam,`,
        `yang dibawa turun oleh Ruhul Amin (Malaikat Jibril) ke dalam hatimu,`,
        `agar engkau termasuk orang-orang yang memberi peringatan.`
      ],
      [
        `Şüphesiz bu (Kur’an), âlemlerin Rabbi tarafından indirilmiştir,`,
        `onu güvenilir Ruh (Cebrail) senin kalbine indirmiştir,`,
        `uyaranlardan olman için.`
      ],
      [
        `و به‌راستی این (قرآن) از سوی پروردگار جهانیان نازل شده است،`,
        `آن را روح الامین (جبرئیل) بر قلب تو نازل کرده است،`,
        `تا از بیم‌دهندگان باشی.`
      ],
      [
        `নিশ্চয়ই এটি বিশ্বজগতের প্রতিপালকের পক্ষ থেকে অবতীর্ণ,`,
        `বিশ্বস্ত রূহ (জিবরাইল) এটি তোমার অন্তরে অবতীর্ণ করেছে,`,
        `যাতে তুমি সতর্ককারীদের অন্তর্ভুক্ত হও।`
      ],
      [
        `E, na verdade, este (Alcorão) é uma revelação do Senhor dos mundos,`,
        `trazido pelo Espírito fiel (o anjo Gabriel) ao teu coração,`,
        `para que sejas um dos admoestadores.`
      ],
      [
        `这确是众世界的主的启示，`,
        `由忠实的精灵（天使吉卜利里）降示在你的心上，`,
        `以便你成为警告者之一。`
      ],
      [
        `本当にこれは万有の主からの啓示であり、`,
        `信頼できる霊（天使ジブリール）があなたの心に下したものである、`,
        `あなたが警告者の一人となるためである。`
      ],
      [
        `진실로 이것은 만유의 주님으로부터의 계시이며,`,
        `신뢰할 수 있는 영(천사 가브리엘)이 그것을 그대의 마음에 내렸으니,`,
        `그대가 경고하는 자들 가운데 하나가 되게 하려 함이라.`
      ],
      [
        `In verità questo è una rivelazione del Signore dei mondi,`,
        `disceso tramite lo Spirito fedele (l’angelo Gabriele) sul tuo cuore,`,
        `affinché tu sia tra gli ammonitori.`
      ],
      [
        `Zaprawdę, to jest objawienie od Pana światów,`,
        `przyniesione przez wiernego Ducha (anioła Gabriela) do twojego serca,`,
        `abyś był jednym z ostrzegających.`
      ],
      [
        `Воістину, це — зіслання від Господа світів,`,
        `його приніс вірний Дух (ангел Джібріль) у твоє серце,`,
        `щоб ти був серед застерігачів.`
      ]
    ],
    number: `سورة الشعراء / Ash-Shu'ara، الآيات 192-194`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ وَاخْشَوْا يَوْمًا`,
      `لَّا يَجْزِي وَالِدٌ عَن وَلَدِهِ وَلَا مَوْلُودٌ هُوَ جَازٍ عَن وَالِدِهِ شَيْئًا`,
      `إِنَّ وَعْدَ اللَّهِ حَقٌّ ۖ فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا وَلَا يَغُرَّنَّكُم بِاللَّهِ الْغَرُورُ`
    ],
    translations: [
      [
        `O mankind, fear your Lord and beware of a Day`,
        `when no parent shall avail for their child, nor any child for their parent anything`,
        `Indeed, the promise of Allah is true; so let not the life of this world deceive you, nor let the deceiver deceive you about Allah.`
      ],
      [
        `Ô hommes ! Craignez votre Seigneur et redoutez un jour`,
        `où aucun parent ne pourra rien pour son enfant, ni aucun enfant pour son parent`,
        `La promesse d’Allah est vérité, que la vie d’ici-bas ne vous trompe donc pas, et que le trompeur ne vous trompe pas au sujet d’Allah.`
      ],
      [
        `¡Oh humanidad! Temed a vuestro Señor y temed un día`,
        `en el que ningún padre podrá ayudar a su hijo ni ningún hijo a su padre en nada`,
        `La promesa de Allah es verdad, así que no os engañe la vida mundanal ni el engañador acerca de Allah.`
      ],
      [
        `О люди! Бойтесь вашего Господа и остерегайтесь дня`,
        `когда родитель не поможет своему ребенку и ребенок не поможет своему родителю ничем`,
        `Поистине, обещание Аллаха истинно, пусть же не обманывает вас жизнь этого мира и не обманывает об Аллахе обманщик.`
      ],
      [
        `O ihr Menschen! Fürchtet euren Herrn und hütet euch vor einem Tag`,
        `an dem kein Elternteil seinem Kind etwas nützen kann und kein Kind seinem Elternteil`,
        `Wahrlich, das Versprechen Allahs ist wahr; so möge euch das diesseitige Leben nicht täuschen und auch nicht der Täuscher in Bezug auf Allah.`
      ],
      [
        `O människor! Frukta er Herre och frukta en dag`,
        `då ingen förälder kan hjälpa sitt barn, och inget barn kan hjälpa sin förälder`,
        `Sannerligen är Allahs löfte sant, låt därför inte detta världsliv lura er och inte heller bedragaren i fråga om Allah.`
      ],
      [
        `A dhaoine uaisle! Eaglaigí bhur dTiarna agus bíodh eagla oraibh roimh lá`,
        `nach féidir le tuismitheoir cabhrú lena leanbh ná le leanbh cabhrú lena thuismitheoir`,
        `Is fíor gealltanas Allah, mar sin ná mealladh saol an domhain sibh ná an meallaire faoi Allah.`
      ],
      [
        `O mensheid! Vrees jullie Heer en vrees een Dag`,
        `waarop geen ouder zijn kind zal baten, noch een kind zijn ouder`,
        `Waarlijk, de belofte van Allah is waar; laat het wereldse leven jullie niet misleiden en de verleider ook niet omtrent Allah.`
      ],
      [
        `اے لوگو! اپنے رب سے ڈرو اور اس دن سے ڈرو`,
        `جس دن کوئی باپ اپنے بیٹے کے کام نہ آئے گا اور نہ بیٹا اپنے باپ کے کام آئے گا`,
        `بے شک اللہ کا وعدہ سچا ہے، پس دنیا کی زندگی تمہیں دھوکہ نہ دے اور نہ دھوکہ دینے والا تمہیں اللہ کے بارے میں دھوکہ دے۔`
      ],
      [
        `Wahai manusia! Bertakwalah kepada Tuhan kalian dan takutlah pada suatu hari`,
        `ketika seorang ayah tidak dapat menolong anaknya dan anak tidak dapat menolong ayahnya`,
        `Sesungguhnya janji Allah itu benar, maka janganlah kehidupan dunia memperdaya kalian dan jangan pula penipu memperdaya kalian tentang Allah.`
      ],
      [
        `Ey insanlar! Rabbinizden sakının ve bir günden korkun`,
        `ki o gün hiçbir ebeveyn evladına fayda veremez ve evlat da ebeveynine`,
        `Allah’ın vaadi gerçektir, dünya hayatı sizi aldatmasın ve aldatıcı da Allah hakkında sizi aldatmasın.`
      ],
      [
        `ای مردم! از پروردگارتان پروا کنید و از روزی بترسید`,
        `که هیچ پدری به فرزندش سودی نمی‌رساند و هیچ فرزندی به پدرش`,
        `وعده خدا حق است، پس زندگی دنیا شما را فریب ندهد و فریبکار نیز درباره خدا شما را نفریبد.`
      ],
      [
        `হে মানবজাতি! তোমরা তোমাদের প্রতিপালককে ভয় করো এবং সেই দিনের ভয় করো`,
        `যেদিন কোনো পিতা তার সন্তানের কাজে আসবে না এবং কোনো সন্তান তার পিতার কাজে আসবে না`,
        `নিশ্চয়ই আল্লাহর প্রতিশ্রুতি সত্য, তাই দুনিয়ার জীবন যেন তোমাদের প্রতারিত না করে এবং প্রতারক যেন আল্লাহ সম্পর্কে তোমাদের প্রতারিত না করে।`
      ],
      [
        `Ó humanidade! Temei o vosso Senhor e temei um dia`,
        `em que nenhum pai poderá ajudar o seu filho nem o filho o seu pai`,
        `A promessa de Allah é verdadeira, que a vida mundana não vos engane nem o enganador vos engane sobre Allah.`
      ],
      [
        `人类啊！你们当敬畏你们的主，敬畏那一天`,
        `那天父亲不能为儿子有任何益处，儿子也不能为父亲`,
        `真主的诺言是真实的，所以今世生活不要欺骗你们，欺骗者也不要使你们在真主的事情上受骗。`
      ],
      [
        `人々よ！あなた方の主を畏れ、ある日を恐れよ`,
        `その日には親は子に何の役にも立たず、子も親に何の役にも立たない`,
        `アッラーの約束は真実である。現世の生活に騙されず、騙す者にも騙されるな。`
      ],
      [
        `사람들이여! 너희 주님을 두려워하고 그날을 두려워하라`,
        `그날에는 부모가 자식에게 아무 도움도 주지 못하고 자식도 부모에게 아무 도움도 주지 못한다`,
        `알্লাহ의 약속은 진실이니 세상의 삶이 너희를 속이지 못하게 하고 속이는 자도 알্লাহ에 대해 너희를 속이지 못하게 하라.`
      ],
      [
        `O uomini! Temete il vostro Signore e temete un Giorno`,
        `in cui un genitore non potrà giovare al proprio figlio né un figlio al proprio genitore`,
        `La promessa di Allah è verità; non vi inganni la vita mondana né il seduttore riguardo ad Allah.`
      ],
      [
        `O ludzie! Bójcie się waszego Pana i bójcie się Dnia`,
        `w którym żaden rodzic nie pomoże swojemu dziecku ani dziecko rodzicowi`,
        `Zaprawdę obietnica Allaha jest prawdą; niech nie zwiedzie was życie doczesne ani zwodziciel w sprawie Allaha.`
      ],
      [
        `О люди! Бійтеся вашого Господа і бійтеся Дня`,
        `коли батько нічим не допоможе своїй дитині, а дитина — батькові`,
        `Воістину, обіцянка Аллаха є правдою, тож нехай вас не обманює земне життя і не обманює обманщик щодо Аллаха.`
      ]
    ],
    number: `سورة لقمان / Luqman، الآية 33`
  },

  {
    arabic: [
      `إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ وَأَقَامُوا الصَّلَاةَ`,
      `وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً يَرْجُونَ تِجَارَةً لَّن تَبُورَ`,
      `لِيُوَفِّيَهُمْ أُجُورَهُمْ وَيَزِيدَهُم مِّن فَضْلِهِ ۚ إِنَّهُ غَفُورٌ شَكُورٌ`
    ],
    translations: [
      [
        `Verily, those who recite the Book of Allah (this Quran), perform AsSalat (IqamatasSalat),`,
        `and spend (in charity) out of what We have provided for them, secretly and openly, hope for a (sure) tradegain that will never perish.`,
        `He will give them their reward and increase them out of His bounty. Verily, He is Most Forgiving, Most Appreciative.`
      ],
      [
        `Ceux qui récitent le Livre d'Allah, accomplissent la prière,`,
        `et dépensent de ce que Nous leur avons attribué, secrètement et ouvertement, espèrent un commerce qui ne périra jamais.`,
        `Il leur accordera leur récompense et leur ajoutera de Sa grâce. Il est certes Pardonneur et Reconnaissant.`
      ],
      [
        `Aquellos que recitan el Libro de Allah, establecen la oración,`,
        `y gastan de lo que les hemos proveído, en secreto y en público, esperan un comercio que nunca perecerá.`,
        `Él les dará su recompensa y les aumentará de Su favor. Ciertamente, Él es Perdonador y Agradecido.`
      ],
      [
        `Воистину, те, кто читают Писание Аллаха, совершают молитву,`,
        `и расходуют из того, чем Мы их наделили, тайно и явно, надеются на торговлю, которая не исчезнет.`,
        `Он воздаст им их награду и увеличит Свою милость. Поистине, Он Прощающий, Благодарный.`
      ],
      [
        `Wahrlich, diejenigen, die das Buch Allahs rezitieren, das Gebet verrichten,`,
        `und von dem spenden, womit Wir sie versorgt haben, heimlich und öffentlich, hoffen auf einen Handel, der niemals untergeht.`,
        `Er wird ihnen ihren Lohn geben und sie aus Seiner Gunst vermehren. Gewiss, Er ist Allvergebend, Dankbar.`
      ],
      [
        `Sannerligen, de som reciterar Allahs Bok, förrättar bönen,`,
        `och ger av det Vi har försett dem med, i hemlighet och öppet, hoppas på en handel som aldrig förgår.`,
        `Han ska ge dem deras belöning och öka dem av Sin nåd. Han är Förlåtande, Tacksam.`
      ],
      [
        `Go deimhin, na daoine a léann Leabhar Allah, a bhunaíonn an phaidir,`,
        `agus a chaitheann as an méid a thugamar dóibh go rúnda agus go poiblí, tá siad ag súil le trádáil nach gcaillfear go deo.`,
        `Tabharfaidh Sé a luach saothair dóibh agus méadóidh Sé óna ghrásta iad. Tá Sé Maithiúnach, Buíoch.`
      ],
      [
        `Voorwaar, degenen die het Boek van Allah reciteren, het gebed verrichten,`,
        `en uitgeven van wat Wij hun hebben voorzien, in het geheim en openbaar, hopen op een handel die nooit verloren gaat.`,
        `Hij zal hen hun beloning geven en Zijn gunst aan hen vergroten. Hij is Vergevingsgezind, Waarderend.`
      ],
      [
        `بے شک جو لوگ اللہ کی کتاب کی تلاوت کرتے ہیں اور نماز قائم کرتے ہیں،`,
        `اور جو کچھ ہم نے انہیں دیا ہے اس میں سے چھپا کر اور ظاہر کرکے خرچ کرتے ہیں، وہ ایسی تجارت کی امید رکھتے ہیں جو کبھی ختم نہیں ہوگی۔`,
        `وہ انہیں ان کا اجر پورا دے گا اور اپنے فضل سے مزید دے گا، بے شک وہ بہت بخشنے والا، قدر کرنے والا ہے۔`
      ],
      [
        `Sesungguhnya orang-orang yang membaca Kitab Allah, menegakkan salat,`,
        `dan menafkahkan sebagian dari rezeki yang Kami berikan kepada mereka secara sembunyi dan terang-terangan, mengharapkan perdagangan yang tidak akan rugi.`,
        `Dia akan memberi mereka pahala mereka dan menambah dari karunia-Nya. Sesungguhnya Dia Maha Pengampun, Maha Mensyukuri.`
      ],
      [
        `Şüphesiz Allah’ın kitabını okuyanlar, namazı kılanlar,`,
        `ve kendilerine verdiğimiz rızıklardan gizli ve açık infak edenler, asla yok olmayacak bir ticaret umarlar.`,
        `Allah onlara mükafatlarını verecek ve lütfundan artıracaktır. Şüphesiz O, çok bağışlayandır, şükredilendir.`
      ],
      [
        `بی‌تردید کسانی که کتاب خدا را تلاوت می‌کنند و نماز را برپا می‌دارند،`,
        `و از آنچه روزی‌شان کرده‌ایم پنهان و آشکار انفاق می‌کنند، به تجارتی امید دارند که هرگز از بین نمی‌رود.`,
        `او پاداششان را کامل می‌دهد و از فضل خود بر آنان می‌افزاید. او آمرزنده و شکرپذیر است.`
      ],
      [
        `নিশ্চয়ই যারা আল্লাহর কিতাব তিলাওয়াত করে, নামাজ কায়েম করে,`,
        `এবং আমরা যা দিয়েছি তা থেকে গোপনে ও প্রকাশ্যে ব্যয় করে, তারা এমন বাণিজ্যের আশা করে যা কখনো ক্ষতিগ্রস্ত হবে না।`,
        `তিনি তাদের প্রতিদান পূর্ণভাবে দেবেন এবং তাঁর অনুগ্রহ থেকে বাড়িয়ে দেবেন। তিনি ক্ষমাশীল, কৃতজ্ঞ।`
      ],
      [
        `Certamente, aqueles que recitam o Livro de Allah, estabelecem a oração,`,
        `e gastam do que lhes concedemos, em segredo e em público, esperam um comércio que nunca perecerá.`,
        `Ele lhes dará sua recompensa e aumentará de Sua graça. Ele é Perdoador, Agradecido.`
      ],
      [
        `确实，那些诵读真主经典、履行礼拜的人，`,
        `并暗中和公开施舍我们所供给他们的人，希望一种永不亏损的交易。`,
        `他将赐予他们报酬，并从他的恩惠中增加他们。他确是至赦的、感恩的。`
      ],
      [
        `確かに、アッラーの啓典を読み、礼拝を守り、`,
        `われらが授けたものから密かにまた公然と施す者は、決して滅びない取引を望む者である。`,
        `かれは彼らに報酬を与え、その恩恵を増やす。かれは寛容にして感謝されるお方である。`
      ],
      [
        `실로 알্লাহ의 책을 낭송하고 예배를 세우며,`,
        `우리가 준 رزق 중에서 은밀히 그리고 공개적으로 베푸는 자들은 결코 사라지지 않는 거래를 바란다.`,
        `그는 그들에게 보상을 완전히 주고 은혜를 더할 것이다. 그는 관대하고 감사하시는 분이라.`
      ],
      [
        `In verità, coloro che recitano il Libro di Allah, compiono la preghiera,`,
        `e spendono di ciò che abbiamo dato loro, in segreto e in pubblico, sperano in un commercio che non perirà mai.`,
        `Egli darà loro la ricompensa e aumenterà la Sua grazia. Egli è Perdonatore, Riconoscente.`
      ],
      [
        `Zaprawdę, ci którzy recytują Księgę Allaha, odprawiają modlitwę,`,
        `i wydają z tego, czym ich obdarzyliśmy, potajemnie i jawnie, oczekują handlu, który nigdy nie przepadnie.`,
        `On da im ich nagrodę i zwiększy swoją łaskę. Zaprawdę, On jest Przebaczający, Wdzięczny.`
      ],
      [
        `Воістину, ті, хто читають Писання Аллаха, виконують молитву,`,
        `і витрачають із того, чим Ми їх забезпечили, таємно і відкрито, сподіваються на торгівлю, що ніколи не зникне.`,
        `Він віддасть їм їхню нагороду і примножить Свою милість. Воістину, Він Прощаючий, Вдячний.`
      ]
    ],
    number: `سورة فاطر / Fatir، الآيات 29-30`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ`,
      `هَلْ مِنْ خَالِقٍ غَيْرُ اللَّهِ يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ`,
      `لَا إِلَٰهَ إِلَّا هُوَ ۖ فَأَنَّىٰ تُؤْفَكُونَ`
    ],
    translations: [
      [
        `O mankind, remember the favor of Allah upon you.`,
        `Is there any creator besides Allah who provides for you from the heavens and the earth?`,
        `There is no deity except Him, so how are you deluded?`
      ],
      [
        `Ô hommes ! Rappelez-vous le bienfait d’Allah sur vous.`,
        `Y a-t-il un créateur autre qu’Allah qui vous pourvoit des cieux et de la terre ?`,
        `Il n’y a de divinité que Lui, comment donc êtes-vous détournés ?`
      ],
      [
        `¡Oh humanidad! Recordad el favor de Allah sobre vosotros.`,
        `¿Hay algún creador fuera de Allah que os provea de los cielos y de la tierra?`,
        `No hay divinidad sino Él, ¿cómo podéis ser desviados?`
      ],
      [
        `О люди! Помните милость Аллаха к вам.`,
        `Есть ли творец, кроме Аллаха, который обеспечивает вас с небес и земли?`,
        `Нет божества кроме Него, как же вы отворачиваетесь?`
      ],
      [
        `O ihr Menschen! Gedenkt der Gnade Allahs an euch.`,
        `Gibt es einen Schöpfer außer Allah, der euch aus Himmel und Erde versorgt?`,
        `Es gibt keinen Gott außer Ihm, wie könnt ihr also abgewandt werden?`
      ],
      [
        `O människor! Minns Allahs nåd över er.`,
        `Finns det någon skapare förutom Allah som försörjer er från himlarna och jorden?`,
        `Ingen gud finns utom Han, hur kan ni då vändas bort?`
      ],
      [
        `A dhaoine uaisle! Cuimhnigí ar ghrás Allah oraibh.`,
        `An bhfuil cruthaitheoir eile seachas Allah a sholáthraíonn daoibh ó na flaithis agus an talamh?`,
        `Níl dia ann ach Sé, cén chaoi a n-iompaítear sibh ansin?`
      ],
      [
        `O mensheid! Herinner de gunst van Allah aan jullie.`,
        `Is er een schepper behalve Allah die jullie voorziet uit de hemelen en de aarde?`,
        `Er is geen god behalve Hij, hoe worden jullie dan afgewend?`
      ],
      [
        `اے لوگو! اللہ کی نعمت کو یاد کرو جو اس نے تم پر کی ہے،`,
        `کیا اللہ کے سوا کوئی خالق ہے جو تمہیں آسمان اور زمین سے رزق دیتا ہو؟`,
        `اس کے سوا کوئی معبود نہیں، پھر تم کہاں بہکائے جاتے ہو؟`
      ],
      [
        `Wahai manusia! Ingatlah nikmat Allah atas kalian.`,
        `Adakah pencipta selain Allah yang memberi rezeki kepada kalian dari langit dan bumi?`,
        `Tidak ada tuhan selain Dia, maka mengapa kalian dipalingkan?`
      ],
      [
        `Ey insanlar! Allah’ın üzerinizdeki nimetini hatırlayın.`,
        `Allah’tan başka size gökten ve yerden rızık veren bir yaratıcı var mı?`,
        `O’ndan başka ilah yoktur, nasıl da çevriliyorsunuz?`
      ],
      [
        `ای مردم! نعمت خدا را بر خود به یاد آورید.`,
        `آیا غیر از خدا خالقی هست که از آسمان و زمین به شما روزی دهد؟`,
        `هیچ معبودی جز او نیست، پس چگونه منحرف می‌شوید؟`
      ],
      [
        `হে মানবজাতি! তোমাদের উপর আল্লাহর নিয়ামত স্মরণ করো।`,
        `আল্লাহ ছাড়া কি কোনো স্রষ্টা আছে যে আসমান ও জমিন থেকে তোমাদের রিজিক দেয়?`,
        `তাঁর ছাড়া কোনো উপাস্য নেই, তাহলে তোমরা কোথায় ফিরিয়ে নেওয়া হচ্ছ?`
      ],
      [
        `Ó humanidade! Recordai a graça de Allah sobre vós.`,
        `Há algum criador além de Allah que vos sustente dos céus e da terra?`,
        `Não há divindade além d’Ele, então como vos afastais?`
      ],
      [
        `人类啊！你们当记念真主赐给你们的恩典。`,
        `除真主外，还有谁是创造者能从天地供养你们？`,
        `除他外绝无应受崇拜的，你们为何被迷惑？`
      ],
      [
        `人々よ！あなた方へのアッラーの恩恵を思い出せ。`,
        `アッラー以外に、天と地からあなた方に رزقを与える創造者がいるか？`,
        `彼以外に神はないのに、なぜあなた方は背かされるのか？`
      ],
      [
        `사람들이여! 너희에게 베푸신 알্লাহ의 은혜를 기억하라.`,
        `알্লাহ 외에 하늘과 땅에서 너희에게 رزق을 주는 창조자가 있는가?`,
        `그 외에 신은 없는데 어찌하여 너희가 돌아서는가?`
      ],
      [
        `O uomini! Ricordate la grazia di Allah su di voi.`,
        `C’è un creatore oltre Allah che vi provvede dai cieli e dalla terra?`,
        `Non c’è dio all’infuori di Lui, come dunque vi allontanate?`
      ],
      [
        `O ludzie! Wspominajcie łaskę Allaha wobec was.`,
        `Czy istnieje inny stwórca niż Allah, który zaopatruje was z niebios i ziemi?`,
        `Nie ma boga prócz Niego, jak więc jesteście odwracani?`
      ],
      [
        `О люди! Згадайте милість Аллаха до вас.`,
        `Чи є інший творець, крім Аллаха, який дає вам прожиток з небес і землі?`,
        `Немає божества крім Нього, то чому ж вас відвертають?`
      ]
    ],
    number: `سورة فاطر / Fatir، الآية 3`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ إِنَّ وَعْدَ اللَّهِ حَقٌّ`,
      `فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا`,
      `وَلَا يَغُرَّنَّكُم بِاللَّهِ الْغَرُورُ`
    ],
    translations: [
      [
        `O mankind, indeed the promise of Allah is true.`,
        `So let not the life of this world deceive you,`,
        `nor let the deceiver deceive you about Allah.`
      ],
      [
        `Ô hommes ! La promesse d’Allah est vérité.`,
        `Que la vie d’ici-bas ne vous trompe donc pas,`,
        `et que le trompeur ne vous trompe pas au sujet d’Allah.`
      ],
      [
        `¡Oh humanidad! La promesa de Allah es verdad.`,
        `Que la vida mundanal no os engañe,`,
        `ni el engañador os engañe acerca de Allah.`
      ],
      [
        `О люди! Обещание Аллаха — истина.`,
        `Пусть же не обманывает вас жизнь этого мира,`,
        `и пусть обманщик не обманывает вас относительно Аллаха.`
      ],
      [
        `O ihr Menschen! Das Versprechen Allahs ist wahr.`,
        `So möge euch das diesseitige Leben nicht täuschen,`,
        `und auch der Täuscher möge euch nicht über Allah täuschen.`
      ],
      [
        `O människor! Allahs löfte är sanning.`,
        `Låt därför inte detta världsliv bedra er,`,
        `och låt inte bedragaren bedra er om Allah.`
      ],
      [
        `A dhaoine uaisle! Is fíor gealltanas Allah.`,
        `Ná mealladh saol an domhain sibh,`,
        `ná an meallaire faoi Allah.`
      ],
      [
        `O mensheid! De belofte van Allah is waar.`,
        `Laat het wereldse leven jullie niet misleiden,`,
        `en laat de verleider jullie niet misleiden over Allah.`
      ],
      [
        `اے لوگو! بے شک اللہ کا وعدہ سچا ہے،`,
        `پس دنیا کی زندگی تمہیں دھوکہ نہ دے،`,
        `اور نہ دھوکہ دینے والا تمہیں اللہ کے بارے میں دھوکہ دے۔`
      ],
      [
        `Wahai manusia! Sesungguhnya janji Allah itu benar,`,
        `maka janganlah kehidupan dunia menipu kalian,`,
        `dan jangan pula penipu menipu kalian tentang Allah.`
      ],
      [
        `Ey insanlar! Allah’ın vaadi gerçektir.`,
        `Dünya hayatı sizi aldatmasın,`,
        `ve aldatıcı da Allah hakkında sizi aldatmasın.`
      ],
      [
        `ای مردم! وعده خدا حق است،`,
        `پس زندگی دنیا شما را فریب ندهد،`,
        `و فریبکار نیز شما را درباره خدا نفریبد.`
      ],
      [
        `হে মানবজাতি! নিশ্চয়ই আল্লাহর প্রতিশ্রুতি সত্য,`,
        `তাই দুনিয়ার জীবন যেন তোমাদের প্রতারিত না করে,`,
        `এবং প্রতারক যেন আল্লাহ সম্পর্কে তোমাদের প্রতারিত না করে।`
      ],
      [
        `Ó humanidade! A promessa de Allah é verdadeira,`,
        `que a vida mundana não vos engane,`,
        `nem o enganador vos engane sobre Allah.`
      ],
      [
        `人类啊！真主的应许是真实的，`,
        `所以今世生活不要欺骗你们，`,
        `欺骗者也不要使你们在真主上受骗。`
      ],
      [
        `人々よ！アッラーの約束は真実である、`,
        `現世の生活に騙されるな、`,
        `また騙す者にもアッラーについて騙されるな。`
      ],
      [
        `사람들이여! 알্লাহ의 약속은 진실이다,`,
        `세상의 삶이 너희를 속이지 못하게 하라,`,
        `또한 속이는 자가 알্লাহ에 대해 너희를 속이지 못하게 하라.`
      ],
      [
        `O uomini! La promessa di Allah è verità,`,
        `la vita mondana non vi inganni,`,
        `e il seduttore non vi inganni riguardo ad Allah.`
      ],
      [
        `O ludzie! Obietnica Allaha jest prawdą,`,
        `niech życie doczesne was nie zwiedzie,`,
        `ani zwodziciel w sprawie Allaha.`
      ],
      [
        `О люди! Обіцянка Аллаха є правдою,`,
        `нехай земне життя вас не обманює,`,
        `і нехай обманщик не обманює вас щодо Аллаха.`
      ]
    ],
    number: `سورة فاطر / Fatir، الآية 5`
  },

  {
    arabic: [
      `مَن كَانَ يُرِيدُ الْعِزَّةَ فَلِلَّهِ الْعِزَّةُ جَمِيعًا`,
      `إِلَيْهِ يَصْعَدُ الْكَلِمُ الطَّيِّبُ وَالْعَمَلُ الصَّالِحُ يَرْفَعُهُ`,
      `وَالَّذِينَ يَمْكُرُونَ السَّيِّئَاتِ لَهُمْ عَذَابٌ شَدِيدٌ ۖ وَمَكْرُ أُولَٰئِكَ هُوَ يَبُورُ`
    ],
    translations: [
      [
        `Whoever desires honor, then to Allah belongs all honor.`,
        `To Him ascends the good word, and righteous deeds raise it.`,
        `But those who plot evil shall have a severe punishment, and the plot of those is doomed.`
      ],
      [
        `Quiconque désire l’honneur, alors à Allah appartient tout l’honneur.`,
        `Vers Lui monte la bonne parole, et la bonne action l’élève.`,
        `Mais ceux qui complotent le mal auront un châtiment شديد, et leur complot est voué à l’échec.`
      ],
      [
        `Quien desea el honor, todo el honor pertenece a Allah.`,
        `A Él asciende la buena palabra, y la buena acción la eleva.`,
        `Pero quienes traman el mal tendrán un castigo severo, y su trama será destruida.`
      ],
      [
        `Кто желает величия, то всё величие принадлежит Аллаху.`,
        `К Нему восходит доброе слово, и праведное деяние его возвышает.`,
        `А тем, кто замышляет зло, — суровое наказание, и их козни обречены.`
      ],
      [
        `Wer Ehre begehrt, so gehört alle Ehre Allah.`,
        `Zu Ihm steigt das gute Wort auf, und rechtschaffene Taten erhöhen es.`,
        `Doch jene, die Böses planen, haben eine schwere Strafe, und ihre Pläne werden zunichte.`
      ],
      [
        `Den som önskar ära, all ära tillhör Allah.`,
        `Till Honom stiger det goda ordet, och goda gärningar höjer det.`,
        `Men de som smider onda planer har ett strängt straff, och deras planer går under.`
      ],
      [
        `An té a iarrann onóir, is le Allah an onóir go léir.`,
        `Chuig Sé a éiríonn an focal maith, agus ardaíonn an gníomh ceart é.`,
        `Ach dóibh siúd a dhéanann olc tá pionós géar, agus teipfidh ar a gcuid ceapacha.`
      ],
      [
        `Wie eer wil, alle eer behoort aan Allah.`,
        `Tot Hem stijgt het goede woord op, en goede daden verheffen het.`,
        `Maar degenen die kwaad beramen hebben een zware bestraffing, en hun plannen mislukken.`
      ],
      [
        `جو عزت چاہتا ہے تو عزت سب اللہ کے لیے ہے،`,
        `اسی کی طرف پاکیزہ کلمات چڑھتے ہیں اور نیک عمل انہیں بلند کرتا ہے،`,
        `اور جو لوگ برائی کی تدبیر کرتے ہیں ان کے لیے سخت عذاب ہے اور ان کی تدبیر ناکام ہے۔`
      ],
      [
        `Barang siapa menginginkan kemuliaan, maka kemuliaan itu milik Allah semuanya.`,
        `Kepada-Nya naik perkataan yang baik, dan amal saleh mengangkatnya.`,
        `Dan orang-orang yang merencanakan kejahatan akan mendapat azab yang شديد, dan tipu daya mereka akan hancur.`
      ],
      [
        `Kim izzet istiyorsa, bütün izzet Allah’a aittir.`,
        `O’na güzel söz yükselir, salih ameller onu yükseltir.`,
        `Kötülük planlayanlar için şiddetli bir azap vardır ve onların planı boşa çıkar.`
      ],
      [
        `هر کس عزت بخواهد، همه عزت از آنِ خداست.`,
        `سخن پاک به سوی او بالا می‌رود و عمل صالح آن را بالا می‌برد.`,
        `و کسانی که بدی‌ها را مکر می‌کنند عذاب شدیدی دارند و مکرشان نابود می‌شود.`
      ],
      [
        `যে সম্মান চায়, সমস্ত সম্মান আল্লাহর জন্যই।`,
        `তাঁর দিকেই পবিত্র কথা উঠে যায় এবং সৎ কাজ তাকে উন্নীত করে।`,
        `আর যারা মন্দ চক্রান্ত করে তাদের জন্য কঠিন শাস্তি রয়েছে এবং তাদের চক্রান্ত ব্যর্থ হবে।`
      ],
      [
        `Quem deseja honra, toda honra pertence a Allah.`,
        `A Ele ascende a boa palavra, e a boa ação a eleva.`,
        `Mas aqueles que tramam o mal terão um castigo severo, e sua trama perecerá.`
      ],
      [
        `谁想要尊贵，那么一切尊贵只归真主。`,
        `善言升向他，善行使之提升。`,
        `而那些策划恶行的人将受严厉惩罚，他们的阴谋必将失败。`
      ],
      [
        `栄誉を求める者よ、すべての栄誉はアッラーに属する。`,
        `良い言葉は彼に昇り、正しい行いがそれを高める。`,
        `悪を企てる者には厳しい罰があり、その企ては滅びる。`
      ],
      [
        `영광을 원하는 자여, 모든 영광은 알্লাহ께 있다.`,
        `그에게 좋은 말이 올라가고 선한 행위가 그것을 높인다.`,
        `악을 꾸미는 자들에게는 شدید한 벌이 있으며 그들의 음모는 사라질 것이다.`
      ],
      [
        `Chi desidera l’onore, tutto l’onore appartiene ad Allah.`,
        `A Lui sale la parola buona, e le buone azioni la elevano.`,
        `Ma coloro che tramano il male avranno un severo castigo e il loro piano fallirà.`
      ],
      [
        `Kto pragnie chwały, cała chwała należy do Allaha.`,
        `Do Niego wznosi się dobre słowo, a dobre uczynki je podnoszą.`,
        `A ci, którzy knują zło, mają surową karę, a ich spisek zginie.`
      ],
      [
        `Хто бажає честі, вся честь належить Аллаху.`,
        `До Нього підноситься добре слово, і праведні справи його підносять.`,
        `А тим, хто замишляє зло, — сувора кара, і їхній задум загине.`
      ]
    ],
    number: `سورة فاطر / Fatir، الآية 10`
  },

  {
    arabic: [
      `كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ`,
      `لّيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ`,
      ``
    ],
    translations: [
      [
        `(This is) a Book which We have sent down to you, blessed`,
        `that they may reflect upon its verses and that those of understanding would be reminded`,
        ``
      ],
      [
        `C'est un Livre béni que Nous avons fait descendre vers toi`,
        `afin qu'ils méditent sur ses versets et que les doués d'intelligence réfléchissent`,
        ``
      ],
      [
        `Este es un Libro bendito que hemos revelado para ti`,
        `para que mediten sobre sus aleyas y para que reflexionen los dotados de entendimiento`,
        ``
      ],
      [
        `Это благословенное Писание, которое Мы ниспослали тебе`,
        `чтобы они размышляли над его аятами и чтобы обладающие разумом помнили`,
        ``
      ],
      [
        `Dies ist ein gesegnetes Buch, das Wir zu dir hinabgesandt haben`,
        `damit sie über seine Verse nachdenken und die Verständigen sich ermahnen lassen`,
        ``
      ],
      [
        `Detta är en välsignad Skrift som Vi har uppenbarat för dig`,
        `för att de ska begrunda dess verser och så att de förståndiga ska ta lärdom`,
        ``
      ],
      [
        `Is leabhar beannaithe é seo a sheolamar anuas chugat`,
        `ionas go smaoineodh siad ar a véarsaí agus go gcuimhneodh lucht tuisceana`,
        ``
      ],
      [
        `Dit is een gezegend Boek dat Wij tot jou hebben neergezonden`,
        `opdat zij over zijn verzen nadenken en de verstandigen zich laten vermanen`,
        ``
      ],
      [
        `یہ ایک بابرکت کتاب ہے جو ہم نے آپ کی طرف نازل کی`,
        `تاکہ لوگ اس کی آیات میں غور کریں اور عقل والے نصیحت حاصل کریں`,
        ``
      ],
      [
        `Ini adalah Kitab yang penuh berkah yang Kami turunkan kepadamu`,
        `agar mereka mentadabburi ayat-ayatnya dan agar orang-orang berakal mengambil pelajaran`,
        ``
      ],
      [
        `Bu, sana indirdiğimiz mübarek bir kitaptır`,
        `ayetlerini düşünsünler ve akıl sahipleri öğüt alsın diye`,
        ``
      ],
      [
        `این کتابی مبارک است که آن را به سوی تو نازل کردیم`,
        `تا در آیاتش تدبر کنند و خردمندان پند گیرند`,
        ``
      ],
      [
        `এটি এক বরকতময় কিতাব যা আমি তোমার প্রতি নাযিল করেছি`,
        `যাতে তারা এর আয়াতসমূহ নিয়ে চিন্তা করে এবং বোধসম্পন্নরা উপদেশ গ্রহণ করে`,
        ``
      ],
      [
        `Este é um Livro abençoado que revelamos a você`,
        `para que reflitam sobre seus versículos e para que os dotados de entendimento se recordem`,
        ``
      ],
      [
        `这是我降示给你的一部吉祥的经典`,
        `以便他们思考其中的迹象，并使有理智的人觉悟`,
        ``
      ],
      [
        `これはわれがあなたに下した祝福された書である`,
        `その節々を熟考させ、理性ある者に思い出させるためである`,
        ``
      ],
      [
        `이것은 우리가 그대에게 내린 축복된 책이라`,
        `그 구절들을 깊이 생각하고 지혜 있는 자들이 교훈을 얻도록 함이라`,
        ``
      ],
      [
        `Questo è un Libro benedetto che abbiamo fatto scendere su di te`,
        `affinché riflettano sui suoi versetti e affinché i dotati di intelletto ricordino`,
        ``
      ],
      [
        `To jest błogosławiona Księga, którą zesłaliśmy tobie`,
        `aby rozważali jej wersety i aby ludzie rozumu brali sobie do serca`,
        ``
      ],
      [
        `Це благословенне Писання, яке Ми зіслав тобі`,
        `щоб вони розмірковували над його аятами і щоб розумні пам’ятали`,
        ``
      ]
    ],
    number: `سورة ص / Sad، الآية 29`
  },

  {
    arabic: [
      `فَبَشِّرْ عِبَادِ الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ`,
      `فَيَتَّبِعُونَ أَحْسَنَهُ`,
      `أُولَٰئِكَ الَّذِينَ هَدَاهُمُ اللَّهُ ۖ وَأُولَٰئِكَ هُمْ أُولُو الْأَلْبَابِ`
    ],
    translations: [
      [
        `Those who listen to the Word [good advice La ilaha ill-Allah and Islamic Monotheism, etc.]`,
        `and follow the best thereof`,
        `those are whom Allah has guided, and those are men of understanding.`
      ],
      [
        `Annonce donc la bonne nouvelle à Mes serviteurs qui écoutent la parole`,
        `et suivent ce qu’elle a de meilleur`,
        `ce sont ceux qu’Allah a guidés, et ce sont eux les doués d’intelligence.`
      ],
      [
        `Da la buena noticia a Mis siervos que escuchan la palabra`,
        `y siguen lo mejor de ella`,
        `esos son a quienes Allah ha guiado, y esos son los dotados de entendimiento.`
      ],
      [
        `Обрадуй Моих рабов, которые слушают слово`,
        `и следуют наилучшему из него`,
        `это те, кого Аллах наставил, и они — обладающие разумом.`
      ],
      [
        `So verkünde Meinen Dienern die frohe Botschaft, die auf das Wort hören`,
        `und dem Besten davon folgen`,
        `das sind diejenigen, die Allah rechtgeleitet hat, und das sind die Verständigen.`
      ],
      [
        `Ge därför det glada budskapet till Mina tjänare som lyssnar på ordet`,
        `och följer det bästa av det`,
        `det är de som Allah har väglett, och de är de förståndiga.`
      ],
      [
        `Tabhair dea-scéal do Mo sheirbhísigh a éisteann leis an bhfocal`,
        `agus a leanann an chuid is fearr de`,
        `is iad sin iad siúd a threoraigh Allah, agus is iad sin lucht tuisceana.`
      ],
      [
        `Verkondig dus het goede nieuws aan Mijn dienaren die naar het woord luisteren`,
        `en het beste ervan volgen`,
        `zij zijn het die Allah heeft geleid, en zij zijn de bezitters van verstand.`
      ],
      [
        `پس میرے ان بندوں کو خوشخبری دے دو جو بات کو غور سے سنتے ہیں`,
        `پھر اس کے بہترین پہلو کی پیروی کرتے ہیں`,
        `یہی وہ لوگ ہیں جنہیں اللہ نے ہدایت دی ہے اور یہی عقل والے ہیں۔`
      ],
      [
        `Maka sampaikanlah kabar gembira kepada hamba-hamba-Ku yang mendengarkan perkataan`,
        `lalu mengikuti yang terbaik darinya`,
        `mereka itulah orang-orang yang telah diberi petunjuk oleh Allah dan mereka itulah orang-orang yang berakal.`
      ],
      [
        `Sözü dinleyip onun en güzeline uyan kullarıma müjde ver`,
        `işte onlar Allah’ın hidayet ettiği kimselerdir`,
        `ve işte onlar akıl sahipleridir.`
      ],
      [
        `پس بندگان مرا بشارت ده، کسانی که سخن را می‌شنوند`,
        `و از بهترین آن پیروی می‌کنند`,
        `آنان کسانی هستند که خدا هدایتشان کرده و آنان خردمندانند.`
      ],
      [
        `অতএব আমার বান্দাদের সুসংবাদ দাও যারা কথা শোনে`,
        `অতঃপর তার উত্তমটি অনুসরণ করে`,
        `তারাই তারা যাদের আল্লাহ হেদায়েত দিয়েছেন এবং তারাই বুদ্ধিমান।`
      ],
      [
        `Anuncia, pois, a boa nova aos Meus servos que ouvem a palavra`,
        `e seguem o melhor dela`,
        `esses são os que Allah guiou, e esses são os dotados de entendimento.`
      ],
      [
        `你当向我的仆人报喜，他们倾听言辞`,
        `并遵循其中最优美的`,
        `这等人是真主所引导的，他们是有理智的人。`
      ],
      [
        `言葉を聞き、その最も良いものに従うわがしもべたちに吉報を伝えよ。`,
        `彼らこそアッラーに導かれた者たちであり、`,
        `理知ある者たちである。`
      ],
      [
        `말씀을 듣고 그 중 가장 좋은 것을 따르는 나의 종들에게 기쁜 소식을 전하라`,
        `그들은 하나님께서 인도하신 자들이며`,
        `그들이야말로 지혜를 가진 자들이다.`
      ],
      [
        `Dà dunque la lieta novella ai Miei servi che ascoltano la parola`,
        `e seguono il meglio di essa`,
        `essi sono coloro che Allah ha guidato, e sono i dotati di intelletto.`
      ],
      [
        `Przekaż więc radosną nowinę Moim sługom, którzy słuchają słowa`,
        `i podążają za tym, co w nim najlepsze`,
        `to są ci, których Allah poprowadził, i oni są obdarzeni rozumem.`
      ],
      [
        `Тож сповісти добру звістку Моїм рабам, які слухають слово`,
        `і слідують найкращому з нього`,
        `це ті, кого Аллах наставив, і це люди розуму.`
      ]
    ],
    number: `سورة الزمر / Az-Zumar، الآيات 17-18`
  },

  {
    arabic: [
      `اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا مُّتَشَابِهًا مَّثَانِيَ`,
      `تَقْشَعِرُّ مِنْهُ جُلُودُ الَّذِينَ يَخْشَوْنَ رَبَّهُمْ`,
      `ثُمَّ تَلِينُ جُلُودُهُمْ وَقُلُوبُهُمْ إِلَىٰ ذِكْرِ اللَّهِ ۚ ذَٰلِكَ هُدَى اللَّهِ`
    ],
    translations: [
      [
        `Allah has sent down the best statement: a consistent Book wherein is reiteration.`,
        `The skins of those who fear their Lord tremble from it;`,
        `then their skins and their hearts relax at the remembrance of Allah. That is the guidance of Allah.`
      ],
      [
        `Allah a fait descendre le meilleur des discours : un Livre cohérent et répété.`,
        `Les peaux de ceux qui craignent leur Seigneur frissonnent à son écoute ;`,
        `puis leurs peaux et leurs cœurs s’apaisent au rappel d’Allah. Voilà la guidance d’Allah.`
      ],
      [
        `Allah ha revelado el mejor discurso: un Libro coherente y repetido.`,
        `La piel de quienes temen a su Señor se estremece ante él;`,
        `luego sus pieles y sus corazones se suavizan al recuerdo de Allah. Esa es la guía de Allah.`
      ],
      [
        `Аллах ниспослал лучший рассказ: Книгу согласованную и повторяющуюся.`,
        `Кожа тех, кто боится своего Господа, трепещет от неё;`,
        `затем их кожа и сердца смягчаются при поминании Аллаха. Это — руководство Аллаха.`
      ],
      [
        `Allah hat die beste Botschaft herabgesandt: ein harmonisches, wiederholtes Buch.`,
        `Die Haut derjenigen, die ihren Herrn fürchten, erbebt davon;`,
        `dann werden ihre Haut und ihre Herzen weich beim Gedenken Allahs. Das ist die Rechtleitung Allahs.`
      ],
      [
        `Allah har uppenbarat det bästa talet: en sammanhängande och upprepad bok.`,
        `Huden på dem som fruktar sin Herre rysar av den;`,
        `sedan mjuknar deras hud och hjärtan vid Allahs åminnelse. Detta är Allahs vägledning.`
      ],
      [
        `Tá Allah tar éis an óráid is fearr a sheoladh anuas: Leabhar comhleanúnach athfhillteach.`,
        `Téann craiceann na ndaoine a bhfuil eagla ar a dTiarna orthu i gcrith uaidh;`,
        `ansin bogann a gcraiceann agus a gcroíthe le cuimhne Allah. Sin treoir Allah.`
      ],
      [
        `Allah heeft de beste boodschap neergezonden: een samenhangend en herhaald Boek.`,
        `De huid van degenen die hun Heer vrezen, huivert ervan;`,
        `dan worden hun huid en hun harten zacht bij de herinnering aan Allah. Dat is de leiding van Allah.`
      ],
      [
        `اللہ نے بہترین کلام نازل فرمایا: ایک ہم آہنگ اور بار بار دہرائی جانے والی کتاب۔`,
        `ان لوگوں کے جسم کے رونگٹے کھڑے ہو جاتے ہیں جو اپنے رب سے ڈرتے ہیں؛`,
        `پھر ان کے جسم اور دل اللہ کے ذکر سے نرم ہو جاتے ہیں۔ یہی اللہ کی ہدایت ہے۔`
      ],
      [
        `Allah telah menurunkan perkataan terbaik: Kitab yang serasi dan berulang-ulang.`,
        `Kulit orang-orang yang takut kepada Tuhannya merinding karenanya;`,
        `kemudian kulit dan hati mereka menjadi tenang dengan mengingat Allah. Itulah petunjuk Allah.`
      ],
      [
        `Allah en güzel sözü indirmiştir: tutarlı ve tekrar eden bir Kitap.`,
        `Rablerinden korkanların derileri ondan ürperir;`,
        `sonra derileri ve kalpleri Allah’ı anmakla yumuşar. İşte bu Allah’ın hidayetidir.`
      ]
    ],
    number: `سورة الزمر / Az-Zumar، الآية 23`
  },

  {
    arabic: [
      `قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ`,
      ``,
      ``
    ],
    translations: [
      [
        `Say, “O My servants who have transgressed against themselves, do not despair of the mercy of Allah.”`,
        ``,
        ``
      ],
      [
        `Dis : « Ô Mes serviteurs qui avez commis des excès contre vous-mêmes, ne désespérez pas de la miséricorde d’Allah. »`,
        ``,
        ``
      ],
      [
        `Di: «Oh Mis siervos que habéis cometido excesos contra vosotros mismos, no desesperéis de la misericordia de Allah.»`,
        ``,
        ``
      ],
      [
        `Скажи: «О Мои рабы, которые преступили против самих себя, не отчаивайтесь в милости Аллаха».`,
        ``,
        ``
      ],
      [
        `Sag: „O Meine Diener, die gegen sich selbst maßlos waren, verzweifelt nicht an der Barmherzigkeit Allahs.“`,
        ``,
        ``
      ],
      [
        `Säg: “O Mina tjänare som har gått till överdrift mot er själva, förtvivla inte över Allahs barmhärtighet.”`,
        ``,
        ``
      ],
      [
        `Abair: “A Mhá sheirbhísigh a rinne róchaiteachas oraibh féin, ná cailligí dóchas i trócaire Allah.”`,
        ``,
        ``
      ],
      [
        `Zeg: “O Mijn dienaren die buitensporig waren tegen zichzelf, wanhoop niet aan de barmhartigheid van Allah.”`,
        ``,
        ``
      ],
      [
        `کہہ دو: اے میرے بندو جنہوں نے اپنی جانوں پر زیادتی کی، اللہ کی رحمت سے ناامید نہ ہو۔`,
        ``,
        ``
      ],
      [
        `Katakanlah: “Wahai hamba-hamba-Ku yang melampaui batas terhadap diri mereka sendiri, janganlah berputus asa dari rahmat Allah.”`,
        ``,
        ``
      ],
      [
        `De ki: “Ey kendilerine karşı haddi aşan kullarım, Allah’ın rahmetinden ümidinizi kesmeyin.”`,
        ``,
        ``
      ],
      [
        `بگو: ای بندگان من که بر خود اسراف کرده‌اید، از رحمت خدا ناامید نشوید.`,
        ``,
        ``
      ],
      [
        `বল: হে আমার বান্দারা যারা নিজেদের উপর বাড়াবাড়ি করেছো, আল্লাহর রহমত থেকে নিরাশ হয়ো না।`,
        ``,
        ``
      ],
      [
        `Dize: “Ó Meus servos que cometeram excessos contra si mesmos, não desesperem da misericórdia de Allah.”`,
        ``,
        ``
      ],
      [
        `你说：“我的仆人们啊，你们对自己过度放纵了，不要绝望于真主的慈恩。”`,
        ``,
        ``
      ],
      [
        `言え：「わがしもべたちよ、自らに過ちを犯した者たちよ、アッラーの慈悲に絶望してはならない。」`,
        ``,
        ``
      ],
      [
        `말하라: “나의 종들아, 스스로를 범한 자들이여, 하나님의 자비를 절망하지 말라.”`,
        ``,
        ``
      ],
      [
        `Di’: “O Miei servi che avete ecceduto contro voi stessi, non disperate della misericordia di Allah.”`,
        ``,
        ``
      ],
      [
        `Powiedz: „O moi słudzy, którzy wykroczyliście przeciw sobie, nie rozpaczajcie nad miłosierdziem Allaha.”`,
        ``,
        ``
      ],
      [
        `Скажи: «О Мої раби, які переступили межі проти себе, не втрачайте надії на милість Аллаха».`,
        ``,
        ``
      ]
    ],
    number: `سورة الزمر / Az-Zumar، الآية 53`
  },

  {
    arabic: [
      `قُلْ هُوَ لِلَّذِينَ آمَنُوا هُدًى وَشِفَاءٌ`,
      ``,
      ``
    ],
    translations: [
      [
        `Say, it is for those who believe, a guidance and a healing.`,
        ``,
        ``
      ],
      [
        `Dis : il est, pour ceux qui croient, une guidée et une guérison.`,
        ``,
        ``
      ],
      [
        `Di: es para quienes creen, una guía y una curación.`,
        ``,
        ``
      ],
      [
        `Скажи: он для тех, кто уверовал, — руководство и исцеление.`,
        ``,
        ``
      ],
      [
        `Sag: Er ist für diejenigen, die glauben, eine Rechtleitung und Heilung.`,
        ``,
        ``
      ],
      [
        `Säg: den är för dem som tror, en vägledning och en bot.`,
        ``,
        ``
      ],
      [
        `Abair: is treoir agus leigheas é do na daoine a chreideann.`,
        ``,
        ``
      ],
      [
        `Zeg: het is voor degenen die geloven een leiding en een genezing.`,
        ``,
        ``
      ],
      [
        `کہہ دو: یہ ایمان والوں کے لیے ہدایت اور شفا ہے۔`,
        ``,
        ``
      ],
      [
        `Katakanlah: ia adalah petunjuk dan penyembuh bagi orang-orang yang beriman.`,
        ``,
        ``
      ],
      [
        `De ki: o, iman edenler için bir hidayet ve şifadır.`,
        ``,
        ``
      ],
      [
        `بگو: آن برای کسانی که ایمان آورده‌اند، هدایت و شفا است.`,
        ``,
        ``
      ],
      [
        `বল: এটি মুমিনদের জন্য হিদায়াত ও আরোগ্য।`,
        ``,
        ``
      ],
      [
        `Dize: ele é, para os crentes, uma orientação e uma cura.`,
        ``,
        ``
      ],
      [
        `你说：它对于信仰的人是指导和治愈。`,
        ``,
        ``
      ],
      [
        `言え：それは信じる者にとって導きであり癒やしである。`,
        ``,
        ``
      ],
      [
        `말하라: 그것은 믿는 자들에게 인도와 치유이다.`,
        ``,
        ``
      ],
      [
        `Di’: esso è per coloro che credono una guida e una guarigione.`,
        ``,
        ``
      ],
      [
        `Powiedz: jest ono dla wierzących przewodnictwem i uzdrowieniem.`,
        ``,
        ``
      ],
      [
        `Скажи: це для тих, хто увірував, — керівництво і зцілення.`,
        ``,
        ``
      ]
    ],
    number: `سورة فصلت / Fussilat، الآية 44`
  },

  {
    arabic: [
      `أَفَلَا يَتَدَبَّرُونَ الْقُرآنَ`,
      `أَمْ عَلَى قُلُوبٍ أَقْفَالُهَا`,
      ``
    ],
    translations: [
      [
        `Do they not then think deeply in the Quran,`,
        `or are their hearts locked up (from understanding it)?`,
        ``
      ],
      [
        `Ne méditent-ils donc pas sur le Coran,`,
        `ou leurs cœurs sont-ils verrouillés ?`,
        ``
      ],
      [
        `¿Acaso no reflexionan sobre el Corán,`,
        `o tienen sus corazones cerrados con candados?`,
        ``
      ],
      [
        `Неужели они не размышляют над Кораном,`,
        `или их сердца заперты?`,
        ``
      ],
      [
        `Denken sie denn nicht über den Koran nach,`,
        `oder sind ihre Herzen verschlossen?`,
        ``
      ],
      [
        `Begrundar de inte Koranen,`,
        `eller är deras hjärtan låsta?`,
        ``
      ],
      [
        `Nach smaoiníonn siad ar an gCórán,`,
        `nó an bhfuil a gcroíthe faoi ghlas?`,
        ``
      ],
      [
        `Denken zij niet na over de Koran,`,
        `of zijn hun harten vergrendeld?`,
        ``
      ],
      [
        `کیا یہ لوگ قرآن میں غور نہیں کرتے،`,
        `یا ان کے دلوں پر تالے لگے ہوئے ہیں؟`,
        ``
      ],
      [
        `Apakah mereka tidak mentadabburi Al-Qur'an,`,
        `atau hati mereka terkunci?`,
        ``
      ],
      [
        `Onlar Kur'an'ı düşünmüyorlar mı,`,
        `yoksa kalpleri kilitli mi?`,
        ``
      ],
      [
        `آیا در قرآن تدبر نمی‌کنند،`,
        `یا بر دل‌هایشان قفل زده شده است؟`,
        ``
      ],
      [
        `তারা কি কুরআন নিয়ে চিন্তা করে না,`,
        `না কি তাদের হৃদয়ে তালা লাগানো আছে?`,
        ``
      ],
      [
        `Eles não refletem sobre o Alcorão,`,
        `ou seus corações estão trancados?`,
        ``
      ],
      [
        `难道他们不思考《古兰经》吗，`,
        `还是他们的心被锁住了？`,
        ``
      ],
      [
        `彼らはクルアーンについて考えないのか、`,
        `それとも彼らの心は閉ざされているのか？`,
        ``
      ],
      [
        `그들은 꾸란을 생각하지 않는가,`,
        `아니면 그들의 마음이 잠겨 있는가?`,
        ``
      ],
      [
        `Non riflettono sul Corano,`,
        `o i loro cuori sono sigillati?`,
        ``
      ],
      [
        `Czy oni nie rozważają Koranu,`,
        `czy ich serca są zamknięte?`,
        ``
      ],
      [
        `Невже вони не розмірковують над Кораном,`,
        `чи їхні серця замкнені?`,
        ``
      ]
    ],
    number: `سورة محمد / Muhammad، الآية 24`
  },

  {
    arabic: [
      `يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ`,
      `وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا`,
      `إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ`
    ],
    translations: [
      [
        `O mankind, indeed We have created you from a male and a female,`,
        `and made you peoples and tribes so that you may know one another.`,
        `Indeed, the most honorable of you in the sight of Allah is the most righteous. And Allah is All-Knowing, All-Aware.`
      ],
      [
        `Ô hommes ! Nous vous avons créés d’un mâle et d’une femelle,`,
        `et Nous avons fait de vous des peuples et des tribus afin que vous vous connaissiez.`,
        `Le plus noble d’entre vous auprès d’Allah est le plus pieux. Allah est certes Omniscient et Parfaitement Connaisseur.`
      ],
      [
        `¡Oh humanidad! Os hemos creado de un hombre y una mujer,`,
        `y os hemos hecho pueblos y tribus para que os conozcáis unos a otros.`,
        `El más noble ante Allah es el más piadoso. Allah es Conocedor y Bien Informado.`
      ],
      [
        `О люди! Мы создали вас из мужчины и женщины,`,
        `и сделали вас народами и племенами, чтобы вы познавали друг друга.`,
        `Самый почитаемый перед Аллахом — самый богобоязненный. Поистине, Аллах Знающий, Сведущий.`
      ],
      [
        `O ihr Menschen! Wir haben euch aus einem Mann und einer Frau erschaffen,`,
        `und euch zu Völkern und Stämmen gemacht, damit ihr einander kennenlernt.`,
        `Der Edelste von euch bei Allah ist der Gottesfürchtigste. Wahrlich, Allah ist Allwissend und Allkundig.`
      ],
      [
        `O människor! Vi har skapat er av en man och en kvinna,`,
        `och gjort er till folk och stammar för att ni ska lära känna varandra.`,
        `Den mest ärofyllda av er inför Allah är den mest gudsfruktiga. Allah är Allvetande och Allkunnig.`
      ],
      [
        `A dhaoine uaisle! Chruthaíomar sibh as fear agus bean,`,
        `agus rinneamar sibh ina bpobail agus ina dtreibheanna chun go n-aithneodh sibh a chéile.`,
        `Is é an duine is onóraí i súile Allah an té is diaga. Tá Allah Uile-Eolach, Uile-Fhiosrach.`
      ],
      [
        `O mensheid! Wij hebben jullie geschapen uit een man en een vrouw,`,
        `en jullie tot volken en stammen gemaakt zodat jullie elkaar leren kennen.`,
        `De meest geëerde bij Allah is de meest godsvruchtige. Allah is Alwetend, Alwetend van alles.`
      ],
      [
        `اے لوگو! ہم نے تمہیں ایک مرد اور ایک عورت سے پیدا کیا،`,
        `اور تمہیں قومیں اور قبیلے بنایا تاکہ تم ایک دوسرے کو پہچانو،`,
        `بے شک اللہ کے نزدیک سب سے زیادہ عزت والا وہ ہے جو سب سے زیادہ متقی ہے۔ بے شک اللہ جاننے والا اور باخبر ہے۔`
      ],
      [
        `Wahai manusia! Sesungguhnya Kami menciptakan kalian dari seorang laki-laki dan seorang perempuan,`,
        `dan menjadikan kalian bangsa-bangsa dan suku-suku agar kalian saling mengenal.`,
        `Sesungguhnya yang paling mulia di sisi Allah adalah yang paling bertakwa. Allah Maha Mengetahui lagi Maha Teliti.`
      ],
      [
        `Ey insanlar! Sizi bir erkek ve bir dişiden yarattık,`,
        `ve birbirinizi tanıyasınız diye sizi milletler ve kabileler yaptık.`,
        `Allah katında en değerliniz en takvalı olanınızdır. Şüphesiz Allah bilendir, haberdardır.`
      ],
      [
        `ای مردم! ما شما را از مرد و زنی آفریدیم،`,
        `و شما را ملت‌ها و قبیله‌ها قرار دادیم تا یکدیگر را بشناسید،`,
        `بی‌تردید گرامی‌ترین شما نزد خدا با تقواترین شماست. خداوند دانا و آگاه است.`
      ],
      [
        `হে মানবজাতি! আমরা তোমাদের একজন পুরুষ ও একজন নারী থেকে সৃষ্টি করেছি,`,
        `এবং তোমাদের জাতি ও গোত্রে বিভক্ত করেছি যাতে তোমরা একে অপরকে চিনতে পারো,`,
        `নিশ্চয়ই আল্লাহর কাছে সবচেয়ে মর্যাদাবান সেই ব্যক্তি যে সবচেয়ে বেশি তাকওয়াবান। আল্লাহ সর্বজ্ঞ, সর্বজ্ঞাত।`
      ],
      [
        `Ó humanidade! Nós vos criamos de um homem e uma mulher,`,
        `e vos fizemos povos e tribos para que vos conheçais.`,
        `O mais honrado entre vós perante Allah é o mais piedoso. Allah é Onisciente, Conhecedor.`
      ],
      [
        `人类啊！我们确已从一男一女创造你们，`,
        `并使你们成为民族和部落，以便你们互相认识。`,
        `在真主看来，你们中最尊贵的是最敬畏的。真主确是全知的，全晓的。`
      ],
      [
        `人々よ！われらはあなた方を一人の男と一人の女から創造し、`,
        `民族と部族にしたのは互いに知り合うためである。`,
        `アッラーの御許で最も尊いのは最も敬虔な者である。アッラーは全知全能である。`
      ],
      [
        `사람들이여! 우리는 너희를 한 남자와 한 여자로부터 창조하였고,`,
        `서로 알게 하기 위해 민족과 부족으로 만들었다.`,
        `알্লাহ نزد에서 가장 존귀한 자는 가장 경건한 자이다. 알্লাহ는 전지전능하시다.`
      ],
      [
        `O uomini! Vi abbiamo creati da un maschio e una femmina,`,
        `e vi abbiamo fatto popoli e tribù affinché vi conosciate.`,
        `Il più nobile tra voi presso Allah è il più pio. Allah è Onnisciente, Ben Informato.`
      ],
      [
        `O ludzie! Stworzyliśmy was z mężczyzny i kobiety,`,
        `i uczyniliśmy was narodami i plemionami, abyście się poznawali.`,
        `Najszlachetniejszy z was u Allaha jest najbardziej bogobojny. Allah jest Wszechwiedzący.`
      ],
      [
        `О люди! Ми створили вас із чоловіка і жінки,`,
        `і зробили вас народами і племенами, щоб ви пізнавали одне одного.`,
        `Найбільш почесний перед Аллахом — найбільш богобоязливий. Воістину, Аллах Всезнаючий.`
      ]
    ],
    number: `سورة الحجرات / Al-Hujurat، الآية 13`
  },

  {
    arabic: [
      `وَأَن لَّيْسَ لِلْإِنسَانِ`,
      `إِلَّا مَا سَعَىٰ`,
      ``
    ],
    translations: [
      [
        `And that there is not for man except that [good] for which he strives`,
        ``,
        ``
      ],
      [
        `Et que l’homme n’a que ce pour quoi il a œuvré.`,
        ``,
        ``
      ],
      [
        `Y que el ser humano no obtiene sino aquello por lo que se esfuerza.`,
        ``,
        ``
      ],
      [
        `И что человеку достанется только то, к чему он стремился.`,
        ``,
        ``
      ],
      [
        `Und dass der Mensch nur das hat, wonach er sich bemüht hat.`,
        ``,
        ``
      ],
      [
        `Och att människan bara får det som hon har strävat efter.`,
        ``,
        ``
      ],
      [
        `Agus nach bhfuil ag an duine ach an rud a d’oibrigh sé dó.`,
        ``,
        ``
      ],
      [
        `En dat de mens slechts krijgt waarvoor hij zich heeft ingespannen.`,
        ``,
        ``
      ],
      [
        `اور انسان کے لیے وہی ہے جس کی وہ کوشش کرے۔`,
        ``,
        ``
      ],
      [
        `Dan bahwa manusia hanya memperoleh apa yang telah diusahakannya.`,
        ``,
        ``
      ],
      [
        `Ve insan için ancak kendi çabasının karşılığı vardır.`,
        ``,
        ``
      ],
      [
        `و اینکه انسان جز آنچه تلاش کرده است ندارد.`,
        ``,
        ``
      ],
      [
        `আর মানুষের জন্য কেবল তাই আছে যা সে চেষ্টা করে।`,
        ``,
        ``
      ],
      [
        `E que o ser humano não terá senão aquilo pelo qual se esforça.`,
        ``,
        ``
      ],
      [
        `人只能得到他所努力的结果。`,
        ``,
        ``
      ],
      [
        `人間には自分が努力したものしかない。`,
        ``,
        ``
      ],
      [
        `인간에게는 자신이 노력한 것만이 있을 뿐이다.`,
        ``,
        ``
      ],
      [
        `E che l’uomo avrà solo ciò per cui si è impegnato.`,
        ``,
        ``
      ],
      [
        `I że człowiek ma tylko to, do czego się starał.`,
        ``,
        ``
      ],
      [
        `І що людині належить лише те, до чого вона прагнула.`,
        ``,
        ``
      ]
    ],
    number: `سورة النجم / An-Najm، الآية 39`
  },

  {
    arabic: [
      `وَلَقَدْ يَسَّرْنَا الْقُرآنَ لِلذِّكْرِ`,
      `فَهَلْ مِن مُّدَّكِرٍ`,
      ``
    ],
    translations: [
      [
        `And We have certainly made the Qur'an easy for remembrance,`,
        `so is there any who will remember?`,
        ``
      ],
      [
        `Et Nous avons certes rendu le Coran facile pour la méditation,`,
        `y a-t-il donc quelqu’un pour se rappeler ?`,
        ``
      ],
      [
        `Y ciertamente hemos hecho el Corán fácil para la reflexión,`,
        `¿hay entonces alguien que recuerde?`,
        ``
      ],
      [
        `И Мы сделали Коран легким для поминания,`,
        `есть ли же тот, кто вспомнит?`,
        ``
      ],
      [
        `Und Wir haben den Koran gewiss leicht zum Gedenken gemacht,`,
        `gibt es denn jemanden, der sich erinnert?`,
        ``
      ],
      [
        `Och Vi har sannerligen gjort Koranen lätt för påminnelse,`,
        `finns det då någon som tar lärdom?`,
        ``
      ],
      [
        `Agus táimid tar éis an Córán a dhéanamh éasca le cuimhneamh air,`,
        `an bhfuil aon duine ann a chuimhníonn?`,
        ``
      ],
      [
        `En Wij hebben de Koran zeker gemakkelijk gemaakt ter herinnering,`,
        `is er dan iemand die zich herinnert?`,
        ``
      ],
      [
        `اور بے شک ہم نے قرآن کو نصیحت کے لیے آسان بنا دیا ہے،`,
        `تو کیا کوئی ہے جو نصیحت حاصل کرے؟`,
        ``
      ],
      [
        `Dan sungguh telah Kami mudahkan Al-Qur'an untuk pelajaran,`,
        `maka adakah yang mau mengambil pelajaran?`,
        ``
      ],
      [
        `Andolsun Biz Kur'an'ı öğüt için kolaylaştırdık,`,
        `yok mu ders alan?`,
        ``
      ],
      [
        `و به‌راستی ما قرآن را برای پند آسان کردیم،`,
        `پس آیا پندگیرنده‌ای هست؟`,
        ``
      ],
      [
        `আর অবশ্যই আমরা কুরআনকে উপদেশের জন্য সহজ করে দিয়েছি,`,
        `তাহলে কি কেউ উপদেশ গ্রহণ করবে?`,
        ``
      ],
      [
        `E certamente facilitamos o Alcorão para a lembrança,`,
        `então há alguém que se lembre?`,
        ``
      ],
      [
        `我们确已使《古兰经》易于记忆，`,
        `那么有谁会记住呢？`,
        ``
      ],
      [
        `われらはクルアーンを思い出しやすくした、`,
        `それでも思い出す者はいるのか？`,
        ``
      ],
      [
        `우리는 꾸란을 기억하기 쉽게 만들었으니,`,
        `그러면 기억하는 자가 있는가?`,
        ``
      ],
      [
        `E abbiamo certamente reso il Corano facile per il ricordo,`,
        `c’è dunque qualcuno che ricordi?`,
        ``
      ],
      [
        `I z pewnością uczyniliśmy Koran łatwym do zapamiętania,`,
        `czy jest więc ktoś, kto by sobie przypomniał?`,
        ``
      ],
      [
        `І Ми справді зробили Коран легким для нагадування,`,
        `чи є той, хто згадає?`,
        ``
      ]
    ],
    number: `سورة القمر / Al-Qamar، الآيات 17،22،28،32`
  },

  {
    arabic: [
      `اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ`,
      ``,
      ``
    ],
    translations: [
      [
        `The Hour has drawn near, and the moon has split.`,
        ``,
        ``
      ],
      [
        `L’Heure s’est rapprochée et la lune s’est fendue.`,
        ``,
        ``
      ],
      [
        `La Hora se ha acercado y la luna se ha partido.`,
        ``,
        ``
      ],
      [
        `Час приблизился, и луна раскололась.`,
        ``,
        ``
      ],
      [
        `Die Stunde ist nahegekommen, und der Mond hat sich gespalten.`,
        ``,
        ``
      ],
      [
        `Timmen har närmat sig, och månen har delats.`,
        ``,
        ``
      ],
      [
        `Tá an Uair tagtha gar, agus tá an ghealach scoilte.`,
        ``,
        ``
      ],
      [
        `Het Uur is nabij gekomen, en de maan is gespleten.`,
        ``,
        ``
      ],
      [
        `قیامت کی گھڑی قریب آ گئی اور چاند پھٹ گیا۔`,
        ``,
        ``
      ],
      [
        `Hari Kiamat telah dekat dan bulan telah terbelah.`,
        ``,
        ``
      ],
      [
        `Kıyamet yaklaştı ve ay yarıldı.`,
        ``,
        ``
      ],
      [
        `قیامت نزدیک شد و ماه شکافته شد.`,
        ``,
        ``
      ],
      [
        `কিয়ামত নিকটবর্তী হয়েছে এবং চাঁদ দ্বিখণ্ডিত হয়েছে।`,
        ``,
        ``
      ],
      [
        `A Hora se aproximou e a lua se partiu.`,
        ``,
        ``
      ],
      [
        `时刻已临近，月亮已分裂。`,
        ``,
        ``
      ],
      [
        `終末の時は近づき、月は割れた。`,
        ``,
        ``
      ],
      [
        `시간이 가까워졌고 달이 갈라졌다.`,
        ``,
        ``
      ],
      [
        `L’Ora si è avvicinata e la luna si è spaccata.`,
        ``,
        ``
      ],
      [
        `Godzina się zbliżyła i księżyc się rozszczepił.`,
        ``,
        ``
      ],
      [
        `Час наблизився, і місяць розколовся.`,
        ``,
        ``
      ]
    ],
    number: `سورة القمر / Al-Qamar، الآية 1`
  },

  {
    arabic: [
      `هَلْ جَزَاءُ الْإِحْسَانِ`,
      `إِلَّا الْإِحْسَانُ`,
      ``
    ],
    translations: [
      [
        `Is the reward for good [anything] but good?`,
        ``,
        ``
      ],
      [
        `La récompense de la bienfaisance n’est-elle pas la bienfaisance ?`,
        ``,
        ``
      ],
      [
        `¿Acaso la recompensa del bien no es sino el bien?`,
        ``,
        ``
      ],
      [
        `Разве воздаяние за добро не есть лишь добро?`,
        ``,
        ``
      ],
      [
        `Ist der Lohn für das Gute etwas anderes als das Gute?`,
        ``,
        ``
      ],
      [
        `Är belöningen för godhet något annat än godhet?`,
        ``,
        ``
      ],
      [
        `An bhfuil luach saothair na maitheasa ach maitheas féin?`,
        ``,
        ``
      ],
      [
        `Is de beloning voor goedheid anders dan goedheid?`,
        ``,
        ``
      ],
      [
        `کیا نیکی کا بدلہ نیکی کے سوا کچھ اور ہے؟`,
        ``,
        ``
      ],
      [
        `Adakah balasan kebaikan selain kebaikan?`,
        ``,
        ``
      ],
      [
        `İyiliğin karşılığı iyilikten başka bir şey midir?`,
        ``,
        ``
      ],
      [
        `آیا پاداش نیکی جز نیکی است؟`,
        ``,
        ``
      ],
      [
        `ভালোর প্রতিদান কি ভালো ছাড়া আর কিছু?`,
        ``,
        ``
      ],
      [
        `A recompensa da bondade não é senão a bondade?`,
        ``,
        ``
      ],
      [
        `行善的报酬难道不就是善吗？`,
        ``,
        ``
      ],
      [
        `善行の報いは善以外にあろうか。`,
        ``,
        ``
      ],
      [
        `선행의 보상은 선함 외에 무엇이 있겠는가?`,
        ``,
        ``
      ],
      [
        `La ricompensa del bene non è forse il bene?`,
        ``,
        ``
      ],
      [
        `Czy nagrodą za dobro nie jest tylko dobro?`,
        ``,
        ``
      ],
      [
        `Чи є винагорода за добро чимось іншим, ніж добро?`,
        ``,
        ``
      ]
    ],
    number: `سورة الرحمن / Ar-Rahman، الآية 60`
  },

  {
    arabic: [
      `اعْلَمُوا أَنَّمَا الْحَيَاةُ الدُّنْيَا لَعِبٌ وَلَهْوٌ وَزِينَةٌ وَتَفَاخُرٌ بَيْنَكُمْ وَتَكَاثُرٌ فِي الْأَمْوَالِ وَالْأَوْلَادِ ۖ كَمَثَلِ غَيْثٍ أَعْجَبَ الْكُفَّارَ نَبَاتُهُ ثُمَّ يَهِيجُ فَتَرَاهُ مُصْفَرًّا ثُمَّ يَكُونُ حُطَامًا ۖ وَفِي الْآخِرَةِ عَذَابٌ شَدِيدٌ وَمَغْفِرَةٌ مِّنَ اللَّهِ وَرِضْوَانٌ ۚ وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ`,
      ``,
      ``
    ],
    translations: [
      [
        `Know that the life of this world is but play, amusement, adornment, boasting among you, and competition in wealth and children. Like the example of rain whose [resulting] plant growth pleases the tillers; then it dries and you see it turned yellow; then it becomes debris. And in the Hereafter is severe punishment and forgiveness from Allah and approval. And what is the worldly life except the enjoyment of delusion.`,
        ``,
        ``
      ],
      [
        `Sachez que la vie d’ici-bas n’est que jeu, divertissement, parure, vantardise entre vous et rivalité dans les biens et les enfants. Elle est semblable à une pluie dont la végétation plaît aux cultivateurs, puis elle se dessèche et tu la vois jaunie, puis elle devient brisée. Et dans l’au-delà il y a un dur châtiment, ainsi qu’un pardon d’Allah et Son agrément. Et la vie d’ici-bas n’est que jouissance trompeuse.`,
        ``,
        ``
      ],
      [
        `Sabed que la vida de este mundo no es sino juego, diversión, adorno, orgullo entre vosotros y competencia en riqueza e hijos. Es como la lluvia cuyo crecimiento vegetal complace a los cultivadores, luego se seca y la ves amarilla, luego se convierte en restos. Y en la otra vida hay severo castigo, perdón de Allah y Su complacencia. Y la vida de este mundo no es sino disfrute ilusorio.`,
        ``,
        ``
      ],
      [
        `Знайте, что жизнь этого мира — лишь игра, забава, украшение, похвальба между вами и соперничество в богатстве и детях. Она подобна дождю, растительность которого радует земледельцев, затем она высыхает и ты видишь её пожелтевшей, затем она становится прахом. А в Последней жизни — суровое наказание, прощение Аллаха и Его довольство. И жизнь этого мира — лишь обманчивое пользование.`,
        ``,
        ``
      ],
      [
        `Wisset, dass das diesseitige Leben nur Spiel, Vergnügen, Schmuck, gegenseitiges Prahlen und Wettstreit in Besitz und Kindern ist. Es ist wie Regen, dessen Pflanzenwuchs die Bauern erfreut, dann verdorrt er und du siehst ihn gelb werden, dann wird er zu Bruchstücken. Und im Jenseits gibt es strenge Strafe, Vergebung von Allah und Sein Wohlgefallen. Und das diesseitige Leben ist nur trügerischer Genuss.`,
        ``,
        ``
      ],
      [
        `Vet att det jordiska livet bara är lek, nöje, utsmyckning, skryt mellan er och tävlan i rikedom och barn. Det liknar regn vars växtlighet gläder odlarna, sedan torkar det och du ser det gulna, sedan blir det smulor. Och i det hinsides finns sträng bestraffning, förlåtelse från Allah och Hans välbehag. Och det jordiska livet är inget annat än bedräglig njutning.`,
        ``,
        ``
      ],
      [
        `Bíodh a fhios agaibh nach bhfuil sa saol seo ach súgradh, siamsaíocht, maisiú, bród agus iomaíocht i maoin agus i leanaí. Tá sé cosúil le báisteach a chuireann áthas ar na feirmeoirí, ansin triomaíonn sí, feiceann tú í buí, agus ansin bristear ina smionagar í. Agus sa saol eile tá pionós dian, maithiúnas ó Allah agus a shásamh. Agus níl sa saol seo ach mealladh.`,
        ``,
        ``
      ],
      [
        `Weet dat het wereldse leven slechts spel, vermaak, versiering, onderlinge opschepperij en wedijver in bezittingen en kinderen is. Het is als regen waarvan de plantengroei de landbouwers behaagt, daarna droogt het op en zie je het geel worden, vervolgens wordt het tot resten. En in het Hiernamaals is er zware bestraffing, vergeving van Allah en Zijn welbehagen. En het wereldse leven is slechts misleidend genot.`,
        ``,
        ``
      ],
      [
        `جان لو کہ دنیا کی زندگی صرف کھیل، تماشہ، زینت، آپس میں فخر اور مال و اولاد میں مقابلہ ہے۔ یہ اس بارش کی طرح ہے جس کی پیداوار کسانوں کو خوش کرتی ہے، پھر وہ سوکھ جاتی ہے اور تم اسے زرد دیکھتے ہو، پھر وہ چورا چورا ہو جاتی ہے۔ اور آخرت میں سخت عذاب بھی ہے، اللہ کی مغفرت اور رضا بھی ہے۔ اور دنیا کی زندگی دھوکے کے سوا کچھ نہیں۔`,
        ``,
        ``
      ],
      [
        `Ketahuilah bahwa kehidupan dunia hanyalah permainan, senda gurau, perhiasan, saling berbangga dan berlomba dalam harta dan anak-anak. Ia seperti hujan yang tanamannya menyenangkan para petani, lalu menjadi kering dan kamu melihatnya menguning, kemudian menjadi hancur. Dan di akhirat ada azab yang keras, ampunan Allah dan keridaan-Nya. Dan kehidupan dunia hanyalah kesenangan yang menipu.`,
        ``,
        ``
      ],
      [
        `Bilin ki dünya hayatı ancak oyun, eğlence, süs, aranızda övünme ve mal ile evlatta çoğalma yarışıdır. Bu, bitkisi çiftçileri sevindiren bir yağmur gibidir; sonra kurur, sarardığını görürsün, sonra çerçöp olur. Ahirette ise şiddetli azap, Allah’ın bağışlaması ve rızası vardır. Dünya hayatı ise aldatıcı bir geçimden ibarettir.`,
        ``,
        ``
      ],
      [
        `بدانید که زندگی دنیا تنها بازی، سرگرمی، زینت، فخر فروشی میان شما و رقابت در اموال و فرزندان است. مانند بارانی است که گیاهش کشاورزان را خوشحال می‌کند، سپس خشک می‌شود و زرد می‌گردد و سپس خرد می‌شود. و در آخرت عذاب شدید، آمرزش و رضایت خداوند است. و زندگی دنیا چیزی جز متاع فریبنده نیست.`,
        ``,
        ``
      ],
      [
        `জেনে রাখো, দুনিয়ার জীবন শুধু খেলাধুলা, বিনোদন, সাজসজ্জা, পারস্পরিক গর্ব এবং সম্পদ ও সন্তানের প্রতিযোগিতা। এটি বৃষ্টির মতো, যার উদ্ভিদ কৃষকদের আনন্দ দেয়, তারপর তা শুকিয়ে যায়, হলুদ হয়ে যায়, পরে ভেঙে যায়। আর আখিরাতে রয়েছে কঠিন শাস্তি, আল্লাহর ক্ষমা ও সন্তুষ্টি। আর দুনিয়ার জীবন শুধু প্রতারণাময় ভোগ।`,
        ``,
        ``
      ],
      [
        `Sabei que a vida deste mundo não é senão jogo, diversão, adorno, ostentação entre vós e competição em bens e filhos. É como a chuva cuja vegetação agrada aos cultivadores, depois seca e a vês amarelada, depois torna-se palha. E na Outra Vida há severo castigo, perdão de Allah e Sua complacência. E a vida deste mundo não é senão prazer ilusório.`,
        ``,
        ``
      ],
      [
        `你们要知道，今世的生活不过是游戏、娱乐、装饰、互相夸耀以及在财产和子女上的竞争。它如同雨水使庄稼生长令农夫喜悦，然后枯萎变黄，最后变成残渣。后世有严厉的惩罚、真主的饶恕与喜悦。今世的生活不过是虚幻的享受。`,
        ``,
        ``
      ],
      [
        `知れ、この現世の生活は遊び、娯楽、装飾、互いの誇り合い、財産や子供の競争に過ぎない。それは雨のようで、その植物は農夫を喜ばせるが、その後枯れて黄色くなり、やがて砕ける。来世には厳しい懲罰、アッラーの赦しと御満悦がある。この世の生活はただの欺きの享楽にすぎない。`,
        ``,
        ``
      ],
      [
        `알라께서 말씀하시기를, 이 세상의 삶은 단지 놀이와 오락, 장식, 서로의 자랑과 재산과 자녀의 경쟁일 뿐이다. 그것은 비처럼 농부를 기쁘게 하지만 곧 마르고 누렇게 되어 부서진다. 내세에는 엄한 벌과 알라의 용서와 만족이 있다. 이 세상의 삶은 속이는 향락일 뿐이다.`,
        ``,
        ``
      ],
      [
        `Sappiate che la vita di questo mondo non è altro che gioco, divertimento, ornamento, vanto tra voi e competizione in ricchezze e figli. È come la pioggia che fa gioire i coltivatori, poi si secca e diventa gialla, poi diventa frammenti. Nell’Aldilà c’è severo castigo, perdono di Allah e Suo compiacimento. E la vita mondana non è altro che inganno.`,
        ``,
        ``
      ],
      [
        `Wiedzcie, że życie tego świata jest tylko grą, zabawą, ozdobą, wzajemnym przechwalaniem się i rywalizacją w majątku i dzieciach. Jest jak deszcz, którego roślinność cieszy rolników, potem wysycha i żółknie, a następnie staje się prochem. W życiu ostatecznym jest surowa kara, przebaczenie Allaha i Jego zadowolenie. A życie tego świata jest tylko złudnym korzystaniem.`,
        ``,
        ``
      ],
      [
        `Знайте, що життя цього світу — це лише гра, розвага, прикраса, похвальба між вами та змагання у майні й дітях. Воно подібне до дощу, рослинність якого радує землеробів, потім висихає, жовтіє і стає прахом. А в наступному житті — сувора кара, прощення Аллаха і Його задоволення. І життя цього світу — лише оманлива насолода.`,
        ``,
        ``
      ]
    ],
    number: `سورة الحديد / Al-Hadid، الآية 20`
  },

  {
    arabic: [
      `وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا`,
      `وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ`,
      ``
    ],
    translations: [
      [
        `And whoever fears Allah – He will make for him a way out`,
        `And will provide for him from where he does not expect`,
        ``
      ],
      [
        `Et quiconque craint Allah, Il lui donnera une issue`,
        `Et lui accordera une subsistance d’où il ne s’attend pas`,
        ``
      ],
      [
        `Y a quien teme a Allah, Él le dará una salida`,
        `y le proveerá de donde no espera`,
        ``
      ],
      [
        `А тому, кто боится Аллаха, Он сделает выход`,
        `и наделит его уделом оттуда, откуда он не ожидает`,
        ``
      ],
      [
        `Und wer Allah fürchtet, dem schafft Er einen Ausweg`,
        `und versorgt ihn von dort, wo er es nicht erwartet`,
        ``
      ],
      [
        `Och den som fruktar Allah, för honom gör Han en utväg`,
        `och försörjer honom från håll han inte väntar sig`,
        ``
      ],
      [
        `An té a bhfuil eagla Dé air, déanfaidh Sé bealach amach dó`,
        `agus cuirfidh Sé soláthar ar fáil dó as áit nach n-ionann sé`,
        ``
      ],
      [
        `En wie Allah vreest, voor hem maakt Hij een uitweg`,
        `en voorziet hem van waar hij het niet verwacht`,
        ``
      ],
      [
        `اور جو اللہ سے ڈرتا ہے، اللہ اس کے لیے نکلنے کا راستہ بنا دیتا ہے`,
        `اور اسے وہاں سے رزق دیتا ہے جہاں سے وہ سوچ بھی نہیں سکتا`,
        ``
      ],
      [
        `Dan barang siapa bertakwa kepada Allah, Dia akan menjadikan jalan keluar baginya`,
        `dan memberinya rezeki dari arah yang tidak disangka-sangka`,
        ``
      ],
      [
        `Kim Allah’tan korkarsa, ona bir çıkış yolu verir`,
        `ve onu beklemediği yerden rızıklandırır`,
        ``
      ],
      [
        `و هر کس از خدا پروا کند، برای او راه نجات قرار می‌دهد`,
        `و از جایی که گمان نمی‌برد به او روزی می‌دهد`,
        ``
      ],
      [
        `আর যে আল্লাহকে ভয় করে, তিনি তার জন্য পথ বের করে দেন`,
        `এবং তাকে এমন জায়গা থেকে রিজিক দেন যা সে কল্পনাও করে না`,
        ``
      ],
      [
        `E quem teme Allah, Ele lhe fará uma saída`,
        `e o proverá de onde não espera`,
        ``
      ],
      [
        `谁敬畏真主，他必为其开辟出路`,
        `并从他意想不到的地方供给他`,
        ``
      ],
      [
        `アッラーを畏れる者には、かれは出口を与え`,
        `思いもよらない所から糧を授ける`,
        ``
      ],
      [
        `하나님을 두려워하는 자에게 그분은 출구를 마련하시고`,
        `그가 예상하지 못한 곳에서 생계를 주신다`,
        ``
      ],
      [
        `E chi teme Allah, Egli gli darà una via d’uscita`,
        `e lo provvederà da dove non si aspetta`,
        ``
      ],
      [
        `A kto boi się Allaha, temu On da wyjście`,
        `i zaopatrzy go skąd się nie spodziewa`,
        ``
      ],
      [
        `І хто боїться Аллаха, тому Він дасть вихід`,
        `і забезпечить його звідти, звідки він не очікує`,
        ``
      ]
    ],
    number: `سورة الطلاق / At-Talaq، الآيتان 2-3`
  },

  {
    arabic: [
      `تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ`,
      `وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ`,
      `الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا`
    ],
    translations: [
      [
        `Blessed is He in whose hand is dominion,`,
        `and He is over all things competent,`,
        `He who created death and life to test you as to which of you is best in deed.`
      ],
      [
        `Béni soit Celui dans la main de qui est la royauté,`,
        `et Il est capable de toute chose,`,
        `Celui qui a créé la mort et la vie afin de vous éprouver lequel de vous agit le mieux.`
      ],
      [
        `Bendito sea Aquel en cuyas manos está el dominio,`,
        `y Él es sobre todas las cosas poderoso,`,
        `Quien creó la muerte y la vida para probaros cuál de vosotros es mejor en obras.`
      ],
      [
        `Благословен Тот, в чьей руке власть,`,
        `и Он над всякой вещью Всемогущ,`,
        `Который создал смерть и жизнь, чтобы испытать вас, кто из вас лучше по делам.`
      ],
      [
        `Gepriesen sei Der, in dessen Hand die Herrschaft ist,`,
        `und Er ist über alles mächtig,`,
        `Der den Tod und das Leben erschaffen hat, um euch zu prüfen, wer von euch besser handelt.`
      ],
      [
        `Välsignad är Han i vars hand är herraväldet,`,
        `och Han har makt över allting,`,
        `Han som har skapat döden och livet för att pröva er vem av er som gör bäst gärningar.`
      ],
      [
        `Beannaithe é Sé a bhfuil an ríogacht ina láimh,`,
        `agus tá Sé cumasach ar gach rud,`,
        `a chruthaigh bás agus beatha chun sibh a thástáil cé is fearr gníomh a dhéanann.`
      ],
      [
        `Gezegend is Hij in Wiens hand het koninkrijk is,`,
        `en Hij is over alle dingen almachtig,`,
        `Die de dood en het leven heeft geschapen om jullie te beproeven wie van jullie het beste handelt.`
      ],
      [
        `بڑی برکت والا ہے وہ جس کے ہاتھ میں بادشاہی ہے،`,
        `اور وہ ہر چیز پر قادر ہے،`,
        `جس نے موت اور زندگی کو پیدا کیا تاکہ تمہیں آزمائے کہ تم میں سے کون اچھے عمل کرتا ہے۔`
      ],
      [
        `Maha Suci Allah yang di tangan-Nya segala kerajaan,`,
        `dan Dia Mahakuasa atas segala sesuatu,`,
        `Yang menciptakan الموت dan الحياة untuk menguji kalian siapa yang terbaik amalnya.`
      ],
      [
        `Mülk elinde olan Allah ne yücedir,`,
        `ve O her şeye gücü yetendir,`,
        `Sizi hanginizin daha güzel amel yapacağını denemek için ölümü ve hayatı yaratan.`
      ],
      [
        `بزرگ است آنکه فرمانروایی در دست اوست،`,
        `و او بر هر چیز تواناست،`,
        `کسی که مرگ و زندگی را آفرید تا شما را بیازماید کدام‌یک نیکوکارتر است.`
      ],
      [
        `ধন্য তিনি, যাঁর হাতে সমস্ত রাজত্ব,`,
        `এবং তিনি সবকিছুর উপর ক্ষমতাবান,`,
        `যিনি মৃত্যু ও জীবন সৃষ্টি করেছেন তোমাদের পরীক্ষা করার জন্য, কে সর্বোত্তম কাজ করে।`
      ],
      [
        `Bendito seja Aquele em cuja mão está o domínio,`,
        `e Ele é poderoso sobre todas as coisas,`,
        `Aquele que criou a morte e a vida para testar quem de vós é melhor em obras.`
      ],
      [
        `赞美归于那掌握王权者，`,
        `他对万物全能，`,
        `他创造了死亡与生命，以考验你们谁的行为更好。`
      ],
      [
        `主権はその御手にあるお方に祝福あれ、`,
        `そして彼はすべてのことに全能である、`,
        `死と生を創られたのは、あなた方のうち誰が最善の行いをするかを試すためである。`
      ],
      [
        `주권이 그분의 손에 있는 분께 축복이 있으라,`,
        `그분은 모든 것에 능력 있으시며,`,
        `죽음과 생명을 창조하신 것은 너희 중 누가 더 선한 행위를 하는지 시험하기 위함이다.`
      ],
      [
        `Benedetto è Colui nelle cui mani è il regno,`,
        `ed Egli è onnipotente su ogni cosa,`,
        `Colui che ha creato la morte e la vita per mettere alla prova chi di voi è migliore nelle opere.`
      ],
      [
        `Błogosławiony jest Ten, w którego ręku jest królestwo,`,
        `i On jest nad każdą rzeczą wszechmocny,`,
        `który stworzył śmierć i życie, aby was doświadczyć, kto z was jest lepszy w uczynkach.`
      ],
      [
        `Благословенний Той, у чиїй руці влада,`,
        `і Він над усім всемогутній,`,
        `який створив смерть і життя, щоб випробувати вас, хто з вас кращий у ділах.`
      ]
    ],
    number: `سورة الملك / Al-Mulk، الآيتان 1-2`
  },

  {
    arabic: [
      `وَرَتِّلِ الْقُرآنَ تَرْتِيلًا`,
      ``,
      ``
    ],
    translations: [
      [
        `And recite the Qur'an with measured recitation.`,
        ``,
        ``
      ],
      [
        `Et récite le Coran avec une récitation mesurée.`,
        ``,
        ``
      ],
      [
        `Y recita el Corán con una recitación pausada.`,
        ``,
        ``
      ],
      [
        `И читай Коран размеренным чтением.`,
        ``,
        ``
      ],
      [
        `Und trage den Koran in gemessener Rezitation vor.`,
        ``,
        ``
      ],
      [
        `Och recitera Koranen med en lugn och tydlig recitation.`,
        ``,
        ``
      ],
      [
        `Agus aithris an Córán le haithris mhall agus shoiléir.`,
        ``,
        ``
      ],
      [
        `En draag de Koran voor met een rustige en duidelijke voordracht.`,
        ``,
        ``
      ],
      [
        `اور قرآن کو ٹھہر ٹھہر کر پڑھو`,
        ``,
        ``
      ],
      [
        `Dan bacalah Al-Qur'an dengan tartil (perlahan-lahan).`,
        ``,
        ``
      ],
      [
        `Kur'an'ı tane tane ve ölçülü oku.`,
        ``,
        ``
      ],
      [
        `و قرآن را با تأنی و شمرده بخوان`,
        ``,
        ``
      ],
      [
        `আর কুরআন তিলাওয়াত কর ধীরে ধীরে স্পষ্টভাবে`,
        ``,
        ``
      ],
      [
        `E recita o Alcorão com uma recitação pausada.`,
        ``,
        ``
      ],
      [
        `你应当以从容的方式诵读《古兰经》。`,
        ``,
        ``
      ],
      [
        `クルアーンをゆっくり整然と朗誦せよ。`,
        ``,
        ``
      ],
      [
        `꾸란을 천천히 또렷하게 낭송하라.`,
        ``,
        ``
      ],
      [
        `E recita il Corano con recitazione lenta e misurata.`,
        ``,
        ``
      ],
      [
        `I recytuj Koran powoli i wyraźnie.`,
        ``,
        ``
      ],
      [
        `І читай Коран розміреним читанням.`,
        ``,
        ``
      ]
    ],
    number: `سورة المزمل / Al-Muzzammil، الآية 4`
  },

  {
    arabic: [
      `كُلُّ نَفْسٍ بِمَا كَسَبَتْ رَهِينَةٌ`,
      ``,
      ``
    ],
    translations: [
      [
        `Every soul is held in pledge for what it has earned.`,
        ``,
        ``
      ],
      [
        `Toute âme est retenue en gage pour ce qu’elle a acquis.`,
        ``,
        ``
      ],
      [
        `Toda alma está empeñada por lo que ha adquirido.`,
        ``,
        ``
      ],
      [
        `Каждая душа заложница того, что она приобрела.`,
        ``,
        ``
      ],
      [
        `Jede Seele ist für das, was sie erworben hat, verantwortlich.`,
        ``,
        ``
      ],
      [
        `Varje själ hålls ansvarig för det den har förvärvat.`,
        ``,
        ``
      ],
      [
        `Tá gach anam faoi bhanna as an méid a thuill sé.`,
        ``,
        ``
      ],
      [
        `Elke ziel is vastgelegd voor wat zij heeft verworven.`,
        ``,
        ``
      ],
      [
        `ہر نفس اپنے کیے ہوئے عمل کے بدلے گروی ہے۔`,
        ``,
        ``
      ],
      [
        `Setiap jiwa terikat dengan apa yang telah diperbuatnya.`,
        ``,
        ``
      ],
      [
        `Her نفس, kazandığı şeyler karşısında rehindir.`,
        ``,
        ``
      ],
      [
        `هر نفسی در گرو آن چیزی است که انجام داده است.`,
        ``,
        ``
      ],
      [
        `প্রত্যেক আত্মা তার অর্জিত কর্মের জন্য দায়বদ্ধ।`,
        ``,
        ``
      ],
      [
        `Toda alma está presa pelo que adquiriu.`,
        ``,
        ``
      ],
      [
        `每个 نفس都为自己所做的事情而被抵押。`,
        ``,
        ``
      ],
      [
        `すべての魂は自らの行いのために拘束されている。`,
        ``,
        ``
      ],
      [
        `모든 영혼은 자신이 행한 것에 대해 담보로 잡혀 있다.`,
        ``,
        ``
      ],
      [
        `Ogni anima è vincolata a ciò che ha guadagnato.`,
        ``,
        ``
      ],
      [
        `Każda dusza jest związana tym, co zarobiła.`,
        ``,
        ``
      ],
      [
        `Кожна душа є заручником того, що вона здобула.`,
        ``,
        ``
      ]
    ],
    number: `سورة المدثر / Al-Muddaththir، الآية 38`
  },

  {
    arabic: [
      `فَإِنَّ مَعَ الْعُسْرِ يُسْرًا`,
      `إِنَّ مَعَ الْعُسْرِ يُسْرًا`,
      ``
    ],
    translations: [
      [
        `For indeed, with hardship comes ease`,
        `Indeed, with hardship comes ease`,
        ``
      ],
      [
        `Car, avec la difficulté vient certes la facilité`,
        `En vérité, avec la difficulté vient la facilité`,
        ``
      ],
      [
        `Pues, ciertamente, con la dificultad viene la facilidad`,
        `Ciertamente, con la dificultad viene la facilidad`,
        ``
      ],
      [
        `Поистине, вместе с трудностью приходит облегчение`,
        `Поистине, вместе с трудностью приходит облегчение`,
        ``
      ],
      [
        `Denn wahrlich, mit der Schwierigkeit kommt die Erleichterung`,
        `Wahrlich, mit der Schwierigkeit kommt die Erleichterung`,
        ``
      ],
      [
        `För sannerligen, med svårigheten kommer lättnaden`,
        `Sannerligen, med svårigheten kommer lättnaden`,
        ``
      ],
      [
        `Mar tá faoiseamh in éineacht leis an gcruatán`,
        `Go deimhin, tá faoiseamh in éineacht leis an gcruatán`,
        ``
      ],
      [
        `Want met de moeilijkheid komt zeker verlichting`,
        `Voorwaar, met de moeilijkheid komt verlichting`,
        ``
      ],
      [
        `بے شک تنگی کے ساتھ آسانی ہے`,
        `یقیناً تنگی کے ساتھ آسانی ہے`,
        ``
      ],
      [
        `Sesungguhnya bersama kesulitan ada kemudahan`,
        `Sesungguhnya bersama kesulitan ada kemudahan`,
        ``
      ],
      [
        `Şüphesiz zorlukla beraber kolaylık vardır`,
        `Gerçekten zorlukla beraber kolaylık vardır`,
        ``
      ],
      [
        `بی‌گمان با سختی آسانی است`,
        `همانا با سختی آسانی است`,
        ``
      ],
      [
        `নিশ্চয়ই কষ্টের সাথে স্বস্তি রয়েছে`,
        `নিশ্চয়ই কষ্টের সাথে স্বস্তি রয়েছে`,
        ``
      ],
      [
        `Pois, com a dificuldade há certamente facilidade`,
        `De fato, com a dificuldade há facilidade`,
        ``
      ],
      [
        `确实，困难之中必有 آسان`,
        `确实，困难之中必有 آسان`,
        ``
      ],
      [
        `確かに困難と共に安らぎがある`,
        `本当に困難と共に安らぎがある`,
        ``
      ],
      [
        `확실히 어려움과 함께 편안함이 있다`,
        `진실로 어려움과 함께 편안함이 있다`,
        ``
      ],
      [
        `In verità, con la difficoltà c’è la facilità`,
        `Certamente, con la difficoltà c’è la facilità`,
        ``
      ],
      [
        `Zaprawdę, wraz z trudnością przychodzi ulga`,
        `Rzeczywiście, wraz z trudnością przychodzi ulga`,
        ``
      ],
      [
        `Воістину, разом із труднощами приходить полегшення`,
        `Справді, разом із труднощами приходить полегшення`,
        ``
      ]
    ],
    number: `سورة الشرح / Ash-Sharh، الآيات 5-6`
  },

  {
    arabic: [
      `اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ`,
      ``,
      ``
    ],
    translations: [
      [
        `Recite in the name of your Lord who created.`,
        ``,
        ``
      ],
      [
        `Lis au nom de ton Seigneur qui a créé.`,
        ``,
        ``
      ],
      [
        `Recita en el nombre de tu Señor que creó.`,
        ``,
        ``
      ],
      [
        `Читай во имя Господа твоего, Который сотворил.`,
        ``,
        ``
      ],
      [
        `Lies im Namen deines Herrn, der erschaffen hat.`,
        ``,
        ``
      ],
      [
        `Läs i din Herres namn, som skapade.`,
        ``,
        ``
      ],
      [
        `Léigh in ainm do Thiarna a chruthaigh.`,
        ``,
        ``
      ],
      [
        `Lees in de naam van jouw Heer die heeft geschapen.`,
        ``,
        ``
      ],
      [
        `پڑھو اپنے رب کے نام سے جس نے پیدا کیا۔`,
        ``,
        ``
      ],
      [
        `Bacalah dengan nama Tuhanmu yang menciptakan.`,
        ``,
        ``
      ],
      [
        `Yaratan Rabbinin adıyla oku.`,
        ``,
        ``
      ],
      [
        `بخوان به نام پروردگارت که آفرید.`,
        ``,
        ``
      ],
      [
        `পড় তোমার প্রতিপালকের নামে যিনি সৃষ্টি করেছেন।`,
        ``,
        ``
      ],
      [
        `Recita em nome do teu Senhor que criou.`,
        ``,
        ``
      ],
      [
        `你当奉你的主的名诵读，他曾创造万物。`,
        ``,
        ``
      ],
      [
        `創造されたあなたの主の御名において読め。`,
        ``,
        ``
      ],
      [
        `창조하신 너의 주님의 이름으로 읽어라.`,
        ``,
        ``
      ],
      [
        `Recita nel nome del tuo Signore che ha creato.`,
        ``,
        ``
      ],
      [
        `Czytaj w imię twego Pana, który stworzył.`,
        ``,
        ``
      ],
      [
        `Читай в ім’я Господа твого, Який створив.`,
        ``,
        ``
      ]
    ],
    number: `سورة العلق / Al-'Alaq، الآية 1`
  },

  {
    arabic: [
      `فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ`,
      `وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ`,
      ``
    ],
    translations: [
      [
        `So whoever does an atom's weight of good will see it,`,
        `and whoever does an atom's weight of evil will see it.`,
        ``
      ],
      [
        `Quiconque fait le poids d’un atome de bien le verra,`,
        `et quiconque fait le poids d’un atome de mal le verra.`,
        ``
      ],
      [
        `Quien haga el peso de un átomo de bien lo verá,`,
        `y quien haga el peso de un átomo de mal lo verá.`,
        ``
      ],
      [
        `Тот, кто совершит добро весом с пылинку, увидит его,`,
        `и тот, кто совершит зло весом с пылинку, увидит его.`,
        ``
      ],
      [
        `Wer ein Atomgewicht an Gutem tut, wird es sehen,`,
        `und wer ein Atomgewicht an Bösem tut, wird es sehen.`,
        ``
      ],
      [
        `Den som gör ett atomvikt av gott kommer att se det,`,
        `och den som gör ett atomvikt av ont kommer att se det.`,
        ``
      ],
      [
        `An té a dhéanann meáchan adamhach de mhaith, feicfidh sé é,`,
        `agus an té a dhéanann meáchan adamhach de olc, feicfidh sé é.`,
        ``
      ],
      [
        `Wie een atoomgewicht aan goed doet, zal het zien,`,
        `en wie een atoomgewicht aan kwaad doet, zal het zien.`,
        ``
      ],
      [
        `پس جو ذرہ برابر نیکی کرے گا وہ اسے دیکھ لے گا،`,
        `اور جو ذرہ برابر برائی کرے گا وہ اسے دیکھ لے گا۔`,
        ``
      ],
      [
        `Barang siapa berbuat kebaikan sebesar zarrah, niscaya dia akan melihatnya,`,
        `dan barang siapa berbuat kejahatan sebesar zarrah, niscaya dia akan melihatnya.`,
        ``
      ],
      [
        `Kim zerre kadar hayır işlerse onu görür,`,
        `kim de zerre kadar şer işlerse onu görür.`,
        ``
      ],
      [
        `پس هر کس به اندازه ذره‌ای نیکی کند آن را خواهد دید،`,
        `و هر کس به اندازه ذره‌ای بدی کند آن را خواهد دید.`,
        ``
      ],
      [
        `অতএব যে ব্যক্তি অণু পরিমাণ সৎকর্ম করবে, সে তা দেখবে,`,
        `এবং যে ব্যক্তি অণু পরিমাণ অসৎকর্ম করবে, সে তা দেখবে।`,
        ``
      ],
      [
        `Quem fizer o peso de um átomo de bem o verá,`,
        `e quem fizer o peso de um átomo de mal o verá.`,
        ``
      ],
      [
        `谁做了一粒尘埃般的善事，将会看到它，`,
        `谁做了一粒尘埃般的恶事，也将会看到它。`,
        ``
      ],
      [
        `誰であれ微塵ほどの善を行えばそれを見るであろう、`,
        `そして誰であれ微塵ほどの悪を行えばそれを見るであろう。`,
        ``
      ],
      [
        `누구든지 티끌만큼의 선을 행하면 그것을 보게 될 것이며,`,
        `누구든지 티끌만큼의 악을 행하면 그것을 보게 될 것이다.`,
        ``
      ],
      [
        `Chiunque faccia il peso di un atomo di bene lo vedrà,`,
        `e chiunque faccia il peso di un atomo di male lo vedrà.`,
        ``
      ],
      [
        `Kto uczyni dobro o wadze atomu, zobaczy je,`,
        `a kto uczyni zło o wadze atomu, zobaczy je.`,
        ``
      ],
      [
        `Хто зробить добро вагою з атом, той побачить його,`,
        `і хто зробить зло вагою з атом, той побачить його.`,
        ``
      ]
    ],
    number: `سورة الزلزلة / Az-Zalzalah، الآيات 7-8`
  },

  {
    arabic: [
      `قُلْ هُوَ اللَّهُ أَحَدٌ`,
      `اللَّهُ الصَّمَدُ`,
      `لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`
    ],
    translations: [
      [
        `Say, He is Allah, [who is] One,`,
        `Allah, the Eternal Refuge.`,
        `He neither begets nor is born, nor is there to Him any equivalent.`
      ],
      [
        `Dis : Il est Allah, Unique,`,
        `Allah, Le Seul à être imploré pour ce que nous désirons.`,
        `Il n’a jamais engendré, n’a pas été engendré non plus, et nul n’est égal à Lui.`
      ],
      [
        `Di: Él es Allah, Uno,`,
        `Allah, el Absoluto.`,
        `No engendra ni ha sido engendrado, y no hay nadie igual a Él.`
      ],
      [
        `Скажи: Он — Аллах, Единый,`,
        `Аллах, Самодостаточный.`,
        `Он не родил и не был рожден, и нет никого равного Ему.`
      ],
      [
        `Sag: Er ist Allah, der Eine,`,
        `Allah, der Absolute.`,
        `Er zeugt nicht und ist nicht gezeugt worden, und niemand ist Ihm ebenbürtig.`
      ],
      [
        `Säg: Han är Allah, En,`,
        `Allah, den Självförsörjande.`,
        `Han föder inte och är inte född, och ingen är lik Honom.`
      ],
      [
        `Abair: Sé Allah, Aonair,`,
        `Allah, an Féinmhuiníneach.`,
        `Ní ghineann Sé ná ní ghintear Sé, agus níl aon duine cosúil leis.`
      ],
      [
        `Zeg: Hij is Allah, de Enige,`,
        `Allah, de Absolute.`,
        `Hij verwekt niet en is niet verwekt, en niemand is aan Hem gelijk.`
      ],
      [
        `کہو: وہ اللہ ایک ہے،`,
        `اللہ بے نیاز ہے،`,
        `نہ وہ کسی سے پیدا ہوا اور نہ اس سے کوئی پیدا ہوا، اور نہ ہی کوئی اس کا ہمسر ہے۔`
      ],
      [
        `Katakanlah: Dialah Allah Yang Maha Esa,`,
        `Allah tempat bergantung segala sesuatu.`,
        `Dia tidak beranak dan tidak diperanakkan, dan tidak ada sesuatu pun yang setara dengan-Nya.`
      ],
      [
        `De ki: O Allah birdir,`,
        `Allah Samed’dir.`,
        `O doğurmamış ve doğmamıştır, O’na hiçbir denk yoktur.`
      ],
      [
        `بگو: او خداوند یکتاست،`,
        `خداوند بی‌نیاز است،`,
        `نه زاده شده و نه می‌زاید، و هیچ‌کس همتای او نیست.`
      ],
      [
        `বলুন: তিনি আল্লাহ, একক,`,
        `আল্লাহ অমুখাপেক্ষী,`,
        `তিনি কাউকে জন্ম দেননি এবং কেউ তাকে জন্ম দেয়নি, এবং তাঁর সমতুল্য কেউ নেই।`
      ],
      [
        `Dize: Ele é Allah, o Único,`,
        `Allah, o Absoluto.`,
        `Ele não gera nem foi gerado, e não há nada comparável a Ele.`
      ],
      [
        `你说：他是真主，是独一的，`,
        `真主是万物所仰赖的。`,
        `他没有生育，也没有被生育，没有任何物可以与他相比。`
      ],
      [
        `言え、彼はアッラーであり唯一である、`,
        `アッラーは自存されるお方である。`,
        `彼は産まず、産まれず、彼に匹敵するものは何もない。`
      ],
      [
        `말하라: 그는 알্লাহ, 유일하신 분이다,`,
        `알্লাহ는 자존하시는 분이다.`,
        `그는 낳지도 않았고 태어나지도 않았으며 그와 동등한 것은 아무것도 없다.`
      ],
      [
        `Di’: Egli è Allah, l’Unico,`,
        `Allah, l’Assoluto.`,
        `Non genera e non è generato, e nessuno è pari a Lui.`
      ],
      [
        `Powiedz: On jest Allah, Jeden,`,
        `Allah, Wieczny.`,
        `Nie rodzi ani nie jest zrodzony i nie ma nikogo Jemu równego.`
      ],
      [
        `Скажи: Він — Аллах, Єдиний,`,
        `Аллах, Самодостатній.`,
        `Він не народжує і не був народжений, і немає нікого рівного Йому.`
      ]
    ],
    number: `سورة الإخلاص / Al-Ikhlas، الآيات 1-4`
  }
];
