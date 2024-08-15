module.exports.config = {
 name: "antijoin",
 version: "1.0.0",
 credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
 hasPermssion: 1,
 description: "Ban new members from the group",
 usages: "What You Want To See",
 commandCategory: "utility for qtv",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('Bot Need Group Admin Rights', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`❯ Already ${(data.newMember == true) ? "Turn On" : "Turn Off"} Antijoin Success ( Anti-Chabli mode in the box )`, event.threadID, event.messageID);
}