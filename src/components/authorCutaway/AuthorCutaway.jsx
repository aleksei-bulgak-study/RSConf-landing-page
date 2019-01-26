import React from 'react';
import PropTypes from 'prop-types';
import './authorCutaway.css';

const AuthorCutaway = ({ firstName, lastName, avatar }) => (
  <div className="autor-cutaway">
    <img className="author-avatar" src={avatar} alt={lastName} />
    <span>{`${firstName} ${lastName}`}</span>
  </div>
);

AuthorCutaway.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
};

AuthorCutaway.defaultProps = {
  firstName: '',
  lastName: '',
  avatar: '',
};

export default AuthorCutaway;
