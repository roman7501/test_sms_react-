import React from "react";

const SendSMS = () => {
  const handleSend = () => {
    fetch("/.netlify/functions/send-sms").then(console.log("sms sent !"));
  };
  return (
    <div>
      <button onClick={() => handleSend()}>send SMS !</button>
    </div>
  );
};

export default SendSMS;
