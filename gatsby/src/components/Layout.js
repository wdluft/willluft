import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';

const LayoutWrapper = styled.div``;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <LayoutWrapper>
      <Nav />
      {children}
      <Footer />
    </LayoutWrapper>
  </>
);

export default Layout;
