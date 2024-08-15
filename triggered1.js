module.exports.config = {
  name: "triggered",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "triggered",
  commandCategory: "edit-img",
  usages: `@tag `,
  cooldowns: 5
};

module.exports.run = async ({ api: Naughty, event, args, Threads, Users }) => {
var naughty = await Users.getNameUser(event.senderID);
Naughty.sendMessage(``, event.threadID, event.messageID);
     };