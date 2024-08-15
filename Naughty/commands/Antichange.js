module.exports.config = {
  name: "antichange",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "Stops Stupid Members To Destory Group",
  commandCategory: "Rare",
  usages: `𝗠𝗢𝗗𝗘 - Title => Group Members Cannot Change Group Name
𝗠𝗢𝗗𝗘 - Avatar => Group Members Cannot Change Group Image
𝗠𝗢𝗗𝗘 - Nickname => Group Members Cannot Change Any Nickname
𝗠𝗢𝗗𝗘 - Icon => Group Members Cannot Change Group Emoji
𝗠𝗢𝗗𝗘 - Theme => Group Members Cannot Change Group Theme
> For Example: For On: +antichange title on
For Off: +antichange title off
`,
  cooldowns: 5
};

module.exports.run = async ({ api: Naughty, event, args, Threads, Users }) => {
var naughty = await Users.getNameUser(event.senderID);
Naughty.sendMessage(``, event.threadID, event.messageID);
     };
