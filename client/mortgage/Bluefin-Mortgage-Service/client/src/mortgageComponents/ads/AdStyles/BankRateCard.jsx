import Styled from 'styled-components';

const BankRateCard = Styled.div.attrs((props) => ({
  height: props.height,
}))`
  border: 1px solid #d1d1d1;
  padding: 1rem 1rem;
  width: 100%;
  border-radius: 4px;
  display: inline-block;
  height: ${(props) => props.height};
`;

BankRateCard.displayName = 'BankRateCard';

export default BankRateCard;
