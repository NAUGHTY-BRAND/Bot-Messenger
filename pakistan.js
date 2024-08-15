module.exports.config = {
  name: "pakistan",
  version: "5.7.1",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
  description: "Pakistani Pics",
  commandCategory: "RANDOM IMAGE",
  usages: "MEME",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/vlChxdG.jpeg",
"https://i.imgur.com/CBIW1ka.jpeg",
"https://i.imgur.com/kAx7EQI.jpeg",
"https://i.imgur.com/LTiJK0N.jpeg",
"https://i.imgur.com/EyavF7o.jpeg",
"https://i.imgur.com/ry0GKbn.jpeg",
"https://i.imgur.com/qgTtqfA.jpeg",
"https://i.imgur.com/3clTYXg.jpeg",
"https://i.imgur.com/3QfGxNS.jpeg",
"https://i.imgur.com/3QfGxNS.jpeg",
"https://i.imgur.com/JND5RAl.jpeg",
"https://i.imgur.com/EadcKHn.jpeg",
"https://i.imgur.com/rxpHMWW.jpeg",
"https://i.imgur.com/qZ7C8Zy.jpeg",
"https://i.imgur.com/QUYk3zz.jpeg",
"https://i.imgur.com/0XgxtXu.jpeg",
"https://i.imgur.com/1SNngbj.jpeg",
"https://i.imgur.com/xia4CsQ.jpeg",
"https://i.imgur.com/oLrIJxV.jpeg",
"https://i.imgur.com/5SK1sBm.jpeg"

     ];
     var callback = () => api.sendMessage({body:`⏤͟͟͞͞☆𝘽𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡 𝙄𝙢𝙖𝙜𝙚𝙨 𝙊𝙛 𝙋𝙖𝙠𝙞𝙨𝙩𝙖𝙣 ⁂
    ◈𝘾𝙤𝙙𝙚𝙙 𝘽𝙮 ⍣⃝𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙 ◈`,attachment: fs.createReadStream(__dirname + "/cache/AOV.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/AOV.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/AOV.jpg")).on("close",() => callback());
   };
