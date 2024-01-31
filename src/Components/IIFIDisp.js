import React from "react";
import styled from "styled-components";
import IFFIGallery from "./IIFIGallery";

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
    background-image: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
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
`

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 70px;
  border-radius: 15px;

  p {
    max-width:82%;
    padding: 20px;
    text-align: left;
    letter-spacing: 1.5px;
    line-height: 25px;
    font-size: ${(props) => props.theme.fontlg};
    box-shadow: 0px 10px 15px -3px rgb(34, 34, 79);
    border-radius: 15px;

    @media (max-width: 60em) {
      letter-spacing: 1.2px;
      max-width:100%;
    }
  }
`;

export default function IIFIDisp() {
  return (
    <Container>
      <ContainerWrap>
        <h2>~IIFI 2021</h2>
      </ContainerWrap>
      <ContentArea>
        <IFFIGallery data-scroll data-scroll-speed="2" />
        <p data-scroll data-scroll-speed="2" >
          In 2021, I was selected as one of the ’75 Creative Minds of India’ by
          the Ministry of Information and Broadcasting and the Directorate of
          Film Festivals.
          <br/>     
           All the winners got to attend the 52nd ‘International
          Film Festival of India’ in Goa. There, we were felicitated by the
          likes of Prasoon Joshi and Union Minister Anurag Thakur and got the
          chance to attend the masterclasses by Manoj Vajpayee, Samantha Ruth
          Prabhu, and Prasoon Joshi.
          <br/>
           We gave many interviews which were
          broadcasted on news channels and got printed in the peacock edition of
          IFFI too.
          <br/>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

        </p>
      </ContentArea>
    </Container>
  );
}
