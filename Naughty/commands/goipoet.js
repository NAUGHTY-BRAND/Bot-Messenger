const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goipoetry",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
  description: "Poetry On No Prefix",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [""];
var rand = tl[Math.floor(Math.random() * tl.length)]

    mess = "{what is your name}"
  
  if (event.body.indexOf("Poetry") == 0 || (event.body.indexOf("Poet") == 0)) {
    var msg = {
      body: `                            ─┉┈┈┈┈┈┈◈◉◈┈┈┈┈┈┈┉                     ${rand}                                                              ─┉┈┈┈┈┈┈◈◉◈┈┈┈┈┈┈┉          𓆩🖤𓆪𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𓆩🧡𓆪`}
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
       