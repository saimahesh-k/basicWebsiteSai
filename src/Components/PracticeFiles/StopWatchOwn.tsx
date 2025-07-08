import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

// const StopWatchOwn = () => {
//   const [presentTime, setPresentTime] = React.useState(new Date());
//   const [timeToShow, setTimeToShow] = React.useState<any>();
//   const timerId = useRef<number | null>(null);
//   const [timerActive, setTimerActive] = React.useState(false);

//   const tick = () => {
    
  
//       timerId.current = window.setTimeout(() => {
//         setTimeToShow(new Date().getTime() - presentTime.getTime());
//         tick();
//       }, 1000);
//     }
// useEffect(() => {
//   if(timerActive){
//     setPresentTime(new Date());
//     tick();
//   } else {
//     if(timerId.current) clearTimeout(timerId.current);
//   }

//   return () => {
//     if(timerId.current) clearTimeout(timerId.current);
//   }
// }, [timerActive])
//   return (
//     <Grid>
//       <Typography>{Math.floor(timeToShow/1000)} seconds</Typography>{" "}
//       <Button
//         onClick={() => {
//           setTimerActive(true);
//         }}
//       >
//         {" "}
//         Start
//       </Button>
//       <Button
//         onClick={() => {
//           setTimerActive(false);
//         }}
//       >
//         Stop
//       </Button>
//     </Grid>
//   );
// };

// export default StopWatchOwn;


const StopWatchOwn = () => {
  const [presentTime, setPresentTime] = useState(new Date());
  const [timeToShow, setTimeToShow] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef<number | null>(null);

  const tick = () => {
    timerRef.current = window.setTimeout(() => {
      setTimeToShow(new Date().getTime() - presentTime.getTime());
      tick(); // call again
    }, 1000);
  };

  useEffect(() => {
    if (timerActive) {
      setPresentTime(new Date());
      tick();
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timerActive]);

  return (
    <Grid>
      <Typography>{Math.floor(timeToShow / 1000)} seconds</Typography>
      <Button onClick={() => setTimerActive(true)}>Start</Button>
      <Button onClick={() => setTimerActive(false)}>Stop</Button>
    </Grid>
  );
};

export default StopWatchOwn;
