import type { CalendarDate } from '../types';

//to format the date to date object to display on the calendar
export const getFormattedDate = (
  value: number,
  activeDate: Date,
  monthDate: Date,
  isDisabled: boolean
): CalendarDate => ({
  id: `${monthDate.getFullYear()}-${monthDate.getMonth()}-${value}`,
  value,
  isActive:
    monthDate.getFullYear() === activeDate.getFullYear() &&
    monthDate.getMonth() === activeDate.getMonth() &&
    value === activeDate.getDate(),
  isDisabled
});
