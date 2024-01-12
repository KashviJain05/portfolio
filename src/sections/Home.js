import React from "react";
import styled from "styled-components";

// creating a section styled component
const Section = styled.section`
    position:realtive;
    min-height:200vh;
    overflow:hiden;
`

const Home =()=>{
    return(
        <>
            <Section>
                Home
            </Section>
        </>
    )
}

export default Home;