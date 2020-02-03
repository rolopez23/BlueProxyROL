import Styled from 'styled-components';

const LenderInfo = Styled.div`
  text-align: left;
  font-size: .75rem;
  color: #333;
  display: grid;
  grid-template:
      "a b"
      "c c";
  grid-template-columns: 50% 50%;
  grid-row-gap: .75rem;
  grid-column-gap: 0;
  width: 100%;
`;

LenderInfo.displayName = 'LenderInfo';

export default LenderInfo;
