import React from "react";
import "./App.css";
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import CreateNumber from "./Components/CreateNumber";
import firebase, { FirebaseContext } from "./firebase";
import NumberList from "./Components/NumberList";
import SendSMS from "./Components/SendSMS";

function App({ className }) {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <div className={className}>
        <GlobalStyle />
        <CreateNumber />
        <NumberList />
        <SendSMS />
      </div>
    </FirebaseContext.Provider>
  );
}

export default styled(App)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
