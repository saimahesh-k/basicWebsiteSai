import React from 'react'

const StopWatch = () => {
  const [startTime, setStartTime] = React.useState(null);
  const [now, setNow] = React.useState(null);
  const timeInterval = React.useRef(null);

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handlestart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(timeInterval.current);
    timeInterval.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timeInterval.current);
  };

  return (
    <div>
      <div>time passed: {secondsPassed.toFixed(3)}</div>
      <div>
        <button onClick={handlestart}>start</button>
        <button onClick={handleStop}>stop</button>
      </div>
    </div>
  );
}

export default StopWatch