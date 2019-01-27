import React from 'react';
import PropTypes from 'prop-types';
import TimeLine from '../timeLine/TimeLine';
import AuthorCutaway from '../authorCutaway/AuthorCutaway';
import AuthorWorks from '../authorWorks/AuthorWorks';
import './authorPage.css';
import PhotoGallery from '../photoGallery/PhotoGallery';
import VideoOverlay from '../videoOverlay/VideoOverlay';
import GoogleMapComponent from '../googleMaps/GoogleMapComponent';

const AuthorPage = ({ info }) => (
  <div className="author-page">
    <AuthorCutaway firstName={info.firstName} lastName={info.lastName} avatar={info.titleImage} />
    <AuthorWorks works={info.works} />
    <TimeLine className="timeline" info={info.timeline} />
    <PhotoGallery photos={info.images} />
    <VideoOverlay video={info.videos} videosnap={info.videosnap} />
    <div className="map-component">
      <GoogleMapComponent info={info.locations} />
    </div>
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
