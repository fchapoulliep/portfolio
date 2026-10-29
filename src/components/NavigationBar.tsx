/**
 * NavigationBar component
 * @description Fixed top bar of the site: the monogram, the pages, the menu
 * of experience reports, the CV and the theme toggle. Below 768 px, a burger
 * opens the same links in a panel that covers the whole screen under the bar.
 */

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, FileText, Menu, X } from "lucide-react";

import Logo from "./brand/Logo";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";
import { buttonClasses } from "./ui/button";
import { cn } from "../lib/cn";
import { experiences } from "../data/experiences";
import { RESUME_URL } from "../config";
import handleScrollTop from "../services/scrollToTopService";

const pages = [
  { path: "/", label: "Accueil" },
  { path: "/about", label: "À propos" },
  { path: "/contact", label: "Contact" },
];

/**
 * Links of the desktop bar: muted, in the text color when hovered, current or open
 */
const navItemClasses =
  "inline-flex h-10 items-center gap-1 rounded-full px-3.5 text-sm font-semibold text-muted-foreground transition-colors duration-150 ease-soft hover:bg-accent hover:text-foreground aria-[current=page]:text-foreground aria-expanded:bg-accent aria-expanded:text-foreground";

/**
 * Drop-down list of the experience reports, in the desktop bar. A disclosure
 * of plain links rather than an ARIA menu: Tab goes through them in order.
 */
const ReportsMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    const handlePointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      // Tabbing out of the list closes it
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="reports-menu"
        onClick={() => setOpen((value) => !value)}
        className={navItemClasses}
      >
        Retours d'expérience
        <ChevronDown
          strokeWidth={1.75}
          className={cn(
            "size-4 transition-transform duration-200 ease-soft",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div
          id="reports-menu"
          className="absolute top-full left-1/2 mt-2 w-64 -translate-x-1/2 animate-enter rounded-lg border border-border bg-popover p-1.5 text-popover-foreground shadow-float"
        >
          <ul>
            {experiences.map(({ slug, title, report }) => (
              <li key={slug}>
                <a
                  href={report}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-150 ease-soft hover:bg-accent"
                >
                  {title}
                  <ArrowUpRight
                    strokeWidth={1.75}
                    className="size-4 text-muted-foreground"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

/**
 * NavigationBar component
 * @returns NavigationBar component
 */
const NavigationBar: React.FC = () => {
  const location = useLocation();

  /**
   * Whether the page is scrolled enough to give the bar a background
   */
  const [scrolled, setScrolled] = useState(false);

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
    firstMobileLinkRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    // The burger disappears from 768 px, so its menu closes with it
    const desktop = window.matchMedia("(min-width: 768px)");
    const handleChange = () => {
      if (desktop.matches) {
        setMobileMenuOpen(false);
      }
    };
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  /**
   * A link to the current page brings it back to the top
   */
  const scrollTopIfActive = (path: string) =>
    isActive(path) ? handleScrollTop : undefined;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-200 ease-soft",
          scrolled || mobileMenuOpen
            ? "border-border bg-background/90 backdrop-blur-md"
            : "border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <Link
            to="/"
            aria-label="Retour à l'accueil"
            onClick={scrollTopIfActive("/")}
            className="-m-2 rounded-full p-2 text-foreground transition-opacity duration-200 ease-soft hover:opacity-70"
          >
            <Logo aria-hidden className="h-8" />
          </Link>

          <nav
            aria-label="Menu principal"
            className="hidden items-center gap-1 md:flex"
          >
            {pages.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                aria-current={isActive(path) ? "page" : undefined}
                onClick={scrollTopIfActive(path)}
                className={navItemClasses}
              >
                {label}
              </Link>
            ))}
            <ReportsMenu />
          </nav>

          <div className="flex items-center gap-2">
            {/* Hidden by its wrapper: on the link, "hidden" would fight the button's inline-flex */}
            <div className="hidden md:block">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ variant: "outline", size: "sm" })}
              >
                <FileText strokeWidth={1.75} />
                Mon CV
              </a>
            </div>
            <ThemeToggle />
            <button
              type="button"
              ref={burgerRef}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className={buttonClasses({
                variant: "ghost",
                size: "icon",
                className: "-mr-2.5 md:hidden",
              })}
            >
              {mobileMenuOpen ? (
                <X strokeWidth={1.75} className="size-6" />
              ) : (
                <Menu strokeWidth={1.75} className="size-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menu principal"
          // Locks the page scroll while the menu is open (see index.css)
          data-scroll-lock
          className="fixed inset-x-0 top-16 bottom-0 z-30 animate-enter overflow-y-auto overscroll-contain bg-background md:hidden"
        >
          <div className="flex min-h-full flex-col px-6 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <ul>
              {pages.map(({ path, label }, index) => (
                <li key={path}>
                  <Link
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    to={path}
                    aria-current={isActive(path) ? "page" : undefined}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollTopIfActive(path)?.();
                    }}
                    className="-mx-3 flex h-14 items-center rounded-lg px-3 font-display text-2xl font-bold text-muted-foreground transition-colors duration-150 ease-soft hover:bg-accent hover:text-foreground aria-[current=page]:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2
              id="mobile-menu-reports"
              className="mt-8 font-sans text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
            >
              Retours d'expérience
            </h2>
            <ul
              aria-labelledby="mobile-menu-reports"
              className="mt-2 grid gap-x-6 min-[480px]:grid-cols-2"
            >
              {experiences.map(({ slug, title, report }) => (
                <li key={slug}>
                  <a
                    href={report}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 flex min-h-11 items-center justify-between gap-3 rounded-md px-3 text-base transition-colors duration-150 ease-soft hover:bg-accent"
                  >
                    {title}
                    <ArrowUpRight
                      strokeWidth={1.75}
                      className="size-4 shrink-0 text-muted-foreground"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-6">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ variant: "outline" })}
              >
                <FileText strokeWidth={1.75} />
                Mon CV
              </a>
              <SocialLinks className="-mr-2.5" />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavigationBar;
