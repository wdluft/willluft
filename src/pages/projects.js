import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from '../components/SEO';

const Projects = ({ data }) => (
  // const images = data.images.nodes;

  <>
    <SEO title="Projects" />
    <h1>Projects</h1>
  </>
);
export default Projects;

// export const query = graphql`
//   query {
//     images: allFile(filter: { relativeDirectory: { eq: "project-images" } }) {
//       nodes {
//         id
//         name
//         childImageSharp {
//           id
//           fluid(maxWidth: 400) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `;
