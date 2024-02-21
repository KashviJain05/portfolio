import React from "react";
import styled from "styled-components";
import WorkIllus from "../assets/images/editing illus.png";
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
    background-image: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
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

  @media (max-width: 90em) {
    max-width: 75%;
  }

  @media (max-width: 90em) {
    max-width: 90%;
  }

  li {
    font-size: ${(props) => props.theme.fontlg};
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const WorkImg = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 450px;
    width: 450px;

    @media (max-width: 60em) {
      height: 350px;
      width: 350px;
    }
  }
`;

export default function WorkExpDisp() {
  return (
    <Container id="Insights">
      <ContainerWrap>
        <h2>~Insights</h2>
      </ContainerWrap>
      <ConentArea>
        <Work data-scroll data-scroll-speed="1" data-scroll-delay="0.13">
          <ul>
            <Slide triggerOnce>
              <li>
                My video editing process begins by importing raw footage into
                editing software.
              </li>
            </Slide>
            <Slide triggerOnce>
              <li>
                I meticulously review the footage, selecting the best shots to
                tell a compelling story.
              </li>
            </Slide>
            <Slide triggerOnce>
              <li>
                Through careful arrangement and pacing, I establish the
                narrative flow, ensuring seamless transitions between scenes.
              </li>
            </Slide>
            <Slide triggerOnce>
              <li>
                Next, I fine-tune visuals, adjusting colors, brightness, and
                contrast for optimal impact.
              </li>
            </Slide>
            <Slide triggerOnce>
              <li>
                Simultaneously, I focus on sound design, layering audio elements
                to enhance the viewer's immersion.
              </li>
            </Slide>
            <Slide triggerOnce>
              <li>
                Throughout the editing process, I collaborate closely with
                clients, incorporating feedback to align with their vision.
              </li>
            </Slide>
            <Slide triggerOnce>
              <li>
                As the video takes shape, I apply finishing touches, refining
                details and polishing the final product.
              </li>
            </Slide>
            <Slide triggerOnce>
              <li>
                The result is a professionally edited video that resonates with
                audiences, delivering a powerful message or narrative.
              </li>
            </Slide>
            <Slide triggerOnce>
              <li>
                My meticulous attention to detail and creative expertise ensure
                each project achieves its full potential, leaving a lasting
                impression on viewers.
              </li>
            </Slide>
          </ul>
        </Work>
        <WorkImg data-scroll data-scroll-speed="1" data-scroll-delay="0.13">
          <img src={WorkIllus} />
        </WorkImg>
      </ConentArea>
    </Container>
  );
}
