import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Home from "./sections/Home";
import "locomotive-scroll/dist/locomotive-scroll.css";
import About from "./sections/About";
import Banner from "./sections/Banner";
import IIFI from "./sections/IIFI";
import Projects from "./sections/Projects";
import WorkExp from "./sections/WorkExp";
import Education from "./sections/Education";
import Loader from "./sections/Loader";
import Contact from "./sections/Contact";
import CopyRight from "./sections/CopyRight";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            multiplier: 1,
            tablet: {
              smooth: true,
              multiplier: 1.5, // Adjust the multiplier for smoother scrolling on tablet
              breakpoint: 1024, // You can adjust this breakpoint according to your design
              direction: 'vertical', // Set the direction for tablet scrolling
              touchMultiplier: 2.5, // Adjust the touch sensitivity on tablet
              inertia: 0.4, // Adjust the inertia for tablet
              ease: 0.1, // Adjust the easing for tablet
            },
            smartphone: {
              smooth: true,
              multiplier: 1.5, // Adjust the multiplier for smoother scrolling on smartphone
              breakpoint: 480, // You can adjust this breakpoint according to your design
              direction: 'vertical', // Set the direction for smartphone scrolling
              touchMultiplier: 2.5, // Adjust the touch sensitivity on smartphone
              inertia: 0.3, // Adjust the inertia for smartphone
              ease: 0.15, // Adjust the easing for smartphone
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main className="App" data-scroll-container ref={containerRef}>
            {loaded ? (
              <>
                <Home />
                <About />
                <Banner />
                <IIFI />
                <Projects />
                <WorkExp />
                <Education />
                <Contact />
                <CopyRight />
              </>
            ) : (
              <Loader />
            )}
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
