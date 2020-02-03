import styled from 'styled-components';

const RegularWrapper = styled.div`
  box-sizing: border-box;
  height: 84px;
  width: 84.667px;

  margin-right: 10px;
  margin-botton: 10px;
  padding-top: 12px;
  border: 1px solid #d1d1d1;
  border-radius: 2px;
  scroll-snap-align: start;
  cursor: pointer;

  display: inline-block;
  text-align: center;

  color: #777;

  &:hover {
    border: 1px solid #777;
  }

  &:active {
    padding-top: 9px;
    box-shadow: 0 0 0 3px #5ea0f7;
  }
`;

const SelectedWrapper = styled.div`
  box-sizing: border-box;
  height: 84px;
  width: 84.667px;
  margin-right: 10px;
  padding-top: 11px;
  border: 2px solid #777;
  border-radius: 2px;
  display: inline-block;
  text-align: center;
  box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.75);
`;

const Day = styled.div`
  font-size: 10px;
`;
const Date = styled.div`
  font-size: 1.75rem;
`;
const Month = styled.div`
  font-size: 12px;
`;

RegularWrapper.displayName = 'NotSelected';
SelectedWrapper.displayName = 'Selected';
Day.displayName = 'Day';
Date.displayName = 'Date';
Month.displayName = 'Month';

export {
  RegularWrapper,
  SelectedWrapper,
  Day,
  Date,
  Month,
};
