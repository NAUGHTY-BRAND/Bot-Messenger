module.exports.config = {
	name: "pickupline",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "random pickuplines for ppl",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/pickuplines`);
  var morse = res.data.pickupline;
return api.sendMessage(`${morse}`, event.threadID, event.messageID)
}