import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import PageHeading from './PageHeading';
import { QUERIES } from '../utils/constants';
import HeadingDecoration from '../assets/images/page-heading-underline.svg';

const Index = () => (
  <>
    <SEO title="Home" />
    <HomeWrapper>
      <HomeHeading>
        Hi, I'm <br />
        <span>Will Luft!</span>
      </HomeHeading>
      <ImageWrapper>
        <StaticImage
          src="../assets/images/headshot.jpg"
          alt="Headshot of Will Luft"
          width="184"
        />
      </ImageWrapper>
      <p>
        By day I support the fulfillment system operations of{' '}
        <a href="https://www.donorschoose.org/">DonorsChoose</a>.
      </p>
      <p>
        By night I keep busy by{' '}
        <Link to="/projects">working on web development projects</Link>, finding
        crafts to keep my hands busy, and trying to stay in shape to play soccer
        and volleyball.
      </p>

      <p>
        You can <Link to="/about">read more about me</Link> or checkout{' '}
        <Link to="/bookshelf">some of the books that I've read</Link>.
      </p>
    </HomeWrapper>
  </>
);
export default Index;

const HomeWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 60% 1fr;

    p {
      grid-column: 1/-1;
    }
  }
`;

const HomeHeading = styled(PageHeading)`
  font-size: var(--fs-800);
  margin-bottom: 32px;

  span {
    font-size: calc(var(--fs-900) + 1rem);
    display: inline-block;
    position: relative;
    line-height: 1;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 32px;
      background-image: url(${HeadingDecoration});
      background-position: top center;
      bottom: -32px;
      z-index: -1;
    }
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  place-items: center;

  div {
    border-radius: 50%;
    border: 8px solid var(--primary);
  }
`;
