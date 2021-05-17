const { jokes, advice } = require("./constants");

const handleMessages = (app) => {
  app.message(/^hi|hey|hello$/, async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    console.log(message);
    await say({ 
      text: `Hey there <@${message.user}>!`,
    });
  });
  app.message(/^k! [a-zA-Z]+$/, ({ message, say }) => {
    const cmd = message.text.split(" ");
    switch (cmd[1]) {
      case "joke":
        say({ text: jokes[Math.floor(Math.random() * jokes.length)] });
        break;
      case "advice":
        say({ text: advice[Math.floor(Math.random() * advice.length)] });
        break;
      default:
        break;
    }
  });
  app.message("order", async ({ message, say }) => {
    console.log(message);
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Hello, Assistant to the Regional Manager Dwight! *Michael Scott* wants to know where you'd like to take the Paper Company investors to dinner tonight.\n\n *Please select a restaurant:*",
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*Kin Khao*\n:star::star::star::star: 1638 reviews\n The sticky rice also goes wonderfully with the caramelized pork belly, which is absolutely melt-in-your-mouth and so soft.",
          },
          accessory: {
            type: "image",
            image_url:
              "https://s3-media2.fl.yelpcdn.com/bphoto/korel-1YjNtFtJlMTaC26A/o.jpg",
            alt_text: "alt text for image",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*Ler Ros*\n:star::star::star::star: 2082 reviews\n I would really recommend the  Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder.",
          },
          accessory: {
            type: "image",
            image_url:
              "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
            alt_text: "alt text for image",
          },
        },
        {
          type: "divider",
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Farmhouse",
                emoji: true,
              },
              value: "click_me_123",
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Kin Khao",
                emoji: true,
              },
              value: "click_me_123",
              url: "https://google.com",
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Ler Ros",
                emoji: true,
              },
              value: "click_me_123",
              url: "https://google.com",
            },
          ],
        },
      ],
    });
  });
};

module.exports = { handleMessages };
