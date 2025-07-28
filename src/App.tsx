import React, { useState, useEffect } from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage";

import DrawerAppBar from "./Components/AppBar";
import { Route, Routes, useLocation } from "react-router";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { Grid } from "@mui/material";
import ExplorePage from "./Pages/ExplorePage";
import Practice from "./Pages/Practice";
import PlayGround from "./Components/PracticeFiles/PlayGround";
import Practice2 from "./Pages/Practice2";
import Portfolio from "./Pages/Portfolio";
import NewsPage from "./Pages/NewsPage";
import AuthLogin from "./Components/AuthLogin";
import TopicPage from "./Pages/TopicPage";
import NewsAboutPage from "./Pages/NewsAboutPage";
import NewsContactPage from "./Pages/NewsContactPage";
// import './AppStyles.scss'

function App() {
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/';
  const isNewsPage = location.pathname === '/news';
  const isTopicPage = location.pathname.startsWith('/news/');
  const isPublicPage = isPortfolioPage || isNewsPage || isTopicPage;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already authenticated (persisted in localStorage)
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  // If not public page and not authenticated, show login
  if (!isPublicPage && !isAuthenticated) {
    return <AuthLogin onLogin={handleLogin} />;
  }

  return (
    <>
      {!isPublicPage && (
        <Grid sx={{ height: "11vh" }}>
          <DrawerAppBar></DrawerAppBar>
        </Grid>
      )}
      <Grid sx={{ height: isPublicPage ? "100vh" : "89vh" }}>
        <Routes>
          <Route path="/" element={<Portfolio></Portfolio>}></Route>
          <Route path="/news" element={<NewsPage></NewsPage>}></Route>
          <Route path="/news/about" element={<NewsAboutPage />} />
          <Route path="/news/contact" element={<NewsContactPage />} />
          <Route path="/news/:slug" element={<TopicPage />} />
          <Route path="/news/:slug/:articleId" element={<TopicPage />} />
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
