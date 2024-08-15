module.exports.config = {
	name: "thread",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
    description: "Mnage group settings.",
	commandCategory: "box",
	usages: "[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐘𝐎𝐔 𝐂𝐀𝐍 𝐔𝐒𝐄 𝗧𝗛𝗥𝗘𝗔𝗗 𝐓𝐈𝐓𝐋𝐄, 𝐈𝐂𝐎𝐍, 𝐀𝐕𝐀𝐓𝐀𝐑, 𝐓𝐇𝐄𝐌𝐄, 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐈𝐍𝐅𝐎\n\n𝐌𝐀𝐃𝐄 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐍𝐀𝐔𝐆𝐇𝐓𝐘",
	cooldowns: 1,
	dependencies: {
		"request":"",
		"fs-extra":""
}
};

module.exports.run = async({api, event, args}) => {
	const fs = global.nodemodule["fs-extra"];
	const request = global.nodemodule["request"];
	 if (args.length == 0) return api.sendMessage(`[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐘𝐎𝐔 𝐂𝐀𝐍 𝐔𝐒𝐄 𝗧𝗛𝗥𝗘𝗔𝗗 𝐓𝐈𝐓𝐋𝐄, 𝐈𝐂𝐎𝐍, 𝐀𝐕𝐀𝐓𝐀𝐑, 𝐓𝐇𝐄𝐌𝐄, 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐈𝐍𝐅𝐎\n\n𝐌𝐀𝐃𝐄 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐍𝐀𝐔𝐆𝐇𝐓𝐘`, event.threadID, event.messageID);


	if (args[0] == "title") {
var content = args.join(" ");
var c = content.slice(5, 99) || event.messageReply.body;
api.setTitle(`${c}`, event.threadID);
     api.sendMessage(`[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐂𝐇𝐀𝐍𝐆𝐄𝐃 𝐓𝐇𝐄 𝐓𝐇𝐑𝐄𝐀𝐃 𝐈𝐂𝐎𝐍 𝐓𝐎 〖 ${c} 〗`, event.threadID, event.messageID);
 }
	if (args[0] == "icon") {
const name = args[1] || event.messageReply.body;
api.changeThreadEmoji(name, event.threadID);
     api.sendMessage(`[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐂𝐇𝐀𝐍𝐆𝐄𝐃 𝐓𝐇𝐄 𝐓𝐇𝐑𝐄𝐀𝐃 𝐈𝐂𝐎𝐍 𝐓𝐎 〖 ${name} 〗`, event.threadID);

 }
  
if(args[0] == "me"){
	 if (args[1] == "admin") {
		const threadInfo = await api.getThreadInfo(event.threadID)
		const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
		if(!find) api.sendMessage("", event.threadID, event.messageID)
	  else if(!global.config.ADMINBOT.includes(event.senderID)) api.sendMessage("Cunt powers ?", event.threadID, event.messageID)
     else api.changeAdminStatus(event.threadID, event.senderID, true);
     }
} 
if (args[0] == "admin") {

if (args.join().indexOf('@') !== -1){
	 namee = Object.keys(event.mentions)}
else namee = args[1]
if (event.messageReply) {namee = event.messageReply.senderID}

const threadInfo = await api.getThreadInfo(event.threadID)
const findd = threadInfo.adminIDs.find(el => el.id == namee);
const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
const finddd = threadInfo.adminIDs.find(el => el.id == event.senderID);

if (!finddd) return api.sendMessage("[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐂𝐇𝐄𝐄𝐄 𝐒𝐓𝐔𝐏𝐈𝐃!!!", event.threadID, event.messageID);		
if(!find) {api.sendMessage("[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐘𝐎𝐔 𝐒𝐓𝐔𝐏𝐈𝐃 𝐁𝐎𝐓 𝐍𝐄𝐄𝐃 𝐓𝐇𝐑𝐄𝐀𝐃 𝐀𝐃𝐌𝐈𝐍 𝐑𝐈𝐆𝐇𝐓𝐒", event.threadID, event.messageID)}
if (!findd) {api.changeAdminStatus(event.threadID, namee, true);
            api.sendMessage(`[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐀𝐃𝐃𝐄𝐃 𝐀𝐃𝐌𝐈𝐍 𝐒𝐔𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘〖 ${namee} 〗`, event.threadID, event.messageID);
            }
else api.changeAdminStatus(event.threadID, namee, false)
api.sendMessage(`[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐑𝐄𝐌𝐎𝐕𝐄𝐃 𝐀𝐃𝐌𝐈𝐍 𝐒𝐔𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘〖 ${namee} 〗`, event.threadID, event.messageID);}

if (args[0] == "avatar") {

if (event.type !== "message_reply") return api.sendMessage("[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐘𝐎𝐔 𝐍𝐄𝐄𝐃 𝐓𝐎 𝐑𝐄𝐏𝐋𝐘 𝐓𝐎 𝐀 𝐏𝐇𝐎𝐓𝐎 𝐘𝐎𝐔 𝐖𝐀𝐍𝐓 𝐓𝐎 𝐔𝐒𝐄 𝐀𝐒 𝐀 𝐓𝐇𝐑𝐄𝐀𝐃 𝐀𝐕𝐀𝐓𝐀𝐑", event.threadID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐘𝐎𝐔 𝐍𝐄𝐄𝐃 𝐓𝐎 𝐑𝐄𝐏𝐋𝐘 𝐓𝐎 𝐀 𝐏𝐇𝐎𝐓𝐎 𝐘𝐎𝐔 𝐖𝐀𝐍𝐓 𝐓𝐎 𝐔𝐒𝐄 𝐀𝐒 𝐀 𝐓𝐇𝐑𝐄𝐀𝐃 𝐀𝐕𝐀𝐓𝐀𝐑", event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(`[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐏𝐋𝐄𝐀𝐒𝐄 𝐑𝐄𝐏𝐋𝐘 𝐓𝐎 𝐎𝐍𝐋𝐘 𝟏 𝐈𝐌𝐀𝐆𝐄`, event.threadID, event.messageID);
  api.sendMessage("[ 𝗧𝗛𝗥𝗘𝗔𝗗 ] 𝐒𝐔𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐂𝐇𝐀𝐍𝐆𝐄𝐃 𝐓𝐇𝐄 𝐓𝐇𝐑𝐄𝐀𝐃 𝐈𝐌𝐀𝐆𝐄", event.threadID);
	 var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));	
 return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => 
  callback());
      };
