 const fs = require("fs");

module.exports.config = {

   name: "goithuthi",

   version: "1.0.0",

   hasPermssion: 0,

   credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",

    description: "no prefix reply",

     commandCategory: "no prefix",

     usages: "noprefix",

    cooldowns: 0,

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var NAUGHTY = ['😍', '🤩', '🤔', '🤨', '🥰', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🥰', '🤩', '😘', '😋', '😜', '🥳', '🤪', '🤗', '😎', '🤓', '🧐', '🤠', '🤔', '🤨', '😇', '🙂', '🙃', '😉', '😊', '😄', '😃', '😀', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉'];
 let haha = event.body.toLowerCase();
  var NAUGHTY2 = NAUGHTY[Math.floor(Math.random() * NAUGHTY.length)]
  if (event.attachments[0].type == "sticker") 
      api.setMessageReaction(`${NAUGHTY2}`, event.messageID, (err) => {}, true)
    api.sendMessage("𝙉𝙖𝙪𝙜𝙝𝙩𝙮 ツ", event.threadID);
  }

 module.exports.run = function({ api, event, client, __GLOBAL }) {

      }