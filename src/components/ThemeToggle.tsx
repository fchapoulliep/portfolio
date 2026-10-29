import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { buttonClasses } from "./ui/button";

/**
 * Switches between the light and dark themes; the icon shows the theme it leads to
 */
const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const label =
    theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={buttonClasses({ variant: "ghost", size: "icon", className })}
    >
      {theme === "dark" ? (
        <Sun strokeWidth={1.75} className="size-5" />
      ) : (
        <Moon strokeWidth={1.75} className="size-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
