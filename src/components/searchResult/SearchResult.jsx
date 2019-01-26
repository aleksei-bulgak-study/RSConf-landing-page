import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AuthorOfTheDay from '../authorOfTheDay/AuthorOfTheDay';
import './searchResult.css';

const SearchResult = ({ authors }) => (
  <Router>
    <React.Fragment>
      {
        authors.map((author) => {
          const address = `/author_${author.firstName}_${author.lastName}`;
          return (
            <Link
              key={author.firstName + author.lastName}
              to={address}
            >
              {author.firstName}
              {author.lastName}
            </Link>
          );
        })
      }

      <Route
        path="/author_:id"
        component={params => <OpenAuthorComponent authors={authors} id={params.match.params.id} />}
      />
    </React.Fragment>
  </Router>
);

function OpenAuthorComponent({ authors, id }) {
  const selected = authors.filter(author => `${author.firstName}_${author.lastName}` === id);
  return <AuthorOfTheDay authorsInfo={selected} />;
}

OpenAuthorComponent.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string.isRequired,
};

OpenAuthorComponent.defaultProps = {
  authors: [],
};

SearchResult.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResult;
