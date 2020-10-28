import { createGlobalStyle } from 'styled-components';
import 'typeface-rubik';
import 'fontsource-fira-mono';
import zigzag from '../assets/images/zig-zag.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    /* COLORS */
    --black: hsl(0, 0%, 0%);
    --white: hsl(0, 100%, 100%);
    --teal: hsl(180, 94%, 58%);
    --darkTeal: hsl(182, 92%, 43%);
    --superDarkTeal: hsl(185, 85%, 28%);
    --lightTeal: hsl(180, 98%, 76%);
    --superLightTeal: hsl(180, 100%, 88%);
    --orange: hsl(20, 100%, 64%);
    --yellow: hsl(48, 100%, 52%);
    --superDarkGrey: hsl(209, 15%, 28%);
    --darkGrey: hsl(207, 12%, 43%);
    --grey: hsl(208, 12%, 58%);
    --lightGrey: hsl(210, 16%, 76%);
    --superLightGrey: hsl(208, 21%, 88%);

    --primary: var(--teal);
    --darkPrimary: var(--darkTeal);
    --superDarkPrimary: var(--superDarkTeal);
    --lightPrimary: var(--lightTeal);
    --superLightPrimary: var(--superLightTeal);
    --secondary: var(--yellow);
    --gradient: radial-gradient(50% 50% at 50% 50%, #FFCF0A 35.42%, #46FBFB 100%);
    --linearGradient: linear-gradient(to top right, #46FBFB 0%, #C2FFFF 49%, #FFFFFF 50%, #FFF3C2 51%, #FFCF0A 100%);
    --verticalGradient: linear-gradient(to top, #46FBFB 0%, #C2FFFF 49%, #FFFFFF 50%, #FFF3C2 51%, #FFCF0A 100%);

    /* TYPOGRAPHY */
    --superBigText: 5rem;
    --h1: 4.209rem;
    --h2: 3.157rem;
    --h3: 2.369rem;
    --h4: 1.777rem;
    --h5: 1.333rem;
    --baseFontSize: 1rem;
    --smallText: 0.75rem;
    --bodyFont: "Rubik";
    --monoFont: "Fira Mono";

    /* ELEVATION */
    --xsShadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    --smShadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    --baseShadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.11);
    --mdShadow: 0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.11);
    --lgShadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
    --xlShadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.09);
    --xxlShadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
    --innerShadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.11);
    --navShadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.15), 0 -2px 4px -1px rgba(0, 0, 0, 0.11);


    --transition: all 250ms;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    --size: 1.5rem;
    @media screen and (min-width: 48rem) {
      --size: 3rem;
    }

    scroll-behavior: smooth;

    /* Full page border */
    --borderSize: calc(var(--size) / 2);
    border: var(--borderSize) var(--superDarkGrey) solid;

    /* Typography */
    font-family: var(--bodyFont), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
  min-height: calc(100vh - 3rem);
  font-weight: 400;
  line-height: 1.65;

    /* Base styles */
    color: var(--superDarkGrey);
    background: var(--white);
    background-image: url(${zigzag});
    background-attachment: fixed;

    
}

/* TYPOGRAPHY */
h1, h2, h3, h4, h5 {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  line-height: 1.15;
}

h1 {
  font-size: var(--h1);
  margin: 0;
}

h2 {font-size: var(--h2);}

h3 {font-size: var(--h3);}

h4 {font-size: var(--h4);}

h5 {font-size: var(--h5);}

h6 {font-weight: normal;
  @media screen and (min-width: 40rem) {
    font-size: var(--baseFontSize);
  }
}

p {
  padding-bottom: 1rem;
  
  
  @media screen and (min-width: 40rem) {
    padding-bottom: 2rem;
    font-size: var(--h5);
  }
}

small, .text_small {font-size: var(--smallText);}

a {
  color: var(--superDarkGrey);
  text-decoration-color: var(--primary);
  transition: var(--transition);
  font-size: inherit;
}

a:hover {
  text-decoration-color: var(--darkPrimary);
}


/* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 0.75rem;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--teal) var(--superDarkGrey);
  }
  body::-webkit-scrollbar-track {
    background: var(--superDarkGrey);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--teal);
    background-image: var(--teal);
    border-radius: 6px;
    border: 3px solid var(--superDarkGrey);
  }

  img {
    max-width: 100%;
    
  }

  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  .primary {
    color: var(--primary);
  }

  button, .btn {
    padding: 1rem 2rem;
    background: var(--primary);
    font-weight: bold;
    transition: var(--transition);
    text-decoration-color: var(--superDarkGrey);

    &:hover {
      background: var(--lightPrimary);
    }
  }
`;

export default GlobalStyles;
