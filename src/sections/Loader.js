import React from "react";
import Typed from 'typed.js';
import styled from "styled-components";

const Container = styled.div`
    background:rgb(8,7,11);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color: #fff;
    font-family: "Alata";

    p{
        margin-top:20px;
        font-size:1.7rem;
    }

    .animation{
        border:none;
        height:350px;
        width:350px;

        @media(max-width:60em){
            height:250px;
            width:250px;
        }
    }
`

export default function Loader(){
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Loading Kashvi\'s Portfolio'],
            typeSpeed: 50,
            backDelay:700,
            backSpeed:50,
            loop:false,
            showCursor:false,
            smartBackspace: true, // Set smartBackspace to false
        });
    
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
        }, []);
    

    return(
        <Container>
            <iframe className="animation" src="https://lottie.host/embed/e99a16c1-4277-47ab-b645-89f28b31de8e/8vccV4do5C.json"></iframe>
            <p ref={el}></p>
        </Container>
    )
}