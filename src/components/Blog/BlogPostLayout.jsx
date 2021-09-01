import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { Header } from './BlogHeader';
import Footer from '../Footer/Footer';
import { PortfolioProvider } from '../../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../../content/data';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

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
        <section id="blogpost">{children}</section>
        <Footer />
      </PortfolioProvider>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.shape({}),
};
