module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔",
    description: "What Do You Want TO SEE IN DARK?",
    commandCategory: "SYSTEM",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Manila").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Name does not exist";
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"CHABLI MARI";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.hex("#" + random)(`Group Name: ${nameBox}`) + " | " + chalk.hex("#" + random1)(`User Name: ${nameUser}`) + " | " + chalk.hex("#" + random2)(`Content: ${msg}`) + `\n` + chalk.hex("#" + random3)(`[ ${time} ]`) + `\n` + chalk.white(`⊱───────────────────{⋅. ✯ .⋅}───────────────────⊰`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
}