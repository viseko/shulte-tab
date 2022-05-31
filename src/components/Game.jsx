import React, { useEffect, useState } from 'react';
import Board from './Game/Board';
import NextNumber from './Game/NextNumber';
import shuffle from "../utils/shuffle.js";
import Timer from './Game/Timer';
import { useTimer } from '../hooks/useTimer';

const Game = () => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [gameStatus, setGameStatus] = useState("prepare"); // preapare | starting | play | won
  const timer = useTimer();

  const handleClick = (num) => {
    if (num === currentNumber) {
      setCurrentNumber(num + 1);
    }
  };

  const buildArray = () => {
    const arr = shuffle(new Array(25).fill(null).map((n, i) => i + 1));
    setNumbers(arr);
  };

  const replay = () => {
    setGameStatus("starting");
  };

  const stopGame = () => {
    setGameStatus("prepare");
    timer.stop();
  };

  useEffect(() => {
    if (gameStatus === "starting") {
      buildArray();
      setGameStatus("play");
      setCurrentNumber(1);
      timer.start();
    }
  }, [gameStatus, timer]);

  useEffect(() => {
    if (currentNumber > 25) {
      timer.stop();
      setGameStatus("won");
      setCurrentNumber(1);
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
      />
      <Timer status={gameStatus} replay={replay} stop={stopGame} time={timer.time} />
    </div>
  )
}

export default Game