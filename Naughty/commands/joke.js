module.exports.config = {
	name: "joke",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "LATIFAY",
	commandCategory: "FUN",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/joke`);
var joke = res.data.joke;
return api.sendMessage(`${joke}`, event.threadID, event.messageID)
  }