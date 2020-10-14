import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  main {
    max-width: 48rem;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <LayoutWrapper>
      <Nav />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  </>
);

export default Layout;
