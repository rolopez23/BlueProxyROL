/* eslint-disable react/prop-types */
import React from 'react';
import Button from './styles/ScheduleButton-style';

// there will be some logic in this component to check whether tours are available that day.
// if tour not available, render "this home is unavailable to tour on this day" rather than button
const ScheduleButton = ({ clickFn }) => (
  <>
    <Button onClick={clickFn}>Schedule Tour</Button>
  </>
);

export default ScheduleButton;
