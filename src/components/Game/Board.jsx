import React, { useEffect, useRef } from 'react';
import "../../styles/board.css";

const Cell = ({num, cb, highlight}) => {
  const classes = ["board__cell"];
  if (highlight) classes.push("board__cell--clicked")

  return (
    <button className={classes.join(" ")} onClick={() => cb(num)}>{num}</button>
  );
}

const Board = (props) => {
  const {
    handleClick,
    handleReplay,
    numbers,
    status,
    time,
    size,
    highlight,
    solved
  } = props;

  const clickCell = num => {
    handleClick(num);
  };

  const boardRef = useRef();

  useEffect(() => {
    boardRef.current.style.setProperty("--board-size", size);
  }, [size]);

  return (
    <div className='board' ref={boardRef}>
      { numbers.map(num => <Cell key={num} num={num} highlight={highlight && (solved.includes(num))} cb={clickCell} />) }
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