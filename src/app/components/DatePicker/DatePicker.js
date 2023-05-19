import React, { useEffect, useState } from 'react';
import {
  addDays,
  addMonths,
  differenceInMonths,
  format,
  isSameDay,
  lastDayOfMonth,
  startOfMonth,
} from 'date-fns';
import '../../assets/style/DatePicker.css';

export default function DatePicker({
  endDate,
  selectDate,
  getSelectedDay,
  color,
  labelFormat,
  setDate,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const firstSection = { marginLeft: '40px' };
  const startDate = new Date();
  const lastDate = addDays(startDate, 40 /* Change Date Value */);
  const primaryColor = color || 'rgb(54, 105, 238)';
  const selectedStyle = {
    fontWeight: 'bold',
    width: '50px',
    height: '60px',
    borderRadius: '0.5rem',
    background: primaryColor,
    color: '#fff',
  };
  const buttonColor = { background: primaryColor };
  const labelColor = { color: primaryColor };

  const getStyles = (day) => {
    if (isSameDay(day, selectedDate)) {
      return selectedStyle;
    }
    return null;
  };

  const getId = (day) => {
    if (isSameDay(day, selectedDate)) {
      return 'selected';
    } else {
      return '';
    }
  };

  function renderDays() {
    const dayFormat = 'E';
    const dateFormat = 'd';
    const months = [];
    let days = [];
    for (let i = 0; i <= differenceInMonths(lastDate, startDate); i++) {
      let start, end;
      const month = startOfMonth(addMonths(startDate, i));
      start = i === 0 ? Number(format(startDate, dateFormat)) - 1 : 0;
      end =
        i === differenceInMonths(lastDate, startDate)
          ? Number(format(lastDate, 'd'))
          : Number(format(lastDayOfMonth(month), 'd'));
      for (let j = start; j < end; j++) {
        days.push(
          <div
            id={`${getId(addDays(startDate, j))}`}
            className='dateDayItem'
            style={getStyles(addDays(month, j))}
            key={addDays(month, j)}
            onClick={() => onDateClick(addDays(month, j))}
          >
            <div className='dayLabel'>
              {format(addDays(month, j), dayFormat)}
            </div>
            <div className='dateLabel'>
              {format(addDays(month, j), dateFormat)}
            </div>
          </div>
        );
      }
      months.push(
        <div className='monthContainer' key={month}>
          <span className='monthYearLabel'>
            {format(month, labelFormat || 'MMMM yyyy')}
          </span>
          <div className='daysContainer'>{days}</div>
        </div>
      );
      days = [];
    }
    return (
      <div id={'container'} className='dateListScrollable'>
        {months}
      </div>
    );
  }

  const onDateClick = (day) => {
    setSelectedDate(day);
    if (getSelectedDay) {
      getSelectedDay(day);
    }
  };

  useEffect(() => {
    if (getSelectedDay) {
      if (selectDate) {
        getSelectedDay(selectDate);
      } else {
        getSelectedDay(startDate);
      }
    }
  }, []);

  useEffect(() => {
    if (selectDate) {
      if (!isSameDay(selectedDate, selectDate)) {
        setSelectedDate(selectDate);
        setTimeout(() => {
          let view = document.getElementById('selected');
          if (view) {
            view.scrollIntoView({
              behavior: 'smooth',
              inline: 'center',
              block: 'nearest',
            });
          }
        }, 20);
      }
    }
  }, [selectDate]);

  const nextWeek = () => {
    const e = document.getElementById('container');
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollLeft += width - 60;
  };

  const prevWeek = () => {
    const e = document.getElementById('container');
    const width = e ? e.getBoundingClientRect().width : null;
    e.scrollLeft -= width - 60;
  };

  return (
    <div className='container'>
      <div className='buttonWrapper left'>
        <button className='button' onClick={prevWeek}>
          {'<'}
        </button>
      </div>
      {renderDays()}
      <div className='buttonWrapper right'>
        <button className='button' onClick={nextWeek}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
