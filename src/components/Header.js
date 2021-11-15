import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { QUERIES } from '../utils/constants';
import Peaks from '../assets/images/header-layered-peaks.svg';
import MobilePeaks from '../assets/images/header-layered-peaks-mobile.svg';
import NavDecoration from '../assets/images/nav-link-decoration.svg';
import NavDecorationTall from '../assets/images/nav-link-decoration-tall.svg';
import NavDecorationHover from '../assets/images/nav-link-decoration-hover.svg';

function Header() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          resize(width: 266) {
            src
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Nav>
        <Logo to="/">
          <img
            width="266"
            src={data.logo.childImageSharp.resize.src}
            alt="Will Luft"
          />
        </Logo>
        <NavLinksWrapper>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/bookshelf">Bookshelf</NavLink>
        </NavLinksWrapper>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: -1px;

  &::after {
    content: '';
    background-image: url(${MobilePeaks});
    background-repeat: repeat-x;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    filter: drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.1));

    @media ${QUERIES.tabletAndUp} {
      background-image: url(${Peaks});
      height: 128px;
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  background-color: var(--gray-super-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
`;

const Logo = styled(Link)`
  img {
    width: 173px;

    @media ${QUERIES.tabletAndUp} {
      width: 266px;
    }
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const NavLink = styled(Link)`
  --nav-text-size: 1.5rem;
  color: var(--white);
  font-size: var(--nav-text-size);
  font-weight: 900;
  text-decoration: none;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 16px;
    background-image: url(${NavDecoration});
    background-position: top center;
    bottom: -12px;
    transform: scaleX(1.1);
    /* Exit Animation */
    transition: all 400ms cubic-bezier(0.12, 0, 0.39, 0);
    z-index: -1;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &::before {
        /* Enter Animation */
        transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
        background-image: url(${NavDecorationHover});
      }
    }
  }

  /* Show which page user is on */
  &[aria-current='page'] {
    color: var(--gray-super-dark);

    &::before {
      /* Enter Animation */
      transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
      height: 45px;
      background-image: url(${NavDecorationTall});
    }
  }
`;

export default Header;
