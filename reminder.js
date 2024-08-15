module.exports.config = {
	name: "reminder",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "Reminds you of something at fixed intervals",
	commandCategory: "Tools",
	usages: "[Time] [Text] ",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Users }) {
	const time = args[0];
	const text = args.join(" ").replace(time, "");
	if (isNaN(time)) return api.sendMessage(`The time you enter is not a number!`, event.threadID, event.messageID);
	const display = time > 59 ? `${time / 60} phút` : `${time} giây`;
	api.sendMessage(`I'LL REMIND YOU LATER: ${display}`, event.threadID, event.messageID);
	await new Promise(resolve => setTimeout(resolve, time * 1000));
	var value = await api.getThreadInfo(event.threadID);
	if (!(value.nicknames)[event.userID]) value = (await Users.getData(event.senderID)).name;
	else value = (value.nicknames)[event.senderID]; 
	return api.sendMessage({
	body: `${(text) ? value + ", You have left a message like this:" + text : value + ", I think you asked me to remind you to do something, right?"}`,
		mentions: [{
			tag: value,
			id: event.senderID
		}]
	}, event.threadID, event.messageID);
}
