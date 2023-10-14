import { useMemo, useState } from 'react';
import { getFormattedDate } from '../utils/calendar';
import { CalendarDate } from '../types';

//custom hook to generate dates for currently selected Month and to navigate between months
const useCalendar = (date: Date) => {
  const [activeDate] = useState(date);
  const [currentDate, setCurrentDate] = useState(date);

  //generate all the dates for the currently selected month
  const dates = useMemo(() => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const dates: CalendarDate[] = [];

    //find first week day index [0..6] of the currently selected month
    const firstDateOfCurrentMonth = new Date(currentYear, currentMonth, 1);
    const firstDayOfCurrentWeek = firstDateOfCurrentMonth.getDay();

    //find last day of the month (30/31 etc.) and last week day index of the currently selected month
    const lastDateOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0);
    const lastDayOfCurrentMonth = lastDateOfCurrentMonth.getDate();
    const lastDayOfCurrentWeek = lastDateOfCurrentMonth.getDay();

    const previousMonthDate = new Date(currentYear, currentMonth, 0);
    const lastDayOfPreviousMonth = previousMonthDate.getDate();

    //if the start day of the current month is not the first week day, add previous months last days to fill the gaps
    for (let i = 0; i < firstDayOfCurrentWeek; i++) {
      dates.push(
        getFormattedDate(
          lastDayOfPreviousMonth - firstDayOfCurrentWeek + i + 1,
          activeDate,
          previousMonthDate,
          true
        )
      );
    }

    //get all the dates of the current month
    const datesOfTheMonth = Array.from(Array(lastDayOfCurrentMonth), (_, i) =>
      getFormattedDate(i + 1, activeDate, currentDate, false)
    );
    dates.push(...datesOfTheMonth);

    const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);

    //if the last day of the current month is not the end of the week (index 6), fill the remaining gaps with next month's starting dates
    for (let i = lastDayOfCurrentWeek; i < 6; i++) {
      dates.push(
        getFormattedDate(
          i - lastDayOfCurrentWeek + 1,
          activeDate,
          nextMonthDate,
          true
        )
      );
    }

    return dates;
  }, [currentDate, activeDate]);

  //navigate to next or previous months
  const changeMonth = (to: 'prev' | 'next') => {
    setCurrentDate(
      currentDate =>
        new Date(
          currentDate.getFullYear(),
          to === 'prev'
            ? currentDate.getMonth() - 1
            : currentDate.getMonth() + 1
        )
    );
  };

  return {
    currentDate,
    dates,
    changeMonth
  };
};

export default useCalendar;
