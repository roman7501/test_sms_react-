export function handler(event, context, callback) {
  require("dotenv").config();
  const { ACCOUNT_SID, AUTH_TOKEN } = process.env;
  const twilio = require("twilio");
  const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);

  exports.handler = function (event, context, callback) {
    Promise(
      client.messages.create({
        body: "Is this working ??",
        to: "+33661396623", // Text this number
        from: "+14042366753", // From a valid Twilio number
      })
    )
      .then(() =>
        callback(null, {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
          body: "Created",
        })
      )
      .catch((e) => {
        console.log("heelo");
        callback(e);
      });
  };
}
