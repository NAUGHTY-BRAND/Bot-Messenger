const fs = require("fs");

module.exports.config = {

	name: "Naughty",

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

	if (event.body.indexOf("Admin")==0 || (event.body.indexOf("admin")==0 || (event.body.indexOf("Owner")==0 || (event.body.indexOf("owner")==0)))) {

		var msg = {

				body: "✨-𝙈𝙮 𝙊𝙬𝙣𝙚𝙧 𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙-🙂",

				attachment: fs.createReadStream(__dirname + `/noprefix/NAUGHTY.jpg`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }