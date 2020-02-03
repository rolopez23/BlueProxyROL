import styled from 'styled-components';

const Wrapper = styled.div`
  height: auto;
  width: 375px;
  margin-bottom: 5px;
`;

const Avatar = styled.div`
  height: 30px;
  width: 30px;

  border: 1px solid black;
  border-radius: 100%;
  display: inline-block;

  position: relative;
  top: 10px;
  left: 10px;
`;


const ChatBubble = styled.div`
  width: 270px;
  border-radius: 10px;
  word-break: break-all;

  padding: 10px;
  background-color: white;
  display: inline-block;

  position: relative;
  left: 20px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.14);
`;

export { Wrapper, ChatBubble, Avatar };
