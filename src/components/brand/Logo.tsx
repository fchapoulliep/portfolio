import React, { SVGProps } from "react";
import { cn } from "../../lib/cn";

/**
 * FC monogram: the C open to the right, the F inside it, its top bar
 * escaping through the opening (florian-design, assets/brand/monogram.svg)
 */
const MONOGRAM =
  "M 102.30 31.86 A 50 50 0 1 0 102.30 96.14 M 50 50 V 92 M 50 50 H 112 M 50 70 H 84";

/**
 * The logo, drawn with a stroke in the text color: ink in light, white in dark.
 * Its height comes from className alone, so no default size competes with it.
 */
const Logo: React.FC<SVGProps<SVGSVGElement> & { className: string }> = ({
  className,
  ...props
}) => (
  <svg
    viewBox="10 10 106 108"
    fill="none"
    stroke="currentColor"
    strokeWidth={7}
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Florian Chapoullié-Pino"
    className={cn("w-auto", className)}
    {...props}
  >
    <path d={MONOGRAM} />
  </svg>
);

export default Logo;
