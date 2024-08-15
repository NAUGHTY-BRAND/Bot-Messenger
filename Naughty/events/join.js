module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {
  var color = ['196241301102133', '169463077092846', '2442142322678320', '234137870477637', '980963458735625', '175615189761153', '2136751179887052', '2058653964378557', '2129984390566328', '174636906462322', '1928399724138152', '417639218648241', '930060997172551', '164535220883264', '370940413392601', '205488546921017', '809305022860427'];
  var clrr = color[Math.floor(Math.random() * color.length)]
	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`〖${global.config.PREFIX}〗 ✦ ${global.config.BOTNAME}`, threadID, api.getCurrentUserID());
   
      api.changeThreadEmoji("🐸", event.threadID);
    
             api.changeThreadColor(`${clrr}`, event.threadID);
  
    return api.sendMessage(`🍒💙•••Ɓ❍ʈ Ƈøɳɳɛƈʈɛɗ•••💞🌿
        
🕊️🌸...Ɦɛɭɭ❍ Ɠɣus Ɱɣ Ɲɑɱɛ Is 🍒💙•••✦⚔️ ʇoᙠ ʎʇɥɓnɐN ⚔️✦•••💞🌿



 ✨💞Ɱɣ Ꭾɽɛfɪᵡ ɪs 〖${global.config.PREFIX}〗


\n\nƬɣƥɛ${global.config.PREFIX}ꞪɛɭᎮ Ƭ❍ søø Ɱɣ Ƈøɱɱɑɳɗ ɭɪsʈ...🤍💫\n

🦋🌸Ƭɣƥɛ${global.config.PREFIX}Ɦɛɭƥ2 (Ɑɭɭ Ƈøɱɱɑɳɗʂ)...☃️💌

${global.config.PREFIX} ɪɳfø (ɑɗɱɪɳ Iɳføɽɱɑʈɪøɳ)👀✍️
...🍫🥀Ɱɣ ❍wɳɛɽ ɪs 𝙉𝙖𝙪𝙜𝙝𝙩𝙮...🕊️☃️

${global.config.PREFIX}🌺🍃Ƈɑɭɭɑɗ føɽ Ɑɳɣ ɪʂʂuɛ 
<<<<<------------------------------>>>>>
A̸N̸D̸ F̸O̸R̸ A̸N̸Y̸ R̸E̸P̸O̸R̸T̸ O̸R̸ C̸O̸N̸T̸A̸C̸T̸ B̸O̸T̸ D̸E̸V̸A̸L̸O̸P̸A̸R̸....💙🍫

]|I{•------» ƒσя ¢σηтα¢т вσт σωηєя «------•}I|[
» https://www.facebook.com/100095153642640

✮☸✮
✮┼💞┼✮
☸🕊️━━•🌸•━━🕊️☸
✮☸✮
✮┼🍫┼✮
☸🎀━━•🧸•━━🎀☸
✮┼🦢┼✮
✮☸✮
☸🌈━━•🤍•━━🌈☸
✮☸✮
✮┼❄️┼✮
┏━🕊️━━❀•°:💙:°•❀━━💞━┓
🌸✦✧✰🍒𝙉𝙖𝙪𝙜𝙝𝙩𝙮🌿✰✧✦🌸  
┗━🕊️━━❀•°:💙:°•❀━━💞━┛\n`, threadID);
	}
	else {
		try {
    const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			
			var mentions = [], nameArray = [], memLength = [], i = 0;
			
    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  
    
				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });
      
				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Ɦɛɭɭ❍ ✦〖 {uName} 〗 ✦\nωεℓ૮σɱε ƭσ ƭɦε ɠ૨σµρ\n      .   *  .·       ✧ •  .            • ✦  . ·   •  .      . *                                                ·     . · *           . ·   .       * ·       . ✧           .  .          .               .       .   *  .·       ✧ •  .            • ✦  . ·   •  .      . *                                                      . ╰•★★  ῳɛƖƈơɱɛ ɬơ ɬɧɛ ɠཞơų℘ ★★•╯ \n╰•★★  {threadName}  ★★•╯\nσ૨ αρ เร ɠ૨σµρ ҡα {soThanhVien} ɱεɱɓε૨ ɦσ🥀🥀\nɛռʝօʏ ӄǟʀօ օʀ ռɛա ʄʀɨɛռɖֆ ɮǟռօ🥀\n✮☸✮\n✮┼💞┼✮\n☸🕊️━━•🌸•━━🕊️☸\n✮☸✮\n✮┼🍫┼✮\n☸🎀━━•🧸•━━🎀☸\n✮┼🦢┼✮\n✮☸✮\n☸🌈━━•🤍•━━🌈☸\n✮☸✮\n✮┼❄️┼✮\n\n┏━🕊️━━❀•°:💙:°•❀━━💞━┓\n🌸✦✧✰🍒𝙉𝙖𝙪𝙜𝙝𝙩𝙮🥀🌿✰✧✦🌸\n┗━🕊️━━❀•°:💙:°•❀━━💞━┛" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

      var link = [
"https://i.imgur.com/v1JE9Ra.jpg",
"https://i.imgur.com/tBrm16Q.jpg",
"https://i.imgur.com/uJt7tvA.jpg",
"https://i.imgur.com/UM5EJ98.jpg",
"https://i.imgur.com/IdWp7xZ.jpg",
"https://i.imgur.com/SBV1YuY.jpg",
"https://i.imgur.com/Df9Mx5o.jpg",
"https://i.imgur.com/JEhfsBE.jpg",
"https://i.imgur.com/lgRAnHg.jpg",
"https://i.imgur.com/2KfqRjL.jpg",
"https://i.imgur.com/Xc8gQod.jpg"
];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
      	    }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
	}
                                                  }