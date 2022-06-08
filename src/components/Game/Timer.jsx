import React from 'react';

import "../../styles/timer.css";
import Icon from '../UI/Icon';

const Timer = ({time, replay, stop, status}) => {
  return (
    <div className='game__timer timer'>
      <button className="timer__btn" disabled={status !== "play"} onClick={replay}>
        <Icon width="20" height="20" name="refresh" />
      </button>
      <span className="timer__time">
        {time.min}:{time.sec < 10 && "0"}{time.sec}
      </span>
      <button className="timer__btn" disabled={status !== "play"} onClick={stop}>
      <Icon width="20" height="20" name="stop" />
      </button>
    </div>
  );
};

export default Timer;