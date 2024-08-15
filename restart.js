module.exports.config = {
	name: "+",
	version: "2.0.0",
	hasPermssion: 2,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "Restart Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`༺═──────────═༻\n${global.config.BOTNAME}\n༺═──────────═༻\n 𝘽𝙤𝙩 𝙍𝙚𝙨𝙩𝙖𝙧𝙩 𝙃𝙤 𝙍𝙖𝙝𝙖 𝙃𝙖....\n༺═──────────═༻`, threadID, () => process.exit(1));
}