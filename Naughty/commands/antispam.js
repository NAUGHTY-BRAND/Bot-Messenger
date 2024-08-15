  module.exports.config = {
    name: "help",
    version: "2.4.6",
    hasPermssion: 0,
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
    description: "The Naughty",
    commandCategory: "Just Good",
    usages: "[Just intro]",
    cooldowns: 4
  };

  module.exports.run = async ({ api, event, args, Threads, Users }) => {
    var naughty = await Users.getNameUser(event.senderID);
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Karachi').format('HHmm');
    let naughty2 = (
    hours > 0001 && hours <= 400 ? "𝙒𝙝𝙮 𝙔𝙤𝙪 𝘿𝙤𝙣𝙩 𝙎𝙡𝙚𝙚𝙥 𝙔𝙚𝙩, 𝙄𝙩𝙨 𝙏𝙤𝙤 𝙇𝙖𝙩𝙚 𝘼𝙩 𝙉𝙞𝙜𝙝𝙩 🤍" : 
    hours > 401  && hours <= 700 ? "𝙀𝙣𝙟𝙤𝙮 𝙔𝙤𝙪𝙧 𝘽𝙧𝙞𝙜𝙝𝙩 𝙈𝙤𝙧𝙣𝙞𝙣𝙜 🤍" :
    hours > 701  && hours <= 1000 ? "𝙂𝙤𝙤𝙙 𝙈𝙤𝙧𝙣𝙞𝙣𝙜 🕗" :
    hours > 1001 && hours <= 1100 ? "𝙂𝙤𝙤𝙙 𝙈𝙤𝙧𝙣𝙞𝙣𝙜 🌄" : 
    hours > 1100 && hours <= 1500 ? "𝙃𝙖𝙫𝙚 𝘼 𝙜𝙤𝙤𝙙 𝘼𝙛𝙩𝙚𝙧𝙣𝙤𝙤𝙣 🕑" : 
    hours > 1501 && hours <= 1800 ? "𝙄𝙩𝙨 𝘼𝙡𝙢𝙤𝙨𝙩 𝙀𝙫𝙚𝙣𝙞𝙣𝙜 𝙀𝙣𝙟𝙤𝙮 𝙞𝙩 🌌" : 
    hours > 1801 && hours <= 2100 ? "𝙀𝙣𝙟𝙤𝙮 𝙔𝙤𝙪𝙧 𝙀𝙫𝙚𝙣𝙞𝙣𝙜 🌆" : 
    hours > 2101 && hours <= 2400 ? "𝙂𝙤𝙤𝙙𝙣𝙞𝙜𝙝𝙩 𝙃𝙖𝙫𝙚 𝙎𝙬𝙚𝙖𝙩 𝘿𝙧𝙚𝙖𝙢𝙨 🌉" : 
    "error");
api.sendMessage(`𝙃𝙞 ${naughty} ${naughty2}\n\n𝙄 𝘼𝙢 𝙉𝙖𝙪𝙜𝙝𝙩𝙮'𝙨 𝘽𝙤𝙩\n\n𝙄𝙛 𝙔𝙤𝙪 𝙬𝙖𝙣𝙩 𝙏𝙤 𝙎𝙚𝙚 𝘼𝙡𝙡 𝘽𝙤𝙩 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 𝙏𝙮𝙥𝙚 +𝙃𝙚𝙡𝙥2`, event.threadID, event.messageID);
   // api.sendMessage(`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`, event.threadID);
  }
