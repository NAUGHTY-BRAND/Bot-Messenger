const fs = require("fs");

module.exports.config = {

	name: "icecream",

    version: "1.0.1",

	hasPermssion: 0,

	credits: "𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙", 

	description: "no prefix",

	commandCategory: "No command marks needed",

	usages: "Iceee",

    cooldowns: 1, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

	var { threadID, messageID } = event;

	if (event.body.indexOf("Icecream")==0 || (event.body.indexOf("icecream")==0 || (event.body.indexOf("Garmi")==0 || (event.body.indexOf("garmi")==0)))) {

		var msg = {

				body: "✨-𝙇𝙤 𝙄𝙘𝙚𝙘𝙧𝙚𝙖𝙢 𝙆𝙝𝙖𝙤𝙬 𝙊𝙧 𝘾𝙤𝙤𝙡 𝘾𝙤𝙤𝙡 𝙃𝙤 𝙅𝙖𝙤-🥶",

				attachment: fs.createReadStream(__dirname + `/noprefix/icecream.jpg`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }