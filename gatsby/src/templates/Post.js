import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PostWrapper = styled.div`
  h2 {
    font-size: var(--h3);

    @media screen and (min-width: 40rem) {
      font-size: var(--h2);
    }
  }

  .date {
    font-size: var(--baseFontSize);
  }

  ul {
    padding-bottom: 1rem;

    @media screen and (min-width: 40rem) {
      padding-bottom: 2rem;
      font-size: var(--h5);
    }
  }
`;

const Post = ({ data, location }) => {
  const { markdownRemark, site } = data;
  const pageURL = `${site.siteMetadata.siteUrl}/blog/${markdownRemark.frontmatter.slug}`;
  return (
    <>
      <SEO title={markdownRemark.frontmatter.title} />
      <PostWrapper>
        <h2>{markdownRemark.frontmatter.title}</h2>
        <p className="date">{markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            markdownRemark.frontmatter.title
          )}&via=IAmWillDL&url=${encodeURI(pageURL)}`}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Twitter
        </a>
      </PostWrapper>
    </>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
    site(siteMetadata: {}) {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default Post;
