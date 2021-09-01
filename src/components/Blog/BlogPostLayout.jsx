import React from 'react';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { Header } from './BlogHeader';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <section id="blogpost">{children}</section>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.shape({}),
};
