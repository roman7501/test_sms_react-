const validateMessage = (values) => {
  const errors = {};
  const regex = /^(0)(6|7|9)\d{8}$/gi;

  if (!values.number) {
    errors.message = "Votre numéro est requis";
  } else if (values.number.length < 10) {
    errors.message = "votre numéro doit contenir 10 chiffres";
  } else if (!values.number.match(regex)) {
    errors.message = "Numéro invalide";
  }
  return errors;
};
export default validateMessage;
