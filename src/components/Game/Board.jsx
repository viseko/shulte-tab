import React, { useEffect, useRef } from 'react';
import Icon from '../UI/Icon';
import Cell from './Cell';

import "../../styles/board.css";

const Board = (props) => {
  const {
    handleClick,
    handleReplay,
    numbers,
    status,
    size,
    highlight,
    steps
  } = props;

  const boardRef = useRef();

  useEffect(() => {
    boardRef.current.style.setProperty("--board-size", size);
  }, [size]);

  const solved = steps.order.slice(0, steps.current);

  const checkHighlight = (num) => {
    return highlight && solved.includes(num);
  }

  return (
    <div className='game__board board' ref={boardRef}>
      {
        numbers.map(num =>
          <Cell
            key={num}
            num={num}
            highlight={checkHighlight(num)}
            cb={handleClick}
          />
        )
      }

      {
        (status === "prepare" || status === "won") &&
          <div className='board__overlay'>
            <button className='board__btn' onClick={handleReplay}>
              <Icon width="40" height="40" name="play" />
              { {prepare: "Старт", won: "Заново"}[status] }
            </button>
          </div>
      }
    </div>
  );
};

export default Board;