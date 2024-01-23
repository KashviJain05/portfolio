import React from "react";
import styled from "styled-components";
import Madhumalti from '../assets/images/Madhumalti.png';
import drive from '../assets/images/Project Socials/google-drive.png'
import youtube from '../assets/images/Project Socials/youtube.png'

const Container = styled.div`
    width:15rem;
    margin:0 2rem;
    min-height:50vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:5px;

    box-shadow: 0px 2px 15px 10px rgb(34, 34, 79);

    img{
        width:100%;
        height:15vh;
    }

    p{
        width:100%;
        height:25vh;
        padding:10px;
    }

`

const Link= styled.div`
    width:100%;
    height:10vh;
    display:flex;
    align-items:center;
    justify-content:space-around;

    img{
        height:32px;
    }
`
export default function Project(){
    return(
        <Container>
            <img alt="Project-pic" src={Madhumalti}/>
            <p>‘Madhumalti’ is a short film that explores the theme of love. The film talks about Anandita who finds colours in her pale life after meeting Tara.
            Here’s the link to the film.
            <br/>
            <br/>
            Check it out !!
            </p>
            <Link>
            <a href="https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view"><img alt="drive-pic" src={drive}/></a>
            <a href="https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view"><img alt="youTube-pic" src={youtube}/></a>
            </Link>
        </Container>
    )
}