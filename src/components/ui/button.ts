import { cn } from "../../lib/cn";

/**
 * Classes of the design system button (florian-design, ui/button.tsx), for a
 * <button>, an <a> or a router <Link> alike: always a pill, the main action
 * is the ink itself
 */
const base = [
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-sans text-sm font-semibold whitespace-nowrap",
  "transition-[background-color,border-color,color,transform] duration-200 ease-soft",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(" ");

const variants = {
  default:
    "bg-primary text-primary-foreground hover:-translate-y-px hover:bg-primary/90",
  outline:
    "border border-border-strong bg-transparent text-foreground hover:bg-accent",
  ghost: "text-foreground hover:bg-accent",
};

/**
 * 44 px touch targets on phones, 40 px from tablets on (sm stays for the
 * desktop bar only)
 */
const sizes = {
  default: "h-11 px-5 md:h-10",
  sm: "h-9 px-4",
  icon: "size-11 md:size-10",
};

interface ButtonOptions {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}

export const buttonClasses = ({
  variant = "default",
  size = "default",
  className,
}: ButtonOptions = {}) => cn(base, variants[variant], sizes[size], className);
