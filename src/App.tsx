import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./Pages/HomePage";

import DrawerAppBar from "./Components/AppBar";
import { Route, Router, Routes } from "react-router";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { Box, Grid } from "@mui/material";
import ExplorePage from "./Pages/ExplorePage";
import Practice from "./Pages/Practice";
// import './AppStyles.scss'

function App() {
  return (
    <>
      <Grid sx={{ height: "11vh" }}>
        <DrawerAppBar></DrawerAppBar>
      </Grid>
      <Grid sx={{ height: "89vh" }}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
          <Route path="/explore" element={<ExplorePage></ExplorePage>}></Route>
          <Route path="/prac" element={<Practice></Practice>}></Route>
        </Routes>
      </Grid>
    </>
  );
}

export default App;
