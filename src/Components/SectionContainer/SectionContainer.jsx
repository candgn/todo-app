import React from "react";
import "./SectionContainer.scss";

const SectionContainer = ({ title, children }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  );
};

export default SectionContainer;
