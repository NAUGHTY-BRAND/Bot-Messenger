var naughty = "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ ツ";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logov5",
  version: "1.0.5",
  hasPermssion: 0,
  credits: `${naughty}`,
  description: "Generate logos",
  commandCategory: "logo",
  usages: "logo",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "list") {
    const logoTypes = [
      "\n1 : 𝙇𝙤𝙜𝙤 𝙍𝙖𝙞𝙣", "\n2 : 𝘽𝙡𝙖𝙘𝙠 𝙃𝙖𝙢𝙢𝙚𝙧", "\n3 : 𝙂𝙧𝙚𝙚𝙣 & 𝙊𝙧𝙖𝙣𝙜𝙚", "\n4 : 𝙇𝙤𝙜𝙤 𝙎𝙞𝙡𝙫𝙚𝙧𝙮","\n5 : 𝙋𝙞𝙣𝙠 𝙇𝙤𝙫𝙚","\n6 : 𝙇𝙤𝙜𝙤 𝘼𝙧𝙩",
      "\n7 : 𝙃𝙤𝙧𝙧𝙤𝙧 𝘽𝙤𝙣𝙚𝙨 ", "\n8 :𝙂𝙧𝙖𝙮 𝙅𝙚𝙬𝙚𝙡𝙧𝙮", "\n9 : 𝙈𝙖𝙣𝙮 𝙔𝙚𝙖𝙧𝙨 𝘼𝙜𝙤", "\n10 : 𝙇𝙤𝙜𝙤 𝙇𝙚𝙖𝙫𝙚", "\n11 𝙇𝙤𝙜𝙤 𝙃𝙤𝙧𝙧𝙤𝙧: ", "\n12 𝙉𝙤𝙩 𝙒𝙤𝙧𝙠𝙞𝙣𝙜 𝘽𝙪𝙩 𝙁𝙞𝙭𝙚𝙙 𝙎𝙤𝙤𝙣: ",
      "\n13 : 𝙇𝙤𝙜𝙤 𝙃𝙪𝙣𝙩𝙚𝙙", "\n14 : 𝙇𝙤𝙜𝙤 𝙂𝙡𝙪𝙚𝙜𝙪𝙣", "\n15 𝙂𝙧𝙚𝙚𝙣 𝙅𝙚𝙡: ", "\n\nMore logo for : logov6 "
    ];
    return api.sendMessage(`All types of logos:\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`Use: logo number <name>\n to see all logo types: logov4 list`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
 case "1":
      apiUrl =`https://rest-api-001.faheem001.repl.co/api/textpro?number=32&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝙍𝙖𝙞𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "2":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=33&text=${name}`;
      message = "『𝘽𝙡𝙖𝙘𝙠 𝙃𝙖𝙢𝙢𝙚𝙧』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "3":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=34&text=${name}`;
      message = "『𝙂𝙧𝙚𝙚𝙣 & 𝙊𝙧𝙖𝙣𝙜𝙚』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "4":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=35&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝙎𝙞𝙡𝙫𝙚𝙧𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "5":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=36&text=${name}`;
      message = "『𝙋𝙞𝙣𝙠 𝙇𝙤𝙫𝙚』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "6":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=100&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝘼𝙧𝙩』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "7":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=38&text=${name}`;
      message = "『𝙃𝙤𝙧𝙧𝙤𝙧 𝘽𝙤𝙣𝙚𝙨』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽: ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "8":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=39&text=${name}`;
      message = "『𝙂𝙧𝙖𝙮 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "9":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=40&text=${name}`;
      message = "『𝙈𝙖𝙣𝙮 𝙔𝙚𝙖𝙧𝙨 𝘼𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "10":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=41&text=${name}`;
      message = "『𝙍𝙪𝙨𝙩 𝙍𝙪𝙨𝙩』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "11":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=42&text=${name}`;
      message = "『𝘽𝙡𝙪𝙚 𝙍𝙪𝙨𝙩』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "12":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=43&text=${name}`;
      message = "『𝘽𝙡𝙖𝙘𝙠 𝙂𝙤𝙡𝙙 𝙐𝙡𝙩𝙧𝙖』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "13":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=44&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝙎𝙬𝙚𝙚𝙩』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "14":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=45&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝙎𝙣𝙤𝙬』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "15":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=46&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝘾𝙤𝙡𝙙』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    default:
      return api.sendMessage(`𝙄𝙣𝙫𝙖𝙡𝙞𝙙 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚! 𝙐𝙨𝙚: /𝙡𝙤𝙜ov5 𝙡𝙞𝙨𝙩 𝙩𝙤 𝙨𝙝𝙤𝙬 𝙖𝙡𝙡 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚𝙨`, threadID, messageID);
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
