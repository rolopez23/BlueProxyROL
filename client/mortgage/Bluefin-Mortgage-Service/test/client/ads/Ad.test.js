import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Ad from '../../../client/src/mortgageComponents/ads/Ad.jsx';

const testAd = {
  _id: 1,
  type: '30 Year Fixed',
  seller: 'First Bank of Fraud',
  NMLS: 65111,
  APR: 5.01,
  interestRate: 5.01,
  minimum: 500000,
  maximum: 500000,
  region: 'SFBayArea',
};

const myMock = jest.fn();
const myMock2 = jest.fn();

describe('Ad', () => {
  test('Renders Card Styling', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = mount(<Ad />);
    expect(wrapper).toContainMatchingElements(1, 'BankRateCard');
    expect(wrapper).toContainMatchingElements(1, 'LenderInfo');
    expect(wrapper).toContainMatchingElements(1, 'Seller');
    expect(wrapper).toContainMatchingElements(1, 'APR');
    expect(wrapper).toContainMatchingElements(1, 'InterestRate');
  });

  test('Renders correct Properties', () => {
    const wrapper = mount(<Ad
      seller={testAd.seller}
      APR={testAd.APR}
      NMLS={testAd.NMLS}
      interestRate={testAd.interestRate}
    />);
    expect(wrapper.find('Seller')).toIncludeText(testAd.seller);
    expect(wrapper.find('APR')).toIncludeText(testAd.APR);
    expect(wrapper.find('InterestRate')).toIncludeText(testAd.interestRate);
    expect(wrapper.find('#NMLS')).toIncludeText(testAd.NMLS);
  });
  test('Calls function on click', () => {
    const wrapper = shallow(<Ad click={myMock} rateChange={myMock2} />);
    expect(myMock.mock.calls.length).toBe(0);
    wrapper.find('LenderInfo').simulate('click');
    expect(myMock.mock.calls.length).toBe(1);
  });

  test('toggles Button correctly', () => {
    const wrapper = mount(<Ad id={1} />);
    expect(wrapper).not.toContainMatchingElement('StyledContactButton');
    wrapper.setProps({ selectedCard: 1 });
    expect(wrapper).toContainMatchingElement('StyledContactButton');
  });

});
