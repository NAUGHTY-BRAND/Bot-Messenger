exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "On Bot",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Main Aagya\nOn Bot ",event.threadID, () =>process.enter(