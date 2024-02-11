import React from "react";
import styled from "styled-components";
import majakimg from '../assets/images/majak.jpg'

const Section= styled.section`
    height:100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        height:300px;
        width:500px;

        @media(max-width:60em){
            height:200px;
            width:350px;
        }
    }

`

export default function Mazak(){
    return(
        <Section>
            <img src={majakimg}/>
        </Section>
    )
}