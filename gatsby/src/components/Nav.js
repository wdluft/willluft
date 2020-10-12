import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  margin-top: 4rem;
  margin-bottom: 3rem;
  /* background: var(--white); */
  /* box-shadow: var(--navShadow);
  z-index: 10;
  border-bottom: 0.25rem solid var(--primary); */
  display: grid;
  grid-template-columns: 1fr;

  /* LOGO */
  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: -32px;
    z-index: 10;
  }

  /* NAVLINKS */
  ul {
    /* min-height: 6rem; */
    background: var(--white);
    box-shadow: var(--navShadow), var(--baseShadow);
    /* border-bottom: 0.25rem solid var(--primary); */
    list-style: none;
    padding: 2rem 1.5rem 1.5rem;
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
      /* background-image: var(--gradient); */
    }

    a {
      text-decoration: none;
      font-size: var(--h4);
      font-weight: 600;
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
          height: 6px;
        }
      }

      &[aria-current='page'] {
        &::before {
          height: calc(var(--h4) + 4px);
        }
      }
    }
  }

  li {
    padding: 0 2rem;
  }
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          resize(width: 400) {
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
            width="128"
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
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
