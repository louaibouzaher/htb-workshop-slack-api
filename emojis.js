const { WebClient } = require("@slack/web-api");
require("dotenv/config");
const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const assignTeams = (user, reaction) => {
  if (reaction == "one") {
    web.conversations.invite({ channel: "C022DQFBZ33", users: user });
  } else if (reaction == "two") {
    web.conversations.invite({ channel: "C021Y41873P", users: user });
  }
};

const handleEmojis = (app) => {
  console.log("emojis");
  app.event("reaction_added", ({ event }) => {
    console.log(event);
    assignTeams(event.user, event.reaction);
  });
};

module.exports = { handleEmojis };
