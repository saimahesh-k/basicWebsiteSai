import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./Pages/HomePage";

import DrawerAppBar from "./Components/AppBar";
import { Route, Router, Routes, useLocation } from "react-router";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { Box, Grid } from "@mui/material";
import ExplorePage from "./Pages/ExplorePage";
import Practice from "./Pages/Practice";
import PlayGround from "./Components/PracticeFiles/PlayGround";
import Practice2 from "./Pages/Practice2";
import Portfolio from "./Pages/Portfolio";
// import './AppStyles.scss'

function App() {
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/';

  return (
    <>
      {!isPortfolioPage && (
        <Grid sx={{ height: "11vh" }}>
          <DrawerAppBar></DrawerAppBar>
        </Grid>
      )}
      <Grid sx={{ height: isPortfolioPage ? "100vh" : "89vh" }}>
        <Routes>
          <Route path="/" element={<Portfolio></Portfolio>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
          <Route path="/explore" element={<ExplorePage></ExplorePage>}></Route>
          <Route path="/pr" element={<Practice></Practice>}></Route>
          <Route path="/pr2" element={<Practice2></Practice2>}></Route>
          <Route path="/pg" element={<PlayGround></PlayGround>}></Route>
        </Routes>
      </Grid>
    </>
  );
}

export default App;
