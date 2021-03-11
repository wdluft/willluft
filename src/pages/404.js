import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const FourOhFourWrapper = styled.div`
  min-height: 75vh;

  a {
    font-size: var(--h5);
  }
`;

const FourOhFourPage = () => (
  <>
    <SEO title="404: Page not found" />
    <FourOhFourWrapper>
      <h2>404: Page not found</h2>
      <p>
        The page you're looking for doesn't exist. You might be looking for one
        of these pages:
      </p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/bookshelf">Bookshelf</Link>
        </li>
      </ul>
    </FourOhFourWrapper>
  </>
);

export default FourOhFourPage;
