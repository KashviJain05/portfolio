import React from "react";
import styled, { keyframes } from "styled-components";

import IIFI1 from "../assets/images/IIFI/IFFI1.jpeg";
import IIFI2 from "../assets/images/IIFI/IFFI2.jpeg";
import IIFI3 from "../assets/images/IIFI/IIFI3.jpg";
import IIFI4 from "../assets/images/IIFI/IFFI4.jpg";
import IIFI5 from "../assets/images/IIFI/IIFI5.jpg";
import IIFI6 from "../assets/images/IIFI/IFFI6.jpg";
import BorderBottomImg from "../assets/images/IIFI/border-left.gif";

const images = [IIFI1, IIFI2, IIFI3, IIFI4, IIFI5, IIFI6];

const ScrollX = keyframes`
from{
    left:translateX(0);
}
to{
    transform:translateX(-100%);
}
`;

const Marquee = styled.div`
  display: flex;
  min-width: 1200px;
  user-select: none;
  overflow: hidden;
`;

const MarqueeGroup = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 13%;
    background: url(${BorderBottomImg}) repeat-x top;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  animation: ${ScrollX} 30s linear infinite;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  aspect-ratio: 16/9;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 500px;
  padding-top: 35px;
  padding-bottom: 35px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 90em) {
    width: 450px;
  }

  @media (max-width: 60em) {
    width: 350px;
  }
`;

export default function IFFIGallery2() {
  return (
    <Marquee>
      <MarqueeGroup>
        {images.map((image, index) => {
          return (
            <ImageGroup key={index}>
              <Image src={image} />
            </ImageGroup>
          );
        })}
      </MarqueeGroup>
      <MarqueeGroup>
        {images.map((image, index) => {
          return (
            <ImageGroup key={index}>
              <Image src={image} />
            </ImageGroup>
          );
        })}
      </MarqueeGroup>
    </Marquee>
  );
}
