import Styled from 'styled-components';

const TextBox = Styled.input.attrs((props) => ({
  width: props.width,
}))`
  height: 30px;
  border: 1px gray solid;
  width: ${(props) => props.width};
  font-family: Arial;
  font-size: 1.4rem;
`;

TextBox.displayName = TextBox;

export default TextBox;
