/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React, { Component } from 'react';
// import { boundClass } from 'autobind-decorator';

import InputContainer from './paymentStyles/InputContainer.jsx';
import Slider from './paymentStyles/Slider.jsx';
import TextBox from './paymentStyles/TextBox.jsx';

// import necessary helpers
import dollarFormat from '../../../helpers/dollarFormat.js';

// @boundClass
class PaymentInput extends React.Component {
  constructor(props) {
    super(props);
    // console.log(price, downPayment);
    this.state = {
      price: null,
      downPayment: 20000,
      percentDownPayment: 20,
      max: null,
      min: null,
      editingPrice: false,
      editingDP: false,
      editingPercent: false,
    };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handlePercentChange = this.handlePercentChange.bind(this);
    this.handleDPChange = this.handleDPChange.bind(this);
    this.toggleEditingPrice = this.toggleEditingPrice.bind(this);
    this.toggleEditingDP = this.toggleEditingDP.bind(this);
    this.toggleEditingPercent = this.toggleEditingPercent.bind(this);
  }

  componentDidUpdate() {
    const { price, percentDownPayment } = this.state;
    // Cannot use destructring since price is in props and state
    // eslint-disable-next-line react/destructuring-assignment
    const newPrice = this.props.price;
    // console.log('update', oldProps, this.props);
    if (newPrice !== price) {
      // initialize all variables
      if (price === null) {
        const max = newPrice * 1.5;
        const min = newPrice * 0.5;
        this.setState({
          max,
          min,
        });
      }
      const downPayment = newPrice * (percentDownPayment / 100);
      this.setState({
        price: newPrice,
        downPayment,
      });
    }
    // console.log(this.state);
  }

  // Price changes cause the down payment to move
  handlePriceChange(event) {
    const { percentDownPayment } = this.state;
    const newPrice = event.target.value;
    const newDownPayment = (percentDownPayment / 100) * newPrice;
    this.setState({
      [event.target.name]: newPrice,
      downPayment: newDownPayment,
    });
    const { updatePrice } = this.props;
    updatePrice(newPrice, newDownPayment);
    // console.log(this.state);
  }

  // Down Payment Changes re-redner the percent
  handleDPChange(event) {
    const { price } = this.state;
    const { updatePrice } = this.props;
    const newDownPayment = event.target.value;
    const percent = (newDownPayment / price) * 100;
    // Validation for values
    this.setState({
      [event.target.name]: newDownPayment,
      percentDownPayment: percent,
    });
    updatePrice(price, newDownPayment);
    // console.log(this.state);
  }

  handlePercentChange(event) {
    const { price } = this.state;
    const { updatePrice } = this.props;
    const percent = event.target.value / 100;
    const newDownPayment = Math.round(percent * price);
    this.setState({
      percentDownPayment: event.target.value,
      downPayment: newDownPayment,
    });
    updatePrice(price, newDownPayment);
  }
  // Function maintains link between state and the props

  toggleEditingPrice() {
    const { editingPrice } = this.state;
    this.setState({ editingPrice: !editingPrice });
  }

  toggleEditingDP() {
    const { editingDP } = this.state;
    this.setState({ editingDP: !editingDP });
  }

  toggleEditingPercent() {
    const { editingPercent } = this.state;
    this.setState({ editingPercent: !editingPercent });
  }


  render() {
    const {
      price, downPayment, min, max, editingPrice, editingDP, editingPercent, percentDownPayment,
    } = this.state;
    return (
      <InputContainer>
        <div>Home Price</div>
        <div>Down Payment</div>
        <div id="PriceTextContainer">
          {editingPrice ? (
            <TextBox
              id="priceEdit"
              name="price"
              type="number"
              width="100%"
              onChange={this.handlePriceChange}
              onBlur={this.toggleEditingPrice}
              value={price}
            />
          ) : (
            <TextBox
              id="priceValue"
              name="price"
              type="text"
              width="100%"
              onFocus={this.toggleEditingPrice}
              value={dollarFormat(price)}
              readOnly
            />
          )}
        </div>
        <div id="DownPaymentTextContainer">
          {editingDP ? (
            <TextBox
              id="DPEdit"
              name="downPayment"
              type="number"
              width="65%"
              onChange={this.handleDPChange}
              onBlur={this.toggleEditingDP}
              value={downPayment}
            />
          ) : (
            <TextBox
              id="DPValue"
              name="downPayment"
              type="text"
              width="65%"
              onFocus={this.toggleEditingDP}
              value={dollarFormat(downPayment)}
              readOnly
            />
          )}
          {editingPercent ? (
            <TextBox
              id="percentEdit"
              name="percentDownPayment"
              type="number"
              width="32%"
              onChange={this.handlePercentChange}
              onBlur={this.toggleEditingPercent}
              value={percentDownPayment}
            />
          ) : (
            <TextBox
              id="percentValue"
              name="percentDownPayment"
              type="text"
              width="32%"
              onFocus={this.toggleEditingPercent}
              value={`${percentDownPayment} %`}
              readOnly
            />
          )}
        </div>
        <div>
          <Slider
            name="price"
            onChange={this.handlePriceChange}
            type="range"
            value={price}
            min={min}
            max={max}
          />
        </div>
        <div>
          <Slider
            name="percent"
            type="range"
            value={percentDownPayment}
            min="0"
            max="100"
            onChange={this.handlePercentChange}
          />
        </div>
      </InputContainer>
    );
  }
}

export default PaymentInput;
