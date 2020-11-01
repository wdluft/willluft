import path, { resolve } from 'path';

async function turnPostsIntoPages({ graphql, actions }) {
  // get template for this page
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

async function turnBookListsIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "books" } } }) {
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

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/booklists/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/BookList.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnPostsIntoPages(params),
    turnBookListsIntoPages(params),
  ]);
}
