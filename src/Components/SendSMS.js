import React, { useState } from "react";

const SendSMS = () => {
  const [number, setNumber] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
    fetch("http://localhost:9000/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(number),
    }).then(console.log("sms sent !"));
  };

  const handleTest = () => {
    fetch("/.netlify/functions/test", { method: "GET" }).then(
      console.log("test ok")
    );
  };

  const handleChange = (e) => {
    console.log(number);
    setNumber({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button onClick={() => handleTest()}>test</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="to"
          value={number.to}
          onChange={handleChange}
        />
        <button type="submit">Send SMS!</button>
      </form>
    </div>
  );
};

export default SendSMS;
