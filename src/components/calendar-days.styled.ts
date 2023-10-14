import styled from 'styled-components';

export const CalendarWeekDays = styled.ul`
  color: #5a5a5a;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(7, minmax(3em, 1fr));
  margin: 0.25rem 0;
  font-size: 1.1em;

  & > li {
    font-weight: 500;
    padding: 0 0.5rem;
    aspect-ratio: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CalendarDays = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.25rem 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;

export const CalendarDay = styled.li<{
  $isActive: boolean;
  $isDisabled: boolean;
}>`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  aspect-ratio: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${({ $isActive }) => $isActive && `background-color: hsl(180 30% 80%);`}
  ${({ $isDisabled }) => $isDisabled && `opacity: .2;`}

  &:hover {
    ${({ $isActive, $isDisabled }) =>
      !$isActive && !$isDisabled && 'background-color: #2121210a;'}
  }
`;
