import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

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
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 70px;

  @media (max-width: 60em) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;

  @media (max-width: 60em) {
    width: 90%;
  }

  @media (max-width: 30em) {
    width: 100%;
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
  height: 100%;
  margin-bottom: 20px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    box-shadow: 0px 0px 20px 3px rgb(34, 34, 79);
    border-radius: 15px;

    @media (max-width: 60em) {
      margin-top: 30px;
    }
  }

  .Social {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 250px;
  }

  li {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const Name = styled.span`
  width: 60%;
  font-size: 1.5em;
  transition: 0.5s ease-in-out;

  &:hover {
    color: cyan;
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 60em) {
    font-size: ${(props) => props.theme.fontlg};
  }
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

const Youtube = styled.div`
  ${Icon} {
    background: red;
  }
`;

const Mail = styled.div`
  ${Icon} {
    background: #ff4242;
  }
`;

const Blogger = styled.div`
  ${Icon} {
    background: orange;
  }
`;
export default function ContactDisp() {
  return (
    <Container id="Contact">
      <ContainerWrap>
        <h2>~Reach Out</h2>
        <ContentArea>
          <Contact data-scroll data-scroll-speed="1">
            <p>
              <Fade direction="left" triggerOnce>
                I'm open to collaborations, freelance, fulltime opportunities
                and new creative challenges. Don't hesitate to connect and let's
                explore the possibilities together. Your project deserves the
                touch of a passionate video editor, and I'm excited to be a part
                of it. 👋🏼
              </Fade>
            </p>
          </Contact>
          <Social data-scroll data-scroll-speed="1">
            <ul>
              <li>
                <Fade direction="right" triggerOnce cascade>
                  <Linkedin className="Social">
                    <Icon>
                      <i
                        class="fa-brands fa-linkedin-in"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </Icon>
                    <Name>
                      <a
                        href="https://www.linkedin.com/in/kashvi-jain-963490208/"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                    </Name>
                  </Linkedin>
                </Fade>
              </li>
              <li>
                <Fade direction="right" triggerOnce>
                  <Instagram className="Social">
                    <Icon>
                      <i
                        class="fa-brands fa-instagram"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </Icon>
                    <Name>
                      <a
                        href="https://www.instagram.com/frames_finesse/"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </Name>
                  </Instagram>
                </Fade>
              </li>
              <li>
                <Fade direction="right" triggerOnce>
                  <Mail className="Social">
                    <Icon>
                      <i
                        class="fa-regular fa-envelope"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </Icon>
                    <Name>
                      <a href="mailto:kashvijain511@gmail.com" target="_blank">
                        E Mail
                      </a>
                    </Name>
                  </Mail>
                </Fade>
              </li>
              <li>
                <Fade direction="right" triggerOnce>
                  <Youtube className="Social">
                    <Icon>
                      <i
                        class="fa-brands fa-youtube"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </Icon>
                    <Name>
                      <a
                        href="https://www.youtube.com/@kashvijain9089"
                        target="_blank"
                      >
                        YouTube
                      </a>
                    </Name>
                  </Youtube>
                </Fade>
              </li>
              <li>
                <Fade direction="right" triggerOnce>
                  <Blogger className="Social">
                    <Icon>
                      <i
                        class="fa-brands fa-blogger-b"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </Icon>
                    <Name>
                      <a
                        href="https://kashvijain511.blogspot.com/"
                        target="_blank"
                      >
                        Blogger
                      </a>
                    </Name>
                  </Blogger>
                </Fade>
              </li>
            </ul>
          </Social>
        </ContentArea>
      </ContainerWrap>
    </Container>
  );
}
