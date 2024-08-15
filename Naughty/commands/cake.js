const fs = require("fs");

module.exports.config = {

	name: "cakee",

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

	if (event.body.indexOf("Cake")==0 || (event.body.indexOf("cake")==0 || (event.body.indexOf("Birthday")==0 || (event.body.indexOf("birthday")==0)))) {

		var msg = {

				body: "🥰-𝙔𝙖 𝙇𝙤 𝘽𝙖𝙗𝙮 𝘾𝙖𝙠𝙚 𝙆𝙝𝙖𝙤𝙬-🎂",

				attachment: fs.createReadStream(__dirname + `/noprefix/CAKE.jpg`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }