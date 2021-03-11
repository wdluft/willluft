import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';
import battlestation from '../assets/images/battlestation.jpg';

const LayoutWrapper = styled.div`
  min-height: calc(100vh - 3rem);

  /* Removing background image on home page */
  /* &.welcome {
    background: url(${battlestation}) no-repeat top center;
  } */
`;

function Layout({ children, location }) {
  return (
    <>
      <GlobalStyles />
      <LayoutWrapper
        id="layoutDiv"
        className={location.pathname === '/' ? 'welcome' : null}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </LayoutWrapper>
    </>
  );
}

export default Layout;
