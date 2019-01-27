import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './authorOfTheDay.css';

const defineAuthors = (authors) => {
  const date = new Date();
  const currentDate = date.getDate();
  const authorsCount = authors.length;
  const currentAuthorsIndex = currentDate % authorsCount;
  return authors[currentAuthorsIndex];
};

const AuthorOfTheDay = ({ authorsInfo }) => {
  const author = defineAuthors(authorsInfo);
  const authorsPhoto = author.titleImage;
  const authorsName = `${author.firstName} ${author.lastName}`;
  const address = `/authorPage/${author.firstName}/${author.lastName}`;

  return (
    <div className="author-of-the-day">
      <h2>Author of the day</h2>
      <Link className="author-link" key={author.firstName + author.lastName} to={address}>
        <img src={authorsPhoto} alt={authorsName} />
        <span>{authorsName}</span>
      </Link>
    </div>
  );
};

AuthorOfTheDay.propTypes = {
  authorsInfo: PropTypes.arrayOf(PropTypes.object),
};

AuthorOfTheDay.defaultProps = {
  authorsInfo: [],
};

export default AuthorOfTheDay;
