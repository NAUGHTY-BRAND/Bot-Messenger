const fs = require("fs");

module.exports.config = {

	name: "hii",

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

	if (event.body.indexOf("Hi")==0 || (event.body.indexOf("Hello")==0 || (event.body.indexOf("hlo")==0 || (event.body.indexOf("hi")==0)))) {

		var msg = {

				body: "",

				attachment: fs.createReadStream(__dirname + `/noprefix/Hi.gif`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }