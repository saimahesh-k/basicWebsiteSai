import { Box, Typography, Zoom } from "@mui/material";
import AboutpageWeddingBG from "../assets/AboutpageWeddingBG.jpg";
import GaneshaAndSwami from "../assets/GaneshaAndSwami.jpg";
import "./HomePageStyles.css";
import Grow from '@mui/material/Grow';

export const HomePage = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "100%", position: "relative", overflow: "hidden" }}
      >
        <img
          src={GaneshaAndSwami}
          alt="GaneshaAndSwami"
          style={{ width: "90vw", height: "auto", objectFit: "cover" }}
        />
        <Zoom in={true} style={{ transitionDelay: "500ms" }}>
          <Typography className="header">Om Sai Ram . Jai Ganesha</Typography>
        </Zoom>
        {/* <Grow in={true} style={{ transitionDelay: "500ms" }}>
          <Typography className="header">
            Make your occasion memorable with us!
          </Typography>
        </Grow> */}
      </Box>
    </Box>
  );
};
