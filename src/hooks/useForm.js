import { useState, useEffect } from "react";

const useForm = (initialState, validate, next) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const isErrors = Object.keys(errors).length !== 0;
      if (isErrors) {
        setIsSubmitting(false);
        setValues(initialState);
        console.log("erreur");
      } else {
        console.log("pas d'erreur");
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
    setIsSubmitting(true);
  };
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
