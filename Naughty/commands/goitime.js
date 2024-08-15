const fs = global.nodemodule["fs-extra"];
module.exports.config = {
 name: "goitimehaha",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "𝙉𝘼𝙐𝙂𝙃𝙏Ｙ",
 description: "Time On No Prefix",
 commandCategory: "Noprefix",
 usages: "noprefix",
 cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
 var { threadID, messageID, reason } = event;
 const moment = require("moment-timezone");
 const time = moment.tz("Asia/Karachi").format("LLLL");
 var idgr = `${event.threadID}`;
 var id = event.senderID;
 var name = await Users.getNameUser(event.senderID);

 var tl = ["𝘽𝙤𝙩 𝘽𝙮 𝙉𝙖𝙪𝙜𝙝𝙩𝙮","𝙄 𝙃𝙥ּ𝙚 𝙔𝙤𝙪 𝙇𝙞𝙠𝙚𝙙 𝙄𝙩𝙝𝙞𝙨 𝘽𝙤𝙩","𝙂𝙪𝙮𝙨 𝙀𝙣𝙟𝙤𝙮 𝙏𝙝𝙞𝙨 𝘽𝙤𝙩","𝙁𝙤𝙧 𝙍𝙚פּ𝙤𝙧𝙩 𝘽𝙤𝙩 𝙄𝙨𝙨𝙪𝙚 𝙐𝙨𝙚 𝘾𝙤ּ𝙢𝙢𝙖𝙣𝙙 𝘾𝙖𝙡𝙡𝙖𝙙","𝙃𝙤𝙬 𝘼𝙧𝙚 𝙔𝙤𝙪 𝙂𝙪𝙮𝙯"];
var rand = tl[Math.floor(Math.random() * tl.length)]

  mess = "{what is your name}"

 if (event.body.indexOf("time") == 0 || (event.body.indexOf("Time") == 0)) {
  var msg = {
   body: `༺═─────────═༻\n${time}\n༺═─────────═༻\n𝙔𝙖 𝙏𝙞𝙢𝙚 𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝙆𝙖 𝙈𝙤𝙗𝙞𝙡𝙚 𝙆𝙖 𝙃𝙖...🙈\n༺═─────────═༻${rand}\n༺═─────────═༻`}
  return api.sendMessage(msg, event.threadID, event.messageID, event.messageID);
 };


  