// takes a number and outputs pretty dollar format string
const percentFormat = (number) => {
  const formatter = new Intl.NumberFormat(('en-US'), {
    style: 'percent',
    minimumFractionDigits: 3,
  });
  return `${formatter.format(number / 100)}`;
};

export default percentFormat;
