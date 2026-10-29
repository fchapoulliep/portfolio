import React from "react";
import Logo from "./Logo";
import { cn } from "../../lib/cn";

/**
 * The monogram as a watermark, very large and almost invisible behind the
 * content of a section. One per screen, placed and sized with className
 * (a height, never a default one that two classes would fight over).
 */
const Watermark: React.FC<{ className: string }> = ({ className }) => (
  <Logo
    aria-hidden
    role="presentation"
    aria-label={undefined}
    className={cn(
      // Phones keep the text clear: no watermark below 768 px
      "pointer-events-none absolute -z-10 hidden w-auto opacity-(--watermark-opacity) md:block",
      className
    )}
  />
);

export default Watermark;
