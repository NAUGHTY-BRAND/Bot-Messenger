module.exports.config = {
  name: "islamicpic",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
  description: "Random ISLAM photos",
  commandCategory: "Random-IMG",
  usages: "islam",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/CTf0bTJ.jpg",
"https://i.imgur.com/GoRxVOn.jpg",
];
     var callback = () => api.sendMessage({body:`𝘽𝙚𝙖𝙪𝙩𝙮 𝙤𝙛 𝙄𝙨𝙡𝙖𝙢...🦋🦋\n𝙈𝙤𝙙𝙪𝙡𝙚 𝘾𝙤𝙙𝙚 𝘽𝙮 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿...🦋🥀🦋`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };