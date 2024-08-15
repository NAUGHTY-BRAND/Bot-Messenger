module.exports.config = {
    name: "flop",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
    description: "Remove all group members.",
    commandCategory: "box chat",
    usages: "",
    cooldowns: 5
};
module.exports.run = async function({ api, event, getText,args }) {
  const { participantIDs } = await api.getThreadInfo(event.threadID)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const botID = api.getCurrentUserID();
  const listUserID = participantIDs.filter(ID => ID != botID);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage("» An error occurred.", event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
      return api.sendMessage(`»𝙋𝙡𝙯 𝙂𝙞𝙫𝙚 𝙈𝙚 𝙂𝙧𝙤𝙪𝙥 𝘼𝙙𝙢𝙞𝙣 𝙍𝙞𝙜𝙝𝙩𝙨...`, event.threadID, event.messageID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      setTimeout(function() { api.removeUserFromGroup(botID, event.threadID) }, 300000);
      return api.sendMessage(`» 𝘽𝙮 𝘼𝙡𝙡 𝙈𝙚𝙢𝙗𝙚𝙧𝙨 𝘽𝙪𝙩 𝙄 𝙍𝙚𝙢𝙚𝙢𝙗𝙚𝙧 𝙏𝙝𝙚 𝙏𝙞𝙢𝙚 𝙒𝙚 𝙎𝙥𝙚𝙣𝙩  𝙏𝙤𝙜𝙚𝙖𝙩𝙝𝙚𝙧...`, event.threadID, async (error, info) => {
        for (let id in listUserID) {
          await new Promise(resolve => setTimeout(resolve, 800));
          api.removeUserFromGroup(listUserID[id], event.threadID)
        }
      })
    } else return api.sendMessage('» 𝙊𝙣𝙡𝙮 𝙂𝙧𝙤𝙪𝙥 𝘼𝙙𝙢𝙞𝙣 𝘾𝙖𝙣 𝙪𝙨𝙚 𝙏𝙝𝙞𝙨 𝘾𝙤𝙢𝙢𝙖𝙣𝙙...', event.threadID, event.messageID);
  })
}