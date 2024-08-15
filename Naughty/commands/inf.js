module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔",
	description: "Admin and Bot info.",
	commandCategory: "admin info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/d4dARYi.jpg", "https://i.imgur.com/cJ44mzx.png", "https://i.imgur.com/3LF0JQ7.gif", "https://i.imgur.com/KBDnJRw.png", "https://i.imgur.com/HxtCORA.gif", "https://i.imgur.com/E8oiyii.png", "https://i.imgur.com/f45upLc.png", "https://i.imgur.com/RrAMgWe.jpg","https://i.imgur.com/wRvheoS.png"];
var callback = () => api.sendMessage({body:`➢𝘽𝙤𝙩 𝘼𝙣𝙙 𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣 𝙄𝙣𝙛𝙤🥰

⁂𝘽𝙤𝙩 𝙉𝙖𝙢𝙚: ${global.config.BOTNAME}💞

✧𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣: 𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙💪

𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙: 
1=========https://www.facebook.com/profile.php?id=61551586370029=============
2=========https://www.facebook.com/profile.php?id=100086141860679============
3=========https://www.facebook.com/profile.php?id=100095153642640============                  
IF YOU DON"T RECEVIE RESPONSE CONTACT ON OTHER ACCOUNT.
✡𝘽𝙤𝙩 𝙋𝙧𝙚𝙛𝙞𝙭: ${global.config.PREFIX}✨🥳

✫𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧: 𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙🤝

➟𝙐𝙥𝙩𝙞𝙢𝙚 ⏰

✬𝙏𝙤𝙙𝙖𝙮 𝙄𝙨: ${juswa} 𝙘𝙖𝙡𝙖𝙣𝙙𝙚𝙧

➳𝘽𝙤𝙩 𝙄𝙨 𝙍𝙪𝙣𝙣𝙞𝙣𝙜: ${hours}:${minutes}:${seconds}.

✫𝙔𝙤𝙪 𝘼𝙧𝙚 𝙐𝙨𝙞𝙣𝙜 ${global.config.BOTNAME} -𝘽𝙮 𝙉𝙖𝙪𝙜𝙝𝙩𝙮 Brand🙂`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };