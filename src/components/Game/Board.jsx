import React, { useEffect, useRef } from 'react';
import Icon from '../../UI/Icon';

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
    <div className='game__board board' ref={boardRef}>
      { numbers.map(num => <Cell key={num} num={num} highlight={highlight && (solved.includes(num))} cb={clickCell} />) }
      {
        (status === "prepare" || status === "won") &&
        <div className='board__overlay'>
          <button className='board__btn' onClick={handleReplay}>
            <Icon width="40" height="40" name="play" />
            {status === "prepare" && "Старт"}
            {status === "won" && "Заново"}
          </button>
        </div>
      }
    </div>
  );
};

export default Board;