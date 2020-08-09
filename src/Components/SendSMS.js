import React from "react";

const SendSMS = () => {
  const handleSend = () => {
    console.log("submit!");
    fetch("/.netlify/functions/send-sms").then(console.log("sms sent !"));
  };
  return (
    <div>
      <button onClick={() => handleSend()}>Send SMS!</button>
    </div>
  );
};

export default SendSMS;
