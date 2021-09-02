/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Layout from './BlogPostLayout';
import '../../style/main.scss';

import ExternalLink from '../Mdx/ExternalLink';

deckDeckGoHighlightElement();

const components = {
  // eslint-disable-next-line react/prop-types
  ExternalLink: ({ children, href, ...props }) => (
    <ExternalLink href={href} {...props}>
      {children}
    </ExternalLink>
  ),
};

export default function BlogPost({ data }) {
  const post = data.blog;
  return (
    <Layout>
      <h1 className="blogpost-h1"> {post.frontmatter.title}</h1>
      <div className="blogpost-wrapper">
        <MDXRenderer components={components} className="blogpost-wrapper">
          {post.body}
        </MDXRenderer>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    blog: mdx(slug: { eq: $slug }) {
      body
      excerpt
      frontmatter {
        title
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    blog: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      body: PropTypes.string,
    }),
  }),
};
