module.exports.config = {

  name: "imagesearch",
  version: "2.5.1",
  hasPermssion: 0,
  credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
  description: "Search an Image",
  commandCategory: "image",
  usages: "imagesearch [text]",
  cooldowns: 5,
  dependencies: {

     "axios":"",
     "fs-extra":"",
    "googlethis":"",
    "cloudscraper":""
  }
};




module.exports.run = async ({matches, event, api, extra, args}) => {

    const axios = global.nodemodule['axios'];
    const google = global.nodemodule["googlethis"];
const cloudscraper = global.nodemodule["cloudscraper"];
const fs = global.nodemodule["fs"];
try{
var query = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
  //let query = args.join(" ");
  api.sendMessage(`🔥𝘕𝘢𝘶𝘨𝘩𝘵𝘺 | 𝘚𝘦𝘢𝘳𝘤𝘩𝘪𝘯𝘨 𝘐𝘮𝘢𝘨𝘦 𝘙𝘦𝘴𝘶𝘭𝘵𝘴 𝘍𝘰𝘳 ${query}...`, event.threadID, event.messageID);

  let result = await google.image(query, {safe: false});
  if(result.length === 0) {
    api.sendMessage(`🔥𝘕𝘢𝘶𝘨𝘩𝘵𝘺 | 𝘠𝘰𝘶𝘳 𝘐𝘮𝘢𝘨𝘦 𝘚𝘦𝘢𝘳𝘤𝘩 𝘋𝘪𝘥 𝘕𝘰𝘵 𝘙𝘦𝘵𝘶𝘳𝘯 𝘈𝘯𝘺 𝘙𝘦𝘴𝘶𝘭𝘵....`, event.threadID, event.messageID)
    return;
  }

  let streams = [];
  let counter = 0;

  console.log(result)

  for(let image of result) {
    // Only show 6 images
    if(counter >= 6)
      break;

    console.log(`${counter}: ${image.url}`);

    // Ignore urls that does not ends with .jpg or .png
    let url = image.url;
    if(!url.endsWith(".jpg") && !url.endsWith(".png"))
      continue;

   let path = __dirname + `/cache/search-image-${counter}.jpg`;
    let hasError = false;
    await cloudscraper.get({uri: url, encoding: null})
      .then((buffer) => fs.writeFileSync(path, buffer))
      .catch((error) => {
        console.log(error)
        hasError = true;
      });

    if(hasError)
      continue;

    console.log(`Pushed to streams: ${path}`) ;
    streams.push(fs.createReadStream(path).on("end", async () => {
      if(fs.existsSync(path)) {
        fs.unlink(path, (err) => {
          if(err) return console.log(err);

          console.log(`Deleted file: ${path}`);
        });
      }
    }));

    counter += 1;
  }

  api.sendMessage("🔥𝘕𝘢𝘶𝘨𝘩𝘵𝘺 | 𝘚𝘦𝘯𝘥𝘪𝘯𝘨 𝘙𝘦𝘴𝘶𝘭𝘵𝘴....", event.threadID, event.messageID)

  let msg = {
    body: `🔥𝘕𝘢𝘶𝘨𝘩𝘵𝘺 | 𝘏𝘦𝘳𝘦'𝘴 𝘠𝘰𝘶𝘳 𝘚𝘦𝘢𝘳𝘤𝘩 𝘙𝘦𝘴𝘶𝘭𝘵𝘴 𝘍𝘰𝘳 ${query}\n\n𝘚𝘦𝘯𝘥𝘦𝘥 𝘠𝘰𝘶 20 𝘐𝘮𝘢𝘨𝘦𝘴`,
    attachment: streams
  };

  api.sendMessage(msg, event.threadID, event.messageID);
}catch(e){
  console.log("🔥𝘕𝘢𝘶𝘨𝘩𝘵𝘺 | 𝘏𝘢𝘷𝘪𝘯𝘨 𝘚𝘰𝘮𝘦 𝘜𝘯𝘦𝘹𝘱𝘦𝘤𝘵𝘦𝘥 𝘌𝘳𝘳𝘰𝘳𝘴....")
  api.sendMessage("🔥𝘕𝘢𝘶𝘨𝘩𝘵𝘺 | 𝘏𝘢𝘷𝘪𝘯𝘨 𝘚𝘰𝘮𝘦 𝘜𝘯𝘦𝘹𝘱𝘦𝘤𝘵𝘦𝘥 𝘌𝘳𝘳𝘰𝘳𝘴....", event.threadID, event.messageID);
}
};

