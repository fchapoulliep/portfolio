/**
 * @file App.tsx is the main component of the application. It is responsible for rendering the NavigationBar, PortfolioPage, DescriptionPage, and ContactPage components. It also contains the routing logic for the application.
 * @module App
 * @see {@link https://reactrouter.com/}
 */

/**
 * Importing necessary modules to make the component work
 */
import React, { useEffect } from "react";
import "../css/App.css";

import { HashRouter as Router, Route } from "react-router-dom";
import { Navigate, Routes } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import PortfolioPage from "./PortfolioPage";
import DescriptionPage from "./DescriptionPage";
import ContactPage from "./ContactPage";
import ResumeRedirection from "./ResumeRedirection";
import SocialMediaRedirection from "./SocialMediaRedirection";

/**
 * The main component of the portfolio application.
 * Renders the navigation bar, resume redirection, social media redirection,
 * and the routes for different pages.
 */
const App: React.FC = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <Router>
      <NavigationBar />
      <ResumeRedirection />
      <SocialMediaRedirection />
      <Routes>
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/description" element={<DescriptionPage />} />
        <Route path="/portfolio/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/portfolio" />} />
      </Routes>
    </Router>
  );
};

export default App;
