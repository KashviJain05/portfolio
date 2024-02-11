import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./ProjectCard1";
import ProjectDrawer from "./ProjectDrawer";
import Madhumalti1 from "../assets/images/ProjectImg/Madhumalti1.png";
import LayerShot from '../assets/images/ProjectImg/LayerShot.png';
import InDino from '../assets/images/ProjectImg/InDino.jpg';
import BurgerClub from '../assets/images/ProjectImg/BurgerClub.png';
import InTheCloset from '../assets/images/ProjectImg/InTheCloset.png'
import TaaziSukhiMitti from '../assets/images/ProjectImg/TaaziSukhiMitti.png';
import OdeToLife from '../assets/images/ProjectImg/Ode To Life.png';
import LetterbyBrother from '../assets/images/ProjectImg/Letters By My Brother.jpg';
import suffering from '../assets/images/ProjectImg/Suffering.png';
import reflection from '../assets/images/ProjectImg/Reflections.png';
import showreel from '../assets/images/ProjectImg/ShowReel.png';


const details=[
  {
    Name:'In The Closet',
    Image:InTheCloset,
    About:"'In The Closet' was my first film project, born from a collaboration facilitated by 'DICE Vancouver Film School of Entertainment Arts' during the 2020 lockdown. Our team's dedication led to winning both the 'Best Film' and 'Best Screenplay' Awards.",
    YouTube:'',
    Drive:'',
    Instagram:'',
    Vimeo:'https://vimeo.com/907723817?share=copy'
  },
  {
    Name:'Ode To Life',
    Image:OdeToLife,
    About:"Ode To Life (2022) It is a Narrative Short Film, where a man talks about life after his search for her has neared its close. He admires her beauty and recalls the hardships he faced on his path, how she came to his rescue, and how all those events made him more grateful.",
    YouTube:'https://youtu.be/NlsuQNOkwCs',
    Drive:'',
    Instagram:'',
    Vimeo:''
  },
  {
    Name:'Letters by my Brother',
    Image:LetterbyBrother,
    About:"Letters By My Brother (2022) ‘Letters By My Brother’ is a short film. It’s a fictional story that revolves around the life of a visually impaired girl Kavya who waits for her brother’s return from the army.",
    YouTube:'https://youtu.be/vd_o3lSOxsw',
    Drive:'',
    Instagram:'',
    Vimeo:''
  },
  {
    Name:'Burger Club AD',
    Image:BurgerClub,
    About:"It is an Advertisement for the Burger Club Café, which serves delicious burgers made of fresh buns prepared in-house.",
    YouTube:'',
    Drive:'',
    Instagram:'https://www.instagram.com/reel/Cwm4qh1Jo_5/',
    Vimeo:''
  },
  {
    Name:'Layer Shot AD',
    Image:LayerShot,
    About:"It is an Advertisement for the Layer Shot deodorant, which is packed in a bullet-shaped bottle to attract customers.",
    YouTube:'',
    Drive:'',
    Instagram:'https://www.instagram.com/reel/Cw4ZCQ4LHYK/',
    Vimeo:''
  },
  {
    Name:'In Dino',
    Image:InDino,
    About:"In Dino (2023) ‘In Dino’ is a Music Cover Video, using the song ‘In Dino’ from the film ‘Life in a Metro’. Inspired by the song itself, it shows the life of people in metropolitan cities and how they cross paths with each other.",
    YouTube:'https://youtu.be/0CIGcI3vBxc',
    Drive:'',
    Instagram:'',
    Vimeo:''
  },
  {
    Name:'Taazi Sukhi Mitti',
    Image:TaaziSukhiMitti,
    About:"Taazi Sukhi Mitti (2023) ‘Taazi Sukhi Mitti’ is a short film, which explores simplicity in today’s world. It talks about a newlywed couple who just want to start their first proper conversation.",
    YouTube:'',
    Drive:'',
    Instagram:'',
    Vimeo:'https://vimeo.com/844500822'
  },
  {
    Name:'सफरing',
    Image:suffering,
    About:"Taazi Sukhi Mitti (2023) ‘Taazi Sukhi Mitti’ is a short film, which explores simplicity in today’s world. It talks about a newlywed couple who just want to start their first proper conversation.",
    YouTube:'',
    Drive:'https://drive.google.com/file/d/1sRBD1HBSyEeZFwEu2pBcUeDLyJnSgNiP/view?usp=sharing',
    Instagram:'',
    Vimeo:''
  },
  {
    Name:'Theyyam Documentary',
    Image:'',
    About:"Taazi Sukhi Mitti (2023) ‘Taazi Sukhi Mitti’ is a short film, which explores simplicity in today’s world. It talks about a newlywed couple who just want to start their first proper conversation.",
    YouTube:'',
    Drive:'https://drive.google.com/file/d/17fbFCvV4-O5AFcoCBXX8SXSGxEK6D8Fg/view?usp=sharing',
    Instagram:'',
    Vimeo:''
  },
  {
    Name:'Theyyam MV',
    Image:'',
    About:"Taazi Sukhi Mitti (2023) ‘Taazi Sukhi Mitti’ is a short film, which explores simplicity in today’s world. It talks about a newlywed couple who just want to start their first proper conversation.",
    YouTube:'',
    Drive:'https://drive.google.com/file/d/1FI6Kd8ApAdCnwFiQ8G0kHsGAAJiHFN-M/view?usp=sharing',
    Instagram:'',
    Vimeo:''
  },
  {
    Name:'Reflections Documentary',
    Image:reflection,
    About:"Taazi Sukhi Mitti (2023) ‘Taazi Sukhi Mitti’ is a short film, which explores simplicity in today’s world. It talks about a newlywed couple who just want to start their first proper conversation.",
    YouTube:'',
    Drive:'https://drive.google.com/file/d/1AKI3x-aKruH-Uwy1eHkwOweWaTurmKny/view?usp=sharing',
    Instagram:'',
    Vimeo:''
  },
  {
    Name:'Madhumalti',
    Image:Madhumalti1,
    About:"‘Madhumalti’ is a short film that explores the theme of love. The film talks about Anandita who finds colors in her pale life after meeting Tara. Through their blossoming relationship, 'Madhumalti' delicately unfolds the intricacies of love and its transformative power.",
    YouTube:'',
    Drive:'https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view?usp=sharing',
    Instagram:'',
    Vimeo:''
  },
  {
    Name:'ShowReel',
    Image:showreel,
    About:"‘Madhumalti’ is a short film that explores the theme of love. The film talks about Anandita who finds colors in her pale life after meeting Tara. Through their blossoming relationship, 'Madhumalti' delicately unfolds the intricacies of love and its transformative power.",
    YouTube:'',
    Drive:'https://drive.google.com/file/d/1nUFFsMa2SwQP64nXWFFz7YuQeEgyRH7R/view?usp=sharing',
    Instagram:'',
    Vimeo:''
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
    background-image: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
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
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export default function ProjectDisp() {

  return (
    <>
      <Container id="MyProjects">
        <h2>~Projects</h2>
        <CardContain>
          {details.map((detail, index) => {
            return <Card project={detail} key={index} />;
          })}
        </CardContain>
      </Container>
    </>
  );
}
