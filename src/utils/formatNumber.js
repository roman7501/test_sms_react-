const formatNumber = (num) => {
  const formattedNumber = num.replace(/^0/, "+33");
  return formattedNumber;
};

export default formatNumber;
