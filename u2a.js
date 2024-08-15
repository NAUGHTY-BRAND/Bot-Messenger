const axios = require("axios");

const config = {
  name: "u2a",
  version: "0.0.1",
  hasPermission: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "( 𝘼𝙥𝙥𝙡𝙚 𝙎𝙞𝙧𝙞 )",
  commandCategory: "Amazon.com",
  usages: "get asin from amazon.com upc",
  cooldowns: 0
};

const handleEvent = async function ({ api, event, client, __GLOBAL }) {

  if (event.body.indexOf("u2a") === 0 || event.body.indexOf("asin") === 0 || event.body.indexOf("amazon") === 0 || event.body.indexOf("upc") === 0)  {
    const { threadID, messageID } = event;
    const input = event.body;
    const message = input.split(" ");

    if (message.length < 2) {
      api.sendMessage("𝖧𝖾𝗅𝗅𝗈👋 𝖨'𝖺𝗆 𝖲𝗂𝗋𝗂 5.6 𝗉𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗆𝖾 𝖺 (𝖰𝗎𝖾𝗌𝗍𝗂𝗈𝗇)..", event.threadID);
    } else {
      try {
        api.sendMessage(`🔍 | 𝘈𝘯𝘴𝘸𝘦𝘳𝘪𝘯𝘨...`, event.threadID);
        const ris = await axios.get(`https://api.rainforestapi.com/request?api_key=BF23B0F63A4E4339977B77C86FFE3AF1&type=product&gtin=${message.slice(1).join(" ")}&amazon_domain=amazon.com`);
        const result = ris.data.product.asin;
        const result2 = ris.data.request_metadata.amazon_url;
        api.sendMessage(`Asin: ${result}\nAmazon_us_link: ${result2}\n\n༺═─────────═༻\n𝘛𝘩𝘪𝘴 𝘉𝘰𝘵 𝘐𝘴 𝘗𝘳𝘰𝘵𝘦𝘤𝘵𝘦𝘥 𝘉𝘺 𝘕𝘢𝘶𝘨𝘩𝘵𝘺\n༺═─────────═༻`, event.threadID);
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