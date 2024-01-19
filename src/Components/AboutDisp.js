// importing the libraries
import React from "react";
import styled from "styled-components";
import imgAdd from "../assets/images/ProfilePic.jpg";
import AnimImg from "../assets/images/Animation Image.png"
import gsap from "gsap";
import { useEffect } from "react"; 

// container div for about display
const Container= styled.div`
    padding:40px 80px 40px 80px;
    color:#fff;
    font-family:'Alata';

    //media query to adjust padding
    @media(max-width:60em){
        padding:10px 20px 10px 20px;
    }
`

// div for wrapping both heading and about content
const ContainerWrap= styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;

// styles for heading along with media queries

    h2{
        width:100%;
        font-size:${props=>props.theme.fontxxxl};
        background-clip: text;
        color: transparent;
        background-image:linear-gradient(45deg, rgba(219,217,255,1) 0%, rgba(193,72,209,1) 43%, rgba(168,62,206,1) 90%);
        border-bottom: 2px dashed #fff;
        border-top: 2px dashed #fff;
        padding-bottom: 4px;

        @media(max-width:60em){
            font-size:${props=>props.theme.fontxxl};
        }

        @media(max-width:40em){
            font-size:${props=>props.theme.fontxl};
        }
    }
`

// area which contains both profile and stack animation

const ContentArea= styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-top:70px;

    @media(max-width:60em){
        flex-direction:column;
        align-items:center;
        margin-top:70px;
    }
`

// profile section containing image and content for about
const Profile= styled.div`
    box-shadow: 0px 10px 15px -3px rgb(34,34,79);
    border-radius:15px;
    width:40%;
    min-height:70vh;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    

    @media(max-width: 60em){
        width:90%;
    }

    img{
        height:155px;
        width:155px;
        border-radius:50%
    }

    p{
        padding:20px;
        text-align:left;
        letter-spacing: 1.5px;
        line-height: 25px;
        font-size:${props=>props.theme.fontlg};

        @media(max-width:60em){
            letter-spacing:1.2px;
        }
    }

`

// div for the rotating stack animation

const StackAnimation=styled.div`

    width:50%;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;

    img{
        width:900px;
        height:500px;
        margin-top:-10px;

        @keyframes mymove {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(180deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

        animation: mymove 45s infinite;

        @media(max-width: 60em){
            width:700px;
            height:300px;
        }
        
    }

`

//div which contains the animation content ... ie tech stack

const AnimationContent= styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    display:flex;
    flex-direction:column;
    align-items:center;
    height:30px;
    overflow:hidden;
    font-size:20px;
    font-family:'Alata';

    @media(max-width: 60em){
        width:90%;
    }
    
`

// our about display component

const AboutDisp=()=>{

        useEffect(() => {
            try {
                gsap.to(".Animetext", {
                y: "-80px",
                repeat: -1,
                duration: 8,
                yoyo: true,
                opacity: 1,
                delay: 1,
        });
      } catch (error) {
        console.error('GSAP animation error:', error);
      }
        }, []);
    
   return(
    <Container>
        <ContainerWrap>
            <h2>~About</h2>
            <ContentArea>
                <Profile 
                    data-scroll
                    data-scroll-delay="0.13"
                    data-scroll-speed="2"
                >
                    <img src={imgAdd}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        </p>
                </Profile>
                <StackAnimation
                    data-scroll
                    data-scroll-delay="0.13"
                    data-scroll-speed="2"
                >
                    <AnimationContent >
                        <span className="Animetext">Premiere Pro</span>
                        <span className="Animetext">DaVinci Resolve</span>
                        <span className="Animetext">Final Cut Pro</span>    
                    </AnimationContent>
                    <img src={AnimImg} className="Animeimage"/>                
                </StackAnimation>
            </ContentArea>
        </ContainerWrap>
    </Container>
   )
}

export default AboutDisp;