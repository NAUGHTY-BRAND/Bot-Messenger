module.exports.config = {
    name: "Kalma",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
    description: "Kalma",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a(" 🔥𝙠𝙖𝙡𝙢𝙖🔥\n\n\nاَوّل کلمہ طیّب\n\nلَآ اِلٰهَ اِلَّا اﷲُ مُحَمَّدٌ رَّسُوْلُ اﷲِ.\n\nاللہ کے سوا کوئی عبادت کے لائق نہیں، محمد ( صلی اللہ علیہ وآلہ وسلم) اللہ کے رسول ہیں۔\n\nدوسراکلمہ شہادت\nاَشْهَدُ اَنْ لاَّ اِلٰهَ اِلاَّ اﷲُ وَحْدَهُ لَا شَرِيْکَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ.\n\nمیں گواہی دیتا ہوں کہ اللہ کے سوا کوئی عبادت کے لائق نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں اور میں گواہی دیتا ہوں کہ بیشک محمد ( صلی اللہ علیہ وآلہ وسلم ) اللہ کے بندے اور رسول ہیں۔\n\nتیسراکلمہ تمجید\nسُبْحَانَ اﷲِ وَالْحَمْدُِ ﷲِ وَلَآ اِلٰهَ اِلَّا اﷲُ وَاﷲُ اَکْبَرُ ط وَلَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاﷲِ الْعَلِيِ الْعَظِيْمِ.\n\nاللہ پاک ہے اور سب تعریفیں اللہ ہی کے لیے ہیں اور اللہ کے سوا کوئی عبادت کے لائق نہیں اور اللہ سب سے بڑا ہے۔ گناہوں سے بچنے کی طاقت اور نیکی کی توفیق نہیں مگر اللہ کی طرف سے عطا ہوتی ہے جو بہت بلند عظمت والا ہے۔\n\nچوتھاکلمہ توحید\nلَآ اِلٰهَ اِلاَّ اﷲُ وَحْدَهُ\nلَاشَرِيْکَ لَهُ لَهُ الْمُلْکُ وَلَهُ الْحَمْدُ يُحْی وَيُمِيْتُ وَهُوَ حَيٌّ لَّا يَمُوْتُ اَبَدًا اَبَدًا ط ذُوالْجَلَالِ وَالْاِکْرَامِ ط بِيَدِهِ الْخَيْرُ ط وَهُوَعَلٰی کُلِّ شَيْئٍ قَدِيْر.\n\nاللہ کے سوا کوئی عبادت کے لائق نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کے لیے بادشاہی ہے اور اسی کے لئے تعریف ہے، وہی زندہ کرتا اور مارتاہے اور وہ ہمیشہ زندہ ہے، اسے کبھی موت نہیں آئے گی، بڑے جلال اور بزرگی والا ہے۔ اس کے ہاتھ میں بھلائی ہے اور وہ ہر چیز پر قادر ہے\n\nپانچواں کلمہ اِستغفار\nاَسْتَغْفِرُ اﷲَ رَبِّيْ مِنْ کُلِّ ذَنْبٍ اَذْنَبْتُهُ عَمَدًا اَوْ خَطَاً سِرًّا اَوْ عَلَانِيَةً وَّاَتُوْبُ اِلَيْهِ مِنَ الذَّنْبِ الَّذِيْ اَعْلَمُ وَمِنَ الذَّنْبِ الَّذِيْ لَآ اَعْلَمُ ط اِنَّکَ اَنْتَ عَلَّامُ الْغُيُوْبِ وَسَتَّارُ الْعُيُوْبِ وَغَفَّارُ الذُّنُوْبِ وَلَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاﷲِ الْعَلِيِّ الْعَظِيْمِ.\n\nمیں اپنے پروردگار اللہ سے معافی مانگتا ہوں ہر اس گناہ کی جو میں نے جان بوجھ کر کیا یا بھول کر، چھپ کر کیا یا ظاہر ہوکر۔اور میں اس کی بارگاہ میں توبہ کرتا ہوں اس گناہ کی جسے میں جانتا ہوں اور اس گناہ کی بھی جسے میں نہیں جانتا۔(اے اللہ!) بیشک تو غیبوں کا جاننے والا، عیبوں کا چھپانے والا اور گناہوں کا بخشنے والا ہے۔ اور گناہ سے بچنے کی طاقت اور نیکی کرنے کی قوت نہیں مگرا للہ کی مدد سے جو بہت بلند عظمت والا ہے۔\n\nچھٹا کلمہ ردِّ کفر\nاَللّٰهُمَّ اِنِّيْ اَعُوْذُ بِکَ مِنْ اَنْ اُشْرِکَ بِکَ شَيْئًا وَّاَنَا اَعْلَمُُ بِهِ وَاَسْتَغْفِرُکَ لِمَا لَآ اَعْلَمُ بِهِ تُبْتُ عَنْهُ وَتَبَرَّاْتُ مِنَ الْکُفْرِ وَالشِّرْکِ وَالْکِذْبِ وَالْغِيْبَةِ وَالْبِدْعَةِ وَالنَّمِيْمَةِ\nوَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِيْ کُلِّهَا وَاَسْلَمْتُ وَاَقُوْلُ لَآ اِلٰهَ اِلَّا اﷲُ مُحَمَّدٌ رَّسُوْلُ اﷲ\n\nاے اللہ! میں تیری پناہ مانگتا ہوں اس بات سے کہ میں کسی شے کو جان بوجھ کر تیرا شریک بناؤں اور بخشش مانگتا ہوں تجھ سے اس (شرک) کی جسے میں نہیں جانتا اور میں نے اس سے (یعنی ہر طرح کے کفر و شرک سے) توبہ کی اور بیزار ہوا کفر، شرک، جھوٹ، غیبت، بدعت اور چغلی سے اور بے حیائی کے کاموں سے اور بہتان باندھنے سے اور تمام گناہوں سے۔ اور میں اسلام لایا۔ اور میں کہتا ہوں کہ اللہ کے سوا کوئی عبادت کے لائق نہیں، محمد ( صلی اللہ علیہ وآلہ وسلم) اللہ کے رسول ہیں\n\nтнιs мσ∂υℓε cσ∂ε вү мя ❥❥𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ🔥");


  }