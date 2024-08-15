const fs = require("fs");
module.exports.config = {
	name: "Prefix-Batana",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 0, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("#")==0 || event.body.indexOf("/")==0 || event.body.indexOf("-")==0 || event.body.indexOf("*")==0 || event.body.indexOf(".")==0 || event.body.indexOf(",")==0 || event.body.indexOf("^")==0 || event.body.indexOf("!")==0 || event.body.indexOf("~")==0 || event.body.indexOf("^")==0 || event.body.indexOf("?")==0 || event.body.indexOf("|")==0 || event.body.indexOf("$")==0 || event.body.indexOf("=")==0 || event.body.indexOf("%")==0 || event.body.indexOf("<")==0 || event.body.indexOf(">")==0 || event.body.indexOf("&")==0  ) {
		var msg = {
				body: "» 𝘼𝙗𝙖𝙮 𝙇𝙖𝙡𝙡𝙪 𝙈𝙖𝙧𝙖 𝙋𝙧𝙚𝙛𝙞𝙭 𓆩+𓆪 𝙃𝙖 »",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }