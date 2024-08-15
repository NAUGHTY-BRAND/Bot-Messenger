module.exports.config = {
  name: "antibd",
  eventType: ["log:user-nickname"],
  version: "0.0.1",
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
  description: "Against changing Bot's nickname"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(nickname, threadID, botID)
        var info = await Users.getData(author);
       // return api.sendMessage({ body: `𝘼𝙗𝙖𝙮 𝙆𝙤𝙞 𝙄𝙨☞${info.name}☜ 𝘾𝙝𝙪𝙩𝙞𝙮𝙖 𝙆𝙤 𝘽𝙖𝙩𝙖𝙤 𝙆𝙖 𝘽𝙤𝙩 𝙆𝙖 𝙉𝙞𝙘𝙠𝙣𝙖𝙢𝙚 𝘾𝙝𝙖𝙣𝙜𝙚 𝙆𝙖𝙧𝙣𝙖 𝘼𝙡𝙡𝙤𝙬 𝙉𝙞🙂🤌🤏`}, threadID);
    }  
}