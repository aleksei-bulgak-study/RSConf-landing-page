import React from 'react';
import PropTypes from 'prop-types';
import AuthorOfTheDay from '../authorOfTheDay/AuthorOfTheDay';
// import AuthorPage from '../authorPage/AuthorPage';

function OpenAuthorComponent({ authors, firstName, lastName }) {
  const selected = authors.filter(author => (
    author.firstName === firstName && author.lastName === lastName
  ));
  return <AuthorOfTheDay authorsInfo={selected} />;
}

OpenAuthorComponent.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object),
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

OpenAuthorComponent.defaultProps = {
  authors: [],
};

export default OpenAuthorComponent;
