import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.shape({}),
};

export default ExternalLink;
