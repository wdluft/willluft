import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

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
      <h1>Hi, I'm Will!</h1>
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
    </>
  );
};
export default Index;
