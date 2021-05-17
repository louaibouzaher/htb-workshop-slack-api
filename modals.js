const handleCommands = (app) => {
  app.command("/ticket", async ({ ack, body, client }) => {
    // Acknowledge the command request
    await ack();
    try {
      // Call views.open with the built-in client
      const result = await client.views.open({
        // Pass a valid trigger_id within 3 seconds of receiving it
        trigger_id: body.trigger_id,
        // View payload
        view: {
          type: "modal",
          // View identifier
          callback_id: "view_a",
          title: {
            type: "plain_text",
            text: "Modal title",
          },
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: "Welcome to a modal with _blocks_",
              },
            },
            {
              type: "input",
              block_id: "input_c",
              label: {
                type: "plain_text",
                text: "What are your hopes and dreams?",
              },
              element: {
                type: "plain_text_input",
                action_id: "dreamy_input",
                multiline: true,
              },
            },
          ],
          submit: {
            type: "plain_text",
            text: "Submit",
          },
        },
      });
      
    } catch (error) {
      console.error(error);
    }
  });
};
module.exports = { handleCommands };
