module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Naughty",
    description: "AI powered by Blackbox",
  prefix: false,
    commandCategory: "ai",
    usages: "[ask]",
    cooldowns: 20
};

module.exports.run = async function({ api, event, args }) {

api.sendMessage(`Chee Stupid Type Naughty (No Prefix) <Your Question>\n\nE.g \n Naughty Who Are you`, event.messageID, event.threadID);
  
//     const axios = require("axios");
//     let { messageID, threadID, senderID, body } = event;
//     let tid = threadID,
//     mid = messageID;
//     const q = encodeURIComponent(args.join(" "));
//     if (!q) return api.sendMessage("🍃 | Please Provide your questions\nExample:\nAi what is solar system?", tid, mid);
//     try {
//         api.setMessageReaction("🔍", mid, (err) => {}, true);

// api.sendMessage("🔍 | AI is Searching and typing your answer! Please Wait...", tid, mid);
//         const url = 'https://useblackbox.io/chat-request-v4';

//   const data = {
//     textInput: q,
//     allMessages: [{ user: q }],
//     stream: '',
//     clickedContinue: false,
//   };

// const res = await axios.post(url, data);

//     const m = res.data.response[0][0];
// return api.sendMessage(m, tid, mid)
//    } catch(e){
//   return api.sendMessage(e.message, tid, mid)
//     }
};