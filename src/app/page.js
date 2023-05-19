'use client';
import './assets/style/page.css';
import ham from './assets/image/hamburger.svg';
import Image from 'next/image';
import DatePicker from './components/DatePicker/DatePicker';
import { useState } from 'react';
import TimePickerCompenent from './components/TimePicker/TimePicker';
import Moment from 'moment';

export default function Home() {
  const [basicCalendarDate, setBasicCalendarDate] = useState(new Date());
  const [time, setTime] = useState({ start: null, end: null });

  const selectedDay = (val) => {
    setBasicCalendarDate(val);
  };

  const timeset = (val, val2) => {
    console.log(val, val2 - 23);
    setTime({ start: val, end: val2 - 23 });
  };

  return (
    <main>
      <header className='header'>
        <div className='line1'>
          <div>header</div>
          <Image src={ham} />
        </div>
        <div className={`line2 `}>
          <div className='position-op'>User</div>
          <div className='position-op'>Admin</div>
        </div>
      </header>
      <section className='body'>
        <div className='booking-header'>
          <div className='header-type'>User</div>
          <div className='header-type'>Booking: 0</div>
        </div>
        <div className='booking-body'>
          <div className='time-body'>
            <div>Time:</div>
            <DatePicker
              getSelectedDay={selectedDay}
              // endDate={12}
              selectDate={basicCalendarDate}
              labelFormat={'MMMM'}
              color={'#001240'}
            />

            <TimePickerCompenent setTime={timeset} />
          </div>
          <div className='room-body'>
            <div>Room:</div>
            <div>Room1</div>
            <div>Room2</div>
            <div>Room3</div>
            <div>Room4</div>
          </div>
        </div>
      </section>
    </main>
  );
}
