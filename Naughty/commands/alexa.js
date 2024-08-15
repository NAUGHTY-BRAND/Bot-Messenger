const axios = require('axios');

module.exports.config = {
    name: "Alexa",
    version: "7.8.6",
    hasPermission: 0,
    credits: "𝙉𝘼𝙐𝙂𝙃𝙏𝙔 ツ",
    usePrefix: true,
    description: "Ask a question and get a response From Alexa.",
    commandCategory: "AI",
    cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID } = event;
    const question = args.join(" ");

    if (!question) {
        api.sendMessage("Please provide a question.", threadID);
        return;
    }

    try {
        const response = await axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/tools/blackai?question=${question}`);
        
        if (response.data.response) {
            const aiResponse = response.data.message;
            api.sendMessage(`🇵🇰| Alexa's Response: ${aiResponse}`, threadID);
        } else {
            api.sendMessage("No response received from the Alexa.", threadID);
        }
    } catch (error) {
        console.error("Error fetching Alexa's response:", error);
        api.sendMessage("An error occurred while fetching the Alexa's response.", threadID);
    }
};
