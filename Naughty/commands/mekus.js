const axios = require("axios");
const fs = require("fs");
const path = require("path");

const config = {
  name: "mekus",
  version: "1.0.0",
  hasPermission: 0,
  credits: "NAUGHTY", 
  description: "Automatically responds with a randomly selected audio greeting when certain keywords are detected in the message.",
  commandCategory: "Automation",
  cooldowns: 1,
};

async function handleEvent({ event, api }) {
  const message = event.body.toLowerCase();
  const senderID = event.senderID;

  const audioGreetings = {
    "mekus, mekus mekus, mekusmekus": [
      "https://drive.google.com/uc?export=download&id=16q_ZEHIn_I5CfIKMln9h4vd36UGQnyGM",
      "https://drive.google.com/uc?export=download&id=16q_ZEHIn_I5CfIKMln9h4vd36UGQnyGM",
      "https://drive.google.com/uc?export=download&id=16q_ZEHIn_I5CfIKMln9h4vd36UGQnyGM",
    ],
  };

  for (const keywords in audioGreetings) {
    if (audioGreetings.hasOwnProperty(keywords)) {
      const keywordsToCheck = keywords.split(',').map(kw => kw.trim());

      for (const kw of keywordsToCheck) {
        if (message === kw) {
          const randomIndex = Math.floor(Math.random() * audioGreetings[keywords].length);
          const selectedAudioUrl = audioGreetings[keywords][randomIndex];

          const startTime = new Date();

          try {
            const response = await axios.get(selectedAudioUrl, { responseType: "arraybuffer" });
            const audioBuffer = Buffer.from(response.data, "binary");

            const audioFilePath = path.join(__dirname, "cache", `${keywords}_${randomIndex}.mp3`);
            fs.writeFileSync(audioFilePath, audioBuffer);

            setTimeout(() => {
              const attachment = fs.createReadStream(audioFilePath);
              api.sendMessage({ body: "Mekus Mekus ahh Tornado!!", attachment }, event.threadID, event.messageID);
              fs.unlinkSync(audioFilePath);

              const endTime = new Date();
              const executionTime = endTime - startTime;
              console.log(`Command execution time: ${executionTime} milliseconds`);
            }, 3000); // 3000 milliseconds (3 seconds) delay
          } catch (error) {
            console.error(error);
          }

          break;
        }
      }
    }
  }
}

module.exports = {
  config,
  handleEvent,
  listenGlobal: true,
};
