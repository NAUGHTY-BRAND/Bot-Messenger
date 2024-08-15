module.exports.config = {
    name: "speedtest",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
    description: "Test network speed",
    commandCategory: "system",
    cooldowns: 0,
    dependencies: {
		"fast-speedtest-api": ""
	}
};

module.exports.run = async function({ api, event }) {
	try {
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		}); 
		const resault = await speedTest.getSpeed();
		return api.sendMessage(
			"Result" + 
			"\n- Speed: " + resault + " Mbps",
			event.threadID, event.messageID
		);
	}
	catch {
		return api.sendMessage("Can't speedtest right now, try again later!", event.threadID, event.messageID);
	}
}