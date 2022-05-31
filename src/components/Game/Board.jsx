import React, { useEffect, useState } from 'react';
import "../../styles/board.css";

const Cell = ({num, cb}) => {
  return (
    <button className='board__cell' onClick={() => cb(num)}>{num}</button>
  );
}

const Board = (props) => {
  const {
    handleClick,
    handleReplay,
    numbers,
    status,
    time
  } = props;

  const clickCell = num => {
    handleClick(num);
  };

  return (
    <div className='board'>
      { numbers.map(num => <Cell key={num} num={num} cb={clickCell} />) }
      {
        (status === "prepare" || status === "won") &&
        <div className='board__overlay'>
          {status === "won" && (
            <div>Результат: {time.min} мин, {time.sec} сек</div>
          )}
          <button className='board__btn' onClick={handleReplay}>
            {status === "prepare" && "Начать игру"}
            {status === "won" && "Заново"}
          </button>
        </div>
      }
    </div>
  );
};

export default Board;