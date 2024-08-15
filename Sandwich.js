const fs = require("fs");

module.exports.config = {

	name: "Sandwich",

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

	if (event.body.indexOf("Sandwich")==0 || (event.body.indexOf("sandwich")==0 || (event.body.indexOf("Sandwiches")==0 || (event.body.indexOf("Hungry")==0)))) {

		var msg = {

				body: "🤗-𝙀𝙣𝙟𝙤𝙮-🤞",

				attachment: fs.createReadStream(__dirname + `/noprefix/SANDWICH.jpg`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }