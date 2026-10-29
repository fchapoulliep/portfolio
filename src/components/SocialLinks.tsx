import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./brand/BrandIcons";
import { buttonClasses } from "./ui/button";
import { cn } from "../lib/cn";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "../config";

const links = [
  { href: LINKEDIN_URL, label: "Profil LinkedIn", Icon: LinkedinIcon, external: true },
  { href: GITHUB_URL, label: "Profil GitHub", Icon: GithubIcon, external: true },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Envoyer un e-mail", Icon: Mail, external: false },
];

/**
 * LinkedIn, GitHub and e-mail, as icon buttons
 */
const SocialLinks: React.FC<{ className?: string }> = ({ className }) => (
  <ul className={cn("flex items-center gap-1", className)}>
    {links.map(({ href, label, Icon, external }) => (
      <li key={label}>
        <a
          href={href}
          aria-label={label}
          title={label}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className={buttonClasses({ variant: "ghost", size: "icon" })}
        >
          <Icon strokeWidth={1.75} className="size-5" aria-hidden />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
