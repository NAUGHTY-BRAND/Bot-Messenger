module.exports.config = {
  name: "prefix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
  description: "bot prefix",
  commandCategory: "For public",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿") { return api.sendMessage(`» 𝘼 𝘾𝙍𝙀𝘿𝙄𝙏𝙎 𝘾𝙃𝘼𝙉𝙂𝙀𝘿 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿 𝘼 𝙁𝙐𝘾𝙆 𝙁𝙊𝙍 𝙔𝙐 𝘽𝙔 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = ["prefix","Bot Prifix","iska prefix kia ha","prifex","pref","name","naam"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`️️️️️️️️️️️️️️️️️️️️️️️️️𝙔𝘼 𝙇𝙊 𝘾𝙃𝘼𝘽𝘼𝙇 𝙄𝙉𝙎𝘼𝘼𝙉 𝙈𝘼𝙍𝘼 𝙋𝙍𝙀𝙁𝙄𝙓 [ 𓆩${prefix}𓆪 ]`)
      }
      else return out(`️️️️️️️️️️️️️️️️️️️️️️️️️𝙔𝘼 𝙇𝙊 𝘾𝙃𝘼𝘽𝘼𝙇 𝙄𝙉𝙎𝘼𝘼𝙉 𝙈𝘼𝙍𝘼 𝙋𝙍𝙀𝙁𝙄𝙓 𓆩😝𓆪  `    + data.PREFIX )
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage(`️️️️️️️️️️️️️️️️️️️️️️️️️𝙔𝘼 𝙇𝙊 𝘾𝙃𝘼𝘽𝘼𝙇 𝙄𝙉𝙎𝘼𝘼𝙉 𝙈𝘼𝙍𝘼 𝙋𝙍𝙀𝙁𝙄𝙓 [ 𓆩${global.config.PREFIX}𓆪]`, event.threadID)
      }