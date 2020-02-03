/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';

import dollarFormat from '../../../helpers/dollarFormat.js';

const StyledSvg = Styled.svg(props => ({
  fill: props.color,
  'padding-right': '.75rem',
  height: '10px',
  width: '10px',
}));

const LegendRow = Styled.div`
  display: block;
  float: right;
  width: 98.03921569%;
  margin-right: .98039216%;
  margin-left: .98039216%;
  box-sizing: border-box;
  padding-bottom: 1rem;
  font-weight: 400;
  font-seize: 1rem;
`;

const LegendLabel = Styled.span`
  max-width: 40%;
  word-break: break-word;
  color: #767676;
`;

const DollarAmount = Styled.span`
  float: right;

`;

const LegendItem = ({ color, amount, legend }) => (
  <LegendRow>
    <StyledSvg viewBox="0 0 120 120" color={color}>
      <circle cx="60" cy="60" r="50" />
    </StyledSvg>
    <LegendLabel>
      {legend}
    </LegendLabel>
    <DollarAmount>
      {dollarFormat(amount)}
    </DollarAmount>
  </LegendRow>

);

export default LegendItem;
