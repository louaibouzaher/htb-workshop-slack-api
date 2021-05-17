const { WebClient } = require("@slack/web-api");
require("dotenv/config");
const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const asyncFunc = async () => {
  const result = await web.chat.postMessage({
    channel: "#general",
    text: "Hello,World!",
  });
  console.log(result);
};

asyncFunc();
