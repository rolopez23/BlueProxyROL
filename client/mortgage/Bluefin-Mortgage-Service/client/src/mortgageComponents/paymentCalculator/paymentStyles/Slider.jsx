import Styled from 'styled-components';

const Slider = Styled.input`
  width: 100%;
  stroke: none;
  cursor: pointer;
  height: 3px;
  margin-top: 16px;
  margin-bottom: 22.5px;
  -webkit-appearance: none;
  background-color: blue;
  cursor: default;
    &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: white;
    border: blue solid 1px;
    border-radius: 50%;
    cursor: pointer; /* Cursor on hover */
  }
`;

Slider.displayName = 'Slider';

export default Slider;
