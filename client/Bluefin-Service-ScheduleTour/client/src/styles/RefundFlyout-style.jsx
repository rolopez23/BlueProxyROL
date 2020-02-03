import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 300;
  position: absolute;
  top: 280px;
  left: 48px;
`;


const Box = styled.div`
  height: 87px;
  width: 328px;
  background-color: white;
  margin-top: 20px;
  z-index: 200;

  position: relative;
  border-radius: 2px;
  box-shadow: -0.9px 0.26px 3px 2.6px rgba(0,0,0,.16);
`;


const DownArrow = styled.div`
  width: 21px;
  height: 21px;
  transform: rotate(45deg);
  z-index: 201;

  position: relative;
  box-shadow: 1.9px 3.26px 4px 0px rgba(0,0,0,.16);
  left: 285px;
  top: -10px;

  background-color: white;
`;

const P = styled.p`
  position: relative;
  top: 13px;
  font-size: 0.875rem;
  margin: 0 auto;
  color: #585858;
`;

const A = styled.a`
  position: relative;
  left: -103px;
  top: 22px;


  color: #0c82a6;

  &:hover {
    color: #65c0ce;
  }
`;

Wrapper.displayName = 'Flyout';
Box.displayName = 'Box';
DownArrow.displayName = 'DownArrow';
P.displayName = 'Paragraph';
A.displayName = 'Anchor';


export {
  Wrapper, Box, DownArrow, P, A,
};
