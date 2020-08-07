import React, { useContext } from "react";
import NumberForm from "./NumberForm";
import useForm from "../hooks/useForm";
import validateMessage from "../utils/validateMessage";
import { FirebaseContext } from "../firebase";

const INITIAL_STATE = {
  number: "",
};

const CreateNumber = () => {
  const { firebase } = useContext(FirebaseContext);
  const handleCreateNumber = () => {
    const number = values;
    const newNumber = {
      number,
      createAt: Date.now(),
    };
    firebase.db.collection("numbers").add(newNumber);
    console.log("numéro ajouté ?", newNumber);
  };

  const { handleSubmit, handleChange, values, errors, handleKeyDown } = useForm(
    INITIAL_STATE,
    validateMessage,
    handleCreateNumber
  );

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
