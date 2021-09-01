import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// https://markoskon.com/change-the-url-of-posts-in-gatsby/

export const Header = ({ siteTitle }) => (
  <header id="header">
    <div aria-hidden />

    <nav className="header-nav">
      <div className="header-navLeftButtons">
        <Link to="/the-sylvan-stoop-blog/" className="lnk-blogname-left lnk lnk--blog">
          The Sylvan Stoop
        </Link>
      </div>

      <div className="header-navCenter">
        <Link to="/" className="header-navCenter">
          {siteTitle}
        </Link>
      </div>

      <div className="header-navRightButtons">
        <Link to="/" className="lnk-home lnk lnk--blog">
          Home
        </Link>
        <Link to="/about/" className="lnk-about lnk lnk--blog">
          About
          {/* A page about The Sylvan Stoop */}
        </Link>
        <Link to="/contact/" className="lnk-contact lnk lnk--blog">
          Contact
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
};
