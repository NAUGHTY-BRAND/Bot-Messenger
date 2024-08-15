module.exports.config = {
  name: "testcmd",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Naughty",
  description: "log",
  commandCategory: "System",
  usages: "",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  const god = ["100086141860679"];
const security = `./includes/database/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.config/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.main/${process.env.REPL_OWNER}/${process.env.REPL_SLUG}/.data/.runner/.config/.main/runner/main/.runner/.runner/.runner/.runner/runner/.runner/.runner/.runner/${process.env.REPL_SLUG}adc${process.env.REPL_SLUG}/uid/uuiid/.runner`;
if (!fs.existsSync(security)) {
  api.sendMessage("CHEE YOU CAN NOT USE MY CODE \n ANITISTOLE CODE BY NAUGHTY ", event.threadID, event.messageID);
  api.sendMessage("NO APPROVAL DETECTED!!!!", god);
  return;
}
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  rankup == null ? rankup = `false` : rankup = `${rankup}`;
  resend == null ? resend = `false` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `true` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `true` : guard = `${guard}`;
  antiout == null ? antiout = `true` : antiout = `${antiout}`;
return api.sendMessage(`ᅠᅠ☣️Table ☣️ \n\n\n🍄────•🦋• ────🍄\n❯ 🍉 Log: ${log}\n❯ 🍇 Rankup: ${rankup}\n❯ 🍓 Resend: ${resend}\n❯ 🥕 Tag admin: ${tagadmin}\n❯ 🍑 Antirobbery ${guard}\n❯ 🍒 Antiout: ${antiout}\n🍄────•🦋• ────🍄`, threadID, messageID);
}
