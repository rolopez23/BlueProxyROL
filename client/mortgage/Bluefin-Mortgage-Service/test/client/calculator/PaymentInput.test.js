/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import PaymentInput from '../../../client/src/mortgageComponents/paymentCalculator/PaymentInput.jsx';

describe('Tests on Payment Input Area', () => {

  test('Correctly changes editing state for Price', () => {
    const wrapper = mount(<PaymentInput />);
    expect(wrapper).toHaveState({ editingPrice: false });
    wrapper.find('#priceValue').first().simulate('focus');
    expect(wrapper).toHaveState({ editingPrice: true });
    wrapper.find('#priceEdit').first().simulate('blur');
    expect(wrapper).toHaveState({ editingPrice: false });
  });

  test('Correctly changes editing state for Down Payment', () => {
    const wrapper = mount(<PaymentInput />);
    expect(wrapper).toHaveState({ editingDP: false });
    wrapper.find('#DPValue').first().simulate('focus');
    expect(wrapper).toHaveState({ editingDP: true });
    wrapper.find('#DPEdit').first().simulate('blur');
    expect(wrapper).toHaveState({ editingDP: false });
  });

  test('Correctly changes editing state for Percent', () => {
    const wrapper = mount(<PaymentInput />);
    expect(wrapper).toHaveState({ editingPercent: false });
    wrapper.find('#percentValue').first().simulate('focus');
    expect(wrapper).toHaveState({ editingPercent: true });
    wrapper.find('#percentEdit').first().simulate('blur');
    expect(wrapper).toHaveState({ editingPercent: false });
  });

  test('Changes to state correctly display', () => {
    const wrapper = mount(<PaymentInput />);
    wrapper.setState({
      price: 100000,
      downPayment: 20000,
      percentDownPayment: 20,
      min: 50000,
      max: 150000,
    });
    expect(wrapper.find('#percentValue').first()).toHaveValue('20 %');
    expect(wrapper.find('#DPValue').first()).toHaveValue('$20,000');
    expect(wrapper.find('#priceValue').first()).toHaveValue('$100,000');
  });

  test('Changes to props change state', () => {
    const wrapper = mount(<PaymentInput />);
    wrapper.setState({
      price: 100000,
      downPayment: 20000,
      percentDownPayment: 20,
      min: 50000,
      max: 150000,
    });
    wrapper.setProps({ price: 500000 });
    expect(wrapper).toHaveState({ price: 500000 });
  });
});
