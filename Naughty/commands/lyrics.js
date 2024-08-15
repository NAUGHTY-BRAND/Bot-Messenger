const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "lyrics",
  version: "4.0.0",
  hasPermssion: 0,
  credits: "Sania Rajput",
  description: "Fetch lyrics of a song",
  commandCategory: "media",
  usages: "lyrics [song name]",
  cooldowns: 5,
},

module.exports.run = async function ({ api, event, args }) {
  try {
    const query = args.join(" ");
    if (!query) {
      return api.sendMessage(`Please provide a song name.`, event.threadID, event.messageID);
    }
    const response = await axios.get(`https://priyansh-ai.onrender.com/lyrics?song=${encodeURIComponent(query)}`);
    const data = response.data;

    const imageResponse = await axios.get(data.image, { responseType: 'arraybuffer' });
    fs.writeFileSync(__dirname + '/cache/lyrics.png', Buffer.from(imageResponse.data));

    const formattedResponse = `❏ Credit: ${data.credit}\n\n❏ Title: ${data.title}\n❏ Artist: ${data.artist}\n\n❏ Lyrics:\n${data.lyrics}`;

    return api.sendMessage({
      body: formattedResponse,
      attachment: fs.createReadStream(__dirname + '/cache/lyrics.png')
    }, event.threadID);
  } catch (err) {
    console.error(err);
    return api.sendMessage('An error occurred while fetching lyrics.', event.threadID);
  }
};