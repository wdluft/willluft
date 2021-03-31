import path from 'path';

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
      path: `/bookshelf/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/Bookshelf.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // wait for all promises to be resolved before finishing this function
  await Promise.all([turnBookListsIntoPages(params)]);
}
