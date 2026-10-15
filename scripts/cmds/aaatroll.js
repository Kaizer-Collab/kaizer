if (!global.GoatBot.trollSessions) global.GoatBot.trollSessions = new Map();
const trollSessions = global.GoatBot.trollSessions;

const TROLL_LINES = [
  "Hoy [name] tanga😂😂🥊🥊",
  "Labas Ka AsoKo Tawag Ka Ng Amo Mo😂😂🥊🥊",
  "Ginalit Mo NaNaman Ako😂🥊😂🥊",
  "Lapag [name] Gagu😂😂🥊",
  "Takot Ka Ba? [name]😂😂🥊",
  "O Ayan Natahimik Ka Na😂😂🥊",
  "Keyboard Warrior AmpUta😂😂🥊",
  "Sa Bahay Puro Higa Ka😂✌🏿",
  "Baka Asar Ka Na Dyan Asoko😂😂🥊",
  "Wag Ka MagWala [name]🤣🤣🥊",
  "NagSisiMula Palang Tayo🤣🥊",
  "Kala Mo Nakakatakot Ka🥊🤣🥊",
  "Kahit Sino Matatawa Sayo TabaBoy🥊🤣🥊",
  "Sinubukan Mo Pa Talaga Ako [name] Taba🥊🤣",
  "Sana Natulog Ka Na Lang🥊🤣",
  "PukPukin Ko Ulo Mo E🥊🤣🥊",
  "Bobo Ka Ba Talaga [name] O Nagpapanggap Ka Lang🥊🤣🥊",
  "Kasi Patawa Ka🥊🤣🥊",
  "Kahit Mag aral Ka Pa Hindi Na Sapat🥊🤣🥊",
  "Baka Mag isip Ka Muna SaSusunod🥊🤣🥊",
  "Hoy ASokong Taba🤣🥊🤣",
  "Chupa Mo TiTiko🥊🤣🥊",
  "Hahaha Kawawa Ka Naman🤣🥊🤣",
  "Sarap Mong Pwetan🥊🤣🥊",
  "Kaso Wag🤣🥊🤣🥊",
  "Kasi Baka Hindi Ka Naghuhugas Ng Pwet Mo Kapag Tumatae Ka🤣🥊",
  "Tissue Ata GinaGamit Mo E🤣🥊🤣",
  "NaliliNisan Pa Kaya Ata Pwet Mo Nyan🥊🤣",
  "Asar To Si Taba🤣🥊🥊",
  "Bagal Magreply🥊🤣🥊",
  "NagBinayot Naman To🤣🥊",
  "Wag Ka MagWala [name]🤣🥊",
  "Luh Asar Ata Sya🥊🤣🥊",
  "HAHAHAHHAHA",
  "LuWa Mo TiTiko [name]🙂👌🏿",
  "Mukhang Nasarapan Ka Ata Kaya Nag Stuck Sa BungaNga Mo🙂👌🏿",
  "Luwa Mo Nayan Huy🙂👌🏿",
  "Nasarapan Sa TiTi Kong Malaki👌🏿🙂",
  "Iluluwa Moyan O Hindi 👌🏿🙂",
  "[name] Taba👌🏿🙂",
  "TiTiko Stuck Sa BungaNga Mo👌🏿🙂",
  "BaYot🙂👌🏿",
  "Kain Pa More Ng TiTiko🙂👌🏿",
  "Nakakahiya Ka Sa Sarili Mo🙂👌🏿",
  "Ewan Ko Ba Sayo Haha🙂👌🏿",
  "Hey Bayot [name]🙂👌🏿",
  "Asar Ka Na Ata AsuKo🙂👌🏿",
  "Huy [name]🙂👌🏿",
  "Bagal Mo Magreply Taba🙂👌🏿",
  "Halata Ka Nang Asar Kana Taba🙂👌🏿",
  "Anyare Sa Kamay Mo Taba May Cancer Bayan🙂👌🏿",
  "Di Mo Na Kaya Ano🙂👌🏿",
  "Sige Umalis Ka Na👌🏿🙂",
  "Babalik Ka Rin Dyan Haha🙂👌🏿",
  "Kasi Wala Kang Magawa Sa Buhay Mo🙂👌🏿",
  "Sa Totoong Buhay Wala Kang Dating🙂👌🏿",
  "Sa Chat Ka Lang Matapang AsuKo🙂👌🏿",
  "AsoKong Mataba🙂👌🏿",
  "Sige Ka Tabaan Mopa🙂👌🏿",
  "Hindi Pa Kita MinuMura Umiiyak KaNa Sa Kahinaan Mo🙂👌🏿",
  "Di Moko Kaya🙂👌🏿",
  "Syempre AsuKita e🙂👌🏿",
  "Wala Kang Laban Sa Gods Mo🙂👌🏿",
  "Hindi Ka Worth It I Troll Asuko🙂👌🏿",
  "Panalo Ako Tapos Na🙂👌🏿",
  "Randam Na Randam Kong Trible B Ka [name]🤣🥊",
  "Alam Moyung Triple B😀⁉️",
  "Malamang Di Mo Alam Kasi BoBo Ka🤷🏿‍♂️",
  "Ito Meaning Ng Triple B [name]TabaBoi🤣🤣🥊",
  "BoBo🤡",
  "Bayot🤷🏿‍♂️",
  "Bading🤢",
  "Ikaw Pa Mag admit Nyan MatabaKong Aso🙂👌🏿",
  "Nahihiya Ka Na Ata E🙂👌🏿",
  "[name] Asuko🙂👌🏿",
  "Aminin Mo Na🙂👌🏿",
  "Alam Ko Na Yan🙂👌🏿",
  "Baka Umiyak Ka Na Dyan🙂👌🏿",
  "Puta Bagal Ng Taba Nato🤣🥊🤣",
  "Siguro Gumagawa Naman Ito Sa Notes Ng Sasabihin Sakin🤣🥊🤣",
  "Copy Paste Nya Para Kunwari Mabilis Ang Galawan🤣🥊",
  "Halata Na Talaga Kayong Mga BoBong Troller E🤣🥊",
  "Sa ClipBoard Umaasa🤣🥊",
  "Kahit ClipBoard Payan Di Ka TaTagos Sakin AsoKo🤣🥊",
  "Yang Idea Mo Nakaw MoLang Yan Sa Iba Tas Uulitin Mo Sakin🤣🥊",
  "Wag Yabang Asuko Kong KeyBoard Warrior Lang Ang Kaya Mo🤣🥊",
  "Wala Kabang Ibang MaPaPatunayan Sakin Na Talent Mo🤣🥊",
  "Kundi Kabobohan Mo Lang PinaPairal Mo Deto🤣🥊",
  "Tabaan Mopa [name]🤣🥊",
  "Walis KanaNga Sa Bahay Nyo Eh🤣🥊",
  "Kawawa Naman Buhay Mo🤣🤣🥊",
  "Wag Ka Na Sumagot Baka Mas Mahiya Ka Pa🤣🥊",
  "Takot Ka Na Noh?😀✌🏿",
  "Ayan Na Nga Eh😀✌🏿",
  "Talo Ka Na Taba Tanggapin Mo Na😀✌🏿",
  "Baka Nanginginig Ka Na Diyan😀✌🏿",
  "Halata Na TabaChoy😀✌🏿",
  "Kamay Mo Nanlalamig Na Ata😀✌🏿",
  "Baka Hindi Ka Na Makabasa Nito Nang Maayos😀✌🏿",
  "Kasi Nanginginig Ka Na😀✌🏿",
  "AkoPa Sinubukan Mo [name]😀✌🏿",
  "Di Ka Uubra Sakin Boi😀✌🏿",
  "Batukan Kita E😀✌🏿",
  "Pwede Naba Kitang Birahin😀✌🏿",
  "Tangina Bagal Magreply😀✌🏿",
  "Hey [name]😀✌🏿",
  "NakakaWalang Gana I Troll😀✌🏿",
  "Chupa Mu na Lang TiTiKo Para Naman May Pakinabang Ka😀✌🏿",
  "Kasi Wla Eh Buti Pa Yung Hayup Merong Pakinabang Kesa Sayo😀✌🏿",
  "Diba [name] Alam Moyan😀✌🏿",
  "Alam Mong Mas Mahalaga Pa Hayup Kesa Sayo😀✌🏿",
  "Kesa Ikaw Puro Cellphone At Kain Tolog Lng😀✌🏿",
  "Tangina Tambay Yarn😀✌🏿",
  "Sa Mga Magulang Lang Umaasa Yung AsuKo😀✌🏿",
  "Lapag [name]😀✌🏿",
  "O Ayan Tahimik Ka Na Bigla😀✌🏿",
  "Takot Ka Na Ba Taba😀✌🏿",
  "Sige Aminin Mo Na Nanginginig Ka😀✌🏿",
  "Hahaha Halata Talaga😀✌🏿",
  "Baka Luha Na Yan Hindi Pawis😀✌🏿",
  "Tuminog Ka Pa Sakin Haha😀✌🏿",
  "Ano Nangyari Sa Tapang Mo😀✌🏿",
  "Nasan Na Yung Dating Kang Mayabang😀✌🏿",
  "Huy [name] Achuko😀✌🏿",
  "Nawala Na Bigla Haha😀✌🏿",
  "Baka Kelangan Mo Na Ng Tubig😀✌🏿",
  "Para Makalma Ka Hahah😀✌🏿",
  "Wala Na Sukat Sakin Pre😹🥊",
  "Kasi Alam Mo Na Talo Ka😹🥊",
  "Haha Wag Ka Mag Alala Asuko🙂👌🏿",
  "Nandito Pa Rin Ako Kapag Bumalik Ka😀✌🏿",
  "Baka Kinakabahan Ka Na Sumagot😀✌🏿",
  "Kasi Baka Mas Malala Pa Ang Susunod✌🏿😀",
  "Tama Ka Dun Taba Mag ingat Ka😀✌🏿",
  "Mas Masarap Pa To Kapag Sumagot Ka Pa😀✌🏿",
  "Sige Subukan Mo Pa😀✌🏿",
  "Pero Alam Ko Ayaw Mo Na Haha😀✌🏿",
  "Diba [name]😀✌🏿",
  "Nanginginig Ka Na Kaya😀✌🏿",
  "HAHAHAHAH",
  "RamDam Na RanDam Ko👌🏿🙂",
  "Pag Natalo Ka Ganyan Talaga😀✌🏿",
  "Nanginginig Tatalon Tatalon😀✌🏿",
  "Hahaha Kawawa Ka Naman😀✌🏿",
  "Dikapa SumaSagot Nararamdam Kona Na NangingiNig Ka Dyan😀✌🏿",
  "Sige Huminga Ka Muna AsoKo😀✌🏿",
  "Bago Ka Sumagot Ulit Haha😀✌🏿",
  "Kasi Baka Hindi Mo Na Maisip Ng Maayos😀✌🏿",
  "Dahil Nanginginig Ka Pa Rin😀✌🏿",
  "Sabayan Moko [name]😀✌🏿",
  "Oh Ano Akolang Nag Eefort Dito😀✌🏿",
  "Tanginang Mataba Nato😀✌🏿",
  "Puro Nanga Higa Sa Bahay At Kain Pati Sa Chat Wlang Effort😀✌🏿",
  "Bubo Ka Pala [name]😀✌🏿",
  "D Mo Kaya Makipag Sabayan Sakin Noh?😀✌🏿",
  "Talo Ka Na Tanggapin Mo Na😀✌🏿",
  "NagSayang Pako Ng Oras Sayo🤣🥊",
  "BoBo Ka Pala I Troll🤣🥊",
  "Haha Baka Asar Ka Dyan🤣🥊",
  "MagSabi Ka Lang🤣🥊🤣",
  "Video Call Nga Tayo Baka Umiiyak Kana🤣🥊🤣",
  "Iyakin Kapa Naman Eh😂🥊🤣",
  "Oh Ano [name] Video Call Tayu🥊🤣",
  "Dun Ko Titignan Tapang Mo🤣🥊",
  "Wala Sa Keyboard Ang Tapang🤣🤣🥊",
  "Kasi Kamay MoLang Ginagalaw Mo🤣🥊",
  "SuBukan Natin Sa RealLife BagaGin Ko Mukha Mo🤣🥊",
  "Dun Mo Ilabas Pagiging Tanga Mo [name]",
  "Pero Wag Nalang🤣🥊",
  "Baka Bayot K🤣🥊",
  "Baka Chupa Mopa TiTiKo Tas Bigla Kitang Napatay🤣🥊",
  "Haha TangaKa🤣🥊",
  "Kilalanin Mo Binabangga Mo Taba🤣🥊",
  "NagSayang Pako Ng Oras Sayo🤣🥊🤣",
  "Bobo Ka Palang Bobita Ka🤣🥊🤣",
  "Ugaling Pantanga🤣🥊",
  "Di Ako Kayang Sabayan🤣🥊",
  "Kasi ClipBoard Boi Kalang🤣🥊🥊",
  "Jan Kalang Umaasa Eh🤣🥊🥊",
  "Hindi Mo GinaGamit Utak Mo🤣🥊",
  "Mas PinaPairal Mopa KabubuHan Mo🤣🥊",
  "Pst [name]🥊🤣🥊",
  "Asar To Guys HAHAHAH",
  "NararamDaman Kona🤣🥊🤣",
  "UmiiYak Na Ata To Habang Nag iisip Ng Ibabato Sakin🤣🥊🤣",
  "Walang Iyakan Taba [name]🥊🤣🤣",
  "PatuNayan Mo Na Kaya Moko Talunin🤣🥊🤣",
  "Di Monga Ako Kaya🥊🤣🤣",
  "Tas Tatalunin MoPa Yung Gods Mo🥊🤣",
  "Pst Bayot [name]🤣🥊",
  "Bakit Asar Kana HAHAHAHA",
  "Akala Ko Walang Maaasar Dito🤣🥊",
  "Ganyan Talaga Taba [name] Kapag Naasar NangiNginig Kamay Tas Pawis🤣🥊",
  "Ibig Sabihin Talo Ka🤣🥊🤣",
  "Panalo Nako DogsKo🤣🥊🤣",
  "HAHAHAHA WAG KANG MAWAWALA TABAH😹🫵",
"TABAAAN MO PAH WAG KANG MAHIYA😹🖕",
"WAG KANG MAWAWALA TITIKO Q😹😹",
"HAHAHAHA ANDITO LANG AKO TABAH😹🫵",
"WAG KANG AALIS MAY ROUND 2 PAH😹🖕",
"TABAAAN MO PAH BAKA MAPAG-IWANAN KA😹😹",
"WAG KANG MAWAWALA BOSS DI PA TAPOS😹🫵",
"HAHAHAHA NASAN KA NA TABAH NAGLULUTO PA Q😹🖕",
"WAG KANG MAGTATAGO TITIKO Q😹😹",
"TABAAAN MO PAH KAYA MO YAN😹🫵",
"WAG KANG MAWAWALA SAYANG ANG INGAY MO😹🖕",
"HAHAHAHA BALIK KA DITO TABAH😹😹",
"WAG KANG MAG AFK MAY PINAG-UUSAPAN PAH😹🫵",
"TABAAAN MO PAH HINDI PA Q TAPOS😹🖕",
"WAG KANG MAWAWALA BAKA MA-MISS KITA😹😹",
"HAHAHAHA NASAN NA ANG TAPANG MO TABAH😹🫵",
"WAG KANG SUSUKO MAY NEXT EPISODE PAH😹🖕",
"TABAAAN MO PAH HANGGANG SA DULO😹😹",
"WAG KANG MAWAWALA KAWAWA NAMAN ANG GC😹🫵",
"HAHAHAHA BALIK KA NA TABAH NANGUNGULANGOT NA Q😹🖕",
"WAG KANG MAGLOGOUT DI PA TAPOS ANG SHOW😹😹",
"TABAAAN MO PAH BAKA SAKALING MANALO KA😹🫵",
"WAG KANG MAWAWALA HA BOSSING😹🖕",
"HAHAHAHA ANDYAN KA PA BA TABAH😹😹",
"WAG KANG MAGTATAGO SA LIKOD NG KEYBOARD😹🫵",
"TABAAAN MO PAH HANGGANG MAUBOS EMOJI MO😹🖕",
"WAG KANG MAWAWALA MAY ATTENDANCE PAH😹😹",
"HAHAHAHA BUMALIK KA TABAH MISS NA NG RANTER ANG INGAY MO [name]😹🫵",
"WAG KANG MAWAWALA HINDI PA TAPOS ANG KABALIWAN😹🖕",
"TABAAAN MO PAH HANGGANG SA HULING CHAT😹😹🫵",
  " HAHAHAHAHAHAHA ANO NA TABAAAA ANG INGAY MO PERO WALANG LAMAN MGA SINASABI MO 😭🫵 ",
‎" KALA MO NAMAN KUNG SINONG KINATATAKUTAN EH KAHIT PANGASAR LANG DI MO KAYA PANINDIGAN HAHAHAHAHA 😭 ",
‎" WAG KANG UMASTANG MAIN CHARACTER KUNG EXTRA KA LANG NAMAN SA EKSENA NG BUHAY NG IBA 😭🫵 ",
‎" ANG LAKAS MO MAGYABANG PERO PAG IKAW NA ANG KINAKAUSAP BIGLANG TAHIMIK HAHAHAHAHA 😭😭 ",
‎" HINDI LAHAT NG NAGRE-REPLY SA'YO NAIIINIS SA'YO YUNG IBA NATATAWA LANG TALAGA SA PINAPAKITA MO 😭🫵 ",
‎" WAG KANG MAWAWALA TABAHHHH DI PA TAPOS ANG PALABAS MO HAHAHAHAHA 😈 ",
‎" SOBRANG LAKAS NG CONFIDENCE MO PERO PARANG WALANG KASAMANG COMMON SENSE HAHAHAHAHA 😭🫵 ",
‎" HINDI IKAW ANG SENTRO NG MUNDO BEH KAYA TIGILAN MO YANG PAG-AASTANG LAHAT DAPAT NAKATINGIN SA'YO 😭😭 ",
‎" HAHAHAHAHAHAHA TULOY MO LANG YAN AT LEAST LIBRE KAMING MAY PINAPANOOD NA COMEDY SHOW 😭🫵 ",
‎" ANO NA TABAAAAA AKALA MO MAY NAPATUNAYAN KA NA PERO MAS LALO MO LANG PINAPAHIYA SARILI MO SA MGA PINAGSASABI MO 😭🔥 ",
‎" WAG KANG MAGING MAYABANG KUNG HINDI MO KAYANG TANGGAPIN NA HINDI LAHAT PAPALAKPAK SA'YO HAHAHAHAHA 😭🫵 ",
‎" SGE LANG BEH ILABAS MO PA LAHAT NG BANAT MO BAKA SAKALING MAY ISANG TUMAMA HAHAHAHAHA 😭😭🫵 ",
‎" HAHAHAHAHAHAHAHAHAHAHA ANO NA TABAAAA 😭🫵 ANG LAKAS MO MAGPAKITA PERO PARANG WALANG MAISIP NA MATINONG BANAT HAHAHAHAHAHAHA ",
‎" WAG KANG MAWAWALA TABAHHHH 😭😭🫵 HINDI PA TAPOS ANG PALABAS MO KAYA UMARTE KA PA HAHAHAHAHAHAHA ",
‎" KALA MO NAMAN KUNG SINONG KINATATAKUTAN DITO EH 😭🫵 PURO KA INGAY PERO PAG IKAW NA ANG BINALIKAN BIGLANG NAGIGING ANGHEL HAHAHAHAHA ",
‎" AAAAAAAAHHHHHHHHHHH 😭😭😭🫵🫵 ANO NA BEHHHH NASAN NA YUNG TAPANG NA PINAGMAMALAKI MO HAHAHAHAHAHAHA ",
‎" TIKOM MUNA BIBIG MO TABAAAA 😭🫵 HINDI LAHAT NG SINASABI MO NAKAKATAKOT YUNG IBA NAKAKAHIYA LANG BASAHIN HAHAHAHAHAHAHA ",
‎" HAHAHAHAHAHAHAHAHAHAHAHA WAG KANG AASTANG BOSS KUNG HINDI MO KAYANG PANINDIGAN YANG MGA SINASABI MO 😭🫵 ",
‎" TABAHHHH TABAHHHH TABAHHHH 😭😭🫵🫵 AKALA MO IKAW ANG MAIN CHARACTER PERO KAHIT ANG DAMI MONG DIALOGUE WALANG NAKAKAALALA NG ROLE MO HAHAHAHAHAHAHA ",
‎" SGE LANG BEHHHH ILABAS MO PA YANG MGA BANAT MO 😭🔥 BAKA SA SUSUNOD MAY LAMAN NA RIN YANG MGA SINASABI MO HAHAHAHAHAHAHA ",
‎" WAG KANG MAGING MAYABANG KUNG HINDI MO KAYANG TUMAWA SA SARILI MONG PAGKAKATALO 😭🫵 HAHAHAHAHAHAHAHAHA ",
‎" ANO NA ANO NA ANO NAAAA 😭😭😭🫵🫵 BAKIT PARANG NAUBUSAN NG SCRIPT ANG ATING BIDANG-BIDA HAHAHAHAHAHAHA ", "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA HINDI KO ALAM KUNG MAKIKIPAGBARDAGULAN BA QO O MANONOOD NA LANG NG COMEDY SHOW 😭😭🫵 ",
‎" WAG KANG MAWAWALA TABAHHHH 😈🫵 KASI SA DAMI NG SINASABI MO PARANG KAILANGAN NA NATIN NG SEASON TWO HAHAHAHAHAHAHAHAHA ",
‎" HAHAHAHAHAHAHAHAHAHAHA ANO NA TABAAAA 😭🫵 ANG LAKAS MO MAGPAKITA PERO PARANG WALANG MAISIP NA MATINONG BANAT HAHAHAHAHAHAHA ",
‎" WAG KANG MAWAWALA TABAHHHH 😭😭🫵 HINDI PA TAPOS ANG PALABAS MO KAYA UMARTE KA PA HAHAHAHAHAHAHA ",
‎" KALA MO NAMAN KUNG SINONG KINATATAKUTAN DITO EH 😭🫵 PURO KA INGAY PERO PAG IKAW NA ANG BINALIKAN BIGLANG NAGIGING ANGHEL HAHAHAHAHA ",
‎" AAAAAAAAHHHHHHHHHHH 😭😭😭🫵🫵 ANO NA BEHHHH NASAN NA YUNG TAPANG NA PINAGMAMALAKI MO HAHAHAHAHAHAHA ",
‎" TIKOM MUNA BIBIG MO TABAAAA 😭🫵 HINDI LAHAT NG SINASABI MO NAKAKATAKOT YUNG IBA NAKAKAHIYA LANG BASAHIN HAHAHAHAHAHAHA ",
‎" HAHAHAHAHAHAHAHAHAHAHAHA WAG KANG AASTANG BOSS KUNG HINDI MO KAYANG PANINDIGAN YANG MGA SINASABI MO 😭🫵 ",
‎" TABAHHHH TABAHHHH TABAHHHH 😭😭🫵🫵 AKALA MO IKAW ANG MAIN CHARACTER PERO KAHIT ANG DAMI MONG DIALOGUE WALANG NAKAKAALALA NG ROLE MO HAHAHAHAHAHAHA ",
‎" SGE LANG BEHHHH ILABAS MO PA YANG MGA BANAT MO 😭🔥 BAKA SA SUSUNOD MAY LAMAN NA RIN YANG MGA SINASABI MO HAHAHAHAHAHAHA ",
‎" WAG KANG MAGING MAYABANG KUNG HINDI MO KAYANG TUMAWA SA SARILI MONG PAGKAKATALO 😭🫵 HAHAHAHAHAHAHAHAHA ",
‎" ANO NA ANO NA ANO NAAAA 😭😭😭🫵🫵 BAKIT PARANG NAUBUSAN NG SCRIPT ANG ATING BIDANG-BIDA HAHAHAHAHAHAHA ",
‎"HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA HINDI KO ALAM KUNG MAKIKIPAGBARDAGULAN BA QO O MANONOOD NA LANG NG COMEDY SHOW 😭😭🫵 ",
‎" WAG KANG MAWAWALA TABAHHHH 😈🫵 KASI SA DAMI NG SINASABI MO PARANG KAILANGAN NA NATIN NG SEASON TWO HAHAHAHAHAHAHAHAHA ",
‎" HAHAHAHAHAHAHAHAHAHAHA ANO NA TABAAAA 😭🫵 ANG LAKAS MO MAGPAKITA PERO PARANG WALANG MAISIP NA MATINONG BANAT HAHAHAHAHAHAHA ",
‎" WAG KANG MAWAWALA TABAHHHH 😭😭🫵 HINDI PA TAPOS ANG PALABAS MO KAYA UMARTE KA PA HAHAHAHAHAHAHA ",
‎" KALA MO NAMAN KUNG SINONG KINATATAKUTAN DITO EH 😭🫵 PURO KA INGAY PERO PAG IKAW NA ANG BINALIKAN BIGLANG NAGIGING ANGHEL HAHAHAHAHA ",
‎" AAAAAAAAHHHHHHHHHHH 😭😭😭🫵🫵 ANO NA BEHHHH NASAN NA YUNG TAPANG NA PINAGMAMALAKI MO HAHAHAHAHAHAHA ",
‎" TIKOM MUNA BIBIG MO TABAAAA 😭🫵 HINDI LAHAT NG SINASABI MO NAKAKATAKOT YUNG IBA NAKAKAHIYA LANG BASAHIN HAHAHAHAHAHAHA ",
‎" HAHAHAHAHAHAHAHAHAHAHAHA WAG KANG AASTANG BOSS KUNG HINDI MO KAYANG PANINDIGAN YANG MGA SINASABI MO 😭🫵 ",
‎" TABAHHHH TABAHHHH TABAHHHH 😭😭🫵🫵 AKALA MO IKAW ANG MAIN CHARACTER PERO KAHIT ANG DAMI MONG DIALOGUE WALANG NAKAKAALALA NG ROLE MO HAHAHAHAHAHAHA ",
‎" SGE LANG BEHHHH ILABAS MO PA YANG MGA BANAT MO 😭🔥 BAKA SA SUSUNOD MAY LAMAN NA RIN YANG MGA SINASABI MO HAHAHAHAHAHAHA ",
‎" WAG KANG MAGING MAYABANG KUNG HINDI MO KAYANG TUMAWA SA SARILI MONG PAGKAKATALO 😭🫵 HAHAHAHAHAHAHAHAHA ",
‎" ANO NA ANO NA ANO NAAAA 😭😭😭🫵🫵 BAKIT PARANG NAUBUSAN NG SCRIPT ANG ATING BIDANG-BIDA HAHAHAHAHAHAHA ",
‎"HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA HINDI KO ALAM KUNG MAKIKIPAGBARDAGULAN BA QO O MANONOOD NA LANG NG COMEDY SHOW 😭😭🫵 ",
‎" WAG KANG MAWAWALA TABAHHHH 😈🫵 KASI SA DAMI NG SINASABI MO PARANG KAILANGAN NA NATIN NG SEASON TWO HAHAHAHAHAHAHAHAHA ",
‎" ANO DOG MODE KANA TABAAAA ☄️☄️ HAHAHAHAHAHAHA ",
‎" AYAN NA NAMAN NAG BARKING MODE NA NAMAN SI ANTE ☄️☄️😭 ",
‎" ANO NA BEHHH NAUBUSAN KANA BA NG BANAT ☄️☄️☄️ ",
‎" HAHAHAHAHAHAHA WAG KANG MAWAWALA TABAHHH ☄️☄️☄️ ",
‎" DOG MODE ACTIVATED NA NAMAN SI ANTECCO ☄️☄️😭😭 ",
‎" ANO YAN BEH TAHOL ERA MO NA NAMAN ☄️☄️☄️ HAHAHAHAHA ",
‎" KALA MO NAMAN KUNG SINONG MAIN CHARACTER DITO ☄️☄️☄️ ",
‎" AYAN NA NAMAN ANG BIDA SA SARILI NIYANG PANTASYA ☄️☄️😭 ",
‎" ANO NA TABAAAA NAGLOADING NA BA UTAK MO ☄️☄️☄️ ",
  "di mo'ko kayang sabayan tas asar kapa HAHAHHAHA",
  "Naaawa Nako Sayo Bagal Mo Magreply Taba🥊🤣",
];

