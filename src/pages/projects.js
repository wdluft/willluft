import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import ComingSoon from '../components/ComingSoon';

const Projects = ({ data }) => (
  // const images = data.images.nodes;

  <>
    <SEO title="Projects" />
    <PageHeading>Projects</PageHeading>
    <ComingSoon />
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
