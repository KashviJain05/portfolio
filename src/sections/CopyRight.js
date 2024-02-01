import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  position: relative;
  min-height: 30vh;
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
    margin-top:20px;
    font-size:1.3rem;
  }
`;

export default function CopyRight() {
  return (
    <>
      <Footer>
        <p>© KASHVI JAIN</p>
        <p>Made ❤️ with by Sumit Grover</p>
      </Footer>
      <br/>
    </>
  );
}
