import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90px;
  width: 100%;

`;

const EntryWrapper = styled.div`
  height: 90px;
  padding: 3px;
  margin: 0 17px;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  &::-webkit-scrollbar {
    display: none;
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
  left: ${(props) => props.left};
  background-color: white;

  &:hover {
    box-shadow: 0 0 6px rgba(0,0,0,0.2)
  }
`;

const PrevButton = styled(NextButton)`
  bottom: 67px;
  left: 0;
`;

export {
  Wrapper, EntryWrapper, NextButton, PrevButton,
};
