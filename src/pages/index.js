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

  console.log(data.headshot.childImageSharp.resize.src);

  return (
    <>
      <SEO title="Home" />
      <h1>Home</h1>
    </>
  );
};
export default Index;
