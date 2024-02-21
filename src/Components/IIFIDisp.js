import React from "react";
import styled from "styled-components";
import IFFIGallery2 from "./IFFIGallery2";
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

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 15px;

  p {
    max-width: 90%;
    padding: 20px;
    text-align: left;
    letter-spacing: 1.5px;
    line-height: 25px;
    font-size: ${(props) => props.theme.fontlg};
    box-shadow: 0px 10px 15px -3px rgb(34, 34, 79);
    border-radius: 15px;

    span {
      color: wheat;
    }

    @media (max-width: 60em) {
      letter-spacing: 1.2px;
      max-width: 100%;
    }
  }
`;

const GalleryWraaper = styled.div`
  margin-top: 50px;
  width: 100%;
  overflow: hidden;
`;

export default function IIFIDisp() {
  return (
    <Container id="IFFI2021">
      <ContainerWrap>
        <h2>~IIFI 2021</h2>
      </ContainerWrap>

      <ContentArea>
        <GalleryWraaper data-scroll data-scroll-speed="1">
          <IFFIGallery2 />
        </GalleryWraaper>

        <p data-scroll data-scroll-speed="1">
          Being chosen as one of the <span>'75 Creative Minds of India'</span>{" "}
          by the{" "}
          <span>
             Ministry of Information and Broadcasting and the Directorate of Film
            Festivals
          </span>{" "}
          was a tremendous honor for me. Attending{" "}
          <span>the 52nd International Film Festival of India</span> in Goa
          alongside other winners was an unforgettable experience.
          <br />
          <br />
          Being felicitated by icons like
          <span> Prasoon Joshi and Union Minister Anurag Thakur</span> was truly
          humbling and inspiring. The masterclasses conducted by Manoj Vajpayee,
          Samantha Ruth Prabhu, and Prasoon Joshi were incredibly insightful and
          provided me with invaluable knowledge and perspective. Participating
          in interviews that were <span>broadcast on news channels</span> and{" "}
          <span>featured in the peacock edition of IFFI</span> allowed me to
          share my journey and passion with a wider audience.
          <br />
          <br />
          It was a surreal experience to see my story alongside other creative
          minds in the industry. Overall, being recognized in this way and
          having the chance to participate in such prestigious events has been a
          highlight of my career,{" "}
          <span>reaffirming my commitment to creativity and film.</span>
        </p>
      </ContentArea>
    </Container>
  );
}
