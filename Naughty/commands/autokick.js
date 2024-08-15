module.exports.config = {
    name: "autokick",
    version: "1.0.5",
    hasPermssion: 1,
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
    description: "",
    commandCategory: "system",
    usages: "add [Words]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
}
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    !fs.existsSync(path.join(__dirname, "./cache/badwords.json")) ? fs.writeFileSync(path.join(__dirname, `./cache/aut.json`), JSON.stringify({}, null, 4), {mode: 0o666}) : "";
}

module.exports.handleEvent = async ({api, event}) => {
    const request = global.nodemodule["request"]
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./cache/badwords.json"), {encoding: "utf8"}))
    //Get group name (threadName) and message name (name)

  let user = await api.getUserInfo(event.senderID)
    let thread = await api.getThreadInfo(event.threadID)
    let name = user[event.senderID].name

      
    var admin = "100095153642640" 
    if(event.senderID == api.getCurrentUserID()) return;
    if (data[event.body]) {
      return api.sendMessage({
        body: `💫𝘽𝙖𝙙𝙬𝙤𝙧𝙙𝙨 𝘿𝙚𝙩𝙚𝙘𝙩𝙚𝙙⭐\n\n𝙉𝙖𝙢𝙚: ${name}\n𝘽𝙖𝙙𝙬𝙤𝙧𝙙: ${event.body}\n\n\n𝙈𝙖𝙙𝙚 𝘽𝙮 𝙉𝙖𝙪𝙜𝙝𝙩𝙮....`,
        mentions:[{
                tag:name, 
                id:event.senderID
            }]
      },event.threadID,() => {
            var idad = global.config.ADMINBOT
            api.removeUserFromGroup(event.senderID,  event.threadID);
            for(let ad of idad){
                setTimeout(()=>{
                    var callback = () => api.sendMessage({
                        body:`[SYSTEM] Bot just came out ${thread.name} - ${event.threadID}\n Reason: \n${name} - ${event.senderID} : ${event.body}`,
                        attachment: fs.createReadStream(__dirname + "/cache/avatar_thread_badword.jpg")
                    }, ad, () => fs.unlinkSync(__dirname + "/cache/avatar_thread_badword.jpg"))
                    request(encodeURI(`${thread.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/avatar_thread_badword.jpg')).on('close',() => callback())
                },5000)
            }
        })
    }
}
module.exports.run = async function({api, args, event}) {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    var content = args.splice(1, args.length)
    if (!content) return api.sendMessage(`Lack of experience!`,event.threadID, event.messageID)
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./cache/badwords.json"), {encoding: "utf8"}))
    if (!args[0])return api.sendMessage(`Use: \nbadword add [words]\n\nCreator:- Naughty`,event.threadID,event.messageID)
    if (args[0] == `add`){
      if (!content) return api.sendMessage(`Missing words that need to be added!`,event.threadID, event.messageID)
      if (data[content]) return api.sendMessage(`The word is already available ${content}`,event.threadID, event.messageID)
      data[content] = {}
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/badwords.json`), JSON.stringify(data, null, 4), {mode: 0o666})
        return api.sendMessage("Add the word success!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Loi: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `del`){
      if (!data[content]) return api.sendMessage(`There is no such word`,event.threadID, event.messageID)
      delete data[content]
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/badwords.json`), JSON.stringify(data, null, 4), {mode: 0o666})
      return api.sendMessage("Delete word successfully!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Loi: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `list`){
        var list = Object.keys(data) , number = 0 ;
        var msg = "List of banned words:\n";
        for(let text of list){
            number++
            msg += `${number}. ${text}\n`
        }
        return api.sendMessage(msg, event.threadID, event.messageID)
    }
}
