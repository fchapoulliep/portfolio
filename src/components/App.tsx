/**
 * @file App.tsx is the main component of the application. It lays out the
 * navigation bar, the current page and the footer, and holds the routing.
 * @module App
 * @see {@link https://reactrouter.com/}
 */

import React, { useLayoutEffect } from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Cursor from "./Cursor";
import NavigationBar from "./NavigationBar";
import SiteFooter from "./SiteFooter";
import PortfolioPage from "./PortfolioPage";
import DescriptionPage from "./DescriptionPage";
import ContactPage from "./ContactPage";

/**
 * A new page opens at its top, at once
 */
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * The main component of the portfolio application.
 */
const App: React.FC = () => (
  <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <ScrollToTopOnNavigate />
    <Cursor />
    <div className="flex min-h-svh flex-col">
      <NavigationBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<DescriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  </Router>
);

export default App;
