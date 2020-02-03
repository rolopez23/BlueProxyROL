import styled from 'styled-components';

const Wrapper = styled.div`
  height: 65px;
  margin-top: 15px;
  text-align: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 200;
`;

const Text = styled.div`
  width: 150px;
  display: inline-block;
  font-weight: 700;
  margin-bottom: 15px;
  cursor: pointer;
`;

const SVG = styled.svg`
  width: 15px;
  margin-left: 3px;
  display: inline-block;
  fill: #d1d1d1;
  cursor: pointer;

  &:hover {
    fill: #777;
  }
`;

Wrapper.displayName = 'Refund';
Text.displayName = 'Text';
SVG.displayName = 'SVG';

export {
  Wrapper,
  Text,
  SVG,
};
