import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';

const Projects = ({ data }) => (
  // const images = data.images.nodes;

  <>
    <SEO title="Projects" />
    <PageHeading>Projects</PageHeading>
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
