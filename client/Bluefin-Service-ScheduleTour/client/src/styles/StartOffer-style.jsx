import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 0.875rem;
  text-align: center;
  cursor: pointer;
`;

const Button = styled.a`
  color: #0c82a6;
  font-weight: 200;

  &:hover {
    color: #65c0ce;
  }
`;

Wrapper.displayName = 'StartOfferButton';
Button.displayName = 'StartOfferText';

export {
  Wrapper,
  Button,
};
