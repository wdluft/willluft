import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BlogWrapper = styled.div`
  overflow-wrap: break-word;

  h1 {
    padding-bottom: 1rem;
    font-size: var(--h2);

    @media screen and (min-width: 40rem) {
      font-size: var(--h1);
    }
  }

  .post {
    background: var(--superDarkGrey);
    color: var(--superLightGrey);
    border: 4px solid var(--primary);
    box-shadow: var(--mdShadow);
    padding: 1rem 1rem 0;
    position: relative;
    margin-bottom: 2rem;
  }

  a {
    color: var(--superLightGrey);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
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

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog post" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              blurb
              date(formatString: "MMMM DD, YYYY")
              title
              slug
            }
          }
        }
      }
    }
  `);

  const posts = data.posts.edges;

  return (
    <>
      <SEO title="Blog" />
      <BlogWrapper>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.node.frontmatter.slug} className="post">
            <h2>
              <Link to={`${post.node.frontmatter.slug}`}>
                {post.node.frontmatter.title}
              </Link>
            </h2>
            <h6>{post.node.frontmatter.date}</h6>
            <p>{post.node.frontmatter.blurb}</p>
          </div>
        ))}
      </BlogWrapper>
    </>
  );
};

export default Blog;
