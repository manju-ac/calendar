import React from 'react';
import './App.css';
import Calendar from './components/calendar';

function App() {
  return (
    <div className='App'>
      {/* <Calendar /> */}
      {/* <Calendar date={new Date('2023/03/20')} /> */}
      {/* <Calendar date={new Date('2023.01.15')} /> */}
      {/* <Calendar date={new Date('1877-10-30')} /> */}
      <Calendar date={new Date('2023/11/29')} />
      {/* <Calendar date={new Date('2023/10/30')} showDisabledDates /> */}
    </div>
  );
}

export default App;
