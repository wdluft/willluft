import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BooksWrapper = styled.div`
  overflow-wrap: break-word;

  h1 {
    padding-bottom: 1rem;
    font-size: var(--h2);

    @media screen and (min-width: 40rem) {
      font-size: var(--h1);
    }
  }

  .book {
    background: var(--superDarkGrey);
    color: var(--superLightGrey);
    border: 4px solid var(--primary);
    box-shadow: var(--mdShadow);
    padding: 1rem 1rem 0;
    position: relative;
    margin-bottom: 2rem;

    a {
      color: var(--superLightGrey);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        text-decoration-color: var(--secondary);
      }
    }
  }

  h2 {
    font-size: var(--h3);
    padding-bottom: 0.25rem;
  }

  h6 {
    padding-bottom: 0.5rem;
  }

  @media screen and (min-width: 48rem) {
    h2 {
      font-size: var(--h2);
    }
  }
`;

const Bookshelf = () => {
  const data = useStaticQuery(graphql`
    query {
      books: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "books" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              slug
            }
          }
        }
      }
      rereadList: allMarkdownRemark(
        filter: { frontmatter: { slug: { eq: "books-i-reread-every-year" } } }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              slug
            }
          }
        }
      }
    }
  `);

  const books = data.books.edges;
  const rereadList = data.rereadList.edges[0].node.frontmatter;

  return (
    <>
      <SEO title="Book Lists" />
      <BooksWrapper>
        <h1>Bookshelf</h1>
        <p>
          I try to read every day. Starting in 2019, I've kept a list of
          everything I've read during the year. You can find the lists for the
          years since below. There are also some{' '}
          <Link to={rereadList.slug}>books that I reread</Link> every year.
          These books are either works of fiction, with stories and characters
          that I love, or books full of things I want to learn and embody.
        </p>

        {books.map((book) => (
          <div key={book.node.frontmatter.slug} className="book">
            <h2>
              <Link to={`${book.node.frontmatter.slug}`}>
                {book.node.frontmatter.title}
              </Link>
            </h2>
            <h6>{book.node.frontmatter.date}</h6>
          </div>
        ))}
      </BooksWrapper>
    </>
  );
};

export default Bookshelf;
