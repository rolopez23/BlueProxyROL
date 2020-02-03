import styled from 'styled-components';

const Wrapper = styled.div`
  height: 580px;
  width: 375px;
  background-color: #f5f5f5;

  position: fixed;
  top: 250px;
  left: 600px;
  box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.75);
`;

const Header = styled.div`
  box-sizing: border-box;
  height: 60px;
  width: 375px;
  font-size: 1.375rem;
  font-weight: 300;

  background-color: white;
  padding-top: 15px;

  text-align: center;

`;

const ChatContainer = styled.div`
  height: 480px;
  width: 375px;

  overflow-y: scroll;
`;

const Input = styled.input`

  height: 35px;
  width: 370px;
`;

export {
  Wrapper, Header, ChatContainer, Input,
};
