import React from "react";
import "./styles.css";

export default ({ children, ...props }) => {
  return <div className="layout-content">{children}</div>;
};
