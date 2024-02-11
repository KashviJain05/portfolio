import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  position: relative;
  min-height: 15vh;
  overflow: hidden;
  background: rgb(8, 7, 11);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Alata";
  border-bottom: 2px dashed #fff;
  border-top: 2px dashed #fff;

  p{
    font-size:1.1rem;

    a{
      text-decoration:none;
    }
  }
`;

export default function CopyRight() {
  return (
    <>
      <Footer>
        <p><a href="kashvijain.me">© KASHVI JAIN</a></p>
      </Footer>
    </>
  );
}
