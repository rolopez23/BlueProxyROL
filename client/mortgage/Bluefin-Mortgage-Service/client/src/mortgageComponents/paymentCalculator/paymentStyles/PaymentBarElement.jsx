import Styled from 'styled-components';

const PaymentBarElement = Styled.div.attrs((props) => ({
  width: props.width,
  color: props.color,
  borderRadius: props.borderRadius,
}))`
  display: inline-block;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  height: 100%;
  border-radius: ${(props) => props.borderRadius};

`;

export default PaymentBarElement;
