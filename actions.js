const handleActions = (app) => {

  app.action("view_submission", async ({ ack, say }) => {
    // Acknowledge action request
    console.log("Submitted 🚀");
    await ack({
      response_action: "clear",
    });
    await say("Request approved 👍");
  });
};

module.exports = { handleActions };
