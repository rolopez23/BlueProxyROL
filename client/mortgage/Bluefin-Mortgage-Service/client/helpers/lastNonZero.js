// input is an array, returns last non-zero element

const lastNonZero = (array) => {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] !== 0) {
      return i;
    }
  }
  return null;
};

export default lastNonZero;
