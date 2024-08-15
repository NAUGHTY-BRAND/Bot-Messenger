const axios = require('axios');
module.exports.config = {
  name: "quiz2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NAUGHTY", //don't change the credit or else you are madarchot//
  description: "QUIZ",
  commandCategory: "Game",
  cooldowns: 5,
};

module.exports.handleReply = async function({ api, event, handleReply, Currencies }) {
  try {
    const response = await axios.get('https://rishadapi.rishad100.repl.co/quiz?apikey=fuck');
    const data = response.data;
    const userAnswer = event.body.trim().toUpperCase();

    if (userAnswer === data.answer.toUpperCase()) {
      await Currencies.increaseMoney(event.senderID, 50);
      api.sendMessage("[ QUIZ ] CORRECT ANSWER YOU GET 50 COINS", event.threadID);
    } else {
      api.sendMessage("[ QUIZ ] CHEE STUPID YOU GIVE WRONG ANSWER FUCK YOU\n CORRECT ANSWER IS ╰┈➤ ❝ [ " + data.answer + " ] ❞", event.threadID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("[ QUIZ ] ERROR OCCURED CONTACT NAUGHTY USING CALLAD COMMAND", event.threadID);
  }
};

module.exports.run = async function({ api, event }) {
  try {
    const response = await axios.get('https://rishadapi.rishad100.repl.co/quiz?apikey=fuck');
    const data = response.data;
     // const NAUGHTY = data.`${ANSWER}`;
    const question = data.question;
   
    const options = `A ) ${data.A}\nB ) ${data.B}\nC ) ${data.C}\nD ) ${data.D}`;

    const sentMsg = await api.sendMessage(`${question}\n\n${options}`, event.threadID);

    global.client.handleReply.push({
      name: this.config.name,
      messageID: sentMsg.messageID,
      author: event.senderID,
      type: "quiz"
    });
  } catch (error) {
    console.error(error);
    api.sendMessage("[ QUIZ ] ERROR OCCURED CONTACT NAUGHTY USING CALLAD COMMAND", event.threadID);
  }
};