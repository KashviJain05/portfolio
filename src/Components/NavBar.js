import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

// menu items array
const menuitems = [
  "About",
  "IIFI@2021",
  "Projects",
  "Work",
  "Education",
  "Contact",
];

// the navbar container which contains items
const NavContainer = styled(motion.div)`
  width: 100vw;
  z-index: 5;

  position: absolute;
  top: ${(props) => (props.show ? "0" : `-${props.theme.navHeight}`)};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s ease-in-out;

  // media query for navbar container

  @media (max-width: 60em) {
    top: ${(props) => (props.show ? "0" : "calc(-50vh - 4rem)")};
  }
`;

// Menu button which shows menu on clicking and closes too
const MenuBtn = styled(motion.li)`
  background-color: ${(props) => `rgba(${props.theme.textRGBA},0.7)`};
  list-style-type: none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: ellipse(57% 73% at 50% 18%);

  font-size: ${(props) => props.theme.fontmd};
  font-weight: bolder;
  font-family: Sans-Serif;

  cursor: pointer;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

// This component consists of menu button and all the menu items
// menu button is absolute to menuItems which is relative
const MenuItems = styled.ul`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  li {
    cursor: pointer;
  }

  // media query for menu items
  @media (max-width: 60em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer
      show={click}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 2,
      }}
    >
      <MenuItems>
        <MenuBtn onClick={() => setClick(!click)}>
          {click ? "CLOSE" : "MENU"}
        </MenuBtn>
        {menuitems.map((item, index) => {
          return (
            // Framer motion for animation on hovering and tapping Menu item
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              {item}
            </motion.li>
          );
        })}
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
