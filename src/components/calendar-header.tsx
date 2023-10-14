import * as Styled from './calendar-header.styled';
import useCalendar from '../hooks/use-calendar';

type CalendarHeaderProps = {
  title: string;
  onMonthChange: ReturnType<typeof useCalendar>['changeMonth'];
};

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  title,
  onMonthChange
}) => {
  return (
    <Styled.CalendarHeader>
      <Styled.NavButton onClick={onMonthChange.bind(null, 'prev')}>
        <Styled.LeftIcon />
      </Styled.NavButton>
      <Styled.CalendarTitle data-testid='title'>{title}</Styled.CalendarTitle>
      <Styled.NavButton onClick={onMonthChange.bind(null, 'next')}>
        <Styled.RightIcon />
      </Styled.NavButton>
    </Styled.CalendarHeader>
  );
};

export default CalendarHeader;
