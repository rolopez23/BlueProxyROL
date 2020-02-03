/* eslint-disable import/extensions */
import dollarFormat from '../../../client/helpers/dollarFormat.js';

describe(('Correctly Formats a Dollar'), () => {

  test('correctly changes number to a dollar string', () => {
    expect(dollarFormat(200000)).toEqual('$200,000');
  });
});
