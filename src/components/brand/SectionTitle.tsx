import React, { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionTitleProps {
  children: ReactNode;
  id?: string;
  className?: string;
  as?: "h2" | "h3" | "p";
}

/**
 * Section title centered between two rules, in small spaced capitals
 */
const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  id,
  className,
  as: Tag = "h2",
}) => (
  <Tag
    id={id}
    className={cn(
      "flex items-center gap-4 font-sans text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase",
      "before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border",
      className
    )}
  >
    {children}
  </Tag>
);

export default SectionTitle;