if (args[0] == "info") {
		var threadInfo = await api.getThreadInfo(event.threadID);
		let threadMem = threadInfo.participantIDs.length;
	var gendernam = [];
	var gendernu = [];
	var nope = [];
	for (let z in threadInfo.userInfo) {
		var gioitinhone = threadInfo.userInfo[z].gender;

		var nName = threadInfo.userInfo[z].name;

		if (gioitinhone == 'MALE') {
			gendernam.push(z + gioitinhone);
		} else if (gioitinhone == 'FEMALE') {
			gendernu.push(gioitinhone);
		} else {
			nope.push(nName);
		}
	}
	var nam = gendernam.length;
	var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	var listad = '';
	var qtv2 = threadInfo.adminIDs;
	for (let i = 0; i < qtv2.length; i++) {
const infu = (await api.getUserInfo(qtv2[i].id));
const name = infu[qtv2[i].id].name;
		listad += '•' + name + '\n';
	}
	let sex = threadInfo.approvalMode;
	var pd = sex == false ? 'Turn off' : sex == true ? 'Turn on' : 'Kh';
	var pdd = sex == false ? '❎' : sex == true ? '✅' : '⭕';
	 var callback = () =>
				api.sendMessage(
					{
						body: `GC Name: ${threadName}\nGC ID: ${id}\n${pdd} Approve: ${pd}\nEmoji: ${icon}\n-Information:\nTotal ${threadMem} members\nMale ${nam} members \nFemale: ${nu} members\n\nWith ${qtv} Administrators include:\n${listad}\nTotal number of messages: ${sl} msgs.`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());

	}	  
}