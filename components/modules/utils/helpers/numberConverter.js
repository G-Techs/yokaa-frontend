const M_NUMBER_UNIT = 1000000;
const K_NUMBER_UNIT = 1000;

const numberConverter = (value) => {
  if (value >= M_NUMBER_UNIT) {
    const convertedNumber = (value / M_NUMBER_UNIT).toFixed(2) + "M";
    return convertedNumber;
  }
  if (value >= K_NUMBER_UNIT) {
    const convertedNumber = (value / K_NUMBER_UNIT).toFixed(2) + "K";
    return convertedNumber;
  }
  return `${value}`;
};

export default numberConverter;
