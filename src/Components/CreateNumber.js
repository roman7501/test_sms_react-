import React, { useContext, useState, useEffect } from "react";
import NumberForm from "./NumberForm";
import useForm from "../hooks/useForm";
import validateMessage from "../utils/validateMessage";
import formatNumber from "../utils/formatNumber";
import { FirebaseContext } from "../firebase";

const INITIAL_STATE = {
  number: "",
};

const CreateNumber = () => {
  const { firebase } = useContext(FirebaseContext);
  const [numbersFirebase, setNumbersFirebase] = useState([]);

  useEffect(() => {
    getNumbers();
  });

  const handleCreateNumber = () => {
    const number = { number: formatValues };
    if (numbersFirebase.includes(number.number)) {
      console.log("le numéro est déjà dans la base de donnée");
      return;
    }
    // Add number to Firebase
    const newNumber = {
      number,
      createAt: Date.now(),
    };
    firebase.db.collection("numbers").add(newNumber);
    // Send SMS
    sendSMS(newNumber.number.number);
  };

  const handleSnapshot = (snapshot) => {
    const numbers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const allNumbers = [];
    numbers.map((num) => allNumbers.push(num.number.number));
    setNumbersFirebase(allNumbers);
  };

  const getNumbers = () => {
    firebase.db
      .collection("numbers")
      .orderBy("createAt", "desc")
      .onSnapshot(handleSnapshot);
  };

  const sendSMS = (num) => {
    fetch("/.netlify/functions/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({ to: num }),
    }).then(console.log("sms sent !"));
  };

  const {
    handleSubmit,
    handleChange,
    values,
    formatValues,
    errors,
    handleKeyDown,
  } = useForm(INITIAL_STATE, validateMessage, formatNumber, handleCreateNumber);

  return (
    <div>
      <NumberForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        handleKeyDown={handleKeyDown}
        values={values}
      />
    </div>
  );
};

export default CreateNumber;
