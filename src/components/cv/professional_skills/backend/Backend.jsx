import React from "react";
import { FaRocket } from "react-icons/fa";
import { Content } from "../../styles";
import Title from "../../../title/Title";

export default () => {
  return (
    <section>
      <Title>
        <FaRocket />
        Backend
      </Title>
      <Content>Contenido</Content>
    </section>
  );
};
