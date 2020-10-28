import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';

async function turnPostsIntoPages({ graphql, actions }) {
  // get template for this page
  const postTemplate = path.resolve('./src/templates/Posts.js');
  // query all posts
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog post" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // loop over each post and create a page for that post
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/Post.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // wait for all promises to be resolved before finishing this function
  await Promise.all([turnPostsIntoPages(params)]);
}
