import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';

const BookList = ({ data }) => (
  // const { markdownRemark, site } = data;
  // const pageURL = `${site.siteMetadata.siteUrl}/bookshelf/${markdownRemark.frontmatter.slug}`;
  <>
    {/* <SEO title={markdownRemark.frontmatter.title} /> */}
    <h2>Booklist</h2>
  </>
);
// export const query = graphql`
//   query BookListQuery($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         slug
//       }
//     }
//     site(siteMetadata: {}) {
//       siteMetadata {
//         siteUrl
//       }
//     }
//   }
// `;

export default BookList;
