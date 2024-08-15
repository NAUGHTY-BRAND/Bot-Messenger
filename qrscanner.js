module.exports.config = {
  name: "qrscanner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "Scan Qr Code",
  commandCategory: "Qr",
  usages: "Reply To A Qr Code",
  cooldowns: 0,
  dependencies: {
    "jimp": "",
    "qrcode-reader": "",
    "image-downloader": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const fs = require('fs');
  const jimp = require('jimp');
  const QrCode = require('qrcode-reader');
  const path = __dirname + "/cache/qrcode.png";

  const { threadID, messageID, type, messageReply } = event;
  if (type != "message_reply" || messageReply.attachments.length > 1) return api.sendMessage("[💖]➜ Plz Reply With Qr Code Image You Want To Scan!", threadID, messageID);

  if (messageReply.attachments[0].type == 'photo') {
    await require("image-downloader").image({ url: messageReply.attachments[0].url, dest: path })
    const img = await jimp.read(fs.readFileSync(path));
    const qr = new QrCode();
    const value = await new Promise((resolve, reject) => {
      qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
      qr.decode(img.bitmap);
    });
    return api.sendMessage(`[💖]➜ Here's Your Results By Naughty's Server: ${value.result}`, threadID, messageID);
  }
  return api.sendMessage("[💖]➜ Naughty's Server Failed!", threadID, messageID);
}