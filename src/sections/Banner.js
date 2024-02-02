import React from "react";
import styled from "styled-components";

const Section = styled.section`
    // min-height:50vh;
    width: 100vw;
    margin: 0 auto;
    background:rgb(8,7,11);

    display:flex;
    justify-content:center;
    align-items:start;

    position:relative;
`

const Container= styled.div`
    min-height:50vh;
    background:rgb(8,7,11);

    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    @media(max-width:60em){
        min-height:35vh;
    }
`

const BannerComponent= styled.h1`
    font-size:${props=>props.theme.fontxxxl};
    font-family:"Kaushan Script";
    color:#fff;
    white-space:nowrap;
    text-transform:uppercase;
    line-height:1;

    @media(max-width:80em){
        font-size:${props=>props.theme.fontxxl};
    }

    @media(max-width:60em){
        font-size:1.5em;
    }

    span{
        display:block;
        background-color:rgb(8,7,11);
        padding:1rem 2rem;
    }
`

// Banner component that works on Locomotive Scroll and only triggers when data-scroll-target appears
// Here target is container

export default function Banner(){
    return(
        <Section>
           <Container id="up">
            <BannerComponent>
                <span data-scroll 
                data-scroll-direction="horizontal"
                data-scroll-speed="6"
                data-scroll-target="#up"
                >
                Transforming raw footage</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll 
                data-scroll-direction="horizontal"
                data-scroll-speed="-6"
                data-scroll-target="#up"
                >into seamless and</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll 
                data-scroll-direction="horizontal"
                data-scroll-speed="6"
                data-scroll-target="#up"
                >engaging narratives</span>
            </BannerComponent>
           </Container>
        </Section>
    )
}