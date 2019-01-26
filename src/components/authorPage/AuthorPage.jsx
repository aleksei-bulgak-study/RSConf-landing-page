import React from 'react';
import PropTypes from 'prop-types';
import TimeLine from '../timeLine/TimeLine';
import AuthorCutaway from '../authorCutaway/AuthorCutaway';
import AuthorWorks from '../authorWorks/AuthorWorks';
import './authorPage.css';
import click from './overlay';

const AuthorPage = ({ info }) => (
  <div className="author-page">
    <AuthorCutaway firstName={info.firstName} lastName={info.lastName} avatar={info.titleImage} />
    <AuthorWorks works={info.works} />
    <TimeLine className="timeline" info={info.timeline} />
    <div className="photo-list">photo-list</div>
    <div className="video-list">
      <img className="videosnap" alt="snap" src="#" onClick={click}/>
      <div className="video-overlay"></div>
      <div className="video-video"></div>
    </div>
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
