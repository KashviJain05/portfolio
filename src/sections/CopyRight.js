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
  }
`;

export default function CopyRight() {
  return (
    <>
      <Footer>
        <p>© KASHVI JAIN</p>
        <p>Made with ❤️ by Sumit Grover</p>
      </Footer>
    </>
  );
}
