import styled, { createGlobalStyle } from 'styled-components';

const AppWrapper = styled.div`
  height: 436px;
  width: 313px;
  border: 1px solid black;
  margin-left: 100px;
`;

const Header = styled.h3`
  text-align: center;
  font-size: 1.375rem;
  font-weight: 600;
`;

const Paragraph = styled.div`
  color: #999;
  margin-top: 5px;
  margin-left: 10px;
  text-align: center;
  font-size: 0.75rem;
`;

const CalendarWrapper = styled.div`
  height: 114px;
  width: 313px;
  position: relative
  display: inline-block;
`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin&display=swap');
  body {
    font-family: 'Libre-Franklin', sans-serif;
  }
`;

const NextButton = styled.div`
  height: 32px;
  width: 32px;
  border: 1px solid #777;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  z-index: 100;
  bottom: 67px;
  left: 279px;
`;

export {
  AppWrapper,
  Header,
  Paragraph,
  CalendarWrapper,
  GlobalStyles,
  NextButton,
};
