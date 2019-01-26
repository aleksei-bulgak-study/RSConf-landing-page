import React from 'react';
import PropTypes from 'prop-types';
import './authorOfTheDay.css';

const defineAuthors = (authors) => {
  const date = new Date();
  const currentDate = date.getDate();
  const autorsCount = authors.length;
  const currentAutorsIndex = currentDate % autorsCount;
  return authors[currentAutorsIndex - 1];
};

const AuthorOfTheDay = ({ authorsInfo }) => {
  const author = defineAuthors(authorsInfo);
  const authorsPhoto = author.titleImage;
  const authorsName = `${author.firstName} ${author.lastName}`;

  return (
    <div className="autor-of-the-day">
      <h2>Author of the day</h2>
      <a href={authorsPhoto}>
        <img src={authorsPhoto} alt={authorsName} />
        <span>{authorsName}</span>
      </a>
    </div>
  );
};

AuthorOfTheDay.propTypes = {
  authorsInfo: PropTypes.arrayOf(PropTypes.obj),
};

AuthorOfTheDay.defaultProps = {
  authorsInfo: [],
};

export default AuthorOfTheDay;
