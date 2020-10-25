import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.div`
  overflow-wrap: break-word;

  .post {
    padding-bottom: 2rem;
    padding-left: 1rem;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 4px;
      height: calc(100% - 2rem);
      left: 0;
      top: 0;
      background-color: var(--primary);
    }
  }

  a {
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
    <BlogWrapper>
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
  );
};

export default Blog;
