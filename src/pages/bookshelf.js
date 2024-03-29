import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ComingSoon from '../components/ComingSoon';
import PageHeading from '../components/PageHeading';
import SEO from '../components/SEO';

const Bookshelf = () => (
  // const data = useStaticQuery(graphql`
  //   query {
  //     books: allMarkdownRemark(
  //       filter: { frontmatter: { type: { eq: "books" } } }
  //       sort: { fields: frontmatter___date, order: DESC }
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             date(formatString: "MMMM DD, YYYY")
  //             title
  //             slug
  //           }
  //         }
  //       }
  //     }
  //     rereadList: allMarkdownRemark(
  //       filter: { frontmatter: { slug: { eq: "books-i-reread-every-year" } } }
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             date
  //             title
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const books = data.books.edges;
  // const rereadList = data.rereadList.edges[0].node.frontmatter;

  <>
    <SEO title="Book Lists" />
    <PageHeading>Bookshelf</PageHeading>
    <ComingSoon />
  </>
);
export default Bookshelf;
