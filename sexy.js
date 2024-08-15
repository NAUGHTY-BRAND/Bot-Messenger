module.exports.config = {
  name: "sexy",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "Random Video",
  commandCategory: "Random-img",
  usages: "sexy",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    axios.get('https://docs-api.jrtxtracy.repl.co/nsfw/gaisexy?apikey=JRTvip_2200708248').then(res => {
    let callback = function () {
          api.sendMessage({
            body : ``,
            attachment: fs.createReadStream(__dirname + '/cache/6muicc.jpg')
          }, event.threadID,(err, info) => setTimeout(() => api.unsendMessage(info.messageID), 5000), event.messageID, () => fs.unlinkSync(__dirname + '/cache/6muicc.jpg'), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/6muicc.jpg')).on("close", callback);
      })
}