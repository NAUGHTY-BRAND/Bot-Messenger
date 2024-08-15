module.exports.config = {
  name: "sex",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "r v",
  commandCategory: "Random-img",
  usages: "sex",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    axios.get('https://docs-api.jrtxtracy.repl.co/nsfw/sex?apikey=JRTvip_2200708248').then(res => {
    let callback = function () {
          api.sendMessage({
            body : ``,
            attachment: fs.createReadStream(__dirname + '/cache/6mui11.jpg')
          }, event.threadID,(err, info) => setTimeout(() => api.unsendMessage(info.messageID), 5000), event.messageID, () => fs.unlinkSync(__dirname + '/cache/6mui11.jpg'), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/6mui11.jpg')).on("close", callback);
      })
}