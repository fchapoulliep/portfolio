/**
 * ExperiencesDiv.tsx
 * @file ExperiencesDiv.tsx
 * @description ExperiencesDiv.tsx is a React component for the experiences of the portfolio website.
 * It is a functional component that returns a div with the experience.
 */

/**
 * Importing necessary modules to make the component work
 */
import React, { forwardRef } from "react";
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
  className?: string;
}

/**
 * ExperiencesDiv functional component
 * @param {ExperiencesDivProps} props
 * @param {React.Ref<HTMLDivElement>} ref
 * @returns {JSX.Element}
 */
const ExperiencesDiv = forwardRef<HTMLDivElement, ExperiencesDivProps>(
  (props, ref) => {
    const { text, image, position, onSideText, className } = props;

    return (
      <div id="portfolio-experience" className={className} ref={ref}>
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
  }
);

export default ExperiencesDiv;
