module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "0.0.1",
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
    description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (!data.antiout) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "NAUGHTY1" : "NAUGHTY2";
    if (type == "NAUGHTY1","NAUGHTY2") {
        api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
            if (error) {
                api.sendMessage(`${name} SORRY JANAM AP KO GROUP MA AGAIN ADD NI KAR PAYA🥺🥺`, event.threadID)
            } else api.sendMessage(`${name} BABY HUM SA BACH KAR KAHA JAO GAY?\nJAHA BHI JAO GAY 𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿 KO HI PAO GAY😇🤞`, event.threadID);
        })
    }
}