module.exports.config = {
	name: "pending",
	version: "1.0.5",
	credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",
	hasPermssion: 2,
	description: "Manage bot's waiting messages",
	commandCategory: "system",
	cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "invaildNumber": "%1 Not A Valid Number",
        "cancelSuccess": "Successfully rejected %1 group!",
        "notiBox": "Your box has been approved by the admin to be able to use the bot",
        "approveSuccess": "Successfully approved %1 group!",

        "cantGetPendingList": "Can't get the list of waiting groups!",
        "returnListPending": "「PENDING」❮ Total number of groups to be approved: %1 group ❯\n\n%2",
        "returnListClean": "「PENDING」There are currently no groups in the queue"
    },
    "en": {
        "invaildNumber": "%1 is not an invalid number",
        "cancelSuccess": "Refused %1 thread!",
        "notiBox": "Ñ  A  U  G  H  T  Y BOT Connected Successfully! Now Typy +request To Get Approval For Your Group.\nUse +help for more info :>",
        "approveSuccess": "Approved successfully %1 threads!",

        "cantGetPendingList": "Can't get the pending list!",
        "returnListPending": "»「PENDING」«❮ The whole number of threads to approve is: %1 thread ❯\n\n%2",
        "returnListClean": "「PENDING」There is no thread in the pending list"
    }
}

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.removeUserFromGroup(api.getCurrentUserID(), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("cancelSuccess", count), threadID, messageID);
    }
    else {
        const index = body.split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.sendMessage(getText("notiBox"), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("Your Box Approved By Naughty Now Type +request To Get Approval For Your Group", count), threadID, messageID);
    }
}

module.exports.run = async function({ api, event, getText }) {
	const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;

    try {
		var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
		var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
	} catch (e) { return api.sendMessage(getText("cantGetPendingList"), threadID, messageID) }

	const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(getText("returnListPending", list.length, msg), threadID, (error, info) => {
		global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
	}, messageID);
    else return api.sendMessage(getText("returnListClean"), threadID, messageID);
}
