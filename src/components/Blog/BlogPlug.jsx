import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const BlogPlug = () => {
  return (
    <section id="blogplug">
      <Container>
        <Title title="Blog" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">Want to learn more? Read my blog!</p>
            <Link to="/blog" className="cta-lnk cta-lnk--blog">
              Read my blog
            </Link>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default BlogPlug;
