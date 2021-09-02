import React, { useState, useEffect } from 'react';
import { graphql, Link, useScrollRestoration } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { Header } from '../components/Blog/BlogHeader';
import Footer from '../components/Footer/Footer';
import BlogImg from '../components/Blog/BlogImage';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../content/data';
import '../style/main.scss';

const PostCards = ({ posts, totalCount, cardsPerRow }) => {
  let cardArray = [];
  const img = 'profile.jpg';
  const imageTitle = 'sample image';
  let postCounter = totalCount + 1;
  let CardRow = null;
  const finalArray = [];

  posts.forEach((post) => {
    postCounter -= 1;
    cardArray.push(
      <article key={post.id} className="bloghome-card--wrapper">
        <div className="blog_post">
          <div className="img_pod">
            <BlogImg alt={imageTitle} filename={img} />
          </div>
          <div className="container_copy">
            <h3> Post #{postCounter}</h3>
            <h4>{post.frontmatter.date}</h4>
            <h4>{post.frontmatter.author}</h4>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.excerpt}</p>
          </div>
          <Link to={`/the-sylvan-stoop-blog/${post.slug}`} className="btn_primary">
            Read
          </Link>
        </div>
      </article>
    );

    if (cardArray.length === cardsPerRow || postCounter === 1) {
      CardRow = <Row>{cardArray.map((Post) => Post)}</Row>;
      finalArray.push(CardRow);
      cardArray = [];
    }
  });

  return <>{finalArray.map((row) => row)}</>;
};

export default function Blog({ data }) {
  const { posts, pageInfo } = data.blog;
  const [state, setState] = useState({ posts, pageInfo });
  const { title, description } = useSiteMetadata();
  const ulScrollRestoration = useScrollRestoration(`page-component-ul-list`);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const searchResult = posts.filter((post) => {
      const { description: desc, title: ttl } = post.frontmatter;
      const regex = new RegExp(`${searchTerm}`, 'g');

      if (
        (desc && desc.toLowerCase().match(regex)) ||
        (ttl && ttl.toLowerCase().match(regex)) ||
        (post.excerpt && post.excerpt.toLowerCase().match(regex)) ||
        searchTerm === ''
      ) {
        return true;
      }

      return false;
    });

    setState({ ...state, posts: searchResult, pageInfo: { totalCount: searchResult.length } });
  }, [searchTerm]);

  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <>
      <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
        <Header siteTitle={title} siteDescription={description} />

        <section id="bloghome">
          <Container className="bloghome-container-wrapper" {...ulScrollRestoration}>
            <Row>
              <Col>
                <div className="bloghome-searchbar-wrapper">
                  <h3 className="label"> Search Blog </h3>
                  <input
                    type="text"
                    placeholder="Type to filter posts..."
                    className="input"
                    onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}
                  />
                </div>
              </Col>
            </Row>
            <Row className="bloghome-post-wrapper">
              <Col>
                {state.pageInfo.totalCount > 0 ? (
                  <PostCards
                    posts={state.posts}
                    totalCount={state.pageInfo.totalCount}
                    cardsPerRow={2}
                  />
                ) : (
                  <h3 className="noPostsFound"> No Posts Found </h3>
                )}
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </PortfolioProvider>
    </>
  );
}

export const pageQuery = graphql`
  query AllActiveBlogs {
    blog: allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      posts: nodes {
        slug

        excerpt(pruneLength: 160)
        frontmatter {
          date(fromNow: true)
          title
          author
          description
          published
        }
        id
      }
      pageInfo {
        totalCount
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.shape({
    blog: PropTypes.shape({
      posts: PropTypes.arrayOf(PropTypes.object),
      pageInfo: PropTypes.shape({
        totalCount: PropTypes.number,
      }),
    }),
  }),
};

PostCards.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  totalCount: PropTypes.number,
  cardsPerRow: PropTypes.number,
};
