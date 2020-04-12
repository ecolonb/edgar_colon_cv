import React from "react";
import Aside from "../aside/Aside";

import LayoutContent from "../LayoutContent/LayoutContent";
import Summary from "./summary/Summary";
import { CvContainer } from "./styles";
import Backend from "./professional_skills/backend/Backend";

export default () => {
  return (
    <CvContainer>
      <Aside />
      <LayoutContent>
        <Summary />
        <Backend />
      </LayoutContent>
    </CvContainer>
  );
};
