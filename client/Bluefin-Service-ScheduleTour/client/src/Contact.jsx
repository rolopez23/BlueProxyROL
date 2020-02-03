/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper, Box1, Box2 } from './styles/Contact-Style';

const Contact = ({ phone, clickFn }) => (
  <Wrapper>
    <Box1 href="#" onClick={clickFn}>Ask A Question</Box1>
    <Box2 href="tel:+I-MISS-KOBE">{ phone }</Box2>
  </Wrapper>
);

export default Contact;
