import Mortgage from '../../../client/mortgageModel/mortgage.js';

describe('Mortgage tests ', () => {
  test('it calculates a payment correctly', () => {
    const mortgage = new Mortgage(15, 4, 300000, 0);
    expect(mortgage.payment).toEqual(2219);
    const mortgage2 = new Mortgage(30, 4, 300000, 0);
    expect(mortgage2.payment).toEqual(1432);
  });

  test('it defaults other fields correctly', () => {
    const mortgage = new Mortgage(30, 4, 799000, 400000);
    expect(mortgage.homeownersInsurance).toEqual(146);
    expect(mortgage.tax).toEqual(9348);
    expect(mortgage.HOA).toEqual(0);
  });

  test('it handles PMI', () => {
    const mortgage = new Mortgage(30, 4, 800000, 50000);
    expect(mortgage.PMI).toEqual(469);
    const mortgage2 = new Mortgage(30, 4, 800000, 400000);
    expect(mortgage2.PMI).toEqual(0);
  });

  test('it allows overwriting initial values', () => {
    const mortgage = new Mortgage(30, 4, 800000, 100000, 500, 2, 0.3, 1);
    expect(mortgage.tax).toEqual(16000);
    expect(mortgage.HOA).toEqual(500);
    expect(mortgage.homeownersInsurance).toEqual(200);
    expect(mortgage.PMI).toEqual(583);
  });

  test('it outputs values into an array in correct order', () => {
    const mortgage = new Mortgage(30, 4, 800000, 100000, 500, 2, 0.3, 1);
    const monthlyPayments = mortgage.getMonthlyPayment();
    expect(monthlyPayments[0]).toEqual(3342);
    expect(monthlyPayments[1]).toEqual(1333);
    expect(monthlyPayments[2]).toEqual(500);
    expect(monthlyPayments[3]).toEqual(200);
    expect(monthlyPayments[4]).toEqual(583);
  });
});
