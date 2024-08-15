module.exports.config = {
    name: "bigtext2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 𝘽𝙍𝘼𝙉𝘿",/////////////////THIS COMMAND MADE BY NAUGHTY DONT CHANGE CREDITS////////////////
    description: "big text",
    commandCategory: "game",
    usages: "bigtext <text>",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
  text = text.replace(/\./g, `
 o`)
  .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a/g, `╔═╗
╠═╣
╩ ╩`)
  .replace(/b/g, `╔ 
╠═╗
╚═╝`)
  .replace(/c/g, `╔═╗
║  
╚═╝`)
  .replace(/d|đ/g, `╔╦╗
 ║║
═╩╝`)
  .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e/g, `╔═╗
║╣ 
╚═╝`)
  .replace(/f/g, `╔═╗
╠╣ 
╚  `)
  .replace(/g/g, `╔═╗
║ ╦
╚═╝`)
  .replace(/h/g, `╦ ╦
╠═╣
╩ ╩`)
  .replace(/i/g, `╦
║
╩`)
  .replace(/ì|í|ị|ỉ|ĩ|i/g, ` ╦
 ║
╚╝`)
  .replace(/k/g, `╦╔═
╠╩╗
╩ ╩`)
  .replace(/l/g, `╦  
║  
╩═╝`)
  .replace(/m/g, `╔╦╗
║║║
╩ ╩`)
  .replace(/n/g, `╔╗╔
║║║
╝╚╝`)
  .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o/g, `╔═╗
║ ║
╚═╝`)
  .replace(/p/g, `╔═╗
╠═╝
╩  `)
  .replace(/q/g, `╔═╗ 
║═╬╗
╚═╝╚`)
  .replace(/r/g, `╦═╗
╠╦╝
╩╚═`)
  .replace(/s/g, `╔═╗
╚═╗
╚═╝`)
  .replace(/t/g, `╔╦╗
 ║ 
 ╩ `)
  .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u/g, `╦ ╦
║ ║
╚═╝`)
  .replace(/v/g, `╦  ╦
╚╗╔╝
 ╚╝ `)
  .replace(/x/g, `═╗ ╦
╔╩╦╝
╩ ╚═` )
  .replace(/ỳ|ý|ỵ|ỷ|ỹ|y/g, `╦ ╦
╚╦╝
 ╩ `)
  .replace(/w/g, `╦ ╦
║║║
╚╩╝`)
  .replace(/z/g, `╔═╗
╔═╝
╚═╝`)
  .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  var arr = text.replace("\n", "").split("\n").filter(item => item.length != 0);
  var num = (arr.length/6)-1;
  var main = arr.slice(0,6);
  var extra = arr.splice(6);
  var msg = "";
  var mainlength = main.length;
  for(let i = 0; i < mainlength; i++) {
    var txt = main[i];
    for(let o = 0; o < num; o++) {
      txt += extra[i+(o*6)];
    }
    msg += txt+"\n";
  }
  return api.sendMessage(msg+"\nThis Version Made By Naughty", event.threadID, event.messageID);
}