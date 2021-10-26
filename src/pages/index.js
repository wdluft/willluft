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
    </>
  );
};
export default Index;
