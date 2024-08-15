module.exports.config = {
	name: "setexp",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "change the expien of yourself or the person being tagged",
	commandCategory: "System",
	usages: "[Tag]",
	cooldowns: 5,
	info: [
		{
			key: 'Tag',
			prompt: 'Leave blank or tag someone, you can tag more than one person',
			type: 'Văn Bản',
			example: '@Mirai-chan'
		}
	]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users}) {
var mention = Object.keys(event.mentions)[0];
    var prefix = ";"
    var {body} = event;
    var kong = 0;
    			var content = body.slice(prefix.length + 9, body.length);
			var sender = content.slice(0, content.lastIndexOf(" "));
			var expSet = content.substring(content.lastIndexOf(" ") + 1);
    			if (args[0]=='me'){
    			 return api.sendMessage(`𝗧𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘁𝗵𝗮𝘆 đ𝗼̂̉𝗶 𝘀𝗼̂́ 𝗲𝘅𝗽 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗵𝗮̀𝗻𝗵 ${expSet} 🥇`, event.threadID, async() => {await Currencies.setData(event.senderID, {exp: parseInt(expSet)})}, event.messageID);
			}
			else if(args[0]=="del"){
if (args[1] == 'me'){
			var s = event.senderID;
			const expme =(await Currencies.getData(event.senderID)).exp;
			api.sendMessage(`✅Removed all your exp\nDeleted exp is ${expme}.`, event.threadID, async() => {await Currencies.setData(event.senderID, {exp: parseInt(kong)})});
		}	
		else if (Object.keys(event.mentions).length == 1) {
var mention = Object.keys(event.mentions);
		const expdel = (await Currencies.getData(mention)).exp;
		api.sendMessage(`✅Removed all exp of ${event.mentions[mention].replace("@", "")}\nThe number of exp to remove is ${expdel}.`, event.threadID, async() => {await Currencies.setData(mention, {exp: parseInt(kong)})});
		}
		
		else return	api.sendMessage("sai cú pháp", event.threadID, event.messageID);
		}
			else if (Object.keys(event.mentions).length == 1) {
			return api.sendMessage({
				body: (`Changed 's exp ${event.mentions[mention].replace("@", "")} Wall ${expSet}`),
				mentions: [{
					tag: event.mentions[mention].replace("@", ""),
					id: parseInt(mention)
				}]
			}, event.threadID, async () => {await Currencies.setData(mention, {exp: parseInt(expSet)})});
		}
		else if(args[0]=="UID"){
		var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`Changed 's exp ${nameeee} Wall ${cut}`, event.threadID, async() => {await Currencies.setData(id, {exp: parseInt(cut)})}, event.messageID);

		}
else {
	api.sendMessage("syntax error", event.threadID, event.messageID)
	}
}