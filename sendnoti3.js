const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "88uu",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
    description: "",
    commandCategory: "Group",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Pakistan").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `•.:°❀×═════════×❀°:.•
     ✿ 𝘽𝙤𝙩 𝙐𝙨𝙚𝙧'𝙨 𝙍𝙚𝙥𝙡𝙮 ✿
•.:°❀×═════════×❀°:.•
  ✾ ⏤͟͟͞͞★   𝙍𝙚𝙥𝙡𝙮
•.:°❀×═════════×❀°:.•
 ✾ ⏤͟͟͞͞★ ${body}
•.:°❀×═════════×❀°:.•            
✾ ⏤͟͟͞͞★ 𝙐𝙨𝙚𝙧 𝙉𝙖𝙢𝙚
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ ${name}
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ 𝙏𝙝𝙧𝙚𝙖𝙙 𝙉𝙖𝙢𝙚
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ ${(await Threads.getInfo(threadID)).threadName
•.:°❀×═════════×❀°:.• ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `•.:°❀×═════════×❀°:.•
     ✿ 𝘽𝙤𝙩 𝙐𝙨𝙚𝙧'𝙨 𝙍𝙚𝙥𝙡𝙮 ✿
•.:°❀×═════════×❀°:.•
  ✾ ⏤͟͟͞͞★   𝙍𝙚𝙥𝙡𝙮
•.:°❀×═════════×❀°:.•
 ✾ ⏤͟͟͞͞★ ${body}
•.:°❀×═════════×❀°:.•            
✾ ⏤͟͟͞͞★ 𝙐𝙨𝙚𝙧 𝙉𝙖𝙢𝙚
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ ${name}
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ 𝙏𝙝𝙧𝙚𝙖𝙙 𝙉𝙖𝙢𝙚
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ ${(await Threads.getInfo(threadID)).threadName
•.:°❀×═════════×❀°:.• ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `•.:°❀×═════════×❀°:.•
        ✿ 𝘼𝙙𝙢𝙞𝙣 𝙍𝙚𝙥𝙡𝙮 ✿
•.:°❀×═════════×❀°:.•
  ✾ ⏤͟͟͞͞★   𝙍𝙚𝙥𝙡𝙮
•.:°❀×═════════×❀°:.•
 ✾ ⏤͟͟͞͞★ ${body}
•.:°❀×═════════×❀°:.•            
✾ ⏤͟͟͞͞★ 𝘼𝙙𝙢𝙞𝙣 𝙉𝙖𝙢𝙚
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★  ${name}
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ 𝙍𝙚𝙥𝙡𝙮 𝙏𝙝𝙞𝙨 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙄𝙛 𝙔𝙤𝙪 𝙒𝙖𝙣𝙩 𝙏𝙤 𝘾𝙤𝙣𝙩𝙞𝙣𝙪𝙚 𝘾𝙤𝙣𝙫𝙚𝙧𝙨𝙖𝙩𝙞𝙤𝙣
•.:°❀×═════════×❀°:.•`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `•.:°❀×═════════×❀°:.•
        ✿ 𝘼𝙙𝙢𝙞𝙣 𝙍𝙚𝙥𝙡𝙮 ✿
•.:°❀×═════════×❀°:.•
  ✾ ⏤͟͟͞͞★   𝙍𝙚𝙥𝙡𝙮
•.:°❀×═════════×❀°:.•
 ✾ ⏤͟͟͞͞★ ${body}
•.:°❀×═════════×❀°:.•            
✾ ⏤͟͟͞͞★ 𝘼𝙙𝙢𝙞𝙣 𝙉𝙖𝙢𝙚
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★  ${name}
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ 𝙍𝙚𝙥𝙡𝙮 𝙏𝙝𝙞𝙨 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙄𝙛 𝙔𝙤𝙪 𝙒𝙖𝙣𝙩 𝙏𝙤 𝘾𝙤𝙣𝙩𝙞𝙣𝙪𝙚 𝘾𝙤𝙣𝙫𝙚𝙧𝙨𝙖𝙩𝙞𝙤𝙣
•.:°❀×═════════×❀°:.•`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Pakistan").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `•.:°❀×═════════×❀°:.•
✿𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙁𝙧𝙤𝙢 𝘼𝙙𝙢𝙞𝙣✿
•.:°❀×═════════×❀°:.•
  ✾ ⏤͟͟͞͞★   𝘾𝙤𝙣𝙩𝙚𝙣𝙩
•.:°❀×═════════×❀°:.•
 ✾ ⏤͟͟͞͞★ ${args.join(" ")}
•.:°❀×═════════×❀°:.•            
✾ ⏤͟͟͞͞★ 𝘼𝙙𝙢𝙞𝙣 𝙉𝙖𝙢𝙚
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ ${await Users.getNameUser(senderID)}
•.:°❀×═════════×❀°:.•\n`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `•.:°❀×═════════×❀°:.•
✿𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙁𝙧𝙤𝙢 𝘼𝙙𝙢𝙞𝙣✿
•.:°❀×═════════×❀°:.•
  ✾ ⏤͟͟͞͞★   𝘾𝙤𝙣𝙩𝙚𝙣𝙩
•.:°❀×═════════×❀°:.•
 ✾ ⏤͟͟͞͞★ ${args.join(" ")}
•.:°❀×═════════×❀°:.•            
✾ ⏤͟͟͞͞★ 𝘼𝙙𝙢𝙞𝙣 𝙉𝙖𝙢𝙚
•.:°❀×═════════×❀°:.•
✾ ⏤͟͟͞͞★ ${await Users.getNameUser(senderID)}
•.:°❀×═════════×❀°:.•\n`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`✿ [ 𝙔𝙤𝙪𝙧 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙎𝙚𝙣𝙙𝙚𝙙 ] ✿`, threadID);
}