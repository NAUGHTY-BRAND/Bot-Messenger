module.exports.config = {
	name: "thought",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "showerthoughts",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/showerthoughts`);
var result = res.data.result;
var author = res.data.author;
return api.sendMessage(`Author: ${author}\n\nThoughts: ${result}`, event.threadID, event.messageID)
}
