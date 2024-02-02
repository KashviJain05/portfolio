import React from "react";
import styled from "styled-components";
import CoverVideo from "../Components/CoverVideo";
import NavBar from "../Components/NavBar";

// creating a section styled component
const Section = styled.section`
    position:relative;
    // min-height:100vh;
    overflow:hidden;
`

const Home =()=>{
    return(
        <>
            <Section>
                <CoverVideo/>
                <NavBar/>
            </Section>
        </>
    )
}

export default Home;