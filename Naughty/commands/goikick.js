const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Kick me",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ",
  description: "goikick On No Prefix",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("LLLL");
  var idgr = `${event.threadID}`;
   let jojo = ["526214684778630"];
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["TAKE CARE","GOOD TIME WE SPEND","I MISS YOU"];
var rand = tl[Math.floor(Math.random() * tl.length)]
  var sticker = jojo[Math.floor(Math.random() * jojo.length)]

    mess = "{what is your name}"
  
  if (event.body.indexOf("Kick Me") == 0 || (event.body.indexOf("Kick me") == 0)) {
    var msg = {
      body: `༺═─────────═༻\n${name} By Kicking You If I Am Group Admin\n༺═─────────═༻${rand}\n༺═─────────═༻`}
      api.sendMessage({sticker: sticker}, event.threadID)
    api.removeUserFromGroup(event.senderID,  event.threadID);
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
       