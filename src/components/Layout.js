import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import '@fontsource/rubik';
import '@fontsource/rubik/variable.css';
import '@fontsource/fira-mono';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
`;

function Layout({ children, location }) {
  return (
    <>
      <GlobalStyles />
      <LayoutWrapper
        id="layoutDiv"
        className={location.pathname === '/' ? 'welcome' : null}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutWrapper>
    </>
  );
}

export default Layout;
