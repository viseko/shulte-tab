import { useState } from "react";

export const useTimer = () => {
  const [time, setTime] = useState({min: 0, sec: 0});
  const [timer, setTimer] = useState(0);
  let startTime = 0; // < -- Неким магическим образом геттер из стейта в tick'e всегда равен нулю,
                     //      а в локальной переменной работает нормально.
                     //      На данный момент не понял, почему это так работает.
  
  const start = () => {
    startTime = Date.now();
    clear();
    setTime({min: 0, sec: 0});
    setTimer(setInterval(tick, 1000));
  };

  const stop = () => {
    clearInterval(timer);
  };

  const clear = () => {
    clearInterval(timer);
    setTime({min: 0, sec: 0});
  };

  const tick = () => {
    const diff = new Date(Date.now() - startTime);

    setTime({
      min: diff.getMinutes(),
      sec: diff.getSeconds()
    });
  };

  return {
    timer: timer,
    time: time,
    start: start,
    clear: clear,
    stop: stop
  };
};