import React from 'react';
import PropTypes from 'prop-types';

const ArticleSearch = ({ searchArticle, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label display="search-article">Search Bar: </label>
      <input
        id="search-article"
        type="text"
        name="text"
        placeholder="type keyword"
        value={searchArticle}
        onChange={onChange}
      />
      <button name="browse">🔎 Browse Articles</button>
    </form>
  );
};

ArticleSearch.propTypes = {
  searchArticle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ArticleSearch;
