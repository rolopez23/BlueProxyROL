/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import StyledContactButton from '../../../client/src/mortgageComponents/ads/ContactButton.jsx';

const myMock = jest.fn;

describe('ContactButton', () => {
  test('Activates function on click', () => {
    expect(myMock.mock.calls.length).toBe(0);
    const wrapper = shallow(<StyledContactButton send={myMock} />);
    wrapper.find('ContactButton').simulate('click');
    expect(myMock.mock.calls.length).toBe(1);
  });
});