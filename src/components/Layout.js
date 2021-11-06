import React from 'react';
import styled from 'styled-components';
import '@fontsource/rubik';
import '@fontsource/fira-mono';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;

  main {
    width: 100%;
    max-width: var(--max-content-width);
    margin: 32px auto 160px;
    flex: 1;
    padding: 0 24px;
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
