import React from "react";

const SendSMS = () => {
  const handleSend = () => {
    console.log("submit!");
    fetch("/.netlify/functions/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
    }).then(console.log("sms sent !"));
  };
  return (
    <div>
      <button onClick={() => handleSend()}>Send SMS!</button>
    </div>
  );
};

export default SendSMS;
