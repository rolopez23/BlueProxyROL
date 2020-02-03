
/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './app'
import { Counter, testFunction } from './app';

describe('App', () => {
  it('snapshot renders', () => {
    const app = renderer.create(<App />);
    let tree = app.toJSON();
    expect(app).toMatchSnapshot();
  });

  describe('Unit Test', () => {
    it('testFunction works', () => {
      let object = { animal : 'ox'};
      let moreProperties = { horns: true, color: 'brown' };
      var newObject = testFunction(object, moreProperties);
      expect(newObject).toEqual({ animal: 'ox', horns: true, color: 'brown' });
    })
  })
  describe('Counter', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Counter counter={1} />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
})
