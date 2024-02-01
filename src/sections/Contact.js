import React from "react";
import styled from "styled-components";
import ContactDisp from "../Components/ContactDisp";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: rgb(8, 7, 11);
`;

export default function Contact() {
  return (
    <Section>
      <ContactDisp />
    </Section>
  );
}
