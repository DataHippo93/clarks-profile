import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Header } from '../components/Blog/Header';
import BlogImg from '../components/Blog/BlogImage';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default function Blog({ data }) {
  const { posts } = data.blog;
  const img = 'profile.jpg';
  const imageTitle = 'sample image';
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <section id="bloghome">
        <div>
          <h1>My blog posts</h1>

          {posts.map((post) => (
            <article key={post.id}>
              <div className="bloghome-card--wrapper">
                <div className="blog_post">
                  <div className="img_pod">
                    <BlogImg alt={imageTitle} filename={img} />
                  </div>
                  <div className="container_copy">
                    <h3>{post.frontmatter.date}</h3>
                    <small>{post.frontmatter.author},</small>
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.excerpt}</p>
                  </div>
                  <Link to={`/the-sylvan-stoop-blog/${post.slug}`}> Read </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export const pageQuery = graphql`
  query AllActiveBlogs {
    blog: allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      posts: nodes {
        slug
        excerpt(pruneLength: 160)
        frontmatter {
          date(fromNow: true)
          title
          author
          published
        }
        id
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.shape({
    blog: PropTypes.shape({
      posts: PropTypes.array,
    }),
  }),
};
