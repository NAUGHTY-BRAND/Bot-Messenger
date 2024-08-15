const fs = require("fs");

module.exports.config = {

	name: "Fries",

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

	if (event.body.indexOf("Fries")==0 || (event.body.indexOf("Fries")==0 || (event.body.indexOf("Finger Fries")==0 || (event.body.indexOf("Finger fries")==0)))) {

		var msg = {

				body: "🥳-𝙃𝙚𝙧𝙚'𝙨 𝙔𝙤𝙪𝙧 𝙁𝙧𝙞𝙚𝙨-🍟",

				attachment: fs.createReadStream(__dirname + `/noprefix/FRIES.jpg`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }