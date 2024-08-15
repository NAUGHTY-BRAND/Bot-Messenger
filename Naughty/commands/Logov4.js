var naughty = "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logov4",
  version: "1.0",
  hasPermssion: 0,
  credits: `${Faris}`,
  description: "Generate logos",
  commandCategory: "logo",
  usages: "logo",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "list") {
    const logoTypes = [
      "\n1 : 𝙍𝙚𝙙 𝙂𝙤𝙡𝙙", "\n2 : 𝙇𝙤𝙜𝙤 3𝙙", "\n3 : 𝙇𝙞𝙜𝙝𝙩 𝙂𝙤𝙡𝙙", "\n4 : 𝘽𝙡𝙖𝙘𝙠 𝙏𝙚𝙭𝙩𝙪𝙧𝙚","\n5 : 𝘾𝙡𝙤𝙪𝙙𝙮 𝙎𝙠𝙮","\n6 : 𝘽𝙡𝙖𝙘𝙠 𝙂𝙡𝙖𝙨𝙨",
      "\n7 : 𝙉𝙤𝙩 𝙒𝙤𝙧𝙠𝙞𝙣𝙜 𝘽𝙪𝙩 𝙁𝙞𝙭𝙚𝙙 𝙎𝙤𝙤𝙣 ", "\n8 : 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 𝙂𝙤𝙡𝙙", "\n9 : 𝙇𝙤𝙜𝙤 𝘽𝙡𝙤𝙤𝙙", "\n10 : 𝙇𝙤𝙜𝙤 𝙇𝙚𝙖𝙫𝙚", "\n11 𝙇𝙤𝙜𝙤 𝙃𝙤𝙧𝙧𝙤𝙧: ", "\n12 𝙉𝙤𝙩 𝙒𝙤𝙧𝙠𝙞𝙣𝙜 𝘽𝙪𝙩 𝙁𝙞𝙭𝙚𝙙 𝙎𝙤𝙤𝙣: ",
      "\n13 : 𝙇𝙤𝙜𝙤 𝙃𝙪𝙣𝙩𝙚𝙙", "\n14 : 𝙇𝙤𝙜𝙤 𝙂𝙡𝙪𝙚𝙜𝙪𝙣", "\n15 𝙂𝙧𝙚𝙚𝙣 𝙅𝙚𝙡: ", "\n\nMore logo for : logov5 ➫ Comming Soon"
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
      apiUrl =`https://rest-api-001.faheem001.repl.co/api/textpro?number=17&text=${name}`;
      message = "『𝙍𝙚𝙙 𝙂𝙤𝙡𝙙』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "2":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=18&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 3𝙙』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "3":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=19&text=${name}`;
      message = "『𝙇𝙞𝙜𝙝𝙩 𝙂𝙤𝙡𝙙』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "4":
      apiUrl = `https://rest-api-001.Naughtyx10.repl.co/api/textpro?number=20&text=${name}`;
      message = "『𝘽𝙡𝙖𝙘𝙠 𝙏𝙚𝙭𝙩𝙪𝙧𝙚』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "5":
      apiUrl = `https://rest-api-001.Naughtyx10.repl.co/api/textpro?number=21&text=${name}`;
      message = "『𝘾𝙡𝙤𝙪𝙙𝙮 𝙎𝙠𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "6":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=22&text=${name}`;
      message = "『𝙉𝙤𝙩 𝙒𝙤𝙧𝙠𝙞𝙣𝙜 𝘽𝙪𝙩 𝙁𝙞𝙭𝙚𝙙 𝙎𝙤𝙤𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "7":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=80&text=${name}`;
      message = "『𝙋𝙧𝙚𝙢𝙞𝙪𝙢 𝙂𝙤𝙡𝙙』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽: ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "8":
      apiUrl = `8https://rest-api-001.faheem001.repl.co/api/textpro?number=24&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝘽𝙡𝙤𝙤𝙙』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "9":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=25&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝙇𝙚𝙖𝙫𝙚』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙼𝚛.𝙵𝚊𝚛𝚒𝚜";
      break;
    case "10":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=26&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝙃𝙤𝙧𝙧𝙤𝙧』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "11":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=27&text=${name}`;
      message = "『𝘾𝙡𝙤𝙪𝙙𝙮 𝙏𝙝𝙪𝙣𝙙𝙚𝙧』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "12":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=28&text=${name}`;
      message = "『𝙉𝙤𝙩 𝙒𝙤𝙧𝙠𝙞𝙣𝙜 𝘽𝙪𝙩 𝙁𝙞𝙭𝙚𝙙 𝙎𝙤𝙤𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "13":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=29&text=${name}`;
      message = "『 𝙇𝙤𝙜𝙤 𝙃𝙪𝙣𝙩𝙚𝙙』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "14":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=30&text=${name}`;
      message = "『𝙇𝙤𝙜𝙤 𝙂𝙡𝙪𝙚𝙜𝙪𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "15":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=31&text=${name}`;
      message = "『𝙂𝙧𝙚𝙚𝙣 𝙅𝙚𝙡』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    default:
      return api.sendMessage(`𝙄𝙣𝙫𝙖𝙡𝙞𝙙 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚! 𝙐𝙨𝙚: +𝙡𝙤𝙜ov4 𝙡𝙞𝙨𝙩 𝙩𝙤 𝙨𝙝𝙤𝙬 𝙖𝙡𝙡 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚𝙨`, threadID, messageID);
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
