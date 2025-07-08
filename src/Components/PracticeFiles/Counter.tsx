import { Box, Button, Grid } from "@mui/material";
import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <Grid>
      <Button onClick={() => setCount(count + 1)}>increase</Button>
      <Button onClick={() => setCount(count - 1)} disabled={count === 0}>
        decrease
      </Button>
      <Box>Count: {count}</Box>
    </Grid>
  );
};

export default Counter;
