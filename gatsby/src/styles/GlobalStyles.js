import { createGlobalStyle } from 'styled-components';
import 'typeface-rubik';
import zigzag from '../assets/images/zig-zag.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    /* COLORS */
    --black: hsl(0, 0%, 0%);
    --white: hsl(0, 100%, 100%);
    --teal: hsl(180, 94%, 58%);
    --orange: hsl(20, 100%, 64%);
    --yellow: hsl(48, 100%, 52%);
    --superDarkGrey: hsl(209, 15%, 28%);
    --darkGrey: hsl(207, 12%, 43%);
    --grey: hsl(208, 12%, 58%);
    --lightGrey: hsl(210, 16%, 76%);
    --superLightGrey: hsl(208, 21%, 88%);

    --primary: var(--teal);
    --secondary: var(--yellow);
    --gradient: radial-gradient(50% 50% at 50% 50%, #FFCF0A 35.42%, #46FBFB 100%);

    /* TYPOGRAPHY */
    --superBigText: 5rem;
    --h1: 4.209rem;
    --h2: 3.157rem;
    --h3: 2.369rem;
    --h4: 1.777rem;
    --h5: 1.333rem;
    --baseFontSize: 1rem;
    --smallText: 0.75rem;

    /* ELEVATION */
    --xsShadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
    --smShadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --baseShadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --mdShadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --lgShadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --xlShadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --xxlShadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --innerShadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    --navShadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);


    --transition: all 200ms ease-in;
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

    /* Full page border */
    --borderSize: calc(var(--size) / 2);
    border: var(--borderSize) var(--superDarkGrey) solid;

    /* Typography */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-family: "Rubik";

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

h6 {font-weight: normal;}

small, .text_small {font-size: var(--smallText);}

a {
  color: var(--superDarkGrey);
  text-decoration-color: var(--primary);
  transition: var(--transition);
}

a:hover {
  text-decoration-color: var(--secondary);
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
    background-image: var(--gradient);
    border-radius: 6px;
    border: 3px solid var(--superDarkGrey);
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
