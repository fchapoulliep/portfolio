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
import React, { useEffect, useRef, useState } from "react";
import "../css/NavigationBar.css";

import { Link, useLocation } from "react-router-dom";
import { Dropdown, Button } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import monogram from "../images/monogram.svg";

import handleScrollTop from "../services/scrollToTopService";

/**
 * Experience reports listed in the dropdown, in display order
 */
const experienceReports = [
  { file: "retourOdomo.pdf", label: "Odomo" },
  { file: "retourBiosphere.pdf", label: "Biosphere 7" },
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

  /**
   * Whether the mobile menu (burger) is open
   */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }
    // The page does not scroll behind the open menu
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    // The burger disappears above 768 px, so its menu closes with it
    const desktop = window.matchMedia("(min-width: 769px)");
    const handleChange = () => {
      if (desktop.matches) {
        setMobileMenuOpen(false);
      }
    };
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, []);

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

  const pages: [string, string][] = [
    ["/", "Accueil"],
    ["/about", "À propos"],
    ["/contact", "Contact"],
  ];

  return (
    <>
    <div
      className={`nav-bar ${
        hasBackground || mobileMenuOpen ? "background" : ""
      }`}
    >
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
            Mes retours d'expérience
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
      <button
        type="button"
        ref={burgerRef}
        className="nav-burger"
        aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>
    </div>
    {mobileMenuOpen && (
      <div
        className="mobile-menu-backdrop"
        onClick={() => setMobileMenuOpen(false)}
      >
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Menu principal"
          onClick={(e) => e.stopPropagation()}
        >
          <ul>
            {pages.map(([path, label], index) => (
              <li key={path}>
                <Link
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  to={path}
                  className={isActive(path) ? "active" : ""}
                  aria-current={isActive(path) ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mobile-menu-heading" id="mobile-menu-reports">
            Mes retours d'expérience
          </h2>
          <ul
            className="mobile-menu-reports"
            aria-labelledby="mobile-menu-reports"
          >
            {experienceReports.map(({ file, label }) => (
              <li key={file}>
                <a
                  href={`experiences/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )}
    </>
  );
};

export default NavigationBar;
