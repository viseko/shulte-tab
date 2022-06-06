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

  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([0]);
  const [solvedSteps, setSolvedSteps] = useState([]);

  const [numbers, setNumbers] = useState([]);
  const [gameStatus, setGameStatus] = useState("prepare"); // prepare | starting | play | won

  const [penaltySeconds, setPenaltySeconds] = useState(0);
  const [totalTime, setTotalTime] = useState({min: 0, sec: 0});
  const timer = useTimer();

  const handleClick = (num) => {
    const targetStep = steps[currentStep];

    if (num === targetStep) {
      setCurrentStep(currentStep + 1);
      setSolvedSteps([...solvedSteps, targetStep]);
    }

    if (mix) {
      setNumbers( buildArray(size ** 2, true) );
    }

    if (num !== targetStep && penalty) {
      setPenaltySeconds(penaltySeconds + 3);
    }
  };

  const replay = () => {
    setGameStatus("starting");
  };

  const stopGame = () => {
    setGameStatus("prepare");
  };

  const buildSteps = () => {
    const randomize = (order === "random");
    const arr = buildArray(size ** 2, randomize);
    if (order === "down") arr.reverse();

    setSteps(arr);
  };

  useEffect(() => {
    if (gameStatus === "starting") {
      buildSteps();
      setCurrentStep(0);
      setPenaltySeconds(0);
      setSolvedSteps([]);
      setNumbers( buildArray(size ** 2, true) );
      setGameStatus("play");
      timer.start();
    }

    if (gameStatus === "prepare") {
      timer.stop();
    }

    if (gameStatus === "won") {
      setCurrentStep(0);
      timer.stop();
    }
  }, [gameStatus, timer, size]);

  useEffect(() => {
    if (currentStep === steps.length) {
      setGameStatus("won");
    }
  }, [currentStep, timer, size])

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
  }, [penaltySeconds, timer.time])
  

  return (
    <div className='game'>
      <NextNumber number={steps[currentStep]} />
      <Board
        status={gameStatus}
        numbers={numbers}
        handleClick={(n) => handleClick(n)}
        handleReplay={replay}
        time={totalTime}
        size={size}
        highlight={highlight}
        solved={solvedSteps}
      />
      <Timer status={gameStatus} replay={replay} stop={stopGame} time={totalTime} />
    </div>
  )
}

export default Game