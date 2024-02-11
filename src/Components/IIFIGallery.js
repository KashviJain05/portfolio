import React, { useEffect } from "react";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import IIFI1 from "../assets/images/IIFI/IFFI1.jpg";
import IIFI2 from "../assets/images/IIFI/IIFI2.jpg";
import IIFI3 from "../assets/images/IIFI/IIFI3.jpg";
import IIFI4 from "../assets/images/IIFI/IIFI4.jpg";
import IIFI5 from "../assets/images/IIFI/IIFI5.jpg";
import IIFI6 from "../assets/images/IIFI/IIFI6.jpg";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// Install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);

const images = [IIFI1, IIFI2, IIFI3, IIFI4, IIFI5, IIFI6];
const Container = styled.div`
  width: 70%;

  @media (max-width: 80em) {
    width: 85%;
  }

  @media (max-width: 60em) {
    width: 100%;
  }
`;

export default function IFFIGallery() {
  useEffect(() => {
    // Initialize Swiper once the component mounts
    const swiper = new SwiperCore(".swiper_container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });

    return () => {
      // Cleanup Swiper when the component unmounts
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <Container data-scroll data-scroll-speed="2">
      <Swiper
        className="swiper_container"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`slide_${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
