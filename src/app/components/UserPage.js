import DatePicker from './DatePicker/DatePicker';
import { useState } from 'react';
import TimePickerCompenent from './TimePicker/TimePicker';
import $ from 'jquery';

const UserPage = () => {
  const [basicCalendarDate, setBasicCalendarDate] = useState(new Date());
  const [time, setTime] = useState({ start: null, end: null });
  const [room, setRoom] = useState([]);

  const selectedDay = (val) => {
    setBasicCalendarDate(val);
  };

  const timeset = (val, val2) => {
    console.log(val, val2 - 23);
    setTime({ start: val, end: val2 - 23 });
  };

  const handleSelect = (room) => {
    $(`.select-${room}`).toggleClass('select', () => {});
    setRoom((prev) => [
      ...prev,
      { date: basicCalendarDate, time: time, roomSelect: room },
    ]);
  };
  return (
    <>
      <div className='booking-header'>
        <div className='header-type'>User</div>
        <div className='header-type'>Booking: 0</div>
      </div>
      <div className='booking-body'>
        <div className='time-body'>
          <div className='detail-header'>Time</div>
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
          <div className='detail-header'>Room</div>
          <div className='room-box'>
            <div
              className={`select-box select-Room1 `}
              onClick={(e) => handleSelect('Room1')}
            >
              Room1
            </div>
            <div
              className={`select-box select-Room2 `}
              onClick={(e) => handleSelect('Room2')}
            >
              Room2
            </div>
            <div
              className={`select-box select-Room3 `}
              onClick={(e) => handleSelect('Room3')}
            >
              Room3
            </div>
            <div
              className={`select-box select-Room4 `}
              onClick={(e) => handleSelect('Room4')}
            >
              Room4
            </div>
          </div>
          <button>Booking</button>
        </div>
      </div>
    </>
  );
};

export default UserPage;
