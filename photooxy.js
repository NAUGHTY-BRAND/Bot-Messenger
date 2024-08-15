const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "photooxy",
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
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/1?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "2":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/2?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "3":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/3?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "4":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/4?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "5":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/5?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "6":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/6?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "7":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/7?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "8":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/8?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "9":
        apiUrl = `https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/9?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "10":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/10?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "11":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/11?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "12":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/12?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "13":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/13?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "14":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/14?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "15":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/15?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "16":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/16?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "17":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/17?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "18":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/18?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "19":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/19?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "20":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/20?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "21":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/21?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "22":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/22?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "23":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/23?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬 ";
        break;
      case "24":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/24?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "25":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/25?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "26":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/26?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "27":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/27?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "28":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/28?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "29":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/29?text=${name}`;
        message = "[ 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 ] => 𝗖𝗥𝗘𝗔𝗧𝗘𝗗\n\n𝗥𝗘𝗦𝗧 𝗔𝗣𝗜 𝗕𝗬 𝗡𝗔𝗨𝗚𝗛𝗧𝗬\n𝗧𝗢𝗧𝗔𝗟 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝟮𝟬𝟬";
        break;
      case "30":
        apiUrl = `$https://8a1e5fc5-4f8a-472c-be03-9ab64b546656-00-2qzmvqfiamgi9.janeway.replit.dev/api/photooxy/30?text=${name}`;
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