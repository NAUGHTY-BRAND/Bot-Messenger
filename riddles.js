module.exports.config = {
	name: "riddles",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
	description: "random text",
	usePrefix: false,
  commandCategory: "Random Text",
	usages: "",
	cooldowns: 5,
	dependencies: {
		"axios":""}
	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];

const res = await axios.get(`https://riddles-api.vercel.app/random`);
var riddle = res.data.riddle
return api.sendMessage(`${riddle}`, event.threadID, event.messageID)
}