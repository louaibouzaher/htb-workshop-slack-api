const { App } = require("@slack/bolt");
const { handleActions } = require("./actions");
const { handleMessages } = require("./messages");
const { handleCommands } = require("./modals");
const { handleEmojis } = require("./emojis");
require("dotenv/config");

const app = new App({
  socketMode: true,
  appToken: process.env.APP_TOKEN,
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const launch = async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
};

launch();
handleMessages(app);
handleCommands(app);
handleActions(app);
handleEmojis(app);
