import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import App from '../../client/src/mortgageComponents/App.jsx';

describe('App behavior', () => {
  // Note this a white box test, but only option for a unit test
  test('update Price function changes state', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    expect(wrapper.state('price')).toBe(null);
    expect(wrapper.state('downPayment')).toBe(null);
    instance.updatePrice(100, 20);
    expect(wrapper.state('price')).toBe(100);
    expect(wrapper.state('downPayment')).toBe(20);
  });
});
