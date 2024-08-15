module.exports.config = {
	name: "approve",
	version: "7.8.6",
	hasPermssion: 2,
	credits: "FARIS-ALI",
	description: "Approve The Box",
	commandCategory: "Admin",
    cooldowns: 0
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const dataPending = __dirname + "/cache/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
  switch (type) {
        case "pending": {
          switch (body) {
                case `A`: {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`•.:°❀×═════════×❀°:.•
𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝘼𝙥𝙥𝙧𝙤𝙫𝙚𝙙 𝘽𝙤𝙭. 
•.:°❀×═════════×❀°:.•
  ${idBox}
•.:°❀×═════════×❀°:.•`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
        }
      }
    }
  }
module.exports.run = async ({ event, api, args, Threads, handleReply, Users }) => {
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let msg = "";
  var lydo = args.splice(2).join(" ");
  let idBox = (args[0]) ? args[0] : threadID;
        if (args[0] == "list" || args[0] == "l") {
    	msg = `•.:°❀×═════════×❀°:.•

𝘽𝙤𝙭𝙚𝙨 𝙏𝙝𝙖𝙩 𝘼𝙧𝙚 𝘼𝙥𝙥𝙧𝙤𝙫𝙚𝙙. 

•.:°❀×═════════×❀°:.•

${data.length}

•.:°❀×═════════×❀°:.•`;
    	let count = 0;
    	for (e of data) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "a",
        })
    }, messageID);
        }
     else if (args[0] == "pending" || args[0] == "p") {
    	msg = `•.:°❀×═════════×❀°:.•

𝘽𝙤𝙭𝙚𝙨 𝙏𝙝𝙖𝙩 𝙉𝙚𝙚𝙙 𝘼𝙥𝙥𝙧𝙤𝙫𝙖𝙡. 

•.:°❀×═════════×❀°:.•

${dataP.length}

•.:°❀×═════════×❀°:.•\n`;
    	let count = 0;
    	for (e of dataP) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "pending",
        })
    }, messageID);
     }
       else if (args[0] == "help" || args[0] == "h") {
         const tst = (await Threads.getData(String(event.threadID))).data || {};
  const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
  const nmdl = this.config.name
  const cre = this.config.credits
        return api.sendMessage(`•.:°❀×═════════×❀°:.•
1⏤͟͟͞͞★       𝘼𝙥𝙥𝙧𝙤𝙫𝙚
•.:°❀×═════════×❀°:.•
2⏤͟͟͞͞★        𝙡𝙞𝙨𝙩
•.:°❀×═════════×❀°:.•
3⏤͟͟͞͞★       𝙥𝙚𝙣𝙙𝙞𝙣𝙜
•.:°❀×═════════×❀°:.•
4⏤͟͟͞͞★        𝙙𝙚𝙡
•.:°❀×═════════×❀°:.•
   𝙈𝙖𝙙𝙚 𝘽𝙮 ${cre}
•.:°❀×═════════×❀°:.•`, threadID, messageID);
       }
      
    else if (args[0] == "del" || args[0] == "d") {
    	idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage(`•.:°❀×═════════×❀°:.•

                                                              𝙏𝙝𝙞𝙨 𝙄𝙨 𝙉𝙤𝙩 𝘼 𝙉𝙪𝙢𝙗𝙚𝙧 

                                                         •.:°❀×═════════×❀°:.•`, threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage(`•.:°❀×═════════×❀°:.•

 𝙏𝙝𝙞𝙨 𝘽𝙤𝙭 𝙄𝙨𝙣'𝙩 𝘼𝙥𝙥𝙧𝙤𝙫𝙚𝙙

•.:°❀×═════════×❀°:.•`, threadID, messageID);
      api.sendMessage(`•.:°❀×═════════×❀°:.•

𝙔𝙤𝙪𝙧 𝙂𝙧𝙤𝙪𝙥 𝙃𝙖𝙨 𝘽𝙚𝙚𝙣 𝙍𝙚𝙢𝙤𝙫𝙚𝙙 𝙁𝙧𝙤𝙢 𝙏𝙝𝙚 𝙇𝙞𝙨𝙩 𝙊𝙛 𝘼𝙥𝙥𝙧𝙤𝙫𝙚𝙙 𝙂𝙧𝙤𝙪𝙥𝙨. 

•.:°❀×═════════×❀°:.•

 𝙍𝙚𝙖𝙨𝙤𝙣. 
               ${lydo}

•.:°❀×═════════×❀°:.•`, idBox);
    	api.sendMessage(`•.:°❀×═════════×❀°:.•

𝙏𝙝𝙞𝙨 𝘽𝙤𝙭 𝙍𝙚𝙢𝙤𝙫𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙮 𝙁𝙧𝙤𝙢 𝙏𝙝𝙚 𝙇𝙞𝙨𝙩 𝙊𝙛 𝘼𝙥𝙥𝙧𝙤𝙫𝙚𝙙 𝘽𝙤𝙭. 

•.:°❀×═════════×❀°:.•`, threadID, () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage(`•.:°❀×═════════×❀°:.•

𝙏𝙝𝙚 𝙄𝘿 𝙔𝙤𝙪 𝙀𝙣𝙩𝙚𝙧𝙚𝙙 𝙄𝙨𝙣'𝙩 𝙑𝙖𝙡𝙞𝙙

•.:°❀×═════════×❀°:.•`, threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`•.:°❀×═════════×❀°:.•

𝙏𝙝𝙞𝙨 𝘽𝙤𝙭 𝘼𝙡𝙧𝙚𝙖𝙙𝙮 𝘼𝙥𝙥𝙧𝙤𝙫𝙚𝙙

•.:°❀×═════════×❀°:.•`, threadID, messageID);
   	else api.sendMessage(`•.:°❀×═════════×❀°:.•
       
       𝘾𝙤𝙣𝙜𝙧𝙖𝙩𝙪𝙡𝙖𝙩𝙞𝙤𝙣𝙨

•.:°❀×═════════×❀°:.•

𝙔𝙤𝙪𝙧 𝙂𝙧𝙤𝙪𝙥 𝙃𝙖𝙨 𝘽𝙚𝙚𝙣 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝘼𝙥𝙥𝙧𝙤𝙫𝙚𝙙 𝘽𝙮 𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣. 

•.:°❀×═════════×❀°:.•

𝙉𝙤𝙬 𝙔𝙤𝙪𝙧 𝙂𝙧𝙤𝙪𝙥 𝘾𝙖𝙣 𝙐𝙨𝙚 𝘽𝙤𝙩. 

•.:°❀×═════════×❀°:.•

             𝘼𝙙𝙢𝙞𝙣 𝙄𝘿

•.:°❀×═════════×❀°:.•
   
https://www.facebook.com/100095153642640

•.:°❀×═════════×❀°:.•\n`, idBox, (error, info) => {
   		api.changeNickname(` 〖 ${global.config.PREFIX} 〗 ➺ ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, idBox, global.data.botID);
      const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
   let admID = "100095153642640";    
  
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");  
      
      axios.get('https://anime.apibypriyansh.repl.co/img/anime').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
      api.sendMessage({body: `•.:°❀×═════════×❀°:.•
𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝙎𝙚𝙧𝙫𝙚𝙧 𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙
•.:°❀×═════════×❀°:.•
                  𝘽𝙤𝙩 𝙉𝙖𝙢𝙚
          〖${global.config.BOTNAME}〗
•.:°❀×═════════×❀°:.•
                  𝘽𝙤𝙩 𝙋𝙧𝙚𝙛𝙞𝙭
                    〖${global.config.PREFIX}〗
•.:°❀×═════════×❀°:.•
                  𝘼𝙡𝙡 𝙐𝙨𝙚𝙧𝙨
                    〖${global.data.allUserID.length}〗
•.:°❀×═════════×❀°:.•   
                   𝘼𝙡𝙡 𝙂𝙧𝙤𝙪𝙥𝙨
                    〖${global.data.allThreadID.length}〗
•.:°❀×═════════×❀°:.•
𝙏𝙮𝙥𝙚 ${global.config.PREFIX}𝙝𝙚𝙡𝙥➋ 𝙏𝙤 𝙎𝙚𝙚 𝘼𝙡𝙡 𝘽𝙤𝙩 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨. 
•.:°❀×═════════×❀°:.•
𝙏𝙮𝙥𝙚 ${global.config.PREFIX}𝙞𝙣𝙛𝙤 𝙏𝙤 𝙎𝙚𝙚 𝙈𝙤𝙧𝙚 𝘽𝙤𝙩 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣. 
•.:°❀×═════════×❀°:.•`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
						attachment: fs.createReadStream(__dirname + `/cache/duyet.${ext}`)
					}, idBox,() => fs.unlinkSync(__dirname + `/cache/duyet.${ext}`));
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/duyet.${ext}`)).on("close", callback);
			}) 
      })
   		if (error) return api.sendMessage(`•.:°❀×═════════×❀°:.•

                                        𝙈𝙖𝙠𝙚 𝙎𝙪𝙧𝙚 𝙏𝙝𝙖𝙩 𝙏𝙝𝙚 𝙄𝙙 𝙔𝙤𝙪 𝙀𝙣𝙩𝙚𝙧𝙚𝙙 𝙄𝙨 𝘾𝙤𝙧𝙧𝙚𝙘𝙩 𝘼𝙣𝙙 𝙏𝙝𝙚 𝘽𝙤𝙩 𝙄𝙨 𝙄𝙣 𝙏𝙝𝙚 𝘽𝙤𝙭. 

                                        •.:°❀×═════════×❀°:.•`, threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`•.:°❀×═════════×❀°:.•
𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝘼𝙥𝙥𝙧𝙤𝙫𝙚𝙙 𝘽𝙤𝙭. 
•.:°❀×═════════×❀°:.•
  ${idBox}
•.:°❀×═════════×❀°:.•`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
   	});
  }