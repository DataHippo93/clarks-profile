import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

export default function Blog({ data }) {
  const { posts } = data.blog;

  return (
    <div>
      <h1>My blog posts</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.fields.slug}`}> Read </Link>
        </article>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }

        excerpt
        id
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.shape({
    blog: PropTypes.shape({
      posts: PropTypes.shape({
        map: PropTypes.string,
      }),
    }),
  }),
};
