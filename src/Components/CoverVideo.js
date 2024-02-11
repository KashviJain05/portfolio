import React from "react";
import styled from "styled-components";
import videoadd from "../assets/hero_video/video_editing.mp4";
import Typed from "typed.js";
import { motion } from "framer-motion/dist/framer-motion";

// defining name array
const name = "KASHVI JAIN";
let nameArr = [];
let delayScroll = 0.26;
for (let i = 0; i < name.length; i++) {
  delayScroll -= 0.02;
  nameArr[i] = {
    character: name[i],
    delayScroll: delayScroll,
  };
}

// secion which ontains cover video and tite
const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// styled title component
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxxl};
    color: wheat;
    text-shadow: 2px 2px 2px ${(props) => props.theme.body};
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: ${(props) => props.theme.fontxxl};
    }

    h2 {
      font-size: ${(props) => props.theme.fontlg};
      margin-top: 10px;
    }
  }
`;

// Animating name using Framer Motion
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildern: 2,
      staggerChildren: 0.3,
    },
  },
};

const textAnime = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

// cover video component
const CoverVideo = () => {
  // Designation text animation logic using typed.js

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["- Video Editor", "- Assistant Director", "- Sound Recordist"],
      typeSpeed: 90,
      backDelay: 700,
      backSpeed: 50,
      loop: true,
      showCursor: false,
      smartBackspace: true, // Set smartBackspace to false
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <Section>
      <Title variants={container} initial="hidden" animate="show">
        {/* In Locomotive Scroll, the data-scroll attribute is commonly used in HTML elements to define how they should behave as the user scrolls. 
        These attributes provide configuration options for Locomotive Scroll to determine how elements should move, fade, or otherwise change based on the scroll position. */}

        <div>
          {nameArr.map((item, index) => {
            return (
              <motion.h1
                key={index}
                data-scroll
                data-scroll-delay={item.delayScroll}
                data-scroll-speed="5"
                variants={textAnime}
              >
                {item.character === " " ? "\u00A0 " : item.character}
              </motion.h1>
            );
          })}
        </div>
        <h2
          ref={el}
          data-scroll
          data-scroll-delay={0.13}
          data-scroll-speed="5"
        ></h2>
      </Title>
      <video src={videoadd} type="video/mp4" autoPlay muted loop />
    </Section>
  );
};

export default CoverVideo;
