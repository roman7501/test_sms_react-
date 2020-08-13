import { useState, useEffect } from "react";

const useForm = (initialState, validate, formatNumber, next) => {
  const [values, setValues] = useState(initialState);
  const [formatValues, setFormatValues] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const isErrors = Object.keys(errors).length !== 0;
      if (isErrors) {
        setIsSubmitting(false);
        setValues(initialState);
      } else {
        next();
        setIsSubmitting(false);
        setValues(initialState);
      }
    }
  }, [errors, initialState, next, isSubmitting]);

  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
      // permet de garder la valeurs d'autres inputs
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    const formattedNumber = formatNumber(values.number);
    setFormatValues(formattedNumber);
    setIsSubmitting(true);
  };
  return { handleChange, handleSubmit, values, formatValues, errors };
};

export default useForm;
