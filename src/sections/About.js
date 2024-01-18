import React from "react";
import styled from "styled-components";
import AboutDisp from "../Components/AboutDisp";

const Section = styled.section`
    position:relative;
    min-height:100vh;
    overflow:hidden;
    background:rgb(8,7,11);
`


const About = ()=>{
    return(
        <>
            <Section>
                <AboutDisp/>
            </Section>
        </>
    )
}

export default About;