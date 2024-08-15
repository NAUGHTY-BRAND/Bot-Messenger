const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: '0012',
  version: '4.0.0',
  hasPermission: 0,
  credits: '',
  description: 'Transform text into stunning AI-generated art using stable diffusion models.',
  usePrefix: true,
  commandCategory: 'image',
  usages: 'imagine [prompt]:[model number]',
  cooldowns: 0,
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const { threadID = "defaultThreadID", messageID = "defaultMessageID" } = event || {};
    let prompt = args.join(' ');
    let model = "0";

    if (prompt.includes(':')) {
      const parts = prompt.split(':');
      prompt = parts[0].trim();

      const parsedModel = parseInt(parts[1].trim());
      if (!isNaN(parsedModel) && parsedModel >= 0 && parsedModel < models.length) {
        model = parsedModel.toString();
      } else {
        return api.sendMessage(
          '❗ Invalid model number. Please specify a model number between 0 and 43.',
          threadID,
          messageID
        );
      }
    } else if (!prompt) {
      const modelsList = models.map((model, index) => `${model}`).join('\n');
      return api.sendMessage(
        'Please provide a prompt along with a model number if desired.\n\nimagine {prompt}\nExample: imagine a beautiful girl\n\nimagine {prompt}:{model number}\nExample: imagine a beautiful girl:43\n\n' +
        modelsList,
        threadID
      );
    }

    const processingMessage = await api.sendMessage(
      '✅ Processing your request. Please wait...',
      threadID,
      null,
      messageID
    );

    const API = `https://api.samirthakuri.repl.co/api/generatev3?prompt=${encodeURIComponent(prompt)}&model=6&ratio=3:2`;

    const timeout = 20000;
    const imageStreamPromise = axios.get(API, { responseType: 'arraybuffer' });

    try {
      const imageStream = await Promise.race([
        imageStreamPromise,
        new Promise((_, reject) =>
          setTimeout(() => {
            api.unsendMessage(processingMessage.messageID);
            reject(new Error('API request timed out.'));
          }, timeout)
        ),
      ]);

      if (imageStream) {
        const path = __dirname + `/cache/imagine.png`;
        fs.writeFileSync(path, Buffer.from(imageStream.data, 'utf-8'));

        api.sendMessage(
          {
            attachment: fs.createReadStream(path),
          },
          threadID,
          () => {
            fs.unlinkSync(path);
            api.unsendMessage(processingMessage.messageID);
          },
          messageID
        );
      } else {

        api.sendMessage('❌ An error occurred while processing your prompt. Please try again later', threadID, messageID);
      }
    } catch (error) {

      console.error(error);
      api.sendMessage('❌ An error occurred while processing your prompt. Please try again later', threadID, messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage('❌ An error occurred while processing your prompt. Please try again later', threadID, messageID);
  }
};