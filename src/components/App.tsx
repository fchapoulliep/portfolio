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
import { ConfigProvider } from "antd";

/**
 * The main component of the portfolio application.
 * Renders the navigation bar, resume redirection, social media redirection,
 * and the routes for different pages.
 */
const App: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        let maxHeight = document.body.scrollHeight - cursor.clientHeight;
        let maxWidth = window.innerWidth - cursor.clientWidth;
        if (e.pageY > maxHeight) {
          (cursor as HTMLElement).style.top = `${maxHeight}px`;
        } else {
          (cursor as HTMLElement).style.top = `${e.pageY}px`;
        }
        if (e.pageX > maxWidth) {
          (cursor as HTMLElement).style.left = `${maxWidth}px`;
        } else {
          (cursor as HTMLElement).style.left = `${e.pageX}px`;
        }
      }
    };
    const handleClick = () => {
      if (cursor) {
        cursor.classList.add("expand");
        setTimeout(() => {
          cursor.classList.remove("expand");
        }, 500);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Router>
      <ConfigProvider
        theme={{
          components: {
            /**
             * Customizing the Steps component
             */
            Steps: {
              colorPrimary: "#f7f7f7",
              colorText: "#f7f7f7",
              colorTextDescription: "gray",
              fontFamily: "Arial",
              colorSplit: "#f7f7f7",
              fontSize: 12,
              colorTextLightSolid: "#000",
              colorTextLabel: "#f7f7f7",
            },
          },
        }}
      >
        <NavigationBar />
        <ResumeRedirection />
        <SocialMediaRedirection />
        <div className="cursor"></div>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<DescriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ConfigProvider>
    </Router>
  );
};

export default App;
