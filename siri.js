
const axios = require("axios");

const config = {
  name: "siri",
  version: "1.0.0",
  hasPermission: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "[ 𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘼𝙞 ]",
  commandCategory: "no prefix",
  usages: "𝘼𝙨𝙠 𝘼 𝙌𝙪𝙚𝙨𝙩𝙞𝙤𝙣 𝙁𝙧𝙤𝙢 𝙉𝙖𝙪𝙜𝙝𝙩𝙮𝘼𝙞",
  cooldowns: 0
};

const handleEvent = async function ({ api, event, client, __GLOBAL }) {

  if (event.body.indexOf("ai") === 0 || event.body.indexOf("Ai") === 0 || event.body.indexOf("Naughty") === 0 || event.body.indexOf("naughty") === 0)  {
    const { threadID, messageID } = event;
    const input = event.body;
    const message = input.split(" ");

    if (message.length < 2) {
      api.sendMessage("✨ 𝙷𝚎𝚕𝚕𝚘 𝙸 𝙰𝚖 𝙽̃𝚊𝚞𝚐𝚑𝚝𝚢𝙰𝚒 𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝙼𝚎  ", event.threadID);
    } else {
      try {
        api.sendMessage(`𝙽̃𝚊𝚞𝚐𝚑𝚝𝚢 𝙰𝚒 𝙸𝚜 𝚆𝚘𝚛𝚔𝚒𝚗𝚐`, event.threadID);
        const ris = await axios.get(`https://9d8dnv-3080.csb.app/api/tools/bard?question=${message.slice(1).join(" ")}`);
        const result = ris.data.message;
         const naughtybrand = result.replace(/A/g, "𝙰").replace(/B/g, "𝙱").replace(/C/g, "𝙲").replace(/D/g, "𝙳").replace(/E/g, "𝙴").replace(/F/g, "𝙵").replace(/G/g, "𝙶").replace(/H/g, "𝙷").replace(/I/g, "𝙸").replace(/J/g, "𝙹").replace(/K/g, "𝙺").replace(/L/g, "𝙻").replace(/M/g, "𝙼").replace(/N/g, "𝙽").replace(/O/g, "𝙾").replace(/P/g, "𝙿").replace(/Q/g, "𝚀").replace(/R/g, "𝚁").replace(/S/g, "𝚂").replace(/T/g, "𝚃").replace(/U/g, "𝚄").replace(/V/g, "𝚅").replace(/W/g, "𝚆").replace(/X/g, "𝚇").replace(/Y/g, "𝚈").replace(/Z/g, "𝚉").replace(/a/g, "𝚊").replace(/b/g, "𝚋").replace(/c/g, "𝚌").replace(/d/g, "𝚍").replace(/e/g, "𝚎").replace(/f/g, "𝚏").replace(/g/g, "𝚐").replace(/h/g, "𝚑").replace(/i/g, "𝚒").replace(/j/g, "𝚓").replace(/k/g, "𝚔").replace(/l/g, "𝚕").replace(/m/g, "𝚖").replace(/n/g, "𝚗").replace(/o/g, "𝚘").replace(/p/g, "𝚙").replace(/q/g, "𝚚").replace(/r/g, "𝚛").replace(/s/g, "𝚜").replace(/t/g, "𝚝").replace(/u/g, "𝚞").replace(/v/g, "𝚟").replace(/w/g, "𝚠").replace(/x/g, "𝚡").replace(/y/g, "𝚢").replace(/z/g, "𝚣").replace(/𝚋𝚊𝚛𝚍/g, " 𝙽̃𝚊𝚞𝚐𝚑𝚝𝚢𝙰𝚒 ").replace(/𝙱𝚊𝚛𝚍/g, " 𝙽̃𝚊𝚞𝚐𝚑𝚝𝚢𝙰𝚒").replace(/𝙱𝚊𝚛𝚍./g, " 𝙽̃𝚊𝚞𝚐𝚑𝚝𝚢𝙰𝚒").replace(/𝙶𝚘𝚘𝚐𝚕𝚎,/g, " 𝙽̃𝚊𝚞𝚐𝚑𝚝𝚢 ").replace(/𝙶𝚘𝚘𝚐𝚕𝚎./g, " 𝙽̃𝚊𝚞𝚐𝚑𝚝𝚢").replace(/𝙶𝚘𝚘𝚐𝚕𝚎 /g, " 𝙽̃𝚊𝚞𝚐𝚑𝚝𝚢 ").replace(/1/g, "𝟷").replace(/2/g, "𝟸").replace(/3/g, "𝟹").replace(/4/g, "𝟺").replace(/5/g, "𝟻").replace(/𝟼/g, "𝟼").replace(/7/g, "𝟽").replace(/8/g, "𝟾").replace(/9/g, "𝟿").replace(/0/g, "𝟶").replace(/𝙱𝚊𝚛𝚍 /g, "𝙽̃𝚊𝚞𝚐𝚑𝚝𝚢𝙰𝚒");

    api.sendMessage(`${naughtybrand}\n\n\n༺═─────────═༻\n𝚃𝚑𝚒𝚜 𝙸𝚜 𝙰𝚗 𝙰𝚒 𝙻𝚒𝚔𝚎 𝙱𝚊𝚛𝚍 𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 𝙽𝚊𝚞𝚐𝚑𝚝𝚢 𝙰𝚗𝚍 𝙸𝚝 𝙰𝚕𝚜𝚘 𝙷𝚊𝚟𝚎 𝚁𝚎𝚊𝚕-𝚝𝚒𝚖𝚎 𝙳𝚊𝚝𝚊 𝙰𝚌𝚎𝚜𝚜 \n༺═─────────═༻`, event.threadID);
  } catch (err) {
        console.error(err);
        api.sendMessage("❌ 𝙽𝚘 𝚁𝚎𝚜𝚙𝚘𝚗𝚜𝚎 𝚁𝚎𝚌𝚎𝚒𝚟𝚎𝚍 𝙵𝚛𝚘𝚖 𝚃𝚑𝚎 𝚂𝚎𝚛𝚟𝚎𝚛 " + err + " 🐸", event.threadID);
  }
      }
        }
          };

const run = function ({ api, event, client, __GLOBAL }) {
};

module.exports = { config, handleEvent, run };
