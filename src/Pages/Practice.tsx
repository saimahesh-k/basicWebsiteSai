import React, { useRef } from "react";
import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { PraciceSectionTypes } from "../Models/PracticeEnums";
import StopWatch from "../Components/PracticeFiles/StopWatch";
import Counter from "../Components/PracticeFiles/Counter";
import ToogleSwitch from "../Components/PracticeFiles/ToogleSwitch";
import ToDoList from "../Components/PracticeFiles/ToDoList";
import StopWatchOwn from "../Components/PracticeFiles/StopWatchOwn";

const Practice = () => {
  const [practiceSection, setPracticesection] = useState<PraciceSectionTypes>(
    PraciceSectionTypes.StopWatch
  );

  return (
    <div>
      <Grid border={"1px solid black"}>
        <Button
          onClick={() => setPracticesection(PraciceSectionTypes.StopWatch)}
        >
          StopWatch
        </Button>
        <Button onClick={() => setPracticesection(PraciceSectionTypes.Counter)}>
          Counter
        </Button>
        <Button
          onClick={() => setPracticesection(PraciceSectionTypes.ToogleSwtich)}
        >
          ToogleSwitch
        </Button>
        <Button
          onClick={() => setPracticesection(PraciceSectionTypes.toDOList)}
        >
          toDOList
        </Button>
        <Button
          onClick={() => setPracticesection(PraciceSectionTypes.stopWatchOwn)}
        >
          stopWatchOwn
        </Button>
      </Grid>
      <Grid border={"1px solid black"}>
        {practiceSection === PraciceSectionTypes.StopWatch && (
          <StopWatch></StopWatch>
        )}
        {practiceSection === PraciceSectionTypes.Counter && <Counter></Counter>}
        {practiceSection === "ToogleSwtich" && <ToogleSwitch></ToogleSwitch>}
        {practiceSection === PraciceSectionTypes.toDOList && (
          <ToDoList></ToDoList>
        )}
        {practiceSection === PraciceSectionTypes.stopWatchOwn && (
          <StopWatchOwn />
        )}
      </Grid>
    </div>
  );
};

export default Practice;
