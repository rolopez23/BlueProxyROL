import React from 'react';
import { Wrapper, Header, ChatContainer, Input } from './styles/LiveChat-style';
import ChatEntry from './ChatEntry';

// definitely using dynamic rendering to when this is finished.
const LiveChat = () => (
  <Wrapper>
    <Header>Talk to Bluefin</Header>
    <ChatContainer>
      <ChatEntry text={'This is a Test'}/>
      <ChatEntry text={'hi'}/>
      <ChatEntry text={'This is another test'}/>
      <ChatEntry text={'This is another test another time'}/>
      <ChatEntry text={'io'}/>
      <ChatEntry text={'This may or may not be another test'}/>
      <ChatEntry text={'hi'}/>
      <ChatEntry text={'Lorem ipsum I dont know the rest'}/>
      <ChatEntry text={'testestestestestestestes'}/>
      <ChatEntry text={'peep'}/>
    </ChatContainer>
    <Input />
  </Wrapper>
);

export default LiveChat;
