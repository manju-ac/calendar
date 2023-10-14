import React from 'react';

import * as Styled from './calendar-days.styled';
import { CalendarDate } from '../types';

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

type CalendarDaysProps = {
  data: CalendarDate[];
  showDisabledDates?: boolean;
};

//displays all the day cells including day names, optional showDisabledDates to show/hide disabled dates at the start or end of the month
const CalendarDays: React.FC<CalendarDaysProps> = ({
  data,
  showDisabledDates = true
}) => {
  return (
    <>
      <Styled.CalendarWeekDays>
        {WEEK_DAYS.map(weekDay => (
          <li key={weekDay}>{weekDay}</li>
        ))}
      </Styled.CalendarWeekDays>
      <Styled.CalendarDays>
        {data.map(date => (
          <Styled.CalendarDay
            key={date.id}
            $isActive={
              date.isActive &&
              (!date.isDisabled || (date.isDisabled && showDisabledDates))
            }
            $isDisabled={date.isDisabled}
            data-testid={date.isActive ? 'active' : undefined}
          >
            {date.isDisabled && !showDisabledDates ? '' : date.value}
          </Styled.CalendarDay>
        ))}
      </Styled.CalendarDays>
    </>
  );
};

export default CalendarDays;
