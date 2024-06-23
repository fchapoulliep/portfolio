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
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Button } from "antd";
import "../css/NavigationBar.css";
import signature from "../images/signature.png";

const NavigationBar: React.FC = () => {
  const location = useLocation();

  const handleLogoRedirection = () => {
    window.location.href = "/portfolio";
  };

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
  ];

  return (
    <div className="nav-bar">
      <div className="nav-bar-experiences">
        <Dropdown menu={{ items }} placement="bottom" arrow autoAdjustOverflow>
          <Button>Mes retours d'expériences</Button>
        </Dropdown>
      </div>
      <div className="nav-bar-logo">
        <img src={signature} alt="Logo" onClick={handleLogoRedirection} />
      </div>
      <div className="nav-bar-redirection">
        <Link
          className={`nav-item ${
            location.pathname === "/portfolio" ||
            location.pathname === "/portfolio/"
              ? "active"
              : ""
          }`}
          to="/portfolio"
        >
          Accueil
        </Link>
        <Link
          className={`nav-item ${
            location.pathname === "/portfolio/description" ||
            location.pathname === "/portfolio/description/"
              ? "active"
              : ""
          }`}
          to="/portfolio/description"
        >
          À propos
        </Link>
        <Link
          className={`nav-item ${
            location.pathname === "/portfolio/contact" ||
            location.pathname === "/portfolio/contact/"
              ? "active"
              : ""
          }`}
          to="/portfolio/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;