const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  var credit = ["𝘾𝙧𝙚𝙙𝙞𝙩𝙨 ⃝❥𝙉𝙖𝙪𝙜𝙝𝙩𝙮𓆪᭄"];
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("LLLL");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
   const naughtbrand = name.replace(/A/g, "𝗔").replace(/B/g, "𝗕").replace(/C/g, "𝗖").replace(/D/g, "𝗗").replace(/E/g, "𝗘").replace(/F/g, "𝗙").replace(/G/g, "𝗚").replace(/H/g, "𝗛").replace(/I/g, "𝗜").replace(/J/g, "𝗝").replace(/K/g, "𝗞").replace(/L/g, "𝗟").replace(/M/g, "𝗠").replace(/N/g, "𝗡").replace(/O/g, "𝗢").replace(/P/g, "𝗣").replace(/Q/g, "𝗤").replace(/R/g, "𝗥").replace(/S/g, "𝗦").replace(/T/g, "𝗧").replace(/U/g, "𝗨").replace(/V/g, "𝗩").replace(/W/g, "𝗪").replace(/X/g, "𝗫").replace(/Y/g, "𝗬").replace(/Z/g, "𝗭").replace(/a/g, "𝗮").replace(/b/g, "𝗯").replace(/c/g, "𝗰").replace(/d/g, "𝗱").replace(/e/g, "𝗲").replace(/f/g, "𝗳").replace(/g/g, "𝗴").replace(/h/g, "𝗵").replace(/i/g, "𝗶").replace(/j/g, "𝗷").replace(/k/g, "𝗸").replace(/l/g, "𝗹").replace(/m/g, "𝗺").replace(/n/g, "𝗻").replace(/o/g, "𝗼").replace(/p/g, "𝗽").replace(/q/g, "𝗾").replace(/r/g, "𝗿").replace(/s/g, "𝘀").replace(/t/g, "𝘁").replace(/u/g, "𝘂").replace(/v/g, "𝘃").replace(/w/g, "𝘄").replace(/x/g, "𝘅").replace(/y/g, "𝘆").replace(/z/g, "𝘇").replace(/ì/g, "𝗶").replace(/ï/g, "𝗶").replace(/ī/g, "𝗶").replace(/î/g, "𝗶").replace(/í/g, "𝗶").replace(/Ì/g, "𝗜").replace(/Ï/g, "𝗜").replace(/Ī/g, "𝗜").replace(/Î/g, "𝗜").replace(/Í/g, "𝗜").replace(/Ē/g, "𝗘").replace(/Ë/g, "𝗘").replace(/É/g, "𝗘").replace(/È/g, "𝗘").replace(/Ê/g, "𝗘").replace(/ē/g, "𝗲").replace(/ê/g, "𝗲").replace(/ë/g, "𝗲").replace(/è/g, "𝗲").replace(/é/g, "𝗲").replace(/Ū/g, "𝗨").replace(/Ü/g, "𝗨").replace(/Ù/g, "𝗨").replace(/Û/g, "𝗨").replace(/Ú/g, "𝗨").replace(/ū/g, "𝘂").replace(/ü/g, "𝘂").replace(/ù/g, "𝘂").replace(/û/g, "𝘂").replace(/ú/g, "𝘂").replace(/õ/g, "𝗼").replace(/ō/g, "𝗼").replace(/ø/g, "𝗼").replace(/œ/g, "𝗼").replace(/ò/g, "𝗼").replace(/ö/g, "𝗼").replace(/ô/g, "𝗼").replace(/ó/g, "𝗼").replace(/Õ/g, "𝗢").replace(/Ō/g, "𝗢").replace(/Ø/g, "𝗢").replace(/Œ/g, "𝗢").replace(/Ò/g, "𝗢").replace(/Ö/g, "𝗢").replace(/Ô/g, "𝗢").replace(/Ó/g, "𝗢").replace(/Æ/g, "𝗔").replace(/Ã/g, "𝗔").replace(/Å/g, "𝗔").replace(/Ā/g, "𝗔").replace(/À/g, "𝗔").replace(/Á/g, "𝗔").replace(/Â/g, "𝗔").replace(/Ä/g, "𝗔").replace(/æ/g, "𝗮").replace(/ã/g, "𝗮").replace(/å/g, "𝗮").replace(/ā/g, "𝗮").replace(/à/g, "𝗮").replace(/á/g, "𝗮").replace(/â/g, "𝗮").replace(/ä/g, "𝗮").replace(/ç/g, "𝗰").replace(/Ç/g, "𝗖").replace(/ñ/g, "𝗻̃").replace(/Ñ/g, "𝗡̃");
  let data = [
      "526214684778630",
      "526220108111421",
      "526220308111401",
      "526220484778050",
      "526220691444696",
      "526220814778017",
      "526220978111334",
      "526221104777988",
      "526221318111300",
      "526221564777942",
      "526221711444594",
      "526221971444568",
     "2041011389459668", "2041011569459650", "2041011726126301", "2041011836126290", "2041011952792945", "2041012109459596", "2041012262792914", "2041012406126233", "2041012539459553", "2041012692792871", "2041014432792697", "2041014739459333", "2041015016125972", "2041015182792622", "2041015329459274", "2041015422792598", "2041015576125916", "2041017422792398", "2041020049458802", "2041020599458747", "2041021119458695", "2041021609458646", "2041022029458604", "2041022286125245"
    ];
  var tl = ["𝗛𝗔𝗩𝗘 𝗔 𝗡𝗜𝗖𝗘 𝗗𝗔𝗬 𝗖𝗛𝗔𝗕𝗔𝗟 𝗜𝗡𝗦𝗔𝗔𝗡🖐","𝘿𝙐𝙍 𝙁𝙄𝙏𝘼𝙔 𝙈𝙐 🖐😹","𝙅𝘼𝙊 𝙈𝘼 𝘽𝘼𝘼𝙏 𝙉𝙄 𝙆𝘼𝙍𝙏𝘼 𝙏𝙐𝙈 𝙎𝘼 \n𝙈𝘼 𝙉𝘼𝙍𝘼𝙕 𝙃𝙐","𝙏𝙐𝙅𝙃𝘼𝙔 𝙆𝙊𝙄 𝙊𝙍 𝙆𝘼𝘼𝙈 𝙉𝙄\n𝙎𝘼𝙍𝘼 𝘿𝙄𝙉 𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝙀𝙍 𝙋𝘼𝙍 𝘽𝙊𝙏 𝘽𝙊𝙏 𝙆𝘼𝙍𝙏𝘼 𝙍𝘼𝙃𝙏𝘼 𝙃𝘼😒","𝘼𝙇𝙇𝘼𝙃 𝘽𝙃𝘼𝙇𝙇𝘼 𝙆𝘼𝙍𝘼 🙏","𝙈𝘼 𝙆𝙄𝙎𝙄 𝙊𝙍 𝙆𝘼 𝙃𝙐 𝙁𝙄𝙇𝙃𝘼𝘼𝙇 🙏😕","𝘽𝙃𝙊𝙉𝙆𝙊 𝙌 𝘽𝙐𝙇𝘼𝙔𝘼 😒","𝙈𝘼 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿 𝙆𝘼 𝘽𝙊𝙏 𝙃𝙐 😻","𝙁𝘼𝙍𝙈𝘼𝙊 😒","𝙈𝘼 𝘽𝙐𝙎𝙔 𝙃𝙐 𝘽𝘼𝙍 𝘽𝘼𝙍 𝘽𝙊𝙏 𝘽𝙊𝙏 𝙆𝘼𝙍 𝙆𝘼 𝘿𝙄𝙎𝙏𝙐𝙍𝘽 𝙈𝘼𝙏 𝙆𝘼𝙍𝙊 🤫","𝙎𝙐𝙉𝙊 𝙏𝙈 𝙈𝘼𝙍𝘼 𝙎𝘼𝙏𝙃 𝙎𝙃𝘼𝘿𝙄 𝙆𝘼𝙍𝙇𝙊 \n𝙃𝘼𝙈𝘼𝙍𝘼 𝘽𝘼𝘾𝙃𝘼𝙔 𝘽𝙃𝙄 𝘽𝙊𝙏 𝙅𝘼𝙎𝘼 𝙃𝙊𝙉 𝙂𝘼𝙔 🙂🙈","𝙊𝙔 𝙏𝙐𝙈𝙃𝘼𝙍𝙄 🤏 𝙄𝙏𝙏𝙐 𝙎𝙄 𝘽𝘼𝙕𝙏𝙄 𝙆𝘼𝙍𝙇𝙐 🥺","𝙈𝘼𝙍𝘼 𝙉𝘼𝙇 𝙒𝘼𝙔𝘼 𝙆𝘼𝙍 𝙇𝙊😘🙈","𝙅𝘼 𝙋𝘼𝙃𝙇𝘼 𝙉𝘼𝙃𝘼 𝙆𝘼𝙍 𝘼 😹","𝘽𝙊𝙏 𝙉𝙄 𝙅𝘼𝙉𝙐 𝘽𝙊𝙇𝙊 😒","𝙄𝘽 𝙈𝘼 𝙄 𝙇𝙊𝙑𝙀 𝙔𝙊𝙐 𝙌 𝘽𝙊𝙇𝘼 😘","𝙊𝙔 𝙄𝙏𝙉𝘼 𝙈𝘼𝙏 𝙋𝘼𝙎 𝘼𝙊 \n𝙋𝙄𝙔𝘼𝙍 𝙃𝙊 𝙅𝘼𝙔 𝙂𝘼 🤪","𝘿𝙊𝙉𝙏 𝘿𝙄𝙎𝙏𝙐𝙍𝘽 𝙈𝙀 🥱","𝘽𝘼𝙍 𝘽𝘼𝙍 𝙏𝘼𝙉𝙂 𝙉𝘼 𝙆𝘼𝙍 𝙈𝘼 𝘼𝙋𝙉𝙄 𝙅𝘼𝙉𝙐 𝙆𝘼 𝙎𝘼𝙏𝙃 𝘽𝙐𝙕𝙔 𝙃𝙊𝙊𝙉 😑","𝙄 𝘼𝙈 𝙑𝙀𝙍𝙔 𝙉̃𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙊𝙏 🤪","𝙆𝙄𝙎𝙎 𝙈𝙀 😘","𝙏𝘼𝙍𝙄 𝙆𝙊𝙄 𝙂𝘼𝙃𝙍 𝙈𝘼 𝙉𝙄 𝙎𝙐𝙉𝙏𝘼 𝙏𝙊 𝙈𝘼 𝙌 𝙎𝙐𝙉𝙐 🤔😹","𝘽𝙃𝘼𝙂 𝙅𝘼 𝙒𝘼𝙍𝙉𝘼 𝙂𝘼𝙇𝙄𝘼𝙉 𝘿𝙐 𝙂𝘼 𝘾𝙃𝘼𝘽𝘼𝙇 𝙄𝙉𝙎𝘼𝘼𝙉 😒😹","𝙊𝙔𝙀 𝘾𝙃𝙐𝙋 𝙆𝘼𝙍 𝙒𝘼𝙍𝙉𝘼 𝘽𝘼𝙃𝘼𝙍 𝘼 𝙆𝘼𝙍 𝙏𝘼𝙍𝘼 𝙈𝙐 𝙏𝙊𝙍 𝘿𝙐𝙂𝘼 😋😹","𝙃𝘼𝘼𝙉 𝙆𝘼𝙇𝙈𝙐𝙃𝘼 𝘽𝙊𝙇 🖐","𝙒𝙃𝙔 𝘼𝙍𝙀 𝙔𝙊𝙐 𝘾𝙍𝙔𝙄𝙉𝙂 𝙈𝙔 𝘿𝙊𝙂𝙔 🙈","𝘽𝙃𝙊𝙉𝙆𝙊 😒","𝘒𝘈𝘏𝘈𝘕𝘐 𝘚𝘜𝘕𝘖 \n𝘡𝘜𝘉𝘈𝘕𝘐 𝘚𝘜𝘕𝘖🙁\n𝘔𝘜𝘑𝘏𝘈𝘠 𝘉𝘜𝘒𝘏𝘈𝘙 𝘏𝘜𝘈 𝘛𝘏𝘈 😭⛈️\n104 𝘏𝘜𝘈 𝘛𝘏𝘈 ⛈️📎","𝘛𝘈𝘙𝘈 𝘒𝘖 𝘋𝘐𝘒𝘏 𝘕𝘐 𝘙𝘈𝘏𝘈 𝘔𝘈 𝘉𝘜𝘡𝘠 𝘏𝘖𝘖𝘕 📎😑","𝘛𝘜𝘑𝘏𝘈𝘠 𝘈𝘗𝘕𝘐 𝘉𝘈𝘡𝘛𝘐 𝘒𝘈𝘙𝘞𝘈𝘕𝘈 𝘒𝘈 𝘚𝘏𝘖𝘒 𝘏𝘈 😹🖐","𝘉𝘖𝘛 𝘉𝘖𝘛 𝘕𝘈 𝘒𝘈𝘙 𝘞𝘈𝘙𝘕𝘈 𝘒𝘐𝘚𝘚 𝘒𝘈𝘙𝘋𝘜 𝘎𝘈 ⛈️😘😹","𝘔𝘈 𝘚𝘖 𝘙𝘈𝘏𝘈 𝘏𝘜 ⛈️","𝘐 𝘈𝘔 𝘝𝘌𝘙𝘠 𝘔𝘈𝘚𝘖𝘖𝘔 🥺⛈️","𝘼𝘼𝘼 𝙏𝙃𝙊𝙊𝙊😝","𝘼𝙎𝘼𝙔 𝙃𝙄 𝙃𝘼𝙉𝙎𝙏𝘼 𝙍𝘼𝙃𝘼 𝙆𝘼𝙍𝙊 𝙋𝘼𝙂𝙇𝙊𝙉 𝙆𝙄 𝙏𝘼𝙍𝘼𝙃 😹","𝙅𝘼𝘼𝙉 𝘼𝙎𝘼𝙔 𝙉𝘼 𝘽𝙐𝙇𝘼𝙔𝘼 𝙆𝘼𝙍𝙊 𝙎𝘼𝘽 𝙎𝙃𝘼𝙆 𝙆𝘼𝙍𝘼𝙄𝙉 𝙂𝘼𝙔 😹😝","𝙈𝘼 𝘽𝙃𝙄 𝙐𝙍𝙊𝙊𝙅 𝙋𝘼𝙍 𝘾𝙃𝘼𝙍𝙃𝙉𝘼 𝘾𝙃𝘼𝙏𝘼 𝙃𝙊𝙊𝙉\n𝙊𝙃 𝙎𝙊𝙍𝙍𝙔 𝙅𝘼𝙉𝘼 𝘾𝙃𝘼𝙃𝙏𝘼 😁","𝗕𝗢𝗧 𝗕𝗢𝗧 𝗕𝗢𝗟𝗡𝗔 𝗣𝗔𝗥 𝗣𝗔𝗜𝗦𝗔𝗬 𝗠𝗜𝗟𝗧𝗔 \n𝗧𝗢 𝗧𝗨𝗠 𝗕𝗜𝗟𝗚𝗔𝗧𝗘𝗦 𝗦𝗔 𝗕𝗛𝗜 𝗔𝗠𝗘𝗘𝗥 𝗛𝗢𝗧𝗔𝗬 😒😹","𝗝𝗔𝗔𝗡 𝗜𝗗𝗛𝗔𝗥 𝗔𝗢 𝗧𝗨𝗠𝗛𝗔 𝗣𝗜𝗭𝗭𝗔 🍕 𝗞𝗛𝗜𝗟𝗔𝗢","𝙋𝙍𝙊𝙎 𝙒𝘼𝙇𝘼 𝙇𝘼𝙍𝙆𝘼 𝙄𝙉𝙃𝘼 𝙈𝙐 𝙉𝘼𝙃𝙄 𝙇𝘼𝙂𝘼𝙏𝘼 𝙊𝙍 \n𝘽𝘼𝙉𝘿𝘼 𝙄𝙉𝙃𝘼 𝙆𝙊𝙍𝙀𝘼𝙉 𝘾𝙃𝘼𝙃𝙄𝙔𝘼 😒😹","𝙆𝘼𝘼𝙎𝙃 𝙏𝙐𝙈 𝘾𝙐𝙏𝙀 𝙃𝙊𝙏𝙄 𝙈𝘼 𝙏𝙐𝙈𝙃𝘼 𝙋𝘼𝙏𝘼 𝙇𝘼𝙏𝘼 😒😝😹","𝘼𝙈𝙄𝙍 𝙇𝘼𝙍𝙆𝙄 𝙎𝙀𝙏 𝙆𝘼𝙍 𝙆𝘼𝙔 𝙎𝘼𝘽 𝘿𝙊𝙎𝙏𝙊𝙉 𝙆𝘼 𝙐𝘿𝙃𝘼𝙍 𝙒𝘼𝙋𝙄𝙎 𝙆𝘼𝙍𝙐 𝙂𝘼 🥱😹","𝙇𝘼𝙍𝙆𝙄𝙊𝙉 𝙆𝘼 𝘽𝙃𝙄 𝙈𝙕𝘼𝙔 𝙉𝙊 𝘽𝘼𝙍𝙄𝙉 𝙉𝙊 𝙏𝙀𝙉𝙎𝙄𝙊𝙉 🤪","𝘈𝘖 𝘕𝘈 𝘒𝘈𝘉𝘏𝘐 𝘊𝘐𝘎𝘙𝘜𝘛𝘌 𝘓𝘈 𝘒𝘈𝘙 \n𝘋𝘖𝘕𝘖 𝘉𝘈𝘛𝘏 𝘒𝘈𝘙 𝘚𝘜𝘛𝘈 𝘓𝘈𝘎𝘈𝘐𝘕 📎⛈️","𝘼𝙆𝘼𝙇𝘼 𝙃𝙄 𝙉𝙄𝙆𝙇𝘼 𝙏𝙃𝘼 𝙄𝙈𝙍𝘼𝙉 𝙉𝙄𝙔𝘼𝙕𝙄 𝘼𝙋𝙉𝘼 𝙂𝙃𝘼𝙍 𝙎𝘼 𝘾𝙃𝘼𝙎𝙃𝙈𝘼 𝙇𝘼𝙂𝘼 𝙆𝘼𝙍\n𝘼𝙉𝘿𝙃𝘼𝙔 𝙈𝙄𝙇𝙏𝘼 𝙍𝘼𝙃𝘼 \n𝙆𝘼𝙁𝙇𝘼 𝘽𝘼𝙍𝙃𝙏𝘼 𝙂𝘼𝙔 🖐😹","𝙔𝘼 𝘼𝙇𝙇𝘼𝙃 𝙈𝙐𝙅𝙃𝘼𝙔 𝘽𝙃𝙄 𝙇𝘼𝙏𝙀 𝙍𝙀𝙋𝙇𝙔 𝙆𝘼𝙍𝙉𝘼 \n𝙆𝙄 𝙏𝙊𝙁𝙀𝙀𝙌 𝘼𝙏𝘼 𝙁𝘼𝙍𝙈𝘼 🙂🤝","𝘽𝙇𝙊𝘾𝙆 𝙔𝙊𝙐𝙍 𝘽𝙁 𝘼𝙉𝘿 𝙋𝙐𝙍𝙋𝙊𝙎𝙀 𝙈𝙀 🤝🙂","𝙆𝘼𝙃𝘼𝙉𝙄 𝙎𝙐𝙉𝙊\n𝙕𝙐𝘽𝘼𝙉𝙄 𝙎𝙐𝙉𝙊\n𝙈𝙐𝙅𝙃𝘼𝙔 𝙋𝙄𝙔𝘼𝙍 𝙃𝙐𝘼 𝙏𝙃𝘼\n𝙐𝙎𝙆𝙄 𝙏𝙍𝘼𝙁 𝙎𝘼 𝙄𝙉𝙆𝘼𝘼𝙍 𝙃𝙐𝘼 𝙏𝙃𝘼😭😭","𝙈𝙖𝙯𝙞𝙡 𝙎𝙖 𝘼𝙜𝙖𝙮 𝙈𝙖𝙣𝙯𝙞𝙡 𝙏𝙖𝙡𝙖𝙨𝙝 𝙆𝙖𝙧🐸😹\n𝙉𝙖 𝙈𝙞𝙡𝙡𝙖𝙮 𝘽𝙖𝙘𝙝𝙞 𝙏𝙤 𝙆𝙝𝙪𝙨𝙧𝙖 𝙏𝙖𝙡𝙖𝙨𝙝 𝙆𝙖𝙧🐸😹🖐","𝘼𝙧𝙯 𝙆𝙞𝙮𝙖 𝙃𝙖𝙞..𝘿𝙤𝙨𝙩𝙞 𝙋𝙖𝙧 𝘼𝙧𝙯 𝙆𝙞𝙮𝙖 𝙃𝙖𝙞 😲\n𝘿𝙤𝙨𝙩𝙞 𝙋𝙖𝙧 𝘽𝙞𝙜𝙧𝙞 𝙃𝙤𝙞 𝙕𝙞𝙣𝙙𝙖𝙜𝙞 𝙆𝙞 𝙆𝙪𝙘𝙝𝙄𝙩𝙣𝙞 𝙎𝙞 𝙆𝙖𝙝𝙖𝙖𝙣𝙞 𝙃𝙖𝙞..𝙒𝙖𝙝..𝙒𝙖𝙝...🤗\n20% 𝙩𝙤 𝙃𝙪𝙢 𝘽𝙖𝙘𝙝𝙥𝙖𝙣 𝙨𝙮 𝙆𝙖𝙢𝙞𝙣𝙚 𝙩𝙝𝙮..🙂..\n𝘼𝙪𝙧 80% 𝙆𝙖𝙢𝙞𝙣𝙚 𝘿𝙤𝙨𝙩𝙤 𝙠𝙞 𝙈𝙚𝙝𝙖𝙧𝙗𝙖𝙣𝙞 𝙃𝙖𝙞 🤐","𝙔𝙚 𝘿𝙞𝙡 𝘽𝙪𝙝𝙖𝙩 𝙐𝙙𝙖𝙨 𝙃𝙮 𝙆𝙤𝙞 𝙁𝙧𝙣𝙙 𝘽 𝙉𝙖𝙝𝙞 𝙋𝙖𝙨𝙨 𝙃𝙮 😐😑\n 𝙃𝙧 𝙒𝙖𝙦𝙩 𝘽𝙤𝙧𝙞𝙣𝙜 𝙨𝙖 𝙀𝙝𝙨𝙖𝙨 𝙃𝙮 𝙕𝙧𝙖 𝘼𝙥𝙣𝙞 𝙒𝙖𝙡𝙞 𝙠𝙖 𝙉𝙪𝙢𝙗𝙚𝙧 𝙩𝙤 𝘿𝙚𝙣𝙖...🥺 𝙎𝙪𝙣𝙖 𝙃𝙮 𝘽𝙖𝙘𝙝𝙞 𝘽𝙤𝙝𝙖𝙩 𝙊𝙪𝙩 𝘾𝙡𝙖𝙨𝙨 𝙝𝙮....😹🤪","𝘽𝙖𝙞𝙩𝙝 𝙠𝙖𝙧 𝙢𝙚𝙝𝙗𝙪𝙗𝙖 𝙠𝙞 𝘽𝙖𝙝𝙤 𝙢𝙚 𝘼𝙞𝙨𝙖 𝙅𝙤𝙨𝙃 𝘼𝙖𝙮𝙖...𝘿_𝙂 𝙠𝙤..🙂\n 𝙒𝙖𝙝!𝙒𝙖𝙝!𝙒𝙖𝙝!!𝙒𝙖𝙝!!..𝘽𝙖𝙞𝙩𝙝 𝙠𝙖𝙧 𝙢𝙚𝙝𝙗𝙪𝙗𝙖 𝙠𝙞 𝘽𝙖𝙝𝙤 𝙢𝙚 𝘼𝙞𝙨𝙖 𝙅𝙤𝙨𝙃 𝘼𝙖𝙮𝙖…😋\n𝙋𝙝𝙞𝙧𝙧𝙧𝙧𝙧…? 𝙋𝙝𝙞𝙧 𝙠𝙮𝙖.! 𝘽𝙞𝙬𝙞 𝙉𝙚 𝘿𝙚𝙠𝙝 𝙇𝙞𝙮𝙖 𝙖𝙪𝙧 𝙄𝘾𝙐 𝙈𝙚 𝙃𝙤𝙨𝙝 𝘼𝙖𝙮𝙖😝"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  let sticker = data[Math.floor(Math.random() * data.length)]
 
  mess = "{name}"
      if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "lovely bot")) {
     return api.sendMessage("G MERY JAN HUKAM KREN NA AP 😘🥀", threadID);
   };

    if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti")) {
     return api.sendMessage( "𝙏𝙪 𝙇𝙖𝙣𝙩𝙞 𝙏𝙖𝙧𝙖 𝙂𝙝𝙖𝙧 𝙬𝙖𝙡𝙖 𝙇𝙖𝙣𝙩𝙞 𝙏𝙖𝙧𝙖 𝙋𝙪𝙧𝙖 𝙆𝙝𝙖𝙣𝙙𝙖𝙣 𝙇𝙖𝙣𝙩𝙞彡😾", threadID);
   };

 if ((event.body.toLowerCase() == "+our") || (event.body.toLowerCase() == "+out")) {
     return api.sendMessage("𝘽𝙤𝙩 𝘼𝙡𝙬𝙖𝙮𝙨 𝙊𝙗𝙚𝙮 𝙉𝙖𝙪𝙜𝙝𝙩𝙮 𝘽𝙧𝙖𝙣𝙙 𓆩🤍𓆪 ", threadID);
   };
  

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("ShaRafat Se MusKura Rhe 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("Chuhe JasA MuH Na DekHa 😆", threadID);
   };

  if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("I love you. ✨", threadID);
   };
  
  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("JanU Muskrute RahO ase Hee 💞😘 ", threadID);
   };
   
   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("Lgta hai Aj BrusH KiYa Hai😝", threadID);
   };
   
  if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "💔")) {
     return api.sendMessage("I love you 🤭✨", threadID);
  };
 
  if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("Muh OpeN ankhY Band Ye koNsa Magic Hai ThaRki🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("Tara Sa pani To Tapak raha Asa Kia Kardia 🤣🤣😳", threadID);
   };

   
   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("HansNy Ki Bhi Tameez Hoti Hai BehaYa😔", threadID);
   };
   
   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("😢 HosLa Rakho Dost 😢 Baat krnY K liye Mil jaY Ga Koi Na kOi😔", threadID);
   };
   
   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("GanDi NaZar Se AnKh Na Mar 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("😚😚😚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };
   
   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("😗😙😚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("ShaRm KrLo chumi shumi chhodo pdhayi kro😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("awwww MY LovE UmmaH💙🙈", threadID);
   };
   
   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("SadkY Jawa ThaRkia Kyu Mar RahE hO", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("InSano Ki Ankhe HoTi Uh Ke Star Hain 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("0oo0o TeRa HaPpy BirthDay", threadID);
   };
   
   
   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("HaYe Rabba ☹️", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("TOBA TO CHARA MOOD KHARAB KAR DIA 👀", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("Ase Muu BaNa KRr MT R0o 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("ShukR hai smile Tu kii 🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️")) {
     return api.sendMessage("Ye Smile Na D0o Naw🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("HaYe Mas0om", threadID);
   };
   
   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("ChaL Hat Mere Samne Mt ITra TeRha Muuh Le KRr 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("ChaL Ja NaHa kRr Aa", threadID);
   };
   
   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("Aby Teri NoSe NiKaL Rhi 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("lar Mat Tapka MeKo ulTi Aa Rhi 🤮🤢", threadID);
   };
   
   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("Yah ToTay Jesi Zuban Mt DiKha 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("Ye GanDi NiYat Se Zuban Na DiKha 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("ABy Ankhe KhoL our ZuBan Ander kRr WRna KaT DunGa", threadID);
   };
   
   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("BaRi MasTi ChaRi hai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("Ye Ajeeb_0_GaReeb Muuh Na BaNa 😂 CarT0on 🤣", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("SasTa Nasha KRr LiYa LagTa Hai 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("Wah Bhens Chor Phle GalTi kRo Phr uniscent Sa Muu BaNa L0o😒😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("Ta Huwa My LoVe 🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("Kis Ki Baja Di 🤨🧐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("Wha Muuh Ke SaTh Ankhe Be Band H0o GYi 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("Ab B0oL Na 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("Nak T0o Thi Nhi Muuh Be Gyb H0o GYa TeRa 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("Ab Teri Awaz Ayi Na T0o Dekh Liyo 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("KYa Soch Rhe ho 🤔", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("Teri Yeh Ungli Teri Hee Nak Me dedeni Menu Ab 😒😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("AJa BaBe MeLe Pas S0o Jaa😜", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("PhLe NaHa kRr Aa 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("KYa HuWa 😱 SheSha DeKh LiYa KYa 😳", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("Tu Hosiyar Ban kRr Na Dekh Main Hun Naw 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("Tu HaT Main DekhTi Hun 🧐🧐🧐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("Teri Toffee LaLi KiSi Ne J0o Asa Muuh BaNa LiYa 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("KYa Hai uper 🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("Ye BuLL Jesa MuUh Na BaNa 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("BaBe GuSsa Nhi KarTe Ye L0o Umumuaahhhhh 😘", threadID);
   };
   
   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("MUJH MASOOM PAR GUSSA KARTA HO MA ÑAUGHTY SA SHIKAYAT KARU GA TUMHARI 😭😭", threadID , author);
   };
   
   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("MUJH MASOOM PAR GUSSA KARTA HO MA ÑAUGHTY SA SHIKAYAT KARU GA TUMHARI 😭😭", threadID, author);
   };
   
   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("TA HUA BABU  😯", threadID);
   };
   
      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("TARA SIR KA UPAR SA Q PAANI GIR RAHA TANKI APNA SIR PAR RAKHI HA KIA GHAR KI🤣", threadID);
   };

  if ((event.body.toLowerCase() == `{st2: st2}`) || (event.body.toLowerCase() == `369239263222822`)) {
     return api.sendMessage(`Ya Acha Tha Or Do😋`, threadID);
   };
  
      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("TANU KI HOYA 😒", threadID);
   };
   
      if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("ABAY CHUP KAR 😾", threadID);
   };
   
      if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
     return api.sendMessage("AWWW 🤤", threadID);
   };
   
      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("TARA MU KIS NA TADHA KAR DIA😆🤣", threadID);
   };
   
      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("BABY DAR LAG RAHA HA MARA PAS AJAO😇", threadID);
   };
   
   
      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("BABY DAR LAG RAHA HA MARA PAS AJAO😇", threadID);
   };
   
      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("TANU KI HOYA 😆", threadID);
   };
   
      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("🖐😆🤨", threadID);
   };
   
      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("ABAY MU BAND KAR WARNA MU MA WO GHUS JAY GA 😂😂😂\n\n\n\n\n\n\nMACHAR KI BAAAT KI MANA TUNA KIA SHMJHA🖐😹🙄🤨", threadID);
   };
   
        if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("KIA DAKH LIA TUNA 😁😹😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("OHH TARA SAR KO KIA HUA 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("Asa Muuh Na BaNa 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😣😣😣", threadID);
   };
   
      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("ABAY JA NA NATAK BAAZ 😫😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("ASA NA DAKH KUCH KUCH HOTA HA 😳🙈", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("Aw BABY MARI GODI MA JA 🙈😜", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("Baap Ray 😂🥶", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage(" hyee chiii Aaaaa Tho0oo", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("Are Ja Na Menu Be BiMar KRrna KYa 🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("Aww BaBe K0o Ta HuWa Idher Aow ThoRa Pyal L0o 😜💉💉💉", threadID);
   };
   
      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("ShoKian Na Mar 😂 Ghr Me DusRi Bar RoTi Nhi MilTi Uh k0o 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("😇😇😇", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("Anek WaLa Jin 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("Aww S0o SweeT 😂 CarT0on", threadID);
   };
   
      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
     return api.sendMessage("👽👽👽", threadID);
   };
   
      if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("Aby Yal BiLLi Jesy Muu Sy Na Hash 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
     return api.sendMessage("😼😼😼", threadID);
   };
   
      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("TeRese Axha T0o Billi iTra LeTi 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
     return api.sendMessage("Yah PaPpi ChaPpi Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
   };
   
      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
   };
   
      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
   };
   
      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("Bh0oT", threadID);
   };
   
      if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕")) {
     return api.sendMessage("Bund Me LeLe ApNi Bhens Chor 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
     return api.sendMessage("AGAR BIWI HA TO IS KO SATH RAKHA KAR KABHI BHI ZAROORAT PAR SAKTI HA 😹😹", threadID);
   };
   
      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("Sch  Me tum Bander He ho 😂", threadID);
   };
  
   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("𝐓𝐔𝐌 𝐊𝐇𝐔𝐃 𝐋𝐎𝐋 𝐇𝐎 𝐆𝐀𝐘:)3:)", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw JaNyMan ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "tunha kis na banaya") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ☜.", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("𝙉𝘼𝙐𝙂𝙃𝙏𝙔  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("𝐇𝐄 𝐈𝐒 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿", threadID);
   };


   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolungi", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gund") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Basanti, Kutto ko kiss Nhi Karta. Muh Dhoke Phir Bolna. Sakal Accha nhi laga tumhara", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tarref karta h meri.", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️KIA HMMM HMMM KAR RAHA HA THARKI INSAN😈", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet m H.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️m toh Andha Hu Dekh nhi sakti", threadID);
   };

   if ((event.body.toLowerCase() == "gf kon ha") || (event.body.toLowerCase() == "hhhshhdhdhdhsh")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };


   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Bhikari Ban gye kya tum? Sirpe Hath Q de Rakkha H?😬", threadID);
   };
   
 

  

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami jewelry") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes Jewel are you fine?", threadID);
   };
   
      
  if ((event.body.toLowerCase() == "botwa") || (event.body.toLowerCase() == "bot bahi")) {
     return api.sendMessage("G JANEMAN 💕 :)", threadID);
   };
   
    if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("LOVE YOU 2 🍼 🐥", threadID);
   };

   if ((event.body.toLowerCase() == "how are you bot ") || (event.body.toLowerCase() == "bot kesy ho")) {
     return api.sendMessage("I AM FINE BOSS WHAT ABOUT YOU ❤️", threadID);
   };
  
   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "kamena bot")) {
     return api.sendMessage("Ap na mujha gali dye mein totaly upset ho geya hon", threadID);
   };

   if ((event.body.toLowerCase() == "your creator") || (event.body.toLowerCase() == "your admin")) {
     return api.sendMessage("𝐌𝐀𝐍𝐎 𝐁𝐈𝐋𝐄 is gr8 person , he was my owner", threadID);
   };

   if ((event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("𝐍𝐄𝐗𝐓 𝐓𝐈𝐌𝐄 𝐇𝐈 𝐇𝐄𝐋𝐋𝐎 𝐍𝐀𝐇𝐈 𝐀𝐒𝐒𝐋𝐀𝐌 𝐎 𝐀𝐋𝐈𝐊𝐔𝐌 𝐁𝐎𝐋𝐀 𝐊𝐀𝐑𝐎, 𝐉𝐀𝐙𝐙𝐀𝐊𝐀𝐋𝐋𝐀𝐇🤍", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("ASSLAM O ALIKUM, good morning to ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gud ny8")) {
     return api.sendMessage("ok dear gudny8, have a sweet dreams  ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good afternoon") || (event.body.toLowerCase() == "afternoon")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "thanku") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("welcome janam, my pleasure ❤️", threadID);
   };

     if ((event.body.toLowerCase() == "naughty bot") || (event.body.toLowerCase() == "noughty bot")) {
     return api.sendMessage("yes janu kesy yad keya mujha ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bot smile") || (event.body.toLowerCase() == "bot smile do na")) {
     return api.sendMessage("kyu tum na mujha apni baji dye hai ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "kutta bot") || (event.body.toLowerCase() == "bot kutta")) {
     return api.sendMessage("kyu ka kia tumhari baji laka bhag gaya ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bot shutup") || (event.body.toLowerCase() == "dafa ho ja bot")) {
     return api.sendMessage("Aby oye dont again call me dafa ho ja bot tery ma ka gr sa khata hon randi ka bachy", threadID);
   };

  if ((event.body.toLowerCase() == "asslamoalikum") || (event.body.toLowerCase() == "asslam o alikum")) {
     return api.sendMessage("𝐖𝐀 𝐀𝐋𝐈𝐊𝐔𝐌 𝐒𝐀𝐋𝐀𝐌 🖤😻💜", threadID);
   };
  
     if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot owner have brand")) {
     return api.sendMessage("Yes my owner 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 is brand", threadID);
   };

   if ((event.body.toLowerCase() == "bot miss u") || (event.body.toLowerCase() == "Bot miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };

if ((event.body.toLowerCase() == "ameen") || (event.body.toLowerCase() == "Ameen")) {
     return api.sendMessage("️AMEEN SUM AMEEN", threadID, messageID);
   };
  
  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Tumhara Admin Kon Ha")) {
     return api.sendMessage("️NAUGHTY BRAND OF FACEBOOK", threadID, messageID);
   };                   
  
  if ((event.body.toLowerCase() == "bat suno") || (event.body.toLowerCase() == "bat suno ji")) {
     return api.sendMessage("️HaN Ji PyaRy Bolo🥰", threadID, messageID);
   };                             
    
if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🖐️") || (event.body.toLowerCase() == "🖐️🖐️")) {
     return api.sendMessage("️YE LANAT KÉ SHAIN HA JO BAJTA OSY KE PECHAN HA 😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ye kasa bot hai") || (event.body.toLowerCase() == "had hai mujy laga bot hai ya")) {
     return api.sendMessage("️TO JannaM BoT He Hun NaW Main", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🤲") || (event.body.toLowerCase() == "🤲🤲")) {
     return api.sendMessage("️MANGO DUA AB TARKIYO OPER WALA TRY KO MAAF KR DE OR TERA TARKIPN KHTM HO JYE", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "welcome bot") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️thankx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("️SaDky❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kaha sa ho") || (event.body.toLowerCase() == "or btao kaha say ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 city Owner 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿 sy pocho", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == " ap kdr sa ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 City AP K DIL SY", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "wow multan say") || (event.body.toLowerCase() == "wow multan sa")) {
     return api.sendMessage("️HaN Ji ThAnkx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == " kya krty ho ap") || (event.body.toLowerCase() == "kiya krty ho")) {
     return api.sendMessage("️kuxh nhi bs coding or study", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "nothing") || (event.body.toLowerCase() == "Noting")) {
     return api.sendMessage("️SiRf  JaNu Hai❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == " miss you") || (event.body.toLowerCase() == "miss you kutta")) {
     return api.sendMessage("️MaiN SaDky JaUn Miss you To", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "baji di ib ma bar nikal") || (event.body.toLowerCase() == "Koko")) {
     return api.sendMessage("️HaaN HaaN Edr He HuN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == " koi ha") || (event.body.toLowerCase() == "bot hosh kr")) {
     return api.sendMessage("️yeSh JaNnu Edr He HuN", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kesy ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("️Main ThEk Ap KaSa Ho❤️", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bhag lanti") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("️Tu Dafa HojA. Salya🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny bhi shadi krni hai") || (event.body.toLowerCase() == "mujy b shadi krni hai")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga Kon🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum everyone one kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "us ny mujy love you bola") || (event.body.toLowerCase() == "love you bola us ny")) {
     return api.sendMessage("️ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bola Ga🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ye bot nhi hai") || (event.body.toLowerCase() == "ye robot nhi hai")) {
     return api.sendMessage("️NHi To Kia TaRa BaP Hai Salya ChUp Kr K Bay 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "koi hamy bhi chummi dy do") || (event.body.toLowerCase() == "koi tu love you bol do yr")) {
     return api.sendMessage("️Dafa Hoja Group Sa Tharkiya Na MaR Edr🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny kon sa thark mara") || (event.body.toLowerCase() == "ma ny kia kara")) {
     return api.sendMessage("️To Fir Ya Kia Hai Fir ThArk nhi To 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "mari janu hai") || (event.body.toLowerCase() == "wo meri janu hai")) {
     return api.sendMessage("️HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sms del kr") || (event.body.toLowerCase() == "delete kr")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "+oye") || (event.body.toLowerCase() == "+oy")) {
     return api.sendMessage("️Is Bar Kr Rha Agli Bar Delete Nhi Kru Ga Bta Rha 🙄", threadID, messageID);
   };
if ((event.body.toLowerCase() == "+unsend") || (event.body.toLowerCase() == "+uns")) {
     return api.sendMessage("️ABAY KIA UNSEND UNSEND LAGA HA YA COMMAND CHUTIYA BOTS KI HAIN MA NAUGHTY KA BOT HOON +oye LIKH", threadID, messageID);
   };
  
  if ((event.body.toLowerCase() == "chal hat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😂")) {
     return api.sendMessage("Abby Yawl Hansty H0Y bHi R0o RaHa Hai 💁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rhy ho")) {
     return api.sendMessage("️kuxh Nhi Bs Free 😁 Ap Kia Kr Rhy Ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ma bhi free") || (event.body.toLowerCase() == "main b kuxh nhi kr rha")) {
     return api.sendMessage("️Acha Ji☺️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("️Kia Wo Q HaaN☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN Ji Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kuxh nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("️acha KuJ Kr Liya Kro Naw 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kya kru") || (event.body.toLowerCase() == "kya kru yr")) {
     return api.sendMessage("️kOi KaM ShaM☺️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "yr aj dill udas hai") || (event.body.toLowerCase() == "today im sad")) {
     return api.sendMessage("️Pagal HappY Rha Kr SaD NHi Hotyy Naw", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "gf chor gy") || (event.body.toLowerCase() == "gf bhag gy")) {
     return api.sendMessage("️Daffa MaR UsY Bagh Gyi To Maa Chudday Tu Q Ro Rha 😁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == " love u")) {
     return api.sendMessage("LovE You To MaRi Jan UmmmaH😘 :))", threadID);
   };
  
  if ((event.body.toLowerCase() == " kanjar") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Same to you Dur Fitty Muu😹:))", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "kya kr rhy ho") || (event.body.toLowerCase() == "kya kr rhi ho")) {
     return api.sendMessage("️KuXh Nhi Kr Rha YaR", threadID);
   };
   
   if ((event.body.toLowerCase() == " dance kro gy") || (event.body.toLowerCase() == " aja dance krty hn")) {
     return api.sendMessage("nhi tm kro DaNce Main Nhi Krta :))", threadID);
   };
   if ((event.body.toLowerCase() == " Hmm") || (event.body.toLowerCase() == "Hm")) {
     return api.sendMessage("Agli Br Hmm Bola Naw Tu Muh toor Du ga🤨😤 :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "Morning") || (event.body.toLowerCase() == "Good morning")) {
     return api.sendMessage("Good morning Alsee Ab Muhh bhi Dho k Aa zra 😤☹️:))", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai Salya :))", threadID);
   };
   
   if ((event.body.toLowerCase() == " wow") || (event.body.toLowerCase() == " wow nice")) {
     return api.sendMessage("Thankx You JaNnaM Taref Krna k LiyA❤️ :))", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("hi kia ha HaL Hai Ap Ka:))", threadID);
   };
  
   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kasa ho")) {
     return api.sendMessage("Main ThEk Hun Ap Kasa Ho :))", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar jao")) {
     return api.sendMessage("HaTtt MaRi to Abi ShaDi b Nhi Hoi🙄😏 :))", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "khana khaya") || (event.body.toLowerCase() == "khana kha liya")) {
     return api.sendMessage("Nhi YaR Abi Nhi KhaYa Ap Na Kha liya :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "haan yr") || (event.body.toLowerCase() == "Koko haan ma ny kha liya")) {
     return api.sendMessage("MuJy Bulaya B Nhi Or ThUs liya wah🤧:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Sadky Jawa Dil Dy ReHy Ho piYar tu Ni kr beHty MujH Sy🙆🙈 :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("BolLo NaW Mari JaN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bot harami") || (event.body.toLowerCase() == "bot gando")) {
     return api.sendMessage("TaRii Maa Ki Chut Jattu Gali KiS Ko Da Rha Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "your owner") || (event.body.toLowerCase() == "ap ka owner kon hai")) {
     return api.sendMessage("𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿♥️ Hai Naw +inf likho link Mil Jay Ga  :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i need janu") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i need girlfriend") || (event.body.toLowerCase() == "i need boyfriend")) {
     return api.sendMessage("Hatt Main Kdr Sa Laun Main Khud Single HuN:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bye allah hafiz")) {
     return api.sendMessage("Next Bye ni kehna Ok Allah Hafiz Bola kro😒😊❤️:))", threadID);
   };
  
  if ((event.body.toLowerCase() == "love you riya") || (event.body.toLowerCase() == "RiyA love you")) {
     return api.sendMessage("Arry  MaRI JaNU Hai YaR 😘LoVe You Riya♥️", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("Edr Udr Qw Dekh RaHe Ho Koi Patny Wala Ni😤🙄:)", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👎")) {
     return api.sendMessage("Abby Like deny ka ziada shoq ha kya🙆🙄", threadID);
   };

   if ((event.body.toLowerCase() == "bot kuta") || (event.body.toLowerCase() == "bot kutty")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "🙎🏾‍♂️") || (event.body.toLowerCase() == "🙎🏾‍♂️🙎🏾‍♂️")) {
     return api.sendMessage("🙎🏾‍♂️Yeh Emoji Tumhary Papa Koko Use Karty HN Tum Mat Kiya Karo 😝🙆:))", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("Ally Asi bat hi Q kRty Ho K mUh ChuPhana PaRry🤨", threadID);
   };

   if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖 🤍✨", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️HaYee ma Sadky TeRy is Dil walY Muhh Ty♥️😍 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Allly Ally BabY mEry Hoty Huy Q Ro ReHy Ho🥺🙆🙄:)", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Itna Matt S0Cho JaNu PiYar ho JaY ga Mujh Se🙊😒 :)", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night everyone")) {
     return api.sendMessage("️good Night So jao Shabash take care ❤️Allah pak Hamesha Khush rakhy apko🥰", threadID);
   };

   if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "bot i love you")) {
     return api.sendMessage("️GG Bolo MerY baBu😘🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura messenger Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️aRy mEri JaN kYa howa Qw M0od KhRb kR rHe Ho APna🙂❤️", threadID);
   };

   if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "🐷")) {
     return api.sendMessage("️AnKho M piYar Dil ma خمار PiYar tu ni ho Gyw ksi Sy 🙆", threadID);
   };

   if ((event.body.toLowerCase() == "Koko g") || (event.body.toLowerCase() == "Suno koko g")) {
     return api.sendMessage("️ Usy q bula rahe Ho Ma bhi sath ao kya🙆😐 :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("️Ally alYy BaBy Asy hi HNsty RaHa kRo🙆🙊", threadID);
   };

   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("BewaFa lOog Hn Dil Tor DeTy Hn JaNu🥺🙆", threadID);
   };

  if ((event.body.toLowerCase() == "asslam o alaikum") || (event.body.toLowerCase() == "Aslamoalaikum")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };
  
  if ((event.body.toLowerCase() == "bot Jani") || (event.body.toLowerCase() == "bot Jan")) {
     return api.sendMessage("Mrgya Wo to Kab ka 🤧", threadID);
   };
  
   if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🖤🖤")) {
     return api.sendMessage("Jesi Shakal Wesa Dil 🙂🤝 :>>", threadID);
   };
  if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😯")) {
     return api.sendMessage("ITna HaiRan hoNy waLi KoNsi bat ha😒🙎🏾‍♂️", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "ap hacker ho") || (event.body.toLowerCase() == "are you hacker")) {
     return api.sendMessage("️YeS My owner 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  is a Hacker 😏", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bot ao date pa chalty") || (event.body.toLowerCase() == "ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "where are you from") || (event.body.toLowerCase() == "kaha sa ho")) {
     return api.sendMessage("️ I'm from Pakistan 🥰 I love My country 🇵🇰", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "your age") || (event.body.toLowerCase() == "bot ap ki age ktni hain")) {
     return api.sendMessage("️Unknown🤫", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "nice yr") || (event.body.toLowerCase() == "nice")) {
     return api.sendMessage("️Hmmm Thankx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "mujy gf chiya") || (event.body.toLowerCase() == "mujy ak gf chiya")) {
     return api.sendMessage("️HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun 🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ak gf dund do") || (event.body.toLowerCase() == "ak gf lab da")) {
     return api.sendMessage("️Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "ap kon ho")) {
     return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "agr gf nraz ho to") || (event.body.toLowerCase() == "agr bf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "naughty ap kia krty ho") || (event.body.toLowerCase() == "naughty yr ap kia krtay")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "bot welcome karo") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️꧁🅆🅻︎🄲🅾︎🄼꧂ 🇩 🇮 🇱    🇸 🇪  ᴀᴘ ᴋᴀ ᴀsʏ ʜᴍᴀʀʏ ᴅɪʟ ᴍᴇɴ ᴄʜʟʏ ᴀɴᴀ ᴏʀ ᴘʜɪʀ ᴡᴀᴘs ɴᴀ ᴊᴀɴᴀ ʏᴇ ᴍᴜʜʙ𝗧 ℎ𝑒 ویلکم ہو گیا آپ کا 🌹      ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️     👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍       ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍  👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️   👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ🖤💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹❤‍🔥ʷˡᶜᵒᵐ🤍🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿   ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️    👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹   ❤‍🔥ʷˡᶜᵒᵐ🤍🖤 ǝɯoɔlǝʍ 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹    ❤‍🔥ʷˡᶜᵒᵐ🤍  🇴 🇼 🇳 🇷  𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿  🖤 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹  ❤‍🔥ʷˡᶜᵒᵐ🤍 🖤 ǝɯoɔlǝʍ🖤 💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍 ǝɯoɔlǝʍ🖤  💛ᴡᴇʟᴄᴏᴍᴇ❤️ 👑𝑤𝑒𝑙𝑐𝑜𝑚𝑒🌹 ❤‍🔥ʷˡᶜᵒᵐ🤍❤‍🔥ʷˡᶜᵒᵐ🤍", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "new here") || (event.body.toLowerCase() == "i am new")) {
     return api.sendMessage("❥❥══════❥❥❥══════❥❥💜🖤𝐖𝐄𝐋𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏🖤💜❥❥══════❥❥❥══════❥",threadID, messageID);
   };
  if ((event.body.toLowerCase() == "bot welcome na karo") || (event.body.toLowerCase() == "bot welcome na karo🤣🤣🤣")) {
     return api.sendMessage("Teri Bhens Ki Tang🔪🔪🔪",threadID, messageID);
   };
    if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `⛈️${naughtbrand}⛈️,${rand}`
    }
    api.sendMessage(msg, threadID, messageID);
setTimeout(() => {
      api.sendMessage({ sticker: sticker }, event.threadID);
    }, 700);

  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
