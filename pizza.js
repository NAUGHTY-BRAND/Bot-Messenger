const fs = require("fs");

module.exports.config = {

	name: "Pizza😋",

    version: "1.0.1",

	hasPermssion: 0,

	credits: "𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙", 

	description: "no prefix",

	commandCategory: "No command marks needed",

	usages: "ADMIN INFO",

    cooldowns: 1, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

	var { threadID, messageID } = event;

	if (event.body.indexOf("Pizza")==0 || (event.body.indexOf("pizza")==0 || (event.body.indexOf("Bot pizza do")==0 || (event.body.indexOf("Bot pizza bana ka da")==0)))) {

		var msg = {

				body: "😋-𝙇𝙤 𝙋𝙞𝙯𝙯𝙖 𝙆𝙝𝙖𝙤 𝙏𝙪𝙢 𝘽𝙝𝙞 𝙆𝙞𝙖 𝙔𝙖𝙖𝙙 𝙆𝙖𝙧𝙤 𝙂𝙖-🍕",

				attachment: fs.createReadStream(__dirname + `/noprefix/PIZZA.jpg`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }