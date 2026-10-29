/**
 * Joins the class names that apply, skipping the false and empty ones
 */
export const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");
