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
      // Shown on phones too, smaller there (see each page): at 5 % it never hurts the text
      "pointer-events-none absolute -z-10 w-auto opacity-(--watermark-opacity)",
      className
    )}
  />
);

export default Watermark;
