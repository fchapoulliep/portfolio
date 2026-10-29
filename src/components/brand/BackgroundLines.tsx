import React from "react";
import { cn } from "../../lib/cn";

const LINES = [
  { left: "25%", delay: "2s" },
  { left: "50%", delay: "0s" },
  { left: "75%", delay: "2.5s" },
];

/**
 * The three vertical lines, with the drop of light running down them.
 * Pure decor: the parent is relative and isolate, so that -z-10 keeps the
 * lines behind the content without going under the page background.
 */
const BackgroundLines: React.FC<{ className?: string }> = ({ className }) => (
  <div
    aria-hidden
    className={cn("pointer-events-none absolute inset-0 -z-10", className)}
  >
    {LINES.map(({ left, delay }) => (
      <span
        key={left}
        className="absolute inset-y-0 w-px overflow-hidden bg-line"
        style={{ left }}
      >
        <span
          className="absolute -top-[30%] left-0 h-[28%] w-px animate-drop bg-linear-to-b from-transparent to-(--drop) motion-reduce:hidden"
          style={{ animationDelay: delay }}
        />
      </span>
    ))}
  </div>
);

export default BackgroundLines;
