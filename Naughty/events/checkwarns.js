module.exports.config = {
	name: 'checkwarns',
	eventType: ['log:subscribe'],
	version: '1.0.0',
	credits: '𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿',
	description: 'Listen events',
	dependencies: ''
};

module.exports.run = async function({ api, event, client }) {
	if (event.logMessageType == 'log:subscribe') {
		const fs = require('fs-extra');
		let { threadID, messageID } = event;

		if (!fs.existsSync(__dirname + `/../commands/cache/datawarn.json`)) return;

		var datawarn = JSON.parse(
			fs.readFileSync(__dirname + `/../commands/cache/datawarn.json`)
		);

		var listban = datawarn.banned[threadID];

		const allUserThread = (await api.getThreadInfo(event.threadID))
			.participantIDs;

		for (let info of allUserThread) {
			if (listban.includes(parseInt(info))) {
				api.removeUserFromGroup(parseInt(info), threadID, e => {
					if (e) return api.sendMessage(e, threadID);
					api.sendMessage(
						`[${info}] Can't join the group because I've been banned before`,
						threadID
					);
				});
			}
		}
	}
};