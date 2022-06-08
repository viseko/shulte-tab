import React, { useContext, useEffect, useState } from 'react';
import Board from './Game/Board';
import GameStatus from './Game/GameStatus';
import buildArray from '../utils/buildArray';
import Timer from './Game/Timer';
import { useTimer } from '../hooks/useTimer';
import { OptionsContext } from '../context';

import "../styles/game.css";

const Game = () => {
  const {size, order, penalty, highlight, mix} = useContext(OptionsContext).options;

  const [steps, setSteps] = useState({
    order: [],
    current: 0
  });

  const [numbers, setNumbers] = useState([]);
  const [gameStatus, setGameStatus] = useState("prepare"); // prepare | starting | play | won

  const [penaltySeconds, setPenaltySeconds] = useState(0);
  const [totalTime, setTotalTime] = useState({min: 0, sec: 0});
  const timer = useTimer();

  const handleClick = (num) => {
    const targetStep = steps.order[steps.current];

    if (num === targetStep) {
      setSteps({
        ...steps,
        current: steps.current + 1
      })
    } else if (penalty) {
      setPenaltySeconds(penaltySeconds + 3);
    }

    if (mix) {
      setNumbers( buildArray(size ** 2, true) );
    }
  };

  const replay = () => {
    setGameStatus("starting");
  };

  const stopGame = () => {
    setGameStatus("prepare");
  };

  useEffect(() => {
    const buildSteps = () => {
      const randomize = (order === "random");
      const steps = buildArray(size ** 2, randomize);
      if (order === "down") steps.reverse();
  
      setSteps({
        order: steps,
        current: 0
      });
    };

    if (gameStatus === "starting") {
      buildSteps();
      setPenaltySeconds(0);
      setNumbers( buildArray(size ** 2, true) );
      setGameStatus("play");
      timer.start();
    }

    if (gameStatus === "prepare" || gameStatus === "won") {
      timer.stop();
    }
  }, [steps, gameStatus, timer, size, order]);

  useEffect(() => {
    if (steps.current === size ** 2) {
      setGameStatus("won");
    }
  }, [steps, size])

  useEffect(() => {
    const date = new Date(
      timer.time.sec * 1000 +
      timer.time.min * 1000 * 60 +
      penaltySeconds * 1000
    )

    setTotalTime({
      min: date.getMinutes(),
      sec: date.getSeconds()
    })  
  }, [penaltySeconds, timer.time]);
  
  return (
    <div className='game'>
      <GameStatus
        number={steps.order[steps.current]}
        status={gameStatus}
        time={totalTime}
      />
      <Board
        status={gameStatus}
        numbers={numbers}
        handleClick={handleClick}
        handleReplay={replay}
        size={size}
        highlight={highlight}
        steps={steps}
      />
      <Timer
        status={gameStatus}
        replay={replay}
        stop={stopGame}
        time={totalTime}
      />
    </div>
  );
};

export default Game;