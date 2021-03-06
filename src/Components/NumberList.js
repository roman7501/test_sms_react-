import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../firebase";
import Number from "./Number";

const NumberList = () => {
  const { firebase } = useContext(FirebaseContext);
  const [numbers, setNumbers] = useState([]);

  const handleSnapshot = (snapshot) => {
    const numbers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNumbers(numbers);
  };

  useEffect(() => {
    const getNumbers = () => {
      firebase.db
        .collection("numbers")
        .orderBy("createAt", "desc")
        .onSnapshot(handleSnapshot);
    };
    return getNumbers();
  }, [firebase]);

  return (
    <div>
      {numbers.map((number) => (
        <Number key={number.id} number={number} />
      ))}
    </div>
  );
};

export default NumberList;
