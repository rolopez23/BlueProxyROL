/* eslint-disable import/extensions */
import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// Component Imports
import AdList from './ads/AdList.jsx';
import PaymentCalculator from './paymentCalculator/PaymentCalculator.jsx';
// Model imports
import Mortgage from '../../mortgageModel/mortgage.js';

const AppWrapper = Styled.div`
  border-top: 1px solid #e2e2e2;
  display: block;
  position: relative;
  margin-top: 3rem;
  min-width: 600px;
  width: 728px;
  maxwidth: 728px;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    const { listingId } = this.props;
    this.state = {
      listingId,
      price: null,
      downPayment: null,
      rate: 3.5,
      ads: [],
      listing: {},
      payments: [],
      loanType: '30 Year Fixed',
      years: 30,
    };
    this.updatePrice = this.updatePrice.bind(this);
    this.updateMortgage = this.updateMortgage.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.updateLoanType = this.updateLoanType.bind(this);
  }

  componentDidMount() {
    const { listingId } = this.state;
    const url = `/listing${listingId}`;
    axios.get(url)
      .then((response) => {
        // console.log(response.data);
        const newAds = response.data.ads;
        const newListing = response.data.listing;
        const { price } = newListing;
        const downPayment = price * 0.2;
        this.updateMortgage(30, 3.5, price, downPayment);
        this.setState({
          ads: newAds,
          listing: newListing,
          price,
          downPayment,
        });
      });
  }

  // Section for helpers that update main App state in lower components

  // returns a payment train, creates a mortgage object but only saves payment
  // array to state
  // Inputs: Required: years, APR, price
  // Optional: downPayment, HOA, taxRate, homeownersInsurance, PMI
  updateMortgage(years, APR, price, downPayment, HOA, taxRate, homeownersInsurance, PMI) {
    const mortgage = new Mortgage(years, APR, price, downPayment, HOA, taxRate, homeownersInsurance, PMI);
    const payments = mortgage.getMonthlyPayment();
    // console.log(payments);
    this.setState({ payments });
    // console.log(this.state.payments);
  }

  updateLoanType(loanType) {
    let newYears = 30;
    const { rate, price, downPayment } = this.state;
    if (loanType === '15 Year Fixed') {
      newYears = 15;
    }
    this.setState({ loanType, years: newYears });
    this.updateMortgage(newYears, rate, price, downPayment);
  }

  updatePrice(price, downPayment) {
    const { rate, years } = this.state;
    this.setState({
      price,
      downPayment,
    });
    this.updateMortgage(years, rate, price, downPayment);
    // console.log('updated price', price, downPayment);
  }

  updateRate(rate) {
    const { years, price, downPayment } = this.state;
    this.setState({ rate });
    this.updateMortgage(years, rate, price, downPayment);
  }

  render() {
    const {
      listing, ads, price, downPayment, payments, loanType, rate,
    } = this.state;
    // console.log(price, downPayment);
    return (
      <AppWrapper>
        <PaymentCalculator
          rate={rate}
          payments={payments}
          loanType={loanType}
          price={price}
          downPayment={downPayment}
          updatePrice={this.updatePrice}
        />
        <AdList
          ads={ads}
          listing={listing}
          rateChange={this.updateRate}
          loanTypeChange={this.updateLoanType}
        />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  listingId: PropTypes.number.isRequired,
};


export default App;
