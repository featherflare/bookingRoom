import DatePicker from './DatePicker/DatePicker';
import { useState } from 'react';
import TimePickerCompenent from './TimePicker/TimePicker';

const UserPage = () => {
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
    <>
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
    </>
  );
};

export default UserPage;
