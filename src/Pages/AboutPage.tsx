import { Box, Typography } from "@mui/material";
import AboutPageBG from '../assets/AboutpageBG.jpg'

export const AboutPage = () => {
  return (
    <Box sx={{
        backgroundImage: `url(${AboutPageBG})`,
        height:'80vh',
        width:'98vw',
        display:'flex',
        flexDirection:"column"
    }}>
      <Typography>About Page</Typography>
    </Box>
  );
};
