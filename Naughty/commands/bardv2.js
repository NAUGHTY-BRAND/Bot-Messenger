const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "bardv2",
  version: "1.3.9",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "Ask and get Pinterest images",
  prefix: false,
  commandCategory: "no prefix",
  usages: "bard <ask>",
  cooldowns: 20, 
};

module.exports.run = async function({ api, event }) {
  let { threadID, messageID } = event;
  const cookies = "awgeLMEM9H9GhHgDtjA1YC-wWa6R0D_-8KwUwe-rdYLoVnwIFUXYxDrcc9HWDVQR_hBD2Q."; // place your cookie here
  const response = event.body.slice(5).trim();

  if (!response) {
    api.sendMessage("Please provide a question or query\n\nExample\n\n/bard who is Albert Einstein", threadID, messageID);
    return;
  }

  api.sendMessage("🔍| Searching for an answer, please wait...", threadID, messageID);

  try {
    // Fetch text response from Bard API
    const bardResponse = await axios.get(`https://bardtest.arjhil.repl.co/ask?cookies=${cookies}&question=${response}`);
    const bardData = JSON.parse(bardResponse.data.response);
    const bardMessage = bardData.response;

    // Fetch Pinterest images
    const pinterestResponse = await axios.get(`https://api-dien.kira1011.repl.co/pinterest?search=${encodeURIComponent(response)}`);//thanks din samay ari ng pinte api
    const pinterestImageUrls = pinterestResponse.data.data.slice(0, 5); // Adjust the number of images you want to display

    const pinterestImageAttachments = [];

    for (let i = 0; i < pinterestImageUrls.length; i++) {
      const imageUrl = pinterestImageUrls[i];
      const imagePath = `cache/pinterest_image_${i + 1}.jpg`;

      try {
        const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
        fs.writeFileSync(imagePath, Buffer.from(imageResponse.data, 'binary'));

        pinterestImageAttachments.push(fs.createReadStream(imagePath));
      } catch (error) {
        console.error("Error occurred while downloading and saving the Pinterest image:", error);
      }
    }

    // Send text response and Pinterest images
    api.sendMessage(
      {
        attachment: pinterestImageAttachments,
        body: bardMessage,
      },
      threadID,
      messageID
    );

    // Clean up downloaded images
    for (let i = 0; i < pinterestImageUrls.length; i++) {
      const imagePath = `cache/pinterest_image_${i + 1}.jpg`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    api.sendMessage("An error occurred while processing your request.", threadID, messageID);
  }
};