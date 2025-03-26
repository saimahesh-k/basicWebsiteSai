import React, { useRef } from "react";
import { useState } from "react";

const Practice = () => {
  // {
  //     var a = 1;
  //     let b = 2;
  //     const c = 3;
  // }
  // console.log(a);
  // console.log(b);
  // console.log(c);

  // console.log(foo);
  // var foo = function() {
  //     console.log("Hello");
  // };
  // console.log(foo);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const timeInterval = useRef(null);

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handlestart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(timeInterval.current)
    timeInterval.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () =>{
    clearInterval(timeInterval.current)
  }

  return (
    <div>
      <div>time passed: {secondsPassed.toFixed(3)}</div>
      <div>
        <button onClick={handlestart}>start</button>
        <button onClick={handleStop} >stop</button>
      </div>
    </div>
  );
};

export default Practice;
