import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import layeredPeaks from '../assets/images/layered-peaks-primary-large.svg';

const HomePageWrapper = styled.div`
  .intro {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding-bottom: 1rem;
  }

  h1 {
    font-size: var(--h4);
    /* padding-bottom: 1rem; */

    span {
      font-size: var(--h2);
      /* margin-top: 1rem; */
      position: relative;
      z-index: 10;
      display: inline-block;

      /* &::before {
        --scale: 1.1;
        content: '';
        position: absolute;
        width: 100%;

        background-image: url(${layeredPeaks});
        bottom: 0;
        left: 0;
        transform: skew(24deg) rotate(var(--rotate)) scaleX(var(--scale));
        transition: var(--transition);
        z-index: -10;
      } */
    }
  }

  img {
    border-radius: 50%;
    justify-self: center;
    border: 4px solid var(--primary);
  }

  @media screen and (min-width: 40rem) {
    .intro {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }

  @media screen and (min-width: 53rem) {
    h1 {
      span {
        font-size: var(--superBigText);

        /* &::before {
          height: calc(var(--superBigText) + 40px);
        } */
      }
    }
  }
`;

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          resize(width: 600) {
            src
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Home" />
      <HomePageWrapper>
        <div className="intro">
          <h1>
            Hi, I'm &nbsp;
            <br />
            <span> Will Luft.</span>
          </h1>
          <img
            src={data.headshot.childImageSharp.resize.src}
            width="175"
            alt="Will Luft"
          />
        </div>
        <p>
          By day I help support public schools and teachers, doing Fulfillment
          System Operations for{' '}
          <a href="https://www.donorschoose.org/">DonorsChoose</a>.
        </p>
        <p>
          By night I keep busy by <Link to="/projects">building websites</Link>,
          finding projects to keep my hands busy, and trying to stay in shape to
          play soccer and volleyball.
        </p>

        <p>
          You can <Link to="/about">read more about me here,</Link> or checkout{' '}
          <Link to="/bookshelf">what I've been reading</Link>.
        </p>
      </HomePageWrapper>
    </>
  );
};

export default Index;
