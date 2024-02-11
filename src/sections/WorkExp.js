import React from "react";
import WorkExpDisp from "../Components/WorkExpDisp";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  // min-height:100vh;
  overflow: hidden;
  background: rgb(8, 7, 11);
`;

export default function WorkExp() {
  return (
    <Section>
      <WorkExpDisp />
    </Section>
  );
}
