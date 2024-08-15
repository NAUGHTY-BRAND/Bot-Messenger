module.exports.config = {
	name: "bio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
	description: "Change Bot's bio",
	commandCategory: "admin",
	usages: "bio [text]",
  cooldowns: 5
   
}
var server = ["𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ"];
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ" + e, event.threadID); return api.sendMessage(`Bio Changed Sucessfully By ${server} Server. \n`+args.join(" "), event.threadID, event.messgaeID)
    }
    )
    }