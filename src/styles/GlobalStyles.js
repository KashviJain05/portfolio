import { createGlobalStyle } from "styled-components";
import '@fontsource/sirin-stencil';
import "@fontsource/kaushan-script";
// Here we define Global styles.
//Global styles are styles that affect the entire document rather than being scoped to a specific component.

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding:0;
}

body{
    font-family: sirin-stencil;
    overflow-x:hidden;
}

h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}

a{
    color:inherit;
    text-decoration:null;
}

`

export default GlobalStyles;