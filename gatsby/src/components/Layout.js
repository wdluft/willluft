import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';
import battlestation from '../assets/images/battlestation.jpg';

const LayoutWrapper = styled.div`
  &.welcome {
    background: url(${battlestation}) no-repeat top center;
  }

  main {
    max-width: 48rem;
    margin: 0 auto;
    padding: 2rem 2rem;
  }

  @media screen and (min-width: 55rem) {
    main {
      padding: 2rem 0;
    }
  }
`;

const Layout = ({ children, location }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <GlobalStyles />
      <LayoutWrapper className={location.pathname !== '/' ? null : 'welcome'}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;
