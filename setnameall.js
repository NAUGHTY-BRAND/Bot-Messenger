module.exports.config = {
  name: "setnameall",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
  description: "Set nicknames all Group",
  commandCategory: "Utilities",
  usages: "set all members name",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  var threadInfo = await api.getThreadInfo(event.threadID)
  var idtv = threadInfo.participantIDs
  console.log(threadInfo)
  const name = args.join(" ")
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  for (let setname of idtv) {
    await delay(600)
    api.changeNickname(`${name}`, event.threadID, setname);
  }
}