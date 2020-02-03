import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/components/App.jsx';


describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});


describe('App', () => {
  test('App exists', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});