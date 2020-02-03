/* eslint-disable react/prop-types */

import React from 'react';
import {
  RegularWrapper, SelectedWrapper, Day, Date, Month,
} from './styles/CalendarEntry-style';

const CalendarEntry = ({
  date, clickFn, selected, refs,
}) => {
  const { dayOfWeek, month, dayOfMonth } = date;
  return (
    selected
      ? (
        <SelectedWrapper onClick={() => { clickFn(date); }} ref={refs}>
          <Day className="day">{dayOfWeek}</Day>
          <Date className="date">{dayOfMonth}</Date>
          <Month className="month">{month}</Month>
        </SelectedWrapper>
      )
      : (
        <RegularWrapper onClick={() => { clickFn(date); }} ref={refs}>
          <Day className="day">{dayOfWeek}</Day>
          <Date className="date">{dayOfMonth}</Date>
          <Month className="month">{month}</Month>
        </RegularWrapper>
      )
  );
};

export default CalendarEntry;
