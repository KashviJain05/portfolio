import React from "react";
import styled from "styled-components";
import drive from "../assets/images/Project Socials/google-drive.png";
import youtube from "../assets/images/Project Socials/youtube.png";
import { Fade } from "react-awesome-reveal";

const CardContainer = styled.article`
  font-family: "Alata";
  color: white;
  position: relative;
  width: 350px;
  height: 300px;
  background: #131313;
  overflow: hidden;
  border-radius: 20px;
  margin: 30px;
  box-shadow: 0px 10px 15px -3px rgb(34, 34, 79);

  @media (max-width: 60em) {
    width: 300px;
    height: 300px;
  }

  img {
    height: 75%;
    width: 100%;
  }

  &:hover .CardContent {
    transform: translateY(0);
    padding: 5px;
  }

  &:hover .CardTitle {
    font-size: 1.55em;
    // transform: translateX(27%);
    margin-left:5px;
  }

  &:hover .CardSub {
    display: none;
  }

  &:hover .CardDescription {
    opacity: 1;
    transition-delay: 0.25s;
    margin: 10px;
  }
`;

const CardContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  padding: 20px;
  background: rgb(8, 7, 11);
  border-top-left-radius: 20px;
  transform: translateY(150px);
  transition: transform 0.50s;
`;

const CardTitle = styled.p`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontxl};
  transition: 0.5s ease-in-out;
  background-clip: text;
  color: transparent;
  background-image: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

  @media (max-width: 60em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const CardSubtitle = styled.p`
  display: block;
  font-size: ${(props) => props.theme.fontmd};
  margin-top: 5px;
  @media (max-width: 60em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  opacity: 0;
  transition: opacity 0.5s;
`;

const Social = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 25px;
    width: 25px;
    box-shadow: none;
  }
`;

const Card = (props) => {
  return (
    <Fade direction="up" triggerOnce>
      <CardContainer data-scroll data-scroll-delay="0.13" data-scroll-speed="2">
        <img src={props.detail.imgAdd} />
        <CardContent className="CardContent">
          <CardTitle className="CardTitle">{props.detail.name}</CardTitle>
          <CardSubtitle className="CardSub">Click to know more</CardSubtitle>
          <CardDescription className="CardDescription">
           {props.detail.content}
            <br />
            <br />
            Check it out !!
            <br />
            <br />
            <Social>
              <a href="https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view">
                <img alt="drive-pic" src={drive} />
              </a>
              <a href="https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view">
                <img alt="youTube-pic" src={youtube} />
              </a>
            </Social>
          </CardDescription>
        </CardContent>
      </CardContainer>
    </Fade>
  );
};

export default Card;