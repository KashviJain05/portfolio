import React from "react";
import styled from "styled-components";
import ProjectsDisp from "../Components/ProjectsDisp";

const Section = styled.section`
  position: relative;
  // min-height:100vh;
  overflow: hidden;
  background: rgb(8, 7, 11);
`;

export default function Projects() {
  return (
    <Section>
      <ProjectsDisp />
    </Section>
  );
}
