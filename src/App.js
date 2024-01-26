import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import Home from './sections/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import About from './sections/About';
import Banner from './sections/Banner';
import IIFI from './sections/IIFI';
import Projects from './sections/Projects';
import WorkExp from './sections/WorkExp';
import Education from './sections/Education';
import Loader from './sections/Loader';

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            tablet: {
              smooth: true,
            },
            smartphone: {
              smooth: true,
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main className='App' data-scroll-container ref={containerRef}>
            {loaded ? (
              <>
              
                <Home />
                <About />
                <Banner />
                <IIFI />
                <Projects />
                <WorkExp />
                <Education />
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
