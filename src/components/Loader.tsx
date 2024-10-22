import React from "react";
import "../css/Loader.css";

interface LoaderProps {
  text: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-text">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
