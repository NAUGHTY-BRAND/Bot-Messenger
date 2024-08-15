var NAUGHTY = "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logov3",
  version: "1.0",
  hasPermssion: 0,
  credits: `${NAUGHTY}`,
  description: "Generate logos",
  commandCategory: "logo",
  usages: "logo",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "list") {
    const logoTypes = [
      "\n1 : 𝙋𝙖𝙥𝙚𝙧𝙘𝙪𝙩", "\n2 : 𝙃𝙚𝙖𝙧𝙩 𝙍𝙖𝙞𝙣𝙗𝙤𝙬", "\n3 : 𝙒𝙤𝙤𝙙 𝙍𝙤𝙘𝙠", "\n4 : 𝘽𝙡𝙪𝙚 𝙒𝙝𝙞𝙩𝙚","\n5 : 𝙒𝙤𝙤𝙙 𝙏𝙞𝙩𝙡𝙚","\n6 : 𝙊𝙖𝙣𝙜𝙚 𝘾𝙖𝙣𝙙𝙮",
      "\n7 : 𝙋𝙞𝙣𝙠 𝘽𝙡𝙪𝙚 ", "\n8 : 𝘼𝙡𝙞𝙚𝙣 𝙂𝙧𝙚𝙚𝙣", "\n9 : 𝙃𝙤𝙡𝙡𝙤𝙬𝙚𝙣", "\n10 : 𝘽𝙡𝙪𝙚 𝙂𝙡𝙖𝙨𝙨", "\n11 : 𝘾𝙡𝙤𝙪𝙙𝙮 𝙏𝙝𝙪𝙣𝙙𝙚𝙧", "\n12 : 𝙋𝙞𝙣𝙠 𝙉𝙚𝙤𝙣",
      "\n13 : 𝙂 𝘽 𝘾𝙪𝙧𝙫𝙚", "\n14 : 𝙁𝙪𝙩𝙪𝙧𝙚 𝙇𝙤𝙜𝙤", "\n15 : 𝙂𝙡𝙖𝙭𝙮 𝙇𝙤𝙜𝙤", "\n\nmore logo for : logov4 ➫ Comming Soon"
    ];
    return api.sendMessage(`All types of logos:\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`Use: logo number <name>\n to see all logo types: logo list`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "1":
      apiUrl =`https://rest-api-001.faheem001.repl.co/api/textpro?number=1&text=${name}`;
      message = "『𝙋𝙖𝙥𝙚𝙧𝙘𝙪𝙩』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "2":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=2&text=${name}`;
      message = "『𝙃𝙚𝙖𝙧𝙩 𝙍𝙖𝙞𝙣𝙗𝙤𝙬』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "3":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=3&text=${name}`;
      message = "『𝙒𝙤𝙤𝙙 𝙍𝙤𝙘𝙠』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "4":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=4&text=${name}`;
      message = "『𝘽𝙡𝙪𝙚 𝙒𝙝𝙞𝙩𝙚』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "5":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=5&text=${name}`;
      message = "『𝙒𝙤𝙤𝙙 𝙏𝙞𝙩𝙡𝙚』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "6":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=6&text==${name}`;
      message = "『𝙊𝙖𝙣𝙜𝙚 𝘾𝙖𝙣𝙙𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "7":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=7&text=${name}`;
      message = "『𝙋𝙞𝙣𝙠 𝘽𝙡𝙪𝙚 』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽: ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "8":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=8&text=${name}`;
      message = "『𝘼𝙡𝙞𝙚𝙣 𝙂𝙧𝙚𝙚𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "9":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=9&text=${name}`;
      message = "『𝙃𝙤𝙡𝙡𝙤𝙬𝙚𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "10":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=10&text=${name}`;
      message = "『𝘽𝙡𝙪𝙚 𝙂𝙡𝙖𝙨𝙨』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "11":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=11&text=${name}`;
      message = "『𝘾𝙡𝙤𝙪𝙙𝙮 𝙏𝙝𝙪𝙣𝙙𝙚𝙧』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "12":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=12&text=${name}`;
      message = "『𝙋𝙞𝙣𝙠 𝙉𝙚𝙤𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "13":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=13&text=${name}`;
      message = "『𝙂 𝘽 𝘾𝙪𝙧𝙫𝙚』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "14":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=14&text=${name}`;
      message = "『𝙁𝙪𝙩𝙪𝙧𝙚 𝙇𝙤𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "15":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=16&text=${name}`;
      message = "『𝙂𝙡𝙖𝙭𝙮 𝙇𝙤𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    default:
      return api.sendMessage(`𝙄𝙣𝙫𝙖𝙡𝙞𝙙 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚! 𝙐𝙨𝙚: +𝙡𝙤𝙜ov3 𝙡𝙞𝙨𝙩 𝙩𝙤 𝙨𝙝𝙤𝙬 𝙖𝙡𝙡 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚𝙨`, threadID, messageID);
  }


  api.sendMessage("𝘽𝙖𝙗𝙮 𝙏𝙝𝙤𝙧𝙖 𝙒𝙖𝙞𝙩 𝙆𝙖𝙧𝙤 𝑳𝒐𝒈𝒐 𝘽𝙖𝙣 𝙍𝙖𝙝𝙖 𝙃𝙖 𝘼𝙥𝙠𝙖🩵🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
