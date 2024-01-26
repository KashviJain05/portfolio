import React from "react";
import styled from "styled-components";
import EduIllus from "../assets/images/study illus.png";
import { Slide } from "react-awesome-reveal";

const Container = styled.div`
  padding: 40px 80px 40px 80px;
  color: #fff;
  font-family: "Alata";
  margin-bottom: 20px;
  //media query to adjust padding
  @media (max-width: 60em) {
    padding: 10px 20px 10px 20px;
  }
`;

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  // styles for heading along with media queries

  h2 {
    width: 100%;
    font-size: ${(props) => props.theme.fontxxxl};
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      45deg,
      rgba(219, 217, 255, 1) 0%,
      rgba(193, 72, 209, 1) 43%,
      rgba(168, 62, 206, 1) 90%
    );
    border-bottom: 2px solid #fff;
    // border-top: 2px solid #fff;
    padding-bottom: 4px;

    @media (max-width: 60em) {
      font-size: ${(props) => props.theme.fontxxl};
    }

    @media (max-width: 40em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const ConentArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 70px;

  @media (max-width: 60em) {
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
  }
`;

const Work = styled.div`
  max-height: 60%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WorkItem = styled.div`
  margin-bottom: 30px;
  color: #fff;
  position: relative;

  span {
    font-size: ${(props) => props.theme.fontlg};
  }

  h2 {
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: ${(props) => props.theme.fontxl};
    color: #00ffdc;
    trasition: 1s ease-in-out;
  }
`;

const WorkImg = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 400px;
    width: 400px;
  }
`;

export default function EduDisp() {
  return (
    <Container>
      <ContainerWrap>
        <h2>~Education</h2>
      </ContainerWrap>
      <ConentArea>
        <Work>
          <Slide direction="left" triggerOnce>
            <WorkItem className="fade-in">
              <span>Year</span>
              <h2 className="Title">Title</h2>
              <span>Company</span>
            </WorkItem>
          </Slide>
          <Slide direction="left" triggerOnce>
            <WorkItem className="fade-in">
              <span>Year</span>
              <h2 className="Title">Title</h2>
              <span>Company</span>
            </WorkItem>
          </Slide>
          <Slide direction="left" triggerOnce>
            <WorkItem className="fade-in">
              <span>Year</span>
              <h2 className="Title">Title</h2>
              <span>Company</span>
            </WorkItem>
          </Slide>
          <Slide direction="left" triggerOnce>
            <WorkItem className="fade-in">
              <span>Year</span>
              <h2 className="Title">Title</h2>
              <span>Company</span>
            </WorkItem>
          </Slide>
        </Work>
        <WorkImg>
          <img src={EduIllus} />
        </WorkImg>
      </ConentArea>
    </Container>
  );
}
