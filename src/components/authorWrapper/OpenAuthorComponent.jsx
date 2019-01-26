import React from 'react';
import PropTypes from 'prop-types';
import AuthorPage from '../authorPage/AuthorPage';

function OpenAuthorComponent({ authors, firstName, lastName }) {
  const selected = authors.filter(author => (
    author.firstName === firstName && author.lastName === lastName
  ))[0];
  return <AuthorPage info={selected} />;
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
