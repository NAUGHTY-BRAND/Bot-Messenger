module.exports.config = {
	name: "help2",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "SEE BOT ALL COMMANDS",
	commandCategory: "system",
	usages: "[Name module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 30
	}
};
module.exports.languages = {
	"en": {
		"moduleInfo": "『 %1 』 ➬\n%2\n\n➫ 𝙐𝙨𝙖𝙜𝙚: %3\n➫ 𝘾𝙖𝙩𝙚𝙜𝙤𝙧𝙮: %4\n➫ 𝙒𝙖𝙞𝙩𝙞𝙣𝙜 𝙏𝙞𝙢𝙚: %5 𝙎𝙚𝙘𝙤𝙣𝙙𝙨\n➫ 𝙋𝙚𝙧𝙢𝙞𝙨𝙨𝙞𝙤𝙣: %6\n\n☞ 𝘾𝙤𝙢𝙢𝙖𝙣𝙙 𝘾𝙤𝙙𝙚 𝘽𝙮 𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙 ☜",
		"helpList": '『 𝙏𝙝𝙚𝙧𝙚 𝙖𝙧𝙚 %1 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙨 𝙤𝙣 𝙩𝙝𝙞𝙨 𝙗𝙤𝙩, 𝙐𝙨𝙚: "%2𝙝𝙚𝙡𝙥 𝙣𝙖𝙢𝙚𝘾𝙤𝙢𝙢𝙖𝙣𝙙" 𝙩𝙤 𝙠𝙣𝙤𝙬 𝙝𝙤𝙬 𝙩𝙤 𝙪𝙨𝙚! 』',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "cmd" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 9999;
    let i = 0;
    let msg = "  𝘼𝙡𝙡 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 𝙇𝙞𝙨𝙩...🦋🥀\n༺═─────────────═༻\n";
    
    for (var [name, value] of (commands)) {
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
  
    for (let item of returnArray) msg += `╭┈❥『${++i}』 ${prefix} ${item}\n`;
    const randomText = ["𝘽𝙤𝙩 𝘽𝙮 𝙉𝙖𝙪𝙜𝙝𝙩𝙮"];
    const text = `༺═─────────────═༻\n🥀 𝙏𝙝𝙞𝙨 𝘽𝙤𝙩 𝙄𝙨 𝘼 𝙋𝙧𝙤𝙟𝙚𝙘𝙩 𝙤𝙛 𝙉𝙖𝙪𝙜𝙝𝙩𝙮...🦋🥀\n༺═─────────────═༻\n🥀 𝘼𝙫𝙖𝙡𝙞𝙖𝙗𝙡𝙚 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨...{${arrayInfo.length}\n༺═─────────────═༻   ${randomText}\n༺═─────────────═༻\n`;
    return api.sendMessage(msg  + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 10000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};