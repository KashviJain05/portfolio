import React from "react";
import styled from "styled-components";
import Card from "./ProjectCard1";
import ProjectDrawer from "./ProjectDrawer";
import Madhumalti1 from "../assets/images/ProjectImg/Madhumalti1.png";
import LayerShot from '../assets/images/ProjectImg/LayerShot.png'
import InDino from '../assets/images/ProjectImg/InDino.jpg'
import BurgerClub from '../assets/images/ProjectImg/BurgerClub.png'
import CaterPillarBlues from '../assets/images/ProjectImg/CaterPillarBlues.png'

const details=[
  {
    name:'Madumalti',
    imgAdd:Madhumalti1,
    content:'‘Madhumalti’ is a short film that explores the theme of love. The film talks about Anandita who finds colors in her pale life after meeting Tara. Here’s the link to the film.',
    youtube:'',
    drive:'https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view'
  },
  {
    name:'LayerShot Ad',
    imgAdd:LayerShot,
    content:'It is an Advertisement for the Layer Shot deodorant, which is packed in a bullet-shaped bottle to attract customers.',
    youtube:'',
    drive:''
  },
  {
    name:'In Dino MV',
    imgAdd:InDino,
    content:'‘In Dino’ is a Music Cover Video, using the song ‘In Dino’ from the film ‘Life in a Metro’. It is my first music video. Inspired by the song itself, it shows the life of people in metropolitan cities and how they cross paths with each other.',
    youtube:'',
    drive:''
  },
  {
    name:'BurgerClub AD',
    imgAdd:BurgerClub,
    content:'It is an Advertisement for the Burger Club Café, which serves delicious burgers made of fresh buns prepared in-house. ',
    youtube:'',
    drive:''
  },
  {
    name:'CaterPillar Blues',
    imgAdd:CaterPillarBlues,
    content:'‘Caterpillar Blues’ is a short film, on which I worked as a sound designer. The film portrays a man struggling to adjust to a chair. The film is simple, yet it touches different subtexts within it. ',
    youtube:'',
    drive:''
  },
]

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  padding: 0px 80px 0px 80px;
  color: #fff;
  font-family: "Alata";
  margin-bottom: 20px;
  //media query to adjust padding
  @media (max-width: 60em) {
    padding: 0px 20px 0px 20px;
  }

  h2 {
    width: 100%;
    font-size: ${(props) => props.theme.fontxxxl};
    background-clip: text;
    color: transparent;
    background-image: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    border-bottom: 2px solid #fff;
    // border-top: 2px solid #fff;
    padding-bottom: 4px;
    margin-bottom: 40px;

    @media (max-width: 60em) {
      font-size: ${(props) => props.theme.fontxxl};
    }

    @media (max-width: 40em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const CardContain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export default function ProjectDisp() {
  return (
    <>
      <Container>
        <h2>~Projects</h2>
        <ProjectDrawer/>
        {/* <CardContain>
         {details.map((detail,index)=>{
          return(
            <Card detail={detail} key={index}/>
         )
         })}
        </CardContain> */}
      </Container>
    </>
  );
}
