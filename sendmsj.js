module.exports.config = {
  name: "sendmsg",
  version: "1.0.7",
  hasPermssion: 2,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿", 
  description: "Send him message to user(user)/group(thread) by ID!",
  commandCategory: "Admin",
  usages: "ID [Text]",
  cooldowns: 5
};

  module.exports.run = async ({ api, event, args, getText, utils, Users }) => {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
    var idbox = args[0];
    var reason = args.slice(1);
    let name = await Users.getNameUser(event.senderID)
    if (args.length == 0) api.sendMessage("Syntax error, use: sendmsg ID_BOX [message]", event.threadID, event.messageID);
  else 
      if(reason == "")api.sendMessage("Syntax error, use: sendmsg ID_BOX [message]", event.threadID, event.messageID);
    if (event.type == "message_reply") {
      const request = global.nodemodule["request"];
      const fs = require('fs')
      const axios = require('axios')  
      var getURL = await request.get(event.messageReply.attachments[0].url);

          var pathname = getURL.uri.pathname;
          var say = args.join(" ")
          var ext = pathname.substring(pathname.lastIndexOf(".") + 1);

          var path = __dirname + `/cache/snoti`+`.${ext}`;


      var abc = event.messageReply.attachments[0].url;
        let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

        fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));	
  await api.sendMessage({body: `•.:°❀×═════════×❀°:.•
   ✿ 𝙈𝙨𝙜 𝙁𝙧𝙤𝙢 𝘼𝙙𝙢𝙞𝙣 ✿
•.:°❀×═════════×❀°:.•
  ✾ ⏤͟͟͞͞★   𝙏𝙞𝙢𝙚
•.:°❀×═════════×❀°:.•
 ✾ ⏤͟͟͞͞★ ${gio}
•.:°❀×═════════×❀°:.•            
✾ ⏤͟͟͞͞★ 𝘼𝙙𝙢𝙞𝙣 𝙉𝙖𝙢𝙚
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ ${name}
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ 𝘾𝙤𝙣𝙩𝙚𝙣𝙩
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★  ${say}
•.:°❀×═════════×❀°:.•` + reason.join(" "), attachment: fs.createReadStream(path) }, idbox, () =>
      api.sendMessage(`${api.getCurrentUserID()}`, () =>
        api.sendMessage("SEnt Message: " + reason.join(" "), event.threadID)));
} 
else {
    await api.sendMessage(`Enter lúc: ${gio}\n━━━━━━━━━━━━━━━━━\n「 THÔNG DISCLAIMER ADMIN BOT 」\n\nAdmin: ${name}\n━━━━━━━━━━━━━━━━━\nNội dung:  ` + reason.join(" "), idbox, () =>
      api.sendMessage(`${api.getCurrentUserID()}`, () =>
        api.sendMessage("SEnt Message: " + reason.join(" "), event.threadID)));

  }
      }



///•.:°❀×═════════×❀°:.•
   ✿ 𝙈𝙨𝙜 𝙁𝙧𝙤𝙢 𝘼𝙙𝙢𝙞𝙣 ✿
///•.:°❀×═════════×❀°:.•///
  ✾ ⏤͟͟͞͞★   𝙏𝙞𝙢𝙚
///•.:°❀×═════════×❀°:.•///
 ✾ ⏤͟͟͞͞★ ${gio}
///•.:°❀×═════════×❀°:.•  //          
///✾ ⏤͟͟͞͞★ 𝘼𝙙𝙢𝙞𝙣 𝙉𝙖𝙢𝙚///
///•///.:°❀×═════════×❀°:.•///
//////✾ ⏤͟͟͞͞★ ${name}
////•.:°❀×═════════×❀°:.•
///✾ ⏤͟͟͞͞★ 𝘾𝙤𝙣𝙩𝙚𝙣𝙩
///•.:°❀×═════════×❀°:.•
///✾ ⏤͟͟͞͞★  ${say}
///•.:°❀×═════════×❀°:.•////