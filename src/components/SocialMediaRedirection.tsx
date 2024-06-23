/**
 * SocialMediaRedirection component
 * @file SocialMediaRedirection.tsx
 * @module SocialMediaRedirection
 * @description This component returns the social media redirections of the portfolio website.
 */

/**
 * Importing necessary modules to make the component work
 */
import React from "react";
import "../css/SocialMediaRedirection.css";

/**
 *  Link to the social media images
 */
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";

/**
 * Redirects to the social media pages
 * @returns SocialMediaRedirection component
 */
const SocialMediaRedirection: React.FC = () => {
  return (
    <div className="social-media-redirection">
      <a
        href="https://www.linkedin.com/in/florianpino/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/fchapoulliep"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github" />
      </a>
      <a href="mailto:florian.chapoullie-pino@etu.u-bordeaux.fr">
        <img src={email} alt="email" />
      </a>
    </div>
  );
};

export default SocialMediaRedirection;
