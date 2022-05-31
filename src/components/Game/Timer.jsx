import React from 'react';

const Timer = ({time, replay, stop, status}) => {
  return (
    <div className='game__timer timer'>
      <button className="timer__btn" disabled={status !== "play"} onClick={replay}>Заново</button>
      <span className="timer__time">
        {time.min}:{time.sec < 10 && "0"}{time.sec}
      </span>
      <button className="timer__btn" disabled={status !== "play"} onClick={stop}>Остановить</button>
    </div>
  );
};

export default Timer;