function buildMsg(raw, name, targetID) {
  if (!raw.includes("[name]")) return { body: raw };
  const body = raw.replace(/\[name\]/g, name);
  const mentions = [];
  let idx = 0;
  while ((idx = body.indexOf(name, idx)) !== -1) {
    mentions.push({ tag: name, id: targetID, fromIndex: idx });
    idx += name.length;
  }
  return { body, mentions };
}

module.exports = {
  config: {
    name: "troll",
    version: "3.0.0",
    author: "Siegfried Samá",
    countDown: 10,
    role: 2,
    description: { en: "ginagamit sa mga tangang troller" },
    category: "fun",
    guide: { en: "{pn} @mention | {pn} tigil" }
  },

  onStart: async function ({ api, event, usersData, message, args }) {
    const { threadID, mentions } = event;
    const prefix = global.GoatBot.config.prefix;

    if (args[0] && args[0].toLowerCase() === "tigil") {
      if (!trollSessions.has(threadID)) {
        return message.reply("Walang aktibong troll session sa thread na ito.");
      }
      const session = trollSessions.get(threadID);
      session.aborted = true;
      trollSessions.delete(threadID);
      return message.reply("✅ Troll session naitigil na.");
    }

    if (trollSessions.has(threadID)) {
      return message.reply("⚠️ May umaandar pang troll session dito. Gamitin: " + prefix + "troll tigil");
    }

    const mentionIDs = Object.keys(mentions || {});
    if (!mentionIDs.length) {
      return message.reply("tag mo yung gusto i-troll!");
    }

    const targetID = mentionIDs[0];
    const name = await usersData.getName(targetID);

    const session = {
      aborted: false,
      targetID,
      targetName: name,
      replyIndex: 0,
      startTime: Date.now()
    };
    trollSessions.set(threadID, session);

    for (let i = 0; i < TROLL_LINES.length; i++) {
      if (session.aborted) break;
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (session.aborted) break;
      const msg = buildMsg(TROLL_LINES[i], name, targetID);
      await new Promise(resolve => {
        try {
          api.sendMessage(msg, threadID, () => resolve());
        } catch (e) {
          resolve();
        }
        setTimeout(resolve, 5000);
      });
    }

    if (!session.aborted) {
      const elapsed = Math.floor((Date.now() - session.startTime) / 1000);
      const mins = Math.floor(elapsed / 60);
      const secs = elapsed % 60;
      const timeStr = mins > 0 ? `${mins} min ${secs} sec` : `${secs} sec`;

      const finalBody = `MYSTERIOUSq ON TOP 🔝\n\n${name} ON TRASH🚮🚮🚮\n\n\nREASON BAKIT NATALO:\n\n- MAHINA\n- NAASAR SA SIMPLING TROLL\n- DI AKO KAYANG SABAYAN\n- MATABA ANG MGA KAMAY\n- SA CLIPBOARD LANG UMAASA SI TABA\n- ASUKO SI TABA\n\nDuration:\n${timeStr}`;

      const finalMentions = [];
      let idx = 0;
      while ((idx = finalBody.indexOf(name, idx)) !== -1) {
        finalMentions.push({ tag: name, id: targetID, fromIndex: idx });
        idx += name.length;
      }

      await new Promise(resolve => api.sendMessage(
        { body: finalBody, mentions: finalMentions },
        threadID,
        resolve
      ));
    }

    if (trollSessions.get(threadID) === session) {
      trollSessions.delete(threadID);
    }
  }
};
