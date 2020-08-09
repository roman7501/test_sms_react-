import React from "react";

const SendSMS = () => {
  const handleSend = async (event) => {
    event.preventDefault();
    console.log("clicked !");
    try {
      const response = await fetch("/", {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        // parse and submit all included form data
        body: "sms sent",
      });

      // if it was successful show success message
      if (response.status === 200) {
        console.log("it works");
      } else {
        console.log("it doesnt work");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSend}
      >
        <button type="submit">Snd SMS!</button>
      </form>
    </div>
  );
};

export default SendSMS;
