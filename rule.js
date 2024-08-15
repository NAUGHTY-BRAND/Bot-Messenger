this.config = {    
  name: "rules",
  version: "1.0.0",
  author: {
    name: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿", 
    contacts: ""
  },
  cooldowns: 5,
  role: 0,
  shortDescription: ,
  longDescription: "Tạo / xem / thêm / sửa / xóa nội quy nhóm của bạn",
  category: "Box chat",
  guide: "{prefix}rules [add | -a] <nội quy muốn thêm>: thêm nội quy cho nhóm"
       + "\n{prefix}rules: xem nội quy của nhóm"
       + "\n{prefix}rules [edit | -e] <n> <nội dung sau khi sửa>: chỉnh sửa lại nội quy thứ n"
       + "\n{prefix} [delete | -d] <n>: xóa nội quy theo số thứ tự thứ n"
       + "\n{prefix}rules [remove | -r]: xóa tất cả nội quy của nhóm"
       + "\n"
       + "\n-Ví dụ:"
       + "\n +{prefix}rules add không spam"
       + "\n +{prefix}rules -e 1 không spam tin nhắn trong nhóm"
       + "\n +{prefix}rules -r"
};

module.exports = {
  config: this.config,
  start: async function({ api, globalGoat, args, download, message, event, threadsData }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    
    const nameCommand = require(module.filename).name;
    const { senderID, threadID, messageID } = event;
    
    const pathImgRules = __dirname + "/database/rules.png";
    if (!fs.existsSync(pathImgRules)) await download("https://github.com/ntkhang03/resources-goat-bot/raw/master/image/rule.png", pathImgRules);
    var type = args[0];
    var dataOfThread = (await threadsData.getData(threadID)).data;
    if (!dataOfThread.rules) {
      dataOfThread.rules = [];
      await threadsData.setData(threadID, {data: dataOfThread})
    }
    var rulesOfThread = dataOfThread.rules || [];
    if (!type) {
      var msg = "";
      var i = 1;
      for (let rules of rulesOfThread) {
        msg += `${i++}. ${rules}\n`;
      }
      message.reply({ body: msg || "Nhóm này chưa tạo bất kỳ nội quy nào", attachment: fs.createReadStream(pathImgRules)});
    }
    else if (type == "add" || type == "-a") {
      if (!args[1]) return message.SyntaxError(nameCommand);
      rulesOfThread.push(args.slice(1).join(" "));
      return await threadsData.setData(threadID, { data: dataOfThread }, (err) => {
        if (err) return message.reply(err.name + "\n" + err.message);
        message.reply(`Đã thêm nội quy mới cho nhóm`);
      });
    }
    else if (type == "delete" || type == "-d") {
      if (!args[1] || args[1] != "number") return message.SyntaxError(nameCommand);
      rulesOfThread.splice(args[1] - 1, 1);
      return await threadsData.setData(threadID, { data: dataOfThread }, (err) => {
        if (err) return message.reply(err.name + "\n" + err.message);
        message.reply(`Đã xóa nội quy thứ ${args[1]} của nhóm`);
      })
    }
    else if (type == "remove" || type == "-r") {
      rulesOfThread = [];
      return await threadsData.setData(threadID, { data: dataOfThread }, (err) => {
        if (err) return message.reply(err.name + "\n" + err.message);
        message.reply(`Đã xóa toàn bộ nội quy của nhóm`);
      })
    }
  }
};
