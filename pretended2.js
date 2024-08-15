const axios = require("axios");

const config = {
  name: "cai",
  version: "2.0.0",
  hasPermission: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "I Dont Know Try TO Use",
  commandCategory: "Maybe something new - noprefix",
  usages: "cai your question + answer ",
  cooldowns: 0
};

const handleEvent = async function ({ api, event, args, Users, client, __GLOBAL }) {

  if (event.body.indexOf("cai") === 0 || event.body.indexOf("CAI") === 0 || event.body.indexOf("Cai") === 0 || event.body.indexOf("CAi") === 0)  {
    const { threadID, messageID } = event;
    const input = event.body;
    // let iioo = noy.join(" ");
    const message = input.split(" ");
    if (message.length < 2) {
      api.sendMessage("Hello I Am Cai", event.threadID);
    } else {
      try {
        api.sendMessage(`Cai IS Getting Answer ${message.slice(1).join(" ")} --  `, event.threadID);
        const ris = await axios.get(`https://character.samirzyx.repl.co/cai?question=${message.slice(1).join(" ")}&character=doraemon`);
        const result = ris.data.result;
        api.sendMessage(`${result}`, event.threadID);
      } catch (err) {
        console.error(err);
        api.sendMessage("Cai Server Failed Contact Naughty", event.threadID);
      }
    }
  }
};

const run = function ({ api, event, client, __GLOBAL }) {
};

module.exports = { config, handleEvent, run };