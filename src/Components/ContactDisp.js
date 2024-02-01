import React from "react";
import styled from "styled-components";

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
  flex-wrap: wrap;
  margin-top: 70px;

  @media (max-width: 60em) {
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
  }

  p {
    font-size: ${(props) => props.theme.fontxl};
    text-align: start;
    font-family: "kaushan-script";
    color: wheat;
    padding: 10px;

    @media (max-width: 60em) {
      font-size: 1.5em;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  width: 80%;
  min-height:70vh;
  h3 {
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
`;

const Social= styled.div`
  width:45%;
  height:100%;

  ul{
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    min-height:60vh;

  }
`

export default function ContactDisp() {
  return (
    <Container>
      <ContainerWrap>
        <h2>~Reach Out</h2>
        <ContentArea>
          <p>
            I'm open to collaborations, freelance opportunities, and new
            creative challenges. Don't hesitate to connect and let's explore the
            possibilities together. Your project deserves the touch of a
            passionate video editor, and I'm excited to be a part of it. 👋🏼
          </p>

          <Contact>
          </Contact>
        </ContentArea>
      </ContainerWrap>
    </Container>
  );
}
