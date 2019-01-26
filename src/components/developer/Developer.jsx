import React from 'react';
import PropTypes from 'prop-types';
import './developer.css';

const Developer = ({ avatar, name, nickname }) => (
  <div className="developer">
    <a href={`https://github.com/${nickname}`} target="_blank" rel="noopener noreferrer">
      <img src={avatar} alt={name} width={200} height={200} />
      <span>{name}</span>
    </a>
  </div>
);

Developer.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  nickname: PropTypes.string,
};

Developer.defaultProps = {
  avatar: 'https://avatars2.githubusercontent.com/u/31645920?s=400&v=4',
  name: 'Developer',
  nickname: '',
};

export default Developer;
