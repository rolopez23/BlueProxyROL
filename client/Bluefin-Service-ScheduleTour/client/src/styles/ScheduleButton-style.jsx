import styled from 'styled-components';

const Button = styled.div`
  box-sizing: border-box;
  height: 40px;
  width: 300px;

  border-radius: 2px;
  margin: 0 auto;
  padding-top: 10px;
  text-align: center;
  font-weight: 500;
  cursor: pointer;

  color: white;
  background-color: #2da6a2;

  &:hover {
    background-color: #268c89;
  }

  &:active {
    padding-top: 10px;
    box-shadow: 0 0 0 2px #5ea0f7;
  }

`;

Button.displayName = 'Button';

export default Button;
