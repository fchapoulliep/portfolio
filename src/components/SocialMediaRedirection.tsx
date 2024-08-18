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
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

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
        <LinkedinOutlined style={{ color: "black", verticalAlign: "middle" }} />
      </a>
      <a
        href="https://github.com/fchapoulliep"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutlined style={{ color: "black", verticalAlign: "middle" }} />
      </a>
      <a href="mailto:florian.chapoullie-pino@etu.u-bordeaux.fr">
        <MailOutlined style={{ color: "black", verticalAlign: "middle" }} />
      </a>
    </div>
  );
};

export default SocialMediaRedirection;
