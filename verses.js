// ===== آيات الشاشة الترحيبية (تم فصلها من index.html) =====
// ملف منفصل يحتوي على مصفوفة verses: كل عنصر = آية بالعربي (arabic) + الترجمات (translations) + رقم/اسم السورة (number).
// لازم يتحمّل قبل أول كود بيستخدم verses (محمّل في index.html قبل سكربت عرض الآيات مباشرةً).

const verses = [
  {
    arabic: [
      `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ الرَّحْمَٰنِ الرَّحِيمِ`,
      `مَالِكِ يَوْمِ الدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ`,
      `اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ`
    ],
    translations: [
      [
        `In the name of Allah, the Entirely Merciful, the Especially Merciful. [All] praise is [due] to Allah, Lord of the worlds - the Entirely Merciful, the Especially Merciful,`,
        `Sovereign of the Day of Recompense. It is You we worship and You we ask for help.`,
        `Guide us to the straight path - the path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray.`
      ],
      [
        `Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur de l'univers, le Tout Miséricordieux, le Très Miséricordieux,`,
        `Maître du Jour de la rétribution. C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.`,
        `Guide-nous dans le droit chemin, le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui encourent Ta colère, ni des égarés.`
      ],
      [
        `En el nombre de Alá, el Compasivo, el Misericordioso. Alabado sea Alá, Señor del universo, el Compasivo, el Misericordioso,`,
        `Dueño del día del Juicio. A Ti solo servimos y a Ti solo pedimos ayuda.`,
        `Dirígenos por la vía recta, la vía de los que Tú has agraciado, no de los que han incurrido en la ira ni de los extraviados.`
      ],
      [
        `Во имя Аллаха, Милостивого, Милосердного! Хвала Аллаху, Господу миров, Милостивому, Милосердному,`,
        `Властелину Дня воздаяния! Тебе одному мы поклоняемся и Тебя одного молим о помощи.`,
        `Веди нас прямым путём, путём тех, кого Ты облагодетельствовал, не тех, на кого пал гнев, и не заблудших.`
      ],
      [
        `Im Namen Allahs, des Allerbarmers, des Barmherzigen. Lob gebührt Allah, dem Herrn der Welten, dem Allerbarmer, dem Barmherzigen,`,
        `dem Herrscher am Tag des Gerichts. Dir allein dienen wir, und Dich allein bitten wir um Hilfe.`,
        `Leite uns den geraden Weg, den Weg derer, denen Du Gnade erwiesen hast, nicht derer, die Deinen Zorn erregt haben, und nicht der Irregehenden.`
      ],
      [
        `I Guds, den Nåderikes, den Barmhärtiges namn. Lovad vare Gud, världarnas Herre, den Nåderike, den Barmhärtige,`,
        `som råder över domens dag. Dig allena tillber vi och Dig allena anropar vi om hjälp.`,
        `Led oss på den raka vägen, deras väg som Du har skänkt Din nåd, inte deras som har väckt Din vrede och inte de vilsegångnas.`
      ],
      [
        `In ainm Allah, an Trócaireach, an Atrócaireach. Moladh do Allah, Tiarna na ndomhan, an Trócaireach, an Atrócaireach,`,
        `Rí Lá an Bhreithiúnais. Is Tusa amháin a adhraimid agus is Tusa amháin a iarraimid cabhair air.`,
        `Treoraigh sinn ar an gcosán díreach, cosán na ndaoine ar thug Tú bua dóibh, ní cosán na ndaoine ar a bhfuil fearg ort ná na ndaoine atá ar seachrán.`
      ],
      [
        `In de naam van Allah, de Barmhartige, de Genadevolle. Lof zij Allah, de Heer der werelden, de Barmhartige, de Genadevolle,`,
        `Meester van de Dag des Oordeels. U alleen aanbidden wij en U alleen vragen wij om hulp.`,
        `Leid ons op het rechte pad, het pad van hen aan wie U Uw gunst hebt geschonken, niet van hen die Uw toorn hebben opgewekt, noch van de dwalenden.`
      ],
      [
        `شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔ سب تعریفیں اللہ کے لیے ہیں جو سارے جہانوں کا پالنے والا ہے، بڑا مہربان نہایت رحم والا ہے،`,
        `روزِ جزا کا مالک ہے۔ ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔`,
        `ہمیں سیدھا راستہ دکھا، ان لوگوں کا راستہ جن پر تو نے انعام کیا، نہ ان کا جن پر غضب کیا گیا اور نہ گمراہوں کا۔`
      ],
      [
        `Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam, Yang Maha Pengasih, Maha Penyayang,`,
        `Pemilik hari pembalasan. Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.`,
        `Tunjukilah kami jalan yang lurus, (yaitu) jalan orang-orang yang telah Engkau beri nikmat, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat.`
      ],
      [
        `Rahman ve Rahim olan Allah'ın adıyla. Hamd, âlemlerin Rabbi, Rahman ve Rahim olan Allah'a mahsustur,`,
        `Din gününün sahibidir. Yalnız sana kulluk eder ve yalnız senden yardım dileriz.`,
        `Bizi doğru yola ilet; kendilerine nimet verdiklerinin yoluna; gazaba uğrayanların ve sapıtanların yoluna değil.`
      ],
      [
        `به نام خداوند بخشنده مهربان. ستایش مخصوص خداوندی است که پروردگار جهانیان است، بخشنده و مهربان است،`,
        `مالک روز جزاست. تنها تو را می‌پرستیم و تنها از تو یاری می‌جوییم.`,
        `ما را به راه راست هدایت کن، راه کسانی که به آنان نعمت دادی، نه راه خشم‌گرفتگان و نه گمراهان.`
      ],
      [
        `শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু। সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সকল সৃষ্টিজগতের পালনকর্তা, পরম করুণাময়, অতি দয়ালু,`,
        `বিচার দিবসের মালিক। আমরা একমাত্র আপনারই ইবাদত করি এবং একমাত্র আপনারই কাছে সাহায্য প্রার্থনা করি।`,
        `আমাদেরকে সরল পথ দেখান, তাদের পথ যাদেরকে আপনি নিয়ামত দিয়েছেন, তাদের পথ নয় যাদের প্রতি গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট।`
      ],
      [
        `Em nome de Allah, o Clemente, o Misericordioso. Louvado seja Allah, Senhor dos mundos, o Clemente, o Misericordioso,`,
        `Soberano do Dia do Juízo. Só a Ti adoramos e só de Ti imploramos ajuda.`,
        `Guia-nos na senda reta, a senda daqueles que agraciaste, não a dos que incorreram na Tua ira, nem a dos extraviados.`
      ],
      [
        `以至仁至慈的真主之名。一切赞颂，全归真主，众世界的主，至仁至慈的主，`,
        `报应日的主。我们只崇拜你，我们只求你相助。`,
        `求你引导我们上正路，你所祐助者的路，不是受谴怒者的路，也不是迷误者的路。`
      ],
      [
        `慈悲あまねく慈悲深きアッラーの御名において。万有の主，アッラーにこそ凡ての称賛あれ。慈悲あまねく慈悲深き御方，`,
        `審判の日の主宰者。我々はあなたにのみ崇拝し，あなたにのみ助けを請う。`,
        `私たちを正しい道に導きたまえ。あなたが恩恵を授けられた者たちの道へ。御怒りを被る者や，迷い去った者たちの道ではなく。`
      ],
      [
        `자비롭고 자애로우신 하나님의 이름으로. 온 세상의 주님이신 하나님께 모든 찬양이 있으소서. 자비로우시고 자애로우신 분,`,
        `심판의 날의 주인이시니. 저희는 오직 당신만을 경배하며 오직 당신께만 도움을 청합니다.`,
        `저희를 올바른 길로 인도하소서. 당신께서 은혜를 베푸신 이들의 길로, 노여움을 받은 자들이나 길을 잃은 자들의 길이 아닌 길로 인도하소서.`
      ],
      [
        `Nel nome di Allah, il Compassionevole, il Misericordioso. La lode appartiene ad Allah, Signore dei mondi, il Compassionevole, il Misericordioso,`,
        `Sovrano del Giorno del Giudizio. Te noi adoriamo e a Te chiediamo aiuto.`,
        `Guidaci sulla retta via, la via di coloro che hai colmato di grazia, non di coloro che sono incorsi nella Tua ira, né degli smarriti.`
      ],
      [
        `W imię Allaha, Miłosiernego, Litościwego! Chwała Allahowi, Panu światów, Miłosiernemu, Litościwemu,`,
        `Władcy Dnia Sądu! Tobie czcimy i Ciebie o pomoc prosimy.`,
        `Prowadź nas drogą prostą, drogą tych, których obdarzyłeś łaską, nie tych, na których spadł gniew, ani tych, którzy zbłądzili.`
      ],
      [
        `В ім'я Аллаха, Милостивого, Милосердного! Хвала Аллаху, Господу світів, Милостивому, Милосердному,`,
        `Володарю Дня Суду. Тобі одному ми поклоняємося і Тебе одного благаємо про допомогу.`,
        `Веди нас прямим шляхом, шляхом тих, кого Ти обдарував милістю, не тих, на кого впав гнів, і не тих, що збилися зі шляху.`
      ]
    ],
    number: `سورة الفاتحة / Al-Fatihah، الآيات 1-7`
  },

  {
    arabic: [
      `ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ`,
      `هُدًى لِّلْمُتَّقِينَ`,
      ``
    ],
    translations: [
      [
        `This is the Book about which there is no doubt,`,
        `a guidance for those conscious of Allah.`,
        ``
      ],
      [
        `C'est le Livre au sujet duquel il n'y a aucun doute,`,
        `c'est un guide pour les pieux`,
        ``
      ],
      [
        `Ésta es la Escritura, exenta de dudas,`,
        `como dirección para los temerosos de Alá`,
        ``
      ],
      [
        `Это Писание, в котором нет сомнения,`,
        `является верным руководством для богобоязненных`,
        ``
      ],
      [
        `Dieses Buch, an dem es keinen Zweifel gibt,`,
        `ist eine Rechtleitung für die Gottesfürchtigen`,
        ``
      ],
      [
        `DENNA Skrift - här råder inget tvivel - är en vägledning`,
        `för dem som fruktar Gud och ständigt har Honom för ögonen`,
        ``
      ],
      [
        `Is é seo an Leabhar nach bhfuil aon amhras ann,`,
        `treoir dóibh siúd a bhfuil eagla Allah orthu.`,
        ``
      ],
      [
        `Dit is het Boek (de Koran) waaraan geen twijfel is,`,
        `een leidraad voor de Moettaqôen`,
        ``
      ],
      [
        `یہ کتاب (قرآن مجید) اس میں کچھ شک نہیں (کہ`,
        `کلامِ خدا ہے۔ خدا سے) ڈرنے والوں کی رہنما ہے`,
        ``
      ],
      [
        `Kitab (Alquran) ini tidak ada keraguan padanya;`,
        `petunjuk bagi mereka yang bertakwa`,
        ``
      ],
      [
        `Bu,`,
        `doğruluğu şüphe götürmeyen ve Allah'a karşı gelmekten sakınanlara yol gösteren Kitap'dır`,
        ``
      ],
      [
        `اين است كتابى كه در [حقانيت‌] آن هيچ ترديدى نيست؛`,
        `[و] مايه هدايت تقواپيشگان است`,
        ``
      ],
      [
        `এ সেই কিতাব যাতে কোনই সন্দেহ নেই।`,
        `পথ প্রদর্শনকারী পরহেযগারদের জন্য`,
        ``
      ],
      [
        `Esse é o Livro. Nele, não há dúvida alguma.`,
        `É orientação para os piedosos`,
        ``
      ],
      [
        `这部经，其中毫无可疑，`,
        `是敬畏者的向导。`,
        ``
      ],
      [
        `それこそは，疑いの余地のない啓典である。`,
        `その中には，主を畏れる者たちへの導きがある。`,
        ``
      ],
      [
        `의혹의 여지가 없는 이 성서는`,
        `하나님을 경외하는 자들을 위한 길잡이라`,
        ``
      ],
      [
        `Questo è il Libro su cui non ci sono dubbi,`,
        `una guida per i timorati`,
        ``
      ],
      [
        `To jest Księga - nie ma,`,
        `co do tego żadnej wątpliwości - droga prosta dla bogobojnych`,
        ``
      ],
      [
        `Це — Писання, в якому немає сумніву,`,
        `— прямий шлях для богобоязливих`,
        ``
      ]
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
      `وَإِلَٰهُكُمْ إِلَٰهٌ`,
      `وَاحِدٌ ۖ`,
      `لَا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ`
    ],
    translations: [
      [
        `And your god is one God.`,
        `There is no deity [worthy of worship] except Him,`,
        `the Entirely Merciful, the Especially Merciful`
      ],
      [
        `Et votre Divinité est une divinité unique.`,
        `Pas de divinité à part Lui,`,
        `le Tout Miséricordieux, le Très Miséricordieux`
      ],
      [
        `Vuestro Dios es un Dios Uno.`,
        `No hay más dios que Él,`,
        `el Compasivo, el Misericordioso`
      ],
      [
        `Ваш Бог - Бог Единственный.`,
        `Нет божества, кроме Него,`,
        `Милостивого, Милосердного`
      ],
      [
        `Euer Gott ist ein Einziger Gott.`,
        `Es gibt keinen Gott außer Ihm,`,
        `dem Allerbarmer, dem Barmherzigen`
      ],
      [
        `Er gud är den Ende;`,
        `det finns ingen annan gud än Han,`,
        `den Nåderike, den Barmhärtige`
      ],
      [
        `Agus is Dia Amháin bhur nDia;`,
        `níl aon dia ach Eisean, an Trócaireach Uile,`,
        `an Trócaireach Speisialta.`
      ],
      [
        `En jullie god is één God.`,
        `Geen god is er dan Hij,`,
        `de Erbarmer, de Meest Barmhartige`
      ],
      [
        `اور (لوگو) تمہارا معبود خدائے`,
        `واحد ہے اس بڑے مہربان (اور) رحم کرنے`,
        `کے سوا کوئی عبادت کے لائق نہیں`
      ],
      [
        `Dan Tuhan kamu adalah Tuhan Yang Maha Esa,`,
        `tidak ada tuhan selain Dia,`,
        `Yang Maha Pengasih, Maha Penyayang`
      ],
      [
        `Tanrınız bir tek Tanrıdır.`,
        `O, merhamet eden,`,
        `merhametli olandan başka Tanrı yoktur`
      ],
      [
        `و معبود شما،`,
        `معبود يگانه‌اى است كه جز او هيچ معبودى نيست،`,
        `[و اوست‌] بخشايشگر مهربان`
      ],
      [
        `আর তোমাদের উপাস্য একইমাত্র`,
        `উপাস্য। তিনি ছাড়া`,
        `মহা করুণাময় দয়ালু কেউ নেই।`
      ],
      [
        `E vosso Deus é Deus Único.`,
        `Não existe divindade senão Ele,`,
        `O Misericordioso, O Misericordiador`
      ],
      [
        `你们所当崇拜的，是唯一的主宰；`,
        `除他外，绝无应受崇拜的；`,
        `他是至仁的，是至慈的。`
      ],
      [
        `あなたがたの神は唯一の神（アッラー）である。`,
        `かれの外に神はなく，`,
        `慈悲あまねく慈愛深き方である。`
      ],
      [
        `그대들이 경배해야 할 존재는 오직`,
        `한분이라. 가장 자비로우시고 가장 자애로우신`,
        `그분 이외에는 경배 받을 존재가 없노라`
      ],
      [
        `Il vostro Dio è il Dio Unico,`,
        `non c'è altro dio che Lui,`,
        `il Compassionevole, il Misericordioso`
      ],
      [
        `Bóg wasz - Bóg Jeden!`,
        `nie ma boga, jak tylko On,`,
        `Miłosierny, Litościwy`
      ],
      [
        `Ваш Бог — Бог Єдиний.`,
        `Немає бога, крім Нього,`,
        `Милостивого, Милосердного`
      ]
    ],
    number: `سورة البقرة / Al-Baqarah، الآية 163`
  },

  {
    arabic: [
      `وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ`,
      `أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا لِي`,
      `وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ`
    ],
    translations: [
      [
        `And when My servants ask you, [O Muhammad], concerning Me - indeed I am near.`,
        `I respond to the invocation of the supplicant when he calls upon Me.`,
        `So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided`
      ],
      [
        `Et quand Mes serviteurs t'interrogent sur Moi.. alors Je suis tout proche:`,
        `Je réponds à l'appel de celui qui Me prie quand il Me prie.`,
        `Qu'ils répondent à Mon appel, et qu'ils croient en Moi, afin qu'ils soient bien guidés`
      ],
      [
        `Cuando Mis siervos te pregunten por Mí,`,
        `estoy cerca y respondo a la oración de quien invoca cuando Me invoca.`,
        `¡Que Me escuchen y crean en Mí! Quizás, así, sean bien dirigidos`
      ],
      [
        `Если Мои рабы спросят тебя обо Мне, то ведь Я близок и отвечаю на зов молящегося,`,
        `когда он взывает ко Мне.`,
        `Пусть же они отвечают Мне и веруют в Меня, - быть может, они последуют верным путем`
      ],
      [
        `Und wenn dich Meine Diener nach Mir fragen, so bin Ich nahe;`,
        `Ich erhöre den Ruf des Bittenden, wenn er Mich anruft.`,
        `So sollen sie nun auf Mich hören und an Mich glauben, auf daß sie besonnen handeln mögen`
      ],
      [
        `När mina tjänare frågar dig om Mig då Jag är nära;`,
        `Jag besvarar den bedjandes bön, när han ber till Mig.`,
        `Och uppmana dem att svara när Jag kallar och att tro på Mig - kanske skall de ledas på rätt väg`
      ],
      [
        `Agus nuair a fhiafraíonn mo sheirbhísigh díot fúmsa, go deimhin tá mé gar dóibh.`,
        `Freagraím glao an té a ghlaonn orm nuair a ghlaonn sé orm. Mar sin,`,
        `lig dóibh freagra a thabhairt orm agus a chreidiúint ionam, ionas go dtreorófar ar an mbealach ceart iad.`
      ],
      [
        `En wanneer Mijn dienaren jou (O Moehammad) vragen stellen over Mij: voorwaar,`,
        `Ik ben nabij, Ik verhoor de smeekbede van de smekende wanneer hij tot Mij smeek.`,
        `Laten zij aan Mij gehoor geven en in Mij geloven. Hopelijk zullen zij de juiste Leiding volgen`
      ],
      [
        `اور (اے پیغمبر) جب تم سے میرے بندے میرے بارے میں دریافت کریں تو (کہہ دو کہ) میں تو`,
        `(تمہارے) پاس ہوں جب کوئی پکارنے والا مجھے پکارتا ہے تو میں اس کی دعا قبول کرتا ہوں`,
        `تو ان کو چاہیئے کہ میرے حکموں کو مانیں اور مجھ پر ایمان لائیں تاکہ نیک رستہ پائیں`
      ],
      [
        `Dan apabila hamba-hamba-Ku bertanya kepadamu (Muhammad) tentang Aku, maka sesungguhnya Aku dekat.`,
        `Aku kabulkan permohonan orang yang berdoa apabila dia berdoa kepada-Ku.`,
        `Hendaklah mereka itu memenuhi (perintah)-Ku dan beriman kepada-Ku, agar mereka memperoleh kebenaran`
      ],
      [
        `Kullarım sana Beni sorarlarsa, bilsinler ki Ben, şüphesiz onlara yakınım.`,
        `Benden isteyenin, dua ettiğinde duasını kabul ederim.`,
        `Artık onlar da davetimi kabul edip Bana inansınlar ki doğru yolda yürüyenlerden olsunlar`
      ],
      [
        `و هرگاه بندگان من، از تو در باره من بپرسند، [بگو] من نزديكم،`,
        `و دعاى دعاكننده را -به هنگامى كه مرا بخواند- اجابت مى‌كنم،`,
        `پس [آنان‌] بايد فرمان مرا گردن نهند و به من ايمان آورند، باشد كه راه يابند`
      ],
      [
        `আর আমার বান্দারা যখন তোমার কাছে জিজ্ঞেস করে আমার ব্যাপারে বস্তুতঃ আমি রয়েছি সন্নিকটে। যারা প্রার্থনা করে,`,
        `তাদের প্রার্থনা কবুল করে নেই,`,
        `যখন আমার কাছে প্রার্থনা করে। কাজেই আমার হুকুম মান্য করা এবং আমার প্রতি নিঃসংশয়ে বিশ্বাস করা তাদের একান্ত কর্তব্য। যাতে তারা সৎপথে আসতে পারে।`
      ],
      [
        `E quando Meus servos te perguntarem por Mim, por certo, estou próximo,`,
        `atendo a súplica do suplicante, quando Me suplica.`,
        `Que eles Me atendam, então, e creiam em Mim, na esperança de serem assisados`
      ],
      [
        `如果我的仆人询问我的情状，你就告诉他们：`,
        `我确是临近的，确是答应祈祷者的祈祷的。当他祈祷我的时候，`,
        `教他们答应我，信仰我，以便他们遵循正道。`
      ],
      [
        `われのしもべたちが，われに就いてあなたに問う時，（言え）われは本当に（しもべたちの）近くにいる。`,
        `かれがわれに祈る時はその嘆願の祈りに答える。`,
        `それでわれ（の呼びかけ）に答えさせ，われを信仰させなさい，恐らくかれらは正しく導かれるであろう。`
      ],
      [
        `나의 종복들이 그대(무함마드)에게 나에 관해 묻거든 실로 나는 가까이 있노라.`,
        `기도하는 자가 나에게 요청할 때 나는 그의 기도에 응답하노라.`,
        `그러니 그들이 나의 부름에 응하도록 하고 나를 믿도록 하라. 그들이 올바른 길로 인도될 것이라`
      ],
      [
        `Quando i Miei servi ti chiedono di Me, ebbene Io sono vicino!`,
        `Rispondo all'appello di chi Mi chiama quando Mi invoca.`,
        `Procurino quindi di rispondere al Mio richiamo e credano in Me, sì che possano essere ben guidati`
      ],
      [
        `A kiedy zapytają ciebie Moi słudzy o Mnie, to zaprawdę, Ja jestem bliski!`,
        `Odpowiadam na wezwanie każdego wzywającego, kiedy Mnie wzywa;`,
        `niech więc oni odpowiedzą na Moje wezwanie i niech we Mnie uwierzą! Być może, oni pójdą drogą prawości`
      ],
      [
        `І коли раби Мої запитують тебе про Мене, то Я — близький,`,
        `і Я відповідаю на заклики того, хто кличе Мене.`,
        `Нехай же й вони відповідають Мені та вірують у Мене — можливо, підуть вони правильним шляхом`
      ]
    ],
    number: `سورة البقرة / Al-Baqarah، الآية 186`
  },

  {
    arabic: [
      `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ`,
      `مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ`,
      `وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`
    ],
    translations: [
      [
        `Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.`,
        `Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them,`,
        `and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great`
      ],
      [
        `Allah! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même «Al-Qayyûm». Ni somnolence ni sommeil ne Le saisissent.`,
        `A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission? Il connaît leur passé et leur futur. Et, de Sa science,`,
        `ils n'embrassent que ce qu'Il veut. Son Trône «Kursiy», déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand`
      ],
      [
        `¡Alá! No hay más dios que El. el Viviente, el Subsistente. Ni la somnolencia ni el sueño se apoderan de Él. Suyo es lo que está en los cielos y en la tierra.`,
        `¿Quién podrá interceder ante Él si no es con Su permiso? Conoce su pasado y su futuro, mientras que ellos no abarcan nada de Su ciencia,`,
        `excepto lo que Él quiere. Su Trono se extiende sobre los cielos y sobre la tierra y su conservación no le resulta onerosa. Él es el Altísimo, el Grandioso`
      ],
      [
        `Аллах - нет божества, кроме Него, Живого, Вседержителя. Им не овладевают ни дремота, ни сон. Ему принадлежит то, что на небесах, и то,`,
        `что на земле. Кто станет заступаться перед Ним без Его дозволения? Он знает их будущее и прошлое. Они постигают из Его знания только то,`,
        `что Он пожелает. Его Престол (Подножие Трона) объемлет небеса и землю, и не тяготит Его оберегание их. Он - Возвышенный, Великий`
      ],
      [
        `Allah - es gibt keinen Gott außer Ihm, dem Lebendigen und Beständigen. Ihn überkommt weder Schlummer noch Schlaf. Ihm gehört (alles), was in den Himmeln und was auf der Erde ist.`,
        `Wer ist es denn, der bei Ihm Fürsprache einlegen könnte - außer mit Seiner Erlaubnis? Er weiß, was vor ihnen und was hinter ihnen liegt,`,
        `sie aber umfassen nichts von Seinem Wissen - außer, was Er will. Sein Thronschemel umfaßt die Himmel und die Erde, und ihre Behütung beschwert Ihn nicht. Er ist der Erhabene und Allgewaltige`
      ],
      [
        `GUD - det finns ingen gud utom Han, den Levande, skapelsens evige Vidmakthållare. Slummer överraskar Honom inte och inte heller sömn. Honom tillhör allt det som himlarna rymmer och det som jorden bär.`,
        `Vem är den som vågar tala [för någon] inför Honom utan Hans tillstånd? Han vet allt vad [människor] kan veta och allt som är dolt för dem och av Hans kunskap kan de inte omfatta mer än Han tillåter.`,
        `Hans allmakts tron omsluter himlarna och jorden. Att värna och bevara dem är för Honom ingen börda. Han är den Höge, den Härlige`
      ],
      [
        `Allah — níl aon dia ach Eisean, an Beo, an Buan-Chothaitheoir. Ní ghlacann codladh beag ná codladh domhain Leis. Is leis gach a bhfuil sna flaithis agus gach a bhfuil ar an talamh.`,
        `Cé atá ann a idirghuíonn Leis ach lena chead? Tá a fhios aige cad atá rompu agus cad atá ina ndiaidh,`,
        `agus ní thuigeann siad aon chuid dá eolas ach an méid is mian Leis. Leathnaíonn a Chathaoir na flaithis agus an talamh, agus ní chuireann a gcaomhnú tuirse Air. Agus is Eisean an tArd, an Mór.`
      ],
      [
        `Allah, er is geen god dan Hij, de Levende, de Zelfstandige, sluimer noch slaap kan Hem treffen, aan Hem behoort toe wat er in de hemelen en wat er op de aarde is.`,
        `Wie is degene die van voorspraak is bij Hem zonder Zijn verlof? Hij kent wat er voor hen is en wat er achter hen is. En zij kunnen niets van Zijn Kennis omvatten,`,
        `behalve wat Hij wil. En Zijn Zetel strekt zich uit over de Hemelen en de Aarde en het waken over beide vermoeit Hem niet. En Hij is de Verhevene, de Almachtige`
      ],
      [
        `خدا (وہ معبود برحق ہے کہ) اس کے سوا کوئی عبادت کے لائق نہیں زندہ ہمیشہ رہنے والا اسے نہ اونگھ آتی ہے نہ نیند جو کچھ آسمانوں میں اور جو کچھ زمین میں ہیں سب اسی کا ہے کون ہے جو اس کی`,
        `اجازت کے بغیر اس سے (کسی کی) سفارش کر سکے جو کچھ لوگوں کے روبرو ہو رہا ہے اور جو کچھ ان کے پیچھے ہوچکا ہے اسے سب معلوم ہے اور وہ اس کی معلومات میں سے کسی چیز پر دسترس حاصل نہیں کر`,
        `سکتے ہاں جس قدر وہ چاہتا ہے (اسی قدر معلوم کرا دیتا ہے) اس کی بادشاہی (اور علم) آسمان اور زمین سب پر حاوی ہے اور اسے ان کی حفاظت کچھ بھی دشوار نہیں وہ بڑا عالی رتبہ اور جلیل القدر ہے`
      ],
      [
        `Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi.`,
        `Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang dihadapan mereka dan apa yang di belakang mereka,`,
        `dan mereka tidak mengetahui sesuatu apa pun tentang ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dan Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi, Mahabesar`
      ],
      [
        `Allah, O'ndan başka tanrı olmayan, kendisini uyuklama ve uyku tutmayan, diri, her an yaratıklarını gözetip durandır.`,
        `Göklerde olan ve yerde olan ancak O'nundur. O'nun izni olmadan katında şefaat edecek kimdir? Onların işlediklerini ve işleyeceklerini bilir,`,
        `dilediğinden başka ilminden hiçbir şeyi kavrayamazlar. Hükümranlığı gökleri ve yeri kaplamıştır, onların gözetilmesi O'na ağır gelmez. O yücedir, büyüktür`
      ],
      [
        `خداست كه معبودى جز او نيست؛ زنده و برپادارنده است؛ نه خوابى سبك او را فرو مى‌گيرد و نه خوابى گران؛ آنچه در آسمانها و آنچه در زمين است،`,
        `از آنِ اوست. كيست آن كس كه جز به اذن او در پيشگاهش شفاعت كند؟ آنچه در پيش روى آنان و آنچه در پشت سرشان است مى‌داند. و به چيزى از علم او،`,
        `جز به آنچه بخواهد، احاطه نمى‌يابند. كرسى او آسمانها و زمين را در بر گرفته، و نگهدارى آنها بر او دشوار نيست، و اوست والاى بزرگ`
      ],
      [
        `আল্লাহ ছাড়া অন্য কোন উপাস্য নেই, তিনি জীবিত, সবকিছুর ধারক। তাঁকে তন্দ্রাও স্পর্শ করতে পারে না এবং নিদ্রাও নয়। আসমান ও যমীনে যা কিছু রয়েছে, সবই তাঁর। কে আছ এমন,`,
        `যে সুপারিশ করবে তাঁর কাছে তাঁর অনুমতি ছাড়া? দৃষ্টির সামনে কিংবা পিছনে যা কিছু রয়েছে সে সবই তিনি জানেন। তাঁর জ্ঞানসীমা থেকে তারা কোন কিছুকেই পরিবেষ্টিত করতে পারে না,`,
        `কিন্তু যতটুকু তিনি ইচ্ছা করেন। তাঁর সিংহাসন সমস্ত আসমান ও যমীনকে পরিবেষ্টিত করে আছে। আর সেগুলোকে ধারণ করা তাঁর পক্ষে কঠিন নয়। তিনিই সর্বোচ্চ এবং সর্বাপেক্ষা মহান।`
      ],
      [
        `Allah, não existe deus senão Ele, O Vivente, Aquele que subsiste por Si mesmo. Não O tomam nem sonolência nem sono.`,
        `DEle é o que há nos céus e o que há na terra. Quem intercederá junto dEle senão com Sua permissão? Ele sabe seu passado e seu futuro,`,
        `e nada abarcam de Sua ciência senão aquilo que Ele quer. Seu Trono abrange os céus e a terra e não O afadiga custodiá-los. E Ele é O Altíssimo, O Magnífico`
      ],
      [
        `真主，除他外绝无应受崇拜的；他是永生不灭的，是维护万物的；瞌睡不能侵犯他，睡眠不能克服他；`,
        `天地万物都是他的；不经他的许可，谁能在他那里替人说情呢？他知道他们面前的事，和他们身後的事；除他所启示的外，`,
        `他们绝不能窥测他的玄妙；他的知觉，包罗天地。天地的维持，不能使他疲倦。他确是至尊的，确是至大的。`
      ],
      [
        `アッラー，かれの外に神はなく，永生に自存される御方。仮眠も熟睡も，かれをとらえることは出来ない。天にあり地にある凡てのものは，かれの有である。かれの許しなくして，`,
        `誰がかれの御許で執り成すことが出来ようか。かれは（人びとの），以前のことも以後のことをも知っておられる。かれの御意に適ったことの外，かれらはかれの御知識に就いて，`,
        `何も会得するところはないのである。かれの玉座は，凡ての天と地を覆って広がり，この2つを守って，疲れも覚えられない。かれは至高にして至大であられる。`
      ],
      [
        `하나님, 살아계신 분이며 모든 것을 주관하시는 그분 이외에는 경배 받을 존재가 없노라. 졸음도 잠도 그분에게 다가가지 못하노라. 하늘에 있는 것과 대지에 있는 것이 그분의 소유라.`,
        `그분 앞에서 그분의 허락 없이 중재할 수 있는 자 누구인가. 그분께서는 그들 앞에 있는 것과 그들 뒤에 있는 것을 알고 계시노라. 그들은 그분의 지식에 관해 그 어떤 것도 아우르지 못하나 그분께서 원하시는 것은 예외라.`,
        `그분의 쿠르시(의자)는 하늘과 대지를 포괄하며 그분은 그 모두(하늘과 대지)를 보호하심에 피곤함을 느끼지 않으시노라. 그분께서는 가장 높으신 분이며 가장 위엄하신 분이라`
      ],
      [
        `Allah! Non c'è altro dio che Lui, il Vivente, l'Assoluto. Non Lo prendon mai sopore, né sonno. A Lui appartiene tutto quello che è nei cieli e sulla terra.`,
        `Chi può intercedere presso di Lui senza il Suo permesso? Egli conosce quello che è davanti a loro e quello che è dietro di loro e, della Sua scienza,`,
        `essi apprendono solo ciò che Egli vuole. Il Suo Trono è più vasto dei cieli e della terra, e custodirli non Gli costa sforzo alcuno. Egli è l'Altissimo, l'Immenso`
      ],
      [
        `Bóg! Nie ma boga, jak tylko On - Żyjący, Istniejący! Nie chwyta Go ni drzemka, ni sen. Do Niego należy to, co jest w niebiosach, i to, co jest na ziemi!`,
        `A któż będzie się wstawiał u Niego inaczej jak za Jego zezwoleniem? On wie, co było przed nimi, i On wie, co będzie po nich. Oni nie obejmują niczego z Jego wiedzy,`,
        `oprócz tego, co On zechce. Jego tron jest tak rozległy jak niebiosa i ziemia; Jego nie męczy utrzymywanie ich. On jest Wyniosły, Ogromny`
      ],
      [
        `Аллаг! Немає бога, крім Нього — Живого, Сущого! Не торкається Його ні дрімота, ні сон. Йому належать те, що на небесах, і те, що на землі.`,
        `Хто ж заступиться перед Ним без Його дозволу? Він знає те, що попереду них, і те, що позаду них. Вони ж не осягають зі знання Його нічого,`,
        `крім того, що побажає Він. Престол Його охоплює небеса і землю, а збереження їх не втомлює Його. І Він — Всевишній, Великий`
      ]
    ],
    number: `سورة البقرة / Al-Baqarah، الآية 255`
  },

  {
    arabic: [
      `لَا إِكْرَاهَ فِي الدِّينِ ۖ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ`,
      `فَمَنْ يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِنْ بِاللَّهِ`,
      `فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انْفِصَامَ لَهَا ۗ وَاللَّهُ سَمِيعٌ عَلِيمٌ`
    ],
    translations: [
      [
        `There shall be no compulsion in [acceptance of] the religion. The right course has become clear from the wrong.`,
        `So whoever disbelieves in Taghut and believes in Allah has grasped the most trustworthy handhold with no break in it.`,
        `And Allah is Hearing and Knowing`
      ],
      [
        `Nulle contrainte en religion! Car le bon chemin s'est distingué de l'égarement.`,
        `Donc, quiconque mécroit au Rebelle tandis qu'il croit en Allah saisit l'anse la plus solide,`,
        `qui ne peut se briser. Et Allah est Audient et Omniscient`
      ],
      [
        `No cabe coacción en religión. La buena dirección se distingue claramente del descarrío.`,
        `Quien no cree en los taguts y cree en Alá,`,
        `ese tal se ase del asidero más firme, de un asidero irrompible. Alá todo lo oye, todo lo sabe`
      ],
      [
        `Нет принуждения в религии. Прямой путь уже отличился от заблуждения.`,
        `Кто не верует в тагута, а верует в Аллаха, тот ухватился за самую надежную рукоять,`,
        `которая никогда не сломается. Аллах - Слышащий, Знающий`
      ],
      [
        `Es gibt keinen Zwang im Glauben. (Der Weg der) Besonnenheit ist nunmehr klar unterschieden von (dem der) Verirrung.`,
        `Wer also falsche Götter verleugnet, jedoch an Allah glaubt,`,
        `der hält sich an der festesten Handhabe, bei der es kein Zerreißen gibt. Und Allah ist Allhörend und Allwissend`
      ],
      [
        `Tvång skall inte förekomma i trosfrågor. Vad som är rätt handlande är nu klart skilt från fel och synd.`,
        `Den som förnekar de onda makterna och som tror på Gud,`,
        `har sannerligen vunnit ett säkert fäste som aldrig ger vika. Gud hör allt, vet allt`
      ],
      [
        `Níl aon éigeantas sa reiligiún. Go deimhin, tá an treo ceart soiléir ón seachrán.`,
        `Mar sin, an té a dhiúltaíonn don Taghut agus a chreideann in Allah,`,
        `go deimhin tá greim aige ar an láimhseáil is láidre nach mbriseann. Agus is Éisteoir é Allah, Eolach.`
      ],
      [
        `Er is geen dwang in de godsdienst. Waarlijk, de rechte leiding is duidelijk onderscheiden van de dwaling,`,
        `en hij die de Thaghôet verwerpt en in Allah gelooft:`,
        `hij heeft zeker het stevigste houvast gegrepen, dat niet breken kan. En Allah is Alhorend, Alwetend`
      ],
      [
        `دین (اسلام) میں زبردستی نہیں ہے ہدایت (صاف طور پر ظاہر اور) گمراہی سے الگ ہو چکی`,
        `ہے تو جو شخص بتوں سے اعتقاد نہ رکھے اور خدا پر ایمان لائے اس نے ایسی مضبوط رسی ہاتھ`,
        `میں پکڑ لی ہے جو کبھی ٹوٹنے والی نہیں اور خدا (سب کچھ) سنتا اور (سب کچھ) جانتا ہے`
      ],
      [
        `Tidak ada paksaan dalam (menganut) agama (Islam), sesungguhnya telah jelas (perbedaan) antara jalan yang benar dengan jalan yang sesat.`,
        `Barang siapa ingkar kepada Tagut dan beriman kepada Allah, maka sungguh,`,
        `dia telah berpegang (teguh) pada tali yang sangat kuat yang tidak akan putus. Allah Maha Mendengar, Maha Mengetahui`
      ],
      [
        `Dinde zorlama yoktur; Artık hak ile batıl iyice ayrılmıştır.`,
        `Tağutu (saptırıcıları) inkar edip Allah'a inanan kimse,`,
        `kopmak bilmeyen sağlam bir kulpa sarılmıştır. Allah işitendir, bilendir`
      ],
      [
        `در دين هيچ اجبارى نيست. و راه از بيراهه بخوبى آشكار شده است.`,
        `پس هر كس به طاغوت كفر ورزد، و به خدا ايمان آورد، به يقين، به دستاويزى استوار،`,
        `كه آن را گسستن نيست، چنگ زده است. و خداوند شنواى داناست`
      ],
      [
        `দ্বীনের ব্যাপারে কোন জবরদস্তি বা বাধ্য-বাধকতা নেই। নিঃসন্দেহে হেদায়াত গোমরাহী থেকে`,
        `পৃথক হয়ে গেছে। এখন যারা গোমরাহকারী ‘তাগুত’দেরকে মানবে না এবং আল্লাহতে বিশ্বাস`,
        `স্থাপন করবে, সে ধারণ করে নিয়েছে সুদৃঢ় হাতল যা ভাংবার নয়। আর আল্লাহ সবই শুনেন এবং জানেন।`
      ],
      [
        `Não há compulsão na religião! Com efeito, distingue-se a retidão da depravação.`,
        `Então, quem renega os ídolos e crê em Allah, com efeito,`,
        `ater-se-á a firme alça irrompível. E Allah é Oniouvinte, Onisciente`
      ],
      [
        `对於宗教，绝无强迫；因为正邪确已分明了。`,
        `谁不信恶魔而信真主，谁确已把握住坚实的、`,
        `绝不断折的把柄。真主是全聪的，是全知的。`
      ],
      [
        `宗教には強制があってはならない。正に正しい道は誤りから明らかに（分別）されている。`,
        `それで邪神を退けてアッラーを信仰する者は，決して壊れることのない，`,
        `堅固な取っ手を握った者である。アッラーは全聴にして全知であられる。`
      ],
      [
        `종교에 강요란 없으니 올바름이 그릇됨으로부터 구분되었음이라.`,
        `그러니 우상을 불신하고 하나님을 믿는 자는 실로 부러짐이 없는 단단한 손잡이를 움켜쥔 것이라.`,
        `하나님께서는 들으시고 아시는 분이라`
      ],
      [
        `Non c'è costrizione nella religione. La retta via ben si distingue dall'errore.`,
        `Chi dunque rifiuta l'idolo e crede in Allah,`,
        `si aggrappa all'impugnatura più salda senza rischio di cedimenti. Allah è audiente, sapiente`
      ],
      [
        `Nie ma przymusu w religii! Prawość wyróżniła się od nieprawości. I ten,`,
        `kto odrzuca fałszywe bóstwa, a wierzy w Boga, uchwycił za najpewniejszy uchwyt,`,
        `nie mający żadnego pęknięcia. Bóg jest słyszący, wszechwiedzący`
      ],
      [
        `Немає примусу до релігії. Вже розрізнено прямий шлях та оману!`,
        `Хто не вірує у тагута, той вже вхопив надійну основу,`,
        `яка не зламається! Аллаг — Всечуючий та Всезнаючий`
      ]
    ],
    number: `سورة البقرة / Al-Baqarah، الآية 256`
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
        `Ní leagann Allah ualach ar anam thar a chumas.`,
        `Tá aige an méid a thuill sé, agus iompraíonn sé an méid a thuill sé.`,
        `A Thiarna, ná cuir an milleán orainn má dhéanaimid dearmad nó botún… A Thiarna, ná leag orainn ualach cosúil leis an ualach a leag Tú orthu siúd a bhí romhainn… Maith dúinn, loirg maitheanas dúinn agus déan trócaire orainn. Is Tú ár gCosantóir, mar sin tabhair dúinn bua ar an dream nach gcreideann.`
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
      ],
      [
        `خداوند هيچ كس را جز به قدر توانايى‌اش تكليف نمى‌كند. آنچه [از خوبى‌] به دست آورده به سود او، و آنچه [از بدى‌] به دست آورده به زيان اوست. پروردگارا،`,
        `اگر فراموش كرديم يا به خطا رفتيم بر ما مگير، پروردگارا، هيچ بار گرانى بر [دوش‌] ما مگذار؛ همچنانكه بر [دوش‌] كسانى كه پيش از ما بودند نهادى.`,
        `پروردگارا، و آنچه تاب آن نداريم بر ما تحميل مكن؛ و از ما درگذر؛ و ما را ببخشاى و بر ما رحمت آور؛ سرور ما تويى؛ پس ما را بر گروه كافران پيروز كن`
      ],
      [
        `আল্লাহ কাউকে তার সাধ্যাতীত কোন কাজের ভার দেন না, সে তাই পায় যা সে উপার্জন করে এবং তাই তার উপর বর্তায় যা সে করে। হে আমাদের পালনকর্তা, যদি আমরা ভুলে যাই কিংবা ভুল করি,`,
        `তবে আমাদেরকে অপরাধী করো না। হে আমাদের পালনকর্তা! এবং আমাদের উপর এমন দায়িত্ব অর্পণ করো না, যেমন আমাদের পূর্ববর্তীদের উপর অর্পণ করেছ, হে আমাদের প্রভূ! এবং আমাদের দ্বারা ঐ বোঝা বহন করিও না,`,
        `যা বহন করার শক্তি আমাদের নাই। আমাদের পাপ মোচন কর। আমাদেরকে ক্ষমা কর এবং আমাদের প্রতি দয়া কর। তুমিই আমাদের প্রভু। সুতরাং কাফের সম্প্রদায়ের বিরুদ্ধে আমাদের কে সাহায্যে কর।`
      ],
      [
        `Allah não impõe a alma alguma senão o que é de sua capacidade. A ela, o que logrou de bom e, contra ela, o que cometeu de mau E dizem: "Senhor nosso! Não nos culpes,`,
        `se esquecemos ou erramos. Senhor nosso! E não nos carregues de pesados fardos como deles carregaste aos que foram antes de nós. Senhor nosso!`,
        `E não nos carregues daquilo para o que não temos força. E indulta-nos e perdoa-nos e tem misericórdia de nós. Tu és nosso Protetor; então, socorre-nos contra o povo renegador da Fé`
      ],
      [
        `真主只依各人的能力而加以责成。各人要享受自己所行善功的奖赏，要遭遇自己所作罪恶的惩罚。我们的主啊！求你不要惩罚我们，`,
        `如果我们遗忘或错误。求你不要使我们荷负重担，犹如你使古人荷负它一样。我们的主啊！求你不要 使我们担负我们所不能胜任的。`,
        `求你恕饶我们，求你赦宥我们，求你怜悯我们。你是我们的保佑者，求你援助我们，以对抗不信道的民众。`
      ],
      [
        `アッラーは誰にも，その能力以上のものを負わせられない。（人びとは）自分の稼いだもので（自分を）益し，その稼いだもので（自分を）損う。「主よ，わたしたちがもし忘れたり，`,
        `過 ちを犯すことがあっても，咎めないで下さい。主よ，わたしたち以前の者に負わされたような重 荷を，わたしたちに負わせないで下さい。主よ，わたしたちの力でかなわないものを，担わせないで下さい。`,
        `わたしたちの罪障を消滅なされ，わたしたちを赦し，わたしたちに慈悲を御くだし下さい。あなたこそわたしたちの愛護者であられます。不信心の徒に対し，わたしたちを御助け下さい。」`
      ],
      [
        `하나님께서는 영혼에게 오직 감당할 수 있는 능력만큼만 짐 지우시니 그에게 도움이 되는 것은 그가 얻은 (좋은) 것이며 그에게 해가 되는 것은 그가 저지른 (나쁜) 것이라. 저희의 주님,`,
        `저희가 망각했거나 실수를 저지렀을 경우에는 저희를 힐책하지 말아 주십시오. 저희의 주님, 저희 이전의 자들에게 지우셨던 것과 같은 무거운 약속을 저희에게 지우지 말아 주십시오. 저희의 주님,`,
        `저희가 감당할 힘이 없는 것을 저희에게 짊어지우지 말아 주십시오. 저희에게 관용을 베풀어 주시고 저희를 용서해 주시며 저희에게 자비를 베풀어 주십시오. 당신께서는 저희의 가호자이십니다, 그러니 불신자 무리를 상대로 저희를 도와 주십시오`
      ],
      [
        `Allah non impone a nessun'anima al di là delle sue capacità. Quello che ognuno avrà guadagnato sarà a suo favore e ciò che avrà demeritato sarà a suo danno. “Signore,`,
        `non ci punire per le nostre dimenticanze e i nostri sbagli. Signore, non caricarci di un peso grave come quello che imponesti a coloro che furono prima di noi.`,
        `Signore, non imporci ciò per cui non abbiamo la forza. Assolvici, perdonaci, abbi misericordia di noi. Tu sei il nostro patrono, dacci la vittoria sui miscredenti.”`
      ],
      [
        `Bóg nie nakłada na duszę niczego więcej nad jej możliwości. Dla niej będzie to, co dla siebie zyskała; i przeciwko niej będzie to, co ona zyskała! Panie nasz!`,
        `Nie bierz nam za złe, jeśli zapomnieliśmy lub jeśli zgrzeszyliśmy! Panie nasz! Nie nakładaj na nas ciężaru, jak nałożyłeś na tych, którzy byli przed nami! Panie nasz!`,
        `Nie nakładaj na nas tego, czego my nie jesteśmy w stanie unieść! Odpuść nam, przebacz nam i zmiłuj się nad nami! Ty jesteś naszym Panem! Dopomóż nam przeciw ludowi niewiernych`
      ],
      [
        `Аллаг не вимагає від людини понад можливості її. За неї те, що здобула собі вона, і проти неї теж те, що здобула собі вона. «Господи наш!`,
        `Не карай нас за те, що забули ми або в чому помилилися! Господи наш! Не покладай на нас тягаря, який поклав Ти на тих, які жили раніше за нас.`,
        `І не покладай на нас того, на що не вистачить сил. Вибач нам, прости нас і змилуйся над нами! Ти — Захисник наш, тож допоможи нам проти невіруючих людей!»`
      ]
    ],
    number: `سورة البقرة / Al-Baqarah، الآية 286`
  },

  {
    arabic: [
      `رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا`,
      `وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً`,
      `إِنَّكَ أَنتَ الْوَهَّابُ`
    ],
    translations: [
      [
        `Our Lord, let not our hearts deviate after You have guided us`,
        `and grant us from Yourself mercy.`,
        `Indeed, You are the Bestower.`
      ],
      [
        `Seigneur, ne laisse pas dévier nos cœurs après que Tu nous aies guidés,`,
        `et accorde-nous Ta miséricorde.`,
        `C'est Toi, certes, le Grand Donateur.`
      ],
      [
        `¡Señor nuestro! No dejes que nuestros corazones se desvíen después de que nos has guiado,`,
        `y concédenos Tu misericordia.`,
        `Tú eres el Munífico.`
      ],
      [
        `Господи наш! Не уклоняй наши сердца после того, как Ты наставил нас на прямой путь,`,
        `и даруй нам милость от Тебя.`,
        `Воистину, Ты — Дарующий.`
      ],
      [
        `Unser Herr, lass unsere Herzen nicht abirren, nachdem Du uns rechtgeleitet hast,`,
        `und gewähre uns Barmherzigkeit von Dir aus.`,
        `Du bist der Schenkende.`
      ],
      [
        `Vår Herre, låt inte våra hjärtan avvika efter att Du har lett oss på rätt väg,`,
        `och skänk oss Din barmhärtighet.`,
        `Du är den Givmilde.`
      ],
      [
        `A Thiarna, ná lig dár gcroíthe dul ar seachrán tar éis duit sinn a threorú,`,
        `agus tabhair dúinn trócaire uait féin.`,
        `Go deimhin is Tusa an Bronntóir.`
      ],
      [
        `Onze Heer, laat onze harten niet afdwalen nadat U ons hebt geleid,`,
        `en schenk ons barmhartigheid van U.`,
        `U bent de Schenker.`
      ],
      [
        `اے ہمارے رب! ہدایت دینے کے بعد ہمارے دلوں کو ٹیڑھا نہ کر دے`,
        `اور ہمیں اپنے پاس سے رحمت عطا فرما۔`,
        `بے شک تو ہی بہت عطا کرنے والا ہے۔`
      ],
      [
        `(Mereka berdoa), "Ya Tuhan kami, janganlah Engkau condongkan hati kami kepada kesesatan setelah Engkau berikan petunjuk kepada kami,`,
        `dan karuniakanlah kepada kami rahmat dari sisi-Mu;`,
        `sesungguhnya Engkau-lah Maha Pemberi (karunia)."`
      ],
      [
        `Rabbimiz! Bizi doğru yola ilettikten sonra kalplerimizi eğriltme,`,
        `bize katından bir rahmet bağışla.`,
        `Şüphesiz sen çok bağışlayansın.`
      ],
      [
        `پروردگارا! پس از آنکه ما را هدایت کردی، دل‌های ما را منحرف مگردان`,
        `و از جانب خود رحمتی به ما ببخش.`,
        `به راستی که تو بسیار بخشنده‌ای.`
      ],
      [
        `হে আমাদের পালনকর্তা! হেদায়েত দানের পর আমাদের অন্তরকে সত্য লঙ্ঘনে প্রবৃত্ত করবেন না`,
        `এবং আপনার নিকট থেকে আমাদেরকে করুণা দান করুন।`,
        `নিশ্চয়ই আপনি সবকিছুর দাতা।`
      ],
      [
        `Senhor nosso, não deixes que os nossos corações se desviem depois de nos teres guiado,`,
        `e concede-nos misericórdia da Tua parte.`,
        `Por certo, Tu és o Prodigalizador.`
      ],
      [
        `我们的主啊！在你引导我们之后，求你不要使我们的心偏邪，`,
        `求你把你的慈恩赐予我们。`,
        `你确是博施的主。`
      ],
      [
        `主よ，あなたが私たちを導かれた後は，私たちの心を邪道に向けさせないで下さい。`,
        `そしてあなたの御許からの慈悲を私たちに授けて下さい。`,
        `本当にあなたは，授け主であられます。`
      ],
      [
        `주여, 당신께서 저희를 인도하신 뒤에는 저희 마음이 비뚤어지지 않게 하소서.`,
        `당신께로부터 자비를 내려 주소서.`,
        `진실로 당신은 베푸시는 분이십니다.`
      ],
      [
        `Signore, non lasciare che i nostri cuori deviino dopo che ci hai guidati,`,
        `e concedici la Tua misericordia.`,
        `In verità Tu sei il Munifico.`
      ],
      [
        `Panie nasz! Nie pozwól naszym sercom zbłądzić po tym, jak nas poprowadziłeś,`,
        `i obdarz nas miłosierdziem od Siebie.`,
        `Zaprawdę, Ty jesteś Ten, który daje bez miary.`
      ],
      [
        `Господи наш! Не збочуй наші серця після того, як Ти вказав нам прямий шлях,`,
        `і дарував нам милість від Тебе.`,
        `Воістину, Ти — Дарувальник.`
      ]
    ],
    number: `سورة آل عمران / Al-'Imran، الآية 8`
  },

  {
    arabic: [
      `إِنَّ الدِّينَ عِنْدَ اللَّهِ الْإِسْلَامُ ۗ`,
      `وَمَا اخْتَلَفَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِنْ بَعْدِ مَا جَاءَهُمُ الْعِلْمُ بَغْيًا بَيْنَهُمْ ۗ`,
      `وَمَنْ يَكْفُرْ بِآيَاتِ اللَّهِ فَإِنَّ اللَّهَ سَرِيعُ الْحِسَابِ`
    ],
    translations: [
      [
        `Indeed, the religion in the sight of Allah is Islam.`,
        `And those who were given the Scripture did not differ except after knowledge had come to them - out of jealous animosity between themselves.`,
        `And whoever disbelieves in the verses of Allah, then indeed, Allah is swift in [taking] account`
      ],
      [
        `Certes, la religion acceptée d'Allah, c'est l'Islam. Ceux auxquels le Livre a été apporté ne se sont disputés,`,
        `par agressivité entre eux, qu'après avoir reçu la science.`,
        `Et quiconque ne croit pas aux signes d'Allah... alors Allah est prompt à demander compte`
      ],
      [
        `Ciertamente, la Religión, para Alá, es el islam. Aquéllos a quienes se dio la Escritura no se opusieron unos a otros,`,
        `por rebeldía mutua, sino después de haber recibido la Ciencia.`,
        `Quien no cree en los signos de Alá,... Alá es rápido en ajustar cuentas`
      ],
      [
        `Воистину, религией у Аллаха является ислам. Те, кому было даровано Писание,`,
        `впали в разногласия только после того, как к ним явилось знание, по причине зависти и несправедливого отношения друг к другу.`,
        `Если кто не уверовал в знамения Аллаха, то ведь Аллах скор на расчет`
      ],
      [
        `Gewiß, die Religion ist bei Allah der Islam. Doch diejenigen, denen die Schrift gegeben wurde,`,
        `wurden erst uneinig, nachdem das Wissen zu ihnen gekommen war - aus Mißgunst untereinander,`,
        `Doch wer Allahs Zeichen verleugnet -, so ist Allah schnell im Abrechnen`
      ],
      [
        `För Gud är [den sanna] religionen underkastelse under Hans vilja;`,
        `de som [tidigare] tog emot uppenbarelsen kom att omfatta skilda meningar först efter att ha fått [all] kunskap och av ovilja och avund mot varandra.`,
        `Och den som vill förneka sanningen i Guds budskap [bör minnas att] Gud är snar att kalla till räkenskap`
      ],
      [
        `Go deimhin, is é an tIoslam an reiligiún i bhfianaise Allah.`,
        `Agus níor easaontaigh iad siúd a tugadh an Scrioptúr dóibh ach tar éis go dtáinig an t-eolas chucu, de bharr formaid eatarthu féin.`,
        `Agus an té a dhiúltaíonn do chomharthaí Allah, go deimhin tá Allah tapa ag glacadh cuntais.`
      ],
      [
        `Voorwaar,`,
        `de (enige) Godsdienst bij Allah is de Islam en degenen die de Schrift gegeven was verschilden (hierover) nadat de kennis tot hen gekomen was niet over van mening dan door onderlinge jaloezie.`,
        `En wie de Tekenen van Allah loochent: voorwaar, Allah is snel in de afrekening`
      ],
      [
        `دین تو خدا کے نزدیک اسلام ہے اور اہل کتاب نے جو (اس دین سے)`,
        `اختلاف کیا تو علم ہونے کے بعد آپس کی ضد سے کیا اور جو شخص خدا کی`,
        `آیتوں کو نہ مانے تو خدا جلد حساب لینے والا (اور سزا دینے والا) ہے`
      ],
      [
        `(Sesungguhnya agama di sisi Allah ialah Islam.`,
        `Tidaklah berselisih orang-orang yang telah diberi Kitab kecuali setelah mereka memperoleh ilmu, karena kedengkian di antara mereka.`,
        `Barang siapa ingkar terhadap ayat-ayat Allah, maka sungguh, Allah sangat cepat perhitungan-Nya`
      ],
      [
        `Allah katında din, şüphesiz İslam'dır. Ancak, Kitap verilenler,`,
        `kendilerine ilim geldikten sonra, aralarındaki ihtiras yüzünden ayrılığa düştüler.`,
        `Allah'ın ayetlerini kim inkar ederse bilsin ki, Allah hesabı çabuk görür`
      ],
      [
        `در حقيقت، دين نزد خدا همان اسلام است. و كسانى كه كتاب [آسمانى‌] به آنان داده شده،`,
        `با يكديگر به اختلاف نپرداختند مگر پس از آنكه علم براى آنان [حاصل‌] آمد،`,
        `آن هم به سابقه حسدى كه ميان آنان وجود داشت. و هر كس به آيات خدا كفر ورزد، پس [بداند] كه خدا زودشمار است`
      ],
      [
        `নিঃসন্দেহে আল্লাহর নিকট গ্রহণযোগ্য দ্বীন একমাত্র ইসলাম। এবং যাদের প্রতি কিতাব দেয়া হয়েছে তাদের নিকট প্রকৃত জ্ঞান আসার পরও ওরা মতবিরোধে লিপ্ত হয়েছে,`,
        `শুধুমাত্র পরস্পর বিদ্বেষবশতঃ,`,
        `যারা আল্লাহর নিদর্শনসমূহের প্রতি কুফরী করে তাদের জানা উচিত যে, নিশ্চিতরূপে আল্লাহ হিসাব গ্রহণে অত্যন্ত দ্রুত।`
      ],
      [
        `Por certo, a religião perante Allah é o Islam. E aqueles, aos quais fora concedido o Livro,`,
        `não discreparam senão após a ciência haver-lhes chegado, movidos por agressividade entre eles.`,
        `E quem renega os sinais de Allah, por certo, Allah é Destro no ajuste de contas`
      ],
      [
        `真主所喜悦的宗教，确是伊斯兰教。曾受天经的人，除在知识降临他们之后，`,
        `由于互相嫉妒外，对于伊斯兰教也没有异议。`,
        `谁不信真主的迹象，（真主不久就要惩治谁），因为真主确是清算神速的。`
      ],
      [
        `本当にアッラーの御許の教えは，イスラーム（主の意志に服従，帰依すること）である。`,
        `啓典を授けられた人びとが，知識が下った後に相争うのは，只かれらの間の妬みからである。`,
        `アッラーの印を拒否する者があれば，アッラーは本当に清算に迅速であられる。`
      ],
      [
        `실로 하나님께 있어 종교는 이슬람이라.`,
        `성서를 받은 자들이 의견을 달리함은 오직 그들에게 지식이 도래한 이후로서 그들 사이에 퍼진 적대심 때문이라.`,
        `하나님의 징표를 불신하는 자가 있다면 실로 하나님께서는 계산함에 가장 빠르신 분이라`
      ],
      [
        `Invero, la religione presso Allah è l'Islàm. Quelli che ricevettero la Scrittura caddero nella discordia,`,
        `nemici gli uni degli altri, solo dopo aver avuto la scienza.`,
        `Ma chi rifiuta i segni di Allah, [sappia che] Allah è rapido al conto`
      ],
      [
        `Religią prawdziwą w oczach Boga jest islam! Ci, którym została dana Księga,`,
        `przez zawiść poróżnili się między sobą, dopiero wtedy, gdy przyszła do nich wiedza.`,
        `A kto nie wierzy w znaki Boga... zaprawdę, Bóg jest szybki w rozrachunku`
      ],
      [
        `Воістину, релігія перед Аллагом — іслам! Ті, кому дано Писання,`,
        `розійшлися поміж собою через взаємну ненависть лише після того, як до них прийшло знання.`,
        `А якщо хто не вірує у знамення Аллага, то, воістину, Аллаг — швидкий у відплаті`
      ]
    ],
    number: `سورة آل عمران / Al-'Imran، الآية 19`
  },

  {
    arabic: [
      `قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ بَيْنَنَا`,
      `وَبَيْنَكُمْ أَلَّا نَعْبُدَ إِلَّا اللَّهَ وَلَا نُشْرِكَ بِهِ شَيْئًا وَلَا يَتَّخِذَ بَعْضُنَا بَعْضًا أَرْبَابًا مِنْ دُونِ اللَّهِ ۚ`,
      `فَإِنْ تَوَلَّوْا فَقُولُوا اشْهَدُوا بِأَنَّا مُسْلِمُونَ`
    ],
    translations: [
      [
        `Say, "O People of the Scripture,`,
        `come to a word that is equitable between us and you - that we will not worship except Allah and not associate anything with Him and not take one another as lords instead of Allah."`,
        `But if they turn away, then say, "Bear witness that we are Muslims [submitting to Him]`
      ],
      [
        `Dis: «O gens du Livre, venez à une parole commune entre nous et vous: que nous n'adorions qu'Allah,`,
        `sans rien Lui associer, et que nous ne prenions point les uns les autres pour seigneurs en dehors d'Allah».`,
        `Puis, s'ils tournent le dos, dites: «Soyez témoins que nous, nous sommes soumis»`
      ],
      [
        `Di: «¡Gente de la Escritura !Convengamos en una fórmula aceptable a nosotros y a vosotros,`,
        `según la cual no serviremos sino a Alá, no Le asociaremos nada y no tomaremos a nadie de entre nosotros como Señor fuera de Alá».`,
        `Y, si vuelven la espalda, decid: «¡Sed testigos de nuestra sumisión!»`
      ],
      [
        `Скажи: «О люди Писания! Давайте придем к единому слову для нас и для вас, о том, что мы не будем поклоняться никому,`,
        `кроме Аллаха, не будем приобщать к Нему никаких сотоварищей и не будем считать друг друга господами наряду с Аллахом».`,
        `Если же они отвернутся, то скажите: «Свидетельствуйте, что мы - мусульмане»`
      ],
      [
        `Sag: O Leute der Schrift, kommt her zu einem zwischen uns und euch gleichen Wort:`,
        `daß wir niemandem dienen außer Allah und Ihm nichts beigesellen und sich nicht die einen von uns die anderen zu Herren außer Allah nehmen.`,
        `Doch wenn sie sich abkehren, dann sagt: Bezeugt, daß wir (Allah) ergeben sind`
      ],
      [
        `Säg: "Efterföljare av äldre tiders uppenbarelser! Låt oss samlas kring en regel,`,
        `gemensam för oss och för er - att vi inte skall dyrka någon utom Gud och inte sätta något vid Guds sida och inte erkänna andra människor som våra herrar och beskyddare i Guds ställe."`,
        `Och säg, om de vänder er ryggen: "Vittna då, att det är vi som har underkastat oss Hans vilja`
      ],
      [
        `Abair: A Mhuintir an Scrioptúir, tagaigí chuig focal atá cothrom eadrainn agus eadraibh:`,
        `nach ndéanfaimid adhradh ach d'Allah amháin, nach gcuirfimid aon rud i gcomhpháirt leis, agus nach nglacfaidh cuid againn le cuid eile mar thiarnaí in ionad Allah.`,
        `Ach má iompaíonn siad ar shiúl, abraigí: Déanaigí finné gur Moslamaigh muid.`
      ],
      [
        `Zeg: "O Lieden van de Schrift, komt tot een gelijkluidend woord tussen ons en jullie:`,
        `dat wij niemand dan Allah aanbidden en dat wij niets naast Hem tot delgenoot maken en dat wij elkaar niet als heren naast Allah plaatsen."`,
        `Als zij zich dan afwenden, zegt dan: "Getuigt dat wij ons (aan Allah) overgegeven hebben`
      ],
      [
        `کہہ دو کہ اے اہل کتاب جو بات ہمارے اور تمہارے دونوں کے درمیان یکساں (تسلیم کی گئی) ہے اس کی طرف آؤ وہ یہ کہ خدا`,
        `کے سوا ہم کسی کی عبادت نہ کریں اور اس کے ساتھ کسی چیز کو شریک نہ بنائیں اور ہم میں سے کوئی کسی کو خدا کے سوا اپنا`,
        `کار ساز نہ سمجھے اگر یہ لوگ (اس بات کو) نہ مانیں تو (ان سے) کہہ دو کہ تم گواہ رہو کہ ہم (خدا کے) فرماں بردار ہیں`
      ],
      [
        `Katakanlah (Muhammad), "Wahai Ahli Kitab! Marilah (kita) menuju kepada satu kalimat (pegangan) yang sama antara kami dan kamu,`,
        `bahwa kita tidak menyembah selain Allah dan kita tidak mempersekutukan-Nya dengan sesuatu pun, dan bahwa kita tidak menjadikan satu sama lain tuhan-tuhan selain Allah.`,
        `Jika mereka berpaling maka katakanlah (kepada mereka), "Saksikanlah, bahwa kami adalah orang Muslim`
      ],
      [
        `De ki: "Ey Kitap ehli! Ancak Allah'a kulluk etmek, O'na bir şeyi eş koşmamak,`,
        `Allah'ı bırakıp birbirimizi rab olarak benimsememek üzere, bizimle sizin aranızda müşterek bir söze gelin".`,
        `Eğer yüz çevirirlerse: "Bizim müslüman olduğumuza şahid olun" deyin`
      ],
      [
        `بگو: «اى اهل كتاب، بياييد بر سر سخنى كه ميان ما و شما يكسان است بايستيم كه:`,
        `جز خدا را نپرستيم و چيزى را شريك او نگردانيم، و بعضى از ما بعضى ديگر را به جاى خدا به خدايى نگيرد.»`,
        `پس اگر [از اين پيشنهاد] اعراض كردند، بگوييد: «شاهد باشيد كه ما مسلمانيم [نه شما].»`
      ],
      [
        `বলুনঃ ‘হে আহলে-কিতাবগণ! একটি বিষয়ের দিকে আস-যা আমাদের মধ্যে ও তোমাদের মধ্যে সমান-যে,`,
        `আমরা আল্লাহ ছাড়া অন্য কারও ইবাদত করব না, তাঁর সাথে কোন শরীক সাব্যস্ত করব না এবং একমাত্র আল্লাহকে ছাড়া কাউকে পালনকর্তা বানাব না। তারপর যদি তারা স্বীকার না করে,`,
        `তাহলে বলে দাও যে, ‘সাক্ষী থাক আমরা তো অনুগত।`
      ],
      [
        `Dize: "Ó seguidores do Livro! Vinde a uma palavra igual entre nós e vós:`,
        `não adoremos senão a Allah, e nada Lhe associemos e não tomemos uns aos outros por senhores,`,
        `além de Allah." E, se voltarem as costas, dizei: "Testemunhai que somos muçulmanos`
      ],
      [
        `你说：信奉天经的人啊！你们来吧，让我们共同遵守一种双方认为公平的信条：`,
        `我们大家只崇拜真主，不以任何物配他，除真主外，不以同类为主宰。`,
        `如果他们背弃这种信条，那末，你们说：请你们作证我们是归顺的人。`
      ],
      [
        `言ってやるがいい。「啓典の民よ，わたしたちとあなたがたとの間の共通のことば（の下）に来なさい。`,
        `わたしたちはアッラーにだけ仕え，何ものをもかれに列しない。またわたしたちは アッラーを差し置いて，外のものを主として崇ない。`,
        `」それでもし，かれらが背き去るならば， 言ってやるがいい。「わたしたちはムスリムであることを証言する。」`
      ],
      [
        `그대(무함마드)는 말하라 : ‘성서의 사람들(유대교인과 기독교인)이여! 우리와 그대들 모두에게 공평한 다음의 말씀으로 오라 :`,
        `‘우리는 하나님 이외에 그 어떤 것도 경배하지 않고 그분께 대등한 존재를 두지 않으며 하나님이 아닌, 우리 중의 누군가를 주님으로 삼지 않겠노라.’`,
        `‘ 그 후에도 그들이 돌아선다면 그대들(무슬림들)은 말하라 : ‘그대들은 우리가 무슬림임을 증언하시오.’`
      ],
      [
        `Di': “O gente della Scrittura, addivenite ad una dichiarazione comune tra noi e voi:`,
        `[e cioè] che non adoreremo altri che Allah, senza nulla associarGli, e che non prenderemo alcuni di noi come signori all'infuori di Allah”.`,
        `Se poi volgono le spalle, allora dite: “Testimoniate che noi siamo musulmani”`
      ],
      [
        `Powiedz: "O ludu Księgi! Dochodźcie do słowa jednakowego dla was i dla nas: abyśmy nie czcili nikogo innego,`,
        `jak tylko Boga, abyśmy nie dodawali Jemu niczego za współtowarzyszy i aby jedni z nas nie brali sobie innych ' jako panów,`,
        `poza Bogiem." A jeśli oni się odwrócą, to powiedzcie: "Bądźcie świadkami, że my jesteśmy całkowicie poddani`
      ],
      [
        `Скажи: «О люди Писання! Прийдімо ж до єдиного слова між нами і між вами — що ми не будемо поклонятися нікому,`,
        `окрім Аллага, і не будемо нікого додавати Йому як рівного, і не будемо вважати за Господа когось іншого з нас чи з вас,`,
        `а тільки Аллага!» А якщо вони відвернуться, то скажи: «Засвідчіть же, що ми — віддані Йому!»`
      ]
    ],
    number: `سورة آل عمران / Al-'Imran، الآية 64`
  },

  {
    arabic: [
      `وَمَنْ يَبْتَغِ غَيْرَ الْإِسْلَامِ دِينًا`,
      `فَلَنْ يُقْبَلَ مِنْهُ`,
      `وَهُوَ فِي الْآخِرَةِ مِنَ الْخَاسِرِينَ`
    ],
    translations: [
      [
        `And whoever desires other than Islam as religion - never will it be accepted from him,`,
        `and he,`,
        `in the Hereafter, will be among the losers`
      ],
      [
        `Et quiconque désire une religion autre que l'Islam,`,
        `ne sera point agréé, et il sera,`,
        `dans l'au-delà, parmi les perdants`
      ],
      [
        `Si alguien desea una religión diferente`,
        `del islam, no se le aceptará y en`,
        `la otra vida será de los que pierdan`
      ],
      [
        `От того, кто ищет иную религию помимо ислама,`,
        `это никогда не будет принято,`,
        `и в Последней жизни он окажется среди потерпевших урон`
      ],
      [
        `Wer aber als Religion etwas anderes als den Islam begehrt,`,
        `so wird es von ihm nicht angenommen werden,`,
        `und im Jenseits wird er zu den Verlierern gehören`
      ],
      [
        `Om någon vill anta någon annan religion än`,
        `Islam kommer detta att vägras honom, och`,
        `i nästa liv skall han stå bland förlorarna`
      ],
      [
        `Agus an té a lorgaíonn aon reiligiún seachas an tIoslam,`,
        `ní ghlacfar leis uaidh,`,
        `agus sa Saol Eile beidh sé i measc na gcaillteoirí.`
      ],
      [
        `En wie er een andere godsdient dan de Islam`,
        `zoekt: het zal niet van hen aanvaard worden en`,
        `hij behoort in het Hiernamaals tot de verlizers`
      ],
      [
        `اور جو شخص اسلام کے سوا کسی اور دین کا طالب`,
        `ہوگا وہ اس سے ہرگز قبول نہیں کیا جائے گا اور`,
        `ایسا شخص آخرت میں نقصان اٹھانے والوں میں ہوگا`
      ],
      [
        `Dan barang siapa mencari agama selain Islam,`,
        `dia tidak akan diterima,`,
        `dan di akhirat dia termasuk orang yang rugi`
      ],
      [
        `Kim İslam'dan başka bir dine yönelirse,`,
        `onunki kabul edilmeyecektir.`,
        `O ahirette de kaybedenlerdendir`
      ],
      [
        `و هر كه جز اسلام، دينى [ديگر] جويد،`,
        `هرگز از وى پذيرفته نشود،`,
        `و وى در آخرت از زيانكاران است`
      ],
      [
        `যে লোক ইসলাম ছাড়া অন্য কোন ধর্ম`,
        `তালাশ করে, কস্মিণকালেও তা গ্রহণ করা`,
        `হবে না এবং আখেরাতে সে ক্ষতি গ্রস্ত।`
      ],
      [
        `E quem busca outra religião que o Islam,`,
        `ela não lhe será aceita e ele na Derradeira Vida,`,
        `será dos perdedores`
      ],
      [
        `舍伊斯教寻求别的宗教的人，`,
        `他所寻求的宗教，绝不被接受，`,
        `他在后世，是亏折的。`
      ],
      [
        `イスラーム以外の教えを追求する者は，`,
        `決して受け入れられない。また来世においては，`,
        `これらの者は失敗者の類である。`
      ],
      [
        `이슬람 이외의 것을 종교로 삼길 원하는`,
        `자가 있다면 그는 받아들여지지 않을 것이며`,
        `내세에서 손실자 중의 하나가 될 것이라`
      ],
      [
        `Chi vuole una religione diversa dall'Islàm,`,
        `il suo culto non sarà accettato,`,
        `e nell'altra vita sarà tra i perdenti`
      ],
      [
        `A od tego, kto poszukuje innej religii niż islam,`,
        `nie będzie ona przyjęta;`,
        `i on w życiu ostatecznym będzie w liczbie tych, którzy ponieśli stratę`
      ],
      [
        `Хто шукає іншої релігії замість ісламу,`,
        `від того не буде прийнято,`,
        `а в наступному житті він буде серед тих, хто втратив усе`
      ]
    ],
    number: `سورة آل عمران / Al-'Imran، الآية 85`
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
      `الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ`,
      `وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَاوَاتِ`,
      `وَالْأَرْضِ رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ`
    ],
    translations: [
      [
        `Who remember Allah while standing or sitting or [lying] on their sides and give thought to the creation of the heavens and the earth,`,
        `[saying], "Our Lord, You did not create this aimlessly;`,
        `exalted are You [above such a thing]; then protect us from the punishment of the Fire`
      ],
      [
        `qui, debout, assis, couchés sur leurs côtés,`,
        `invoquent Allah et méditent sur la création des cieux et de la terre (disant): «Notre Seigneur!`,
        `Tu n'as pas créé cela en vain. Gloire à Toi! Garde-nous du châtiment du Feu`
      ],
      [
        `que recuerdan a Alá de pie, sentados o echados,`,
        `y que meditan en la creación de los cielos y de la tierra:«¡Señor!`,
        `No has creado todo esto en vano ¡Gloria a Ti! ¡Presérvanos del castigo del Fuego!»`
      ],
      [
        `которые поминают Аллаха стоя,`,
        `сидя и на боку и размышляют о сотворении небес и земли: «Господь наш! Ты не сотворил это понапрасну.`,
        `Пречист Ты! Защити же нас от мучений в Огне`
      ],
      [
        `die Allahs stehend, sitzend und auf der Seite (liegend) gedenken und über die Schöpfung der Himmel und der Erde nachdenken:`,
        `"Unser Herr, Du hast (all) dies nicht umsonst erschaffen.`,
        `Preis sei Dir! Bewahre uns vor der Strafe des (Höllen)feuers`
      ],
      [
        `de som minns Gud när de står, när de sitter och när de lägger sig till vila, och som,`,
        `när de begrundar himlarnas och jordens skapelse [ber med dessa ord]: "Herre!`,
        `Du har inte skapat [allt] detta i blindo. Stor är Du i Din härlighet! Förskona oss från Eldens straff`
      ],
      [
        `Iad siúd a chuimhníonn ar Allah agus iad ina seasamh nó ina suí nó ina luí ar a dtaobh,`,
        `agus a mhachnaíonn ar chruthú na bhflaitheas agus na talún: A Thiarna,`,
        `ní gan chuspóir a chruthaigh Tú é seo; moladh duit! Mar sin, cosain sinn ó phionós na Tine.`
      ],
      [
        `Degenen die Allah gedenken terwijl zij staan en zitten on op hun zij liggen en nadenken over de schepping van de hemelen en de aarde,`,
        `(zeggend:) "Onze Heer,`,
        `U heeft dit (alles) niet voor niets geschapen, glorie zij U, bescherm ons dus tegen de bestraffing van de Hel`
      ],
      [
        `جو کھڑے اور بیٹھے اور لیٹے (ہر حال میں) خدا کو یاد کرتے اور آسمان اور زمین`,
        `کی پیدائش میں غور کرتے (اور کہتے ہیں) کہ اے پروردگار! تو نے اس (مخلوق) کو بے`,
        `فائدہ نہیں پیدا کیا تو پاک ہے تو (قیامت کے دن) ہمیں دوزخ کے عذاب سے بچائیو`
      ],
      [
        `(yaitu) orang-orang yang mengingat Allah sambil berdiri, duduk atau dalam keadaan berbaring,`,
        `dan mereka memikirkan tentang penciptaan langit dan bumi (seraya berkata), "Ya Tuhan kami,`,
        `tidaklah Engkau menciptakan semua ini sia-sia; Mahasuci Engkau, lindungilah kami dari azab neraka`
      ],
      [
        `Onlar ayakta iken, otururken, yan yatarken Allah'ı anarlar;`,
        `göklerin ve yerin yaratılışını düşünürler: "Rabbimiz!`,
        `Sen bunu boşuna yaratmadın, Sen münezzehsin. Bizi ateşin azabından koru`
      ],
      [
        `همانان كه خدا را [در همه احوال‌] ايستاده و نشسته، و به پهلو آرميده ياد مى‌كنند،`,
        `و در آفرينش آسمانها و زمين مى‌انديشند [كه:] پروردگارا،`,
        `اينها را بيهوده نيافريده‌اى؛ منزهى تو! پس ما را از عذاب آتش دوزخ در امان بدار`
      ],
      [
        `যাঁরা দাঁড়িয়ে, বসে, ও শায়িত অবস্থায় আল্লাহকে স্মরণ করে এবং চিন্তা গবেষণা করে আসমান ও জমিন সৃষ্টির বিষযে,`,
        `(তারা বলে) পরওয়ারদেগার!`,
        `এসব তুমি অনর্থক সৃষ্টি করনি। সকল পবিত্রতা তোমারই, আমাদিগকে তুমি দোযখের শাস্তি থেকে বাঁচাও।`
      ],
      [
        `Que se lembram de Allah, estando de pé e assentados e deitados ,`,
        `e refletem na criação dos céus e da terra e dizem: "Senhor nosso!`,
        `Não criaste tudo isto em vão. Glorificado sejas! Então, guarda-nos do castigo do Fogo`
      ],
      [
        `他们站着，坐着，躺着记念真主，并思维天地的创造，`,
        `（他们说）：我们的主啊！你没有徒然地创造这个世界。`,
        `我们赞颂你超绝万物，求你保护我们，免受火狱的刑罚。`
      ],
      [
        `または立ち，または座り，または横たわって（不断に）アッラーを唱念し，`,
        `天と地の創造に就いて考える者は言う。「主よ，あなたは徒らに，これを御創りになったのではないのです。`,
        `あなたの栄光を讃えます。火の懲罰からわたしたちを救って下さい。`
      ],
      [
        `그들은 서서도, 앉아서도, 누워서도 하나님을 기억하고 하늘과 대지의 창조에 관하여 숙고하는 자들이라.`,
        `“저희의 주님이시여! 당신께서는 아무 목적 없이 이것을 창조하신 것이 아닙니다.`,
        `완벽하신 당신이십니다! 그러니 불지옥의 벌으로부터 저희를 구해 주십시오.”`
      ],
      [
        `che in piedi, seduti o coricati su un fianco ricordano Allah e meditano sulla creazione dei cieli e della terra,`,
        `[dicendo]: “Signore,`,
        `non hai creato tutto questo invano. Gloria a Te! Preservaci dal castigo del Fuoco`
      ],
      [
        `Dla tych, którzy wspominają Boga, stojąc, siedząc i leżąc, dla tych,`,
        `którzy rozmyślają nad stworzeniem niebios i ziemi: Panie nasz!`,
        `Nie stworzyłeś tego nadaremnie. Niech Ci będzie chwała! Uchroń nas od kary ognia i`
      ],
      [
        `які згадують Аллага стоячи, сидячи та лежачи,`,
        `які роздумують над творінням небес і землі: «Господи наш!`,
        `Ти не створив усе це марно. Преславний Ти! Врятуй же нас від кари вогнем`
      ]
    ],
    number: `سورة آل عمران / Al-'Imran، الآية 191`
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
        `만약 그것이 하나님 외의 것으로부터 왔다면,`,
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
    arabic: [
      `وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ`,
      `ثُمَّ يَسْتَغْفِرِ اللَّهَ`,
      `يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا`
    ],
    translations: [
      [
        `And whoever does a wrong or wrongs himself`,
        `but then seeks forgiveness of Allah`,
        `will find Allah Forgiving and Merciful.`
      ],
      [
        `Quiconque commet un mal ou se fait du tort à lui-même,`,
        `puis demande pardon à Allah,`,
        `trouvera Allah Pardonneur et Miséricordieux.`
      ],
      [
        `Quien obra mal o se hace daño a sí mismo`,
        `y luego pide perdón a Alá`,
        `hallará a Alá indulgente, misericordioso.`
      ],
      [
        `Кто совершит зло или поступит несправедливо по отношению к самому себе,`,
        `а затем попросит прощения у Аллаха,`,
        `тот найдёт Аллаха Прощающим, Милосердным.`
      ],
      [
        `Und wer etwas Böses tut oder sich selbst Unrecht zufügt`,
        `und dann Allah um Vergebung bittet,`,
        `der wird Allah Allvergebend und Barmherzig finden.`
      ],
      [
        `Den som gör något ont eller handlar orätt mot sig själv`,
        `och sedan ber Gud om förlåtelse`,
        `skall finna Gud som den Förlåtande, den Barmhärtige.`
      ],
      [
        `Agus an té a dhéanann éagóir nó a dhéanann cré dó féin`,
        `ach a lorgaíonn logha ó Allah ina dhiaidh sin,`,
        `gheobhaidh sé Allah ina Logh agus ina Thrócaireach.`
      ],
      [
        `Wie een kwaad doet of zichzelf onrecht aandoet`,
        `en daarna Allah om vergeving vraagt,`,
        `zal Allah Vergevend en Barmhartig vinden.`
      ],
      [
        `اور جو کوئی برا کام کرے یا اپنی جان پر ظلم کرے`,
        `پھر اللہ سے بخشش مانگے`,
        `تو وہ اللہ کو بخشنے والا مہربان پائے گا۔`
      ],
      [
        `Barang siapa berbuat kejahatan dan menganiaya dirinya,`,
        `kemudian ia mohon ampun kepada Allah,`,
        `niscaya ia mendapati Allah Maha Pengampun, Maha Penyayang.`
      ],
      [
        `Kim bir kötülük yapar veya kendine zulmeder,`,
        `sonra Allah'tan bağışlanma dilerse,`,
        `Allah'ı çok bağışlayıcı, çok merhametli bulur.`
      ],
      [
        `و هر کس کار بدی انجام دهد یا بر خود ستم کند،`,
        `سپس از خداوند آمرزش بخواهد،`,
        `خداوند را آمرزنده و مهربان خواهد یافت.`
      ],
      [
        `যে ব্যক্তি কোন মন্দ কাজ করে অথবা নিজের উপর অত্যাচার করে,`,
        `অতঃপর আল্লাহর কাছে ক্ষমা প্রার্থনা করে,`,
        `সে আল্লাহকে ক্ষমাশীল, করুণাময় পাবে।`
      ],
      [
        `Quem comete uma maldade ou prejudica a si mesmo`,
        `e depois implora o perdão de Allah,`,
        `encontrará Allah Perdoador, Misericordioso.`
      ],
      [
        `谁作恶，或自欺，`,
        `而后向真主求饶，`,
        `谁将发现真主是至恕的，是至慈的。`
      ],
      [
        `誰でも悪事を行い，または自ら魂を損うことがあっても，`,
        `アッラーに赦しを請うならば，`,
        `アッラーが寛容にして慈悲深くあられることを知るであろう。`
      ],
      [
        `누구든 악을 행하거나 자신에게 해를 끼치고도`,
        `하나님께 용서를 구하면`,
        `하나님이 용서하시고 자비로우심을 알게 되리라.`
      ],
      [
        `Chi commette un male o fa torto a se stesso`,
        `e poi chiede perdono ad Allah,`,
        `troverà Allah indulgente e misericordioso.`
      ],
      [
        `Kto popełni zło albo skrzywdzi samego siebie,`,
        `a potem poprosi Allaha o przebaczenie,`,
        `ten znajdzie Allaha Przebaczającym, Litościwym.`
      ],
      [
        `Хто чинить зло або кривдить самого себе,`,
        `а потім просить у Аллаха прощення,`,
        `той знайде Аллаха Прощаючим, Милосердним.`
      ]
    ],
    number: `سورة النساء / An-Nisa، الآية 110`
  },

  {
    arabic: [
      `إِن يَشَأْ يُذْهِبْكُمْ أَيُّهَا النَّاسُ`,
      `وَيَأْتِ بِآخَرِينَ`,
      `وَكَانَ اللَّهُ عَلَىٰ ذَٰلِكَ قَدِيرًا`
    ],
    translations: [
      [
        `If He wills, He can remove you, O mankind,`,
        `and bring others in your place.`,
        `And Allah is over that, competent.`
      ],
      [
        `S'Il voulait, il vous ferait disparaître,`,
        `ô gens, et en ferait venir d'autres.`,
        `Car Allah en est très capable`
      ],
      [
        `¡Hombres! Si Él quisiera,`,
        `os haría desaparecer y os sustituiría por otros.`,
        `Alá es capaz de hacerlo`
      ],
      [
        `О люди! Если Он пожелает,`,
        `то уведет вас и приведет других.`,
        `Аллах способен на это`
      ],
      [
        `Wenn Er will, läßt Er euch vergehen,`,
        `ihr Menschen, und bringt andere.`,
        `Allah hat dazu die Macht`
      ],
      [
        `Om Han ville, kunde Han låta er,`,
        `människor, försvinna och låta ett nytt släkte uppstå.`,
        `Gud har makt att göra detta`
      ],
      [
        `Más mian leis, is féidir leis sibh a bhaint, a dhaoine uaisle,`,
        `agus daoine eile a thabhairt in bhur n-ionad.`,
        `Agus tá Allah in ann é sin a dhéanamh.`
      ],
      [
        `En indien Hij wilt, vernietigt Hij jullie,`,
        `O mensen, en vervangt Hij jullie.`,
        `En Allah heeft de macht om dat te doen`
      ],
      [
        `لوگو! اگر وہ چاہے تو تم کو فنا کردے`,
        `اور (تمہاری جگہ) اور لوگوں کو`,
        `پیدا کردے۔اور خدا اس بات پر قادر ہے`
      ],
      [
        `Kalau Allah menghendaki, niscaya dimusnahkan-Nya kamu semua wahai manusia!`,
        `Kemudian Dia datangkan (umat) yang lain (sebagai penggantimu).`,
        `Dan Allah Mahakuasa berbuat demikian`
      ],
      [
        `Ey İnsanlar!`,
        `Allah dilerse sizi yok eder, başkalarını getirir,`,
        `O, buna Kadir'dir`
      ],
      [
        `اى مردم، اگر [خدا] بخواهد،`,
        `شما را [از ميان‌] مى‌برد و ديگران را [پديد ] مى‌آورد،`,
        `و خدا بر اين [كار] تواناست`
      ],
      [
        `হে মানবকূল,`,
        `যদি আল্লাহ তোমাদেরকে সরিয়ে তোমাদের জায়গায় অন্য কাউকে প্রতিষ্ঠিত করেন?`,
        `বস্তুতঃ আল্লাহর সে ক্ষমতা রয়েছে।`
      ],
      [
        `Se Ele quisesse, far-vos-ia ir,`,
        `ó humanos, e faria vir outros em vosso lugar!`,
        `E Allah, sobre isso, é Onipotente`
      ],
      [
        `如果真主意欲，他就毁灭你们这些人，`,
        `而以别的民众代替你们。`,
        `真主对于这件事，是全能的。`
      ],
      [
        `もしかれが御望みになれば，あなたがたを滅ぼし，`,
        `外の民を招いてこられよう。`,
        `誠にアッラーは，それをする御力を持っておられる。`
      ],
      [
        `만일 그분의 뜻이라면 너희를 멸망케하고`,
        `다른 백성을 오게 하시니 하나님은 그렇게`,
        `할 수 있 는 완전한 권능이 있으시니라`
      ],
      [
        `Se volesse vi annienterebbe,`,
        `o uomini, e ne susciterebbe altri.`,
        `Allah ha tutto il potere di farlo`
      ],
      [
        `Jeśli On zechce, to was usunie,`,
        `o ludzie! i przyprowadzi innych.`,
        `Bóg jest w stanie to uczynić`
      ],
      [
        `Якщо Він побажає, то забере вас —`,
        `о люди! — і приведе нових.`,
        `Адже Аллаг спроможний на це`
      ]
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
        `만약 너희가 불신한다면 하늘과 땅에 있는 모든 것은 하나님의 것이다. 하나님는 전지전능하시다.`
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
    arabic: [
      `يَا أَيُّهَا النَّاسُ قَدْ جَاءَكُمْ بُرْهَانٌ مِنْ رَبِّكُمْ`,
      `وَأَنْزَلْنَا إِلَيْكُمْ نُورًا مُبِينًا`,
      ``
    ],
    translations: [
      [
        `O mankind,`,
        `there has come to you a conclusive proof from your Lord,`,
        `and We have sent down to you a clear light`
      ],
      [
        `O gens! Certes,`,
        `une preuve évidente vous est venue de la part de votre Seigneur.`,
        `Et Nous avons fait descendre vers vous une lumière éclatante`
      ],
      [
        `¡Hombres!`,
        `Os ha venido de vuestro Señor una prueba.`,
        `Y os hemos hecho bajar una Luz manifiesta`
      ],
      [
        `О люди!`,
        `К вам уже явилось доказательство от вашего Господа,`,
        `и Мы ниспослали вам ясный свет`
      ],
      [
        `O ihr Menschen,`,
        `zu euch ist nunmehr ein Beweis von eurem Herrn gekommen,`,
        `und Wir haben zu euch ein deutliches Licht hinabgesandt`
      ],
      [
        `MÄNNISKOR! Ni har tagit emot bevis [för`,
        `sanningen] från er Herre och Vi har gett`,
        `er ett klart ljus [som skall lysa er]`
      ],
      [
        `A dhaoine uaisle! Go deimhin,`,
        `tháinig fianaise chinnte chugaibh ó bhur dTiarna,`,
        `agus chuireamar solas follasach anuas chugaibh.`
      ],
      [
        `O mensen, er is voor jullie waarlijk een bewijs`,
        `van jullie Heer gekomen en Wij hebben een duidelijk`,
        `Licht (do Koran) over jullie doen neerdalen`
      ],
      [
        `لوگو تمہارے پروردگار کی طرف سے تمہارے پاس دلیل`,
        `(روشن) آچکی ہے اور ہم نے (کفر اور ضلالت کا اندھیرا`,
        `دور کرنے کو) تمہاری طرف چمکتا ہوا نور بھیج دیا ہے`
      ],
      [
        `Wahai manusia! Sesungguhnya telah sampai kepadamu bukti kebenaran dari Tuhanmu,`,
        `(Muhammad dengan mukjizatnya) dan telah Kami turunkan kepadamu cahaya yang terang benderang (Alquran)`,
        ``
      ],
      [
        `Ey İnsanlar!`,
        `Rabbiniz'den size açık bir delil geldi,`,
        `size apaçık bir nur, Kuran indirdik`
      ],
      [
        `اى مردم،`,
        `در حقيقت براى شما از جانب پروردگارتان برهانى آمده است،`,
        `و ما به سوى شما نورى تابناك فرو فرستاده‌ايم`
      ],
      [
        `হে মানবকুল! তোমাদের পরওয়ারদেগারের পক্ষ`,
        `থেকে তোমাদের নিকট সনদ পৌঁছে গেছে। আর আমি`,
        `তোমাদের প্রতি প্রকৃষ্ট আলো অবতীর্ণ করেছি।`
      ],
      [
        `Ó humanos! Com efeito,`,
        `chegou-vos uma provança de vosso Senhor,`,
        `e fizemos descer, para vós, evidente luz`
      ],
      [
        `众人啊！`,
        `从你们的主派遣来的明证确已来临你们，`,
        `我已降示你们一种明显的光明。`
      ],
      [
        `人びとよ，主から確証が既にあなたがたに齎されたのである。`,
        `われは明らかな光明をあなたがたに下したのである。`,
        ``
      ],
      [
        `백성들이여 주님으로부터 너희에게`,
        `증언이 도래하였으니 이는 하나님이`,
        `너희에게 광명을 주고자 함이라`
      ],
      [
        `Uomini! Vi è giunta una prova da parte del vostro Signore.`,
        `E abbiamo fatto scendere su di voi una Luce chiarissima`,
        ``
      ],
      [
        `O ludzie! Otrzymaliście`,
        `dowód od waszego Pana i`,
        `zesłaliśmy wam światło jasne`
      ],
      [
        `О люди!`,
        `Прийшов до вас доказ від Господа вашого!`,
        `І зіслали Ми вам світло ясне`
      ]
    ],
    number: `سورة النساء / An-Nisa، الآية 174`
  },

  {
    arabic: [
      `الْيَوْمَ يَئِسَ الَّذِينَ كَفَرُوا مِن دِينِكُمْ فَلَا تَخْشَوْهُمْ وَاخْشَوْنِ`,
      `الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي`,
      `وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا`
    ],
    translations: [
      [
        `This day those who disbelieve have given up [hope] of [defeating] your religion; so fear them not, but fear Me.`,
        `This day I have perfected for you your religion and completed My favor upon you`,
        `and have approved for you Islam as religion.`
      ],
      [
        `Aujourd'hui, ceux qui ont mécru désespèrent de [vous détourner de] votre religion. Ne les craignez donc pas, mais craignez-Moi.`,
        `Aujourd'hui, J'ai parachevé pour vous votre religion, accompli sur vous Mon bienfait`,
        `et agréé l'Islam comme religion pour vous.`
      ],
      [
        `Hoy los infieles han perdido la esperanza de [vencer] vuestra religión. No los temáis, pues, y temedme a Mí.`,
        `Hoy os he completado vuestra religión, he completado Mi gracia sobre vosotros`,
        `y me complace que el islam sea vuestra religión.`
      ],
      [
        `Сегодня неверующие отчаялись [одолеть] вашу религию. Не бойтесь их, а бойтесь Меня.`,
        `Сегодня Я завершил для вас вашу религию, довёл до конца Мою милость к вам`,
        `и одобрил для вас ислам в качестве религии.`
      ],
      [
        `Heute haben die Ungläubigen die Hoffnung auf eure Religion aufgegeben. So fürchtet sie nicht, sondern fürchtet Mich.`,
        `Heute habe Ich euch eure Religion vervollkommnet und Meine Gnade an euch vollendet`,
        `und euch den Islam als Religion gebilligt.`
      ],
      [
        `Idag har de otrogna förlorat hoppet om att kunna rubba er tro. Frukta därför inte dem utan frukta Mig.`,
        `Idag har Jag fullbordat er religion för er och fullkomnat Min nåd mot er`,
        `och godkänt islam som er religion.`
      ],
      [
        `Inniu tá éadóchas ar na díchreidmhigh i dtaobh bhur gcreidimh; mar sin ná bíodh eagla oraibh rompu, ach bíodh eagla oraibh romham.`,
        `Inniu rinne mé bhur gcreideamh foirfe daoibh agus chuir mé deireadh le mo bhuíochas oraibh`,
        `agus d'aontaigh mé gurb é an Ioslam bhur gcreideamh.`
      ],
      [
        `Heden hebben de ongelovigen de hoop opgegeven om uw godsdienst te schaden. Vrees hen dus niet, maar vrees Mij.`,
        `Heden heb Ik uw godsdienst voor u vervolmaakt en Mijn gunst aan u voltooid`,
        `en de Islam als godsdienst voor u goedgekeurd.`
      ],
      [
        `آج کافر تمہارے دین سے مایوس ہو چکے ہیں، پس ان سے نہ ڈرو اور مجھ سے ڈرو۔`,
        `آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا اور تم پر اپنی نعمت پوری کر دی`,
        `اور تمہارے لیے اسلام کو بطور دین پسند کر لیا۔`
      ],
      [
        `Pada hari ini orang-orang kafir telah putus asa untuk (mengalahkan) agamamu, sebab itu janganlah kamu takut kepada mereka, tetapi takutlah kepada-Ku.`,
        `Pada hari ini telah Kusempurnakan untuk kamu agamamu, dan telah Kucukupkan kepadamu nikmat-Ku,`,
        `dan telah Kuridai Islam itu jadi agama bagimu.`
      ],
      [
        `Bugün kâfirler, dininizden ümidi kesmişlerdir. Artık onlardan korkmayın, benden korkun.`,
        `Bugün size dininizi tamamladım, üzerinizdeki nimetimi bitirdim`,
        `ve sizin için din olarak İslam'ı seçtim.`
      ],
      [
        `امروز کافران از [شکست] دین شما ناامید شدند؛ پس از آنان نترسید و از من بترسید.`,
        `امروز دین شما را برایتان کامل کردم و نعمتم را بر شما تمام نمودم`,
        `و اسلام را به عنوان دین برای شما پسندیدم.`
      ],
      [
        `আজ কাফিররা তোমাদের দ্বীন থেকে নিরাশ হয়ে গেছে। অতএব তাদেরকে ভয় করো না, আমাকেই ভয় কর।`,
        `আজ আমি তোমাদের জন্যে তোমাদের দ্বীনকে পূর্ণাঙ্গ করে দিলাম এবং তোমাদের প্রতি আমার অবদান সম্পূর্ণ করে দিলাম`,
        `এবং ইসলামকে তোমাদের জন্য দ্বীন হিসেবে পছন্দ করলাম।`
      ],
      [
        `Hoje, os incrédulos perderam a esperança de vencer a vossa religião; não os temais, pois, e temei a Mim.`,
        `Hoje, completei para vós a vossa religião e consumei sobre vós a Minha graça`,
        `e aprovei para vós o Islão como religião.`
      ],
      [
        `今天，不信道者已对你们的宗教绝望了，故你们不要畏惧他们，而应畏惧我。`,
        `今天，我已为你们成全你们的宗教，已对你们完成我的恩典，`,
        `并已选择伊斯兰教为你们的宗教。`
      ],
      [
        `今日，不信心者たちはあなたがたの教えに就いて，既に失望した。だからかれらを恐れず，われを恐れなさい。`,
        `今日，われはあなたがたのために，あなたがたの教えを完成し，またあなたがたに対するわが恩恵を成就し，`,
        `あなたがたのための教えとして，イスラームを選んだ。`
      ],
      [
        `오늘 불신자들은 너희의 종교에 대해 절망하였나니 그들을 두려워하지 말고 나를 두려워하라.`,
        `오늘 나는 너희를 위해 너희의 종교를 완성하였고 너희에게 내 은혜를 다하였으며`,
        `너희를 위해 이슬람을 종교로 받아들였노라.`
      ],
      [
        `Oggi i miscredenti hanno perso ogni speranza riguardo alla vostra religione. Non temeteli, ma temete Me.`,
        `Oggi ho reso perfetta per voi la vostra religione e ho completato su di voi il Mio favore`,
        `e ho scelto per voi l'Islam come religione.`
      ],
      [
        `Dzisiaj niewierni stracili nadzieję co do waszej religii. Nie bójcie się ich, lecz bójcie się Mnie!`,
        `Dzisiaj udoskonaliłem dla was waszą religię i dopełniłem na was Moją łaskę,`,
        `i wybrałem dla was islam jako religię.`
      ],
      [
        `Сьогодні невіруючі втратили надію [здолати] вашу релігію. Тож не бійтеся їх, а бійтеся Мене.`,
        `Сьогодні Я завершив для вас вашу релігію, довершив Мою милість до вас`,
        `і схвалив для вас іслам як релігію.`
      ]
    ],
    number: `سورة المائدة / Al-Ma'idah، الآية 3 (جزء منها)`
  },

  {
    arabic: [
      `يَا أَهْلَ الْكِتَابِ قَدْ جَاءَكُمْ رَسُولُنَا يُبَيِّنُ لَكُمْ كَثِيرًا مِمَّا كُنْتُمْ تُخْفُونَ مِنَ الْكِتَابِ وَيَعْفُو عَنْ كَثِيرٍ ۚ قَدْ جَاءَكُمْ مِنَ اللَّهِ نُورٌ وَكِتَابٌ مُبِينٌ`,
      `يَهْدِي بِهِ اللَّهُ مَنِ اتَّبَعَ رِضْوَانَهُ سُبُلَ السَّلَامِ وَيُخْرِجُهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ بِإِذْنِهِ وَيَهْدِيهِمْ إِلَىٰ صِرَاطٍ مُسْتَقِيمٍ`,
      ``
    ],
    translations: [
      [
        `O People of the Scripture, there has come to you Our Messenger making clear to you much of what you used to conceal of the Scripture and overlooking much. There has come to you from Allah a light and a clear Book.`,
        `By which Allah guides those who pursue His pleasure to the ways of peace and brings them out from darknesses into the light, by His permission, and guides them to a straight path`,
        ``
      ],
      [
        `O gens du Livre! Notre Messager (Muhammad) vous est certes venu, vous exposant beaucoup de ce que vous cachiez du Livre, et passant sur bien d'autres choses! Une lumière et un Livre explicite vous sont certes venus d'Allah.`,
        `Par ceci (le Coran), Allah guide aux chemins du salut ceux qui cherchent Son agrément. Et Il les fait sortir des ténèbres à la lumière par Sa grâce. Et Il les guide vers un chemin droit`,
        ``
      ],
      [
        `¡Gente de la Escritura ! Nuestro Enviado ha venido a vosotros, aclarándoos mucho de lo que de la Escritura habíais ocultado y revocando mucho también. Os ha venido de Alá una Luz, una Escritura clara.`,
        `por medio de la cual Alá dirige a quienes buscan satisfacerle por caminos de paz y les saca, con Su permiso, de las tinieblas a la luz, y les dirige a una vía recta`,
        ``
      ],
      [
        `О люди Писания! К вам явился Наш Посланник, который разъясняет вам многое из того, что вы скрываете из Писания, и воздерживается от многого. Явились к вам от Аллаха свет (Мухаммад) и ясное Писание.`,
        `Посредством его Аллах ведет по путям мира тех, кто стремится снискать Его довольство. По Своему соизволению Он выводит их из мраков к свету и наставляет их на прямой путь`,
        ``
      ],
      [
        `O Leute der Schrift, Unser Gesandter ist nunmehr zu euch gekommen, um euch vieles von dem klarzumachen, was ihr von der Schrift verborgengehalten habt, und er vieles verzeiht. Gekommen ist, nunmehr zu euch von Allah ein Licht und ein deutliches Buch.`,
        `mit dem Allah diejenigen, die Seinem Wohlgefallen folgen, die Wege des Heils leitet und sie aus den Finsternissen hinaus mit Seiner Erlaubnis ins Licht bringt und sie zu einem geraden Weg leitet`,
        ``
      ],
      [
        `Efterföljare av äldre tiders uppenbarelser! Ett Sändebud från Oss har kommit till er [med budskap] som klargör för er mycket av det som ni har dolt [för er själva] i Skriften; mycket [annat] har förbigåtts. Gud har skänkt er ett [nytt] ljus och en klar Skrift.`,
        `med den visar Han dem som söker Hans välbehag till räddningens vägar och leder dem enligt Sin vilja ut ur mörkret till ljuset och till en rak väg`,
        ``
      ],
      [
        `A Mhuintir an Scrioptúir, tháinig ár dTeachtaire chugaibh, ag soiléiriú daoibh go leor den rud a bhíodh sibh ag cur i bhfolach den Scrioptúr, agus ag maitheamh go leor. Tháinig solas agus Leabhar soiléir chugaibh ó Allah.`,
        `A dtreoraíonn Allah leis an dream a lorgaíonn a thoil go dtí bealaí na síochána, agus a thugann Sé amach as na dorchadais isteach sa solas iad le a chead, agus a threoraíonn Sé chuig conair dhíreach iad.`,
        ``
      ],
      [
        `O Lieden van de Schrift! Waarlijk, Onze Boodschapper is tot jullie gekomen; hij heeft jullie veel duidelijk gemaakt van wat jullie in de Schrift verborgen, en hij heeft jullie veel kwijtgescholden. Waarlijk, er is van Allah een Licht (de Profeet) en een duidelijk Boek (de Koran) tot jullie gekomen.`,
        `Allah leidt hen ermee die Zijn welbehagen zoeken naar wegen van vrede en Hij brengt hen vanuit de duisternissen naar het Licht, met Zijn verlof, en Hij leidt hen naar een recht Pad`,
        ``
      ],
      [
        `اے اہل کتاب! تمہارے پاس ہمارے پیغمبر (آخرالزماں) آ گئے ہیں کہ جو کچھ تم کتاب (الہٰی) میں سے چھپاتے تھے وہ اس میں سے بہت کچھ تمہیں کھول کھول کر بتا دیتے ہیں اور تمہارے بہت سے قصور معاف کر دیتے ہیں بےشک تمہارے پاس خدا کی طرف سے نور اور روشن کتاب آ چکی ہے۔`,
        `جس سے خدا اپنی رضا پر چلنے والوں کو نجات کے رستے دکھاتا ہے اور اپنے حکم سے اندھیرے میں سے نکال کر روشنی کی طرف لے جاتا اور ان کو سیدھے رستہ پر چلاتا ہے`,
        ``
      ],
      [
        `Wahai Ahli Kitab! Sungguh, Rasul Kami telah datang kepadamu, menjelaskan kepadamu banyak hal dari (isi) kitab yang kamu sembunyikan, dan banyak (pula) yang dibiarkannya. Sungguh, telah datang kepadamu cahaya dari Allah, dan Kitab yang menjelaskan.`,
        `Dengan Kitab itulah Allah memberi petunjuk kepada orang yang mengikuti keridaan-Nya ke jalan keselamatan, dan (dengan Kitab itu pula) Allah mengeluarkan orang itu dari gelap gulita kepada cahaya dengan izin-Nya, dan menunjukkan ke jalan yang lurus`,
        ``
      ],
      [
        `Ey Kitap ehli! Kitap'dan gizleyip durduğunuzun çoğunu size açıkça anlatan ve çoğundan da geçiveren peygamberimiz gelmiştir. Doğrusu size Allah'tan bir nur ve apaçık bir Kitap gelmiştir.`,
        `Allah, rızasını gözetenleri onunla, selamet yollarına eriştirir ve onları, izni ile, karanlıklardan aydınlığa çıkarır. Onları doğru yola iletir`,
        ``
      ],
      [
        `اى اهل كتاب، پيامبر ما به سوى شما آمده است كه بسيارى از چيزهايى از كتاب [آسمانى خود] را كه پوشيده مى‌داشتيد براى شما بيان مى‌كند، و از بسيارى [خطاهاى شما] درمى‌گذرد. قطعاً براى شما از جانب خدا روشنايى و كتابى روشنگر آمده است.`,
        `خدا هر كه را از خشنودى او پيروى كند، به وسيله آن [كتاب‌] به راه‌هاى سلامت رهنمون مى‌شود، و به توفيق خويش، آنان را از تاريكيها به سوى روشنايى بيرون مى‌برد و به راهى راست هدايتشان مى‌كند`,
        ``
      ],
      [
        `হে আহলে-কিতাবগণ! তোমাদের কাছে আমার রাসূল আগমন করেছেন! কিতাবের যেসব বিষয় তোমরা গোপন করতে, তিনি তার মধ্য থেকে অনেক বিষয় প্রকাশ করেন এবং অনেক বিষয় মার্জনা করেন। তোমাদের কাছে একটি উজ্জল জ্যোতি এসেছে এবং একটি সমুজ্জল গ্রন্থ।`,
        `এর দ্বারা আল্লাহ যারা তাঁর সন্তুষ্টি কামনা করে, তাদেরকে নিরাপত্তার পথ প্রদর্শন করেন এবং তাদেরকে স্বীয় নির্দেশ দ্বারা অন্ধকার থেকে বের করে আলোর দিকে আনয়ন করেন এবং সরল পথে পরিচালনা করেন।`,
        ``
      ],
      [
        `Ó seguidores do Livro! Com efeito, Nosso Mensageiro chegou-vos, para tornar evidente, para vós, muito do que havíeis escondido do Livro, e para abrir mão de muito disso. Por certo, chegou-vos de Allah uma luz e evidente Livro.`,
        `Allah guia, com ele, os que seguem Seu agrado aos caminhos da paz; e fá-los sair, com Sua permissão, das trevas para a Luz, e guia-os a uma senda reta`,
        ``
      ],
      [
        `信奉天经的人啊！我的使者确已来临你们，他要为你们阐明你们所隐讳的许多经，并放弃许多经文，不加以揭发。有一道光明，和一部明确的经典，确已从真主降临你们。`,
        `真主要借这部经典指引追求其喜悦的人走上平安的道路，依自己的意志把他们从重重黑暗引入光明，并将他们引入正路。`,
        ``
      ],
      [
        `啓典の民（ユダヤ，キリスト教徒）よ，使徒（ムハンマド）が正にあなたがたの処へ来た。 あなたがたが啓典（律法，福音）の中の隠してきた多くのことをあなたがたに解明し，また多くのことをそのままにした。アッラーからの御光と，明瞭な啓典が今正にあなたがたに下ったので ある。`,
        `これによってアッラーは，御好みになる者を平安の道に導き，またその御許しによって，暗黒から光明に連れ出し，かれらを正しい道に導かれる。`,
        ``
      ],
      [
        `성서의 백성들이여 너희에 게 하나님의 선지자가 오셨나니 너희들이 성서에서 은닉했던 않은 것과 설명되지 아니한 많은 것들 을 밝혀 주리라 이렇게하여 하나 님으로부터빛과 성서가 너희에게 이르렀노라.`,
        `그것으로하여 하나님께서 는 그를 따르는 자를 평안의 길로 인도하시니 그들을 암흑에서 광명 으로 인도하사 바른길로 인도하시 니라`,
        ``
      ],
      [
        `O gente della Scrittura, ora è giunto a voi il Nostro Messaggero, per spiegarvi molte cose della Scrittura che voi nascondevate e per abrogarne molte altre! Una Luce e un Libro chiaro vi son giunti da Allah.`,
        `Con essi Allah guida sulla via della salvezza quelli che tendono al Suo compiacimento. Dalle tenebre li trae alla luce, per volontà Sua li guida sulla retta via`,
        ``
      ],
      [
        `O ludu Księgi! Nasz Posłaniec przyszedł do was, wyjaśniając wam wiele z tego, co wy ukrywaliście z Księgi, i wiele też zacieraliście. Przyszło do was światło od Boga i Księga jasna.`,
        `Przez nią prowadzi Bóg tych, którzy poszukują Jego zadowolenia, po drogach pokoju, wyprowadza ich z ciemności do światła i - za Jego zezwoleniem - prowadzi ich ku drodze prostej`,
        ``
      ],
      [
        `О люди Писання! Прийшов до вас Посланець Наш, щоб роз’яснити вам багато з того, що ви приховуєте з Писання, і щоб багато чого простити вам! Прийшло до вас світло від Аллага і ясне Писання.`,
        `яким веде Аллаг до шляхів миру тих, котрі шукають Його вдоволення. Виводить Він їх за Своїм наказом з темряви до світла й провадить їх до шляху прямого`,
        ``
      ]
    ],
    number: `سورة المائدة / Al-Ma'idah، الآيتان 15-16`
  },

  {
    arabic: [
      `وَإِذَا جَاءَكَ الَّذِينَ يُؤْمِنُونَ بِآيَاتِنَا فَقُلْ سَلَامٌ عَلَيْكُمْ ۖ`,
      `كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ ۖ`,
      `أَنَّهُ مَنْ عَمِلَ مِنْكُمْ سُوءًا بِجَهَالَةٍ ثُمَّ تَابَ مِنْ بَعْدِهِ وَأَصْلَحَ فَأَنَّهُ غَفُورٌ رَحِيمٌ`
    ],
    translations: [
      [
        `And when those come to you who believe in Our verses, say, "Peace be upon you.`,
        `Your Lord has decreed upon Himself mercy:`,
        `that any of you who does wrong out of ignorance and then repents after that and corrects himself - indeed, He is Forgiving and Merciful`
      ],
      [
        `Et lorsque viennent vers toi ceux qui croient à nos versets (le Coran), dis: «Que la paix soit sur vous!`,
        `Votre Seigneur S'est prescrit à Lui-même la miséricorde. Et quiconque d'entre vous a fait un mal par ignorance,`,
        `et ensuite s'est repenti et s'est réformé... Il est, alors, Pardonneur et Miséricordieux»`
      ],
      [
        `Cuando vengan a ti los que creen en Nuestros signos, di: «¡Paz sobre vosotros!»`,
        `Vuestro Señor Se ha prescrito la misericordia, de modo que si uno de vosotros obra mal por ignorancia,`,
        `pero luego se arrepiente y enmienda... Él es indulgente, misericordioso`
      ],
      [
        `Когда к тебе приходят те, которые уверовали в Наши знамения, говори им: «Мир вам!`,
        `Ваш Господь предписал себе быть Милосердным, и если кто из вас сотворит зло по своему невежеству,`,
        `а затем раскается и станет совершать праведные деяния, то ведь Он - Прощающий, Милосердный»`
      ],
      [
        `Und wenn diejenigen, die an Unsere Zeichen glauben, zu dir kommen, dann sag: Friede sei auf euch!`,
        `Euer Herr hat Sich Selbst Barmherzigkeit vorgeschrieben: Wer von euch in Unwissenheit Böses tut,`,
        `aber danach dann bereut und (es) wieder gutmacht, so ist Er Allvergebend und Barmherzig`
      ],
      [
        `Och när de som tror på Våra budskap kommer till dig, säg då: "Fred vare med er!`,
        `Er Herre har för Sig stadfäst nådens och barmhärtighetens [lag];`,
        `den av er som av okunnighet gör orätt och som därefter ångrar vad han gjort och vill bättra sig [skall finna] Honom ständigt förlåtande, barmhärtig`
      ],
      [
        `Agus nuair a thagann iad siúd a chreideann inár gcomharthaí chugat, abair: Síocháin oraibh.`,
        `D'ordaigh bhur dTiarna an trócaire air Féin:`,
        `an té ar bhur measc a dhéanann olc as aineolas agus a chaitheann aithrí ina dhiaidh sin agus a leasaíonn é féin, go deimhin tá Sé Maiteach, Trócaireach.`
      ],
      [
        `En wanneer degenen die in Onze Tekenen geloven tot jou komen, zeg dan: Salâmoen 'alaikoem (Vrede zij met jullie)."`,
        `Jullie Heer heeft Zichzelf de Barmhartigheid voorgeschreven.`,
        `Indien een van jullie uit onwetendheid slecht doet en dan daarna berouw heeft en zich betert: voorwaar, dan is Hij Vergeveinsgezind, Meest Barmhartig`
      ],
      [
        `اور جب تمہارے پاس ایسے لوگ آیا کریں جو ہماری آیتوں پر ایمان لاتے ہیں تو (ان سے) سلام علیکم`,
        `کہا کرو خدا نے اپنی ذات (پاک) پر رحمت کو لازم کرلیا ہے کہ جو کوئی تم میں نادانی سے کوئی`,
        `بری حرکت کر بیٹھے پھر اس کے بعد توبہ کرلے اور نیکوکار ہوجائے تو وہ بخشنے والا مہربان ہے`
      ],
      [
        `Dan apabila orang-orang yang beriman kepada ayat-ayat Kami datang kepadamu, maka katakanlah, "Salāmun 'alaikum" (selamat sejahtera untuk kamu)."`,
        `Tuhanmu telah menetapkan sifat kasih sayang pada diri-Nya, (yaitu) barang siapa berbuat kejahatan di antara kamu karena kebodohan,`,
        `kemudian dia bertobat setelah itu dan memperbaiki diri, maka Dia Maha Pengampun, Maha Penyayang`
      ],
      [
        `Ayetlerimize inananlar sana gelince: "Size selam olsun" de. Rabbiniz,`,
        `sizden kim bilmeyerek fenalık işler de arkasından tövbe eder ve nefsini düzeltirse,`,
        `ona rahmet etmeyi kendi üzerine almıştır. O, bağışlar ve merhamet eder`
      ],
      [
        `و چون كسانى كه به آيات ما ايمان دارند، نزد تو آيند، بگو: «درود بر شما»،`,
        `پروردگارتان رحمت را بر خود مقرّر كرده كه هر كس از شما به نادانى كار بدى كند و آنگاه به توبه و صلاح آيد،`,
        `پس وى آمرزنده مهربان است`
      ],
      [
        `আর যখন তারা আপনার কাছে আসবে যারা আমার নিদর্শনসমূহে বিশ্বাস করে,`,
        `তখন আপনি বলে দিনঃ তোমাদের উপর শান্তি বর্ষিত হোক। তোমাদের পালনকর্তা রহমত করা নিজ দায়িত্বে লিখে নিয়েছেন যে, তোমাদের মধ্যে যে কেউ অজ্ঞতাবশতঃ কোন মন্দ কাজ করে,`,
        `অনন্তর এরপরে তওবা করে নেয় এবং সৎ হয়ে যায়, তবে তিনি অত্যন্ত ক্ষমাশীল, করুণাময়।`
      ],
      [
        `E, quando os que crêem em Nossos sinais te chegarem, dize:`,
        `""Que a paz seja sobre vós! Vosso Senhor prescreveu a Si mesmo a misericórdia:`,
        `quem de vós faz um mal, por ignorância; em seguida, por certo Ele é`
      ],
      [
        `确信我的迹象的人来见你的时候，你说：祝你们平安。你们的主，`,
        `曾以慈悯为自己的责任。你们中谁无知地作恶，`,
        `然后悔过自新，真主必定赦宥谁，因为他确是至赦的，确是至慈的。`
      ],
      [
        `わが印を信じる者があなたの許に来たならば，言ってやるがいい。「あなたがたに平安あれ。`,
        `あなたがたの主は，慈悲を御自分の務めとされる。それであなたがたの中，無知で悪事を行った者も，`,
        `悔悟してその身を修めるならば（許される），本当にかれは寛容にして慈悲深くあられる。」`
      ],
      [
        `말씀을 믿는 이들이 그대에 게 왔을때 너희 위에 평화가 있을것이라 너희`,
        `주님은 자비를 베푸 시고자 현시하셨으니 너희 가운데알지 못하여 죄지은자`,
        `있다면 곧 회개하고 선을 행하라 실로 그분 은 관용과 자비로 충만하심이라`
      ],
      [
        `Quando vengono a te quelli che credono nei Nostri segni, di': “Pace su di voi!`,
        `Il vostro Signore Si è imposto la misericordia. Quanto a chi di voi commette il male per ignoranza e poi si pente e si corregge,`,
        `in verità Allah è perdonatore, misericordioso”`
      ],
      [
        `Kiedy przyjdą do ciebie ci; którzy wierzą w Nasze znaki, to powiedz: "Pokój wam!"`,
        `Wasz Pan przepisał samemu Sobie miłosierdzie. Tak aby ten spośród was, kto popełni zło przez nieświadomość,`,
        `następnie nawróci się i czyni dobro... zaprawdę, On jest przebaczający, litościwy`
      ],
      [
        `І коли до тебе приходять ті, які увірували в Наші знамення, то скажи: «Мир вам!`,
        `Ваш Господь зробив для Себе милість обов’язком; і як хто з вас вчинить зло через невігластво,`,
        `а потім покається й робитиме добро, то Він — Прощаючий, Милосердний!»`
      ]
    ],
    number: `سورة الأنعام / Al-An'am، الآية 54`
  },

  {
    arabic: [
      `وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ`,
      `وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا`,
      `وَلَا حَبَّةٍ فِي ظُلُمَاتِ الْأَرْضِ وَلَا رَطْبٍ وَلَا يَابِسٍ إِلَّا فِي كِتَابٍ مُّبِينٍ`
    ],
    translations: [
      [
        `And with Him are the keys of the unseen; none knows them except Him.`,
        `And He knows what is on the land and in the sea. Not a leaf falls but that He knows it.`,
        `And no grain is there within the darknesses of the earth and no moist or dry [thing] but that it is [written] in a clear record.`
      ],
      [
        `C'est Lui qui détient les clefs de l'Inconnaissable: nul ne les connaît hormis Lui.`,
        `Il sait ce qui est sur terre et dans la mer. Pas une feuille ne tombe sans qu'Il le sache.`,
        `Il n'est pas de grain dans les ténèbres de la terre, rien de frais ou de sec qui ne soit consigné dans un Livre explicite.`
      ],
      [
        `Él posee las llaves de lo oculto; nadie las conoce salvo Él.`,
        `Conoce lo que hay en la tierra firme y en el mar. No cae una hoja sin que Él lo sepa.`,
        `No hay grano en las tinieblas de la tierra ni nada fresco o seco que no esté en un Libro claro.`
      ],
      [
        `У Него ключи тайного; никто не знает их, кроме Него.`,
        `Он знает всё, что есть на суше и в море. Ни один лист не упадёт без Его ведома.`,
        `Нет ни зёрнышка во мраке земли, ни сочного, ни сухого, что не было бы в ясном Писании.`
      ],
      [
        `Bei Ihm sind die Schlüssel zum Verborgenen; niemand kennt sie außer Ihm.`,
        `Er weiß, was auf dem Festland und im Meer ist. Kein Blatt fällt, ohne dass Er es weiß.`,
        `Und kein Korn in den Finsternissen der Erde und nichts Frisches und nichts Trockenes gibt es, das nicht in einem deutlichen Buch stünde.`
      ],
      [
        `Hos Honom finns det fördolda gömt; ingen känner till det utom Han.`,
        `Han vet vad som finns på land och i havet. Inte ett löv faller utan att Han vet om det.`,
        `Inte ett korn i jordens mörker och ingenting grönt eller torrt finns som inte står i en tydlig skrift.`
      ],
      [
        `Aige Siúd atá eochracha an doiligh; níl a fhios ag aon duine iad ach Seisean.`,
        `Tá a fhios aige cad atá ar tír agus ar muir. Ní thiteann duilleog gan go bhfuil a fhios aige.`,
        `Níl gráinne i dorchadas na talún, ná aon rud úr ná tirim, nach bhfuil i leabhar soiléir.`
      ],
      [
        `Bij Hem zijn de sleutels van het onzienlijke; niemand kent ze behalve Hij.`,
        `Hij weet wat er op het land en in de zee is. Er valt geen blad of Hij weet het.`,
        `Er is geen korrel in de duisternissen van de aarde, en niets vochtigs of dorres, of het staat in een duidelijk Boek.`
      ],
      [
        `اور اسی کے پاس غیب کی کنجیاں ہیں، انہیں اس کے سوا کوئی نہیں جانتا۔`,
        `اور وہ جانتا ہے جو کچھ خشکی اور سمندر میں ہے، اور کوئی پتا نہیں گرتا مگر وہ اسے جانتا ہے۔`,
        `اور زمین کے اندھیروں میں کوئی دانہ اور نہ کوئی تر اور نہ خشک چیز ہے مگر وہ ایک روشن کتاب میں (لکھی) ہے۔`
      ],
      [
        `Dan pada sisi Allah-lah kunci-kunci semua yang gaib; tidak ada yang mengetahuinya kecuali Dia sendiri.`,
        `Dan Dia mengetahui apa yang di daratan dan di lautan, dan tiada sehelai daun pun yang gugur melainkan Dia mengetahuinya,`,
        `dan tidak jatuh sebutir biji pun dalam kegelapan bumi dan tidak sesuatu yang basah atau yang kering, melainkan tertulis dalam Kitab yang nyata (Lauh Mahfuz).`
      ],
      [
        `Gaybın anahtarları O'nun katındadır; onları O'ndan başkası bilmez.`,
        `Karada ve denizde olanı bilir. O'nun bilgisi dışında bir yaprak bile düşmez.`,
        `Yerin karanlıklarındaki bir tane, yaş ya da kuru hiçbir şey yoktur ki apaçık bir kitapta bulunmasın.`
      ],
      [
        `و کلیدهای غیب نزد اوست؛ جز او کسی آنها را نمی‌داند.`,
        `و آنچه در خشکی و دریاست می‌داند و هیچ برگی نمی‌افتد مگر آنکه او آن را می‌داند،`,
        `و هیچ دانه‌ای در تاریکی‌های زمین و هیچ تر و خشکی نیست مگر آنکه در کتابی روشن [ثبت] است.`
      ],
      [
        `তাঁর কাছেই অদৃশ্য জগতের চাবিকাঠি রয়েছে, এগুলো তিনি ব্যতীত অন্য কেউ জানে না।`,
        `স্থলে ও সমুদ্রে যা আছে তিনিই জানেন। কোন পাতা ঝরে না, কিন্তু তিনি তা জানেন।`,
        `মৃত্তিকার অন্ধকারে কোন দানা পতিত হয় না এবং কোন আর্দ্র ও শুষ্ক দ্রব্য পতিত হয় না, কিন্তু তা সব স্পষ্ট কিতাবে রয়েছে।`
      ],
      [
        `Com Ele estão as chaves do invisível; ninguém as conhece senão Ele.`,
        `Ele sabe o que há na terra e no mar. Não cai uma folha sem que Ele o saiba.`,
        `Nem um grão nas trevas da terra, nem algo úmido ou seco, que não esteja num Livro evidente.`
      ],
      [
        `幽玄的宝藏，只在他那里，除他外，谁也不知道。`,
        `他知道陆上和海中的一切事物，没有一片树叶脱落，而他不知道的；`,
        `在大地的重重黑暗中，没有一粒种子，没有一件湿的或干的东西，而不记录在一本明白的天经里。`
      ],
      [
        `幽玄界の鍵は，かれのみがこれを持つ。かれの外に誰もそれを知らない。`,
        `かれは陸と海にあるものを知っておられる。一枚の木の葉も，かれが知らずに落ちることはない。`,
        `大地の暗闇の中の一粒の種も，湿ったものも乾いたものも，明白な書の中に記されていないものはない。`
      ],
      [
        `은밀한 것의 열쇠는 그분께 있으니 그분 외에는 아무도 그것을 알지 못하노라.`,
        `그분은 육지와 바다에 있는 것을 아시며 그분이 알지 못하고서는 나뭇잎 하나도 떨어지지 않으며`,
        `땅속 어둠 속의 낟알 하나도, 젖은 것이든 마른 것이든 분명한 책에 기록되지 않은 것이 없느니라.`
      ],
      [
        `Presso di Lui sono le chiavi dell'invisibile; nessuno le conosce all'infuori di Lui.`,
        `Egli conosce ciò che è sulla terra e nel mare. Non cade foglia senza che Egli la conosca.`,
        `Non c'è chicco nelle tenebre della terra, né cosa fresca o secca, che non sia in un Libro chiaro.`
      ],
      [
        `U Niego są klucze do tego, co skryte; nikt ich nie zna oprócz Niego.`,
        `On wie, co jest na lądzie i w morzu. I nie spada żaden liść, o którym by On nie wiedział.`,
        `Nie ma ziarna w ciemnościach ziemi ani niczego świeżego czy suchego, czego nie byłoby w Księdze jasnej.`
      ],
      [
        `У Нього ключі від потаємного; ніхто не знає їх, крім Нього.`,
        `Він знає все, що є на суші й у морі. Жоден листок не впаде без Його відома.`,
        `Немає зерна в темряві землі, ні свіжого, ні сухого, що не було б у ясному Писанні.`
      ]
    ],
    number: `سورة الأنعام / Al-An'am، الآية 59 (جزء منها)`
  },

  {
    arabic: [
      `ذَٰلِكُمُ اللَّهُ رَبُّكُمْ ۖ لَا إِلَٰهَ إِلَّا هُوَ ۖ خَالِقُ كُلِّ شَيْءٍ فَاعْبُدُوهُ ۚ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ وَكِيلٌ`,
      `لَا تُدْرِكُهُ الْأَبْصَارُ وَهُوَ يُدْرِكُ الْأَبْصَارَ ۖ وَهُوَ اللَّطِيفُ الْخَبِيرُ`,
      ``
    ],
    translations: [
      [
        `That is Allah, your Lord; there is no deity except Him, the Creator of all things, so worship Him. And He is Disposer of all things.`,
        `Vision perceives Him not, but He perceives [all] vision; and He is the Subtle, the Acquainted`,
        ``
      ],
      [
        `Voilà Allah, votre Seigneur! Il n'y a de divinité que Lui, Créateur de tout. Adorez-Le donc. C'est Lui qui a charge de tout.`,
        `Les regards ne peuvent l'atteindre, cependant qu'Il saisit tous les regards. Et Il est le Doux, le Parfaitement Connaisseur`,
        ``
      ],
      [
        `Ése es Alá, vuestro Señor. No hay más dios que Él. Creador de todo. ¡Servidle, pues! Él vela por todo.`,
        `La vista no Le alcanza, pero Él sí que alcanza la vista. Es el Sutil, el Bien Informado`,
        ``
      ],
      [
        `Таков Аллах, ваш Господь. Нет божества, кроме Него, Творца всякой вещи. Поклоняйтесь же Ему! Он является Попечителем и Хранителем всякой вещи.`,
        `Взоры не могут постичь Его, а Он постигает взоры. Он - Проницательный (или Добрый), Сведущий`,
        ``
      ],
      [
        `Dies ist doch Allah, euer Herr. Es gibt keinen Gott außer Ihm, dem Schöpfer von allem. So dient Ihm! Er ist Sachwalter über alles.`,
        `Die Blicke erfassen Ihn nicht, Er aber erfaßt die Blicke. Und Er ist der Feinfühlige und Allkundige`,
        ``
      ],
      [
        `Detta är Gud, er Herre. Det finns ingen annan gud än Han, alltings Skapare. Tillbe Honom som har allt under sitt beskydd.`,
        `Människans öga ser Honom inte, men Han ser allt vad ett människoöga kan se. Han är den Outgrundlige som genomskådar allt och är underrättad om allt`,
        ``
      ],
      [
        `Sin é Allah, bhur dTiarna; níl aon dia ach Eisean, Cruthaitheoir gach ruda, mar sin déanaigí adhradh Air. Agus is Eisean Cúramóir gach ruda.`,
        `Ní thuigeann súile Eisean, ach tuigeann Seisean na súile; agus is Eisean an Cineálta, an tEolach.`,
        ``
      ],
      [
        `Dat is Allah, jullie Heer! Er is geen god dan Hij, Schepper van alles: aanbidt Hein dus. En Hij is over alle zaken Toezichthouder.`,
        `Geen blik kan Hem bereiken, maar Hij bereikt de blik (van iedereen); en Hij is de Zachtmoedige, de Alwetende`,
        ``
      ],
      [
        `یہی (اوصاف رکھنے والا) خدا تمہارا پروردگار ہے۔ اس کے سوا کوئی معبود نہیں۔ (وہی) ہر چیز کا پیداکرنے والا (ہے) تو اسی کی عبادت کرو۔ اور وہ ہر چیز کا نگراں ہے۔`,
        `(وہ ایسا ہے کہ) نگاہیں اس کا ادراک نہیں کرسکتیں اور وہ نگاہوں کا ادراک کرسکتا ہے اور وہ بھید جاننے والا خبردار ہے`,
        ``
      ],
      [
        `Itulah Allah, Tuhan kamu; tidak ada tuhan selain Dia; Pencipta segala sesuatu, maka sembahlah Dia; Dialah Pemelihara segala sesuatu.`,
        `Dia tidak dapat dicapai oleh penglihatan mata, sedang Dia dapat melihat segala penglihatan itu dan Dialah Yang Mahahalus, Mahateliti`,
        ``
      ],
      [
        `İşte Rabbiniz, Allah budur. O'ndan başka tanrı yoktur, her şeyin yaratanıdır. Öyleyse O'na kulluk edin; O her şeye de vekildir.`,
        `Gözler O'nu görmez, O bütün gözleri görür. O Latif'tir, haberdardır`,
        ``
      ],
      [
        `اين است خدا، پروردگار شما: هيچ معبودى جز او نيست، آفريننده هر چيزى است. پس او را بپرستيد، و او بر هر چيزى نگهبان است.`,
        `چشمها او را درنمى‌يابند و اوست كه ديدگان را درمى‌يابد، و او لطيف آگاه است`,
        ``
      ],
      [
        `তিনিই আল্লাহ তোমাদের পালনকর্তা। তিনি ব্যতীত কোন উপাস্য নেই। তিনিই সব কিছুর স্রষ্টা। অতএব, তোমরা তাঁরই এবাদত কর। তিনি প্রত্যেক বস্তুর কার্যনির্বাহী।`,
        `দৃষ্টিসমূহ তাঁকে পেতে পারে না, অবশ্য তিনি দৃষ্টিসমূহকে পেতে পারেন। তিনি অত্যন্ত সুক্ষদর্শী, সুবিজ্ঞ।`,
        ``
      ],
      [
        `Esse é Allah, vosso Senhor. Não existe deus senão Ele, Criador de todas as cousas: então, adorai-O. E Ele, sobre todas as cousas, é Patrono.`,
        `As vistas não O atingem enquanto Ele atinge todas as vistas. E Ele é O Sutil, O Conhecedor`,
        ``
      ],
      [
        `这是真主，你们的主，除他外，绝无应受崇拜的。他是万物的创造者，故你们当拜他。他是万物的监护者。`,
        `众目不能见他，他却能见众目。他是精明的，是彻知的。`,
        ``
      ],
      [
        `それがアッラー，あなたがたの主である。かれの外に神はないのである。凡てのものの創造者である。だからかれに仕えなさい。かれは凡てのことを管理なされる。`,
        `視覚ではかれを捉えることはできない。だがかれは視覚そのものさえ捉える。またかれはすべてのことを熟知され，配慮されておられる。`,
        ``
      ],
      [
        `그분이 하나님이사 너희 주님이시거늘 그분 외에는 신이 없 으니 그분께서 만물을 창조하셨노 라 그럼으로 그분을 경배하라 그 분이 모든 것을 주관하시니라.`,
        `하나님을 인식 할 수 있는 시각은 없으나 그분에게는 모든 시각이 있으시니 그분은 자비와 아심으로 충만하심이라`,
        ``
      ],
      [
        `Ecco il vostro Signore! Non c'è altro dio che Lui, il Creatore di tutte le cose. AdorateLo dunque. È Lui che provvede ad ogni cosa.`,
        `Gli sguardi non lo raggiungono, ma Egli scruta gli sguardi. È il Perspicace, il Ben Informato`,
        ``
      ],
      [
        `Oto wasz Bóg, wasz Pan! Nie ma boga, jak tylko On, Stwórca każdej rzeczy! Więc czcijcie Go! On jest poręczycielem każdej rzeczy.`,
        `Nie dosięgają Go spojrzenia, lecz On dosięga spojrzenia. On jest Przenikliwy, Świadomy`,
        ``
      ],
      [
        `Такий Аллаг, ваш Господь; немає бога, крім Нього, Творця кожної речі; тож поклоняйтеся Йому! Він — Опікун кожної речі.`,
        `Погляди не осягають Його, це Він осягає погляди! Він — Проникливий, Всевідаючий`,
        ``
      ]
    ],
    number: `سورة الأنعام / Al-An'am، الآيتان 102-103`
  },

  {
    arabic: [
      `مَن جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا`,
      `وَمَن جَاءَ بِالسَّيِّئَةِ فَلَا يُجْزَىٰ إِلَّا مِثْلَهَا`,
      `وَهُمْ لَا يُظْلَمُونَ`
    ],
    translations: [
      [
        `Whoever brings a good deed shall have ten times the like thereof to his credit,`,
        `and whoever brings an evil deed shall have only the recompense of the like thereof,`,
        `and they will not be wronged.`
      ],
      [
        `Quiconque viendra avec le bien aura dix fois autant;`,
        `et quiconque viendra avec le mal ne sera rétribué que par son équivalent.`,
        `Et on ne leur fera aucune injustice`
      ],
      [
        `Quien presente una buena obra, recibirá diez veces más.`,
        `Y quien presente una mala obra,`,
        `será retribuido con sólo una pena semejante. No serán tratados injustamente`
      ],
      [
        `Кто явится с добрым деянием, тот получит десятикратное воздаяние.`,
        `А кто явится со злым деянием,`,
        `тот получит только соответствующее воздаяние, и с ними не поступят несправедливо`
      ],
      [
        `Wer mit (etwas) Gutem kommt, erhält zehnmal soviel.`,
        `Und Wer mit einer bösen Tat kommt, dem wird nur gleichviel vergolten,`,
        `und es wird ihnen kein Unrecht zugefügt`
      ],
      [
        `Den som [på Räkenskapens dag] för med sig en god handling skall belönas`,
        `tiofalt, men den som för med sig en dålig handling skall bara straffas`,
        `med vad som motsvarar denna handling och ingen orätt skall tillfogas dem`
      ],
      [
        `An té a thugann gníomh maith leis, beidh deich n-uaire a leithéid aige,`,
        `agus an té a thugann drochghníomh leis, ní bheidh air ach a leithéid mar chúiteamh,`,
        `agus ní dhéanfar éagóir orthu.`
      ],
      [
        `Wie met een pede (daad) komt; voor hem is er (een beloning) als van tien daarvan;`,
        `en wie met een slechte (daad) komt,`,
        `dit wordt dan slechts vergolden met het gelijke, en hun zal geen onrecht worden amgedaan`
      ],
      [
        `اور جو کوئی (خدا کے حضور) نیکی لے کر آئے گا اس کو`,
        `ویسی دس نیکیاں ملیں گی اور جو برائی لائے گا اسے`,
        `سزا ویسے ہی ملے گی اور ان پر ظلم نہیں کیا جائے گا`
      ],
      [
        `Barang siapa berbuat kebaikan mendapat balasan sepuluh kali lipat amalnya.`,
        `Dan barang siapa berbuat kejahatan dibalas seimbang dengan kejahatannya.`,
        `Mereka sedikit pun tidak dirugikan (dizalimi)`
      ],
      [
        `Kim ortaya bir iyilik koyarsa ona on katı verilir;`,
        `ortaya bir kötülük koyan ise ancak misliyle cezalandırılır;`,
        `onlara haksızlık yapılmaz`
      ],
      [
        `هر كس كار نيكى بياورد، ده برابر آن [پاداش‌] خواهد داشت،`,
        `و هر كس كار بدى بياورد،`,
        `جز مانند آن جزا نيابد و بر آنان ستم نرود`
      ],
      [
        `যে একটি সৎকর্ম করবে, সে তার দশগুণ পাবে এবং যে,`,
        `একটি মন্দ কাজ করবে,`,
        `সে তার সমান শাস্তিই পাবে। বস্তুতঃ তাদের প্রতি জুলুম করা হবে না।`
      ],
      [
        `Quem chega com a boa ação terá dez vezes seu equivalente,`,
        `e quem chega com a má ação não será recompensado senão com seu equivalente.`,
        `E eles não sofrerão injustiça`
      ],
      [
        `行一件善事的人，将得十倍的报酬；`,
        `作一件恶事的人，`,
        `只受同样的惩罚；他们都不受亏枉。`
      ],
      [
        `善いことを行う者は，それと同じようなものを10倍にして頂ける。`,
        `だが悪いことを行う者には，それと等しい応報だけで，`,
        `かれらは不当に扱われることはないであろう。`
      ],
      [
        `선을 실천한자 그에게는 열배의 보상이 있으며 악을`,
        `끼친자 그에게는 그와 같은 것 외에는 다 른 것이 보상되지`,
        `아니하니 어느 누구도 부정한 대우를 받지 않노 라`
      ],
      [
        `Chi verrà con un bene,`,
        `ne avrà dieci volte tanto e chi verrà con un male, ne pagherà solo l'equivalente.`,
        `Non verrà fatto loro alcun torto`
      ],
      [
        `Ten, kto przyjdzie z dobrym czynem, otrzyma w nagrodę dziesięć jemu podobnych;`,
        `a ten, kto przyjdzie ze złym czynem,`,
        `otrzyma jako zapłatę tylko równowartość. I oni nie doznają niesprawiedliwości`
      ],
      [
        `Хто прийде з добрим вчинком, той матиме десять таких.`,
        `А хто прийде із лихим вчинком,`,
        `тому відплатять за нього; і ні з ким не вчинять несправедливо`
      ]
    ],
    number: `سورة الأنعام / Al-An'am، الآية 160`
  },

  {
    arabic: [
      `قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ`,
      `لَا شَرِيكَ لَهُ`,
      `وَبِذَٰلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ`
    ],
    translations: [
      [
        `Say, "Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds.`,
        `No partner has He.`,
        `And this I have been commanded, and I am the first [among you] of the Muslims."`
      ],
      [
        `Dis: «Ma Salât, mes actes de dévotion, ma vie et ma mort appartiennent à Allah, Seigneur de l'univers.`,
        `A Lui nul associé.`,
        `Voilà ce qui m'a été ordonné; et je suis le premier à me soumettre».`
      ],
      [
        `Di: «Mi oración, mis ritos, mi vida y mi muerte pertenecen a Alá, Señor del universo.`,
        `No tiene asociado.`,
        `Esto es lo que se me ha ordenado, y soy el primero de los musulmanes».`
      ],
      [
        `Скажи: «Воистину, моя молитва, мои жертвоприношения, моя жизнь и моя смерть — для Аллаха, Господа миров.`,
        `Нет у Него сотоварища.`,
        `Это мне велено, и я — первый из мусульман».`
      ],
      [
        `Sag: Meine Gebete, meine Riten, mein Leben und mein Tod gehören Allah, dem Herrn der Welten.`,
        `Er hat keinen Teilhaber.`,
        `Dies ist mir befohlen worden, und ich bin der Erste der Muslime.`
      ],
      [
        `Säg: Min bön, min gudstjänst, mitt liv och min död tillhör Gud, världarnas Herre.`,
        `Han har ingen vid sin sida.`,
        `Så har jag blivit befalld, och jag är den förste av dem som underkastar sig.`
      ],
      [
        `Abair: Is le Allah, Tiarna na ndomhan, mo ghuí, mo ofráil, mo bheatha agus mo bhás.`,
        `Níl comhpháirtí ar bith aige.`,
        `Sin é a ordaíodh dom, agus is mise an chéad duine de na Moslamaigh.`
      ],
      [
        `Zeg: Mijn gebed, mijn offerande, mijn leven en mijn sterven zijn voor Allah, de Heer der werelden.`,
        `Hij heeft geen deelgenoot.`,
        `Dit is mij bevolen, en ik ben de eerste der moslims.`
      ],
      [
        `کہہ دیجیے: بے شک میری نماز، میری قربانی، میرا جینا اور میرا مرنا سب اللہ رب العالمین کے لیے ہے۔`,
        `اس کا کوئی شریک نہیں۔`,
        `اور مجھے اسی کا حکم دیا گیا ہے اور میں سب سے پہلا فرماں بردار ہوں۔`
      ],
      [
        `Katakanlah: "Sesungguhnya shalatku, ibadahku, hidupku dan matiku hanyalah untuk Allah, Tuhan semesta alam.`,
        `Tiada sekutu bagi-Nya;`,
        `dan demikian itulah yang diperintahkan kepadaku dan aku adalah orang yang pertama-tama menyerahkan diri (kepada Allah)."`
      ],
      [
        `De ki: Şüphesiz benim namazım, kurbanım, hayatım ve ölümüm âlemlerin Rabbi Allah içindir.`,
        `O'nun ortağı yoktur.`,
        `Ben bununla emrolundum ve ben Müslümanların ilkiyim.`
      ],
      [
        `بگو: همانا نماز من و عبادات من و زندگی من و مرگ من برای خداوند، پروردگار جهانیان است.`,
        `او را شریکی نیست.`,
        `و به این [توحید] مأمور شده‌ام و من نخستین مسلمانم.`
      ],
      [
        `বলুন, আমার নামায, আমার কোরবানী, আমার জীবন ও আমার মরণ বিশ্ব-প্রতিপালক আল্লাহরই জন্যে।`,
        `তাঁর কোন অংশীদার নেই।`,
        `আমি এরই জন্য আদিষ্ট হয়েছি এবং আমিই প্রথম আনুগত্যশীল।`
      ],
      [
        `Dize: Por certo, a minha oração, os meus ritos, a minha vida e a minha morte pertencem a Allah, Senhor dos mundos.`,
        `Não tem parceiro algum.`,
        `Isto me foi ordenado, e sou o primeiro dos muçulmanos.`
      ],
      [
        `你说：我的拜功、我的奉献、我的生、我的死，全是为主宰众世界的真主，`,
        `他是没有伙伴的。`,
        `我奉到这样的命令，我是首先归顺的人。`
      ],
      [
        `言え，「本当にわが礼拝，わが奉仕，わが生，わが死は，万有の主アッラーのためである。`,
        `かれに同位者はない。`,
        `わたしはこのように命じられた。そしてわたしは，ムスリムの最初の者である。」`
      ],
      [
        `말하라, 나의 예배와 나의 희생과 나의 삶과 나의 죽음은 온 세상의 주님이신 하나님을 위한 것이라.`,
        `그분께는 동반자가 없노라.`,
        `나는 이렇게 명령받았으며 나는 무슬림들 중 첫 번째이니라.`
      ],
      [
        `Di': In verità la mia preghiera, i miei riti, la mia vita e la mia morte appartengono ad Allah, Signore dei mondi.`,
        `Non ha associati.`,
        `Questo mi è stato ordinato e io sono il primo dei musulmani.`
      ],
      [
        `Powiedz: Zaprawdę, moja modlitwa, moje ofiary, moje życie i moja śmierć należą do Allaha, Pana światów.`,
        `On nie ma wspólnika.`,
        `Tak mi nakazano i jestem pierwszym z muzułmanów.`
      ],
      [
        `Скажи: «Воістину, моя молитва, мої жертвоприношення, моє життя і моя смерть — для Аллаха, Господа світів.`,
        `Немає в Нього співтовариша.`,
        `Це мені звелено, і я — перший з мусульман».`
      ]
    ],
    number: `سورة الأنعام / Al-An'am، الآيتان 162-163`
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
        `이는 하나님의 징표 중 하나로 그들이 기억하도록 하기 위함이다.`
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
        `실로 하나님는 낭비하는 자들을 사랑하지 않는다.`
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
      `وَاكْتُبْ لَنَا فِي هَٰذِهِ الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ إِنَّا هُدْنَا إِلَيْكَ ۚ`,
      `قَالَ عَذَابِي أُصِيبُ بِهِ مَنْ أَشَاءُ ۖ وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ ۚ`,
      `فَسَأَكْتُبُهَا لِلَّذِينَ يَتَّقُونَ وَيُؤْتُونَ الزَّكَاةَ وَالَّذِينَ هُمْ بِآيَاتِنَا يُؤْمِنُونَ`
    ],
    translations: [
      [
        `And decree for us in this world [that which is] good and [also] in the Hereafter; indeed, we have turned back to You."`,
        `[Allah] said, "My punishment - I afflict with it whom I will, but My mercy encompasses all things."`,
        `So I will decree it [especially] for those who fear Me and give zakah and those who believe in Our verses`
      ],
      [
        `Et prescris pour nous le bien ici-bas ainsi que dans l'au-delà. Nous voilà revenus vers Toi, repentis.»`,
        `Et (Allah) dit: «Je ferai que Mon châtiment atteigne qui Je veux. Et Ma miséricorde embrasse toute chose.`,
        `Je la prescrirai à ceux qui (Me) craignent, acquittent la Zakât, et ont foi en Nos signes`
      ],
      [
        `Destínanos bien en la vida de acá y en la otra. Nos hemos vuelto a Ti». Dijo:`,
        `«Inflijo Mi castigo a quien quiero, pero Mi misericordia es omnímoda».`,
        `Destinaré a ella a quienes teman a Alá y den el azaque y a quienes crean en Nuestros signos`
      ],
      [
        `Предпиши для нас добро в этом мире и в Последней жизни, ибо мы возвращаемся к Тебе (каемся перед Тобой).`,
        `Он сказал: «Я поражаю Своим наказанием, кого пожелаю, а Моя милость объемлет всякую вещь.`,
        `Я предпишу ее для тех, которые будут богобоязненны, станут выплачивать закят и уверуют в Наши знамения`
      ],
      [
        `Und bestimme für uns in diesem Diesseits Gutes und auch im Jenseits! Gewiß, wir haben zu Dir zurückgefunden."`,
        `Er sagte: "Mit Meiner Strafe treffe Ich, wen Ich will, aber Meine Barmherzigkeit umfaßt alles.`,
        `Ich werde sie für die bestimmen, die gottesfürchtig sind und die Abgabe entrichten und die an Unsere Zeichen glauben`
      ],
      [
        `Låt gott komma oss till del i detta liv och i det eviga livet. Ja, Vi vänder tillbaka till Dig [i djup ånger]."`,
        `[Gud] svarade: "Jag låter Mitt straff drabba den Jag vill;`,
        `men Min nåd och Min barmhärtighet når överallt och Min nåd skänker Jag dem som fruktar Gud och ger åt de behövande och som tror på Mina budskap`
      ],
      [
        `Agus ordaigh dúinn sa saol seo an mhaith, agus sa Saol Eile freisin; go deimhin, d'iompaíomar chugat. Dúirt Sé:`,
        `Mo phionós, buailim leis an té is mian liom, ach tá mo thrócaire ag clúdach gach ruda. Mar sin,`,
        `ordóidh mé í go sonrach dóibh siúd a bhfuil eagla orthu romham, a thugann an zakat, agus a chreideann inár gcomharthaí.`
      ],
      [
        `En schrijf ons in deze wereld het goede voor en (ook) in het Hiernamaals. Voorwaar, wij wonden ons in berouw tot U."`,
        `Hij (Allah) zei: "Met Mijn bestraffing tref Ik wie Ik wil en Mijn Barmhartigheid omvat alle dingen.`,
        `Ik zal haar voorschrijven aan degenen die (Mij) vrezen, die de zakât geven en die in Mijn Tekenen geloven`
      ],
      [
        `اور ہمارے لیے اس دنیا میں بھی بھلائی لکھ دے اور آخرت میں بھی۔ ہم تیری طرف رجوع ہوچکے۔ فرمایا کہ جو`,
        `میرا عذاب ہے اسے تو جس پر چاہتا ہوں نازل کرتا ہوں اور جو میری رحمت ہے وہ ہر چیز کو شامل ہے۔ میں اس`,
        `کو ان لوگوں کے لیے لکھ دوں گا جو پرہیزگاری کرتے اور زکوٰة دیتے اور ہماری آیتوں پر ایمان رکھتے ہیں`
      ],
      [
        `Dan tetapkanlah untuk kami kebaikan di dunia ini dan di akhirat. Sungguh, kami kembali (bertobat) kepada Engkau. (Allah) berfirman,`,
        `"Siksa-Ku akan Aku timpakan kepada siapa yang Aku kehendaki dan rahmat-Ku meliputi segala sesuatu.`,
        `Maka akan Aku tetapkan rahmat-Ku bagi orang-orang yang bertakwa, yang menunaikan zakat dan orang-orang yang beriman kepada ayat-ayat Kami`
      ],
      [
        `Bu dünyada ve ahirette bizim için güzel olanı yaz; biz Sana yöneldik" dedi. Allah: "Azabıma dilediğim kimseyi uğratırım, rahmetim herşeyi kaplamıştır; bunu Allah'a karşı gelmekten sakınanlara, zekat verenlere,`,
        `ayetlerimize inanıp, yanlarındaki Tevrat ve İncil'de yazılı buldukları, okuyup yazması olmayan peygambere uyanlara yazacağız. O peygamber, onlara, uygun olanı emreder ve fenalıktan meneder, temiz şeyleri helal,`,
        `murdar şeyleri haram kılar, onların ağır yüklerini indirir, zor tekliflerini hafifletir. Bu peygambere inanan, hürmet eden, yardım eden, onunla gönderilen nura uyanlar yok mu? İşte onlar saadete erenlerdir" dedi`
      ],
      [
        `«و براى ما در اين دنيا نيكى مقرّر فرما و در آخرت [نيز]، زيرا كه ما به سوى تو بازگشته‌ايم.» فرمود:`,
        `«عذاب خود را به هر كس بخواهم مى‌رسانم، و رحمتم همه چيز را فرا گرفته است؛`,
        `و به زودى آن را براى كسانى كه پرهيزگارى مى‌كنند و زكات مى‌دهند و آنان كه به آيات ما ايمان مى‌آورند، مقرّر مى‌دارم.»`
      ],
      [
        `আর পৃথিবীতে এবং আখেরাতে আমাদের জন্য কল্যাণ লিখে দাও। আমরা তোমার দিকে প্রত্যাবর্তন করছি। আল্লাহ তা’আলা বললেন,`,
        `আমার আযাব তারই উপর পরিব্যাপ্ত। সুতরাং তা তাদের জন্য লিখে দেব যারা ভয় রাখে,`,
        `যাকাত দান করে এবং যারা আমার আয়তসমুহের উপর বিশ্বাস স্থাপন করে।`
      ],
      [
        `E prescreve-nos, nesta vida terrena, algo de bom, e na Derradeira Vida também. Por certo, para Ti,`,
        `voltamo-nos arrependidos." Allah disse: "Com Meu castigo, alcançarei a quem quiser. E Minha misericórdia abrange todas as cousas.`,
        `Então, prescrevê-la-ei aos que são piedosos, e concedem as esmolas e aos que crêem em Nossos sinais`
      ],
      [
        `求你在今世和后世为我们注定幸福，我们确已对你悔过了。主说：`,
        `我的刑罚，是用去惩治我欲惩治的人的，我的慈恩是包罗万物的。`,
        `我将注定以我的慈恩归于敬畏真主，完纳天课，而且信仰我的迹象者。`
      ],
      [
        `またわたしたちのために，現世も来世でも，幸福を授けて下さい。本当にわたしたちは，改峻してあなたの許に戻って来ました。`,
        `」かれは仰せられた。「われは，自分が欲する者に懲罰を加える。またわれの慈悲は，`,
        `凡てのものにあまねくおよぶ。それ故われは，主を畏れ，喜捨をなし，またわが印を信じる者にそれを授けるであろう。`
      ],
      [
        `주여 현세와 내세에서 저희에게 복을 주소서 저희는 당신께 로 귀의하였나이다 이때 하나님 께서`,
        `말씀이 있었으니 내가 원하 는 자에게 벌을 내릴 것이라 그러나 나의 자비가 모든 것을`,
        `포용하나니 하나님을 경외하고 자선을 베풀며 하나님의 말씀을 믿는 자 들에게 은해가 있게 하리라`
      ],
      [
        `Annoveraci un bene in questa vita terrena e un bene nell'Altra vita. Ecco che, pentiti, ritorniamo a Te”.`,
        `E [Allah] disse: “Farò sì che il Mio castigo colpisca chi voglio, ma la Mia misericordia abbraccia ogni cosa:`,
        `la riserverò a coloro che [Mi] temono e pagano la decima, a coloro che credono nei Nostri segni`
      ],
      [
        `Zapisz nam to, co jest piękne w życiu na tym świecie i w życiu ostatecznym! âOto nawróciliśmy się ku Tobie!"`,
        `Powiedział: "Ja dosięgam Moją karą, kogo chcę, a Moje miłosierdzie obejmuje każdą rzecz.`,
        `Ja zapiszę to tym, którzy są bogobojni, tym, którzy dają jałmużnę, tym, którzy wierzą w Nasze znaki`
      ],
      [
        `Даруй нам найкраще в цьому житті й у житті наступному. Ми повертаємося до Тебе!»`,
        `Він відповів: «Я вражаю Своєю карою, кого побажаю, але милість Моя охоплює кожну річ!`,
        `Я дарую її тим, які богобоязливі, які дають закят і які вірують у Наші знамення`
      ]
    ],
    number: `سورة الأعراف / Al-A'raf، الآية 156`
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
        `말하라: 사람들이여! 나는 너희 모두에게 보낸 하나님의 사도이다,`,
        `하늘과 땅의 주권은 그분의 것이며 그 외에 신은 없다,`,
        `그분은 생명을 주고 죽음을 주시니 하나님와 그의 사도를 믿어라.`
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
      `وَإِذْ أَخَذَ رَبُّكَ مِنْ بَنِي آدَمَ مِنْ ظُهُورِهِمْ ذُرِّيَّتَهُمْ`,
      `وَأَشْهَدَهُمْ عَلَىٰ أَنْفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا بَلَىٰ ۛ شَهِدْنَا ۛ`,
      `أَنْ تَقُولُوا يَوْمَ الْقِيَامَةِ إِنَّا كُنَّا عَنْ هَٰذَا غَافِلِينَ`
    ],
    translations: [
      [
        `And [mention] when your Lord took from the children of Adam - from their loins - their descendants and made them testify of themselves,`,
        `[saying to them], "Am I not your Lord?" They said, "Yes,`,
        `we have testified." [This] - lest you should say on the day of Resurrection, "Indeed, we were of this unaware`
      ],
      [
        `Et quand ton Seigneur tira une descendance des reins des fils d'Adam et les fit témoigner sur eux-mêmes:`,
        `«Ne suis-Je pas votre Seigneur?» Ils répondirent: «Mais si, nous en témoignons...»`,
        `- afin que vous ne disiez point, au Jour de la Résurrection: «Vraiment, nous n'y avons pas fait attention»`
      ],
      [
        `Y cuando tu Señor sacó de los riñones de los hijos de Adán a su descendencia y les hizo atestiguar contra sí mismos:`,
        `«¿No soy yo vuestro Señor?» Dijeron: «¡Claro que sí,`,
        `damos fe!» No sea que dijerais el día de la Resurrección: «No habíamos reparado en ello»`
      ],
      [
        `Вот твой Господь вынул из чресл сынов Адама их потомство и заставил их засвидетельствовать против самих себя:`,
        `«Разве Я - не ваш Господь?». Они сказали: «Да, мы свидетельствуем».`,
        `Это - для того, чтобы в День воскресения вы не говорили: «Мы не знали этого»`
      ],
      [
        `Und als dein Herr aus den Kindern Adams, aus ihren Rücken,`,
        `ihre Nachkommenschaft nahm und sie gegen sich selbst zeugen ließ: "Bin Ich nicht euer Herr?" Sie sagten: "Doch, wir bezeugen (es)!"`,
        `(Dies,) damit ihr nicht am Tag der Auferstehung sagt: "Wir waren dessen unachtsam`
      ],
      [
        `Och när din Herre låter nya släkten utgå från Adams söners länder, begär Han av dem att de skall vittna om sig själva [och frågar]:`,
        `"Är Jag inte er Herre?" [Då] svarar de: "Jo, vi vittnar [att Du är vår Herre]!"`,
        `[Detta sker] för att ni [människor] inte på Uppståndelsens dag skall säga: "Om detta var vi inte medvetna`
      ],
      [
        `Agus [cuimhnigh] nuair a thóg do Thiarna ó chlann Adaimh, óna ndroimeanna, a sliocht,`,
        `agus thug Sé orthu finné a thabhairt orthu féin: Nach mise bhur dTiarna? Dúirt siad: Sea, tá finné againn.`,
        `[Rinneadh é seo] ar eagla go ndéarfadh sibh ar Lá an Aiséirí: Go deimhin, ní raibh a fhios againn é seo.`
      ],
      [
        `En (gedenkt) toen jouw Heer het nageslacht van de Kinderen van Adam uit hun lendenen nam,`,
        `en hen deed getuigen over zichzelf (en Hij zei:) "Ben Ik niet jullie Heer?" Zij zeiden: "Jazeker, dat getuigen wij."`,
        `Opdat jullie op de Dag van de Opstanding niet zullen zeggen: "Wij waren hieromtrent achtelozen`
      ],
      [
        `اور جب تمہارے پروردگار نے بنی آدم سے یعنی ان کی پیٹھوں سے ان کی اولاد نکالی تو ان سے خود ان کے مقابلے میں اقرار`,
        `کرا لیا (یعنی ان سے پوچھا کہ) کیا تمہارا پروردگار نہیں ہوں۔ وہ کہنے لگے کیوں نہیں ہم گواہ ہیں (کہ تو ہمارا`,
        `پروردگار ہے) ۔ یہ اقرار اس لیے کرایا تھا کہ قیامت کے دن (کہیں یوں نہ) کہنے لگو کہ ہم کو تو اس کی خبر ہی نہ تھی`
      ],
      [
        `Dan (ingatlah) ketika Tuhanmu mengeluarkan dari sulbi (tulang belakang) anak cucu Adam keturunan mereka dan Allah mengambil kesaksian terhadap roh mereka (seraya berfirman),`,
        `"Bukanlah Aku ini Tuhanmu?" Mereka menjawab, "Betul (Engkau Tuhan kami), kami bersaksi."`,
        `(Kami lakukan yang demikian itu) agar di hari Kiamat kamu tidak mengatakan, "Sesungguhnya ketika itu kami lengah terhadap ini`
      ],
      [
        `Rabbin, insanoğlunun sulbünden soyunu alıp devam ettirmiş, onlara: "Ben sizin Rabbiniz değil miyim" demiş ve buna kendilerini şahit tutmuştu.`,
        `Onlar da: "Evet şahidiz" demişlerdi. Bu, kıyamet günü, "Bizim bundan haberimiz yoktu" dersiniz veya "Daha önce babalarımız Allah'a ortak koşmuşlardı,`,
        `biz de onlardan sonra gelen bir soyuz, bizi, boşa çalışanların yaptıklarından ötürü yok eder misin?" dersiniz diyedir`
      ],
      [
        `و هنگامى را كه پروردگارت از پشت فرزندان آدم،`,
        `ذريه آنان را برگرفت و ايشان را بر خودشان گواه ساخت كه آيا پروردگار شما نيستم؟ گفتند: «چرا،`,
        `گواهى داديم» تا مبادا روز قيامت بگوييد ما از اين [امر] غافل بوديم`
      ],
      [
        `আর যখন তোমার পালনকর্তা বনী আদমের পৃষ্টদেশ থেকে বের করলেন তাদের সন্তানদেরকে এবং নিজের উপর তাদেরকে প্রতিজ্ঞা করালেন,`,
        `আমি কি তোমাদের পালনকর্তা নই ? তারা বলল, অবশ্যই,`,
        `আমরা অঙ্গীকার করছি। আবার না কেয়ামতের দিন বলতে শুরু কর যে, এ বিষয়টি আমাদের জানা ছিল না।`
      ],
      [
        `E lembra-te, Muhammad, de quando teu Senhor tomou, dos filhos de Adão - do dorso deles - seus descendentes e fê-los testemunhas de si mesmos,`,
        `dizendo-lhes: "Não sou vosso Senhor?" Disseram: "Sim,`,
        `testemunhamo-lo." Isso, para não dizerdes, no Dia da Ressurreição: "Por certo, a isto estávamos desatentos`
      ],
      [
        `当时，你的主从阿丹的子孙的背脊中取出他们的后裔，并使他们招认。主说：`,
        `难道我不是你们的主吗？他们说：怎么不是呢？我们已作证了。`,
        `（我所以要使他们招认），是因为不愿你们在复活日说，我们生前确实忽视了这件事。`
      ],
      [
        `あなたがたの主が，アーダムの子孫の背骨からかれらの子孫を取り出され，かれらを自らの証人となされた時を思え。`,
        `（その時かれは仰せられた。）「われは，あなたがたの主ではないか。」 かれらは申し上げた。「はい，わたしたちは証言いたします。`,
        `」これは復活の日にあなたがたに ，「わたしたちは，このことを本当に注意しませんでした。」と言わせないためである。`
      ],
      [
        `주님께서 아담의 후손들을 일으켜 그들로 하여금 스스로 중 언케 하리라는 말씀이 계셨으니 내가 너희`,
        `주님이 아니더뇨 라고 하시니 그렇습니다 저희는 주님이 심을 증언하나이다 라고 그들이 대답하더라`,
        `이는 너희가 심판의 날 우리는 이에 관하여 알지 못하 였습니다 라고 말하지 아니 하도 륵 함이라`
      ],
      [
        `E quando il Signore trasse, dai lombi dei figli di Adamo, tutti i loro discendenti e li fece testimoniare contro loro stessi [disse]:`,
        `“Non sono il vostro Signore?”. Risposero: “Sì, lo attestiamo”,`,
        `[Lo facemmo] perché nel Giorno della Resurrezione non diciate: “Veramente eravamo incoscienti”`
      ],
      [
        `I oto wziął twój Pan z lędźwi synów Adama - ich potomstwo, i nakazał im zaświadczyć wobec samych siebie:`,
        `"Czy Ja nie jestem waszym Panem?" Oni powiedzieli: " Tak!`,
        `Zaświadczamy" - a byście nie powiedzieli w Dniu Zmartwychwstania: "Nie dbaliśmy o to`
      ],
      [
        `Ось твій Господь вивів із плоті синів Адама нащадків їхніх,`,
        `змусивши свідчити про самих себе: «Чи не Я ваш Господь?» Ті відповіли: «Так, ми свідчимо!»`,
        `— щоб не говорили ви в День Воскресіння: «Воістину, ми не знали про це!»`
      ]
    ],
    number: `سورة الأعراف / Al-A'raf، الآية 172`
  },

  {
    arabic: [
      `خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ`,
      `وَأَعْرِضْ عَنِ الْجَاهِلِينَ`,
      ``
    ],
    translations: [
      [
        `Take what is given freely, enjoin what is good,`,
        `and turn away from the ignorant.`,
        ``
      ],
      [
        `Observe le pardon, ordonne le convenable,`,
        `et éloigne-toi des ignorants.`,
        ``
      ],
      [
        `Adopta el perdón, ordena lo que es correcto`,
        `y apártate de los ignorantes.`,
        ``
      ],
      [
        `Придерживайся прощения, повелевай одобряемое`,
        `и отвернись от невежд.`,
        ``
      ],
      [
        `Übe Nachsicht, gebiete das Gute`,
        `und wende dich von den Unwissenden ab.`,
        ``
      ],
      [
        `Visa överseende, uppmana till det goda`,
        `och vänd dig bort från de ovetande.`,
        ``
      ],
      [
        `Glac leis an logha, ordaigh an mhaith,`,
        `agus cas ar shiúl ó na haineolaithe.`,
        ``
      ],
      [
        `Neem het vergeven aan, gebied het goede`,
        `en wend u af van de onwetenden.`,
        ``
      ],
      [
        `درگزر اختیار کرو، نیکی کا حکم دو`,
        `اور جاہلوں سے کنارہ کش ہو جاؤ۔`,
        ``
      ],
      [
        `Jadilah engkau pemaaf dan suruhlah orang mengerjakan yang ma'ruf,`,
        `serta berpalinglah dari orang-orang yang bodoh.`,
        ``
      ],
      [
        `Af yolunu tut, iyiliği emret`,
        `ve cahillerden yüz çevir.`,
        ``
      ],
      [
        `گذشت پیشه کن و به کار پسندیده فرمان ده`,
        `و از نادانان روی بگردان.`,
        ``
      ],
      [
        `ক্ষমা করার অভ্যাস গড়ুন, সৎকাজের নির্দেশ দিন`,
        `এবং মূর্খদের থেকে দূরে সরে থাকুন।`,
        ``
      ],
      [
        `Adota o perdão, ordena o que é correto`,
        `e afasta-te dos ignorantes.`,
        ``
      ],
      [
        `你应当奉行宽恕，劝善，`,
        `而不理会愚昧的人。`,
        ``
      ],
      [
        `寛容を守り，善を命じ，`,
        `無知な者から遠ざかれ。`,
        ``
      ],
      [
        `관용을 베풀고 선을 명하며`,
        `무지한 자들로부터 멀리하라.`,
        ``
      ],
      [
        `Mostrati indulgente, ordina il bene`,
        `e allontanati dagli ignoranti.`,
        ``
      ],
      [
        `Okazuj wyrozumiałość, nakazuj dobro`,
        `i odwracaj się od ignorantów.`,
        ``
      ],
      [
        `Будь поблажливим, закликай до доброго`,
        `і відвернись від невігласів.`,
        ``
      ]
    ],
    number: `سورة الأعراف / Al-A'raf، الآية 199`
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
        `믿는 자들은 하나님가 언급될 때 마음이 떨리는 자들이며`,
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
      `يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَجِيبُوا لِلَّهِ وَلِلرَّسُولِ إِذَا دَعَاكُم لِمَا يُحْيِيكُمْ`,
      `وَاعْلَمُوا أَنَّ اللَّهَ يَحُولُ بَيْنَ الْمَرْءِ وَقَلْبِهِ`,
      `وَأَنَّهُ إِلَيْهِ تُحْشَرُونَ`
    ],
    translations: [
      [
        `O you who have believed, respond to Allah and to the Messenger when he calls you to that which gives you life.`,
        `And know that Allah intervenes between a man and his heart`,
        `and that to Him you will be gathered.`
      ],
      [
        `Ô vous qui croyez! Répondez à Allah et au Messager quand il vous appelle à ce qui vous fait vivre.`,
        `Et sachez qu'Allah s'interpose entre l'homme et son cœur`,
        `et que c'est vers Lui que vous serez rassemblés.`
      ],
      [
        `¡Creyentes! Responded a Alá y al Enviado cuando os llamen a lo que os da la vida.`,
        `Y sabed que Alá se interpone entre el hombre y su corazón`,
        `y que seréis congregados ante Él.`
      ],
      [
        `О те, которые уверовали! Откликнитесь Аллаху и Посланнику, когда он призывает вас к тому, что даёт вам жизнь.`,
        `И знайте, что Аллах встаёт между человеком и его сердцем`,
        `и что вы будете собраны к Нему.`
      ],
      [
        `O die ihr glaubt, folgt dem Aufruf Allahs und des Gesandten, wenn er euch zu dem aufruft, was euch Leben verleiht.`,
        `Und wisset, dass Allah zwischen den Menschen und sein Herz tritt`,
        `und dass ihr zu Ihm versammelt werdet.`
      ],
      [
        `Ni som tror! Svara Gud och Sändebudet när han kallar er till det som ger er liv.`,
        `Och vet att Gud träder in mellan människan och hennes hjärta`,
        `och att det är till Honom ni skall samlas.`
      ],
      [
        `A chreidmhigh, freagraigí do Allah agus don Teachtaire nuair a ghlaonn sé oraibh chuig an rud a thugann beatha daoibh.`,
        `Agus bíodh a fhios agaibh go dtagann Allah idir an duine agus a chroí`,
        `agus gur chuige a chuirfear le chéile sibh.`
      ],
      [
        `O gij die gelooft, antwoordt Allah en de Boodschapper wanneer hij u oproept tot wat u leven geeft.`,
        `En weet dat Allah tussen de mens en zijn hart komt`,
        `en dat gij tot Hem verzameld zult worden.`
      ],
      [
        `اے ایمان والو! اللہ اور رسول کی پکار پر لبیک کہو جب وہ تمہیں اس چیز کی طرف بلائیں جو تمہیں زندگی بخشتی ہے۔`,
        `اور جان لو کہ اللہ آدمی اور اس کے دل کے درمیان حائل ہو جاتا ہے`,
        `اور یہ کہ تم سب اسی کی طرف اکٹھے کیے جاؤ گے۔`
      ],
      [
        `Hai orang-orang yang beriman, penuhilah seruan Allah dan seruan Rasul apabila Rasul menyeru kamu kepada suatu yang memberi kehidupan kepada kamu,`,
        `dan ketahuilah bahwa sesungguhnya Allah membatasi antara manusia dan hatinya`,
        `dan sesungguhnya kepada-Nyalah kamu akan dikumpulkan.`
      ],
      [
        `Ey iman edenler! Peygamber sizi, size hayat verecek şeylere çağırdığında Allah'a ve Peygamber'e icabet edin.`,
        `Şunu da bilin ki Allah, kişi ile kalbi arasına girer`,
        `ve siz O'nun huzurunda toplanacaksınız.`
      ],
      [
        `ای کسانی که ایمان آورده‌اید! دعوت خدا و پیامبر را بپذیرید، آنگاه که شما را به چیزی می‌خوانند که به شما حیات می‌بخشد.`,
        `و بدانید که خداوند میان آدمی و دلش حائل می‌شود`,
        `و اینکه همه به سوی او محشور خواهید شد.`
      ],
      [
        `হে ঈমানদারগণ! আল্লাহ ও তাঁর রসূলের আহ্বানে সাড়া দাও, যখন রসূল তোমাদেরকে সেই বিষয়ের দিকে আহ্বান করেন যা তোমাদেরকে জীবন দান করে।`,
        `জেনে রাখ, আল্লাহ মানুষ ও তার অন্তরের মাঝে অন্তরায় হয়ে যান`,
        `এবং তোমাদেরকে তাঁরই কাছে সমবেত করা হবে।`
      ],
      [
        `Ó vós que credes! Atendei a Allah e ao Mensageiro quando vos chama ao que vos dá vida.`,
        `E sabei que Allah se interpõe entre o homem e o seu coração`,
        `e que para Ele sereis congregados.`
      ],
      [
        `信道的人们啊！当真主和使者召唤你们去接受使你们复活的事物的时候，你们应当应召。`,
        `你们应当知道，真主确是介入于人和他的心之间的，`,
        `你们都要被集合在他那里。`
      ],
      [
        `信仰する者よ，使徒があなたがたを活気づけるものに招く時は，アッラーと使徒に応えなさい。`,
        `そして知れ，アッラーは人とその心との間に介在される。`,
        `あなたがたはかれの御許に集められるのである。`
      ],
      [
        `믿는 사람들이여, 사도가 너희에게 생명을 주는 것으로 너희를 부를 때 하나님과 사도에게 응답하라.`,
        `하나님은 사람과 그의 마음 사이에 개입하시며`,
        `너희는 그분께 모이게 될 것임을 알라.`
      ],
      [
        `O voi che credete, rispondete ad Allah e al Messaggero quando vi chiama a ciò che vi dà la vita.`,
        `E sappiate che Allah si interpone tra l'uomo e il suo cuore`,
        `e che verso di Lui sarete radunati.`
      ],
      [
        `O wy, którzy wierzycie! Odpowiadajcie Allahowi i Posłańcowi, gdy was wzywa do tego, co daje wam życie!`,
        `I wiedzcie, że Allah staje pomiędzy człowiekiem a jego sercem`,
        `i że do Niego zostaniecie zgromadzeni.`
      ],
      [
        `О ви, які увірували! Відгукніться на заклик Аллаха та Посланця, коли він кличе вас до того, що дарує вам життя.`,
        `І знайте, що Аллах стає між людиною та її серцем`,
        `і що ви будете зібрані до Нього.`
      ]
    ],
    number: `سورة الأنفال / Al-Anfal، الآية 24`
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
      `وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ`,
      `وَيَهْدِي مَنْ يَشَاءُ إِلَىٰ صِرَاطٍ مُسْتَقِيمٍ`,
      ``
    ],
    translations: [
      [
        `And Allah invites to the`,
        `Home of Peace and guides whom`,
        `He wills to a straight path`
      ],
      [
        `Allah appelle à la demeure`,
        `de la paix et guide qui Il`,
        `veut vers un droit chemin`
      ],
      [
        `Alá invita a la Morada de`,
        `la Paz y dirige a quien`,
        `Él quiere a una vía recta`
      ],
      [
        `Аллах призывает к Обители мира`,
        `и благополучия и наставляет на`,
        `прямой путь тех, кого пожелает`
      ],
      [
        `Allah lädt zur Wohnstätte des Friedens ein und leitet,`,
        `wen Er will,`,
        `zu einem geraden Weg`
      ],
      [
        `GUD KALLAR [människan] till den eviga`,
        `fredens boning och Han leder den`,
        `till den raka vägen som vill [vägledas]`
      ],
      [
        `Agus tugann Allah cuireadh chun Theach`,
        `na Síochána, agus treoraíonn Sé an`,
        `té is mian leis chun conair dhíreach.`
      ],
      [
        `En Allah roept naar het Huis van de`,
        `Vrede (Dâroessalâm, het Paradijs) en Hij`,
        `leidt wie Hij wil naar een recht Pad`
      ],
      [
        `اور خدا سلامتی کے گھر کی`,
        `طرف بلاتا ہے۔ اور جس کو چاہتا`,
        `ہے سیدھا راستہ دکھاتا ہے`
      ],
      [
        `Dan Allah menyeru (manusia) ke Dārussalām`,
        `(surga), dan memberikan petunjuk kepada orang`,
        `yang Dia kehendaki ke jalan yang lurus (Islam)`
      ],
      [
        `Allah, cennete`,
        `çağırır ve dilediğini`,
        `doğru yola eriştirir`
      ],
      [
        `و خدا [شما را] به سراى سلامت`,
        `فرا مى‌خواند، و هر كه را`,
        `بخواهد به راه راست هدايت مى‌كند`
      ],
      [
        `আর আল্লাহ শান্তি-নিরাপত্তার`,
        `আলয়ের প্রতি আহবান জানান এবং`,
        `যাকে ইচ্ছা সরলপথ প্রদর্শন করেন।`
      ],
      [
        `E Allah convoca à Morada da paz e guia,`,
        `a quem quer,`,
        `à senda reta`
      ],
      [
        `真主召人到平安的住宅，`,
        `并引导其所欲引导的人走上正路。`,
        ``
      ],
      [
        `本当にアッラーは，`,
        `人を平安の家に招き，`,
        `また御好みになられた者を正しい道に導かれる。`
      ],
      [
        `그러나 하나님은 평화의 집`,
        `으로 불러 그분이 원하시는`,
        `이들 을 옳은 길로 인도하시니라`
      ],
      [
        `Allah chiama alla dimora`,
        `della pace e guida chi`,
        `Egli vuole sulla Retta via`
      ],
      [
        `A Bóg wzywa do siedziby`,
        `pokoju i prowadzi ku`,
        `drodze prostej, kogo chce`
      ],
      [
        `Аллаг кличе в обитель миру й веде,`,
        `кого побажає,`,
        `до прямого шляху`
      ]
    ],
    number: `سورة يونس / Yunus، الآية 25`
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
        `나는 너희가 하나님 외에 숭배하는 것을 숭배하지 않는다,`,
        `그러나 나는 너희의 생명을 거두실 하나님를 숭배하며 믿는 자가 되도록 명령받았다.`
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
      `قُلْ يَا أَيُّهَا النَّاسُ قَدْ جَاءَكُمُ الْحَقُّ مِن رَّبِّكُمْ فَمَنِ اهْتَدَىٰ فَإِنَّمَا يَهْتَدِي لِنَفْسِهِ`,
      `وَمَن ضَلَّ فَإِنَّمَا يَضِلُّ عَلَيْهَا`,
      `وَمَا أَنَا عَلَيْكُم بِوَكِيلٍ`
    ],
    translations: [
      [
        `Say, "O mankind, the truth has come to you from your Lord. So whoever is guided is only guided for [the benefit of] his soul,`,
        `and whoever goes astray only goes astray to its detriment.`,
        `And I am not over you a manager."`
      ],
      [
        `Dis: «Ô hommes! La vérité vous est venue de votre Seigneur. Quiconque donc se met sur le bon chemin ne le fait que pour lui-même,`,
        `et quiconque s'égare ne s'égare qu'à son propre détriment.`,
        `Et je ne suis pas un garant pour vous».`
      ],
      [
        `Di: «¡Hombres! Ya os ha llegado la verdad de vuestro Señor. Quien sigue la guía, la sigue en su propio beneficio,`,
        `y quien se extravía, se extravía en su propio perjuicio.`,
        `Yo no soy responsable de vosotros».`
      ],
      [
        `Скажи: «О люди! К вам явилась истина от вашего Господа. Кто следует прямым путём, тот следует им во благо самому себе,`,
        `а кто заблудился, тот заблудился во вред себе.`,
        `Я не являюсь вашим попечителем».`
      ],
      [
        `Sag: O ihr Menschen, nunmehr ist die Wahrheit von eurem Herrn zu euch gekommen. Wer rechtgeleitet ist, ist nur zu seinem eigenen Nutzen rechtgeleitet,`,
        `und wer irregeht, geht nur zu seinem eigenen Schaden irre.`,
        `Und ich bin nicht Sachwalter über euch.`
      ],
      [
        `Säg: Människor! Sanningen har nu kommit till er från er Herre. Den som låter sig vägledas, vägleds till sin egen fromma,`,
        `och den som går vilse, går vilse till sin egen skada.`,
        `Jag är inte ansvarig för er.`
      ],
      [
        `Abair: A dhaoine, tá an fhírinne tagtha chugaibh ó bhur dTiarna. An té a bhfuil treoir air, tá treoir air ar mhaithe lena anam féin,`,
        `agus an té a théann ar seachrán, téann sé ar seachrán ina aghaidh féin.`,
        `Agus níl mise i mo chaomhnóir oraibh.`
      ],
      [
        `Zeg: O mensen, de waarheid is tot u gekomen van uw Heer. Wie dus geleid wordt, wordt slechts ten bate van zichzelf geleid,`,
        `en wie dwaalt, dwaalt slechts ten nadele van zichzelf.`,
        `En ik ben geen bewaker over u.`
      ],
      [
        `کہہ دیجیے: اے لوگو! تمہارے پاس تمہارے رب کی طرف سے حق آ چکا ہے۔ پس جو ہدایت پائے وہ اپنے ہی لیے ہدایت پاتا ہے،`,
        `اور جو گمراہ ہو وہ اپنے ہی نقصان کے لیے گمراہ ہوتا ہے۔`,
        `اور میں تم پر کوئی داروغہ نہیں ہوں۔`
      ],
      [
        `Katakanlah: "Hai manusia, sesungguhnya telah datang kepadamu kebenaran (Al-Quran) dari Tuhanmu, sebab itu barang siapa yang mendapat petunjuk maka sesungguhnya (petunjuk itu) untuk kebaikan dirinya sendiri.`,
        `Dan barang siapa yang sesat maka sesungguhnya kesesatannya itu mencelakakan dirinya sendiri,`,
        `dan aku bukanlah seorang penjaga terhadap dirimu."`
      ],
      [
        `De ki: Ey insanlar! Size Rabbinizden hak geldi. Artık kim doğru yola gelirse kendi yararına gelmiş olur,`,
        `kim de saparsa kendi zararına sapmış olur.`,
        `Ben sizin üzerinize vekil değilim.`
      ],
      [
        `بگو: ای مردم! به راستی حق از جانب پروردگارتان برای شما آمده است. پس هر که هدایت یابد، تنها به سود خود هدایت یافته،`,
        `و هر که گمراه شود، تنها به زیان خود گمراه شده است.`,
        `و من بر شما نگهبان نیستم.`
      ],
      [
        `বলুন, হে মানুষ! তোমাদের কাছে তোমাদের পালনকর্তার তরফ থেকে সত্য এসে গেছে। এখন যে সরল পথে চলে, সে নিজের কল্যাণের জন্যেই সরল পথে চলে,`,
        `আর যে বিপথগামী হয়, সে নিজের অমঙ্গলের জন্যেই বিপথগামী হয়।`,
        `আর আমি তোমাদের উপর অধিকারী নই।`
      ],
      [
        `Dize: Ó humanos, a verdade chegou-vos da parte do vosso Senhor. Quem se guia, guia-se em benefício de si mesmo,`,
        `e quem se extravia, extravia-se em seu próprio prejuízo.`,
        `E eu não sou responsável por vós.`
      ],
      [
        `你说：世人啊！真理确已从你们的主降临你们了，谁遵循正道，谁自受其益；`,
        `谁误入歧途，谁自受其害。`,
        `我不是监护你们的人。`
      ],
      [
        `言え，「人びとよ，あなたがたの主から，真理があなたがたに下った。それで導きを受ける者は，自分のために導かれ，`,
        `迷う者も，自分のために迷う。`,
        `わたしはあなたがたの保護者ではない。」`
      ],
      [
        `말하라, 사람들이여, 주님으로부터 진리가 너희에게 이르렀으니 인도를 받는 자는 자신을 위해 인도받는 것이요`,
        `길을 잃는 자는 자신에게 해가 되도록 길을 잃을 뿐이라.`,
        `나는 너희를 지키는 자가 아니노라.`
      ],
      [
        `Di': O uomini, la verità è giunta a voi dal vostro Signore. Chi si lascia guidare lo fa a proprio vantaggio,`,
        `e chi si perde, si perde a proprio danno.`,
        `Io non sono responsabile di voi.`
      ],
      [
        `Powiedz: O ludzie! Przyszła już do was prawda od waszego Pana. Kto idzie prostą drogą, ten idzie nią dla swego dobra,`,
        `a kto błądzi, ten błądzi na swoją szkodę.`,
        `A ja nie jestem waszym opiekunem.`
      ],
      [
        `Скажи: «О люди! До вас явилася істина від вашого Господа. Хто йде прямим шляхом, той іде ним на користь собі,`,
        `а хто збивається зі шляху, той збивається на шкоду собі.`,
        `Я не є вашим опікуном».`
      ]
    ],
    number: `سورة يونس / Yunus، الآية 108`
  },

  {
    arabic: [
      `وَأَقِمِ الصَّلَاةَ طَرَفَيِ النَّهَارِ وَزُلَفًا مِّنَ اللَّيْلِ`,
      `إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ`,
      `ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ`
    ],
    translations: [
      [
        `And establish prayer at the two ends of the day and at the approach of the night.`,
        `Indeed, good deeds do away with misdeeds.`,
        `That is a reminder for those who remember.`
      ],
      [
        `Et accomplis la Salât aux deux extrémités du jour et à l'approche de la nuit.`,
        `Les bonnes actions, certes, éloignent les mauvaises.`,
        `Ceci est un rappel pour ceux qui réfléchissent.`
      ],
      [
        `Haz la oración en los dos extremos del día y a primeras horas de la noche.`,
        `Las buenas obras eliminan las malas.`,
        `Es un recuerdo para quienes se acuerdan.`
      ],
      [
        `Совершай молитву в обоих концах дня и в первые часы ночи.`,
        `Воистину, добрые деяния устраняют злые.`,
        `Это — напоминание для помнящих.`
      ],
      [
        `Und verrichte das Gebet an den beiden Enden des Tages und zu den ersten Stunden der Nacht.`,
        `Gewiss, die guten Taten vertreiben die schlechten.`,
        `Das ist eine Ermahnung für diejenigen, die gedenken.`
      ],
      [
        `Förrätta bönen i dagens båda ändar och under nattens första timmar.`,
        `De goda gärningarna utplånar de onda.`,
        `Detta är en påminnelse för dem som kommer ihåg.`
      ],
      [
        `Bunaigh an urnaí ag dhá cheann an lae agus ag tús na hoíche.`,
        `Go deimhin scriosann na gníomhartha maithe na drochghníomhartha.`,
        `Is meabhrúchán é sin dóibh siúd a chuimhníonn.`
      ],
      [
        `En verricht het gebed aan beide uiteinden van de dag en in de eerste uren van de nacht.`,
        `De goede daden nemen de slechte weg.`,
        `Dat is een vermaning voor hen die gedenken.`
      ],
      [
        `اور نماز قائم کرو دن کے دونوں سروں پر اور رات کے کچھ حصے میں۔`,
        `بے شک نیکیاں برائیوں کو مٹا دیتی ہیں۔`,
        `یہ نصیحت ہے نصیحت ماننے والوں کے لیے۔`
      ],
      [
        `Dan dirikanlah sembahyang itu pada kedua tepi siang (pagi dan petang) dan pada bagian permulaan daripada malam.`,
        `Sesungguhnya perbuatan-perbuatan yang baik itu menghapuskan (dosa) perbuatan-perbuatan yang buruk.`,
        `Itulah peringatan bagi orang-orang yang ingat.`
      ],
      [
        `Gündüzün iki ucunda ve gecenin ilk saatlerinde namaz kıl.`,
        `Çünkü iyilikler kötülükleri giderir.`,
        `Bu, öğüt alanlara bir öğüttür.`
      ],
      [
        `و نماز را در دو طرف روز و ساعاتی از شب برپا دار.`,
        `همانا نیکی‌ها بدی‌ها را از میان می‌برند.`,
        `این پندی است برای پندگیرندگان.`
      ],
      [
        `আর দিনের দুই প্রান্তেই নামায ঠিক রাখবে এবং রাতের প্রথমাংশেও।`,
        `নিশ্চয়ই নেক কাজ বদ কাজকে মিটিয়ে দেয়।`,
        `যারা স্মরণ রাখে তাদের জন্য এটি এক স্মারক উপদেশ।`
      ],
      [
        `E cumpre a oração nas duas extremidades do dia e nas primeiras horas da noite.`,
        `Por certo, as boas ações eliminam as más.`,
        `Isso é uma lembrança para os que se lembram.`
      ],
      [
        `你应当在白天的两端和接近黑夜的时刻谨守拜功，`,
        `善事确能消除恶事，`,
        `这是对于记忆者的一种教诲。`
      ],
      [
        `昼の両端と，夜の初めに礼拝を守れ。`,
        `本当に善行は，悪行を消し去る。`,
        `これは銘記する者への訓戒である。`
      ],
      [
        `낮의 양끝과 밤의 초입에 예배를 드리라.`,
        `진실로 선행은 악행을 지워 주나니`,
        `이는 기억하는 이들을 위한 교훈이라.`
      ],
      [
        `Esegui la preghiera alle due estremità del giorno e nelle prime ore della notte.`,
        `In verità le buone azioni cancellano quelle cattive.`,
        `Questo è un monito per coloro che ricordano.`
      ],
      [
        `I odprawiaj modlitwę na obu końcach dnia i w pierwszych godzinach nocy.`,
        `Zaprawdę, dobre uczynki usuwają złe.`,
        `To jest napomnienie dla tych, którzy pamiętają.`
      ],
      [
        `І звершуй молитву на обох кінцях дня та в перші години ночі.`,
        `Воістину, добрі справи усувають лихі.`,
        `Це — нагадування для тих, хто пам'ятає.`
      ]
    ],
    number: `سورة هود / Hud، الآية 114`
  },

  {
    arabic: [
      `قُلْ هَٰذِهِ سَبِيلِي أَدْعُو إِلَى اللَّهِ ۚ`,
      `عَلَىٰ بَصِيرَةٍ أَنَا وَمَنِ اتَّبَعَنِي ۖ`,
      `وَسُبْحَانَ اللَّهِ وَمَا أَنَا مِنَ الْمُشْرِكِينَ`
    ],
    translations: [
      [
        `Say, "This is my way; I invite to Allah with insight,`,
        `I and those who follow me. And exalted is Allah;`,
        `and I am not of those who associate others with Him`
      ],
      [
        `Dis: «Voici ma voie, j'appelle les gens à [la religion] d'Allah,`,
        `moi et ceux qui me suivent, nous basant sur une preuve évidente.`,
        `Gloire à Allah! Et je ne suis point du nombre des associateurs`
      ],
      [
        `Di: «Éste es mi camino. Basado en una prueba visible,`,
        `llamo a Alá, y los que me siguen también.`,
        `¡Gloria a Alá! Yo no soy de los asociadores»`
      ],
      [
        `Скажи: «Таков мой путь.`,
        `Я и мои последователи призываем к Аллаху согласно убеждению.`,
        `Пречист Аллах, и я не являюсь одним из многобожников»`
      ],
      [
        `Sag: Das ist mein Weg: Ich rufe zu Allah aufgrund eines sichtbaren Hinweises,`,
        `ich und diejenigen, die mir folgen.`,
        `Preis sei Allah! Und ich gehöre nicht zu den Götzendienern`
      ],
      [
        `Säg [Muhammad]: "Detta är min väg: jag uppmanar [er] med klarsyn och insikt att dyrka Gud - jag och de som följer mig.`,
        `Stor är Gud i Sin härlighet - [fjärran från] de medhjälpare som de sätter vid Hans sida och som jag tar avstånd från`,
        ``
      ],
      [
        `Abair: Is é seo mo bhealach; tugaim cuireadh chun Allah le léargas,`,
        `mé féin agus iad siúd a leanann mé. Agus is ard é Allah;`,
        `agus nílim ar na daoine a chuireann comhpháirtithe leis.`
      ],
      [
        `Zeg: "Dit is mijn Weg (godsdienst),`,
        `ik en degenen die mij volgen roepen op tot Allah, op grond van een duidelijk bewijs.`,
        `Heilig is Allah, en ik behoor niet tot de veelgodenaanbidders`
      ],
      [
        `کہہ دو میرا رستہ تو یہ ہے میں خدا کی طرف بلاتا ہوں (از روئے یقین`,
        `وبرہان) سمجھ بوجھ کر میں بھی (لوگوں کو خدا کی طرف بلاتا ہوں) اور میرے`,
        `پیرو بھی۔ اور خدا پاک ہے۔ اور میں شرک کرنے والوں میں سے نہیں ہوں`
      ],
      [
        `Katakanlah (Muhammad), "Inilah jalanku,`,
        `aku dan orang-orang yang mengikutiku mengajak (kamu) kepada Allah dengan yakin,`,
        `Mahasuci Allah, dan aku tidak termasuk orang-orang musyrik`
      ],
      [
        `De ki: "Benim yolum budur;`,
        `ben ve bana uyanlar bilerek insanları Allah'a çağırırız. Allah'ı noksan sıfatlardan tenzih ederim.`,
        `Ben asla Allah'a eş koşanlardan değilim`
      ],
      [
        `بگو: «اين است راه من،`,
        `كه من و هر كس (پيروى‌ام) كرد با بينايى به سوى خدا دعوت مى‌كنيم،`,
        `و منزّه است خدا، و من از مشركان نيستم.»`
      ],
      [
        `বলে দিনঃ এই আমার পথ। আমি আল্লাহর দিকে বুঝে`,
        `সুঝে দাওয়াত দেই আমি এবং আমার অনুসারীরা।`,
        `আল্লাহ পবিত্র। আমি অংশীবাদীদের অন্তর্ভুক্ত নই।`
      ],
      [
        `Dize: "Este é o meu caminho: convoco-vos a Allah.`,
        `Estou fundado sobre clarividência, eu e quem me segue.`,
        `E Glorificado seja Allah! E não sou dos idólatras`
      ],
      [
        `你说：这是我的道，我号召人们信仰真主，`,
        `我和随从我的人，都是依据明证的。`,
        `（我证）真主，超绝万物！我不是以物配主的。`
      ],
      [
        `言ってやるがいい。「これこそわたしの道。わたしも，`,
        `わたしに従う者たちも明瞭な証拠の上に立って，アッラーに呼びかける。`,
        `アッラーに讃えあれ。わたしたちは多神を信じる者ではない。」`
      ],
      [
        `백성들에게 일러가로되 이 것이 나의 길이라 나와 그리고`,
        `나 를 따르는 백성들은 예증으로써 하나님을 경배하나이다`,
        `하나님이 여 영광을 받으소서 저는 불신자 중에 있지 않나이다`
      ],
      [
        `Di': “Ecco la mia via: invito ad Allah in tutta chiarezza,`,
        `io stesso e coloro che mi seguono.`,
        `Gloria ad Allah, non sono uno dei politeisti”`
      ],
      [
        `Powiedz: "Oto jest moja droga!`,
        `Ja wzywam do Boga na podstawie jasnego dowodu - ja i ci, którzy postępują za mną.`,
        `Chwała niech będzie Bogu! Ja nie należę do bałwochwalców`
      ],
      [
        `Скажи: «Це — мій шлях. Разом із тими, хто йде за мною,`,
        `я закликаю до Аллага так, як мені дано це зрозуміти.`,
        `Преславний Аллаг! Я не багатобожник!»`
      ]
    ],
    number: `سورة يوسف / Yusuf، الآية 108`
  },

  {
    arabic: [
      `لَهُ مُعَقِّبَاتٌ مِّن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ يَحْفَظُونَهُ مِنْ أَمْرِ اللَّهِ`,
      `إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ`,
      `وَإِذَا أَرَادَ اللَّهُ بِقَوْمٍ سُوءًا فَلَا مَرَدَّ لَهُ وَمَا لَهُم مِّن دُونِهِ مِن وَالٍ`
    ],
    translations: [
      [
        `For each one are successive [angels] before him and behind him who protect him by the decree of Allah.`,
        `Indeed, Allah will not change the condition of a people until they change what is in themselves.`,
        `And when Allah intends for a people ill, there is no repelling it. And there is not for them besides Him any patron.`
      ],
      [
        `Chacun a des Anges qui se relaient devant lui et derrière lui pour le garder par ordre d'Allah.`,
        `En vérité, Allah ne modifie point l'état d'un peuple, tant que les [individus qui le composent] ne modifient pas ce qui est en eux-mêmes.`,
        `Et lorsqu'Allah veut un malheur pour un peuple, nul ne peut le repousser; et ils n'ont en dehors de Lui aucun protecteur.`
      ],
      [
        `Cada uno tiene ángeles que se turnan ante él y detrás de él para protegerle por orden de Alá.`,
        `Alá no cambia la condición de un pueblo mientras ellos no cambien lo que hay en sí mismos.`,
        `Cuando Alá quiere un mal para un pueblo, nadie puede evitarlo, y no tienen fuera de Él protector alguno.`
      ],
      [
        `У каждого есть сменяющие друг друга ангелы, спереди и сзади, которые оберегают его по велению Аллаха.`,
        `Воистину, Аллах не изменяет положения людей, пока они сами не изменят того, что в них самих.`,
        `А когда Аллах пожелает людям зла, то нет для этого преграды, и нет у них, кроме Него, покровителя.`
      ],
      [
        `Jeder hat Engel, die einander ablösen, vor ihm und hinter ihm, die ihn auf Allahs Geheiß behüten.`,
        `Allah verändert den Zustand eines Volkes nicht, solange sie nicht verändern, was in ihnen selbst ist.`,
        `Und wenn Allah einem Volk Übles will, so gibt es keine Abwehr dagegen, und sie haben außer Ihm keinen Beschützer.`
      ],
      [
        `Var och en har änglar som avlöser varandra framför honom och bakom honom och som bevakar honom enligt Guds bud.`,
        `Gud förändrar inte ett folks tillstånd förrän de själva förändrar vad som finns inom dem.`,
        `Och när Gud vill ett folk något ont kan ingen avvärja det, och de har ingen annan beskyddare än Honom.`
      ],
      [
        `Tá aingil ina ndiaidh a chéile roimh gach duine agus ina dhiaidh a chosnaíonn é le haitheanta Allah.`,
        `Go deimhin ní athraíonn Allah staid pobail go n-athraíonn siad an rud atá iontu féin.`,
        `Agus nuair a theastaíonn olc ó Allah do phobal, níl aon seasamh ina choinne, agus níl aon chosantóir acu seachas Eisean.`
      ],
      [
        `Elk heeft engelen die elkaar opvolgen voor hem en achter hem, die hem beschermen op het bevel van Allah.`,
        `Allah verandert de toestand van een volk niet, totdat zij veranderen wat in henzelf is.`,
        `En wanneer Allah een volk kwaad toewenst, is er geen afwenden van, en zij hebben buiten Hem geen beschermer.`
      ],
      [
        `اس کے آگے اور پیچھے باری باری آنے والے فرشتے مقرر ہیں جو اللہ کے حکم سے اس کی حفاظت کرتے ہیں۔`,
        `بے شک اللہ کسی قوم کی حالت نہیں بدلتا جب تک وہ خود اپنی حالت کو نہ بدل ڈالیں۔`,
        `اور جب اللہ کسی قوم پر برائی کا ارادہ کر لے تو اسے کوئی ٹال نہیں سکتا اور اس کے سوا ان کا کوئی مددگار نہیں۔`
      ],
      [
        `Bagi manusia ada malaikat-malaikat yang selalu mengikutinya bergiliran, di muka dan di belakangnya, mereka menjaganya atas perintah Allah.`,
        `Sesungguhnya Allah tidak merubah keadaan sesuatu kaum sebelum mereka merubah keadaan yang ada pada diri mereka sendiri.`,
        `Dan apabila Allah menghendaki keburukan terhadap sesuatu kaum, maka tak ada yang dapat menolaknya; dan sekali-kali tak ada pelindung bagi mereka selain Dia.`
      ],
      [
        `Her insanın önünde ve arkasında, Allah'ın emriyle onu koruyan, birbirini izleyen melekler vardır.`,
        `Bir kavim kendi durumunu değiştirmedikçe, Allah onların durumunu değiştirmez.`,
        `Allah bir kavme kötülük dilediğinde artık onu geri çevirmek mümkün değildir; onların O'ndan başka hiçbir yardımcısı yoktur.`
      ],
      [
        `برای هر انسان فرشتگانی است که پی در پی از پیش رو و پشت سر او را به فرمان خدا نگهبانی می‌کنند.`,
        `خداوند وضع هیچ قومی را تغییر نمی‌دهد مگر آنکه آنان آنچه را در خودشان است تغییر دهند.`,
        `و هرگاه خدا برای قومی بدی بخواهد، هیچ بازگرداننده‌ای برای آن نیست و جز او برایشان سرپرستی نیست.`
      ],
      [
        `তার পক্ষে প্রত্যেকের অগ্রে ও পশ্চাতে একের পর এক ফেরেশতা রয়েছে, যারা আল্লাহর নির্দেশে তার হেফাযত করে।`,
        `নিশ্চয়ই আল্লাহ কোন সম্প্রদায়ের অবস্থা পরিবর্তন করেন না, যতক্ষণ না তারা নিজেদের অবস্থা নিজেরা পরিবর্তন করে।`,
        `আর আল্লাহ যখন কোন জাতির মন্দ চান, তখন তা রদ হবার নয় এবং তিনি ব্যতীত তাদের কোন সাহায্যকারী নেই।`
      ],
      [
        `Cada um tem anjos que se revezam diante e atrás dele, que o guardam por ordem de Allah.`,
        `Por certo, Allah não modifica a condição de um povo até que ele modifique o que há em si mesmo.`,
        `E quando Allah quer um mal para um povo, não há como evitá-lo, e não têm, fora d'Ele, protetor algum.`
      ],
      [
        `每个人都有许多天神，轮流在他的前后保护他，是奉真主的命令的。`,
        `真主必定不改变任何民众的现状，直到他们改变自己的情况。`,
        `当真主要降灾于某民众的时候，谁也无法抵御，除他外，他们绝无保护者。`
      ],
      [
        `各人には，その前にも後にも，次々と来る天使たちがいて，アッラーの御命令によって，かれを守護している。`,
        `本当にアッラーは，人が自分自身を変えない限り，決してその人びとの状態を変えられない。`,
        `またアッラーが人びとに災厄を御望みの時は，それを防ぐ術はなく，かれの外に保護者はいない。`
      ],
      [
        `각 사람에게는 앞과 뒤에서 교대로 하나님의 명령으로 그를 보호하는 천사들이 있느니라.`,
        `하나님은 한 민족이 스스로 자신들의 상태를 바꾸지 않는 한 그들의 상태를 바꾸지 않으시나니`,
        `하나님이 한 민족에게 재앙을 원하시면 그것을 막을 자가 없고 그분 외에는 그들의 보호자도 없노라.`
      ],
      [
        `Ognuno ha angeli che si danno il cambio davanti a lui e dietro di lui e lo proteggono per ordine di Allah.`,
        `In verità Allah non cambia la condizione di un popolo finché esso non cambia ciò che è in se stesso.`,
        `E quando Allah vuole il male per un popolo, nessuno può impedirlo, e non hanno altro protettore all'infuori di Lui.`
      ],
      [
        `Każdy ma przed sobą i za sobą aniołów, którzy się zmieniają, i strzegą go z rozkazu Allaha.`,
        `Zaprawdę, Allah nie zmienia tego, co jest u jakiegoś narodu, dopóki oni sami nie zmienią tego, co jest w nich samych.`,
        `A kiedy Allah chce zła dla jakiegoś narodu, nikt tego nie odwróci i nie mają oni poza Nim żadnego opiekuna.`
      ],
      [
        `У кожного є ангели, що змінюють один одного, спереду й ззаду, які охороняють його за велінням Аллаха.`,
        `Воістину, Аллах не змінює становища народу, доки вони самі не змінять того, що в них самих.`,
        `А коли Аллах бажає народу зла, то немає від цього захисту, і немає в них, окрім Нього, покровителя.`
      ]
    ],
    number: `سورة الرعد / Ar-Ra'd، الآية 11`
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
        `믿는 자들, 그들의 마음은 하나님를 기억함으로써 평안을 얻는다.`,
        `실로 하나님를 기억함으로써 마음은 평안을 얻는다.`,
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
      `الر ۚ`,
      `كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ بِإِذْنِ رَبِّهِمْ إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ`,
      ``
    ],
    translations: [
      [
        `Alif, Lam, Ra. [This is] a Book which We have revealed to you, [O Muhammad],`,
        `that you might bring mankind out of darknesses into the light by permission of their Lord - to the path of the Exalted in Might,`,
        `the Praiseworthy`
      ],
      [
        `Alif, Lâm, Râ. (Voici) un livre que nous avons fait descendre sur toi,`,
        `afin que - par la permission de leur Seigneur - tu fasses sortir les gens des ténèbres vers la lumière,`,
        `sur la voie du Tout Puissant, du Digne de louange`
      ],
      [
        `Alif, Lam, Ra. Ésta es una Escritura que te hemos revelado para que,`,
        `con permiso de su Señor, saques a los hombres de las tinieblas a la luz,`,
        `a la vía del Poderoso, del Digno de Alabanza`
      ],
      [
        `Алиф. Лам. Ра. Мы ниспослали тебе Писание,`,
        `чтобы ты вывел людей с дозволения их Господа из мраков к свету - на путь Могущественного,`,
        `Достохвального`
      ],
      [
        `Alif-Lam-Ra. Dies ist ein Buch, das Wir zu dir hinabgesandt haben,`,
        `damit du die Menschen mit der Erlaubnis ihres Herrn aus den Finsternissen hinaus ins Licht bringst,`,
        `auf den Weg des Allmächtigen und Lobenswürdigen`
      ],
      [
        `Alif lam ra. [Detta är] en helig Skrift som Vi har uppenbarat för dig,`,
        `för att du skall leda människorna ut ur mörkret till ljuset enligt deras Herres vilja,`,
        `till den väg, som för till den Allsmäktige som allt lov och pris tillhör`
      ],
      [
        `Alif, Lám, Rá. [Is] Leabhar é a chuireamar anuas chugat, [a Mhuhamad],`,
        `chun go dtabharfá an chine daonna amach as na dorchadais isteach sa solas le cead a dTiarna,`,
        `chuig conair an Chumhachtaigh, an Mholta.`
      ],
      [
        `Alif, Lam, Ra. (Dit is) een Boek dat Wij aan jou (O Moehammad) neergezonden hebben,`,
        `opdat jij de mensen uit de duisternissen naar het licht zult voeren,`,
        `met verlof van hun Heer, naar het Pad van de Almachtige, de Geprezene`
      ],
      [
        `الٓرٰ۔ (یہ) ایک (پُرنور) کتاب (ہے) اس کو ہم نے تم پر اس لیے نازل`,
        `کیا ہے کہ لوگوں کو اندھیرے سے نکال کر روشنی کی طرف لے جاؤ (یعنی)`,
        `ان کے پروردگار کے حکم سے غالب اور قابل تعریف (خدا) کے رستے کی طرف`
      ],
      [
        `Alif Lām Rā\`.`,
        `(Ini adalah) Kitab yang Kami turunkan kepadamu (Muhammad) agar engkau mengeluarkan manusia dari kegelapan kepada cahaya terang-benderang dengan izin Tuhan,`,
        `(yaitu) menuju jalan Tuhan Yang Mahaperkasa, Maha Terpuji`
      ],
      [
        `Elif, Lam, Ra; Bu, Allah'ın izniyle, insanları karanlıklardan aydınlığa,`,
        `güçlü ve övülmeğe layık, göklerde ve yerde olanların sahibi Allah'ın yoluna çıkarman için,`,
        `sana indirdiğimiz Kitaptır. Uğrayacakları çetin azabdan dolayı vay kafirlerin haline`
      ],
      [
        `الف، لام، راء.`,
        `كتابى است كه آن را به سوى تو فرود آورديم تا مردم را به اذن پروردگارشان از تاريكيها به سوى روشنايى بيرون آورى:`,
        `به سوى راه آن شكست ناپذير ستوده`
      ],
      [
        `আলিফ-লাম-রা; এটি একটি গ্রন্থ,`,
        `যা আমি আপনার প্রতি নাযিল করেছি-যাতে আপনি মানুষকে অন্ধকার থেকে আলোর দিকে বের করে আনেন-পরাক্রান্ত,`,
        `প্রশংসার যোগ্য পালনকর্তার নির্দেশে তাঁরই পথের দিকে।`
      ],
      [
        `Alif, Lãm, Rã. Este é um Livro, que fizemos descer para ti, Muhammad,`,
        `a fim de fazeres sair os homens das trevas para a Luz,`,
        `com a permissão de seu Senhor, para a senda dO Todo-Poderoso, dO Louvável`
      ],
      [
        `艾列弗，俩目，拉仪。（这是）一章经，`,
        `我把它降示你，以便你奉主的命令而把众人从重重黑暗中引入光明，`,
        `引入强大的、可颂的主的大道。`
      ],
      [
        `アリフ・ラーム・ラー。われはあなたに，`,
        `あなたが主の御許しによって，人びとを暗黒から光明に，`,
        `偉大な讃美すべき方の道に導き出すために啓典を下した。`
      ],
      [
        `알리프 람 라 이것은 하나님이 그대에게 계시한 한권의 성서`,
        `이거늘 이로 말미암아 백성들을 암흑에서 모든 칭송을 흘로`,
        `받을 그분의 길 광명으로 주님의 허락 에 따라 인도 하라`
      ],
      [
        `Alif, Lâm, Râ. Abbiamo fatto scendere su di te un Libro,`,
        `affinché, con il permesso del loro Signore, tu tragga le genti dalle tenebre alla luce,`,
        `sulla via dell'Eccelso, del Degno di lode`
      ],
      [
        `Alif. Lam. Ra. Oto Księga; posłaliśmy ją tobie,`,
        `abyś wyprowadził ludzi z ciemności ku światłu - za pozwoleniem ich Pana - ku drodze Potężnego,`,
        `Godnego Chwały`
      ],
      [
        `Аліф. Лям. Ра. Це Писання зіслано тобі для того,`,
        `щоб ти вивів людей із темряви до світла з дозволу Господа їхнього,`,
        `до шляху Великого, Хвалимого`
      ]
    ],
    number: `سورة إبراهيم / Ibrahim، الآية 1`
  },

  {
    arabic: [
      `وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ`,
      `وَلَئِن كَفَرْتُمْ`,
      `إِنَّ عَذَابِي لَشَدِيدٌ`
    ],
    translations: [
      [
        `And [remember] when your Lord proclaimed, "If you are grateful, I will surely increase you [in favor];`,
        `but if you deny,`,
        `indeed, My punishment is severe."`
      ],
      [
        `Et lorsque votre Seigneur proclama: «Si vous êtes reconnaissants, très certainement J'augmenterai [Mes bienfaits] pour vous,`,
        `mais si vous êtes ingrats,`,
        `Mon châtiment sera terrible».`
      ],
      [
        `Y [recordad] cuando vuestro Señor proclamó: «Si sois agradecidos, os daré aún más;`,
        `pero si sois ingratos,`,
        `Mi castigo será severo».`
      ],
      [
        `И вот возвестил ваш Господь: «Если вы будете благодарны, Я непременно приумножу [Мои милости] для вас,`,
        `а если вы будете неблагодарны,`,
        `то Моё наказание — суровое».`
      ],
      [
        `Und als euer Herr verkündete: Wenn ihr dankbar seid, werde Ich euch gewiss mehr geben;`,
        `wenn ihr aber undankbar seid,`,
        `so ist Meine Strafe wahrlich streng.`
      ],
      [
        `Och minns när er Herre förkunnade: Om ni är tacksamma skall Jag ge er än mer,`,
        `men om ni är otacksamma,`,
        `är Mitt straff sannerligen hårt.`
      ],
      [
        `Agus [cuimhnígí] nuair a d'fhógair bhur dTiarna: "Má bhíonn sibh buíoch, cinnte méadóidh mé daoibh;`,
        `ach má bhíonn sibh míbhuíoch,`,
        `go deimhin tá mo phionós dian."`
      ],
      [
        `En toen uw Heer verkondigde: Als gij dankbaar zijt, zal Ik u zeker meer geven;`,
        `maar als gij ondankbaar zijt,`,
        `dan is Mijn straf voorwaar streng.`
      ],
      [
        `اور (یاد کرو) جب تمہارے رب نے اعلان فرمایا کہ اگر تم شکر کرو گے تو میں تمہیں اور زیادہ دوں گا،`,
        `اور اگر تم ناشکری کرو گے`,
        `تو میرا عذاب یقیناً بہت سخت ہے۔`
      ],
      [
        `Dan (ingatlah juga), tatkala Tuhanmu memaklumkan: "Sesungguhnya jika kamu bersyukur, pasti Kami akan menambah (nikmat) kepadamu,`,
        `dan jika kamu mengingkari (nikmat-Ku),`,
        `maka sesungguhnya azab-Ku sangat pedih."`
      ],
      [
        `Hani Rabbiniz şöyle bildirmişti: Eğer şükrederseniz, elbette size nimetimi artırırım,`,
        `yok eğer nankörlük ederseniz,`,
        `şüphesiz azabım pek şiddetlidir.`
      ],
      [
        `و [یاد کنید] هنگامی را که پروردگارتان اعلام کرد: اگر شکرگزاری کنید، قطعاً [نعمت] شما را افزون خواهم کرد،`,
        `و اگر ناسپاسی کنید،`,
        `همانا عذاب من سخت است.`
      ],
      [
        `আর যখন তোমাদের পালনকর্তা ঘোষণা করলেন, যদি কৃতজ্ঞতা স্বীকার কর, তবে অবশ্যই তোমাদেরকে অধিক দেব,`,
        `আর যদি অকৃতজ্ঞ হও,`,
        `তবে নিশ্চয়ই আমার শাস্তি হবে কঠিন।`
      ],
      [
        `E [lembrai-vos] de quando o vosso Senhor proclamou: Se agradecerdes, certamente vos darei mais;`,
        `mas se renegardes,`,
        `por certo, o Meu castigo é severo.`
      ],
      [
        `当时，你们的主宣告说：你们如果感谢，我必定对你们恩上加恩；`,
        `你们如果忘恩，`,
        `那么，我的刑罚确是严厉的。`
      ],
      [
        `またあなたがたの主が，「もしあなたがたが感謝するならば，必ずわれは更にあなたがたに恩恵を加えよう。`,
        `だがもし不信心ならば，`,
        `本当にわが懲罰は厳しいのである」と宣告された時を思い起こせ。`
      ],
      [
        `너희 주님께서 선언하셨나니 만일 너희가 감사한다면 내가 더욱 많이 주리라.`,
        `그러나 너희가 배은망덕한다면`,
        `진실로 나의 징벌은 혹독하리라.`
      ],
      [
        `E quando il vostro Signore proclamò: Se siete riconoscenti, vi darò di più;`,
        `ma se siete ingrati,`,
        `in verità il Mio castigo sarà severo.`
      ],
      [
        `I oto ogłosił wasz Pan: Jeśli będziecie wdzięczni, na pewno dam wam więcej;`,
        `a jeśli będziecie niewdzięczni,`,
        `to zaprawdę, Moja kara jest straszna.`
      ],
      [
        `І ось сповістив ваш Господь: «Якщо ви будете вдячні, то Я неодмінно примножу [Мої милості] для вас,`,
        `а якщо ви будете невдячні,`,
        `то Моя кара — сувора».`
      ]
    ],
    number: `سورة إبراهيم / Ibrahim، الآية 7`
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
        `실로 하나님는 정의와 선행, 친족에게 베푸는 것을 명령하시고,`,
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
      `ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ`,
      `وَجَادِلْهُمْ بِالَّتِي هِيَ أَحْسَنُ ۚ`,
      `إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَنْ ضَلَّ عَنْ سَبِيلِهِ ۖ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ`
    ],
    translations: [
      [
        `Invite to the way of your Lord with wisdom and good instruction,`,
        `and argue with them in a way that is best. Indeed, your Lord is most knowing of who has strayed from His way,`,
        `and He is most knowing of who is [rightly] guided`
      ],
      [
        `Par la sagesse et la bonne exhortation appelle (les gens) au sentier de ton Seigneur.`,
        `Et discute avec eux de la meilleure façon.`,
        `Car c'est ton Seigneur qui connaît le mieux celui qui s'égare de Son sentier et c'est Lui qui connaît le mieux ceux qui sont bien guidés`
      ],
      [
        `Llama al camino de tu Señor con sabiduría y buena exhortación.`,
        `Discute con ellos de la manera más conveniente.`,
        `Tu Señor conoce mejor que nadie a quien se extravía de Su camino y conoce mejor que nadie a quien está bien dirigido`
      ],
      [
        `Призывай на путь Господа мудростью и добрым увещеванием и веди спор с ними наилучшим образом.`,
        `Воистину, твой Господь лучше знает тех,`,
        `кто сошел с Его пути, и лучше знает тех, кто следует прямым путем`
      ],
      [
        `Rufe zum Weg deines Herrn mit Weisheit und schöner Ermahnung,`,
        `und streite mit ihnen in bester Weise. Gewiß, dein Herr kennt sehr wohl,`,
        `wer von Seinem Weg abirrt, und Er kennt sehr wohl die Rechtgeleiteten`
      ],
      [
        `KALLA [människorna, Muhammad] med kloka och goda ord att följa din Herres väg,`,
        `och lägg fram argumenten på ett måttfullt och försynt sätt;`,
        `din Herre vet bäst vem det är som avviker från Hans väg och Han vet bäst vem det är som följer Hans ledning`
      ],
      [
        `Tabhair cuireadh chuig conair do Thiarna le críonnacht agus le comhairle mhaith,`,
        `agus déan argóint leo ar an mbealach is fearr. Go deimhin, is é do Thiarna is eolaí ar an té a chuaigh ar seachrán óna chonair,`,
        `agus is Eisean is eolaí ar iad siúd atá ar an treo ceart.`
      ],
      [
        `Nodig uit tot de Weg van jouw Heer, met wijsheid en goed onderricht,`,
        `en wissel met hen van gedachten op de beste wijze. Voorwaar,`,
        `jouw Heer weet het beste wie van Zijn Weg afgedwaald is en Hij weet beter wie de rechtgeleiden zijn`
      ],
      [
        `(اے پیغمبر) لوگوں کو دانش اور نیک نصیحت سے اپنے پروردگار کے رستے کی طرف بلاؤ۔`,
        `اور بہت ہی اچھے طریق سے ان سے مناظرہ کرو۔ جو اس کے رستے سے بھٹک گیا تمہارا`,
        `پروردگار اسے بھی خوب جانتا ہے اور جو رستے پر چلنے والے ہیں ان سے بھی خوب واقف ہے`
      ],
      [
        `Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pengajaran yang baik,`,
        `dan berdebatlah dengan mereka dengan cara yang baik. Sesungguhnya Tuhanmu,`,
        `Dialah yang lebih mengetahui siapa yang sesat dari jalan-Nya dan Dialah yang lebih mengetahui siapa yang mendapat petunjuk`
      ],
      [
        `Rabbinin yoluna, hikmetle, güzel öğütle çağır;`,
        `onlarla en güzel şekilde tartış; doğrusu Rabbin, kendi yolundan sapanları daha iyi bilir.`,
        `O, doğru yolda olanları da en iyi bilir`
      ],
      [
        `با حكمت و اندرز نيكو به راه پروردگارت دعوت كن و با آنان به [شيوه‌اى‌] كه نيكوتر است مجادله نماى.`,
        `در حقيقت، پروردگار تو به [حال‌] كسى كه از راه او منحرف شده داناتر،`,
        `و او به [حال‌] راه‌يافتگان [نيز ]داناتر است`
      ],
      [
        `আপন পালনকর্তার পথের প্রতি আহবান করুন জ্ঞানের কথা বুঝিয়ে ও উপদেশ শুনিয়ে উত্তমরূপে এবং তাদের সাথে বিতর্ক করুন পছন্দ যুক্ত পন্থায়। নিশ্চয় আপনার পালনকর্তাই ঐ ব্যক্তি সম্পর্কে বিশেষ ভাবে জ্ঞাত রয়েছেন,`,
        `যে তাঁর পথ থেকে বিচ্যুত হয়ে পড়েছে এবং তিনিই ভাল জানেন তাদেরকে,`,
        `যারা সঠিক পথে আছে।`
      ],
      [
        `Convoca ao caminho de teu Senhor, com a sabedoria e a bela exortação,`,
        `e discute com eles, da melhor maneira. Por certo,`,
        `Allah é bem Sabedor de quem se descaminha de Seu caminho e Ele é bem Sabedor dos que são guiados`
      ],
      [
        `你应凭智慧和善言而劝人遵循主道，`,
        `你应当以最优秀的态度与人辩论，你的主的确知道谁是背离他的正道的，`,
        `他的确知道谁是遵循他的正道的。`
      ],
      [
        `英知と良い話し方で，（凡ての者を）あなたの主の道に招け。`,
        `最善の態度でかれらと議論しなさい。あなたの主は，`,
        `かれの道から迷う者と，また導かれる者を最もよく知っておられる。`
      ],
      [
        `지혜와 아름다운 설교로 모두를 하나님의 길로 인도하되`,
        `가 장 훌륭한 방법으로 그들을 맞으 라 하나님은 그분의`,
        `길을 벗어난 자와 바른 길로 가는자를 알고 계 심이라`
      ],
      [
        `Chiama al sentiero del tuo Signore con la saggezza e la buona parola e discuti con loro`,
        `nella maniera migliore. In verità il tuo Signore conosce meglio [di ogni altro] chi si`,
        `allontana dal Suo sentiero e conosce meglio [di ogni altro] coloro che sono ben guidati`
      ],
      [
        `Wzywaj ku drodze twego Pana z mądrością i pięknym napomnieniem!`,
        `Rozmawiaj z nimi w najlepszy sposób! Zaprawdę, twój Pan zna najlepiej tych,`,
        `którzy zeszli z Jego drogi; i On zna najlepiej tych, którzy idą drogą prostą`
      ],
      [
        `Клич на шлях Господа свого з мудрістю й добрим повчанням і сперечайся з ними тільки тим,`,
        `що найкраще. Воістину, твій Господь краще знає,`,
        `хто збився зі шляху Його, і Він краще знає, хто йде прямим шляхом`
      ]
    ],
    number: `سورة النحل / An-Nahl، الآية 125`
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
      `وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ وَحَمَلْنَاهُمْ فِي الْبَرِّ`,
      `وَالْبَحْرِ وَرَزَقْنَاهُمْ مِنَ الطَّيِّبَاتِ`,
      `وَفَضَّلْنَاهُمْ عَلَىٰ كَثِيرٍ مِمَّنْ خَلَقْنَا تَفْضِيلًا`
    ],
    translations: [
      [
        `And We have certainly honored the children of Adam and carried them on`,
        `the land and sea and provided for them of the good things and preferred`,
        `them over much of what We have created, with [definite] preference`
      ],
      [
        `Certes, Nous avons honoré les fils d'Adam. Nous les avons transportés sur terre et sur mer,`,
        `leur avons attribué de bonnes choses comme nourriture,`,
        `et Nous les avons nettement préférés à plusieurs de Nos créatures`
      ],
      [
        `Hemos honrado a los hijos de Adán. Los hemos llevado por tierra y por mar,`,
        `les hemos proveído de cosas buenas y los hemos preferido marcadamente a muchas otras criaturas`,
        ``
      ],
      [
        `Мы почтили сынов Адама и позволяем им передвигаться`,
        `по суше и морю. Мы наделили их благами и даровали`,
        `им явное превосходство над многими другими тварями`
      ],
      [
        `Und Wir haben ja die Kinder Adams geehrt;`,
        `Wir haben sie auf dem Festland und auf dem Meer getragen und sie von den guten Dingen versorgt,`,
        `und Wir haben sie vor vielen von denen, die Wir erschaffen haben, eindeutig bevorzugt`
      ],
      [
        `Vi har sannerligen visat Adams söner stor heder. Vi har gjort det möjligt`,
        `för dem att färdas över land och hav och försörjt dem med god och hälsosam`,
        `föda och gynnat dem framför många av de andra varelser som Vi har skapat`
      ],
      [
        `Agus go deimhin thug muid onóir do chlann Adaimh,`,
        `agus iompraíomar iad ar tír agus ar muir, agus bheathaíomar iad le rudaí maithe,`,
        `agus roghnaíomar iad thar mórán dá gcruthaíomar le rogha shoiléir.`
      ],
      [
        `En voorzeker, Wij hebben de kinderen van Adam geëerd. Wij brachten hen op het land en op de zee.`,
        `Wij gaven hun levensonderhoud van het goede en Wij bevoorrechtten hen met een privilege boven vele van de andere schepsels die Wij hebben geschapen`,
        ``
      ],
      [
        `اور ہم نے بنی آدم کو عزت بخشی اور ان کو`,
        `جنگل اور دریا میں سواری دی اور پاکیزہ روزی`,
        `عطا کی اور اپنی بہت سی مخلوقات پر فضیلت دی`
      ],
      [
        `Dan sungguh, Kami telah memuliakan anak cucu Adam, dan Kami angkut mereka di darat dan di laut,`,
        `dan Kami beri mereka rezeki dari yang baik-baik dan Kami lebihkan mereka di atas banyak makhluk yang Kami ciptakan dengan kelebihan yang sempurna`,
        ``
      ],
      [
        `And olsun ki, biz insanoğullarını şerefli kıldık,`,
        `onların karada ve denizde gezmesini sağladık, temiz şeylerle onları rızıklandırdık,`,
        `yaratıklarımızın pek çoğundan üstün kıldık`
      ],
      [
        `و به راستى ما فرزندان آدم را گرامى داشتيم،`,
        `و آنان را در خشكى و دريا [بر مركبها] برنشانديم، و از چيزهاى پاكيزه به ايشان روزى داديم،`,
        `و آنها را بر بسيارى از آفريده‌هاى خود برترى آشكار داديم`
      ],
      [
        `নিশ্চয় আমি আদম সন্তানকে মর্যাদা দান করেছি,`,
        `আমি তাদেরকে স্থলে ও জলে চলাচলের বাহন দান করেছি;`,
        `তাদেরকে উত্তম জীবনোপকরণ প্রদান করেছি এবং তাদেরকে অনেক সৃষ্ট বস্তুর উপর শ্রেষ্ঠত্ব দান করেছি।`
      ],
      [
        `E, com efeito,`,
        `honramos os filhos de Adão e levamo-los por terra e mar e demo-lhes por sustento das cousas benignas,`,
        `e preferimo-los, nitidamente, a muitos dos que criamos`
      ],
      [
        `我确已优待阿丹的后裔，`,
        `而使他们在陆上或海上都有所骑乘，我以佳美的食物供给他们，`,
        `我使他们大大地超过我所创造的许多人。`
      ],
      [
        `われはアーダムの子孫を重んじて海陸にかれらを運び，`,
        `また種々の良い（暮らし向きのための）ものを支給し，`,
        `またわれが創造した多くの優れたものの上に，かれらを優越させたのである。`
      ],
      [
        `하나님은 아담의 자손에게 은혜를 베풀어 육지와 바다에서`,
        `그들을 운반하여 주고 그들에게 좋은 양식을 부여하여`,
        `하나님이 창조한 어떤 것보다 그들을 위에 두었노라`
      ],
      [
        `In verità abbiamo onorato i figli di Adamo, li abbiamo condotti`,
        `sulla terra e sul mare e abbiamo concesso loro cibo eccellente`,
        `e li abbiamo fatti primeggiare su molte delle Nostre creature`
      ],
      [
        `W Dniu, kiedy wezwiemy wszystkich ludzi razem z ich przewodnikiem, to ci,`,
        `którym zostanie dana księga do ich prawicy - będą czytać swoją księgę i nie zostanie im wyrządzona niesprawiedliwość,`,
        `nawet na łupinkę daktyla`
      ],
      [
        `Ми пошанували синів Адама й дозволили їм пересуватися`,
        `сушею та морем, наділили їх благами й віддали`,
        `їм велику перевагу перед багатьма іншими творіннями`
      ]
    ],
    number: `سورة الإسراء / Al-Isra، الآية 70`
  },

  {
    arabic: [
      `وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ`,
      `إِنَّ الْبَاطِلَ كَانَ زَهُوقًا`,
      ``
    ],
    translations: [
      [
        `And say, "Truth has come, and falsehood has departed.`,
        `Indeed is falsehood, [by nature], ever bound to depart."`,
        ``
      ],
      [
        `Et dis: «La vérité est venue et l'erreur a disparu.`,
        `Car l'erreur est, de nature, vouée à disparaître».`,
        ``
      ],
      [
        `Y di: «Ha llegado la verdad y ha desaparecido la falsedad.`,
        `La falsedad está destinada a desaparecer».`,
        ``
      ],
      [
        `И скажи: «Явилась истина, и исчезла ложь.`,
        `Воистину, ложь обречена на исчезновение».`,
        ``
      ],
      [
        `Und sag: Die Wahrheit ist gekommen, und das Falsche ist verschwunden.`,
        `Das Falsche ist ja dazu bestimmt zu verschwinden.`,
        ``
      ],
      [
        `Och säg: Sanningen har kommit och lögnen har försvunnit.`,
        `Lögnen är ju dömd att försvinna.`,
        ``
      ],
      [
        `Agus abair: "Tá an fhírinne tagtha agus tá an bhréag imithe.`,
        `Go deimhin is í an bhréag a imíonn i gcónaí."`,
        ``
      ],
      [
        `En zeg: De waarheid is gekomen en de valsheid is verdwenen.`,
        `Voorwaar, de valsheid is voorbestemd te verdwijnen.`,
        ``
      ],
      [
        `اور کہہ دیجیے: حق آ گیا اور باطل مٹ گیا۔`,
        `بے شک باطل مٹنے ہی والا ہے۔`,
        ``
      ],
      [
        `Dan katakanlah: "Yang benar telah datang dan yang batil telah lenyap".`,
        `Sesungguhnya yang batil itu adalah sesuatu yang pasti lenyap.`,
        ``
      ],
      [
        `De ki: Hak geldi, batıl yok oldu.`,
        `Zaten batıl yok olmaya mahkûmdur.`,
        ``
      ],
      [
        `و بگو: حق آمد و باطل نابود شد.`,
        `همانا باطل همواره نابودشدنی است.`,
        ``
      ],
      [
        `বলুন, সত্য এসেছে এবং মিথ্যা বিলুপ্ত হয়েছে।`,
        `নিশ্চয়ই মিথ্যা বিলুপ্ত হওয়ারই ছিল।`,
        ``
      ],
      [
        `E dize: A verdade chegou e o erro se desvaneceu.`,
        `Por certo, o erro é, por natureza, fadado a desaparecer.`,
        ``
      ],
      [
        `你说：真理已来临，虚妄已消逝，`,
        `虚妄确是易于消逝的。`,
        ``
      ],
      [
        `そして言え，「真理が到来し，虚偽は消え去った。`,
        `本当に虚偽は，消え去るものである。」`,
        ``
      ],
      [
        `말하라, 진리가 왔고 거짓은 사라졌노라.`,
        `진실로 거짓은 사라지게 마련이니라.`,
        ``
      ],
      [
        `E di': È venuta la verità ed è svanita la falsità.`,
        `In verità la falsità è destinata a svanire.`,
        ``
      ],
      [
        `I powiedz: Przyszła prawda, a fałsz zniknął.`,
        `Zaprawdę, fałsz zawsze ginie.`,
        ``
      ],
      [
        `І скажи: «Явилася істина, і зникла неправда.`,
        `Воістину, неправда приречена зникнути».`,
        ``
      ]
    ],
    number: `سورة الإسراء / Al-Isra، الآية 81`
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
      `إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا`,
      `فَاعْبُدْنِي`,
      `وَأَقِمِ الصَّلَاةَ لِذِكْرِي`
    ],
    translations: [
      [
        `Indeed, I am Allah.`,
        `There is no deity except Me,`,
        `so worship Me and establish prayer for My remembrance`
      ],
      [
        `Certes, c'est Moi Allah:`,
        `point de divinité que Moi.`,
        `Adore-Moi donc et accomplis la Salât pour te souvenir de Moi`
      ],
      [
        `Yo soy, ciertamente, Alá.`,
        `No hay más dios que Yo. ¡Sírveme, pues,`,
        `y haz la azalá para recordarme`
      ],
      [
        `Воистину, Я - Аллах! Нет божества,`,
        `кроме Меня. Поклоняйся же Мне и совершай намаз,`,
        `чтобы помнить обо Мне`
      ],
      [
        `Gewiß, Ich bin Allah.`,
        `Es gibt keinen Gott außer Mir.`,
        `So diene Mir und verrichte das Gebet zu Meinem Gedenken`
      ],
      [
        `Jag är Gud. Ingen gudom finns utom Jag.`,
        `Dyrka Mig därför och förrätta bönen för att minnas Mig`,
        ``
      ],
      [
        `Go deimhin, is mise Allah. Níl aon dia ach Mise,`,
        `mar sin déan adhradh dom agus seas an phaidir chun go gcuimhneofar orm.`,
        ``
      ],
      [
        `Voorwaarm, Ik ben Allah,`,
        `er is geen god dan Ik.`,
        `Aanbid mij daarom en onderhoud de shalât om Mij te gedenken`
      ],
      [
        `بےشک میں ہی خدا ہوں۔ میرے سوا`,
        `کوئی معبود نہیں تو میری عبادت کرو`,
        `اور میری یاد کے لئے نماز پڑھا کرو`
      ],
      [
        `Sungguh, Aku ini Allah,`,
        `tidak ada tuhan selain Aku,`,
        `maka sembahlah Aku dan laksanakanlah salat untuk mengingat Aku`
      ],
      [
        `Şüphesiz Ben Allah'ım,`,
        `Benden başka tanrı yoktur; Bana kulluk et;`,
        `Beni anmak için namaz kıl`
      ],
      [
        `منم، من، خدايى كه جز من خدايى نيست،`,
        `پس مرا پرستش كن و به ياد من نماز برپا دار`,
        ``
      ],
      [
        `আমিই আল্লাহ আমি ব্যতীত কোন ইলাহ`,
        `নেই। অতএব আমার এবাদত কর এবং`,
        `আমার স্মরণার্থে নামায কায়েম কর।`
      ],
      [
        `Por certo, eu sou Allah;`,
        `não existe deus além de Mim; então,`,
        `adora-Me e cumpre a oração em lembrança de Mim`
      ],
      [
        `我确是真主，除我外，`,
        `绝无应受崇拜者。你应当崇拜我，`,
        `当为记念我而谨守拜功。`
      ],
      [
        `本当にわれはアッラーである。`,
        `われの外に神はない。だからわれに仕え，`,
        `われを心に抱いて礼拝の務めを守れ。`
      ],
      [
        `실로 내가 하나님이요 나`,
        `외에는 신이 없나니 나만을 경배하`,
        `고 예배하며 나만을 생각하라`
      ],
      [
        `In verità, Io sono Allah:`,
        `non c'è dio all'infuori di Me.`,
        `AdoraMi ed esegui l'orazione per ricordarti di Me`
      ],
      [
        `Zaprawdę, Ja jestem Bogiem! Nie ma boga,`,
        `jak tylko Ja!`,
        `Czcij Mnie więc i odprawiaj modlitwę, wspominając Mnie`
      ],
      [
        `Воістину, Я — Бог і немає бога,`,
        `крім Мене! Тож поклоняйся Мені й звершуй молитву,`,
        `щоб пам’ятати про Мене`
      ]
    ],
    number: `سورة طه / Ta-Ha، الآية 14`
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
      `وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ`,
      ``,
      ``
    ],
    translations: [
      [
        `And We have not sent you, [O Muhammad], except as a mercy to the worlds`,
        ``,
        ``
      ],
      [
        `Et Nous ne t'avons envoyé qu'en miséricorde pour l'univers`,
        ``,
        ``
      ],
      [
        `Nosotros no te hemos enviado sino como misericordia para todo el mundo`,
        ``,
        ``
      ],
      [
        `Мы отправили тебя только в качестве милости к мирам`,
        ``,
        ``
      ],
      [
        `Und Wir haben dich nur als Barmherzigkeit für die Weltenbewohner gesandt`,
        ``,
        ``
      ],
      [
        `Vi har sänt dig [Muhammad] enbart av nåd till alla folk`,
        ``,
        ``
      ],
      [
        `Agus níor chuireamar thú, [a Mhuhamad], ach mar thrócaire do na saolta.`,
        ``,
        ``
      ],
      [
        `En Wij hebben jou (O Moehammad) slechts gezonden als een barmhartigheid voor de werelden`,
        ``,
        ``
      ],
      [
        `اور (اے محمدﷺ) ہم نے تم کو تمام جہان کے لئے رحمت (بنا کر) بھیجا ہے`,
        ``,
        ``
      ],
      [
        `Dan Kami tidak mengutus engkau (Muhammad) melainkan untuk (menjadi) rahmat bagi seluruh alam`,
        ``,
        ``
      ],
      [
        `Biz seni ancak alemlere rahmet olarak gönderdik`,
        ``,
        ``
      ],
      [
        `و تو را جز رحمتى براى جهانيان نفرستاديم`,
        ``,
        ``
      ],
      [
        `আমি আপনাকে বিশ্ববাসীর জন্যে রহমত স্বরূপই প্রেরণ করেছি।`,
        ``,
        ``
      ],
      [
        `E não te enviamos senão como misericórdia para os mundos`,
        ``,
        ``
      ],
      [
        `我派遣你，只为怜悯全世界的人。`,
        ``,
        ``
      ],
      [
        `われは只万有への慈悲として，あなたを遣わしただけである。`,
        ``,
        ``
      ],
      [
        `하나님이 그대를 보냄은 만백성에게 자비를 베풀기 위해서라`,
        ``,
        ``
      ],
      [
        `Non ti mandammo se non come misericordia per il creato`,
        ``,
        ``
      ],
      [
        `My posłaliśmy ciebie tylko jako miłosierdzie dla światów`,
        ``,
        ``
      ],
      [
        `Ми відіслали тебе тільки як милість для світів`,
        ``,
        ``
      ]
    ],
    number: `سورة الأنبياء / Al-Anbiya، الآية 107`
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
      `أَفَلَمْ يَسِيرُوا فِي الْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌ يَعْقِلُونَ بِهَا أَوْ آذَانٌ يَسْمَعُونَ بِهَا`,
      `فَإِنَّهَا لَا تَعْمَى الْأَبْصَارُ`,
      `وَلَٰكِن تَعْمَى الْقُلُوبُ الَّتِي فِي الصُّدُورِ`
    ],
    translations: [
      [
        `Have they not traveled through the land and have hearts by which to reason and ears by which to hear?`,
        `For indeed, it is not eyes that are blinded,`,
        `but blinded are the hearts which are within the breasts.`
      ],
      [
        `N'ont-ils pas parcouru la terre, de sorte qu'ils aient des cœurs pour raisonner et des oreilles pour entendre?`,
        `Car ce ne sont pas les yeux qui sont aveugles,`,
        `mais ce sont les cœurs, dans les poitrines, qui sont aveugles.`
      ],
      [
        `¿Es que no han viajado por la tierra, de modo que tengan corazones con los que comprender u oídos con los que oír?`,
        `No son los ojos los que están ciegos,`,
        `sino los corazones que hay en los pechos.`
      ],
      [
        `Разве они не странствовали по земле, чтобы иметь сердца, которыми они могли бы разуметь, и уши, которыми они могли бы слышать?`,
        `Ведь слепнут не глаза,`,
        `а слепнут сердца, которые в груди.`
      ],
      [
        `Sind sie denn nicht im Land umhergereist, sodass sie Herzen hätten, mit denen sie begreifen, oder Ohren, mit denen sie hören?`,
        `Denn nicht die Augen sind blind,`,
        `sondern blind sind die Herzen in den Brüsten.`
      ],
      [
        `Har de inte rest omkring på jorden så att de fått hjärtan att förstå med och öron att höra med?`,
        `Det är ju inte ögonen som är blinda,`,
        `utan hjärtana i bröstet.`
      ],
      [
        `Nach ndeachaigh siad ar fud na tíre ionas go mbeadh croíthe acu lena réasúnú nó cluasa lena gcloisteáil?`,
        `Mar ní hiad na súile a dhalladh,`,
        `ach na croíthe atá sna cliabháin.`
      ],
      [
        `Zijn zij dan niet over de aarde gereisd, zodat zij harten hebben waarmee zij begrijpen of oren waarmee zij horen?`,
        `Want niet de ogen zijn blind,`,
        `maar blind zijn de harten die in de borsten zijn.`
      ],
      [
        `کیا وہ زمین میں چلے پھرے نہیں کہ ان کے دل ایسے ہوتے جن سے سمجھتے یا کان ہوتے جن سے سنتے؟`,
        `حقیقت یہ ہے کہ آنکھیں اندھی نہیں ہوتیں`,
        `بلکہ وہ دل اندھے ہو جاتے ہیں جو سینوں میں ہیں۔`
      ],
      [
        `Maka apakah mereka tidak berjalan di muka bumi, lalu mereka mempunyai hati yang dengan itu mereka dapat memahami atau mempunyai telinga yang dengan itu mereka dapat mendengar?`,
        `Karena sesungguhnya bukanlah mata itu yang buta,`,
        `tetapi yang buta ialah hati yang di dalam dada.`
      ],
      [
        `Onlar yeryüzünde gezip dolaşmadılar mı ki, anlayacak kalpleri ve işitecek kulakları olsun?`,
        `Gerçek şu ki gözler kör olmaz,`,
        `fakat asıl göğüslerdeki kalpler kör olur.`
      ],
      [
        `آیا در زمین سیر نکرده‌اند تا دل‌هایی داشته باشند که با آن بیندیشند یا گوش‌هایی که با آن بشنوند؟`,
        `در حقیقت دیده‌ها کور نمی‌شود،`,
        `بلکه دل‌هایی که در سینه‌هاست کور می‌شود.`
      ],
      [
        `তারা কি এই উদ্দেশ্যে দেশ ভ্রমণ করেনি, যাতে তারা জ্ঞানবুদ্ধি সম্পন্ন হৃদয় ও শ্রবণশক্তিসম্পন্ন কর্ণের অধিকারী হতে পারে?`,
        `বস্তুতঃ চক্ষু তো অন্ধ হয় না,`,
        `কিন্তু বক্ষস্থিত অন্তরই অন্ধ হয়।`
      ],
      [
        `Não viajaram eles pela terra, para terem corações com os quais raciocinar e ouvidos com os quais ouvir?`,
        `Por certo, não são os olhos que se cegam,`,
        `mas cegam-se os corações que estão nos peitos.`
      ],
      [
        `难道他们没有在地方上旅行，因而有心灵足以了解，有耳朵足以听闻吗？`,
        `其实，眼睛没有瞎，`,
        `但是胸中的心瞎了。`
      ],
      [
        `かれらは地上を旅行して，理解する心と，聞く耳を持たなかったのか。`,
        `本当に盲目なのは目ではなく，`,
        `胸の中にある心が盲目なのである。`
      ],
      [
        `그들은 땅을 여행하여 이해할 마음과 들을 귀를 갖지 못하였느냐.`,
        `진실로 눈이 먼 것이 아니라`,
        `가슴속에 있는 마음이 멀었노라.`
      ],
      [
        `Non hanno viaggiato sulla terra? Hanno cuori con cui comprendere e orecchie con cui sentire?`,
        `In verità non sono gli occhi a essere ciechi,`,
        `ma sono ciechi i cuori che sono nei petti.`
      ],
      [
        `Czyż nie podróżowali po ziemi, aby mieć serca, którymi rozumieją, i uszy, którymi słyszą?`,
        `Zaprawdę, nie oczy są ślepe,`,
        `ale ślepe są serca, które są w piersiach.`
      ],
      [
        `Хіба вони не мандрували землею, щоб мати серця, якими вони могли б розуміти, і вуха, якими вони могли б чути?`,
        `Адже сліпнуть не очі,`,
        `а сліпнуть серця, що в грудях.`
      ]
    ],
    number: `سورة الحج / Al-Hajj، الآية 46`
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
        `너희가 하나님 외에 부르는 자들은 비록 함께 모여도 파리 하나도 خلق할 수 없다.`,
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
      `اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ ۖ الْمِصْبَاحُ فِي زُجَاجَةٍ ۖ`,
      `الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ يُوقَدُ مِنْ شَجَرَةٍ مُبَارَكَةٍ زَيْتُونَةٍ لَا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ ۚ`,
      `نُورٌ عَلَىٰ نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَنْ يَشَاءُ ۚ وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ ۗ وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ`
    ],
    translations: [
      [
        `Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp, the lamp is within glass,`,
        `the glass as if it were a pearly [white] star lit from [the oil of] a blessed olive tree, neither of the east nor of the west, whose oil would almost glow even if untouched by fire.`,
        `Light upon light. Allah guides to His light whom He wills. And Allah presents examples for the people, and Allah is Knowing of all things`
      ],
      [
        `Allah est la Lumière des cieux et de la terre. Sa lumière est semblable à une niche où se trouve une lampe.`,
        `La lampe est dans un (récipient de) cristal et celui-ci ressemble à un astre de grand éclat; son combustible vient d'un arbre béni: un olivier ni oriental ni occidental dont l'huile semble éclairer sans même que le feu la touche.`,
        `Lumière sur lumière. Allah guide vers Sa lumière qui Il veut. Allah propose aux hommes des paraboles et Allah est Omniscient`
      ],
      [
        `Alá es la Luz de los cielos y de la tierra. Su Luz es comparable a una hornacina en la que hay un pabilo encendido. El pabilo está en un recipiente de vidrio,`,
        `que es como si fuera una estrella fulgurante. Se enciende de un árbol bendito, un olivo, que no es del Oriente ni del Occidente,`,
        `y cuyo aceite casi alumbra aun sin haber sido tocado por el fuego. ¡Luz sobre Luz! Alá dirige a Su Luz a quien Él quiere. Alá propone parábolas a los hombres. Alá es omnisciente`
      ],
      [
        `Аллах - Свет небес и земли. Его свет в душе верующего подобен нише, в которой находится светильник. Светильник заключен в стекло, а стекло подобно жемчужной звезде.`,
        `Он возжигается от благословенного оливкового дерева, которое не освещается солнцем только с востока или только с запада. Его масло готово светиться даже без соприкосновения с огнем.`,
        `Один свет поверх другого! Аллах направляет к Своему свету, кого пожелает. Аллах приводит людям притчи, и Аллах знает о всякой вещи`
      ],
      [
        `Allah ist das Licht der Himmel und der Erde. Das Gleichnis seines Lichtes ist das einer Nische, in der eine Lampe ist. Die Lampe ist in einem Glas. Das Glas ist,`,
        `als wäre es ein funkelnder Stern. Ihr Brennstoff kommt von einem gesegneten Baum, einem Ölbaum, weder östlich noch westlich, dessen Öl beinahe schon Helligkeit verbreitete,`,
        `auch wenn das Feuer es nicht berührte. Licht über Licht. Allah führt zu Seinem Licht, wen Er will. Allah prägt den Menschen die Gleichnisse, und Allah weiß über alles Bescheid`
      ],
      [
        `Gud är himlarnas och jordens ljus. Hans ljus kan liknas vid en nisch där en lykta står. Lyktan är [omsluten] av glas och glaset lyser med en stjärnas glans.`,
        `[Det är en lykta] tänd [med olja] från ett välsignat träd, ett olivträd som varken tillhör öst eller väst och vars olja nästan lyser utan att eld har rört vid den.`,
        `Ljus över ljus! Gud leder till Sitt ljus den Han vill och därför framställer Han liknelser för människorna. Gud har kunskap om allt`
      ],
      [
        `Is é Allah Solas na bhflaitheas agus na talún. Is cosúil a sholas le nideog ina bhfuil lampa; tá an lampa laistigh de ghloine, an ghloine mar a bheadh réalta péarlach,`,
        `lasta ó chrann olóige beannaithe, nach den oirthear ná den iarthar é, a ndéanfadh a ola solas beagnach fiú gan tine a theagmháil léi.`,
        `Solas ar sholas. Treoraíonn Allah chun a sholais an té is mian leis. Agus cuireann Allah samplaí os comhair na ndaoine, agus tá Allah eolach ar gach rud.`
      ],
      [
        `Allah geeft het licht aan de hemelen en de aarde. De gelijkenis van Zijn licht is met een nis met een lamp erin: de lamp bevindt zich in een glas.`,
        `Het glas is als een stralende ster, die brandt (van de olie) van een gezegende olijfbloom, die niet van het Westen en niet het Oosten is. Haar olie verlicht,`,
        `hoewel zij (nog) niet door het vuur aangemakt is. Licht op licht. Allah leidt naar Zijn licht wie Hij wil. En Allah maakt gelijkenissen voor de mensen. En Allah is Alwetend over alle zaken`
      ],
      [
        `خدا آسمانوں اور زمین کا نور ہے۔ اس کے نور کی مثال ایسی ہے کہ گویا ایک طاق ہے جس میں چراغ ہے۔ اور چراغ ایک قندیل میں ہے۔ اور قندیل (ایسی صاف شفاف ہے کہ) گویا موتی کا سا چمکتا ہوا`,
        `تارہ ہے اس میں ایک مبارک درخت کا تیل جلایا جاتا ہے (یعنی) زیتون کہ نہ مشرق کی طرف ہے نہ مغرب کی طرف۔ (ایسا معلوم ہوتا ہے کہ) اس کا تیل خواہ آگ اسے نہ بھی چھوئے جلنے کو تیار ہے`,
        `(پڑی) روشنی پر روشنی (ہو رہی ہے) خدا اپنے نور سے جس کو چاہتا ہے سیدھی راہ دکھاتا ہے۔ اور خدا نے (جو مثالیں) بیان فرماتا ہے (تو) لوگوں کے (سمجھانے کے) لئے اور خدا ہر چیز سے واقف ہے`
      ],
      [
        `Allah (pemberi) cahaya (kepada) langit dan bumi. Perumpamaan cahaya-Nya, seperti sebuah lubang yang tidak tembus, yang di dalamnya ada pelita besar. Pelita itu di dalam tabung kaca, (dan) tabung kaca itu bagaikan bintang yang berkilauan,`,
        `yang dinyalakan dengan minyak dari pohon yang diberkahi, (yaitu) pohon zaitun yang tumbuh tidak di timur dan tidak pula di barat, yang minyaknya (saja) hampir-hampir menerangi, walaupun tidak disentuh api.`,
        `Cahaya di atas cahaya (berlapis-lapis), Allah memberi petunjuk kepada cahaya-Nya bagi orang yang Dia kehendaki, dan Allah membuat perumpamaan-perumpamaan bagi manusia. Dan Allah Maha Mengetahui segala sesuatu`
      ],
      [
        `Allah göklerin ve yerin Nur'udur. O'nun nuru, içinde ışık bulunan bir kandil yuvasına benzer. O ışık bir cam içindedir, cam ise,`,
        `sanki inci gibi parlayan bir yıldızdır; bu ne yalnız doğuda ve ne de yalnız batıda bulunan bereketli zeytin ağacından yakılır. Ateş değmese bile,`,
        `nerdeyse yağın kendisi aydınlatacak! Nur üstüne nurdur. Allah dilediğini nuruna kavuşturur. Allah insanlara misaller verir. O, herşeyi bilir`
      ],
      [
        `خدا نور آسمانها و زمين است. مَثَل نور او چون چراغدانى است كه در آن چراغى، و آن چراغ در شيشه‌اى است.`,
        `آن شيشه گويى اخترى درخشان است كه از درخت خجسته زيتونى كه نه شرقى است و نه غربى، افروخته مى‌شود. نزديك است كه روغنش -هر چند بدان آتشى نرسيده باشد- روشنى بخشد.`,
        `روشنىِ بر روى روشنى است. خدا هر كه را بخواهد با نور خويش هدايت مى‌كند، و اين مَثَلها را خدا براى مردم مى‌زند و خدا به هر چيزى داناست`
      ],
      [
        `আল্লাহ নভোমন্ডল ও ভূমন্ডলের জ্যোতি, তাঁর জ্যোতির উদাহরণ যেন একটি কুলঙ্গি, যাতে আছে একটি প্রদীপ, প্রদীপটি একটি কাঁচপাত্রে স্থাপিত,`,
        `কাঁচপাত্রটি উজ্জ্বল নক্ষত্র সদৃশ্য। তাতে পুতঃপবিত্র যয়তুন বৃক্ষের তৈল প্রজ্বলিত হয়,`,
        `যা পূর্বমুখী নয় এবং পশ্চিমমুখীও নয়। অগ্নি স্পর্শ না করলেও তার তৈল যেন আলোকিত হওয়ার নিকটবর্তী। জ্যোতির উপর জ্যোতি। আল্লাহ যাকে ইচ্ছা পথ দেখান তাঁর জ্যোতির দিকে। আল্লাহ মানুষের জন্যে দৃষ্টান্তসমূহ বর্ণনা করেন এবং আল্লাহ সব বিষয়ে জ্ঞাত।`
      ],
      [
        `Allah é a luz dos céus e da terra. O exemplo de Sua luz é como o de um nicho, em que há uma lâmpada. A lâmpada está em um cristal.`,
        `O cristal é como se fora astro brilhante. É aceso pelo óleo de uma bendita árvore olívea, nem de leste nem de oeste; seu óleo quase se ilumina, ainda que o não toque fogo algum.`,
        `É luz sobre luz. Allah guia a Sua luz a quem quer. E Allah propõe, para os homens, os exemplos. E Allah, de todas as cousas, é Onisciente`
      ],
      [
        `真主是天地的光明，他的光明象一座灯台，那座灯台上有一盏明灯，那盏明灯在一个玻璃罩里，`,
        `那个玻璃罩仿佛一颗灿烂的明星， 用吉祥的橄榄油燃着那盏明灯；它不是东方的，也不是西方的，它的油，`,
        `即使没有点火也几乎发光--光上加光--真主引导他所意欲者走向他的光明。真主为众人设了许多比喻，真主是全知万事的。`
      ],
      [
        `アッラーは，天地の光である。かれの光を譬れば，燈を置いた，壁龕のようなものである。燈はガラスの中にある。ガラスは輝く星のよう。`,
        `祝福されたオリーブの木に灯されている。（その木は）東方（の産）でもなく，西方（の産）でもなく，この油は，火が凡んど触れないのに光を放つ。光の上に光を添える。`,
        `アッラーは御好みの者を，かれの御光に導かれる。アッラーは人びとのために，比喩を挙げられる。本当にアッラーは凡てのことを知っておられる。`
      ],
      [
        `하나님은 하늘과 땅의 빛이 라 그 빛을 비유하사 벽위의 등잔과 같은 것으로 그 안에 등불 이 있으며 그 등불은 유리안에 있더라 그 유리는 축복받은`,
        `올리 브 기름으로 별처럼 밝게 빛나도 다 그것은 동쪽에 있는 나무도 아 니요 서쪽에 있는 나무도 아니라 그 기름은 불이 닿지도 아니하나 더욱`,
        `빛나 빛위에 빛을 터하도다 하나님은 그분이 원하는자를 그 빛으로 인도하시며 사람들 위에 예증을 보이시니 하나님은 모든 것을 아심으로 충만하시노라`
      ],
      [
        `Allah è la luce dei cieli e della terra. La Sua luce è come quella di una nicchia in cui si trova una lampada, la lampada è in un cristallo,`,
        `il cristallo è come un astro brillante; il suo combustibile viene da un albero benedetto, un olivo né orientale, né occidentale, il cui olio sembra illuminare,`,
        `senza neppure essere toccato dal fuoco. Luce su luce. Allah guida verso la Sua luce chi vuole Lui e propone agli uomini metafore. Allah è onnisciente`
      ],
      [
        `Bóg jest światłem niebios i ziemi. Jego światło jest podobne do niszy, w której jest lampa; lampa jest we szkle, a szkło jest jak gwiazda świecąca.`,
        `Zapala się ona od drzewa błogosławionego - drzewa oliwnego, ani ze Wschodu, ani z Zachodu, którego oliwa prawie by świeciła,. nawet gdyby nie dotknął jej ogień.`,
        `światło na świetle! Bóg prowadzi drogą prostą ku światłu, kogo chce. Bóg przytacza przykłady dla ludzi. Bóg o każdej rzeczy jest wszechwiedzący`
      ],
      [
        `Аллаг — світло небес і землі. Світло Його схоже на нішу, в якій є світильник, світильник у склі, а скло — наче зірка сяюча.`,
        `Горить вона від благословенного оливного дерева, ні східного, ні західного; прагне запалати олія його, хоча б вогонь і не торкнувся її.`,
        `Світло над світлом! Аллаг веде до Свого світла того, кого побажає! Аллаг наводить притчі людям, і Аллаг про кожну річ знаючий`
      ]
    ],
    number: `سورة النور / An-Nur، الآية 35`
  },

  {
    arabic: [
      `وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا`,
      `وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا`,
      `وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا`
    ],
    translations: [
      [
        `And the servants of the Most Merciful are those who walk upon the earth humbly,`,
        `and when the ignorant address them [harshly], they say [words of] peace;`,
        `and those who spend the night to their Lord prostrating and standing [in prayer].`
      ],
      [
        `Les serviteurs du Tout Miséricordieux sont ceux qui marchent humblement sur terre,`,
        `et quand les ignorants s'adressent à eux, ils disent: «Paix»;`,
        `et ceux qui passent la nuit prosternés et debout devant leur Seigneur.`
      ],
      [
        `Los siervos del Compasivo son los que caminan por la tierra con humildad,`,
        `y cuando los ignorantes se dirigen a ellos, dicen: «¡Paz!»;`,
        `y los que pasan la noche postrados y de pie ante su Señor.`
      ],
      [
        `Рабы Милостивого — это те, которые ходят по земле смиренно,`,
        `и когда невежды обращаются к ним, они говорят: «Мир!»;`,
        `и те, которые проводят ночь, совершая земные поклоны и стоя перед своим Господом.`
      ],
      [
        `Die Diener des Allerbarmers sind diejenigen, die demütig auf der Erde gehen,`,
        `und wenn die Unwissenden sie ansprechen, sagen sie: Frieden!;`,
        `und diejenigen, die die Nacht vor ihrem Herrn verbringen, sich niederwerfend und stehend.`
      ],
      [
        `Den Nåderikes tjänare är de som går ödmjukt på jorden,`,
        `och som svarar "Frid!" när de okunniga tilltalar dem,`,
        `och som tillbringar natten i nedfallande och stående inför sin Herre.`
      ],
      [
        `Is iad seirbhísigh an Trócaireach iad siúd a shiúlann ar an talamh go humhal,`,
        `agus nuair a labhraíonn na haineolaithe leo, deir siad: "Síocháin!";`,
        `agus iad siúd a chaitheann an oíche ag urnaí dá dTiarna ina luí agus ina seasamh.`
      ],
      [
        `De dienaren van de Barmhartige zijn zij die zich nederig over de aarde bewegen,`,
        `en wanneer de onwetenden hen aanspreken, zeggen zij: Vrede!;`,
        `en zij die de nacht doorbrengen voor hun Heer, zich neerwerpend en staand.`
      ],
      [
        `اور رحمٰن کے بندے وہ ہیں جو زمین پر آہستہ چلتے ہیں،`,
        `اور جب جاہل ان سے بات کرتے ہیں تو وہ کہتے ہیں: سلام،`,
        `اور جو اپنے رب کے حضور سجدے اور قیام میں رات گزارتے ہیں۔`
      ],
      [
        `Dan hamba-hamba Tuhan Yang Maha Penyayang itu (ialah) orang-orang yang berjalan di atas bumi dengan rendah hati,`,
        `dan apabila orang-orang yang jahil menyapa mereka, mereka mengucapkan kata-kata (yang mengandung) keselamatan.`,
        `Dan mereka melalui malam hari dengan bersujud dan berdiri untuk Tuhan mereka.`
      ],
      [
        `Rahman'ın kulları, yeryüzünde alçakgönüllülükle yürürler,`,
        `cahiller kendilerine laf attığında "selam" derler,`,
        `geceyi Rableri için secde ederek ve ayakta durarak geçirirler.`
      ],
      [
        `و بندگان [خدای] رحمان کسانی هستند که روی زمین با فروتنی راه می‌روند،`,
        `و هرگاه نادانان آنان را مخاطب سازند، [سخنی ایمن از گزند] می‌گویند: سلام،`,
        `و آنان که شب را برای پروردگارشان به سجده و قیام می‌گذرانند.`
      ],
      [
        `রহমানের বান্দা তারাই, যারা পৃথিবীতে নম্রভাবে চলাফেরা করে`,
        `এবং তাদেরকে যখন মূর্খরা সম্বোধন করে, তখন তারা বলে, সালাম।`,
        `এবং যারা রাত্রি যাপন করে তাদের পালনকর্তার উদ্দেশ্যে সেজদা ও দন্ডায়মান থেকে।`
      ],
      [
        `E os servos do Misericordioso são os que caminham pela terra com humildade,`,
        `e quando os ignorantes se dirigem a eles, dizem: Paz!;`,
        `e os que passam a noite prostrados e em pé diante do seu Senhor.`
      ],
      [
        `至仁主的仆人是在大地上谦逊地行走的，`,
        `当愚昧的人以恶言伤他们的时候，他们说：祝你们平安；`,
        `他们终夜为他们的主而叩头，而站立。`
      ],
      [
        `慈悲深き御方の僕とは，地上を謙虚に歩む者たちであり，`,
        `無知な者たちが話しかけて来ても，「平安あれ」と言う者たちである。`,
        `また主の御前に，夜通し跪拝し，立礼して過ごす者たちである。`
      ],
      [
        `자비로우신 분의 종들은 땅 위를 겸손하게 걷는 사람들이며`,
        `무지한 자들이 말을 걸어올 때 평화를 말하는 사람들이며`,
        `주님 앞에 엎드리고 서서 밤을 지새우는 사람들이니라.`
      ],
      [
        `I servi del Compassionevole sono coloro che camminano sulla terra con umiltà,`,
        `e quando gli ignoranti si rivolgono a loro, dicono: Pace!;`,
        `e coloro che passano la notte prosternati e in piedi davanti al loro Signore.`
      ],
      [
        `Sługami Miłosiernego są ci, którzy chodzą po ziemi w pokorze,`,
        `a gdy zwracają się do nich ignoranci, mówią: Pokój!;`,
        `i ci, którzy spędzają noc dla swego Pana, padając na twarz i stojąc.`
      ],
      [
        `Раби Милостивого — це ті, які ходять по землі смиренно,`,
        `і коли неуки звертаються до них, вони кажуть: «Мир!»;`,
        `і ті, які проводять ніч у земних поклонах і стоячи перед своїм Господом.`
      ]
    ],
    number: `سورة الفرقان / Al-Furqan، الآيتان 63-64`
  },

  {
    arabic: [
      `إِلَّا مَنْ تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا`,
      `فَأُولَٰئِكَ يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ ۗ`,
      `وَكَانَ اللَّهُ غَفُورًا رَحِيمًا`
    ],
    translations: [
      [
        `Except for those who repent, believe and do righteous work.`,
        `For them Allah will replace their evil deeds with good.`,
        `And ever is Allah Forgiving and Merciful`
      ],
      [
        `sauf celui qui se repent, croit et accomplit une bonne œuvre;`,
        `ceux-là Allah changera leurs mauvaises actions en bonnes,`,
        `et Allah est Pardonneur et Miséricordieux`
      ],
      [
        `No así quien se arrepienta, crea y haga buenas obras.`,
        `A éstos Alá les cambiará sus malas obras en buenas.`,
        `Alá es indulgente, misericordioso`
      ],
      [
        `Это не относится к тем, которые раскаялись,`,
        `уверовали и поступали праведно. Их злые деяния Аллах заменит добрыми,`,
        `ибо Аллах - Прощающий, Милосердный`
      ],
      [
        `außer demjenigen, der bereut, glaubt und rechtschaffene Werke tut;`,
        `jenen wird Allah ihre bösen Taten gegen gute eintauschen;`,
        `und Allah ist stets Allvergebend und Barmherzig`
      ],
      [
        `De skall inte straffas som visar ånger och blir troende och lever ett rättskaffens liv.`,
        `I stället för deras dåliga handlingar skall Gud sätta goda handlingar,`,
        `därför att Gud är ständigt förlåtande, barmhärtig`
      ],
      [
        `Ach amháin iad siúd a chaitheann aithrí agus a chreideann agus a dhéanann obair mhaith;`,
        `is iad sin a n-athróidh Allah a ndrochghníomhartha ina ngníomhartha maithe.`,
        `Agus tá Allah Maiteach, Trócaireach.`
      ],
      [
        `Behalve degene die berouw toont en gelooft en goede daden verricht.`,
        `Voor diegenen wisselt Allah hun zonden in voor goede daden.`,
        `En Allah is Vergevensgezind, Meest Barmhartig`
      ],
      [
        `مگر جس نے توبہ کی اور ایمان لایا اور اچھے کام`,
        `کئے تو ایسے لوگوں کے گناہوں کو خدا نیکیوں`,
        `سے بدل دے گا۔ اور خدا تو بخشنے والا مہربان ہے`
      ],
      [
        `kecuali orang-orang yang bertobat dan beriman dan mengerjakan kebajikan;`,
        `maka kejahatan mereka diganti Allah dengan kebaikan.`,
        `Allah Maha Pengampun, Maha Penyayang`
      ],
      [
        `Ancak tevbe eden, inanıp yararlı iş işleyenlerin,`,
        `işte Allah onların kötülüklerini iyiliklere çevirir.`,
        `Allah bağışlar ve merhamet eder`
      ],
      [
        `مگر كسى كه توبه كند و ايمان آورد و كار شايسته كند.`,
        `پس خداوند بديهايشان را به نيكيها تبديل مى‌كند،`,
        `و خدا همواره آمرزنده مهربان است`
      ],
      [
        `কিন্তু যারা তওবা করে বিশ্বাস স্থাপন করে এবং সৎকর্ম করে,`,
        `আল্লাহ তাদের গোনাহকে পুন্য দ্বারা পরিবর্তত করে এবং দেবেন। আল্লাহ ক্ষমাশীল,`,
        `পরম দয়ালু।`
      ],
      [
        `Exceto quem se volta arrependido e crê e faz o bem;`,
        `então, a esses, Allah trocar-lhes-á as más obras em boas obras.`,
        `E Allah é Perdoador, Misericordiador`
      ],
      [
        `惟悔过而且信道并行善功者，`,
        `真主将勾销其罪行，而录取其善功。`,
        `真主是至赦的，是至慈的。`
      ],
      [
        `悔悟して信仰し，善行に励む者は別である。`,
        `アッラーはこれらの者の，いろいろな非行を変えて善行にされる。`,
        `アッラーは寛容にして慈悲深くあられる。`
      ],
      [
        `그러나 회개하여 믿음을 갖 고 선을 행하는`,
        `자들에게는 실로 하나님께서 그들의 잘못을 선으로받아`,
        `주시거늘 하나님은 관용과 자비로 충만하심이라`
      ],
      [
        `a meno che non si penta, creda e operi il bene,`,
        `ché a costoro Allah cambierà le loro cattive azioni in buone.`,
        `Allah è perdonatore, misericordioso`
      ],
      [
        `Z wyjątkiem tych, którzy się nawrócili,`,
        `którzy uwierzyli i uczynili dobre dzieło; tym Bóg zamieni ich złe czyny na dobre.`,
        `Bóg jest Przebaczający, Litościwy`
      ],
      [
        `Окрім тих, хто покаявся, увірував і робив добро,`,
        `Аллаг замінить їхні лихі вчинки на добрі справи.`,
        `Аллаг — Прощаючий, Милостивий`
      ]
    ],
    number: `سورة الفرقان / Al-Furqan، الآية 70`
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
      `إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ`,
      `وَلَٰكِنَّ اللَّهَ يَهْدِي مَنْ يَشَاءُ ۚ`,
      `وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ`
    ],
    translations: [
      [
        `Indeed, [O Muhammad], you do not guide whom you like,`,
        `but Allah guides whom He wills.`,
        `And He is most knowing of the [rightly] guided`
      ],
      [
        `Tu [Muhammad] ne diriges pas celui que tu aimes:`,
        `mais c'est Allah qui guide qui Il veut.`,
        `Il connaît mieux cependant les bien-guidés`
      ],
      [
        `Tú no puedes dirigir a quien amas. Alá es, más bien,`,
        `Quien dirige a quien él quiere.`,
        `Él sabe mejor que nadie quiénes son los que siguen la buena dirección`
      ],
      [
        `Воистину, ты не сможешь наставить на прямой путь тех,`,
        `кого возлюбил. Только Аллах наставляет на прямой путь тех,`,
        `кого пожелает. Он лучше знает тех, кто следует прямым путем`
      ],
      [
        `Gewiß, du kannst nicht rechtleiten,`,
        `wen du gern (rechtgeleitet sehen) möchtest. Allah aber leitet recht,`,
        `wen Er will. Er kennt sehr wohl die Rechtgeleiteten`
      ],
      [
        `Du kan inte leda dem du älskar [Muhammad] på rätt väg,`,
        `men Gud leder den Han vill.`,
        `Och Han vet bäst vilka de är som är villiga att låta sig vägledas`
      ],
      [
        `Go deimhin, [a Mhuhamad], ní threoraíonn tú an té is breá leat,`,
        `ach treoraíonn Allah an té is mian leis.`,
        `Agus is Eisean is eolaí ar na daoine atá treoraithe.`
      ],
      [
        `Voorwaar, jij kunt degene die jij liefhebt geen leiding geven.`,
        `Maar Allah leidt wie Hij wil,`,
        `en Hij kent degenen die leiding volgen het best`
      ],
      [
        `(اے محمدﷺ) تم جس کو دوست رکھتے ہو اُسے ہدایت`,
        `نہیں کر سکتے بلکہ خدا ہی جس کو چاہتا ہے ہدایت`,
        `کرتا ہے اور وہ ہدایت پانیوالوں کو خوب جانتا ہے`
      ],
      [
        `Sungguh, engkau (Muhammad) tidak dapat memberi petunjuk kepada orang yang engkau kasihi,`,
        `tetapi Allah memberi petunjuk kepada orang yang Dia kehendaki,`,
        `dan Dia lebih mengetahui orang-orang yang mau menerima petunjuk`
      ],
      [
        `Sen, sevdiğini doğru yola eriştiremezsin,`,
        `ama Allah, dilediğini doğru yola eriştirir.`,
        `Doğru yola girecekleri en iyi O bilir`
      ],
      [
        `در حقيقت، تو هر كه را دوست دارى نمى‌توانى راهنمايى كنى،`,
        `ليكن خداست كه هر كه را بخواهد راهنمايى مى‌كند،`,
        `و او به راه‌يافتگان داناتر است`
      ],
      [
        `আপনি যাকে পছন্দ করেন, তাকে সৎপথে আনতে পারবেন না,`,
        `তবে আল্লাহ তা’আলাই যাকে ইচ্ছা সৎপথে আনয়ন করেন। কে সৎপথে আসবে,`,
        `সে সম্পর্কে তিনিই ভাল জানেন।`
      ],
      [
        `Por certo, tu, Muhammad,`,
        `não podes guiar a quem quer que ames mas Allah guia a quem quer.`,
        `E Ele é bem Sabedor dos que são guiados`
      ],
      [
        `你必定不能使你所喜爱的人遵循正道，`,
        `真主却能使他所意欲的人遵循正道，`,
        `他知道谁是遵循正道者。`
      ],
      [
        `本当にあなたは，自分の好む者（の凡て）を導くことは出来ない。`,
        `だがアッラーは御心のままに導き下される。`,
        `かれは導かれた者を熟知なされる。`
      ],
      [
        `그대는 그대가 사랑하는 자 를 인도하지`,
        `못하나 하나님은 그 분이 원하시는 자를`,
        `인도하시니 그분은 인도받을 자들을 아시니라`
      ],
      [
        `Non sei tu che guidi coloro che ami:`,
        `è Allah che guida chi vuole Lui.`,
        `Egli ben conosce coloro che sono ben guidati`
      ],
      [
        `Ty nie prowadzisz drogą prostą, kogo kochasz,`,
        `lecz Bóg prowadzi drogą prostą, kogo chce.`,
        `On zna najlepiej tych, którzy są na drodze prostej`
      ],
      [
        `Воістину, ти не зможеш вказати прямий шлях тим,`,
        `кого любиш, та Аллаг веде прямим шляхом, кого побажає.`,
        `І Він краще знає тих, хто йде прямим шляхом`
      ]
    ],
    number: `سورة القصص / Al-Qasas، الآية 56`
  },

  {
    arabic: [
      `اتْلُ مَا أُوحِيَ إِلَيْكَ مِنَ الْكِتَابِ وَأَقِمِ الصَّلَاةَ ۖ`,
      `إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ ۗ`,
      `وَلَذِكْرُ اللَّهِ أَكْبَرُ ۗ وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ`
    ],
    translations: [
      [
        `Recite, [O Muhammad], what has been revealed to you of the Book and establish prayer.`,
        `Indeed, prayer prohibits immorality and wrongdoing,`,
        `and the remembrance of Allah is greater. And Allah knows that which you do`
      ],
      [
        `Récite ce qui t'est révélé du Livre et accomplis la Salât.`,
        `En vérité la Salât préserve de la turpitude et du blâmable.`,
        `Le rappel d'Allah est certes ce qu'il y a de plus grand. Et Allah sait ce que vous faites`
      ],
      [
        `¡Recita lo que se te ha revelado de la Escritura ! ¡Haz la azalá!`,
        `La azalá prohíbe la deshonestidad y lo reprobable.`,
        `Pero el recuerdo de Alá es más importante aún. Alá sabe lo que hacéis`
      ],
      [
        `Читай то, что внушено тебе из Писания, и совершай намаз. Воистину,`,
        `намаз оберегает от мерзости и предосудительного.`,
        `Но поминание Аллаха - гораздо важнее, и Аллах знает о том, что вы творите`
      ],
      [
        `Verlies, was dir vom Buch (als Offenbarung) eingegeben wird, und verrichte das Gebet.`,
        `Gewiß, das Gebet hält davon ab, das Schändliche und das Verwerfliche (zu tun).`,
        `Und das Gedenken Allahs ist wahrlich größer. Und Allah weiß, was ihr macht`
      ],
      [
        `Läs vad som har uppenbarats för dig av denna Skrift och förrätta bönen.`,
        `Bönen avhåller [den bedjande] från skamlösa handlingar och allt som strider mot rimlighet och förnuft.`,
        `Men först och störst är åkallandet av Guds namn. Och Gud vet vad ni gör`
      ],
      [
        `Léigh, [a Mhuhamad], an méid a foilsíodh duit den Leabhar agus seas an phaidir.`,
        `Go deimhin, coisceann an phaidir an drochbheart agus an t-olc,`,
        `agus is mó fós cuimhneamh ar Allah. Agus tá a fhios ag Allah cad a dhéanann sibh.`
      ],
      [
        `Draag voor (O Moehammad) wat aan jou in het Boek geopenbaard is en onderhoud de shalât.`,
        `Voorwaat, de shalât weerhoudt van de gruweldaad en het verwerpelijke. Zeker,`,
        `het gedenken van Allah (de shalât) is groter en Allah weet wat jullie bedrijven`
      ],
      [
        `(اے محمدﷺ! یہ) کتاب جو تمہاری طرف وحی کی گئی ہے اس کو پڑھا کرو اور نماز`,
        `کے پابند رہو۔ کچھ شک نہیں کہ نماز بےحیائی اور بری باتوں سے روکتی ہے۔`,
        `اور خدا کا ذکر بڑا (اچھا کام) ہے۔ اور جو کچھ تم کرتے ہو خدا اُسے جانتا ہے`
      ],
      [
        `Bacalah Kitab (Alquran) yang telah diwahyukan kepadamu (Muhammad) dan laksanakanlah salat.`,
        `Sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar.`,
        `Dan (ketahuilah) mengingat Allah (salat) itu lebih besar (keutamaannya dari ibadah yang lain). Allah mengetahui apa yang kamu kerjakan`
      ],
      [
        `Kitap'tan sana vahyolunanı oku; namaz kıl;`,
        `muhakkak ki namaz hayasızlıktan ve fenalıktan alıkor;`,
        `Allah'ı anmak en büyük şeydir! Allah Yaptıklarınızı bilir`
      ],
      [
        `آنچه از كتاب به سوى تو وحى شده است بخوان،`,
        `و نماز را برپا دار، كه نماز از كار زشت و ناپسند باز مى‌دارد،`,
        `و قطعاً ياد خدا بالاتر است، و خدا مى‌داند چه مى‌كنيد`
      ],
      [
        `আপনি আপনার প্রতি প্রত্যাদিষ্ট কিতাব পাঠ করুন এবং নামায`,
        `কায়েম করুন। নিশ্চয় নামায অশ্লীল ও গর্হিত কার্য থেকে বিরত`,
        `রাখে। আল্লাহর স্মরণ সর্বশ্রেষ্ঠ। আল্লাহ জানেন তোমরা যা কর।`
      ],
      [
        `Recita, Muhammad, o que te foi revelado do Livro e cumpre a oração.`,
        `Por certo, a oração coíbe a obscenidade e o reprovável. E, certamente,`,
        `a lembrança de Allah é maior que isso. E Allah sabe o que engenhais`
      ],
      [
        `你应当宣读启示你的经典，你当谨守拜功，`,
        `拜功的确能防止丑事和罪恶，`,
        `记念真主确是一件更大的事。真主知道你们的做为。`
      ],
      [
        `あなたに啓示された啓典を読誦し，礼拝の務めを守れ。本当に礼拝は，`,
        `（人を）醜行と悪事から遠ざける。なお最も大事なことは，`,
        `アッラーを唱念〔ズィクル〕することである。アッラーはあなたがたの行うことを知っておられる。`
      ],
      [
        `그대에게 계시된 그 성서를 낭송하며 예배를 드리라 예배는 수치와 그릇된`,
        `행위를 예방하여 주리라 그리고 하나님을 염원하는 것은 생활의 가장 중요한`,
        `것으로 의심할 바 없나니 하나님은 너희가행하는 모든 것을 알고 계시노라`
      ],
      [
        `Recita quello che ti è stato rivelato del Libro ed esegui l'orazione.`,
        `In verità l'orazione preserva dalla turpitudine e da ciò che è riprovevole.`,
        `Il ricordo di Allah è certo quanto ci sia di più grande. Allah conosce perfettamente quello che operate`
      ],
      [
        `Głoś to, co ci zostało objawione z Księgi i odprawiaj modlitwę!`,
        `Zaprawdę, modlitwa chroni od szpetoty i powstrzymuje od niegodziwości!`,
        `A wspominanie Boga jest większe. Bóg wie, co wy robicie`
      ],
      [
        `Читай те, що було відкрито тобі з Писання, та звершуй молитву.`,
        `Воістину, молитва стримує від розпусти й неприйнятного!`,
        `Але згадка Аллага — важливіша, і Він знає те, що ви робите`
      ]
    ],
    number: `سورة العنكبوت / Al-'Ankabut، الآية 45`
  },

  {
    arabic: [
      `وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا`,
      `وَجَعَلَ بَيْنَكُمْ مَوَدَّةً`,
      `وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ`
    ],
    translations: [
      [
        `And of His signs is that He created for you from yourselves mates that you may find tranquillity in them;`,
        `and He placed between you affection and mercy.`,
        `Indeed in that are signs for a people who give thought`
      ],
      [
        `Et parmi Ses signes Il a créé de vous, pour vous,`,
        `des épouses pour que vous viviez en tranquillité avec elles et Il a mis entre vous de l'affection et de la bonté.`,
        `Il y a en cela des preuves pour des gens qui réfléchissent`
      ],
      [
        `Y entre Sus signos está el haberos creado esposas nacidas entre vosotros,`,
        `para que os sirvan de quietud, y el haber suscitado entre vosotros el afecto y la bondad.`,
        `Ciertamente, hay en ellos signos para gente que reflexiona`
      ],
      [
        `Среди Его знамений - то, что Он сотворил из вас самих жен для вас,`,
        `чтобы вы находили в них успокоение, и установил между вами любовь и милосердие.`,
        `Воистину, в этом - знамения для людей размышляющих`
      ],
      [
        `Und es gehört zu Seinen Zeichen, daß Er euch aus euch selbst Gattinnen erschaffen hat,`,
        `damit ihr bei ihnen Ruhe findet; und Er hat Zuneigung und Barmherzigkeit zwischen euch gesetzt.`,
        `Darin sind wahrlich Zeichen für Leute, die nachdenken`
      ],
      [
        `Och till Hans under hör att Han har skapat hustrur åt er av er egen art,`,
        `så att ni kan finna ro hos dem, och Han har låtit kärlek och ömhet uppstå mellan er.`,
        `I detta ligger helt visst budskap till människor som tänker`
      ],
      [
        `Agus ó na comharthaí atá aige gur chruthaigh Sé daoibh céilí as bhur measc féin chun go bhfaighfeadh sibh suaimhneas iontu;`,
        `agus chuir Sé grá agus trócaire eadraibh.`,
        `Go deimhin, tá comharthaí ansin do dhaoine a mhachnaíonn.`
      ],
      [
        `En het behoort tot Zijn Tekenen dat Hij van jullie eigen soort echtgenotes heeft geschapen,`,
        `opdat jullie rust bij haar vinden en Hij bracht tussen jullie liefde en barmhartigheid.`,
        `Voorwaar, daarin zijn zeker Tekenen voor een volk dat nadenkt`
      ],
      [
        `اور اسی کے نشانات (اور تصرفات) میں سے ہے کہ اُس نے تمہارے لئے تمہاری ہی جنس کی`,
        `عورتیں پیدا کیں تاکہ اُن کی طرف (مائل ہوکر) آرام حاصل کرو اور تم میں محبت اور`,
        `مہربانی پیدا کر دی جو لوگ غور کرتے ہیں اُن کے لئے ان باتوں میں (بہت سی) نشانیاں ہیں`
      ],
      [
        `Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri,`,
        `agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa kasih dan sayang.`,
        `Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir`
      ],
      [
        `İçinizden, kendileriyle huzura kavuşacağınız eşler yaratıp;`,
        `aranızda muhabbet ve rahmet var etmesi, O'nun varlığının belgelerindendir.`,
        `Bunlarda, düşünen millet için dersler vardır`
      ],
      [
        `و از نشانه‌هاى او اينكه از [نوع‌] خودتان همسرانى براى شما آفريد تا بدانها آرام گيريد،`,
        `و ميانتان دوستى و رحمت نهاد. آرى،`,
        `در اين [نعمت‌] براى مردمى كه مى‌انديشند قطعاً نشانه‌هايى است`
      ],
      [
        `আর এক নিদর্শন এই যে, তিনি তোমাদের জন্যে তোমাদের মধ্য থেকে তোমাদের সংগিনীদের সৃষ্টি করেছেন,`,
        `যাতে তোমরা তাদের কাছে শান্তিতে থাক এবং তিনি তোমাদের মধ্যে পারস্পরিক সম্প্রীতি ও দয়া সৃষ্টি করেছেন। নিশ্চয় এতে চিন্তাশীল লোকদের জন্যে নিদর্শনাবলী রয়েছে।`,
        ``
      ],
      [
        `E, dentre Seus sinais, está que Ele criou para vós, mulheres,`,
        `de vós mesmos, para vos tranquilizardes junto delas, e fez entre vós afeição e misericórdia.`,
        `Por certo, há nisso sinais para um povo que reflete`
      ],
      [
        `他的一种迹象是：他从你们的同类中为你们创造配偶，`,
        `以便你们依恋她们，并且使你们互相爱悦，`,
        `互相怜恤。对于能思维的民众，此中确有许多迹象。`
      ],
      [
        `またかれがあなたがた自身から，あなたがたのために配偶を創られたのは，かれの印の一つである。`,
        `あなたがたはかの女らによって安らぎを得るよう（取り計らわれ），`,
        `あなたがたの間に愛と情けの念を植え付けられる。本当にその中には，考え深い者への印がある。`
      ],
      [
        `너희 자신들로 부터 배필을 창조하여 그 배필과 함께 살게 하심도`,
        `그분 예증의 하나이며 그분 은 또한 너희간에 사랑과 자비를`,
        `주셨으니 실로 그 안에는 생각하 는 백성을 위한 예증이 있노라`
      ],
      [
        `Fa parte dei Suoi segni l'aver creato da voi, per voi, delle spose,`,
        `affinché riposiate presso di loro, e ha stabilito tra voi amore e tenerezza.`,
        `Ecco davvero dei segni per coloro che riflettono`
      ],
      [
        `I z Jego znaków jest to, iż On stworzył dla was żony z was samych,`,
        `abyście mogli odpocząć przy nich;`,
        `i ustanowił między wami miłość i miłosierdzie`
      ],
      [
        `Серед Його знамень — те, що Він створив вам дружин із вас самих,`,
        `щоб ви знаходили в них спокій, і встановив між вами любов і милосердя.`,
        `Воістину, в цьому — знамення для людей, які думають`
      ]
    ],
    number: `سورة الروم / Ar-Rum، الآية 21`
  },

  {
    arabic: [
      `وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ`,
      `وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ ۚ`,
      `إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِلْعَالِمِينَ`
    ],
    translations: [
      [
        `And of His signs is the creation of the heavens and`,
        `the earth and the diversity of your languages and your`,
        `colors. Indeed in that are signs for those of knowledge`
      ],
      [
        `Et parmi Ses signes la création des cieux et de la`,
        `terre et la variété de vos idiomes et de vos`,
        `couleurs. Il y a en cela des preuves pour les savants`
      ],
      [
        `Y entre Sus signos está la creación de los cielos y de la tierra,`,
        `la diversidad de vuestras lenguas y de vuestros colores.`,
        `Ciertamente hay en ello signos para los que saben`
      ],
      [
        `Среди Его знамений - сотворение небес и земли и различие ваших языков и цветов.`,
        `Воистину,`,
        `в этом - знамения для обладающих знанием`
      ],
      [
        `Und zu Seinen Zeichen gehört die Erschaffung der Himmel`,
        `und der Erde und (auch) die Verschiedenheit eurer Sprachen`,
        `und Farben. Darin sind wahrlich Zei chen für die Wissenden`
      ],
      [
        `Och till Hans under hör skapelsen av himlarna och`,
        `jorden och skillnaderna mellan er i språk och hudfärg.`,
        `I detta ligger helt visst budskap till de insiktsfulla`
      ],
      [
        `Agus ó na comharthaí atá aige tá cruthú na bhflaitheas agus na talún,`,
        `agus éagsúlacht bhur dteangacha agus bhur ndathanna.`,
        `Go deimhin, tá comharthaí ansin dóibh siúd a bhfuil eolas acu.`
      ],
      [
        `En tot Zijn Tekenen behoort de schepping van de hemelen en de aardeen het verschillende van jullie talen en kleuren.`,
        `Voorwaar,`,
        `daarin zijn zeker Tekenen voor de bezitters van kennis`
      ],
      [
        `اور اسی کے نشانات (اور تصرفات) میں سے ہے آسمانوں اور زمین`,
        `کا پیدا کرنا اور تمہاری زبانوں اور رنگوں کا جدا جدا`,
        `ہونا۔ اہلِ دانش کے لیے ان (باتوں) میں (بہت سی) نشانیاں ہیں`
      ],
      [
        `Dan di antara tanda-tanda (kebesaran)-Nya ialah penciptaan langit dan bumi,`,
        `perbedaan bahasamu dan warna kulitmu. Sungguh,`,
        `pada yang demikian itu benar-benar terdapat tanda-tanda bagi orang-orang yang mengetahui`
      ],
      [
        `Gökleri ve yeri yaratması, dillerinizin ve renklerinizin değişik olması,`,
        `O'nun varlığının belgelerindendir.`,
        `Doğrusu bunlarda, bilenler için dersler vardır`
      ],
      [
        `و از نشانه‌هاى [قدرت‌] او آفرينش آسمانها و`,
        `زمين و اختلاف زبانهاى شما و رنگهاى شماست. قطعاً`,
        `در اين [امر نيز] براى دانشوران نشانه‌هايى است`
      ],
      [
        `তাঁর আর ও এক নিদর্শন হচ্ছে নভোমন্ডল ও ভূমন্ডলের`,
        `সৃজন এবং তোমাদের ভাষা ও বর্ণের বৈচিত্র।`,
        `নিশ্চয় এতে জ্ঞানীদের জন্যে নিদর্শনাবলী রয়েছে।`
      ],
      [
        `E, dentre Seus sinais, está a criação dos céus e da terra,`,
        `e a variedade de vossas línguas e de vossas cores.`,
        `Por certo, há nisso sinais para os sabedores`
      ],
      [
        `他的一种迹象是：天地的创造，`,
        `以及你们的语言和肤色的差异，`,
        `对于有学问的人，此中确有许多迹象。`
      ],
      [
        `またかれが，諸天と大地を創造なされ，あなたがたの言語と，`,
        `肌色を様々異なったものとされているのは，`,
        `かれの印の一つである。本当にその中には，知識ある者への印がある。`
      ],
      [
        `천지를 창조하시고 너희의 언어들과 피부색을`,
        `달리 창조 하 셨음도 그분 예증의 하나이시니`,
        `실로 그 안에는 전 인류를 위한 예증이 있노라`
      ],
      [
        `E fan parte dei Suoi segni, la creazione dei cieli e della terra,`,
        `la varietà dei vostri idiomi e dei vostri colori.`,
        `In ciò vi sono segni per coloro che sanno`
      ],
      [
        `I z Jego znaków jest stworzenie niebios i ziemi,`,
        `różnorodność waszych języków i kolorów.`,
        `Zaprawdę, w tym są znaki dla tych, którzy wiedzą`
      ],
      [
        `Серед Його знамень — створення небес і землі,`,
        `а також відмінності між мовами й кольорами.`,
        `Воістину, в цьому – знамення для жителів світів`
      ]
    ],
    number: `سورة الروم / Ar-Rum، الآية 22`
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
        `하나님의 약속은 진실이니 세상의 삶이 너희를 속이지 못하게 하고 속이는 자도 하나님에 대해 너희를 속이지 못하게 하라.`
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
      `وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِلنَّاسِ بَشِيرًا`,
      `وَنَذِيرًا`,
      `وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ`
    ],
    translations: [
      [
        `And We have not sent you except comprehensively`,
        `to mankind as a bringer of good tidings and`,
        `a warner. But most of the people do not know`
      ],
      [
        `Et Nous ne t'avons envoyé qu'en tant`,
        `qu'annonciateur et avertisseur pour toute l'humanité.`,
        `Mais la plupart des gens ne savent pas`
      ],
      [
        `No te hemos enviado sino como nuncio de buenas`,
        `nuevas y como monitor a todo el género`,
        `humano. Pero la mayoría de los hombres no saben`
      ],
      [
        `Мы отправили тебя ко всем людям добрым`,
        `вестником и предостерегающим увещевателем,`,
        `но большинство людей не знает этого`
      ],
      [
        `Und Wir haben dich für die Menschen`,
        `allesamt nur als Frohboten und Warner gesandt.`,
        `Aber die meisten Menschen wissen nicht`
      ],
      [
        `Vi har sänt dig [Muhammad, inte bara till ditt eget folk utan] till hela mänskligheten,`,
        `som förkunnare av ett glatt budskap om hopp och som varnare,`,
        `men de flesta människor är omedvetna [om detta]`
      ],
      [
        `Agus níor chuireamar thú ach do na daoine uile,`,
        `mar sheachadóir dea-scéala agus mar rabhadóir.`,
        `Ach níl a fhios ag formhór na ndaoine.`
      ],
      [
        `En Wij hebben jou niet anders gezonden dan aan de gehele`,
        `mensheid en als een verkondiger van verheugende tijdingen en`,
        `als een waarschuwer. Maar de meeste mensen weten het niet`
      ],
      [
        `اور (اے محمدﷺ) ہم نے تم کو تمام لوگوں کے`,
        `لئے خوشخبری سنانے والا اور ڈرانے والا`,
        `بنا کر بھیجا ہے لیکن اکثر لوگ نہیں جانتے`
      ],
      [
        `Dan Kami tidak mengutus engkau (Muhammad),`,
        `melainkan kepada semua umat manusia sebagai pembawa berita gembira dan sebagai pemberi peringatan,`,
        `tetapi kebanyakan manusia tidak mengetahui`
      ],
      [
        `Biz seni bütün insanlara ancak`,
        `müjdeci ve uyarıcı olarak göndermişizdir;`,
        `fakat insanların çoğu bilmez`
      ],
      [
        `و ما تو را جز [به سمت‌] بشارتگر و هشداردهنده براى تمام مردم،`,
        `نفرستاديم؛`,
        `ليكن بيشتر مردم نمى‌دانند`
      ],
      [
        `আমি আপনাকে সমগ্র মানবজাতির জন্যে`,
        `সুসংবাদাতা ও সতর্ককারী রূপে পাঠিয়েছি;`,
        `কিন্তু অধিকাংশ মানুষ তা জানে না।`
      ],
      [
        `E não te enviamos Muhammad,`,
        `senão a toda a humanidade, por alvissareiro e admoestador,`,
        `mas a maioria dos homens não sabe`
      ],
      [
        `我只派遣你为全人类的报喜者和警告者，`,
        `但世人大半不知道。`,
        ``
      ],
      [
        `われは，全人類への吉報の伝達者また警告者として，`,
        `あなたを遺わした。`,
        `だが人びとの多くは，それが分らない。`
      ],
      [
        `하나님이 그대를 보내매 만 인을 위한`,
        `복음자로 그리고 경고 자로써 보내거늘`,
        `그러나 많은 사 람들은 이를 알지 못하더라`
      ],
      [
        `Non ti abbiamo mandato se non come nunzio`,
        `ed ammonitore per tutta l'umanità, ma`,
        `la maggior parte degli uomini non sanno`
      ],
      [
        `Posłaliśmy cię do wszystkich ludzi`,
        `jako zwiastuna radosnej wieści i`,
        `ostrzegającego. Lecz większość ludzi nie wie`
      ],
      [
        `Ми відіслали тебе до всіх людей`,
        `як доброго вісника й застерігача,`,
        `але ж більшість людей не знає`
      ]
    ],
    number: `سورة سبأ / Saba، الآية 28`
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
        `사람들이여! 너희에게 베푸신 하나님의 은혜를 기억하라.`,
        `하나님 외에 하늘과 땅에서 너희에게 رزق을 주는 창조자가 있는가?`,
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
        `사람들이여! 하나님의 약속은 진실이다,`,
        `세상의 삶이 너희를 속이지 못하게 하라,`,
        `또한 속이는 자가 하나님에 대해 너희를 속이지 못하게 하라.`
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
        `영광을 원하는 자여, 모든 영광은 하나님께 있다.`,
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
        `실로 하나님의 책을 낭송하고 예배를 세우며,`,
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
      `إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ كُنْ`,
      `فَيَكُونُ`,
      ``
    ],
    translations: [
      [
        `His command is only when He intends a thing that He says to it,`,
        `"Be,"`,
        `and it is`
      ],
      [
        `Quand Il veut une chose,`,
        `Son commandement consiste à dire:`,
        `«Sois», et c'est`
      ],
      [
        `Su orden,`,
        `cuando quiere algo, le dice tan sólo:`,
        `«¡Se!» Y es`
      ],
      [
        `Когда Он желает чего-либо,`,
        `то стоит Ему сказать:`,
        `«Будь!». - как это сбывается`
      ],
      [
        `Sein Befehl, wenn Er etwas will,`,
        `ist, dazu nur zu sagen:`,
        `,Sei!', und so ist es`
      ],
      [
        `Om Han vill att något skall vara säger Han endast till det:`,
        `"Var!"`,
        `- och det är`
      ],
      [
        `Níl ina ordú,`,
        `nuair is mian leis rud a dhéanamh,`,
        `ach a rá leis: Bí, agus bíonn sé.`
      ],
      [
        `Voorwaar, wanneer Hij iets wil (scheppen),`,
        `dan zegt hij er slechts tegen:`,
        `"Wees," en het is`
      ],
      [
        `اس کی شان یہ ہے کہ جب وہ کسی چیز`,
        `کا ارادہ کرتا ہے تو اس سے فرما`,
        `دیتا ہے کہ ہوجا تو وہ ہوجاتی ہے`
      ],
      [
        `Sesungguhnya urusan-Nya apabila Dia menghendaki sesuatu Dia hanya berkata kepadanya,`,
        `"Jadilah!"`,
        `Maka jadilah sesuatu itu`
      ],
      [
        `Bir şeyi dilediği zaman,`,
        `O'nun buyruğu sadece,`,
        `o şeye "Ol" demektir, hemen olur`
      ],
      [
        `چون به چيزى اراده فرمايد،`,
        `كارش اين بس كه مى‌گويد: «باش»؛`,
        `پس [بى‌درنگ‌] موجود مى‌شود`
      ],
      [
        `তিনি যখন কোন কিছু করতে ইচ্ছা করেন,`,
        `তখন তাকে কেবল বলে দেন,`,
        `‘হও’ তখনই তা হয়ে যায়।`
      ],
      [
        `Sua ordem,`,
        `quando deseja alguma cousa, é, apenas,`,
        `dizer-lhe: "Sê", então, é`
      ],
      [
        `当他欲造化任何事物的时候，`,
        `他的事情只是说声：`,
        `有，它就有了。`
      ],
      [
        `何かを望まれると，`,
        `かれが「有れ。`,
        `」と御命じになれば，即ち有る。`
      ],
      [
        `실로 그분께서 무엇에`,
        `뜻을 두시고 있어라`,
        `명령하시면 그대로되니라`
      ],
      [
        `Quando vuole una cosa,`,
        `il Suo ordine consiste`,
        `nel dire “Sìì” ed essa è`
      ],
      [
        `Jego rozkaz - kiedy On chce jakiejś rzeczy - zawiera się w słowie:`,
        `"Bądź!"`,
        `- i ona jest`
      ],
      [
        `Коли Він воліє чогось,`,
        `то тільки говорить:`,
        `«Будь!» — і воно є`
      ]
    ],
    number: `سورة يس / Ya-Sin، الآية 82`
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
      `أَمَّنْ هُوَ قَانِتٌ آنَاءَ اللَّيْلِ سَاجِدًا وَقَائِمًا يَحْذَرُ الْآخِرَةَ وَيَرْجُو رَحْمَةَ رَبِّهِ`,
      `قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ`,
      `إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ`
    ],
    translations: [
      [
        `Is one who is devoutly obedient during periods of the night, prostrating and standing [in prayer], fearing the Hereafter and hoping for the mercy of his Lord, [like one who does not]?`,
        `Say, "Are those who know equal to those who do not know?"`,
        `Only they will remember [who are] people of understanding.`
      ],
      [
        `Est-ce celui qui, aux heures de la nuit, se livre à la dévotion, prosterné et debout, craignant l'au-delà et espérant la miséricorde de son Seigneur [qui est préférable]?`,
        `Dis: «Egaux sont-ils, ceux qui savent et ceux qui ne savent pas?»`,
        `Seuls les doués d'intelligence réfléchissent.`
      ],
      [
        `¿Acaso quien se consagra a la devoción durante las horas de la noche, postrado y de pie, temiendo la otra vida y esperando la misericordia de su Señor, [es como quien no lo hace]?`,
        `Di: «¿Acaso son iguales los que saben y los que no saben?»`,
        `Solo reflexionan los dotados de intelecto.`
      ],
      [
        `Разве тот, кто в ночные часы проводит время в поклонении, совершая земные поклоны и стоя, остерегаясь Последней жизни и надеясь на милость своего Господа, [подобен неверующему]?`,
        `Скажи: «Разве равны те, которые знают, и те, которые не знают?»`,
        `Помнят назидание только обладающие разумом.`
      ],
      [
        `Ist etwa jemand, der zu den Stunden der Nacht Allah demütig ergeben ist, sich niederwerfend und stehend, sich vor dem Jenseits in Acht nehmend und auf die Barmherzigkeit seines Herrn hoffend, [wie der, der es nicht tut]?`,
        `Sag: Sind etwa diejenigen, die wissen, und diejenigen, die nicht wissen, gleich?`,
        `Bedenken tun es nur diejenigen, die Verstand besitzen.`
      ],
      [
        `Är den som i nattens timmar ägnar sig åt andakt, nedfallen och stående, i fruktan för det kommande livet och i hopp om sin Herres nåd, [lik den som inte gör det]?`,
        `Säg: Kan de som vet och de som inte vet vara lika?`,
        `Det är bara de förståndiga som tänker efter.`
      ],
      [
        `An ionann an té a bhíonn dílis le linn uaireanta na hoíche, ina luí agus ina sheasamh, ag eagla na hAoise Eile agus ag súil le trócaire a Thiarna, [agus an té nach ndéanann]?`,
        `Abair: "An ionann iad siúd a bhfuil a fhios acu agus iad siúd nach bhfuil?"`,
        `Ní chuimhníonn ach lucht tuisceana.`
      ],
      [
        `Is hij die gedurende de uren van de nacht toegewijd is, neergeworpen en staand, de Laatste Dag vrezend en de barmhartigheid van zijn Heer hopend, [gelijk aan hem die dat niet doet]?`,
        `Zeg: Zijn zij die weten gelijk aan hen die niet weten?`,
        `Alleen zij die verstand hebben, nemen het ter harte.`
      ],
      [
        `کیا وہ شخص جو رات کی گھڑیوں میں سجدہ اور قیام کی حالت میں اطاعت کرتا ہے، آخرت سے ڈرتا ہے اور اپنے رب کی رحمت کی امید رکھتا ہے (اس کی طرح ہو سکتا ہے جو ایسا نہ کرے)؟`,
        `کہہ دیجیے: کیا علم والے اور بے علم برابر ہو سکتے ہیں؟`,
        `نصیحت تو صرف عقل والے ہی قبول کرتے ہیں۔`
      ],
      [
        `(Apakah kamu hai orang musyrik yang lebih beruntung) ataukah orang yang beribadat di waktu-waktu malam dengan sujud dan berdiri, sedang ia takut kepada (azab) akhirat dan mengharapkan rahmat Tuhannya?`,
        `Katakanlah: "Adakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?"`,
        `Sesungguhnya orang yang berakallah yang dapat menerima pelajaran.`
      ],
      [
        `Yoksa o kimse mi (daha iyidir) ki, gecenin saatlerinde secde ederek ve ayakta durarak ibadet eder, ahiretten sakınır ve Rabbinin rahmetini umar?`,
        `De ki: Hiç bilenlerle bilmeyenler bir olur mu?`,
        `Ancak akıl sahipleri öğüt alır.`
      ],
      [
        `آیا آن کس که در ساعات شب به سجده و قیام به عبادت می‌پردازد، از آخرت می‌ترسد و به رحمت پروردگارش امید دارد [همانند ناسپاس است]؟`,
        `بگو: آیا کسانی که می‌دانند با کسانی که نمی‌دانند برابرند؟`,
        `تنها خردمندان پند می‌گیرند.`
      ],
      [
        `যে ব্যক্তি রাত্রিকালে সেজদা অথবা দন্ডায়মান অবস্থায় এবাদত করে, পরকালের আশংকা রাখে এবং তার পালনকর্তার রহমত প্রত্যাশা করে, সে কি তার সমান, যে তা করে না?`,
        `বলুন, যারা জানে এবং যারা জানে না, তারা কি সমান হতে পারে?`,
        `বুদ্ধিমান লোকেরাই কেবল উপদেশ গ্রহণ করে।`
      ],
      [
        `Acaso aquele que se dedica à devoção durante as horas da noite, prostrado e em pé, temendo a Última Vida e esperando a misericórdia do seu Senhor, [é como aquele que não o faz]?`,
        `Dize: São acaso iguais os que sabem e os que não sabem?`,
        `Só os dotados de entendimento se lembram.`
      ],
      [
        `难道那在深夜中虔敬地叩头、站立，戒备后世，希望主的恩惠者，[与不如此者相等]吗？`,
        `你说：有知识的与无知识的相等吗？`,
        `唯有理智的人能觉悟。`
      ],
      [
        `夜の時を，跪拝し，立礼して，来世を恐れ，主の慈悲を望んで，敬虔に過ごす者は，そうでない者と同じであろうか。`,
        `言え，「知る者と知らない者とが同じであろうか。」`,
        `思慮ある者だけが，よく訓戒を受けいれる。`
      ],
      [
        `밤 시간에 엎드리고 서서 하나님께 순종하며 내세를 두려워하고 주님의 자비를 바라는 사람이 [그렇지 않은 자와 같겠느냐]?`,
        `말하라, 아는 자와 알지 못하는 자가 같겠느냐?`,
        `오직 이성을 가진 이들만이 교훈을 받아들이느니라.`
      ],
      [
        `Come colui che nelle ore della notte è devoto, prosternato e in piedi, temendo l'Altra Vita e sperando nella misericordia del suo Signore, [è pari a chi non lo fa]?`,
        `Di': Sono forse uguali coloro che sanno e coloro che non sanno?`,
        `Solo i dotati di intelletto riflettono.`
      ],
      [
        `Czy ten, kto w godzinach nocnych jest pobożny, padając na twarz i stojąc, obawiając się życia ostatecznego i mając nadzieję na miłosierdzie swego Pana, [jest jak ten, który tego nie czyni]?`,
        `Powiedz: Czy równi są ci, którzy wiedzą, i ci, którzy nie wiedzą?`,
        `Zaprawdę, zastanawiają się tylko ci, którzy mają rozum.`
      ],
      [
        `Чи [рівний] той, хто в нічні години вдається до побожності, роблячи земні поклони та стоячи, остерігаючись Останнього життя та сподіваючись на милість свого Господа, [тому, хто так не чинить]?`,
        `Скажи: «Хіба рівні ті, які знають, і ті, які не знають?»`,
        `Пам'ятають лише наділені розумом.`
      ]
    ],
    number: `سورة الزمر / Az-Zumar، الآية 9`
  },

  {
    arabic: [
      `قُلْ يَا عِبَادِ الَّذِينَ آمَنُوا اتَّقُوا رَبَّكُمْ`,
      `لِلَّذِينَ أَحْسَنُوا فِي هَٰذِهِ الدُّنْيَا حَسَنَةٌ ۗ وَأَرْضُ اللَّهِ وَاسِعَةٌ`,
      `إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ`
    ],
    translations: [
      [
        `Say, "O My servants who have believed, fear your Lord.`,
        `For those who do good in this world is good, and the earth of Allah is spacious.`,
        `Indeed, the patient will be given their reward without account."`
      ],
      [
        `Dis: «Ô Mes serviteurs qui avez cru! Craignez votre Seigneur.`,
        `Pour ceux qui font le bien ici-bas, il y a une belle récompense, et la terre d'Allah est vaste.`,
        `Seuls les endurants recevront leur pleine récompense sans compter».`
      ],
      [
        `Di: «¡Siervos Míos que creéis! Temed a vuestro Señor.`,
        `Para quienes hagan el bien en esta vida habrá una buena recompensa, y la tierra de Alá es vasta.`,
        `Los pacientes recibirán su recompensa sin cuenta».`
      ],
      [
        `Скажи: «О Мои рабы, которые уверовали! Бойтесь вашего Господа.`,
        `Для тех, кто совершал добро в этом мире, — добро, а земля Аллаха — просторна.`,
        `Воистину, терпеливым воздастся их награда без счёта».`
      ],
      [
        `Sag: O Meine Diener, die ihr glaubt, fürchtet euren Herrn.`,
        `Für diejenigen, die in dieser Welt Gutes tun, gibt es Gutes, und Allahs Erde ist weit.`,
        `Den Standhaften wird ihr Lohn ohne Abrechnung in voller Höhe gegeben.`
      ],
      [
        `Säg: Ni som tror, Mina tjänare, frukta er Herre.`,
        `De som gör gott i detta liv skall få gott, och Guds jord är vid.`,
        `De ståndaktiga skall få sin belöning utan mått och mål.`
      ],
      [
        `Abair: "A mo sheirbhísigh a chreid, bíodh eagla bhur dTiarna oraibh.`,
        `Dóibh siúd a dhéanann maitheas sa saol seo, tá maitheas ann, agus tá talamh Allah fairsing.`,
        `Go deimhin tabharfar luach saothair na bhfuiligh gan áireamh."`
      ],
      [
        `Zeg: O Mijn dienaren die geloven, vreest uw Heer.`,
        `Voor degenen die in deze wereld goed doen, is er goeds, en Allahs aarde is ruim.`,
        `Voorwaar, de geduldigen zullen hun beloning zonder berekening ontvangen.`
      ],
      [
        `کہہ دیجیے: اے میرے ایمان والے بندو! اپنے رب سے ڈرو۔`,
        `جن لوگوں نے اس دنیا میں نیکی کی ان کے لیے بھلائی ہے، اور اللہ کی زمین کشادہ ہے۔`,
        `بے شک صبر کرنے والوں کو ان کا اجر بے حساب دیا جائے گا۔`
      ],
      [
        `Katakanlah: "Hai hamba-hamba-Ku yang beriman, bertakwalah kepada Tuhanmu".`,
        `Orang-orang yang berbuat baik di dunia ini memperoleh kebaikan. Dan bumi Allah itu luas.`,
        `Sesungguhnya hanya orang-orang yang bersabarlah yang dicukupkan pahala mereka tanpa batas.`
      ],
      [
        `De ki: Ey iman eden kullarım! Rabbinizden korkun.`,
        `Bu dünyada iyilik edenlere iyilik vardır. Allah'ın arzı geniştir.`,
        `Sabredenlere mükâfatları, hesapsız ödenecektir.`
      ],
      [
        `بگو: ای بندگان من که ایمان آورده‌اید! از پروردگارتان پروا کنید.`,
        `برای کسانی که در این دنیا نیکی کنند، پاداشی نیکوست و زمین خدا گسترده است.`,
        `جز این نیست که شکیبایان پاداششان را بی‌حساب به تمام خواهند یافت.`
      ],
      [
        `বলুন, হে আমার মুমিন বান্দাগণ! তোমরা তোমাদের পালনকর্তাকে ভয় কর।`,
        `যারা এই দুনিয়াতে সৎকাজ করে, তাদের জন্য রয়েছে কল্যাণ। আল্লাহর পৃথিবী প্রশস্ত।`,
        `যারা সবরকারী, তাদেরকেই অগণিত প্রতিদান দেয়া হবে।`
      ],
      [
        `Dize: Ó Meus servos que credes! Temei o vosso Senhor.`,
        `Para os que fazem o bem neste mundo, há bem, e a terra de Allah é vasta.`,
        `Por certo, os perseverantes receberão a sua recompensa sem conta.`
      ],
      [
        `你说：信道的众仆人啊！你们当敬畏你们的主。`,
        `在今世行善的人，将受善报，真主的大地是宽广的。`,
        `唯有坚忍者将得享受无量的报酬。`
      ],
      [
        `言え，「信仰するわが僕たちよ，あなたがたの主を畏れなさい。`,
        `現世において善を行う者には，善い報奨がある。アッラーの大地は広い。`,
        `耐え忍ぶ者こそは，数えきれない程の報奨を，全額授けられるであろう。」`
      ],
      [
        `말하라, 믿는 나의 종들이여, 너희 주님을 두려워하라.`,
        `이 세상에서 선을 행한 자들에게는 선이 있으며 하나님의 땅은 넓도다.`,
        `진실로 인내하는 자들은 셈할 수 없는 보상을 받으리라.`
      ],
      [
        `Di': O servi Miei che credete, temete il vostro Signore.`,
        `Per coloro che fanno il bene in questo mondo c'è del bene, e la terra di Allah è vasta.`,
        `In verità i perseveranti riceveranno la loro ricompensa senza misura.`
      ],
      [
        `Powiedz: O słudzy Moi, którzy wierzycie! Bójcie się waszego Pana!`,
        `Ci, którzy czynią dobro na tym świecie, otrzymają dobro, a ziemia Allaha jest przestronna.`,
        `Zaprawdę, cierpliwi otrzymają swą nagrodę bez rachunku.`
      ],
      [
        `Скажи: «О Мої раби, які увірували! Бійтеся вашого Господа.`,
        `Для тих, хто чинив добро в цьому світі, — добро, а земля Аллаха — простора.`,
        `Воістину, терплячим буде сповна відплачено без обліку».`
      ]
    ],
    number: `سورة الزمر / Az-Zumar، الآية 10`
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
      ],
      [
        `خدا زيباترين سخن را [به صورت‌] كتابى متشابه، متضمّن وعد و وعيد، نازل كرده است.`,
        `آنان كه از پروردگارشان مى‌هراسند، پوست بدنشان از آن به لرزه مى‌افتد، سپس پوستشان و دلشان به ياد خدا نرم مى‌گردد.`,
        `اين است هدايت خدا، هر كه را بخواهد، به آن راه نمايد، و هر كه را خدا گمراه كند او را راهبرى نيست`
      ],
      [
        `আল্লাহ উত্তম বাণী তথা কিতাব নাযিল করেছেন, যা সামঞ্জস্যপূর্ণ, পূনঃ পূনঃ পঠিত। এতে তাদের লোম কাঁটা দিয়ে উঠে চামড়ার উপর,`,
        `যারা তাদের পালনকর্তাকে ভয় করে, এরপর তাদের চামড়া ও অন্তর আল্লাহর স্মরণে বিনম্র হয়। এটাই আল্লাহর পথ নির্দেশ,`,
        `এর মাধ্যমে আল্লাহ যাকে ইচ্ছা পথ প্রদর্শন করেন। আর আল্লাহ যাকে গোমরাহ করেন, তার কোন পথপ্রদর্শক নেই।`
      ],
      [
        `Allah fez descer a mais bela narrativa: um Livro de partes semelhantes, reiterativo. De ouvi-lo,`,
        `as peles dos que receiam a seu Senhor arrepiam-se; em seguida, suas peles e seus corações tornam-se dúcteis à menção de Allah.`,
        `Essa é a orientação de Allah, com que guia a quem quer. E aquele, a quem Allah descaminha, não terá guia algum`
      ],
      [
        `真主曾降示最美的训辞，就是前后一律、反复叮咛的经典；`,
        `畏惧主的人，为他而战栗，然后，为记忆真主而安静。那是真主的正道，`,
        `他用来引导他所意欲引导者，真主使谁迷误，谁就没有向导。`
      ],
      [
        `アッラーはこの上ない素晴しい言葉を，互いに似た（語句をもって）繰り返し啓典で啓示なされた。`,
        `主を畏れる者は，それによって肌は戦き震える。その時アッラーを讃え唱念すれば肌も心も和ぐ。`,
        `これがアッラーの御導きである。かれは御心に適う者を導かれる。だがアッラーが迷うに任せた者には，導き手はない。`
      ],
      [
        `하나님께서 계시를 내리사 가장 아름다운 말씀으로 성서를 주셨나니 때로는 서로 유사하게 하여 때로는 반복 하셨더라`,
        `주 님을 두려워 한 자들의 피부는 떨리고 그런 후 그들의 피부와 마음은 하나님을 찬미함으로 편안하여 지나니 그것이`,
        `바로 하나님의 복음이라 하나님은 그분이 원하는자를 인도하시나 방황케 하고자 원하는 자 그에게는 안내자가 없 노라`
      ],
      [
        `Allah ha fatto scendere il più bello dei racconti, un Libro coerente e reiterante,`,
        `[alla lettura del quale] rabbrividisce la pelle di coloro che temono il loro Signore e poi si distende la pelle, insieme coi cuori, al Ricordo di Allah.`,
        `Questa è la Guida di Allah con cui Egli guida chi vuole. E coloro che Allah svia, non avranno direzione`
      ],
      [
        `Bóg zesłał najpiękniejsze opowiadanie - Księgę, zawierającą podobne do siebie powtórzenia, od których cierpnie skóra tych,`,
        `którzy się boją swego Pana; potem ich skóra i ich serca stają się miękkie na napomnienie Boga.`,
        `To jest droga Boga, którą On prowadzi, kogo chce. A kogo On sprowadzi z niej, to nie ma już dla niego żadnego przewodnika`
      ],
      [
        `Аллаг зіслав найкращу розповідь — Писання, частини якого схожі між собою та повторюються. Від нього тремтить шкіра тих,`,
        `які бояться Господа свого. А потім, під час згадування Аллага, пом’якшується і шкіра їхня, і серця їхні! Це —`,
        `дороговказ Аллага, через який Він провадить прямим шляхом, кого побажає! А кого Аллаг зіб’є зі шляху, тому не буде провідника`
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
      `وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ ۚ`,
      `إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ`,
      ``
    ],
    translations: [
      [
        `And your Lord says, "Call upon Me;`,
        `I will respond to you." Indeed,`,
        `those who disdain My worship will enter Hell [rendered] contemptible`
      ],
      [
        `Et votre Seigneur dit: «Appelez-Moi, Je vous répondrai.`,
        `Ceux qui, par orgueil,`,
        `se refusent à M'adorer entreront bientôt dans l'Enfer, humiliés»`
      ],
      [
        `Vuestro Señor ha dicho: «¡Invocadme y os escucharé!`,
        `Los que, llevados de su altivez,`,
        `no Me sirvan entrarán, humillados, en la gehena»`
      ],
      [
        `Ваш Господь сказал: «Взывайте ко Мне,`,
        `и Я отвечу вам. Воистину, те, которые превозносятся над поклонением Мне,`,
        `войдут в Геенну униженными»`
      ],
      [
        `Euer Herr sagt: "Ruft Mich an, so erhöre Ich euch.`,
        `Gewiß, diejenigen, die sich aus Hochmut weigern,`,
        `Mir zu dienen, werden in die Hölle gedemütigt eingehen`
      ],
      [
        `Er herre säger: "Be till Mig, så skall Jag besvara er [bön].`,
        `De som håller sig för goda för att tjäna Mig skall gå med böjt huvud in i helvetet`,
        ``
      ],
      [
        `Agus deir bhur dTiarna: Glaoigí orm; freagróidh mé sibh.`,
        `Go deimhin, iad siúd a bhfuil bród orthu agus a dhiúltaíonn m'adhradh,`,
        `rachaidh siad isteach in Ifreann go náireach.`
      ],
      [
        `En jullie Heer zei: "Roept Mij aan, Ik zal jullie verhoren.`,
        `Voorwaar,`,
        `degenen die te hoogmoedig zijn om Mij te dienen zullen de Hel binnengaan als vernederden`
      ],
      [
        `اور تمہارے پروردگار نے کہا ہے کہ تم مجھ سے دعا کرو میں`,
        `تمہاری (دعا) قبول کروں گا۔ جو لوگ میری عبادت سے ازراہ`,
        `تکبر کنیاتے ہیں۔ عنقریب جہنم میں ذلیل ہو کر داخل ہوں گے`
      ],
      [
        `Dan Tuhanmu berfirman, "Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu.`,
        `Sesungguhnya orang-orang yang sombong tidak mau menyembah-Ku akan masuk neraka Jahanam dalam keadaan hina dina`,
        ``
      ],
      [
        `Rabbiniz: "Bana dua edin ki duanıza icabet edeyim.`,
        `Bana kulluk etmeyi büyüklüklerine yediremeyenler alçalmış olarak cehenneme gireceklerdir" buyurmuştur`,
        ``
      ],
      [
        `و پروردگارتان فرمود: «مرا بخوانيد تا شما را اجابت كنم.`,
        `در حقيقت،`,
        `كسانى كه از پرستش من كبر مى‌ورزند به زودى خوار در دوزخ درمى‌آيند.»`
      ],
      [
        `তোমাদের পালনকর্তা বলেন, তোমরা আমাকে ডাক,`,
        `আমি সাড়া দেব। যারা আমার এবাদতে অহংকার করে তারা সত্বরই জাহান্নামে দাখিল হবে লাঞ্ছিত হয়ে।`,
        ``
      ],
      [
        `E vosso Senhor disse: "Suplicai-Me, Eu vos atenderei.`,
        `Por certo,`,
        `os que se ensoberbecem diante de Minha adoração entrarão na Geena, humilhados`
      ],
      [
        `你们的主说：你们要祈祷我，`,
        `我就应答你们；不肯崇拜我的人，`,
        `他们将卑贱地入火狱。`
      ],
      [
        `それであなたがたの主は，仰せられる。「われに祈れ。`,
        `われはあなたがたに答えるであろう。だがわれに仕えるのに高慢な者たちは，`,
        `必ず面目潰れの中に地獄に陥るであろう。」`
      ],
      [
        `그러므로 나에게 구원하라 그리하면 내가 너희에게`,
        `답하여 주리라 나를 경배함에 거만해 하 는`,
        `자는 굴욕속에 있는 자신을 지옥에서 발견하리라`
      ],
      [
        `Il vostro Signore ha detto: “InvocateMi,`,
        `vi risponderò. Coloro che per superbia non Mi adorano,`,
        `entreranno presto nell'Inferno, umiliati”`
      ],
      [
        `Powiedział wasz Pan: "Wzywajcie Mnie,`,
        `a ja was wysłucham! Zaprawdę, ci, którzy są zbyt dumni,`,
        `by Mi oddawać cześć - wejdą do Gehenny, poniżeni`
      ],
      [
        `Ваш Господь сказав: «Кличте Мене і Я відповім вам!`,
        `Воістину, ті, які гордували поклонінням Мені,`,
        `ввійдуть до геєни приниженими!»`
      ]
    ],
    number: `سورة غافر / Ghafir، الآية 60`
  },

  {
    arabic: [
      `وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ`,
      `وَعَمِلَ صَالِحًا`,
      `وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ`
    ],
    translations: [
      [
        `And who is better in speech than one who invites to Allah`,
        `and does righteousness`,
        `and says, "Indeed, I am of the Muslims."`
      ],
      [
        `Et qui profère plus belle parole que celui qui appelle à Allah`,
        `et fait bonne œuvre`,
        `et dit: «Je suis du nombre des Musulmans»?`
      ],
      [
        `¿Y quién habla mejor que quien llama a Alá,`,
        `obra con rectitud`,
        `y dice: «Yo soy de los musulmanes»?`
      ],
      [
        `И кто может сказать лучшие слова, чем тот, кто призывает к Аллаху,`,
        `совершает праведные деяния`,
        `и говорит: «Воистину, я — из мусульман»?`
      ],
      [
        `Und wer hat schönere Worte als jemand, der zu Allah aufruft,`,
        `und das Rechte tut`,
        `und sagt: Ich gehöre zu den Muslimen?`
      ],
      [
        `Vem kan tala bättre än den som kallar till Gud,`,
        `gör det som är rätt`,
        `och säger: Jag är en av dem som underkastar sig?`
      ],
      [
        `Agus cé atá níos fearr ina chaint ná an té a ghlaonn ar Allah`,
        `agus a dhéanann an mhaitheas`,
        `agus a deir: "Is duine de na Moslamaigh mé go deimhin"?`
      ],
      [
        `En wie spreekt beter dan hij die tot Allah oproept,`,
        `goed doet`,
        `en zegt: Ik behoor tot de moslims?`
      ],
      [
        `اور اس سے بہتر بات کس کی ہو سکتی ہے جو اللہ کی طرف بلائے`,
        `اور نیک عمل کرے`,
        `اور کہے کہ میں مسلمانوں میں سے ہوں؟`
      ],
      [
        `Siapakah yang lebih baik perkataannya daripada orang yang menyeru kepada Allah,`,
        `mengerjakan amal yang saleh,`,
        `dan berkata: "Sesungguhnya aku termasuk orang-orang yang menyerah diri?"`
      ],
      [
        `Allah'a çağıran,`,
        `salih amel işleyen`,
        `ve "Ben Müslümanlardanım" diyen kimseden daha güzel sözlü kim olabilir?`
      ],
      [
        `و کیست خوش‌گفتارتر از کسی که به سوی خدا دعوت کند`,
        `و کار شایسته انجام دهد`,
        `و بگوید: من از مسلمانانم؟`
      ],
      [
        `যে আল্লাহর দিকে দাওয়াত দেয়,`,
        `সৎকর্ম করে`,
        `এবং বলে, আমি তো মুসলমানদের একজন, তার কথা অপেক্ষা উত্তম কথা আর কার?`
      ],
      [
        `E quem é melhor em palavras do que aquele que chama para Allah,`,
        `pratica o bem`,
        `e diz: Por certo, sou dos muçulmanos?`
      ],
      [
        `谁的言语比号召世人崇拜真主，`,
        `并且行善，`,
        `且说我确是归顺者的人的言语更优美呢？`
      ],
      [
        `アッラーに（人びとを）呼びかけ，`,
        `善行をなし，`,
        `「わたしは本当にムスリムの一人です」と言う者の言葉に勝って，誰の言葉が美しいだろうか。`
      ],
      [
        `하나님께로 부르고`,
        `선을 행하며`,
        `"나는 무슬림 가운데 한 사람입니다"라고 말하는 이보다 더 아름다운 말을 하는 자 누구이겠느냐?`
      ],
      [
        `E chi parla meglio di colui che invita ad Allah,`,
        `compie il bene`,
        `e dice: In verità sono tra i musulmani?`
      ],
      [
        `A któż ma piękniejsze słowa od tego, kto wzywa do Allaha,`,
        `czyni dobro`,
        `i mówi: Zaprawdę, jestem jednym z muzułmanów?`
      ],
      [
        `І хто краще говорить, ніж той, хто закликає до Аллаха,`,
        `чинить праведне`,
        `і каже: «Воістину, я — з мусульман»?`
      ]
    ],
    number: `سورة فصلت / Fussilat، الآية 33`
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
      `سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ`,
      `وَفِي أَنْفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ ۗ`,
      `أَوَلَمْ يَكْفِ بِرَبِّكَ أَنَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ`
    ],
    translations: [
      [
        `We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.`,
        `But is it not sufficient concerning your Lord that He is,`,
        `over all things, a Witness`
      ],
      [
        `Nous leur montrerons Nos signes dans l'univers et en eux-mêmes,`,
        `jusqu'à ce qu'il leur devienne évident que c'est cela (le Coran),`,
        `la vérité. Ne suffit-il pas que ton Seigneur soit témoin de toute chose`
      ],
      [
        `Les mostraremos Nuestros signos fuera y dentro de`,
        `sí mismos hasta que vean claramente que es la Verdad.`,
        `¿Es que no basta que tu Señor sea testigo de todo`
      ],
      [
        `Мы покажем им Наши знамения по свету и в них самих,`,
        `пока им не станет ясно, что это есть истина. Неужели не достаточно того,`,
        `что твой Господь является Свидетелем всякой вещи`
      ],
      [
        `Wir werden ihnen Unsere Zeichen am Gesichtskreis" und in ihnen selbst zeigen,`,
        `bis es ihnen klar wird, daß es die Wahrheit ist.`,
        `Genügt es denn nicht, daß dein Herr über alles Zeuge ist`
      ],
      [
        `Vi skall visa dem Våra tecken vid horisonten och inom dem själva,`,
        `ända till dess [uppenbarelsens] sanning står klar för dem!`,
        `Är det inte nog för dem [att veta] att din Herre är vittne till allt som sker`
      ],
      [
        `Léireoimid dóibh ár gcomharthaí ar fud an domhain agus iontu féin,`,
        `go dtí go mbeidh sé soiléir dóibh gurb í an fhírinne é.`,
        `Nach leor go bhfuil do Thiarna ina Fhinné ar gach rud?`
      ],
      [
        `Wij zullen hun Onze Tekenen laten zien, aan de horizonten en in jullie zelf,`,
        `tot het jullie duidelijk zal zijn dat bij (de Koran) de Waarheid is.`,
        `Is het niet voldoende dat jouw Heer Getuige over alle zaken is`
      ],
      [
        `ہم عنقریب ان کو اطراف (عالم) میں بھی اور خود ان کی ذات میں بھی اپنی`,
        `نشانیاں دکھائیں گے یہاں تک کہ ان پر ظاہر ہوجائے گا کہ (قرآن) حق`,
        `ہے۔ کیا تم کو یہ کافی نہیں کہ تمہارا پروردگار ہر چیز سے خبردار ہے`
      ],
      [
        `Kami akan memperlihatkan kepada mereka tanda-tanda (kebesaran) Kami di segenap penjuru dan pada diri mereka sendiri,`,
        `sehingga jelaslah bagi mereka bahwa Alquran itu adalah benar.`,
        `Tidak cukupkah (bagi kamu) bahwa Tuhanmu menjadi saksi atas segala sesuatu`
      ],
      [
        `Onun hak olduğu meydana çıkıncaya kadar varlığımızın`,
        `belgelerini onlara hem dış dünyada ve hem de kendi içlerinde`,
        `göstereceğiz. Rabbinin her şeye şahit olması yetmez mi`
      ],
      [
        `به زودى نشانه‌هاى خود را در افقها[ى گوناگون‌] و در دلهايشان بديشان خواهيم نمود،`,
        `تا برايشان روشن گردد كه او خود حق است.`,
        `آيا كافى نيست كه پروردگارت خود شاهد هر چيزى است؟`
      ],
      [
        `এখন আমি তাদেরকে আমার নিদর্শনাবলী প্রদর্শন করাব পৃথিবীর দিগন্তে এবং তাদের নিজেদের মধ্যে;`,
        `ফলে তাদের কাছে ফুটে উঠবে যে,`,
        `এ কোরআন সত্য। আপনার পালনকর্তা সর্ববিষয়ে সাক্ষ্যদাতা, এটা কি যথেষ্ট নয়`
      ],
      [
        `Fá-los-emos ver Nossos sinais nos horizontes e neles mesmos,`,
        `até que se torne evidente, para eles, que ele, Alcorão, é a Verdade.`,
        `E não basta que teu Senhor, sobre todas as cousas, seja Testemunha`
      ],
      [
        `我将在四方和在他们自身中，`,
        `把我的许多迹象昭示他们，直到他们明白《古兰经》确是真理。`,
        `难道你的主能见证万物还不够吗？`
      ],
      [
        `われは，わが印が真理であることが，かれらに明白になるまで，`,
        `（遠い）空の彼方において，またかれら自身の中において（示す）。本当にあなたがたの主は，`,
        `凡てのことの立証者であられる。そのことだけでも十分ではないか。`
      ],
      [
        `하나님이 그들에게 그분의 예증을 대지 안에서 그리고 그들`,
        `의 영혼 속에서 보여 주리니 이것이 진리임을 그들이 알때까지라`,
        `주님이 모든 것에 대한 중인이라 는 것으로 충만하지 않느뇨`
      ],
      [
        `Mostreremo loro i Nostri segni nell'universo e nelle loro stesse persone,`,
        `finché non sia loro chiaro che questa è la Verità”.`,
        `Non ti basta che il tuo Signore sia testimone di ogni cosa`
      ],
      [
        `Niebawem pokażemy im Nasze znaki na horyzontach i w nich samych,`,
        `aż w końcu stanie się dla nich jasne, że to jest prawda. Czyż nie jest wystarczające,`,
        `jeśli chodzi o twojego Pana, że On jest świadkiem każdej rzeczy`
      ],
      [
        `Ми покажемо їм Наші знамення на небесних обріях та в них самих,`,
        `доки вони не зрозуміють, що це — істина!`,
        `Невже не достатньо того, що Аллаг — кожній речі Свідок`
      ]
    ],
    number: `سورة فصلت / Fussilat، الآية 53`
  },

  {
    arabic: [
      `فَاطِرُ السَّمَاوَاتِ وَالْأَرْضِ ۚ جَعَلَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا`,
      `وَمِنَ الْأَنْعَامِ أَزْوَاجًا ۖ يَذْرَؤُكُمْ فِيهِ ۚ`,
      `لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ`
    ],
    translations: [
      [
        `[He is] Creator of the heavens and the earth. He has made for you from yourselves,`,
        `mates, and among the cattle, mates; He multiplies you thereby.`,
        `There is nothing like unto Him, and He is the Hearing, the Seeing`
      ],
      [
        `Créateur des cieux et de la terre.`,
        `Il vous a donné des épouses [issues] de vous-mêmes et des bestiaux par couples; par ce moyen Il vous multiplie.`,
        `Il n'y a rien qui Lui ressemble; et c'est Lui l'Audient, le Clairvoyant`
      ],
      [
        `Creador de los cielos y de la tierra.`,
        `Os ha dado esposas salidas de vosotros y parejas salidas de vuestros rebaños, diseminándoos así.`,
        `No hay nada que se Le asemeje. Él es Quien todo lo oye, Quien todo lo ve`
      ],
      [
        `Творец небес и земли! Он создал для вас супруг из вас самих,`,
        `а также скот парами. Так Он размножает вас.`,
        `Нет никого подобного Ему, и Он - Слышащий, Видящий`
      ],
      [
        `(Er ist) der Erschaffer der Himmel und der Erde.`,
        `Er hat euch aus euch selbst Gattinnen gemacht, und auch aus dem Vieh Paare, wodurch Er euch vermehrt.`,
        `Nichts ist Ihm gleich; und Er ist der Allhörende und Allsehende`
      ],
      [
        `Han är himlarnas och jordens Skapare. Han har skapat hustrur åt er av samma natur som ni själva;`,
        `även av boskapen [har Han skapat] par [- han- och hondjur -] och så får ni tillväxa i antal.`,
        `Ingenting är som Han - Han som hör allt, ser allt`
      ],
      [
        `Cruthaitheoir na bhflaitheas agus na talún. Rinne Sé daoibh céilí as bhur measc féin,`,
        `agus ar na hainmhithe freisin; méadaíonn Sé sibh leis sin.`,
        `Níl aon rud cosúil leis, agus is Eisean an tÉisteoir, an Feiceálaí.`
      ],
      [
        `De Schepper van de hemelen en de aarde,`,
        `Hij heeft voor jullie van julliezelf en van de dieren paren geschapen. Hij vermenigvuldigt jullie,`,
        `niets is aan Hem gelijk. En Hij is de Alhorende, de Alziende`
      ],
      [
        `آسمانوں اور زمین کا پیدا کرنے والا (وہی ہے) ۔ اسی نے تمہارے لئے تمہاری`,
        `ہی جنس کے جوڑے بنائے اور چارپایوں کے بھی جوڑے (بنائے اور) اسی طریق`,
        `پر تم کو پھیلاتا رہتا ہے۔ اس جیسی کوئی چیز نہیں۔ اور وہ دیکھتا سنتا ہے`
      ],
      [
        `(Allah) Pencipta langit dan bumi. Dia menjadikan bagi kamu pasangan-pasangan dari jenis kamu sendiri,`,
        `dan dari jenis hewan ternak pasangan-pasangan (juga). Dijadikan-Nya kamu berkembang biak dengan jalan itu.`,
        `Tidak ada sesuatu pun yang serupa dengan Dia. Dan Dia Yang Maha Mendengar, Maha Melihat`
      ],
      [
        `Göklerin ve yerin yaratanı, size içinizden eşler,`,
        `çift çift hayvanlar var etmiştir. Bu suretle, çoğalmanızı sağlamıştır.`,
        `O'nun benzeri hiçbir şey yoktur. O, işitendir, görendir`
      ],
      [
        `پديدآورنده آسمانها و زمين است. از خودتان براى شما جفتهايى قرار داد،`,
        `و از دامها [نيز] نر و ماده [قرار داد].`,
        `بدين وسيله شما را بسيار مى‌گرداند. چيزى مانند او نيست و اوست شنواى بينا`
      ],
      [
        `তিনি নভোমন্ডল ও ভূমন্ডলের স্রষ্টা। তিনি তোমাদের মধ্য থেকে তোমাদের জন্যে যুগল`,
        `সৃষ্টি করেছেন এবং চতুস্পদ জন্তুদের মধ্য থেকে জোড়া সৃষ্টি করেছেন। এভাবে তিনি`,
        `তোমাদের বংশ বিস্তার করেন। কোন কিছুই তাঁর অনুরূপ নয়। তিনি সব শুনেন, সব দেখেন।`
      ],
      [
        `Ele é O Criador dos céus e da terra. Ele vos fez, de vós mesmos,`,
        `casais, e dos rebanhos, casais; com isso, multiplica-vos.`,
        `Nada é igual a Ele. E Ele é O Oniouvinte, O Onividente`
      ],
      [
        `他是天地的创造者，他以你们的同类为你们的妻子；`,
        `使你们的牲畜同类相配；他借此使你们蕃殖。`,
        `任何物不似象他。他确是全聪的，确是全明的。`
      ],
      [
        `天と地の創造者。かれはあなたがたのために，あなたがたの間から夫婦を，`,
        `また家畜にも雌雄を創られた。このようにして，あなたがたを繁殖させる。`,
        `かれに比べられるものは何もない。かれは全聴にして凡てを見透される方である。`
      ],
      [
        `그분은 천지를 창조하신 분 이며 너희를 위해 자웅을 두사 가 축에도`,
        `자웅을 두었노라 이로 하 여 너희를 번식케 하니 그분에 비 유할 것`,
        `아무 것도 없도다 실로 그분은 모든 것을 들으시고 지켜 보고 계시니라`
      ],
      [
        `È il Creatore dei cieli e della terra. Da voi stessi ha tratto le vostre spose,`,
        `e [vi ha dato] il bestiame a coppie. Così vi moltiplica.`,
        `Niente è simile a Lui. Egli è l'Audiente, Colui Che tutto osserva`
      ],
      [
        `Stwórca niebios i ziemi. On uczynił dla was z was samych - pary,`,
        `i tak samo z trzód - pary. On was rozmnaża w ten sposób.`,
        `Nic nie jest do Niego podobne. On jest Słyszący, Widzący`
      ],
      [
        `Творець небес і землі! Він створив вам дружин із вас самих,`,
        `а також створив худобу парами; так Він розмножує вас.`,
        `Немає нічого, схожого на Нього! А Він — Всечуючий, Всевидячий`
      ]
    ],
    number: `سورة الشورى / Ash-Shura، الآية 11`
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
        `하나님 نزد에서 가장 존귀한 자는 가장 경건한 자이다. 하나님는 전지전능하시다.`
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
      `وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ`,
      ``,
      ``
    ],
    translations: [
      [
        `And I did not create the jinn and mankind except to worship Me`,
        ``,
        ``
      ],
      [
        `Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent`,
        ``,
        ``
      ],
      [
        `No he creado a los genios y a los hombres sino para que Me sirvan`,
        ``,
        ``
      ],
      [
        `Я сотворил джиннов и людей только для того, чтобы они поклонялись Мне`,
        ``,
        ``
      ],
      [
        `Und Ich habe die Ginn und die Menschen nur (dazu) erschaffen, damit sie Mir dienen`,
        ``,
        ``
      ],
      [
        `Jag har skapat de osynliga väsendena och människorna enbart för att de skall [känna Mig och] dyrka Mig`,
        ``,
        ``
      ],
      [
        `Agus níor chruthaigh mé na jinn ná an chine daonna ach chun adhradh a dhéanamh dom.`,
        ``,
        ``
      ],
      [
        `En Ik heb de Djinn's en de mens slechts geschapen om Mij te dienen`,
        ``,
        ``
      ],
      [
        `اور میں نے جنوں اور انسانوں کو اس لئے پیدا کیا ہے کہ میری عبادت کریں`,
        ``,
        ``
      ],
      [
        `Aku tidak menciptakan jin dan manusia melainkan agar mereka beribadah kepada-Ku`,
        ``,
        ``
      ],
      [
        `Cinleri ve insanları ancak Bana kulluk etmeleri için yaratmışımdır`,
        ``,
        ``
      ],
      [
        `و جن و انس را نيافريدم جز براى آنكه مرا بپرستند`,
        ``,
        ``
      ],
      [
        `আমার এবাদত করার জন্যই আমি মানব ও জিন জাতি সৃষ্টি করেছি।`,
        ``,
        ``
      ],
      [
        `E não criei os jinns e os humanos senão para Me adorarem`,
        ``,
        ``
      ],
      [
        `我创造精灵和人类，只为要他们崇拜我。`,
        ``,
        ``
      ],
      [
        `ジンと人間を創ったのはわれに仕えさせるため。`,
        ``,
        ``
      ],
      [
        `내가 영마와 인간을 창조함은그들이 나를 섬기게 하려 함이라`,
        ``,
        ``
      ],
      [
        `È solo perché Mi adorassero che ho creato i dèmoni e gli uomini`,
        ``,
        ``
      ],
      [
        `I stworzyłem dżiny i ludzi tylko po to, żeby Mnie czcili`,
        ``,
        ``
      ],
      [
        `Я створив джинів та людей лише для того, щоб вони поклонялися Мені`,
        ``,
        ``
      ]
    ],
    number: `سورة الذاريات / Adh-Dhariyat، الآية 56`
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
      `هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ`,
      `هُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا`,
      `وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ`
    ],
    translations: [
      [
        `He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing.`,
        `It is He who created the heavens and earth in six days and then established Himself above the Throne. He knows what penetrates the earth and what emerges from it and what descends from the heaven and what ascends therein.`,
        `And He is with you wherever you are. And Allah, of what you do, is Seeing.`
      ],
      [
        `C'est Lui le Premier et le Dernier, l'Apparent et le Caché, et Il est Omniscient.`,
        `C'est Lui qui a créé les cieux et la terre en six jours, puis Il S'est établi sur le Trône. Il sait ce qui pénètre dans la terre et ce qui en sort, ce qui descend du ciel et ce qui y monte.`,
        `Et Il est avec vous où que vous soyez. Et Allah observe bien ce que vous faites.`
      ],
      [
        `Él es el Primero y el Último, el Manifiesto y el Oculto, y Él conoce todas las cosas.`,
        `Él es Quien creó los cielos y la tierra en seis días y luego se estableció sobre el Trono. Sabe lo que penetra en la tierra y lo que sale de ella, lo que desciende del cielo y lo que asciende a él.`,
        `Y está con vosotros dondequiera que estéis. Alá ve bien lo que hacéis.`
      ],
      [
        `Он — Первый и Последний, Явный и Скрытый, и Он знает о всякой вещи.`,
        `Он — Тот, Кто сотворил небеса и землю за шесть дней, а затем утвердился на Троне. Он знает то, что входит в землю, и то, что выходит из неё, что нисходит с неба и что восходит к нему.`,
        `Он с вами, где бы вы ни были. Аллах видит то, что вы совершаете.`
      ],
      [
        `Er ist der Erste und der Letzte, der Offenkundige und der Verborgene, und Er weiß über alles Bescheid.`,
        `Er ist es, Der die Himmel und die Erde in sechs Tagen erschuf und sich dann auf dem Thron erhob. Er weiß, was in die Erde eindringt und was aus ihr herauskommt, was vom Himmel herabkommt und was in ihn emporsteigt.`,
        `Und Er ist mit euch, wo immer ihr auch seid. Und Allah sieht wohl, was ihr tut.`
      ],
      [
        `Han är den Förste och den Siste, den Uppenbare och den Fördolde, och Han har kännedom om allt.`,
        `Han är Den som skapade himlarna och jorden på sex dagar och därefter intog tronen. Han vet vad som tränger ner i jorden och vad som kommer upp ur den, vad som stiger ner från himlen och vad som stiger upp till den.`,
        `Och Han är med er, var ni än är. Gud ser allt vad ni gör.`
      ],
      [
        `Is É an Chéad Duine agus an Duine Deiridh, an Follasach agus an Folaithe, agus tá eolas aige ar gach rud.`,
        `Is É an té a chruthaigh na flaithis agus an talamh i sé lá agus ansin a shocraigh é féin ar an Ríchathaoir. Tá a fhios aige cad a théann isteach sa talamh agus cad a thagann amach as, agus cad a thagann anuas ón spéir agus cad a théann suas inti.`,
        `Agus tá sé libh pé áit a mbíonn sibh. Agus feiceann Allah an méid a dhéanann sibh.`
      ],
      [
        `Hij is de Eerste en de Laatste, de Zichtbare en de Verborgene, en Hij weet alles.`,
        `Hij is Degene Die de hemelen en de aarde in zes dagen schiep en Zich daarna op de Troon vestigde. Hij weet wat in de aarde doordringt en wat eruit komt, wat uit de hemel neerdaalt en wat erin opstijgt.`,
        `En Hij is met u, waar gij ook zijt. En Allah ziet wat gij doet.`
      ],
      [
        `وہی اول ہے اور وہی آخر، وہی ظاہر ہے اور وہی باطن، اور وہ ہر چیز کو جاننے والا ہے۔`,
        `وہی ہے جس نے آسمانوں اور زمین کو چھ دن میں پیدا کیا، پھر عرش پر قائم ہوا۔ وہ جانتا ہے جو کچھ زمین میں داخل ہوتا ہے اور جو اس سے نکلتا ہے اور جو آسمان سے اترتا ہے اور جو اس میں چڑھتا ہے۔`,
        `اور وہ تمہارے ساتھ ہے جہاں کہیں بھی تم ہو، اور اللہ تمہارے اعمال کو دیکھنے والا ہے۔`
      ],
      [
        `Dialah Yang Awal dan Yang Akhir, Yang Zhahir dan Yang Bathin; dan Dia Maha Mengetahui segala sesuatu.`,
        `Dialah yang menciptakan langit dan bumi dalam enam masa; kemudian Dia bersemayam di atas 'Arsy. Dia mengetahui apa yang masuk ke dalam bumi dan apa yang keluar daripadanya dan apa yang turun dari langit dan apa yang naik kepada-Nya.`,
        `Dan Dia bersama kamu di mana saja kamu berada. Dan Allah Maha Melihat apa yang kamu kerjakan.`
      ],
      [
        `O, evveldir ve ahirdir, zahirdir ve batındır; O, her şeyi bilir.`,
        `O, gökleri ve yeri altı günde yaratan, sonra Arş'a istivâ edendir. Yere gireni ve ondan çıkanı, gökten ineni ve ona çıkanı bilir.`,
        `Nerede olursanız olun O sizinle beraberdir. Allah, yaptıklarınızı görmektedir.`
      ],
      [
        `او اول و آخر و ظاهر و باطن است و او به هر چیزی داناست.`,
        `اوست که آسمان‌ها و زمین را در شش روز آفرید، سپس بر عرش استقرار یافت. می‌داند آنچه را که در زمین فرو می‌رود و آنچه را که از آن بیرون می‌آید و آنچه را که از آسمان فرود می‌آید و آنچه را که در آن بالا می‌رود.`,
        `و هر کجا که باشید او با شماست و خداوند به آنچه می‌کنید بیناست.`
      ],
      [
        `তিনিই প্রথম, তিনিই শেষ, তিনিই প্রকাশ্য, তিনিই গুপ্ত এবং তিনি সর্ব বিষয়ে জ্ঞাত।`,
        `তিনি নভোমন্ডল ও ভূমন্ডল ছয় দিনে সৃষ্টি করেছেন, অতঃপর আরশে অধিষ্ঠিত হয়েছেন। তিনি জানেন যা ভূমিতে প্রবেশ করে ও যা তা থেকে বের হয় এবং যা আকাশ থেকে বর্ষিত হয় ও যা আকাশে উত্থিত হয়।`,
        `তোমরা যেখানেই থাক, তিনি তোমাদের সাথে আছেন। তোমরা যা কর, আল্লাহ তা দেখেন।`
      ],
      [
        `Ele é o Primeiro e o Último, o Aparente e o Oculto, e Ele tem conhecimento de todas as coisas.`,
        `Ele é Quem criou os céus e a terra em seis dias e depois estabeleceu-Se sobre o Trono. Ele sabe o que penetra na terra e o que dela sai, o que desce do céu e o que a ele sobe.`,
        `E Ele está convosco onde quer que estejais. E Allah observa o que fazeis.`
      ],
      [
        `他是元始的，是最终的，是显著的，是隐微的，他对于万物是全知的。`,
        `他在六日内创造了天地，然后升上宝座，他知道入地的和出地的，从天降下的和升天的。`,
        `你们无论在哪里，他都和你们同在。真主是明察你们的行为的。`
      ],
      [
        `かれは最初のお方であり最後のお方，外在し内在されるお方，またかれは凡てのことに全知であられる。`,
        `かれは六日の間に天と地を創造され，それから玉座に鎮座された。かれは大地に入るもの，そこから出るもの，天から下るもの，またそれに上るものを知っておられる。`,
        `あなたがたがどこにいようとも，かれはあなたがたと共におられる。アッラーはあなたがたの行うことを御覧になられる。`
      ],
      [
        `그분은 처음이시며 마지막이시고 드러나 계시며 감추어져 계시니 그분은 모든 것을 아시는 분이시니라.`,
        `그분은 하늘과 땅을 엿새 동안 창조하시고 옥좌에 좌정하신 분이시니 땅속으로 들어가는 것과 그곳에서 나오는 것, 하늘에서 내려오는 것과 그곳으로 올라가는 것을 아시느니라.`,
        `너희가 어디에 있든 그분은 너희와 함께하시며 하나님은 너희가 행하는 것을 보고 계시느니라.`
      ],
      [
        `Egli è il Primo e l'Ultimo, l'Evidente e il Nascosto, ed Egli è onnisciente.`,
        `Egli è Colui che ha creato i cieli e la terra in sei giorni, quindi si è innalzato sul Trono. Conosce ciò che penetra nella terra e ciò che ne esce, ciò che scende dal cielo e ciò che vi sale.`,
        `Egli è con voi ovunque voi siate. Allah osserva quello che fate.`
      ],
      [
        `On jest Pierwszy i Ostatni, Jawny i Ukryty, i On o wszystkim wie.`,
        `On jest Tym, który stworzył niebiosa i ziemię w sześć dni, a potem ustanowił się na Tronie. Wie, co wnika w ziemię i co z niej wychodzi, co zstępuje z nieba i co do niego wstępuje.`,
        `I On jest z wami, gdziekolwiek jesteście. A Allah widzi to, co czynicie.`
      ],
      [
        `Він — Перший і Останній, Явний і Прихований, і Він знає про все.`,
        `Він — Той, Хто створив небеса та землю за шість днів, а потім утвердився на Троні. Він знає те, що входить у землю, і те, що виходить із неї, що сходить з неба і що підноситься до нього.`,
        `Він з вами, де б ви не були. Аллах бачить те, що ви робите.`
      ]
    ],
    number: `سورة الحديد / Al-Hadid، الآيتان 3-4`
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
      `هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَٰنُ الرَّحِيمُ`,
      `هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ ۚ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ`,
      `هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ ۚ يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ`
    ],
    translations: [
      [
        `He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful.`,
        `He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him.`,
        `He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise`
      ],
      [
        `C'est Lui Allah. Nulle divinité autre que Lui, le Connaisseur de l'Invisible tout comme du visible. C'est Lui, le Tout Miséricordieux, le Très Miséricordieux.`,
        `C'est Lui, Allah. Nulle divinité autre que Lui; Le Souverain, Le Pur, L'Apaisant, Le Rassurant, Le Prédominant, Le Tout Puissant, Le Contraignant, L'Orgueilleux. Gloire à Allah! Il transcende ce qu'ils Lui associent.`,
        `C'est Lui Allah, le Créateur, Celui qui donne un commencement à toute chose, le Formateur. A Lui les plus beaux noms. Tout ce qui est dans les cieux et la terre Le glorifie. Et c'est Lui le Puissant, le Sage`
      ],
      [
        `Es Alá -no hay más dios que Él-, el Conocedor de lo oculto y de lo patente. Es el Compasivo, el Misericordioso.`,
        `Es Alá -no hay más dios que Él-, el Rey, el Santísimo, la Paz, Quien da Seguridad, el Custodio, el Poderoso, el Fuerte, el Sumo. ¡Gloria a Alá! ¡Está por encima de lo que Le asocian.`,
        `Es Alá, el Creador, el Hacedor, el Formador. Posee los nombres más bellos. Lo que está en los cielos y en la tierra Le glorifica. Es el Poderoso, el Sabio`
      ],
      [
        `Он - Аллах, и нет божества, кроме Него, Ведающего сокровенное и явное. Он - Милостивый, Милосердный.`,
        `Он - Аллах, и нет божества, кроме Него, Властелина, Святого, Пречистого, Оберегающего, Хранителя, Могущественного, Могучего, Гордого. Пречист Аллах и далек от того, что они приобщают в сотоварищи.`,
        `Он - Аллах, Творец, Создатель, Дарующий облик. У Него - самые прекрасные имена. Славит Его то, что на небесах и на земле. Он - Могущественный, Мудрый`
      ],
      [
        `Er ist Allah, außer dem es keinen Gott gibt, der Kenner des Verborgenen und des Offenbaren. Er ist der Allerbarmer und Barmherzige.`,
        `Er ist Allah, außer dem es keinen Gott gibt, der König, der Heilige, der Friede', der Gewährer der Sicherheit, der Wächter, der Allmächtige, der Gewalthaber, der Stolze. Preis sei Allah! (Und Erhaben ist Er) über das, was sie (Ihm) beigesellen.`,
        `Er ist Allah, der Schöpfer, der Erschaffer, der Gestalter. Sein sind die schönsten Namen. Ihn preist (alles), was in den Himmeln und auf der Erde ist. Und Er ist der Allmächtige und Allweise`
      ],
      [
        `Han är Gud; ingen gudom finns utom Han! Han känner allt det som är dolt för människor liksom det som de kan bevittna - Han, den Nåderike, den Barmhärtige.`,
        `Han är Gud; ingen gudom finns utom Han, Konungen, den Helige, Han [som skänker] fred, Han som [väcker och vidmakthåller] tron, Han som vakar [över uppenbarelsen], den Mäktige, Han som betvingar och återupprättar, Han vars storhet [ingen kan fatta]! Stor är Gud i Sin härlighet, fjärran från allt som [människor] vill sätta vid Hans sida.`,
        `Han är Gud, Skaparen, som är upphovet till allt och som ger allt dess slutliga form. Hans är fullkomlighetens sköna namn; allt och alla i himlarna och på jorden prisar Honom - Han är den Allsmäktige, den Vise`
      ],
      [
        `Is é Allah é, nach bhfuil aon dia ach Eisean, Eolaí an rud nach bhfeictear agus an rud a fheictear. Is Eisean an Trócaireach Uile, an Trócaireach Speisialta.`,
        `Is é Allah é, nach bhfuil aon dia ach Eisean, an Rí, an Naofa, an tSíocháin, an Bronntóir Creidimh, an Cosantóir, an Cumhachtach, an tÉigeantóir, an tUasal. Is ard é Allah thar a gcuireann siad i gcomhpháirt leis.`,
        `Is é Allah é, an Cruthaitheoir, an Tionscnóir, an Múnlóir; leis na hainmneacha is áille. Tá gach rud sna flaithis agus ar an talamh á mholadh. Agus is Eisean an Cumhachtach, an Críonna.`
      ],
      [
        `Hij is Allah, Degene naast Wie er geen god is dan Hij, de Kenner van het onwaarneembare en het waarneembare, Hij is de Erbarmer, de Meest Barmhartige.`,
        `Hij is Allah, Degene naast Wie er geen god is dan Hij, de Heerser, de Heilige, de Schenker van veiligheid, de Vertrouwende, de Beschermer, de Almachtige, de Onweerstaanbare Onderwerper, de Trotse. Heilig is Hij boven wat zij Hem toekennen.`,
        `Hij is Allah, de Schepper, de Voortbrenger, de Vormer, aan Hem behoren de Schone Namen. Wat er in de hemelen en op de aarde is prijst Zijn Glorie. En Hij is de Almachtige, de Alwijze`
      ],
      [
        `وہی خدا ہے جس کے سوا کوئی معبود نہیں۔ پوشیدہ اور ظاہر کا جاننے والا ہے وہ بڑا مہربان نہایت رحم والا ہے۔`,
        `وہی خدا ہے جس کے سوا کوئی عبادت کے لائق نہیں۔ بادشاہ (حقیقی) پاک ذات (ہر عیب سے) سلامتی امن دینے والا نگہبان غالب زبردست بڑائی والا۔ خدا ان لوگوں کے شریک مقرر کرنے سے پاک ہے۔`,
        `وہی خدا (تمام مخلوقات کا) خالق۔ ایجاد واختراع کرنے والا صورتیں بنانے والا اس کے سب اچھے سے اچھے نام ہیں۔ جتنی چیزیں آسمانوں اور زمین میں ہیں سب اس کی تسبیح کرتی ہیں اور وہ غالب حکمت والا ہے`
      ],
      [
        `Dialah Allah, tidak ada tuhan selain Dia. Mengetahui yang gaib dan yang nyata, Dialah Yang Maha Pengasih, Maha Penyayang.`,
        `Dialah Allah, tidak ada tuhan selain Dia. Maha Raja Yang Mahasuci, Yang Mahasejahtera, Yang Menjaga Keamanan, Pemelihara Keselamatan, Yang Mahaperkasa, Yang Mahakuasa, Yang Memiliki Segala Keagungan. Mahasuci Allah dari apa yang mereka persekutukan.`,
        `Dialah Allah Yang Menciptakan, Yang Mengadakan, Yang Membentuk Rupa, Dia memiliki nama-nama yang indah. Apa yang di langit dan di bumi bertasbih kepada-Nya. Dan Dialah Yang Mahaperkasa, Mahabijaksana`
      ],
      [
        `O, görüleni de görülmeyeni de bilen, kendisinden başka tanrı olmayan Allah'tır. O, acıyıcı olandır, acıyandır.`,
        `O, kendisinden başka tanrı olmayan, hükümran, çok kutsal; esenlik veren, güvenlik veren, görüp gözeten, güçlü, buyruğunu herşeye geçiren, ulu olan, Allah'tır. Allah onların koştukları eşlerden (ortaklardan) münezzehtir.`,
        `O, vareden, güzel yaratan, yarattıklarına şekil veren, en güzel adlar kendisinin olan Allah'tır. Göklerde ve yerde olanlar O'nu tesbih ederler. O güçlüdür, Hakim'dir`
      ],
      [
        `اوست خدايى كه غير از او معبودى نيست، داننده غيب و آشكار است، اوست رحمتگر مهربان.`,
        `اوست خدايى كه جز او معبودى نيست، همان فرمانرواى پاك سلامت‌[بخش، و] مؤمن [به حقيقت حقه خود كه‌] نگهبان، عزيز، جبّار [و] متكبّر [است‌]. پاك است خدا از آنچه [با او] شريك مى‌گردانند.`,
        `اوست خداى خالق نوساز صورتگر [كه‌] بهترين نامها [و صفات‌] از آنِ اوست. آنچه در آسمانها و زمين است [جمله‌] تسبيح او مى‌گويند و او عزيز حكيم است`
      ],
      [
        `তিনিই আল্লাহ তা’আলা, তিনি ব্যতীত কোন উপাস্য নেই; তিনি দৃশ্য ও অদৃশ্যকে জানেন তিনি পরম দয়ালু, অসীম দাতা।`,
        `তিনিই আল্লাহ তিনি ব্যতিত কোন উপাস্য নেই। তিনিই একমাত্র মালিক, পবিত্র, শান্তি ও নিরাপত্তাদাতা, আশ্রয়দাতা, পরাক্রান্ত, প্রতাপান্বিত, মাহাত্ম্যশীল। তারা যাকে অংশীদার করে আল্লাহ তা’ আলা তা থেকে পবিত্র।`,
        `তিনিই আল্লাহ তা’আলা, স্রষ্টা, উদ্ভাবক, রূপদাতা, উত্তম নাম সমূহ তাঁরই। নভোমন্ডলে ও ভূমন্ডলে যা কিছু আছে, সবই তাঁর পবিত্রতা ঘোষণা করে। তিনি পরাক্রান্ত প্রজ্ঞাময়।`
      ],
      [
        `Ele é Allah. Não existe deus senão Ele, O Sabedor do invisível e do visível, Ele é O Misericordioso, O Misericordiador.`,
        `Ele é Allah. Não existe deus senão Ele, O Rei, O Puro, A Paz, O Confortador, O Predominante, O Todo-Poderoso, O Transcendente, O Orgulhoso. Glorificado seja Allah, acima do que idolatram.`,
        `Ele é Allah, O Criador, O Iniciador da criação, O Configurador; dEle são os mais belos nomes. O que há nos céus e na terra glorifica-O. E Ele é O Todo-Poderoso, O Sábio`
      ],
      [
        `他是真主，除他外，绝无应受崇拜的。他是全知幽玄的，他是至仁的，是至慈的。`,
        `他是真主，除他外，绝无应受崇拜的。他是君主。他是至洁的，是健全的，是保佑的，是见证的，是万能的，是尊严的，是尊大的。赞颂真主，超绝万物，他是超乎他们所用以配他的。`,
        `他是真主，是创造者，是造化者，是赋形者，他有许多极美的称号，凡在天地间的，都赞颂他，他是万能的，是至睿的。`
      ],
      [
        `かれこそは，アッラーであられる。かれの外に神はないのである。かれは幽玄界と現象界を知っておられ，慈悲あまねく慈愛深き御方であられる。`,
        `かれこそは，アッラーであられる。かれの外に神はないのである。至高の王者，神聖にして平安の源であり，信仰を管理し，安全を守護なされ，偉力ならびなく全能で，限りなく尊い方であられる。アッラーに讃えあれ。（かれは）人が配するものの上に（高くおられる）。`,
        `かれこそは，アッラーであられる。造物の主，造化の主，形態を授ける（主であり），最も美しい御名はかれの有である。天地の凡てのものは，かれを讃える。本当にかれは偉力ならびなく英明であられる。`
      ],
      [
        `그분은 하나님으로서 그분 이외에는 경배 받을 존재가 없노라. 보이지 않는 것과 보이는 것을 아시는 분. 그분은 가장 자비로우시고 가장 자애로우신 분이라.`,
        `그분은 하나님으로서 그분 이외에는 경배 받을 존재가 없노라. 제왕, 성스러우신 분, 그 어떤 결점도 없으신 분, 안전을 주시는 분, 지켜보시는 분, 가장 존엄하신 분, 위압하시는 분, 홀로 위대하신 분. 그들이 (그분께) 대등한 존재를 두나 하나님은 완벽하신 분이라.`,
        `그분은 하나님으로서 창조하시는 분, 창조를 시작하시는 분, 형상을 부여하시는 분이라. 그분께는 가장 훌륭한 이름들이 있노라. 하늘과 대지에 있는 것들이 그분의 완벽함을 찬양하며 그분은 가장 존엄하시고 가장 현명하신 분이라`
      ],
      [
        `Egli è Allah, Colui all'infuori del Quale non c'è altro dio, il Conoscitore dell'invisibile e del palese. Egli è il Compassionevole, il Misericordioso.`,
        `Egli è Allah, Colui all'infuori del Quale non c'è altro dio, il Re, il Santo, la Pace, il Fedele, il Custode, l'Eccelso, Colui Che costringe al Suo volere, Colui Che è cosciente della Sua grandezza. Gloria ad Allah, ben al di là di quanto Gli associano.`,
        `Egli è Allah, il Creatore, Colui Che dà inizio a tutte le cose, Colui Che dà forma a tutte le cose. A Lui [appartengono] i nomi più belli. Tutto ciò che è nei cieli e sulla terra rende gloria a Lui. Egli è l'Eccelso, il Saggio`
      ],
      [
        `On jest Bogiem! Nie ma boga, jak tylko On! On zna skryte i widzialne. On jest Miłosierny, Litościwy.`,
        `On jest Bogiem! Nie ma boga, jak tylko On!; - Król, Przenajświętszy, Pokój, Wierny, Zachowujący, Potężny, Przemożny, Wyniosły! Chwała niech będzie Bogu! On jest ponad to, co dodają Mu jako współtowarzyszy.`,
        `On jest Bogiem! Stworzycielem, Twórcą, Kształtującym! Do Niego należą najpiękniejsze imiona! Głosi Jego chwałę to, co jest w niebiosach, i to, co jest na ziemi! On jest Potężny, Mądry`
      ],
      [
        `Він — Аллаг, окрім Нього немає бога! Він знає потаємне та відкрите, і Він — Милостивий, Милосердний.`,
        `Він — Аллаг, окрім Нього немає бога! Цар, Пресвятий, Мирний, Вірний, Охоронець, Великий, Сильний, Звеличений! Пречистий Аллаг від тих, кому поклоняються нарівні з Ним.`,
        `Він — Аллаг, Творець, Створювач, Наділяючий образом! Йому належать прекрасні імена, славить Його те, що на небесах і на землі, а Він — Великий, Мудрий`
      ]
    ],
    number: `سورة الحشر / Al-Hashr، الآيات 22-24`
  },

  {
    arabic: [
      `مَا أَصَابَ مِنْ مُصِيبَةٍ إِلَّا بِإِذْنِ اللَّهِ ۗ`,
      `وَمَنْ يُؤْمِنْ بِاللَّهِ يَهْدِ قَلْبَهُ ۚ`,
      `وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ`
    ],
    translations: [
      [
        `No disaster strikes except by permission of Allah.`,
        `And whoever believes in Allah - He will guide his heart.`,
        `And Allah is Knowing of all things`
      ],
      [
        `Nul malheur n'atteint [l'homme] que par la permission d'Allah.`,
        `Et quiconque croit en Allah,`,
        `[Allah] guide son cœur. Allah est Omniscient`
      ],
      [
        `No sucede ninguna desgracia si Alá no lo permite.`,
        `Él dirige el corazón de quien cree en Alá.`,
        `Alá es omnisciente`
      ],
      [
        `Любое несчастье постигает только по воле Аллаха.`,
        `Сердце того, кто уверовал в Аллаха,`,
        `Он наставляет на прямой путь. Аллах знает о всякой вещи`
      ],
      [
        `Kein Unglück trifft (jemanden), außer mit Allahs Erlaubnis.`,
        `Und wer an Allah glaubt,`,
        `dessen Herz leitet Er recht. Und Allah weiß über alles Bescheid`
      ],
      [
        `Ingen olycka drabbar [er] utan Guds tillåtelse.`,
        `Gud ger hjärtat hos den som tror på Honom dess vägledning.`,
        `- Gud har kunskap om allt`
      ],
      [
        `Ní bhuaileann aon tubaiste ach le cead Allah.`,
        `Agus an té a chreideann in Allah,`,
        `treoróidh Sé a chroí. Agus tá Allah eolach ar gach rud.`
      ],
      [
        `Er is niemand die een ramp overkomt,`,
        `of deze gebeurt met het verlof van Allah. En wie in Allah gelooft:`,
        `Hij zal diens hart leiden. En Allah is Alwetend over alle zaken`
      ],
      [
        `کوئی مصیبت نازل نہیں ہوتی مگر خدا کے حکم سے۔`,
        `اور جو شخص خدا پر ایمان لاتا ہے وہ اس کے دل`,
        `کو ہدایت دیتا ہے۔ اور خدا ہر چیز سے باخبر ہے`
      ],
      [
        `Tidak ada suatu musibah yang menimpa (seseorang), kecuali dengan izin Allah;`,
        `dan barangsiapa beriman kepada Allah,`,
        `niscaya Allah akan memberi petunjuk kepada hatinya. Dan Allah Maha Mengetahui segala sesuatu`
      ],
      [
        `Başa gelen hiçbir musibet Allah'ın izni olmaksızın olamaz;`,
        `Allah'a kim inanırsa onun gönlünü doğruya yöneltir.`,
        `Allah herşeyi bilendir`
      ],
      [
        `هيچ مصيبتى جز به اذن خدا نرسد،`,
        `و كسى كه به خدا بگرود، دلش را به راه آورد،`,
        `و خدا[ست كه‌] به هر چيزى داناست`
      ],
      [
        `আল্লাহর নির্দেশ ব্যতিরেকে কোন বিপদ আসে না এবং যে`,
        `আল্লাহর প্রতি বিশ্বাস করে, তিনি তার অন্তরকে সৎপথ`,
        `প্রদর্শন করেন। আল্লাহ সর্ববিষয়ে সম্যক পরিজ্ঞাত।`
      ],
      [
        `Nenhuma desgraça ocorre sem que seja com a permissão de Allah.`,
        `E quem crê em Allah, Ele lhe guiará o coração.`,
        `E Allah, de todas as cousas, é Onisciente`
      ],
      [
        `凡灾难的发生，无一不是依真主的判决的。`,
        `谁信真主，`,
        `他将引导谁的心，真主是全知万物的。`
      ],
      [
        `どんな災厄も，アッラーの御許しなく起きることはない。`,
        `誰でもアッラーを信仰する者は，その心を導かれよう。`,
        `本当にアッラーは，凡てのことに通暁なされる。`
      ],
      [
        `그 어떤 시련도 하나님의 허락 없이는 일어나지 않노라.`,
        `하나님을 믿는 자가 있다면 그분께서는 그의 마음을 인도하실 것이라.`,
        `하나님께서는 그 모든 것을 알고 계신 분이라`
      ],
      [
        `Nessuna sventura colpisce [l'uomo] senza il permesso di Allah.`,
        `Allah guida il cuore di chi crede in Lui.`,
        `Allah è l'Onnisciente`
      ],
      [
        `Nikogo nie dosięgnie żadne nieszczęście,`,
        `jak tylko za zezwoleniem Boga. Bóg pokieruje sercem każdego,`,
        `kto w Niego wierzy. Bóg o każdej rzeczy jest wszechwiedzący`
      ],
      [
        `Лихо не вражає без дозволу Аллага.`,
        `І для серця того, хто увірував у Аллага,`,
        `Він вкаже прямий шлях. Аллаг — про кожну річ Знаючий`
      ]
    ],
    number: `سورة التغابن / At-Taghabun، الآية 11`
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
      `لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ ۖ وَمَن قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنفِقْ مِمَّا آتَاهُ اللَّهُ`,
      `لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا مَا آتَاهَا`,
      `سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا`
    ],
    translations: [
      [
        `Let a man of wealth spend from his wealth, and he whose provision is restricted - let him spend from what Allah has given him.`,
        `Allah does not charge a soul except [according to] what He has given it.`,
        `Allah will bring about, after hardship, ease.`
      ],
      [
        `Que celui qui est aisé dépense de sa fortune, et que celui dont les biens sont restreints dépense de ce qu'Allah lui a donné.`,
        `Allah n'impose à personne que selon ce qu'Il lui a donné.`,
        `Allah fera succéder l'aisance à la difficulté.`
      ],
      [
        `Que el acomodado gaste de su holgura, y quien tenga su sustento restringido gaste de lo que Alá le haya dado.`,
        `Alá no impone a nadie más que según lo que le ha dado.`,
        `Alá hará que tras la dificultad venga la facilidad.`
      ],
      [
        `Пусть расходует состоятельный из своего достатка, а тот, чей удел ограничен, пусть расходует из того, что дал ему Аллах.`,
        `Аллах не возлагает на душу ничего, кроме того, что Он ей дал.`,
        `Аллах после трудности сделает облегчение.`
      ],
      [
        `Der Wohlhabende soll von seinem Wohlstand ausgeben; und wem sein Lebensunterhalt knapp bemessen ist, der soll von dem ausgeben, was Allah ihm gegeben hat.`,
        `Allah fordert von keiner Seele etwas anderes, als was Er ihr gegeben hat.`,
        `Allah wird nach Bedrängnis Erleichterung eintreten lassen.`
      ],
      [
        `Den förmögne skall ge av sitt överflöd, och den vars försörjning är knapp skall ge av det Gud har gett honom.`,
        `Gud ålägger ingen mer än vad Han har gett henne.`,
        `Gud skall låta lättnad följa på svårighet.`
      ],
      [
        `Caitheadh fear saibhir as a shaibhreas, agus caitheadh an té a bhfuil a chothú teoranta as an méid a thug Allah dó.`,
        `Ní ualaíonn Allah anam ach de réir an méid a thug sé di.`,
        `Cuirfidh Allah áis i ndiaidh deacrachta.`
      ],
      [
        `Laat de welgestelde uitgeven van zijn welstand, en laat hij wiens levensonderhoud beperkt is uitgeven van wat Allah hem heeft gegeven.`,
        `Allah legt een ziel niet meer op dan wat Hij haar heeft gegeven.`,
        `Allah zal na moeilijkheid verlichting brengen.`
      ],
      [
        `صاحبِ وسعت کو چاہیے کہ اپنی وسعت کے مطابق خرچ کرے، اور جس کا رزق تنگ کر دیا گیا ہو وہ اس میں سے خرچ کرے جو اللہ نے اسے دیا ہے۔`,
        `اللہ کسی جان کو تکلیف نہیں دیتا مگر اتنی ہی جتنی اس نے اسے دی ہے۔`,
        `اللہ تنگی کے بعد آسانی پیدا کر دے گا۔`
      ],
      [
        `Hendaklah orang yang mampu memberi nafkah menurut kemampuannya. Dan orang yang disempitkan rezekinya hendaklah memberi nafkah dari harta yang diberikan Allah kepadanya.`,
        `Allah tidak memikulkan beban kepada seseorang melainkan (sekadar) apa yang Allah berikan kepadanya.`,
        `Allah kelak akan memberikan kelapangan sesudah kesempitan.`
      ],
      [
        `Bolluk içinde olan, bolluğundan harcasın. Rızkı daraltılmış olan da Allah'ın kendisine verdiğinden harcasın.`,
        `Allah, hiç kimseye verdiğinden fazlasını yüklemez.`,
        `Allah, zorluğun ardından bir kolaylık verecektir.`
      ],
      [
        `باید توانگر از دارایی خود هزینه کند، و آن کس که روزی‌اش تنگ شده، از آنچه خدا به او داده هزینه کند.`,
        `خداوند هیچ کس را جز به اندازه آنچه به او داده تکلیف نمی‌کند.`,
        `خداوند پس از سختی، آسانی قرار خواهد داد.`
      ],
      [
        `বিত্তশালী ব্যক্তি তার বিত্ত অনুযায়ী ব্যয় করবে এবং যে সীমিত পরিমাণে রিযিকপ্রাপ্ত, সে আল্লাহ যা দিয়েছেন, তা থেকে ব্যয় করবে।`,
        `আল্লাহ যাকে যা দিয়েছেন, তদপেক্ষা বেশী তাকে কষ্ট দেন না।`,
        `আল্লাহ কষ্টের পর সুখ দেবেন।`
      ],
      [
        `Que o abastado gaste da sua abastança, e quem tem a sua provisão restringida gaste do que Allah lhe concedeu.`,
        `Allah não impõe a ninguém senão conforme o que lhe concedeu.`,
        `Allah fará suceder a facilidade à dificuldade.`
      ],
      [
        `富裕的人，应当用他的财富而施舍；被紧缩给养的人，应当用真主所赐他的而施舍。`,
        `真主只依照他所赐予各人的能力而责成各人。`,
        `真主将在困难之后赐以容易。`
      ],
      [
        `富裕な者は，その富の中から費やしなさい。また資力の限られている者は，アッラーから授かったものの中から費やしなさい。`,
        `アッラーは，その授けられた以上の事を，誰にも課されない。`,
        `アッラーは困難の後に，容易を授けられる。`
      ],
      [
        `넉넉한 자는 그의 넉넉함 가운데서 쓸 것이며 재산이 제한된 자는 하나님이 그에게 주신 것에서 쓸 것이라.`,
        `하나님은 그분이 주신 것 이상으로는 어느 누구에게도 짐을 지우지 않으시나니`,
        `하나님은 곤란 뒤에 편안함을 주시리라.`
      ],
      [
        `Chi è agiato spenda secondo la sua agiatezza, e chi ha un sostentamento ristretto spenda di ciò che Allah gli ha dato.`,
        `Allah non impone a nessuno più di quanto gli abbia dato.`,
        `Allah farà seguire la facilità alla difficoltà.`
      ],
      [
        `Niech wydaje zamożny ze swego dostatku, a ten, komu ograniczono zaopatrzenie, niech wydaje z tego, co dał mu Allah.`,
        `Allah nie wymaga od duszy niczego ponad to, co jej dał.`,
        `Allah po trudności da ulgę.`
      ],
      [
        `Нехай витрачає заможний зі свого достатку, а той, чий засіб обмежений, нехай витрачає з того, що дав йому Аллах.`,
        `Аллах не покладає на душу нічого, крім того, що Він їй дав.`,
        `Аллах після скрути дарує полегшення.`
      ]
    ],
    number: `سورة الطلاق / At-Talaq، الآية 7`
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
      `أَلَا يَعْلَمُ مَنْ خَلَقَ`,
      `وَهُوَ اللَّطِيفُ الْخَبِيرُ`,
      ``
    ],
    translations: [
      [
        `Does He who created not know,`,
        `while He is the Subtle, the Acquainted?`,
        ``
      ],
      [
        `Celui qui a créé ne saurait-Il pas,`,
        `alors qu'Il est le Subtil, le Parfaitement Connaisseur?`,
        ``
      ],
      [
        `¿Acaso no va a saber Quien ha creado,`,
        `siendo Él el Sutil, el Bien Informado?`,
        ``
      ],
      [
        `Разве не знает Тот, Кто сотворил,`,
        `когда Он — Проницательный, Ведающий?`,
        ``
      ],
      [
        `Sollte Der nicht wissen, Der erschaffen hat,`,
        `wo Er doch der Feine, der Kundige ist?`,
        ``
      ],
      [
        `Skulle inte Han som har skapat veta,`,
        `Han som är den Skarpsynte, den Allvetande?`,
        ``
      ],
      [
        `Nach bhfuil a fhios ag an té a chruthaigh,`,
        `agus é ina Thuisceanach, ina Eolaí?`,
        ``
      ],
      [
        `Zou Hij die geschapen heeft het niet weten,`,
        `terwijl Hij de Scherpzinnige, de Alwetende is?`,
        ``
      ],
      [
        `کیا وہ نہیں جانے گا جس نے پیدا کیا؟`,
        `حالانکہ وہ نہایت باریک بین اور باخبر ہے۔`,
        ``
      ],
      [
        `Apakah Allah yang menciptakan itu tidak mengetahui (yang kamu lahirkan dan rahasiakan);`,
        `dan Dia Maha Halus lagi Maha Mengetahui?`,
        ``
      ],
      [
        `Yaratan bilmez mi?`,
        `Oysa O, en ince işleri bilendir, her şeyden haberdardır.`,
        ``
      ],
      [
        `آیا آن کس که آفریده است نمی‌داند،`,
        `در حالی که او لطیف و آگاه است؟`,
        ``
      ],
      [
        `যিনি সৃষ্টি করেছেন, তিনি কি জানেন না?`,
        `তিনি সূক্ষ্মদর্শী, সম্যক জ্ঞাত।`,
        ``
      ],
      [
        `Acaso não saberia Aquele que criou,`,
        `sendo Ele o Sutil, o Conhecedor?`,
        ``
      ],
      [
        `创造者难道不知道吗？`,
        `他是至微的，是彻知的。`,
        ``
      ],
      [
        `創造された方が，御存知ないことがあろうか。`,
        `かれは精妙にして，全知であられる。`,
        ``
      ],
      [
        `창조하신 분이 알지 못하시겠느냐?`,
        `그분은 섬세하시고 모든 것을 아시는 분이시니라.`,
        ``
      ],
      [
        `Non dovrebbe sapere Colui che ha creato,`,
        `Egli che è il Sottile, il Ben Informato?`,
        ``
      ],
      [
        `Czyż nie wie Ten, który stworzył,`,
        `On, który jest Subtelny i Świadomy?`,
        ``
      ],
      [
        `Хіба не знає Той, Хто створив,`,
        `коли Він — Проникливий, Обізнаний?`,
        ``
      ]
    ],
    number: `سورة الملك / Al-Mulk، الآية 14`
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
      `مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ وَلَلْآخِرَةُ خَيْرٌ لَكَ مِنَ الْأُولَىٰ`,
      `وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ`,
      `وَوَجَدَكَ ضَالًّا فَهَدَىٰ وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ`
    ],
    translations: [
      [
        `Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you] And the Hereafter is better for you than the first [life]`,
        `And your Lord is going to give you, and you will be satisfied. Did He not find you an orphan and give [you] refuge.`,
        `And He found you lost and guided [you] And He found you poor and made [you] self-sufficient`
      ],
      [
        `Ton Seigneur ne t'a ni abandonné, ni détesté. La vie dernière t'est, certes, meilleure que la vie présente.`,
        `Ton Seigneur t'accordera certes [Ses faveurs], et alors tu seras satisfait. Ne t'a-t-Il pas trouvé orphelin? Alors Il t'a accueilli.`,
        `Ne t'a-t-Il pas trouvé égaré? Alors Il t'a guidé. Ne t'a-t-Il pas trouvé pauvre? Alors Il t'a enrichi`
      ],
      [
        `Tu Señor no te ha abonadonado ni aborrecido. Sí, la otra vida será mejor para ti que ésta.`,
        `Tu Señor te dará y quedarás satisfecho. ¿No te encontró huérfano y te recogió.`,
        `¿No te encontró extraviado y te dirigió. ¿No te encontró pobre y te enriqueció`
      ],
      [
        `Не покинул тебя твой Господь и не возненавидел. Воистину, будущее для тебя лучше, чем настоящее.`,
        `Господь твой непременно одарит тебя, и ты будешь удовлетворен. Разве Он не нашел тебя сиротой и не дал тебе приют.`,
        `Он нашел тебя заблудшим и повел прямым путем. Он нашел тебя бедным и обогатил`
      ],
      [
        `Dein Herr hat sich weder von dir verabschiedet noch haßt Er (dich) Und das Jenseits ist wahrlich besser für dich als das Diesseits.`,
        `Und dein Herr wird dir wahrlich geben, und dann wirst du zufrieden sein. Hat Er dich nicht als Waise gefunden und (dir) dann Zuflucht verschafft.`,
        `und dich irregehend gefunden und dann rechtgeleitet. und dich arm gefunden und dann reich gemacht`
      ],
      [
        `Din Herre har inte övergett dig och du har inte väckt Hans missnöje. Det liv som ligger framför dig skall förvisso bli lättare än det som hittills varit.`,
        `Och din Herre skall skänka dig [Sitt goda i överflöd] och du skall bli helt nöjd. Fann Han dig inte faderlös och gav dig ett hem.`,
        `Och såg Han dig inte vilsen och vägledde dig. Och såg Han dig inte lida nöd och skänkte dig allt vad du behövde`
      ],
      [
        `Níor fhág do Thiarna thú, [a Mhuhamad], ná níor chuir Sé fuath ort. Agus tá an Saol Eile níos fearr duit ná an chéad saol.`,
        `Agus tabharfaidh do Thiarna duit, agus beidh tú sásta. Nár aimsigh Sé thú i do dhílleachta agus nár thug Sé dídean duit?`,
        `Agus fuair Sé thú caillte agus threoraigh Sé thú. Agus fuair Sé thú bocht agus rinne Sé thú neamhspleách.`
      ],
      [
        `Jouw Heer heeft jou (O Moehammad) niet verlaten en Hij is niet kwaad (op jou)`,
        `En het latere (het Hiernamaals) is zeker beter voor jou dan het eerste (het wereldse leven) En jouw Heer zal jou zeker gunsten schenken, zodat jij tevreden zult zijn.`,
        `Heeft Hij jou niet als wees gevonden en jou in bescherming genomen. En Hij heeft jou dwalend gevonden en jou geleid. En Hij heeft jou behoeftig gevonden en rijk gemaakt`
      ],
      [
        `کہ (اے محمدﷺ) تمہارے پروردگار نے نہ تو تم کو چھوڑا اور نہ (تم سے) ناراض ہوا۔`,
        `اور آخرت تمہارے لیے پہلی (حالت یعنی دنیا) سے کہیں بہتر ہے۔ اور تمہیں پروردگار عنقریب وہ کچھ عطا فرمائے گا کہ تم خوش ہو جاؤ گے۔`,
        `بھلا اس نے تمہیں یتیم پا کر جگہ نہیں دی؟ (بےشک دی) اور رستے سے ناواقف دیکھا تو رستہ دکھایا۔ اور تنگ دست پایا تو غنی کر دیا`
      ],
      [
        `Tuhanmu tidak meninggalkan engkau (Muhammad) dan tidak (pula) membencimu. dan sungguh, yang kemudian itu lebih baik bagimu daripada yang permulaan.`,
        `Dan sungguh, kelak Tuhanmu pasti memberikan karunia-Nya kepadamu, sehingga engkau menjadi puas. Bukankah Dia mendapatimu sebagai seorang yatim, lalu Dia melindungi(mu)`,
        `(Dan Dia mendapatimu sebagai seorang yang bingung, lalu Dia memberikan petunjuk. Dan Dia mendapatimu sebagai seorang yang kekurangan, lalu Dia memberikan kecukupan`
      ],
      [
        `Rabbin seni ne bıraktı ve ne de sana darıldı. Doğrusu ahiret senin için dünyadan daha hayırlıdır.`,
        `Rabbin şüphesiz sana verecek ve sen de hoşnut olacaksın. Seni öksüz bulup da barındırmadı mı.`,
        `Seni şaşırmış bulup, doğru yola eriştirmedi mi. Seni fakir bulup zenginleştirmedi mi`
      ],
      [
        `[كه‌] پروردگارت تو را وانگذاشته، و دشمن نداشته است. و قطعاً آخرت براى تو از دنيا نيكوتر خواهد بود.`,
        `و بزودى پروردگارت تو را عطا خواهد داد، تا خرسند گردى. مگر نه تو را يتيم يافت، پس پناه داد؟.`,
        `و تو را سرگشته يافت، پس هدايت كرد؟. و تو را تنگدست يافت و بى‌نياز گردانيد؟`
      ],
      [
        `আপনার পালনকর্তা আপনাকে ত্যাগ করেনি এবং আপনার প্রতি বিরূপও হননি। আপনার জন্যে পরকাল ইহকাল অপেক্ষা শ্রেয়।`,
        `আপনার পালনকর্তা সত্বরই আপনাকে দান করবেন, অতঃপর আপনি সন্তুষ্ট হবেন। তিনি কি আপনাকে এতীমরূপে পাননি? অতঃপর তিনি আশ্রয় দিয়েছেন।`,
        `তিনি আপনাকে পেয়েছেন পথহারা, অতঃপর পথপ্রদর্শন করেছেন। তিনি আপনাকে পেয়েছেন নিঃস্ব, অতঃপর অভাবমুক্ত করেছেন।`
      ],
      [
        `Teu Senhor não te abandonou nem te detestou. E, em verdade, a Derradeira Vida te é melhor que a primeira.`,
        `E, em verdade, teu Senhor dar-te-á graças, e disso te agradarás. Não te encontrou órfão e te abrigou.`,
        `E não te encontrou descaminhado e te guiou. E não te encontrou infortunado e te enriqueceu`
      ],
      [
        `你的主没有弃绝你，也没有怨恨你； 後世於你，确比今世更好；`,
        `你的主将来必赏赐你，以至你喜悦。 难道他没有发现你伶仃孤苦，而使你有所归宿？`,
        `他曾发现你徘徊歧途，而把你引入正路； 发现你家境寒苦，而使你衣食丰足。`
      ],
      [
        `主は，あなたを見捨てられず，憎まれた訳でもない。 本当に来世（将来）は，あなたにとって現世（現在）より，もっと良いのである。`,
        `やがて主はあなたの満足するものを御授けになる。 かれは孤児のあなたを見付けられ，庇護なされたではないか。`,
        `かれはさ迷っていたあなたを見付けて，導きを与え。 また貧しいあなたを見付けて，裕福になされたではないか。`
      ],
      [
        `주님께서 그대를 버리지 아니했으며 미워하지도 않으시니라. 실로 그대에게는 내세가 현세보다 나으리니.`,
        `주님께서 그대에게 은혜를 베풀것이매 그대는 이로하여 기뻐하리라. 그분은 고아인 그대를 발견하여 그대를 보호하지 아니 했더뇨.`,
        `그분은 방황하는 그대를 발견하여 그대를 인도하지 아니 했더 뇨. 그분은 가난했던 그대를 부유하게 하여 주지 아니 했더뇨`
      ],
      [
        `il tuo Signore non ti ha abbandonato e non ti disprezza. e per te l'altra vita sarà migliore della precedente.`,
        `Il tuo Signore ti darà [in abbondanza] e ne sarai soddisfatto. Non ti ha trovato orfano e ti ha dato rifugio.`,
        `Non ti ha trovato smarrito e ti ha dato la guida. Non ti ha trovato povero e ti ha arricchito`
      ],
      [
        `Nie opuścił cię twój Pan ani cię nie znienawidził. I z pewnością ostateczne będzie lepsze dla ciebie aniżeli pierwsze.`,
        `I z pewnością niebawem obdarzy cię twój Pan i będziesz zadowolony. Czyż nie znalazł cię sierotą i czy nie dał ci schronienia.`,
        `Czy nie znalazł cię błądzącym i czy nie poprowadził cię drogą prostą. I czy nie znalazł cię biednym, i nie wzbogacił cię`
      ],
      [
        `що не залишив тебе Господь твій і не зненавидів тебе. І, воістину, майбутнє для тебе краще за минуле.`,
        `І, воістину, скоро наділить тебе Господь твій, тож будеш вдоволений ти. Хіба не знайшов Він тебе сиротою, і хіба не прихистив.`,
        `І хіба не знайшов Він тебе заблуканим, і хіба не повів прямим шляхом. І хіба не знайшов тебе бідним, і хіба не збагатив`
      ]
    ],
    number: `سورة الضحى / Ad-Duha، الآيات 3-8`
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
      `لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ`,
      `ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ`,
      `إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ`
    ],
    translations: [
      [
        `We have certainly created man in the best of stature.`,
        `Then We return him to the lowest of the low.`,
        `Except for those who believe and do righteous deeds, for they will have a reward uninterrupted`
      ],
      [
        `Nous avons certes créé l'homme dans la forme la plus parfaite.`,
        `Ensuite, Nous l'avons ramené au niveau le plus bas.`,
        `sauf ceux qui croient et accomplissent les bonnes œuvres: ceux-là auront une récompense jamais interrompue`
      ],
      [
        `Hemos creado al hombre dándole la mejor complexión.`,
        `Luego, hemos hecho de él el más abyecto.`,
        `Excepto quienes crean y obren bien, que recibirán una recompensa ininterrumpida`
      ],
      [
        `Мы сотворили человека в прекраснейшем облике.`,
        `Потом Мы вернем его в нижайшее из низких (продлим ему жизнь настолько, что он превратится в дряхлого старика, или бросим его на самое дно Геенны)`,
        `за исключением тех, которые уверовали и совершали праведные деяния. Им уготована награда неиссякаемая`
      ],
      [
        `Wir haben den Menschen ja in schönster Gestaltung erschaffen.`,
        `hierauf haben Wir ihn zu den Niedrigsten der Niedrigen werden lassen.`,
        `außer denjenigen, die glauben und rechtschaffene Werke tun; für sie wird es einen Lohn geben, der nicht aufhört`
      ],
      [
        `Vi har sannerligen skapat människan i den bästa skepnad.`,
        `men därefter låtit henne sjunka lägre än de lägsta.`,
        `utom dem som tror och lever ett rättskaffens liv; ja, deras lön skall vara utan ände`
      ],
      [
        `Go deimhin, chruthaíomar an duine sa chruth is fearr.`,
        `Ansin chuirimid ar ais é go dtí an ceann is ísle de na hísle.`,
        `Ach amháin iad siúd a chreideann agus a dhéanann gníomhartha maithe, óir beidh luach saothair gan bhriseadh acu.`
      ],
      [
        `Voorzeker, Wij hebben de mens in de beste vorm geschapen.`,
        `Daarna doen Wij hem terugkeren tot het laagste van het laagste.`,
        `Behalve degenen die geloven en goede daden verrichten. Voor hen is er een ononderbroken beloning`
      ],
      [
        `کہ ہم نے انسان کو بہت اچھی صورت میں پیدا کیا ہے۔`,
        `پھر (رفتہ رفتہ) اس (کی حالت) کو (بدل کر) پست سے پست کر دیا۔`,
        `مگر جو لوگ ایمان لائے اور نیک عمل کرتے رہے انکے لیے بےانتہا اجر ہے`
      ],
      [
        `Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.`,
        `kemudian Kami kembalikan dia ke tempat yang serendah-rendahnya.`,
        `kecuali orang-orang yang beriman dan mengerjakan kebajikan; maka mereka akan mendapat pahala yang tidak ada putus-putusnya`
      ],
      [
        `Biz insanı en güzel şekilde yarattık.`,
        `Sonra onu aşağıların en aşağısı kıldık.`,
        `Yalnız, inanıp yararlı iş işleyenler bunun dışındadır. Onlara kesintisiz ecir vardır`
      ],
      [
        `[كه‌] براستى انسان را در نيكوترين اعتدال آفريديم.`,
        `سپس او را به پست‌ترين [مراتب‌] پستى بازگردانيديم؛`,
        `مگر كسانى را كه گرويده و كارهاى شايسته كرده‌اند، كه پاداشى بى‌منّت خواهند داشت`
      ],
      [
        `আমি সৃষ্টি করেছি মানুষকে সুন্দরতর অবয়বে।`,
        `অতঃপর তাকে ফিরিয়ে দিয়েছি নীচ থেকে নীচে।`,
        `কিন্তু যারা বিশ্বাস স্থাপন করেছে ও সৎকর্ম করেছে, তাদের জন্যে রয়েছে অশেষ পুরস্কার।`
      ],
      [
        `Com efeito, criamos o ser humano na mais bela forma.`,
        `Em seguida, levamo-lo ao mais baixo dos baixos degraus.`,
        `Exceto aos que crêem e fazem as boas obras: eles terão prêmio incessante`
      ],
      [
        `我确已把人造成具有最美的形态。`,
        `然后我使他变成最卑劣的。`,
        `但信道而且行善者, 将受不断的报酬。`
      ],
      [
        `本当にわれは，人間を最も美しい姿に創った。`,
        `それからわれは，かれを最も低く下げた。`,
        `信仰して善行に勤しむ者は別である。かれらに対しては果てしない報奨があろう。`
      ],
      [
        `하나님은 인간을 제일 아름다 운 형상으로 빛으신 후.`,
        `그의 위치를 가장 낮게 하였 노라.`,
        `그러나 믿음으로 선을 행하는 의로운 자들은 제외되어 그들에게 는 끊임없는 보상이 있노라`
      ],
      [
        `Invero creammo l'uomo nella forma migliore.`,
        `quindi lo riducemmo all'infimo dell'abiezione.`,
        `eccezion fatta per coloro che credono e fanno il bene: avranno ricompensa inesauribile`
      ],
      [
        `Stworzyliśmy człowieka w najpiękniejszej postaci.`,
        `Potem uczyniliśmy go znowu najniższym spośród tych, którzy są na dole.`,
        `Z wyjątkiem tych, którzy uwierzyli i czynili dobre dzieła - dla nich będzie nagroda nieustanna`
      ],
      [
        `Ми створили людину в найкращій подобі.`,
        `Потім Ми скинемо її в найнижче з найнижчого.`,
        `окрім тих, які увірували й творили добрі справи; чекає на них невичерпна винагорода`
      ]
    ],
    number: `سورة التين / At-Tin، الآيات 4-6`
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
      `قُلْ يَا أَيُّهَا الْكَافِرُونَ لَا أَعْبُدُ مَا تَعْبُدُونَ`,
      `وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ`,
      `وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ لَكُمْ دِينُكُمْ وَلِيَ دِينِ`
    ],
    translations: [
      [
        `Say, "O disbelievers. I do not worship what you worship.`,
        `Nor are you worshippers of what I worship. Nor will I be a worshipper of what you worship.`,
        `Nor will you be worshippers of what I worship. For you is your religion, and for me is my religion`
      ],
      [
        `Dis: «O vous les infidèles. Je n'adore pas ce que vous adorez.`,
        `Et vous n'êtes pas adorateurs de ce que j'adore. Je ne suis pas adorateur de ce que vous adorez.`,
        `Et vous n'êtes pas adorateurs de ce que j'adore. A vous votre religion, et à moi ma religion»`
      ],
      [
        `Di: «¡Infieles. Yo no sirvo lo que vosotros servís.`,
        `Y vosotros no servís lo que yo sirvo. Yo no sirvo lo que vosotros habéis servido.`,
        `Y vosotros no servís lo que yo sirvo. Vosotros tenéis vuestra religión y yo la mía»`
      ],
      [
        `Скажи: «О неверующие. Я не поклоняюсь тому, чему поклоняетесь вы. а вы не поклоняетесь Тому, Кому поклоняюсь я.`,
        `Я не поклоняюсь так, как поклоняетесь вы (или тому, чему поклоняетесь вы)`,
        `а вы не поклоняетесь так, как поклоняюсь я (или Тому, Кому поклоняюсь я) У вас есть ваша религия, а у меня - моя!»`
      ],
      [
        `Sag: O ihr Ungläubigen. ich diene nicht dem, dem ihr dient. und ihr dient nicht Dem, Dem ich diene.`,
        `Und ich werde (auch) nicht dem dienen, dem ihr gedient habt.`,
        `Und ihr werdet nicht Dem dienen, Dem ich diene. Euch eure Religion und mir meine Religion`
      ],
      [
        `SÄG: "Ni som förnekar sanningen. Jag dyrkar inte vad ni dyrkar.`,
        `Inte heller dyrkar ni vad jag dyrkar. Och jag kommer aldrig att dyrka vad ni dyrkar.`,
        `och ni kommer heller aldrig att dyrka vad jag dyrkar. Ni har er tro - och jag har min tro`
      ],
      [
        `Abair: A dhaoine nach gcreideann, ní dhéanaim adhradh don rud a ndéanann sibh adhradh dó.`,
        `Agus ní dhéanann sibhse adhradh don té a ndéanaim adhradh dó. Agus ní dhéanfaidh mise adhradh don rud a ndearna sibh adhradh dó.`,
        `Agus ní dhéanfaidh sibhse adhradh don té a ndéanaim adhradh dó. Daoibhse bhur reiligiún, agus domsa mo reiligiún.`
      ],
      [
        `Zeg (O Mohammed): "O ongelovigen. Ik aanbid niet wat jullie aanbidden. En jullie zijn geen aanbidders van wat ik aanbid.`,
        `En ik zal nooit een aanbidder worden van wat jullie aanbidden. En jullie zullen nooit aanbidders worden van wat ik aanbid.`,
        `Daarom, voor jullie jullie godsdienst en voor mij mijn godsdienst`
      ],
      [
        `(اے پیغمبر ان منکران اسلام سے) کہہ دو کہ اے کافرو۔ جن (بتوں) کو تم پوچتے ہو ان کو میں نہیں پوجتا۔`,
        `اور جس (خدا) کی میں عبادت کرتا ہوں اس کی تم عبادت نہیں کرتے۔ اور (میں پھر کہتا ہوں کہ) جن کی تم پرستش کرتے ہوں ان کی میں پرستش کرنے والا نہیں ہوں۔`,
        `اور نہ تم اس کی بندگی کرنے والے (معلوم ہوتے) ہو جس کی میں بندگی کرتا ہوں۔ تم اپنے دین پر میں اپنے دین پر`
      ],
      [
        `Katakanlah (Muhammad), "Wahai orang-orang kafir. aku tidak akan menyembah apa yang kamu sembah.`,
        `dan kamu bukan penyembah apa yang aku sembah. dan aku tidak pernah menjadi penyembah apa yang kamu sembah.`,
        `dan kamu tidak pernah (pula) menjadi penyembah apa yang aku sembah. Untukmu agamamu, dan untukku agamaku`
      ],
      [
        `De ki: "Ey inkarcılar. Ben sizin taptıklarınıza tapmam.`,
        `Benim taptığıma da sizler tapmazsınız. Ben de sizin taptığınıza tapacak değilim.`,
        `Benim taptığıma da sizler tapmıyorsunuz. Sizin dininiz size, benim dinim banadır`
      ],
      [
        `بگو: «اى كافران، آنچه مى‌پرستيد، نمى‌پرستم.`,
        `و آنچه مى‌پرستم، شما نمى‌پرستيد. و نه آنچه پرستيديد من مى‌پرستم.`,
        `و نه آنچه مى‌پرستم شما مى‌پرستيد. دين شما براى خودتان، و دين من براى خودم.»`
      ],
      [
        `বলুন, হে কাফেরকূল। আমি এবাদত করিনা, তোমরা যার এবাদত কর। এবং তোমরাও এবাদতকারী নও, যার এবাদত আমি করি।`,
        `এবং আমি এবাদতকারী নই, যার এবাদত তোমরা কর। তোমরা এবাদতকারী নও, যার এবাদত আমি করি।`,
        `তোমাদের কর্ম ও কর্মফল তোমাদের জন্যে এবং আমার কর্ম ও কর্মফল আমার জন্যে।`
      ],
      [
        `Dize: "Ó renegadores da Fé. Não adoro o que adorais.`,
        `Nem adorareis o que adoro. Nem adorarei o que adorastes.`,
        `Nem adorareis o que adoro. A vós vossa religião e, a mim, minha religião`
      ],
      [
        `你说：不信道的人们啊！ 我不崇拜你们所崇拜的。`,
        `你们也不崇拜我所崇拜的。 我不会崇拜你们所崇拜的。`,
        `你们也不会崇拜我所崇拜的。 你们有你们的报应, 我也有我的报应。`
      ],
      [
        `言ってやるがいい。「おお不信者たちよ， わたしは，あなたがたが崇めるものを崇めない。`,
        `あなたがたは，わたしが崇めるものを，崇める者たちではない。 わたしは，あなたがたが崇めてきたものの，崇拝者ではない。`,
        `あなたがたは，わたしが崇めてきたものの，崇拝者ではない。 あなたがたには，あなたがたの宗教があり，わたしには，わたしの宗教があるのである。」`
      ],
      [
        `불신자들에게 일러 가로되. 너희가 숭배하는 것을 내가 숭배하지 아니하며.`,
        `내가 경배하는 분을 너희가 경배하지 아니하고. 너희가 숭배했던 것들을 내가숭배하지 아니할 것이며.`,
        `내가 경배한 그분을 너희가 경배하지 않을 것이니. 너희에게는 너희의 종교가 있고 나에게는 나의 종교가 있을 뿐이라`
      ],
      [
        `Di’: “O miscredenti. Io non adoro quel che voi adorate.`,
        `e voi non siete adoratori di quel che io adoro. Io non sono adoratore di quel che voi avete adorato.`,
        `e voi non siete adoratori di quel che io adoro. a voi la vostra religione, a me la mia”`
      ],
      [
        `Powiedz: "O wy - niewierni. Ja nie czczę tego, co wy czcicie.`,
        `Ani wy nie jesteście czcicielami tego, Co ja czczę. Ja nie jestem czcicielem tego, co wy czcicie.`,
        `Ani wy nie jesteście czcicielami tego, co ja czczę. Wy macie waszą religię, a ja mam moją religię`
      ],
      [
        `Скажи: «О ви, невіруючі. Я не поклоняюся тому, чому поклоняєтеся ви.`,
        `а ви не поклоняєтесь тому, чому я поклоняюся. Я не поклоняюся так, як поклоняєтеся ви.`,
        `а ви не будете поклонятися так, як буду поклонятись я. вам — ваша віра, а мені — моя!»`
      ]
    ],
    number: `سورة الكافرون / Al-Kafirun، الآيات 1-6`
  },

  {
    arabic: [
      `إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ`,
      `وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا`,
      `فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا`
    ],
    translations: [
      [
        `When the victory of Allah has come and the conquest,`,
        `and you see the people entering into the religion of Allah in multitudes,`,
        `then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.`
      ],
      [
        `Lorsque vient le secours d'Allah ainsi que la victoire,`,
        `et que tu vois les gens entrer en foule dans la religion d'Allah,`,
        `alors, par la louange, glorifie ton Seigneur et implore Son pardon. Car c'est Lui le grand Accueillant au repentir.`
      ],
      [
        `Cuando llegue el auxilio de Alá y la victoria,`,
        `y veas a la gente entrar en masa en la religión de Alá,`,
        `glorifica a tu Señor con alabanzas y pídele perdón. Él es Quien acepta el arrepentimiento.`
      ],
      [
        `Когда придёт помощь Аллаха и победа,`,
        `и ты увидишь, как люди толпами вступают в религию Аллаха,`,
        `то восславь с хвалой своего Господа и попроси у Него прощения. Воистину, Он — Принимающий покаяние.`
      ],
      [
        `Wenn Allahs Hilfe und der Sieg kommen,`,
        `und du die Menschen scharenweise in Allahs Religion eintreten siehst,`,
        `dann lobpreise deinen Herrn und bitte Ihn um Vergebung. Gewiss, Er ist Der die Reue Annehmende.`
      ],
      [
        `När Guds hjälp och segern kommer`,
        `och du ser människor i skaror ansluta sig till Guds religion,`,
        `lovprisa då din Herre och be Honom om förlåtelse. Han är den som tar emot ånger.`
      ],
      [
        `Nuair a thagann bua Allah agus an concas,`,
        `agus go bhfeiceann tú daoine ag dul isteach i gcreideamh Allah ina scuaine,`,
        `ansin mol do Thiarna agus iarr logha uaidh. Go deimhin bíonn sé i gcónaí ag glacadh leis an aithrí.`
      ],
      [
        `Wanneer de hulp van Allah en de overwinning komen,`,
        `en gij de mensen bij scharen tot de godsdienst van Allah ziet toetreden,`,
        `verheerlijk dan uw Heer met lof en vraag Hem om vergeving. Voorwaar, Hij is Degene Die berouw aanvaardt.`
      ],
      [
        `جب اللہ کی مدد اور فتح آ جائے`,
        `اور آپ لوگوں کو اللہ کے دین میں فوج در فوج داخل ہوتے دیکھ لیں`,
        `تو اپنے رب کی حمد کے ساتھ تسبیح کیجیے اور اس سے بخشش مانگیے۔ بے شک وہ بہت توبہ قبول کرنے والا ہے۔`
      ],
      [
        `Apabila telah datang pertolongan Allah dan kemenangan,`,
        `dan kamu lihat manusia masuk agama Allah dengan berbondong-bondong,`,
        `maka bertasbihlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya. Sesungguhnya Dia adalah Maha Penerima taubat.`
      ],
      [
        `Allah'ın yardımı ve fetih geldiği zaman,`,
        `insanların bölük bölük Allah'ın dinine girdiklerini gördüğün zaman,`,
        `Rabbini överek tesbih et ve O'ndan bağışlanma dile. Şüphesiz O, tövbeleri çok kabul edendir.`
      ],
      [
        `هنگامی که یاری خدا و پیروزی فرا رسد،`,
        `و مردم را ببینی که گروه گروه وارد دین خدا می‌شوند،`,
        `پس به ستایش پروردگارت تسبیح گوی و از او آمرزش بخواه که او بسیار توبه‌پذیر است.`
      ],
      [
        `যখন আসবে আল্লাহর সাহায্য ও বিজয়`,
        `এবং আপনি মানুষকে দলে দলে আল্লাহর দ্বীনে প্রবেশ করতে দেখবেন,`,
        `তখন আপনি আপনার পালনকর্তার পবিত্রতা বর্ণনা করুন এবং তাঁর কাছে ক্ষমা প্রার্থনা করুন। নিশ্চয়ই তিনি তওবা কবুলকারী।`
      ],
      [
        `Quando chegar o auxílio de Allah e a vitória,`,
        `e vires os homens entrando em multidões na religião de Allah,`,
        `glorifica com louvores o teu Senhor e implora o Seu perdão. Por certo, Ele é Remissor.`
      ],
      [
        `当真主的援助和胜利降临，`,
        `你看见众人成群结队地归信真主的宗教的时候，`,
        `你应当赞颂你的主超绝万物，并向他求饶。他确是至宥的。`
      ],
      [
        `アッラーの援助と勝利が来て，`,
        `あなたが人びとが群れをなして，アッラーの教えに入るのを見る時，`,
        `あなたの主の栄光を讃え，かれに御赦しを請え。本当にかれは，度々お許しになられる御方であられる。`
      ],
      [
        `하나님의 도움과 승리가 이르러`,
        `사람들이 무리를 지어 하나님의 종교로 들어오는 것을 그대가 보았을 때`,
        `그대 주님을 찬미하고 그분께 용서를 구하라. 진실로 그분은 회개를 받아들이시는 분이시니라.`
      ],
      [
        `Quando verrà il soccorso di Allah e la vittoria,`,
        `e vedrai la gente entrare a frotte nella religione di Allah,`,
        `glorifica con lode il tuo Signore e chiedi il Suo perdono. In verità Egli è colui che accoglie il pentimento.`
      ],
      [
        `Kiedy przyjdzie pomoc Allaha i zwycięstwo,`,
        `i ujrzysz ludzi wstępujących tłumnie do religii Allaha,`,
        `wysławiaj z chwałą swego Pana i proś Go o przebaczenie. Zaprawdę, On jest Przyjmującym skruchę.`
      ],
      [
        `Коли прийде допомога Аллаха та перемога,`,
        `і ти побачиш, як люди юрбами входять до релігії Аллаха,`,
        `то оспівуй хвалою свого Господа і проси в Нього прощення. Воістину, Він — Той, Хто приймає покаяння.`
      ]
    ],
    number: `سورة النصر / An-Nasr، الآيات 1-3`
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
        `말하라: 그는 하나님, 유일하신 분이다,`,
        `하나님는 자존하시는 분이다.`,
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
