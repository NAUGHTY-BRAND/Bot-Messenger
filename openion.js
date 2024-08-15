module.exports.config = {
	name: "Openion",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿" ,
	description: "showerthoughts",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/wyr`);
var ops2 = res.data.ops2;
var ops1 = res.data.ops1;
return api.sendMessage(`ops1: ${ops1}\n\nops2: ${ops2}`, event.threadID, event.messageID)
}
