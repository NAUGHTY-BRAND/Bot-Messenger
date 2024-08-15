module.exports.config = {
  name: "gendchk",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "August Quinn//modified by Jonell MAGALLANES",
  description: "Automatically warns users when certain sensitive keywords are detected in the message.",
  commandCategory: "System",
  cooldowns: 1
};

module.exports.run = async function ({ api, event, args }) {
    var at = await data[id].gender;  // Assuming gender is a promise
    var gender = at == 2 ? "a" : at == 1 ? "b" : "Not Found";
    api.sendMessage(`${at}`, event.threadID);
};
