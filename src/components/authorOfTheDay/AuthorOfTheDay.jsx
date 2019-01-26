import React from 'react';
import PropTypes from 'prop-types';
import './authorOfTheDay.css';

const defineAuthors = (authors) => {
  const date = new Date();
  const currentDate = date.getDate();
  const autorsCount = authors.length;
  const currentAutorsIndex = currentDate % autorsCount;
  return authors[currentAutorsIndex];
};

const AuthorOfTheDay = ({ authorsInfo }) => {
  const author = defineAuthors(authorsInfo);
  const authorsPhoto = author.titleImage;
  const authorsName = `${author.firstName} ${author.lastName}`;
  return (
    <div>
      <h2>AuthorOfTheDay</h2>
      <p>AuthorOfTheDay</p>
      <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
      </ol>
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
