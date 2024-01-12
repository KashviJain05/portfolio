import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import Home from './sections/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />

      {/* ThemeProvider is a styled component element which provides ypur own custom
    theme available to whole DOM tree   */}
    
      <ThemeProvider theme={dark}>

          {/* Used smooth scroll in whole application */}

        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <Home/>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
