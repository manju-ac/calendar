import React from 'react';

import * as Styled from './calendar.styled';
import useCalendar from '../hooks/use-calendar';
import CalendarHeader from './calendar-header';
import CalendarDays from './calendar-days';

/*
 *  date prop is made optional, defaults to sysdate if not privided
 *  if we want to provide 2 digit years, we can do, date.setFullYear(<2 digit year>) to avoid unexpected behaviour;
 */
type CalendarProps = {
  date?: Date;
  showDisabledDates?: boolean;
};

const Calendar: React.FC<CalendarProps> = ({
  date,
  showDisabledDates = false
}) => {
  const { currentDate, dates, changeMonth } = useCalendar(date || new Date());
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  return (
    <Styled.Calendar>
      <CalendarHeader
        title={`${monthName} ${currentDate.getFullYear()}`}
        onMonthChange={changeMonth}
      />
      <CalendarDays data={dates} showDisabledDates={showDisabledDates} />
    </Styled.Calendar>
  );
};

export default Calendar;
