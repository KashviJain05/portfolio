import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import IIFI1 from "../assets/images/IIFI/IFFI1.jpg";
import IIFI2 from "../assets/images/IIFI/IIFI2.jpg";
import IIFI3 from "../assets/images/IIFI/IIFI3.jpg";
import IIFI4 from "../assets/images/IIFI/IIFI4.jpg";
import IIFI5 from "../assets/images/IIFI/IIFI5.jpg";
import IIFI6 from "../assets/images/IIFI/IIFI6.jpg";

// Install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const images = [IIFI1, IIFI2, IIFI3, IIFI4, IIFI5, IIFI6];
const Container = styled.div`
   width:70%;

   @media(max-width:80em){
      width:85%;
   }

   @media(max-width:60em){
      width:100%;
   }
`


export default function IFFIGallery() {
   return (
      <Container data-scroll data-scroll-speed="2">
         <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
               clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
         >
            {images.map((img, index) => {
               return (
                  <SwiperSlide key={index}>
                     <img src={img} alt="slide_image" />
                  </SwiperSlide>
               )

            })}
            <div className="slider-controler">
               <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
               </div>
               <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
               </div>
               <div className="swiper-pagination"></div>
            </div>
         </Swiper>
      </Container>
   )
}