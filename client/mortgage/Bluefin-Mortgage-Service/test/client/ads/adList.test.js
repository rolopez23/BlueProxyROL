import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import AdList from '../../../client/src/mortgageComponents/ads/AdList.jsx';

const testAd1 = {
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

const testAd2 = {
  _id: 2,
  type: '15 Year Fixed',
  seller: 'First Bank of Theft',
  NMLS: 65111,
  APR: 5.01,
  interestRate: 5.01,
  minimum: 500000,
  maximum: 500000,
  region: 'SFBayArea',
};

const testAd3 = {
  _id: 3,
  type: '5/1 ARM',
  seller: 'Mattress Bank',
  NMLS: 65111,
  APR: 5.01,
  interestRate: 5.01,
  minimum: 500000,
  maximum: 500000,
  region: 'SFBayArea',
};

const testAd4 = {
  _id: 4,
  type: '5/1 ARM',
  seller: 'Bank of NY',
  NMLS: 65111,
  APR: 5.01,
  interestRate: 5.01,
  minimum: 500000,
  maximum: 500000,
  region: 'NYMetro',
};


let testAdList = [testAd1, testAd2, testAd3, testAd4];
const myMock = jest.fn();

describe('Ad List', () => {
  test('Renders the correct length based on conditional rendering', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = mount(<AdList ads={testAdList} />);
    wrapper.setState({ loanType: '5/1 ARM' });
    expect(wrapper).toContainMatchingElements(2, 'Ad');

    wrapper.setState({ loanType: '30 Year Fixed' });
    expect(wrapper).toContainMatchingElements(1, 'Ad');
  });

  test('Sliding flexbox exists', () => {
    const wrapper = shallow(<AdList ads={testAdList} />);
    wrapper.setState({ loanType: '5/1 ARM' });
    expect(wrapper).toContainMatchingElements(1, 'Slider');
    expect(wrapper).toContainMatchingElements(2, 'SliderBox');
  });

  test('Handle Select function works', () => {
    const wrapper = shallow(<AdList loanTypeChange={myMock} ads={testAdList} />);
    wrapper.setState({ loanType: '5/1 ARM' });
    expect(wrapper).toContainMatchingElements(2, 'SliderBox');
    const instance = wrapper.instance();
    instance.handleSelect('30 Year Fixed');
    expect(wrapper).toContainMatchingElements(1, 'SliderBox');
  });

  test('Hides LoanInput Box', () => {
    const wrapper = mount(<AdList ads={testAdList} />);
    wrapper.setState({ showLoan: false });
    expect(wrapper).toContainMatchingElements(0, 'LoanInput');
    wrapper.find('TitleBar').simulate('click');
    expect(wrapper).toHaveState({ showLoan: true });
    expect(wrapper).toContainMatchingElements(1, 'LoanInput');

  });
});
