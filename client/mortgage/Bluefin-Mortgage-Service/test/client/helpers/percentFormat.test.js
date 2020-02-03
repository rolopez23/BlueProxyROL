/* eslint-disable import/extensions */
import percentFormat from '../../../client/helpers/percentFormat.js';

describe(('Correctly Formats a Percent'), () => {

  test('Correctl formats to a percent with 3 digits', () => {
    expect(percentFormat(3.5)).toEqual('3.500%');
  });

});
