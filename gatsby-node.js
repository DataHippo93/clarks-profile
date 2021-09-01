const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/components/Blog/BlogPostStandardTemplate.js');

  return graphql(`
    {
      allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            published
            type
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.nodes;

    // create page for each mdx file
    posts.forEach((post) => {
      if (post.frontmatter.type === 'post')
        createPage({
          path: `/the-sylvan-stoop-blog${post.fields.slug}`,
          component: blogPostTemplate,
          context: {
            slug: `${post.fields.slug.substring(1)}`,
          },
        });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
