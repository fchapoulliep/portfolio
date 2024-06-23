/**
 * ContactButtons.tsx
 * @file ContactButtons.tsx
 * @description ContactButtons.tsx is a React component for the contact buttons of the portfolio website.
 * It is a functional component that returns a div with the class name "contact-buttons".
 */

/**
 * Importing necessary modules to make the component work
 */
import React from "react";
import "../css/ContactButtons.css";

/**
 * ContactButtons component that returns the contact buttons to redirect to the social media pages
 * @returns ContactButtons component
 */
const ContactButtons: React.FC = () => {
  return (
    <div className="contact-buttons">
      <a
        href="https://www.linkedin.com/in/alexandre-roux-0a4b5b1b0/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="
            mailto:"
        target="_blank"
        rel="noreferrer"
      >
        Email
      </a>
    </div>
  );
};

export default ContactButtons;
