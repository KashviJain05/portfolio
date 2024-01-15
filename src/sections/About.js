import React from "react";
import styled from "styled-components";
import leftBorderUrl from '../assets/images/border-left.gif';
import rightBorderUrl from '../assets/images/border-right.gif';
import AboutDisp from "../Components/AboutDisp";

const Section = styled.section`
    position:relative;
    min-height:100vh;
    overflow:hidden;
    background:rgb(8,7,11);
`

const BorderRight = styled.div`
    background:url(${rightBorderUrl}) repeat-y right top;
    min-height:100vh;
    margin-right:10px;
`

const BorderLeft = styled.div`
    background:url(${leftBorderUrl}) repeat-y left top;
    min-height:100vh;
    margin-left:10px;
`

const About = ()=>{
    return(
        <>
            <Section>
                {/* <BorderLeft>
                    <BorderRight>
                        <AboutDisp/>
                    </BorderRight>
                </BorderLeft> */}
                <AboutDisp/>
            </Section>
        </>
    )
}

export default About;