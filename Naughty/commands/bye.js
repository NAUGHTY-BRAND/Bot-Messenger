const fs = require("fs");

module.exports.config = {

	name: "byeee",

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

	if (event.body.indexOf("Good bye")==0 || (event.body.indexOf("Good Bye")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)))) {

		var msg = {

				body: "✨-𝘽𝙮 𝘼𝙡𝙡𝙖𝙝 𝙃𝙖𝙛𝙞𝙯-🙂",

				attachment: fs.createReadStream(__dirname + `/noprefix/bye.gif`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }