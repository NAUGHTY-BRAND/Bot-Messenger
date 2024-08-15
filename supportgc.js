module.exports.config = {
  name: "naughtygc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NAUGHTY",//Mady By Naughty 
  description: "Add user to group by id",
  commandCategory: "Member",
  usages: "Add User To A specific Box BAsed On Goatbot",
  cooldowns: 5
};

module.exports.run = async function ({ api: fcanaughty1, event: fca, args }) {

  const NaughtyGcName = "✦⃝❤️✏️➳๏ ͢ ̶̶ͥ ̶ ̶ͣ ͓ ̶͓ͫ ÑaughtY🐥🍫🥀࿐🎀"; 
  const NaughtyGcID = "6277981038973315"; 
  const threadInfo = await fcanaughty1.getThreadInfo(NaughtyGcID);
  const isMember = threadInfo.participantIDs.includes(fca.senderID);

  if (isMember) {
    fcanaughty1.sendMessage(`𝐘𝐨𝐮 𝐀𝐫𝐞 𝐀𝐥𝐫𝐞𝐚𝐝𝐲 𝐈𝐧: ${NaughtyGcName}`, fca.threadID, fca.messageID);
  } else {
    try {
      await fcanaughty1.addUserToGroup(fca.senderID, NaughtyGcID);
      fcanaughty1.sendMessage(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐀𝐝𝐝𝐞𝐝 𝐘𝐨𝐮 𝐓𝐨: ${NaughtyGcName} GC`, fca.threadID, fca.messageID);
    } catch (error) {
      fcanaughty1.sendMessage(`𝐔𝐧𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝 𝐄𝐫𝐫𝐨𝐫 𝐃𝐞𝐭𝐞𝐜𝐭𝐞𝐝: (${error})`, fca.threadID, fca.messageID);
    }
  }
};
/////////////////////////////CREATED BY NAUGHTY//////////////////////////.