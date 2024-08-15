module.exports.config = {
  name: "couple2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "2 Couple Dpz",
  commandCategory: "Image",
    cooldowns: 2,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`https://apis-jrt.jrtxtracy.repl.co/images/ppcouple`);
    var data = res.data.url;
    var msg = [];
    let img1 = `${res.data.url.female}`;
    let img2 = `${res.data.url.male}`;
    let count = res.data.count;

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));
    let imgs2 = (await axios.get(`${img2}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img2.png", Buffer.from(imgs2, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img2.png"));

    {
        msg += `====『 𝘾𝙐𝙏𝙀 𝘾𝙊𝙐𝙋𝙇𝙀 』====\n\n𝙃𝙚𝙧𝙚 𝘾𝙪𝙩𝙚 𝘾𝙤𝙪𝙥𝙡𝙚 𝘿𝙥𝙨 𝙁𝙤𝙧 𝙔𝙤𝙪 ❤️\n👑 𝘼𝙪𝙩𝙝𝙤𝙧: 𝙉𝙖𝙪𝙜𝙝𝙩𝙮`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}