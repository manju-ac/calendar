import { render, screen } from '@testing-library/react';
import Calendar from './calendar';

describe('Calendar', () => {
  it('calendar highlights provided date', () => {
    render(<Calendar date={new Date('2023-01-02')} />);
    const actualActiveValue = screen.getByTestId('active').textContent;

    expect(actualActiveValue).toEqual('2');
  });

  it('calendar displays correct month and year - 1', () => {
    render(<Calendar date={new Date('2021-05-30')} />);
    const actualActiveValue = screen.getByTestId('title').textContent;

    expect(actualActiveValue).toEqual('May 2021');
  });

  it('calendar displays correct month and year - 2', () => {
    render(<Calendar date={new Date('1901/03/31')} />);

    expect(screen.getByText('March 1901')).toBeInTheDocument();
  });
});
