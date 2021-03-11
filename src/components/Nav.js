import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import skyline from '../assets/images/long-skyline.svg';

const NavWrapper = styled.nav`
  margin-top: 12rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;

  /* skyline */
  &::before {
    content: '';
    position: absolute;
    background-image: url(${skyline});
    background-repeat: repeat-x;
    background-position: top center;
    top: -180px;
    left: 0;
    height: 181px;
    width: 100%;
  }

  /* LOGO */
  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: -32px;
    padding: 0.5rem 0 0;
    z-index: 10;
    background-color: var(--superDarkGrey);

    a {
      &::before {
        display: none;
      }
    }
  }

  /* NAVLINKS */
  ul {
    background: var(--superDarkGrey);
    box-shadow: var(--baseShadow);
    /* border-bottom: 0.25rem solid var(--primary); */
    list-style: none;
    padding: 2.5rem 1.5rem 1.5rem;
    text-align: center;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: var(--primary);
    }
  }

  a {
    color: var(--white);
    text-decoration: none;
    font-size: var(--h4);
    font-weight: 400;
    position: relative;
    z-index: 10;

    &::before {
      --rotate: -2.5deg;
      --scale: 1.2;
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: var(--primary);
      bottom: 0;
      left: 0;
      transform: skew(-24deg) rotate(var(--rotate)) scaleX(var(--scale));
      transition: var(--transition);
      z-index: -10;
    }

    &:hover {
      &::before {
        /* transform: skew(24deg) rotate(var(--rotate)) scaleX(var(--scale))
            scaleY(2.5); */
        height: 8px;
        background-color: var(--secondary);
      }
    }

    &[aria-current='page'] {
      color: var(--superDarkGrey);

      &::before {
        height: calc(var(--h4) + 4px);
        background-color: var(--primary);
      }
    }
  }

  li {
    padding: 0 2rem;
  }

  @media screen and (max-width: 40rem) {
    a {
      font-size: var(--h5);

      &[aria-current='page'] {
        &::before {
          height: calc(var(--h5) + 4px);
        }
      }
    }
  }
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          resize(width: 722) {
            src
          }
        }
      }
    }
  `);

  return (
    <NavWrapper>
      <h1 className="logo">
        <Link to="/">
          <img
            width="224"
            src={data.logo.childImageSharp.resize.src}
            alt="Will Luft"
          />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
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
    </NavWrapper>
  );
};

export default Nav;
