import React from 'react';

const Timer = ({time, replay, stop}) => {
  return (
    <div className='game__timer timer'>
      <button className="timer__btn" onClick={replay}>Заново</button>
      <span className="timer__time">
        {time.min}:{time.sec}
      </span>
      <button className="timer__btn" onClick={stop}>Остановить</button>
    </div>
  );
};

export default Timer;