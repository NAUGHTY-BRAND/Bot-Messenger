const fs = require("fs");

module.exports.config = {

	name: "Chocolate",

    version: "7.8.6",

	hasPermssion: 0,

	credits: "𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙", 

	description: "no prefix",

	commandCategory: "No command marks needed",

	usages: "ADMIN INFO",

    cooldowns: 1, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

	var { threadID, messageID } = event;

	if (event.body.indexOf("Chocolate")==0 || (event.body.indexOf("chocolate")==0 || (event.body.indexOf("Choklate")==0 || (event.body.indexOf("Chocklate")==0)))) {

		var msg = {

				body: "💎-𝙇𝙤 𝘾𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚 𝙆𝙝𝙖𝙤-🍫",

				attachment: fs.createReadStream(__dirname + `/noprefix/CHOCOLATE.jpg`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }