import React from "react";
import styled from "styled-components";
import imgAdd from "../assets/images/ProfilePic.jpg";

const Container= styled.div`
    padding:40px 80px 40px 80px;
    color:#fff;
    font-family:'Alata';


    @media(max-width:60em){
        padding:10px 20px 10px 20px;
    }
`

const ContainerWrap= styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;

    h2{
        width:100%;
        font-size:${props=>props.theme.fontxxxl};
        background-clip: text;
        color: transparent;
        background-image:linear-gradient(45deg, rgba(219,217,255,1) 0%, rgba(193,72,209,1) 43%, rgba(168,62,206,1) 90%);
        border-bottom: 2px dashed #fff;
        padding-bottom: 4px;

        @media(max-width:60em){
            font-size:${props=>props.theme.fontxxl};
        }

        @media(max-width:40em){
            font-size:${props=>props.theme.fontxl};
        }
    }
`

const ContentArea= styled.div`
    display:flex;
    gap:4rem;
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

    }

`

const StackAnimation=styled.div`

`

const AboutDisp=()=>{
   return(
    <Container>
        <ContainerWrap>
            <h2>~About</h2>
            <ContentArea>
                <Profile>
                    <img src={imgAdd}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        </p>
                </Profile>
                <StackAnimation>
                    <p>Animation says Hi</p>
                </StackAnimation>
            </ContentArea>
        </ContainerWrap>
    </Container>
   )
}

export default AboutDisp;