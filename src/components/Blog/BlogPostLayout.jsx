import React from 'react';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { Header } from './Header';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <section id="blogpost">{children}</section>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.shape({}),
};
