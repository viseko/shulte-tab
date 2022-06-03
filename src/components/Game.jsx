import React, { useContext, useEffect, useState } from 'react';
import Board from './Game/Board';
import NextNumber from './Game/NextNumber';
import buildArray from '../utils/buildArray.js';
import Timer from './Game/Timer';
import { useTimer } from '../hooks/useTimer';
import { OptionsContext } from '../context';

const Game = () => {
  const {options} = useContext(OptionsContext);
  const {size, order, penalty, highlight, mix} = options;

  const [currentNumber, setCurrentNumber] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [gameStatus, setGameStatus] = useState("prepare"); // prepare | starting | play | won
  
  const timer = useTimer();

  const handleClick = (num) => {
    if (num === currentNumber) {
      setCurrentNumber(num + 1);
    }
  };

  const replay = () => {
    setGameStatus("starting");
  };

  const stopGame = () => {
    setGameStatus("prepare");
  };

  useEffect(() => {
    if (gameStatus === "starting") {
      setCurrentNumber(1);
      setNumbers( buildArray(size ** 2, true) );
      setGameStatus("play");
      timer.start();
    }

    if (gameStatus === "prepare") {
      timer.stop();
    }

    if (gameStatus === "won") {
      setCurrentNumber(1);
      timer.stop();
    }
  }, [gameStatus, timer]);

  useEffect(() => {
    if (currentNumber > size ** 2) {
      setGameStatus("won");
    }
  }, [currentNumber, timer])

  return (
    <div className='game'>
      <NextNumber number={currentNumber} />
      <Board
        status={gameStatus}
        numbers={numbers}
        handleClick={(n) => handleClick(n)}
        handleReplay={replay}
        time={timer.time}
        size={size}
      />
      <Timer status={gameStatus} replay={replay} stop={stopGame} time={timer.time} />
    </div>
  )
}

export default Game