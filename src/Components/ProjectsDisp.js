import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectDrawer from "./ProjectDrawer";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  padding: 0px 80px 0px 80px;
  color: #fff;
  font-family: "Alata";
  margin-bottom: 20px;
  //media query to adjust padding
  @media (max-width: 60em) {
    padding: 0px 20px 0px 20px;
  }

  h2 {
    width: 100%;
    font-size: ${(props) => props.theme.fontxxxl};
    background-clip: text;
    color: transparent;
    background-image: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
    border-bottom: 2px solid #fff;
    // border-top: 2px solid #fff;
    padding-bottom: 4px;
    margin-bottom: 40px;

    @media (max-width: 60em) {
      font-size: ${(props) => props.theme.fontxxl};
    }

    @media (max-width: 40em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;


export default function ProjectDisp() {
  return (
    <>
      <Container id="MyProjects">
        <h2>~Projects</h2>
        <ProjectDrawer/>
      </Container>
    </>
  );
}
