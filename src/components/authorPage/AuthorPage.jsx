import React from 'react';
import PropTypes from 'prop-types';
import TimeLine from '../timeLine/TimeLine';
import AuthorCutaway from '../authorCutaway/AuthorCutaway';
import AuthorWorks from '../authorWorks/AuthorWorks';
import './authorPage.css';

const AuthorPage = ({ info }) => (
  <div className="author-page">
    <AuthorCutaway firstName={info.firstName} lastName={info.lastName} avatar={info.titleImage} />
    <AuthorWorks works={info.works} />
    <TimeLine className="timeline" info={info.timeline} />
    <div className="photo-list">photo-list</div>
    <div className="video-list">video-list</div>
    <div className="map-component">map-component</div>
  </div>
);

AuthorPage.propTypes = {
  info: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    titleImage: PropTypes.string,
  }),
};

AuthorPage.defaultProps = {
  info: {},
};

export default AuthorPage;
