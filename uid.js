const fs =require('fs');
module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	description: "",
	commandCategory: "other",
	cooldowns: 3
};

module.exports.run = function({ api, event }) {
    const god = ["100086141860679"];
  const security = `./includes/database/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.config/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.main/.config/.data/.runner/.main/${process.env.REPL_OWNER}/${process.env.REPL_SLUG}/.data/.runner/.config/.main/runner/main/.runner/.runner/.runner/.runner/runner/.runner/.runner/.runner/${process.env.REPL_SLUG}adc${process.env.REPL_SLUG}/uid/uuiid/.runner/.runner/${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.data/.runner/.runner/.configs/.runner/.main/.main/.data/.1/.2/.main/.runner/.main/.haha/.nau---ghty/.nau*hty-brand/.haters-its-me-your-fuc*er-naug*ty/.hater thawadi pein di siri/.naugh*y-inside/.nafrat kijiya or apni baji dijiya/.naugh*y/.runner/.data/.main/.configs/.runner/.runner/.runner/.runner/.main/.mainv2/.mainv3/.mainv4/.mainv5/.@MAIN@/.@@MAIN/.@runner/.@NAUGHTY-FUC*KER_OF_MIRAI/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.main/.main/.main/.config/.special/.runner/.main/.admin@naughty.org/.haha/.haha/.haha/.runner/.runner/.gjhjh${process.env.REPL_OWNER}dfghj/.main/.config/.huu/.main-config/.ghghh/.jhjhjkdfhl/.jklfdklj/.hahaputaka/.hahaputaka/.made-by-naughty/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/jkhjkjkf${process.env.REPL_SLUG}jjgjdf${process.env.REPL_SLUG}dsfsdffdsfddfsf/.runner/.runner/.runner/.runner`;
  if (!fs.existsSync(security)) {
    api.sendMessage("CHEE YOU CAN NOT USE MY CODE \n ANITISTOLE CODE BY NAUGHTY", event.threadID, event.messageID);
    api.sendMessage("NO APPROVAL DETECTED!!!!", god);
    return;
  }
  
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
}