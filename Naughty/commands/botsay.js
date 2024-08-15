module.exports.config = {
	name: "botsay",
	version: "1.1.1",
	hasPermssion: 2,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "CHOOSE WHAT BOT SAY",
	commandCategory: "Imitation",
	usages: "[text/message/chat]",
	cooldowns: 4
};

module.exports.run = async ({ api, event,args }) => {
 var say = args.join(" ")
	if (!say) api.sendMessage("MESSAGE TEARA BAAP LIKHAY GA 🥵", event.threadID, event.messageID)
	else api.sendMessage(`${say}`, event.threadID, event.messageID);
}
