var naughty = "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logov2",
  version: "1.0",
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
      "\n1 : 𝙎𝙞𝙡𝙫𝙚𝙧 𝙟𝙚𝙬𝙚𝙧𝙡𝙮", "\n2 : 𝙔𝙚𝙡𝙡𝙤𝙬 𝙟𝙚𝙬𝙚𝙧𝙡𝙮", "\n3 :𝙎𝙝𝙞𝙣𝙮 𝙈𝙚𝙩𝙖𝙡", "\n4 : 𝙋𝙪𝙧𝙥𝙡𝙚 𝙜𝙚𝙢","\n5 : 𝙍𝙖𝙞𝙣𝙗𝙤𝙬 𝙈𝙚𝙩𝙖𝙡","\n6 : 𝙎𝘾𝙄 𝙁𝙄 𝙡𝙤𝙜𝙤",      
      "\n7 : 𝙬𝙤𝙤𝙙 𝙏𝙚𝙭𝙩", "\n8 : 𝘽𝙖𝙜𝙖𝙡 𝙏𝙚𝙭𝙩", "\n9 : 𝘽𝙞𝙨𝙘𝙪𝙞𝙩 𝙏𝙚𝙭𝙩", "\n10 : 𝘼𝙗𝙨𝙩𝙧𝙖 𝙜𝙤𝙡𝙙", "\n11 : 𝙍𝙪𝙨𝙩𝙮 𝙈𝙚𝙩𝙖𝙡", "\n12 : 𝙁𝙧𝙪𝙞𝙩 𝙟𝙪𝙞𝙘𝙚",       
      "\n13 : 𝙞𝙘𝙚 𝙘𝙧𝙚𝙖𝙢", "\n14 : 𝙈𝙖𝙧𝙗𝙡𝙚 𝙈𝙚𝙩𝙖𝙡", "\n15 : 𝙎𝙡𝙖𝙗𝙨 𝙈𝙖𝙧𝙗𝙡𝙚", "\n\n𝙈𝙤𝙧𝙚 𝙡𝙤𝙜𝙤 𝙛𝙤𝙧 : 𝙡𝙤𝙜𝙤𝙫3 𝙘𝙤𝙢𝙞𝙣𝙜 𝙨𝙤𝙤𝙣 𝙁𝙤𝙧 𝙬𝙖𝙞𝙩 𝙡𝙤𝙜𝙤𝙫3"    
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
      apiUrl =`https://reset-api.ch9nd.repl.co/api/textpro/16?text=${name}`;
      message = "『𝙎𝙞𝙡𝙫𝙚𝙧 𝙟𝙚𝙬𝙚𝙧𝙡𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "2":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/17?text=${name}`;
      message = "『𝙔𝙚𝙡𝙡𝙤𝙬 𝙟𝙚𝙬𝙚𝙧𝙡𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "3":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/18?text=${name}`;
      message = "『𝙎𝙝𝙞𝙣𝙮 𝙈𝙚𝙩𝙖𝙡』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "4":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/19?text=${name}`;
      message = "『𝙋𝙪𝙧𝙥𝙡𝙚 𝙜𝙚𝙢』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "5":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/20?text=${name}`;
      message = "『𝙍𝙖𝙞𝙣𝙗𝙤𝙬 𝙈𝙚𝙩𝙖𝙡』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "6":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/21?text=${name}`;
      message = "『𝙎𝘾𝙄 𝙁𝙄 𝙡𝙤𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "7":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/22?text=${name}`;
      message = "『𝙬𝙤𝙤𝙙 𝙏𝙚𝙭𝙩』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽: ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "8":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/23?text=${name}`;
      message = "『𝘽𝙖𝙜𝙖𝙡 𝙏𝙚𝙭𝙩』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "9":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/24?text=${name}`;
      message = "『𝘽𝙞𝙨𝙘𝙪𝙞𝙩 𝙏𝙚𝙭𝙩』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "10":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/25?text=${name}`;
      message = "『𝘼𝙗𝙨𝙩𝙧𝙖 𝙜𝙤𝙡𝙙』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "11":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/26?text=${name}`;
      message = "『𝙍𝙪𝙨𝙩𝙮 𝙈𝙚𝙩𝙖𝙡』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "12":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/27?text=${name}`;
      message = "『𝙁𝙧𝙪𝙞𝙩 𝙟𝙪𝙞𝙘𝙚』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "13":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/28?text=${name}`;
      message = "『𝙞𝙘𝙚 𝙘𝙧𝙚𝙖𝙢』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "14":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/29?text=${name}`;
      message = "『𝙈𝙖𝙧𝙗𝙡𝙚 𝙈𝙚𝙩𝙖𝙡』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "15":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/30?text=${name}`;
      message = "『𝙎𝙡𝙖𝙗𝙨 𝙈𝙖𝙧𝙗𝙡𝙚』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    default:
      return api.sendMessage(`𝙄𝙣𝙫𝙖𝙡𝙞𝙙 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚! 𝙐𝙨𝙚: +𝙡𝙤𝙜ov2 𝙡𝙞𝙨𝙩 𝙩𝙤 𝙨𝙝𝙤𝙬 𝙖𝙡𝙡 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚𝙨`, threadID, messageID);
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
