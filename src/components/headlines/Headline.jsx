import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ title, urlToImage, description, url }) => {
  return (
    <figure>
      <img src={urlToImage} alt={title} />
      <figcaption>
        <p>{title}</p>
        <p>{description}</p>
        <p>{url}</p>
      </figcaption>
    </figure>
  );
};

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default Headline;
