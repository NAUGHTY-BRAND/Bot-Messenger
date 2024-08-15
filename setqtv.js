module.exports.config = {
  name: "setqtv",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "Set quản trị viên cho người khác!",
  commandCategory: "Hệ thống quản trị viên",
  usages: ".../add @tag | phản hồi/remove @tag | phản hồi",
  cooldowns: 5
};
module.exports.run = async function ({ event, api, Currencies, args ,Users, Threads }) {
//if(!args[0]) return api.sendMessage('co cai db', event.threadID)
let dataThread = (await Threads.getData(event.threadID)).threadInfo;
if (args.length == 0) return api.sendMessage(`=== 『 SET QUẢN TRỊ VIÊN 』 ===\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ ${global.config.PREFIX}${this.config.name} add @tag hoặc phản hồi: thêm thành viên làm quản trị viên nhóm\n[⚜️] ➜ ${global.config.PREFIX}${this.config.name} remove @tag hoặc phản hồi: xóa quản trị viên của người khác`, event.threadID, event.messageID);
if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID()) && !dataThread.adminIDs.some(item => item.id == event.senderID)) return api.sendMessage('[⚜️] ➜ Lệnh này dành cho quản trị viên nhóm!', event.threadID, event.messageID);
if (args[0] == 'add') {
  if (event.type == "message_reply") {
    var uid1 = event.senderID
    var uid = event.messageReply.senderID
    api.sendMessage('[⚜️] ➜ Thả cảm xúc "❤" vào tin nhắn này để xác nhận!',  event.threadID, (error, info) => {
global.client.handleReaction.push({
    name: this.config.name, 
    type: 'add' ,
    messageID: info.messageID,
    author: uid1,
    userID: uid
  })
      event.messageID
})
  } else if(args.join().indexOf('@') !== -1){
    var uid = Object.keys(event.mentions)[0]
    var uid1 = event.senderID
    api.sendMessage('[⚜️] ➜ Thả cảm xúc "❤" vào tin nhắn này để xác nhận!',  event.threadID, (error, info) => {
global.client.handleReaction.push({
    name: this.config.name,
    type: 'add' ,
    messageID: info.messageID,
    author: uid1,
    userID: uid
  })
      event.messageID
})
  } else {
    var uid1 = event.senderID
    api.sendMessage('[⚜️] ➜ Thả cảm xúc "❤" vào tin nhắn này để xác nhận!',  event.threadID, (error, info) => {
global.client.handleReaction.push({
    name: this.config.name,
    type: 'add' ,
    messageID: info.messageID,
    author: uid1,
    userID: uid1
  })
      event.messageID
})
  }
}
  if (args[0] == 'remove') {
  if (event.type == "message_reply") {
    var uid1 = event.senderID
    var uid = event.messageReply.senderID
    api.sendMessage('[⚜️] ➜ Thả cảm xúc "❤" vào tin nhắn này để xác nhận!',  event.threadID, (error, info) => {
global.client.handleReaction.push({
    name: this.config.name, 
    type: 'remove' ,
    messageID: info.messageID,
    author: uid1,
    userID: uid
  })
      event.messageID
})
  } else if(args.join().indexOf('@') !== -1){
    var uid = Object.keys(event.mentions)[0]
    var uid1 = event.senderID
    api.sendMessage('[⚜️] ➜ Thả cảm xúc "❤" vào tin nhắn này để xác nhận!',  event.threadID, (error, info) => {
global.client.handleReaction.push({
    name: this.config.name,
    type: 'remove' ,
    messageID: info.messageID,
    author: uid1,
    userID: uid
  })
      event.messageID
})
  }
}
}
module.exports.handleReaction = async function({ event, api, handleReaction, Currencies,Users}){
console.log(handleReaction)
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return;
if(handleReaction.type == 'add'){
  var name =  (await Users.getData(handleReaction.userID)).name
        api.changeAdminStatus(event.threadID, handleReaction.userID, true, editAdminsCallback)
        function editAdminsCallback(err) {
          if (err) return api.sendMessage("[⚜️] ➜ Bot cần quản trị viên để sử dụng lệnh!", event.threadID, event.messageID);
          return api.sendMessage(`[⚜️] ➜ Đã thêm: ${name} làm quản trị viên nhóm!`, event.threadID, event.messageID);
        }
}
if(handleReaction.type == 'remove'){
      var name =  (await Users.getData(handleReaction.userID)).name
        api.changeAdminStatus(event.threadID, handleReaction.userID, false, editAdminsCallback)
        function editAdminsCallback(err) {
          if (err) return api.sendMessage("[⚜️] ➜ Bot cần quản trị viên để sử dụng lệnh!", event.threadID, event.messageID);
          return api.sendMessage(`[⚜️] ➜ Đã gỡ bỏ quản trị viên nhóm của: ${name}`, event.threadID, event.messageID);
        }
}
}