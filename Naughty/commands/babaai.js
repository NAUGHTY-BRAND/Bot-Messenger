const axios = require("axios");

const config = {
  name: "babaaai",
  version: "1.0.0",
  hasPermission: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "( babaai )",
  commandCategory: "no prefix",
  usages: "...",
  cooldowns: 0
};

const handleEvent = async function ({ api, event, client, __GLOBAL }) {

  if (event.body.indexOf("baba") === 0 || event.body.indexOf("Baba") === 0 || event.body.indexOf("BABA") === 0 || event.body.indexOf("Aiii") === 0)  {
    const { threadID, messageID } = event;
    const input = event.body;
    const message = input.split(" ");

    if (message.length < 2) {
      api.sendMessage("Bol Bachha ,𝙸'𝚖 ai, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗 𝚏𝚘𝚛 𝚢𝚘𝚞𝚛 𝚛𝚎𝚜𝚎𝚊𝚛𝚌𝚑!📝", event.threadID);
    } else {
      try {
        api.sendMessage(`Baba Antar Dhyan KarRahe hai⏳`, event.threadID);
        const ris = await axios.get(`https://hazeyy-api-blackbox.kyrinwu.repl.co/ask?q=${message.slice(1).join(" ")}`);
        const result = ris.data.message;
        api.sendMessage(`🦊 ${result}\n`, event.threadID);
      } catch (err) {
        console.error(err);
        api.sendMessage("𝖳𝗁𝖾 𝖠𝖯𝖨 𝗅𝗂𝗇𝗄 𝗒𝗈𝗎 𝗉𝗋𝗈𝗏𝗂𝖽𝖾𝖽 𝗂𝗌 𝗇𝗈𝗍 𝗐𝗈𝗋𝗄𝗂𝗇𝗀😿, 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋...", event.threadID);
      }
    }
  }
};

const run = function ({ api, event, client, __GLOBAL }) {
};

module.exports = { config, handleEvent, run };