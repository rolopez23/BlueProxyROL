import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import axios from 'axios';

import App, { Counter } from './app';

describe('App', () => {
  it ('renders the inner counter', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Counter).length).toEqual(1);
  });

  it('passes all props to Counter', () => {
    const wrapper = mount(<App />);
    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('p').text()).toEqual('0');
  });

  it('increments the counter', () => {
    const wrapper = mount(<App />);
    const buttonWrapper = wrapper.find('button').at(0);
    buttonWrapper.simulate('click');
    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('p').text()).toEqual('1');
  });

  it('decrements the counter', () => {
    const wrapper = mount(<App />);
    const buttonWrapper = wrapper.find('button').at(1);
    buttonWrapper.simulate('click');
    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('p').text()).toEqual('-1');
  });


  // I expect this one to fail because I did not write its functionality in app,jsx
  // only to practice async testing
  it('fetches async data', done => {
    const promise = new Promise((resolve, reject) => setTimeout(() => {
      resolve({
        data: {
          hits: [
            { objectID: '1', title: 'a' },
            { objectID: '2', title: 'b' },
          ],
        },
      });
    }, 100));


    axios.get = jest.fn(() => promise);


    const wrapper = mount(<App />);
    expect(wrapper.find('li').length).toEqual(0);

     axios.get()
      .then(() => {
        setImmediate(() => {
          wrapper.update();
          expect(wrapper.find('li').length).toEqual(0); // putting in 2 fails it
          done();
        });
      });

  });
});
