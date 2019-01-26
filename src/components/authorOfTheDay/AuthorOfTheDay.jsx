import React from 'react';
import PropTypes from 'prop-types';
import './authorOfTheDay.css';

const AuthorOfTheDay = ({ autorsInfo }) => {
  const autorsCount = autorsInfo.length();
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
  autorsInfo: PropTypes.arrayOf(PropTypes.obj),
};

AuthorOfTheDay.defaultProps = {
  autorsInfo: [],
};

export default AuthorOfTheDay;
