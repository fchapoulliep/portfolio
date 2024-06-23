/**
 * ResumeRedirection.tsx
 * @file ResumeRedirection.tsx
 * @description ResumeRedirection.tsx is a React component for the resume redirection of the portfolio website.
 * It is a functional component that returns a div with the class name "resume-redirection".
 */

/**
 * Importing necessary modules to make the component work
 */
import React from "react";
import "../css/ResumeRedirection.css";

/**
 * ResumeRedirection component that returns the redirection to the resume
 * @returns ResumeRedirection component
 */
const ResumeRedirection: React.FC = () => {
  return (
    <div className="resume-redirection">
      <a
        href="portfolio/experiences/CVChapoulliePinoFlorian.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Souhaitez-vous voir mon CV ?
      </a>
    </div>
  );
};

export default ResumeRedirection;
