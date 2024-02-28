// importing the libraries
import React from "react";
import styled from "styled-components";
import imgAdd from "../assets/images/profile-pic (1).png";
import AnimImg from "../assets/images/Animation Image.png";
import gsap from "gsap";
import { useEffect } from "react";

// container div for about display
const Container = styled.div`
  padding: 40px 80px 40px 80px;
  color: #fff;
  font-family: "Work Sans", sans-serif;

  //media query to adjust padding
  @media (max-width: 60em) {
    padding: 10px 20px 10px 20px;
  }
`;

// div for wrapping both heading and about content
const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  // styles for heading along with media queries

  h2 {
    width: 100%;
    font-family: "Alata";
    font-size: ${(props) => props.theme.fontxxxl};
    background-clip: text;
    color: transparent;
    background-image: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
    border-bottom: 2px solid #fff;
    padding-bottom: 4px;

    @media (max-width: 60em) {
      font-size: ${(props) => props.theme.fontxxl};
    }

    @media (max-width: 40em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

// area which contains both profile and stack animation

const ContentArea = styled.div`
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

// profile section containing image and content for about
const Profile = styled.div`
  box-shadow: 0px 10px 15px -3px rgb(34, 34, 79);
  border-radius: 15px;
  width: 45%;
  //min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 70em) {
    width: 90%;
  }

  @media (max-width: 60em) {
    width: 100%;
  }

  img {
    height: 230px;
    width: 230px;
    border-radius: 50%;
    box-shadow: -5px 0px 15px -1px grey;
  }

  p {
    margin-top: 20px;
    padding: 20px;
    text-align: left;
    line-height: 25px;
    font-size: 1.35em;
    font-weight:400;

    span {
      color: wheat;
    }

    .name {
      color: cyan;
      font-weight: bolder;
    }

    @media (max-width: 70em) {
      font-size: ${(props) => props.theme.fontlg};
    }
  }
`;

// div for the rotating stack animation

const StackAnimation = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top:20px;

  img {
    width: 900px;
    height: 500px;
    margin-top: -10px;

    @keyframes mymove {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    animation: mymove 30s linear infinite;

    @media (max-width: 60em) {
     
      width: 700px;
      height: 300px;
    }
  }
`;

//div which contains the animation content ... ie tech stack

const AnimationContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30px;
  overflow: hidden;
  font-size: 20px;
  font-family: "Alata";

  @media (max-width: 60em) {
    width: 90%;
  }

  @media (max-width: 30em) {
    width: 100%;
    font-size: 15px;
  }
`;

// our about display component

const AboutDisp = () => {
  useEffect(() => {
    try {
      gsap.to(".Animetext", {
        y: "-60px",
        repeat: -1,
        duration: 5,
        yoyo: true,
        opacity: 1,
        delay: 1,
      });
    } catch (error) {
      console.error("GSAP animation error:", error);
    }
  }, []);

  return (
    <Container id="About">
      <ContainerWrap>
        <h2>~About</h2>
        <ContentArea>
          <Profile data-scroll data-scroll-delay="0.13" data-scroll-speed="1">
            <img src={imgAdd} alt="profile-pic" />
            <p>
              I am <span className="name">Kashvi Jain</span>, a film editor with
              a passion for storytelling. My specialization lies in{" "}
              <span>editing films</span>, and I am proficient in using{" "}
              <span>Adobe Premiere Pro</span> and <span>DaVinci Resolve</span>.
              I have had the opportunity to work on different projects,
              including{" "}
              <span>
                short films, documentaries, corporate films, music videos, and
                advertisements
              <br />
              <br />
              I look at the art of filmmaking as a medium to connect with
              the audience and transport them to either a parallel world where
              they can drop all their worries and enter a land of virtues and
              fantasies or a mirroring world where they can call a spade a
              spade.{" "}
              <span>
                I thrive in collaborative environments and have successfully
                collaborated with different directors, to bring their visions to
                life.
              </span>{" "}
              I am excited about the journey ahead and look forward to
              contributing my skills to upcoming projects and learning from
              them. My goal is to create immersive and memorable cinematic
              experiences, through seamless and impactful edits.
            </p>
          </Profile>
          <StackAnimation
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="1"
          >
            <AnimationContent>
              <span className="Animetext">Premiere Pro</span>
              <span className="Animetext">DaVinci Resolve</span>
              <span className="Animetext">Final Cut Pro</span>
            </AnimationContent>
            <img src={AnimImg} alt="Animation-pic" className="Animeimage" />
          </StackAnimation>
        </ContentArea>
      </ContainerWrap>
    </Container>
  );
};

export default AboutDisp;
