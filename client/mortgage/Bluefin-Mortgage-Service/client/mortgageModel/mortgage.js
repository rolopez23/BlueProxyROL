
class Mortgage {
  constructor(years, APR, price, downPayment = 0, HOA = 0, taxRate = 1.17, homeownersInsurance = 0.22, PMI = 0.75) {
    this.years = years;
    this.APR = APR;
    this.loan = price - downPayment;
    this.payment = this.calculatePayment();
    this.homeownersInsurance = Math.round((price * (homeownersInsurance / 100)) / 12);
    this.tax = Math.round((taxRate / 100) * price);
    this.HOA = HOA;
    this.PMI = 0;
    if (downPayment / price < 0.2) {
      this.PMI = Math.round(((PMI / 100) * this.loan) / 12);
    }
  }

  calculatePayment() {
    const n = this.years * 12;
    const r = this.APR / 1200;
    const L = this.loan;
    const payment = (L * (r * ((1 + r) ** n))) / ((1 + r) ** n - 1);

    return Math.round(payment);
  }

  getMonthlyPayment() {
    return [this.payment, Math.round(this.tax / 12), this.HOA, this.homeownersInsurance, this.PMI];
  }
}

export default Mortgage;
