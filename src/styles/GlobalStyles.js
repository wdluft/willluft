import { createGlobalStyle } from 'styled-components';
import { COLORS, QUERIES } from '../utils/constants';
import '@fontsource/rubik/index.css';
import '@fontsource/rubik/variable.css';
import '@fontsource/fira-mono';

const GlobalStyles = createGlobalStyle`
  /* ========================================================= */
  /* START CSS RESET */
  /* COPIED FROM https://piccalil.li/blog/a-modern-css-reset/ */
  /* ========================================================= */
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* ========================================================= */
  /* END CSS RESET */
  /* ========================================================= */

  :root {
    /* COLORS */
    --green-base: hsl(${COLORS.green.base});
    --green-super-light: hsl(${COLORS.green.superLight});
    --green-light: hsl(${COLORS.green.light});
    --green-dark: hsl(${COLORS.green.dark});
    --green-super-dark: hsl(${COLORS.green.superDark});

    --orange-base: hsl(${COLORS.orange.base});
    --orange-super-light: hsl(${COLORS.orange.superLight});
    --orange-light: hsl(${COLORS.orange.light});
    --orange-dark: hsl(${COLORS.orange.dark});
    --orange-super-dark: hsl(${COLORS.orange.superDark});

    --red-base: hsl(${COLORS.red.base});
    --red-super-light: hsl(${COLORS.red.superLight});
    --red-light: hsl(${COLORS.light});
    --red-dark: hsl(${COLORS.red.dark});
    --red-super-dark: hsl(${COLORS.red.superDark});

    --white: hsl(${COLORS.white});
    --black: hsl(${COLORS.black});

    --gray-base: hsl(${COLORS.gray.base});
    --gray-super-light: hsl(${COLORS.gray.superLight});
    --gray-light: hsl(${COLORS.gray.light});
    --gray-dark: hsl(${COLORS.gray.dark});
    --gray-super-dark: hsl(${COLORS.gray.superDark});

    /* SHADOW */
    --xs-shadow: 0 0 0 1px rgba(0,0,0,0.1);
    --sm-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    --base-shadow: 0 1px 3px 0 rgba(0,0,0,0.15),0 1px 2px 0 rgba(0,0,0,0.11);
    --md-shadow: 0 4px 6px -1px rgba(0,0,0,0.15),0 2px 4px -1px rgba(0,0,0,0.11);
    --lg-shadow: 0 10px 15px -3px rgba(0,0,0,0.15),0 4px 6px -2px rgba(0,0,0,0.1);
    --xl-shadow: 0 20px 25px -5px rgba(0,0,0,0.15),0 10px 10px -5px rgba(0,0,0,0.09);
    --xxl-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
    --inner-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.11);

    /* TYPOGRAPHY */
    --system-font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --body-font: 'Rubik';
    --header-font: 'Rubik';
    --fs-900: ${64 / 16}rem;
    --fs-800: ${48 / 16}rem;
    --fs-700: ${32 / 16}rem;
    --fs-600: ${24 / 16}rem;
    --fs-400: ${16 / 16}rem;
    --fs-300: ${12 / 16}rem;


    --transition: all 250ms;
  }

  #___gatsby {
    /* Create a stacking context, without a z-index */
    /* Ensures all portal content (modals and tooltips) will */
    /* float above the Gatsby app */
    isolation: isolate;
  }

  html {
    --size: 16px;
    @media ${QUERIES.tabletAndUp} {
      --size: 24px;
    }

    /* Full page border */
    --border-size: calc(var(--size) / 2);
    border: var(--border-size) var(--gray-super-dark) solid;

    min-height: 100%;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    --text-color: var(--gray-super-dark);
    --background-color: var(--white);
    --primary: var(--green-base);
    --secondary: var(--red-base);
    --max-body-width: calc(100vw - var(--size));
    --max-content-width: 768px;
    --content-padding: 16px;
    --body-text-size: var(--fs-400);

    color: var(--text-color);
    background-color: var(--background-color);
    height: 100%;
    font-family: var(--body-font), var(--system-font-stack);
    max-width: var(--max-body-width);
    font-size: var(--body-text-size);
  }

  a {
    color: inherit;
    text-decoration-color: var(--primary);
    transition: var(--transition);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        text-decoration-color: var(--secondary);
      }
    }
  }

  /* ========================================================= */
  /* Scrollbar Styles */
  /* ========================================================= */
  body::-webkit-scrollbar {
    width: 16px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--gray-super-dark);
  }

  body::-webkit-scrollbar-track {
    background: var(--gray-super-dark);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    background-image: var(--primary);
    border-radius: 8px;
    border: 3px solid var(--gray-super-dark);
  }
`;

export default GlobalStyles;
