import Styled from 'styled-components';

const InputContainer = Styled.div`
  display: grid;
  grid-template:
  "a b"
  "c d"
  "e f";
  grid-template-columns: 49% 49%;
  grid-row-gap: 0;
  grid-column-gap: 2%;
  overflow: hidden;
`;

InputContainer.displayName = InputContainer;

export default InputContainer;
