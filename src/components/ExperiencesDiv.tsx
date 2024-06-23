/**
 * ExperiencesDiv.tsx
 * @file ExperiencesDiv.tsx
 * @description ExperiencesDiv.tsx is a React component for the experiences of the portfolio website.
 * It is a functional component that returns a div with the experience.
 */

/**
 * Importing necessary modules to make the component work
 */
import React from "react";
import "../css/ExperiencesDiv.css";
import { ReactNode } from "react";
import { Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";

/**
 * ExperiencesDivProps interface
 */
interface ExperiencesDivProps {
  text: ReactNode;
  image: string;
  position: "left" | "right";
  onSideText: string;
}

/**
 * ExperiencesDiv component
 * @param {ExperiencesDivProps} props
 * @returns ExperiencesDiv component
 */
const ExperiencesDiv: React.FC<ExperiencesDivProps> = ({
  text,
  image,
  position,
  onSideText,
}) => {
  return (
    <div className="portfolio-experience">
      {position === "left" && (
        <Image
          className="portfolio-experience-image"
          src={image}
          alt="Experience"
          preview={{
            mask: (
              <span>
                Voir plus
                <SearchOutlined style={{ marginLeft: "5px" }} />
              </span>
            ),
          }}
        />
      )}
      {position === "right" && <p className="onSide">{onSideText}</p>}
      <div className="text">{text}</div>
      {position === "left" && <p className="onSide">{onSideText}</p>}
      {position === "right" && (
        <Image
          className="portfolio-experience-image"
          src={image}
          alt="Experience"
          preview={{
            mask: (
              <span>
                Voir plus
                <SearchOutlined style={{ marginLeft: "5px" }} />
              </span>
            ),
          }}
        />
      )}
    </div>
  );
};

export default ExperiencesDiv;
