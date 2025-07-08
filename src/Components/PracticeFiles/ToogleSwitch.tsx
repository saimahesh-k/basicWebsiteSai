import { Box, Grid, Switch } from "@mui/material";
import React, { useState } from "react";

const ToogleSwitch = () => {
  const [on, setOn] = useState(true);
  return (
    <Grid>
      <Box
        height={"50px"}
        width={"100px"}
        bgcolor={on ? "green" : "red"}
        onClick={() => setOn(!on)}
      ></Box>
    </Grid>
  );
};

export default ToogleSwitch;
