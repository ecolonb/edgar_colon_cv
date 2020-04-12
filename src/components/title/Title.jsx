import React from "react";
import { DivTitle, H3 } from "./styles";

export default ({ children }) => {
  return (
    <DivTitle>
      <H3>{children}</H3>
    </DivTitle>
  );
};
