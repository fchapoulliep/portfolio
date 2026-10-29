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
import React, { useEffect, useState } from "react";
import "../css/NavigationBar.css";

import { Link, useLocation } from "react-router-dom";
import { Dropdown, Button } from "antd";
import monogram from "../images/monogram.svg";

import handleScrollTop from "../services/scrollToTopService";

/**
 * Experience reports listed in the dropdown, in display order
 */
const experienceReports = [
  { file: "retourOdomo.pdf", label: "Odomo" },
  { file: "retourBiosphere.pdf", label: "Biosphere" },
  { file: "retourMachine.pdf", label: "Machine" },
  { file: "retourSQL.pdf", label: "SQL" },
  { file: "retourWeb.pdf", label: "Web" },
  { file: "retourSWOT.pdf", label: "SWOT" },
  { file: "retourSymfony.pdf", label: "Symfony" },
  { file: "retourKifli.pdf", label: "Chiffrement de Kifli" },
  { file: "retourTableauAssociatif.pdf", label: "Tableau Associatif" },
];

const items = experienceReports.map(({ file, label }, index) => ({
  key: String(index + 1),
  label: (
    <a href={`experiences/${file}`} target="_blank" rel="noopener noreferrer">
      Retour d'expérience {label}
    </a>
  ),
}));

/**
 * NavigationBar component
 * @returns NavigationBar component
 */
const NavigationBar: React.FC = () => {
  const location = useLocation();

  /**
   * Whether the page is scrolled enough to give the bar a background
   */
  const [hasBackground, setHasBackground] = useState(false);

  /**
   * Whether the experience reports menu is open
   */
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasBackground(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname === `${path}/`;

  const renderLink = (path: string, label: string) => (
    <Link
      className={`nav-item ${isActive(path) ? "active" : ""}`}
      to={path}
      onClick={isActive(path) ? handleScrollTop : undefined}
    >
      {label}
    </Link>
  );

  return (
    <div className={`nav-bar ${hasBackground ? "background" : ""}`}>
      <div className="nav-bar-experiences">
        <Dropdown
          menu={{
            items,
            onClick: ({ key, domEvent }) => {
              // A mouse click follows the link itself; Enter on a focused item does not
              if (domEvent.type === "keydown") {
                const report = experienceReports[Number(key) - 1];
                window.open(
                  `experiences/${report.file}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            },
          }}
          open={menuOpen}
          onOpenChange={setMenuOpen}
          autoFocus
          placement="bottomRight"
          arrow
          autoAdjustOverflow
          overlayClassName="dropdown-experiences"
        >
          <Button
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setMenuOpen(true);
              }
            }}
          >
            Mes retours d'expériences
          </Button>
        </Dropdown>
      </div>
      <div className="nav-bar-logo">
        <Link
          to="/"
          aria-label="Retour à l'accueil"
          onClick={isActive("/") ? handleScrollTop : undefined}
        >
          <img src={monogram} alt="" />
        </Link>
      </div>
      <div className="nav-bar-redirection">
        {renderLink("/", "Accueil")}
        {renderLink("/about", "À propos")}
        {renderLink("/contact", "Contact")}
      </div>
    </div>
  );
};

export default NavigationBar;
