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
  const handleTest = () => {
    fetch("/.netlify/functions/test", { method: "GET" }).then(
      console.log("test ok")
    );
  };
  return (
    <div>
      <button onClick={() => handleSend()}>Send SMS!</button>
      <button onClick={() => handleTest()}>test</button>
    </div>
  );
};

export default SendSMS;
