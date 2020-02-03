import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import LoanInput from '../../../client/src/mortgageComponents/ads/input/LoanInput.jsx';


const myMock = jest.fn()
describe('Loan Input', () => {
  test('Has a function on the rwapper', ()=>{
    const wrapper = mount(<LoanInput select={myMock} />)

    const func = wrapper.prop('select');
    expect(typeof func).toEqual('function');
  });
});
