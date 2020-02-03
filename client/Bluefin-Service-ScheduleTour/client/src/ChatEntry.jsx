/* eslint-disable react/prop-types */

import React from 'react';
import { Wrapper, ChatBubble, Avatar } from './styles/ChatEntry-style';

const ChatEntry = ({ text }) => (
  <Wrapper>
    <Avatar />
    <ChatBubble>{text}</ChatBubble>
  </Wrapper>
);

export default ChatEntry;
