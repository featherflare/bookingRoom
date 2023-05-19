import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import '../../assets/style/TimePicker.scss';

export default function TimePicker({ setTime }) {
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  const [hour, setHour] = useState();
  const [hour2, setHour2] = useState();

  const first = (e) => {
    var id = e.target.id;
    $(`.first`).removeClass('select');
    // $(`.first#${id}`).addClass("select");
    document.getElementById(id).classList.add('select');
    let el = document.querySelector('.first.select');
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
    var val = el.getAttribute('id');
    setHour(val);
    console.log(val);
  };

  function back(e) {
    var id = e.target.id;
    console.log(id);
    $(`.back`).removeClass('select2');
    document.getElementById(id).classList.add('select2');
    let el2 = document.querySelector('.back.select2');
    el2.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
    var val2 = el2.getAttribute('id');
    setHour2(val2);
    console.log(val2);
  }

  useEffect(() => {
    setTime(hour, hour2);
  }, [hour, hour2]);

  return (
    <div className='card-time'>
      <div className='card-time2'>
        <div className='card-time-picker-text'>Start</div>
        <div className='card-time-picker-values'>
          <div className='card-time-picker-select'>
            <div className='card-time-picker-scroll'>
              <Repeat numTimes={23}>
                {(i) => (
                  <div
                    id={i}
                    key={i}
                    className='card-time-picker-option first'
                    onClick={(e) => first(e)}
                  >
                    {i}
                  </div>
                )}
              </Repeat>
            </div>
          </div>
          <div className='card-time-picker-option'>&nbsp;: 00</div>
        </div>
      </div>
      <div className='card-time2'>
        <div className='card-time-picker-text'>To</div>
        <div className='card-time-picker-values'>
          <div className='card-time-picker-select'>
            <div className='card-time-picker-scroll'>
              <Repeat numTimes={23}>
                {(i) => (
                  <div
                    id={i + 23}
                    key={i + 23}
                    className='card-time-picker-option back'
                    onClick={(e) => back(e)}
                  >
                    {i}
                  </div>
                )}
              </Repeat>
            </div>
          </div>
          <div className='card-time-picker-option'>&nbsp;: 00</div>
        </div>
      </div>
    </div>
  );
}
