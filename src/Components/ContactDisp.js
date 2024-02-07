import React from "react";
import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";

const Container = styled.div`
  padding: 40px 80px 40px 80px;
  color: #fff;
  font-family: "Alata";

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

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 60em) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  h3 {
    margin-top: 25px;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
    background-clip: text;
    color: transparent;
    background-image: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
  }

  p {
    font-size: ${(props) => props.theme.fontxl};
    padding: 20px;
    color: wheat;

    @media (max-width: 60em) {
      font-size: ${(props) => props.theme.fontlg};
    }
  }
`;

const Social = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 40px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 20px 3px rgb(34, 34, 79);
  border-radius: 15px;
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  transition: background 0.5s ease-in-out;
`;


const Linkedin = styled.div`
  ${Icon} {
    background: #0077b5;
  }
`;

const Instagram = styled.div`
  ${Icon} {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }
`;

const Phone = styled.div`
  ${Icon} {
    background: #33ca36;
  }
`;

const Mail = styled.div`
  ${Icon} {
    background: #ff4242;
  }
`;

const Github = styled.div``;
export default function ContactDisp() {
  return (
    <Container>
      <ContainerWrap>
        <h2>~Reach Out</h2>
        <ContentArea>
          <p data-scroll data-scroll-speed="1">
            <Fade direction="left" triggerOnce>
              I'm open to collaborations, freelance and fulltime opportunities,
              and new creative challenges. Don't hesitate to connect and let's
              explore the possibilities together. Your project deserves the
              touch of a passionate video editor, and I'm excited to be a part
              of it. 👋🏼
            </Fade>
          </p>
          <Fade triggerOnce direction="right">
            <h3 data-scroll data-scroll-speed="1">Socials:-</h3>
          </Fade>
          <Social data-scroll data-scroll-speed="1">
            <Zoom cascade triggerOnce>
              <Linkedin className="Social">
                <Icon>
                  <i
                    class="fa-brands fa-linkedin-in"
                    style={{ color: "#ffffff" }}
                  ></i>
                </Icon>
              </Linkedin>

              <Instagram className="Social">
                <Icon>
                  <i
                    class="fa-brands fa-instagram"
                    style={{ color: "#ffffff" }}
                  ></i>
                </Icon>
              </Instagram>

              <Phone className="Social">
                <Icon>
                  <i class="fa-solid fa-phone" style={{ color: "#ffffff" }}></i>
                </Icon>
              </Phone>

              <Mail className="Social">
                <Icon>
                  <i
                    class="fa-regular fa-envelope"
                    style={{ color: "#ffffff" }}
                  ></i>
                </Icon>
              </Mail>

              <Github className="Social">
                <Icon>
                  <i
                    class="fa-brands fa-github"
                    style={{ color: "#ffffff" }}
                  ></i>
                </Icon>
              </Github>
            </Zoom>
          </Social>
        </ContentArea>
      </ContainerWrap>
    </Container>
  );
}
