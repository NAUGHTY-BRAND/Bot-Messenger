module.exports.config = {
	name: "getname2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
	description: "",
	commandCategory: "Group",
	usages: "[name]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	var name = ["ہم'نے-کب کہاں'ہمیں-پسند کیجئے'جناب نکلیے-شکل'گھم-کیجئے","ہم'ان'کے نہیں-ہوتے'صاحب'جو سب'کے-ہوتے پھریں","جب'بات'گہری ہو-تو'الفاظ'میں وزن'آہی-جاتا ہیں","اے'اللہ'تو ہی-دنیا'اور'آخرت میں'میرا'مددگار ہے","گمان'نہیں'یقین ہے-کوئی'کسی'کا نہیں","ہر'خاموش'شخص انا'پرست'نہیں ہوتا","جو'ہر'کسی پہ-مر'جائے'وہ مر-ہی'جائے-تو اچھا'ہے","یا'اللہ'میرے سارے-گناہوں'کی'سزا میری-بسٹی'کو'دینا آمین ","الحمد'اللہ'پیسہ اور-دل'کبھی'سہی جگہ-پہ'نہیں'لگایا","ہائے'صــــدقے'آپ اُداس-تھــــے'میرے'بنــــا چاند بابو ","اسلام'آباد'میں کانپیں-ٹانگ'رہی'ہے ","کیا'ہم'کوئی غلام-ہیں'جو'آپ بولیں-اور'ہم'کر لیں ","آؤ'آخری'بار خدا-حافظ'اب'ملاقات کی-امید'بھی'دوکہ ہے","ہمیں'زندہ'رہنے دو-اےحُسن'والوں","سامنے'تم'ہو اور-وقت'ٹھہر'جائے ","کہاں'میں'اور کہاں-یہ'آبی'زم زم-سے'دھلے'ہوئے لوگ","الجھنوں'کی'بھیڑ میں-لاپتا'سی'ہے زندگی","سب'سے'پہلے آپ نے-گھبرانا'نہیں'وزیراعظم عمران-خان","کل'نفسن'ذائقۃ-الموت","ایک'تیری'خاطر چپ-تھا'ورنہ'قبرستان بن-دیتا'پوری'فسبوک کو","بے'وفا-تیرا ماصوم'چہھرادل-لگانے کے'قابل-نہیی ہے'ایفٹی-نوابزادی","ہرکوئی'میرادوست'نہیں-لیکن-میرےدوست-جیساکسی'کادوست'نہیں","سانس چلتی-ہے'زندہ دفن-آنے'والو اللہ-خیر'کرے"];
  var rand = name[Math.floor(Math.random() * name.length)]
	const mention = Object.keys(event.mentions)[0];
	if (!mention) return api.changeNickname(`${rand}`, event.threadID, event.senderID);
	if (mention[0]) return api.changeNickname(`${rand.replace(event.mentions[mention], "")}`, event.threadID, mention);
}
//////////////////////////////////////////////////////////////////////////////////
//////////============MADE BY NAUGHTY SO DONT CHANGE CREDITS============//////////
//////////////////////////////////////////////////////////////////////////////////