import styled from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export const CalendarHeader = styled.div`
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
  color: #414141;
`;

export const LeftIcon = styled(ChevronLeftIcon).attrs({ size: '1.5em' })``;

export const RightIcon = styled(ChevronRightIcon).attrs({ size: '1.5em' })``;

export const NavButton = styled.button`
  all: unset;
  align-self: stretch;
  aspect-ratio: 1;
  cursor: pointer;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  isolation: isolate;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: hsl(180 10% 95%);
    opacity: 0;
    transition: opacity 200ms;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const CalendarTitle = styled.h2`
  margin: 0;
  font-size: 1.2em;
  font-weight: 500;

  & > span {
    margin: 0 0.5rem;
  }
`;
