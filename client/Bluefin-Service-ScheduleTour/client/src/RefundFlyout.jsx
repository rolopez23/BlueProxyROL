import React from 'react';
import {
  Wrapper, Box, DownArrow, P, A,
} from './styles/RefundFlyout-style';

const RefundFlyout = () => (
  <Wrapper>
    <Box>
      <P>Buy with a Bluefin Agent and we&apos;ll give you a</P>
      <P>percentage of our commision from the seller.</P>
      <A>Learn More</A>
    </Box>
    <DownArrow />
  </Wrapper>
);

export default RefundFlyout;
