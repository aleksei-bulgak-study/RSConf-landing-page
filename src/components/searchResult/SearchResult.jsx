import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './searchResult.css';

const SearchResult = ({ authors }) => (
  <div className="search-results">
    <ul>
      {
        authors.map((author) => {
          const address = `/authorPage/${author.firstName}/${author.lastName}`;
          const text = `${author.firstName} ${author.lastName}`;
          return (
            <li key={address}>
              <Link
                className="search-results__link"
                key={author.firstName + author.lastName}
                to={address}
              >
                {text}
              </Link>
            </li>
          );
        })
      }
    </ul>
  </div>
);

SearchResult.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResult;
