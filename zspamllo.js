module.exports.config = {
name: "dontuse2",
	version: "",
	hasPermssion: 2,
	credits: "",
	description: "",
	usePrefix: true,
  commandCategory: "test",
	usages: "",
	cooldowns: 5,
	dependencies: "",
};

module.exports.run = function ({ api, event, Users }) {
	var { threadID, messageID } = event;
	var k = function (k) { api.sendMessage(k, threadID)};

	//*vonglap
	
for (i = 0; i < 10000; i++) {
 k("I THINK YOU ARE FOOLISH ULTRA PROMAX");
}
	
	}
	