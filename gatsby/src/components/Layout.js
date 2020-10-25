import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';
import battlestation from '../assets/images/battlestation.jpg';

const LayoutWrapper = styled.div`
  main {
    max-width: 48rem;
    margin: 0 auto;
    padding: 2rem 2rem;
  }

  &.welcome {
    background: url(${battlestation}) no-repeat top center;
  }

  @media screen and (min-width: 55rem) {
    main {
      padding: 2rem 0;
    }
  }
`;

const Layout = ({ children, location }) => (
  <>
    <GlobalStyles />
    <LayoutWrapper className={location.pathname === '/' ? 'welcome' : null}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  </>
);

export default Layout;
