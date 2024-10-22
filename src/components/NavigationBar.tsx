/**
 * NavigationBar component
 * @returns NavigationBar component
 * @see {@link https://ant.design/components/dropdown/}
 * @see {@link https://reactrouter.com/}
 * @description NavigationBar.tsx is a React component for the navigation bar of the portfolio website.
 */

/**
 * Importing necessary modules to make the component work
 */
import React, { useEffect } from "react";
import "../css/NavigationBar.css";

import { Link, useLocation } from "react-router-dom";
import { Dropdown, Button } from "antd";
import signature from "../images/signature.png";

import handleScrollTop from "../services/scrollToTopService";

/**
 * NavigationBar component
 * @returns NavigationBar component
 */
const NavigationBar: React.FC = () => {
  const location = useLocation();

  /**
   * Handle the redirection to the home page when the logo is clicked
   */
  const handleLogoRedirection = () => {
    window.location.href = "/portfolio";
  };

  /**
   * Reset the background of the navigation bar
   */
  const resetNavBarBackground = () => {
    const navBar = document.querySelector(".nav-bar") as HTMLElement;
    navBar.classList.remove("background");
  };

  /**
   * Add background to the navigation bar when scrolling more than 100px
   */
  const handleScroll = () => {
    const navBar = document.querySelector(".nav-bar") as HTMLElement;
    if (window.scrollY > 50) {
      navBar.classList.add("background");
    } else {
      navBar.classList.remove("background");
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/about" ||
      location.pathname === "/about/" ||
      location.pathname === "/contact" ||
      location.pathname === "/contact/"
    ) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const items = [
    {
      key: "1",
      label: (
        <a
          href="experiences/retourOdomo.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour d'expérience Odomo
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          href="experiences/retourBiosphere.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour d'expérience Biosphere
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          href="experiences/retourMachine.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour d'expérience Machine
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          href="experiences/retourSQL.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour d'expérience SQL
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          href="experiences/retourWeb.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour d'expérience Web
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a
          href="experiences/retourSWOT.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour d'expérience SWOT
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a
          href="experiences/retourSymfony.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour d'expérience Symfony
        </a>
      ),
    },
    {
      key: "8",
      label: (
        <a
          href="experiences/retourKifli.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour d'expérience Chiffrement de Kifli
        </a>
      ),
    },
    {
      key: "9",
      label: (
        <a
          href="experiences/retourTableauAssociatif.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour d'expérience Tableau Associatif
        </a>
      ),
    },
  ];

  return (
    <div className="nav-bar">
      <div className="nav-bar-experiences">
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          arrow
          autoAdjustOverflow
          overlayClassName="dropdown-experiences"
        >
          <Button>Mes retours d'expériences</Button>
        </Dropdown>
      </div>
      <div className="nav-bar-logo">
        <img src={signature} alt="Logo" onClick={handleLogoRedirection} />
      </div>
      <div className="nav-bar-redirection">
        <Link
          className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          to="/"
          onClick={
            location.pathname === "/" ? handleScrollTop : resetNavBarBackground
          }
        >
          Accueil
        </Link>
        <Link
          className={`nav-item ${
            location.pathname === "/about" || location.pathname === "/about/"
              ? "active"
              : ""
          }`}
          to="/about"
          onClick={
            location.pathname === "/about" || location.pathname === "/about/"
              ? handleScrollTop
              : resetNavBarBackground
          }
        >
          À propos
        </Link>
        <Link
          className={`nav-item ${
            location.pathname === "/contact" ||
            location.pathname === "/contact/"
              ? "active"
              : ""
          }`}
          to="/contact"
          onClick={
            location.pathname === "/contact" ||
            location.pathname === "/contact/"
              ? handleScrollTop
              : resetNavBarBackground
          }
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
