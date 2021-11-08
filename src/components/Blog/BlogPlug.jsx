import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const BlogPlug = () => {
  return (
    <section id="blogplug">
      <Container>
        <Title title="Our Blog" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="blogplug-wrapper">
            <h2 className="blogplug-wrapper__text">
              <b> The Sylvan Stoop</b>
            </h2>
            <h3 className="blogplug-wrapper__text">
              <i> Stories about how to work with data and get results </i>
            </h3>
            <Link to="/the-sylvan-stoop-blog" className="cta-btn cta-lnk--blog">
              Read Now
            </Link>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default BlogPlug;
