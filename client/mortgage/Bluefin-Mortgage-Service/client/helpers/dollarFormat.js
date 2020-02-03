// takes a number and outputs pretty dollar format string
const dollarFormat = (number) => {
  const formatter = new Intl.NumberFormat(('en-US'), {
    style: 'decimal',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  return `$${formatter.format(number)}`;
};

export default dollarFormat;
