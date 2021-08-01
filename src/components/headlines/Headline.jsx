import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ title, urlToImage, description, url, author}) => {
  return (
    <figure>
      <img src={urlToImage} alt={title} />
      <figcaption>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Source: {url}</p>
        <p>Author: {author}</p>
      </figcaption>
    </figure>
  );
};

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Headline;
