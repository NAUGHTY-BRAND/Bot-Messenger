module.exports.config = {
	name: "qr",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
	description: "Create Qr Code",
	commandCategory: "Qr",
	usages: "[text]",
	cooldowns: 5,
	dependencies: {
		"qrcode": "",
		"fs-extra": ""
	}
};

module.exports.languages = {
	"vi": {
		"missingInput": "[💖]➜ Please enter input to be able to generate qr code\n\nMade By Naughty"
	},
	"en": {
		"missingInput": "[💖]➜ Please Enter Input To Be Able To Generate Qr Code\n\nMade By Naughty"
	}
}

module.exports.run = async function({ api, event, args, getText }) {
	const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"]
	const text = args.join(" ")
	if(!text) return api.sendMessage(getText("missingInput"),event.threadID);
	var opt = { errorCorrectionLevel: 'H', type: 'image/png', quality: 0.3, scale: 50, margin: 1, color:{ dark: '#000000', light: '#ffffff' } };
	 api.sendTypingIndicator(event.threadID, () => global.nodemodule["qrcode"].toFile(__dirname + '/cache/qr.png', text, opt, (err) => {
		if (err) return err;
		api.sendMessage({
			attachment: createReadStream(__dirname + '/cache/qr.png')
		},event.threadID, () => unlinkSync(__dirname + '/cache/qr.png'), event.messageID);
	}))
}
