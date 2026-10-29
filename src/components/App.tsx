/**
 * @file App.tsx is the main component of the application. It is responsible for rendering the NavigationBar, PortfolioPage, DescriptionPage, and ContactPage components. It also contains the routing logic for the application.
 * @module App
 * @see {@link https://reactrouter.com/}
 */

/**
 * Importing necessary modules to make the component work
 */
import React, { useEffect, useRef } from "react";
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
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }
    let expandTimer: number | undefined;

    /**
     * The cursor is fixed to the viewport, so it stays on the pointer while scrolling
     */
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      cursor.classList.add("visible");
    };
    const handleMouseLeave = () => {
      cursor.classList.remove("visible");
    };
    const handleClick = () => {
      cursor.classList.add("expand");
      window.clearTimeout(expandTimer);
      expandTimer = window.setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("click", handleClick);

    return () => {
      window.clearTimeout(expandTimer);
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: '"Comfortaa", Arial, Helvetica, sans-serif',
          },
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
        <div className="cursor" ref={cursorRef}></div>
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
