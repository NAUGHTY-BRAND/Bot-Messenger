module.exports.config = {
  name: "sid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "Save sticker id",
  commandCategory: "sticker",
  usages: "[reply]",
  cooldowns: 5   
}

module.exports.run = async function ({ api, event, args }) {
  if (event.type == "message_reply") {
    if (event.messageReply.attachments[0].type == "sticker") {
      return api.sendMessage({
        body: `ID: ${event.messageReply.attachments[0].ID}\nCaption: ${event.messageReply.attachments[0].description}`
      }, event.threadID)
    }
    else return api.sendMessage("Only reply sticker", event.threadID);
  }
  else if (args[0]) {
    return api.sendMessage({body:`here is the sticker`, sticker: args[0]}, event.threadID);
  }
  else return api.sendMessage("Only reply sticker", event.threadID);
}