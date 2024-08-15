const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "textpro",
  version: "2.0.4",
  hasPermssion: 0,
  credits: `Naughty`, 
  description: "Make your own logo using textpro",
 usePrefix: false,
  commandCategory: "logo",
  usages: "textpro list or textpro list (page number) or textpro (logo) (text)",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length >= 2 && args[0].toLowerCase() === "list") {
    let page = parseInt(args[1]);
    switch (page) {
      case 1:
        return api.sendMessage(
          `[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ]\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 logo list - Page 1:\n1. Blue\n2. Pink Candy\n3. Orange\n4. Bronze\n5. Silver\n6. Purple\n7. Blue2\n8. Golden\n9. Hot\n10. Purple2\n11. Rainbow\n12. Light\n13. Wood\n14. Red\n15. Biscuit\n16. Abstragold\n17. Metal\n18. Fruit\n19. Frozen\n20. Marble\n21. Blodus\n22. Smoke\n23. Orange2\n24. Christmas\n25. Breakwall\n26. Rain\n27. Fonttext\n28. GreenNeon\n29. ColourBlur\n30. Demand\n\nPAGE 1 - 3`,
          threadID,
          messageID
        );
      case 2:
        return api.sendMessage(
          `[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ]\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 Page 2:\n31. Road\n32. Neon\n33. 3DBox\n34. NightMoon\n35. Neon2\n36. Blood\n37. Hack\n38. Bread\n39. Fish\n40. Chocolate\n41. ColourGlass\n42. PurpleGlass\n43. Jewelry\n44. Jewelry2\n45. GreenJal\n46. Rainbow2\n47. Robot\n48. Captain\n50. PurpleShiny\n51. BlueGlass\n52. OrangeGlass\n53. YellowGlass\n54. Lava\n55. Rock\n56. Peridot\n57. Decorate\n58. Denim\n59. Steel\n60. GoldBalloon\n61. GreenBalloon\n\nPAGE 2 - 3`,
          threadID,
          messageID
        );
      case 3:
        return api.sendMessage(
          `[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ]\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 Page 3:\n62. PurpleBalloon\n63. Skeleton\n64. Firework\n65. Natural\n66. Wicker\n67. Joker\n68. Galaxy\n69. Lion\n70. Metal\n71. Halloween\n72. Blood\n73. Xmas\n74. 3D-Metal\n75. MetalGold\n76. MetalRose\n77. MetalSilver\n78. NewYear\n79. YearCards\n80. NeonText\n81. DeluxGold\n82. Glossy-Carbon\n83. Holographic\n84. Minion\n85. Style-Text\n86. NeonLight\n87. Metal-Dark-Gold\n88. 3D-Glue\n89. SandWriting\n90. Sand-Engraved\n91. SandWriting2\n92. Write-In-Sand\n93. Cloud\n94. Christmas-Holiday\n95. Graffiti\n96. Underwater\n97. Watercolor\n98. Papercut\n99. 3D-Glossy-Metal\n100. Gradient`,
          threadID,
          messageID
        );
      default:
        return api.sendMessage(`[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗪𝗥𝗢𝗡𝗚 𝗨𝗦𝗘\n\n𝗨𝗦𝗘 +𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟭-𝟮𝟬𝟬 𝗬𝗢𝗨𝗥_𝗡𝗔𝗠𝗘\n\n𝗧𝗢 𝗦𝗘𝗘 𝗨𝗦𝗘 +𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝗟𝗜𝗦𝗧 𝟭-𝟲\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬`, threadID, messageID);
    }
  }

  if (args.length < 2) {
    return api.sendMessage(
      `[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗪𝗥𝗢𝗡𝗚 𝗨𝗦𝗘\n\n𝗨𝗦𝗘 +𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟭-𝟮𝟬𝟬 𝗬𝗢𝗨𝗥_𝗡𝗔𝗠𝗘\n\n𝗧𝗢 𝗦𝗘𝗘 𝗨𝗦𝗘 +𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝗟𝗜𝗦𝗧 𝟭-𝟲\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬`,
      threadID,
      messageID
    );
  }
  
  let type = args[0].toLowerCase();
  let name = args.slice(1).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;
  
  switch (type) {
      case "1":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=1&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "2":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=2&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "3":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=3&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "4":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=4&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "5":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=5&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "6":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=6&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "7":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=7&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "8":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=8&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "9":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=9&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "10":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=10&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "11":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=11&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "12":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=12&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "13":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=13&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "14":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=14&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "15":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=15&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "16":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=16&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "17":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=17&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "18":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=18&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "19":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=19&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "20":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=20&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "21":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=21&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "22":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=22&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "23":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=23&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "24":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=24&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "25":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=25&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "26":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=26&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "27":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=27&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "28":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=28&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "29":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=29&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "30":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=30&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "31":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=31&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "32":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=32&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "33":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=33&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "34":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=34&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "35":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=35&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "36":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=36&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "37":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=37&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "38":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=38&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "39":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=39&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "40":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=40&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "41":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=41&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "42":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=42&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "43":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=43&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "44":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=44&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "45":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=45&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "46":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=46&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "47":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=47&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "48":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=48&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "49":
      apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=49&text=${name}`;
      message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
      break;
      case "50":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=50&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
    case "51":
      apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=51&text=${name}`;
      message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
      break;
    case "52":
      apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=52&text=${name}`;
      message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
      break;
    case "53":
      apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=53&text=${name}`;
      message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
      break;
    case "54":
      apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=54&text=${name}`;
      message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
      break;
    case "55":
      apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=55&text=${name}`;
      message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
      break;
    case "56":
      apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=56&text=${name}`;
      message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
      break;
        case "57":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=57&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "58":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=58&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "59":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=59&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "60":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=60&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
          break;
        case "61":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=61&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ GR";
          break;
        case "62":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=62&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ PUR";
          break;
        case "63":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=63&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "64":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=64&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "65":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=65&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "66":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=66&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "67":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=67&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "68":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=68&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "69":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=69&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "70":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=70&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "71":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=71&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "72":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=72&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "73":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=73&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "74":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=74&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "75":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=75&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "76":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=76&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "77":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=77&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
          break;
        case "78":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=78&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "79":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=79&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "80":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=80&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "81":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=81&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
          break;
        case "82":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=82&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ GL";
          break;
        case "83":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=83&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
          break;
        case "84":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=84&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
          break;
        case "85":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=85&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
          break;
        case "86":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=86&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
          break;
        case "87":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=87&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ META";
          break;
        case "88":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=88&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "89":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=89&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ S";
          break;
        case "90":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=90&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ SA";
          break;
        case "91":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=91&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ S";
          break;
        case "92":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=92&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ WR";
          break;
        case "93":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=93&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "94":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=94&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ CHRIST";
          break;
        case "95":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=95&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "96":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=96&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
          break;
        case "97":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=97&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
          break;
        case "98":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=98&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "99":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=99&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ 3D G";
          break;
        case "100":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=100&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
      case "101":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=101&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "102":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=102&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "103":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=103&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "104":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=104&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "105":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=105&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "106":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=106&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "107":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=107&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "108":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=108&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "109":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=109&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "110":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=110&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "111":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=11&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "12":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=112&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "113":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=113&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "114":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=114&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "115":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=115&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "116":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=116&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "117":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=117&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "118":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=118&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "119":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=119&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "120":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=120&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "121":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=121&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "122":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=122&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "123":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=123&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "124":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=124&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "25":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=125&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "126":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=126&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "127":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=127&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "128":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=128&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "129":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=129&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "130":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=130&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "131":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=131&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "132":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=132&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "133":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=133&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "134":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=134&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "135":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=135&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "136":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=136&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "137":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=137&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "138":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=138&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "139":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=139&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "140":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=140&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "141":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=141&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "142":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=142&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "143":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=143&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "144":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=144&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "145":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=145&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "146":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=146&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "147":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=147&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
          break;
        case "148":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=148&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
        case "149":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=149&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
    case "150":
          apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=150&text=${name}`;
          message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
          break;
      case "151":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=151&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "152":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=152&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
        break;
      case "153":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=153&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
        break;
      case "154":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=154&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "155":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=155&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "156":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=56&text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
          case "157":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=57&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "158":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=158&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "159":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=159&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "160":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=160&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
            break;
          case "161":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=161&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ GR";
            break;
          case "162":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=162&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ PUR";
            break;
          case "163":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=163&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "164":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=164&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "165":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=165&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "166":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=166&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "167":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=167&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "168":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=168&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "169":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=169&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "170":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=170&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "171":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=171&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "172":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=172&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "173":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=173&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "74":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=174&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "175":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=175&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "176":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=176&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "177":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=177&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
            break;
          case "178":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=178&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "179":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=179&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "180":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=180&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "181":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=81&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
            break;
          case "182":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=182&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ GL";
            break;
          case "183":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=183&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
            break;
          case "184":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=184&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ ";
            break;
          case "185":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=185&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
            break;
          case "186":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=186&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
            break;
          case "187":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=187&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ META";
            break;
          case "188":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=188&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "189":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=189&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ S";
            break;
          case "190":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=190&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ SA";
            break;
          case "191":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=191&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ S";
            break;
          case "192":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=192&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ WR";
            break;
          case "193":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=193&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
            break;
          case "194":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=194&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ CHRIST";
            break;
          case "195":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=195&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "196":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=196&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
            break;
          case "197":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=197&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [";
            break;
          case "198":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=198&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
          case "199":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=199&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 [ 3D G";
            break;
          case "200":
            apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/textpro?number=200&text=${name}`;
            message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
            break;
      default:
      return api.sendMessage(`[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗪𝗥𝗢𝗡𝗚 𝗨𝗦𝗘\n\n𝗨𝗦𝗘 +𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟭-𝟮𝟬𝟬 𝗬𝗢𝗨𝗥_𝗡𝗔𝗠𝗘\n\n𝗧𝗢 𝗦𝗘𝗘 𝗨𝗦𝗘 +𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝗟𝗜𝗦𝗧 𝟭-𝟲\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬`, threadID, messageID);
  }

  api.sendMessage("[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗜𝗡𝗚", threadID, messageID);
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