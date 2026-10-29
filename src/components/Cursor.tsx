import React, { useEffect, useRef } from "react";

/**
 * The ring and dot that follow the mouse. Only for a precise pointer that can
 * hover, never on touch screens, and gone when the system asks for less motion.
 */
const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }
    let expandTimer: number | undefined;

    // The cursor is fixed to the viewport, so it stays on the pointer while scrolling
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      cursor.dataset.visible = "";
    };
    const handleMouseLeave = () => {
      delete cursor.dataset.visible;
    };
    const handleClick = () => {
      cursor.dataset.expand = "";
      window.clearTimeout(expandTimer);
      expandTimer = window.setTimeout(() => {
        delete cursor.dataset.expand;
      }, 400);
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
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-50 hidden size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-muted-foreground opacity-0 transition-[width,height,opacity] duration-300 ease-soft before:absolute before:top-1/2 before:left-1/2 before:size-1 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-foreground data-expand:size-11 data-visible:opacity-100 motion-reduce:hidden! [@media(hover:hover)_and_(pointer:fine)]:block"
    />
  );
};

export default Cursor;
