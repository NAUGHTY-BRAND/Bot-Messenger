module.exports.config = {
  name: "sing",
  version: "2.0.4",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "Play a song",
  commandCategory: "utility",
  usages: "[title]",
  prefix: true,
  cooldowns: 20,
  dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": "",
    "ytdl-core": "",
    "yt-search": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = require("axios");
  const fs = require("fs-extra");
  const ytdl = require("ytdl-core");
  const request = require("request");
  const yts = require("yt-search");

  const input = event.body;
  const text = input.substring(12);
  const data = input.split(" ");

  if (data.length < 2) {
    return api.sendMessage("Please put a song", event.threadID);
  }

  data.shift();
  const song = data.join(" ");

  try {
    api.sendMessage(`Finding "${song}". Please wait...`, event.threadID);

    const searchResults = await yts(song);
    if (!searchResults.videos.length) {
      return api.sendMessage("Error: Invalid request.", event.threadID, event.messageID);
    }

    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const stream = ytdl(videoUrl, { filter: "audioonly" });

    const fileName = `${event.senderID}.mp3`;
    const filePath = __dirname + `/cache/${fileName}`;

    stream.pipe(fs.createWriteStream(filePath));

    stream.on('response', () => {
      console.info('[DOWNLOADER]', 'Starting download now!');
    });

    stream.on('info', (info) => {
      console.info('[DOWNLOADER]', `Downloading ${info.videoDetails.title} by ${info.videoDetails.author.name}`);
    });

    stream.on('end', () => {
      console.info('[DOWNLOADER] Downloaded');

      if (fs.statSync(filePath).size > 26214400) {
        fs.unlinkSync(filePath);
        return api.sendMessage('ABAY 25MB SA ZAYADA KA SONG APNA BAAP KI SHADI PAR LAGAY GA 🤓', event.threadID);
      }

      const message = {
        body: `🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
  🔴▦══🅱🅾🆃══▦🔴
🔴▦══██🅼🆄🅸🅲██══▦🔴     
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
✧💙✧❣️✧💙             ┊┊┊┊┊┊┊⇣❥10                 ┊┊┊┊┊┊⇣❥20                   ┊┊┊┊┊⇣❥30                     ┊┊┊┊⇣❥40                         ┊┊┊⇣❥50                          ┊┊⇣❥60                       
┊⇣❥70                             
⇣❥80                     
❥❥━──➸➽90 ♥️🎵 
Title: ${video.title}
⏱️ Artist: ${video.author.name}
⏱️Processing time: 5 second

    ♥️🅼🆄🆂🅸🅲 🅻🅾🆅🅴♥️
        ⇆ㅤ◁ㅤ❚❚ㅤ▷ㅤ↻
       ╔━━━━━━❖❖🖤❖❖━━━━━━╗
      ◆☬💠❉🅽🅰🆄🅶🅷🆃🆈❉💠☬◆
       ╚━━━━━━❖❖🖤❖❖━━━━━━╝
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴\n`,
        attachment: fs.createReadStream(filePath)
      };

      api.sendMessage(message, event.threadID, () => {
        fs.unlinkSync(filePath);
      });
    });
  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};
