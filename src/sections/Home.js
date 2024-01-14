import React from "react";
import styled from "styled-components";
import CoverVideo from "../Components/CoverVideo";

// creating a section styled component
const Section = styled.section`
    position:relative;
    min-height:200vh;
    overflow:hidden;
`

const Home =()=>{
    return(
        <>
            <Section>
                <CoverVideo/>
                About
            </Section>
        </>
    )
}

export default Home;