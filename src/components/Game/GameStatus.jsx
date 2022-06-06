import React from 'react';



const GameStatus = ({status, time, number}) => {
  const statusText =  {
    prepare: "Нажмите на поле, чтобы начать игру",
    won: `Результат: ${(time.min > 0) ? time.min + " мин, " : ""} ${time.sec} сек`,
    starting: "Начинаем",
    play: `След число: ${number}`
  };

  
  return (
    <div className='game__status'>
      { statusText[status] }
    </div>
  )
}

export default GameStatus;