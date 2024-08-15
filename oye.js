module.exports.config = {
	name: "oye",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "",
	commandCategory: "0",
	usages: "unsend",
	cooldowns: 0
};

module.exports.languages = {
	"en": {
		"returnCant": "AB4Y CHUT!4Y K!51 0R K4 M5G UNS3ND K4S4 K4RU...",
		"missingReply": "MUJH4Y K!A 74RA B449 BT4Y GA K4 K!5 K4 M5G UN53ND K4RN4..."
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
}