/**
 * Smooth scrolling, unless the system asks for less motion
 */
const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

/**
 * Function to scroll to the top of the page
 */
const handleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
};

/**
 * Scroll to an element of the page. The router uses the URL hash, so the
 * sections are reached in script rather than with #anchor links; the element's
 * scroll-margin keeps it clear of the fixed navigation bar.
 */
export const scrollToElement = (element: HTMLElement | null) => {
  element?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
};

export default handleScrollTop;
