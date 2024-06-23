/**
 * @file App.tsx is the main component of the application. It is responsible for rendering the NavigationBar, PortfolioPage, DescriptionPage, and ContactPage components. It also contains the routing logic for the application.
 * @module App
 * @see {@link https://reactrouter.com/}
 */

/**
 * Importing necessary modules to make the component work
 */
import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import PortfolioPage from "./PortfolioPage";
import DescriptionPage from "./DescriptionPage";
import ContactPage from "./ContactPage";
import ResumeRedirection from "./ResumeRedirection";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useEffect } from "react";
import SocialMediaRedirection from "./SocialMediaRedirection";

/**
 * App component
 * @returns App component
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
        <Route path="/home" element={<PortfolioPage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
