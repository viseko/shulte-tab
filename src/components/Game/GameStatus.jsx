import React from 'react';

const GameStatus = (props) => {
  const {status, time, number} = props;

  const statusText =  {
    prepare: "Нажмите на поле, чтобы начать игру",
    won: `Результат: ${(time.min > 0) ? time.min + " мин, " : ""} ${time.sec} сек`,
    starting: `Результат: ${(time.min > 0) ? time.min + " мин, " : ""} ${time.sec} сек`,
    play: `След число: ${number}`
  };

  return (
    <div className='game__status'>
      { statusText[status] }
    </div>
  )
}

export default GameStatus;