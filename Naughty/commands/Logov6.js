var naughty = "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logov6",
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
      "\n1 : Harry Porter", "\n2 : Green Horror", "\n3 : Foggy Window", "\n4 : Fire Work","\n5 : Fiction","\n6 : Drop Water",
      "\n7 : Christmis ", "\n8 :Blue Circuit", "\n9 : Black Pink", "\n10 : Berry", "\n11 3D Water Pipe: ", "\n12 3D Christmis: ",
      "\n13 : 3D Scifi", "\n14 : 3D Rainbow", "\n15 3D Neon Light:  ", "\n16 : impressiveglitch", "\n17 : magma", "\n18 : logowolf2","\n19 : logowolf","\n20 : natural",
      "\n21 : neondevil ", "\n22 :space", "\n23 : Black Pink", "\n\nFor logov7 Type Prefixlogov7"
    ];
    return api.sendMessage(`All types of logos:\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`Use: logo number <name>\n to see all logo types: Textpro list`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "1":
      apiUrl =`https://api.zahwazein.xyz/textpro/harrypotter?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Harry Potter』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "2":
      apiUrl = `https://api.zahwazein.xyz/textpro/greenhorror?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Green Horror』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "3":
      apiUrl = `https://api.zahwazein.xyz/textpro/foggywindows?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Foggy Window』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "4":
      apiUrl = `https://api.zahwazein.xyz/textpro/firework?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Fire Work』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "5":
      apiUrl = `https://api.zahwazein.xyz/textpro/fiction?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Fiction』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "6":
      apiUrl = `https://api.zahwazein.xyz/textpro/dropwater?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Drop Water』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "7":
      apiUrl = `https://api.zahwazein.xyz/textpro/christmas?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Christmis』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽: ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "8":
      apiUrl = `https://api.zahwazein.xyz/textpro/bluecircuit?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Blue Circuit』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "9":
      apiUrl = `https://api.zahwazein.xyz/textpro/blackpink?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Blck Pink』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "10":
      apiUrl = `https://api.zahwazein.xyz/textpro/berry?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Berry』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "11":
      apiUrl = `https://api.zahwazein.xyz/textpro/3dwaterpipe?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『3D Water Pipe』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "12":
      apiUrl = `https://api.zahwazein.xyz/textpro/3dchristmas?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『3D Christmis』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "13":
      apiUrl = `https://api.zahwazein.xyz/textpro/3dscifi?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『3D Scifi』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "14":
      apiUrl = `https://api.zahwazein.xyz/textpro/3drainbow?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『3D Rainbow』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    case "15":
      apiUrl = `https://api.zahwazein.xyz/textpro/3dneonlight?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『3D Neon Light』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
        case "16":
      apiUrl =`https://api.zahwazein.xyz/textpro/impressiveglitch?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Impressive Glitch』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
        case "17":
      apiUrl =`https://api.zahwazein.xyz/textpro/magma?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『Magma』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
       case "18":
      apiUrl =`https://api.zahwazein.xyz/textpro/logowolf2?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『logowolf2』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
       case "19":
      apiUrl =`https://api.zahwazein.xyz/textpro/logowolf?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『logowolf』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
       case "20":
      apiUrl =`https://api.zahwazein.xyz/textpro/natural?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『natural』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
       case "21":
      apiUrl =`https://api.zahwazein.xyz/textpro/neondevil?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『neondevil』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
       case "22":
      apiUrl =`https://api.zahwazein.xyz/textpro/space?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『space』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
       case "23":
      apiUrl =`https://api.zahwazein.xyz/textpro/sketch?apikey=zenzkey_811f405cfea0&text=${name}`;
      message = "『sketch』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ";
      break;
    default:
      return api.sendMessage(`𝙄𝙣𝙫𝙖𝙡𝙞𝙙 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚! 𝙐𝙨𝙚: /logov6 𝙡𝙞𝙨𝙩 𝙩𝙤 𝙨𝙝𝙤𝙬 𝙖𝙡𝙡 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚𝙨`, threadID, messageID);
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
