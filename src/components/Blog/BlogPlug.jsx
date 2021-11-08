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
            <p className="blogplug-wrapper__text">The Sylvan Stoop</p>
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
