import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';
import battlestation from '../assets/images/battlestation.jpg';

const LayoutWrapper = styled.div`
  min-height: calc(100vh - 3rem);

  &.welcome {
    background: url(${battlestation}) no-repeat top center;
  }
`;

function Layout({ children, location, pageContext, path, className }) {
  // const [hasMounted, setHasMounted] = useState(false);
  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }
  console.log(test);

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
