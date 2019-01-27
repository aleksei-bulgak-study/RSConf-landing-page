import React from 'react';
import PropTypes from 'prop-types';
import TimeLine from '../timeLine/TimeLine';
import AuthorCutaway from '../authorCutaway/AuthorCutaway';
import AuthorWorks from '../authorWorks/AuthorWorks';
import './authorPage.css';
import click from './overlay';
import PhotoGallery from '../photoGallery/PhotoGallery';
import GoogleMapComponent from '../googleMaps/GoogleMapComponent';

const photos = [
  'http://catalog.library.mogilev.by/kray/Culture/photo/r5p15_1.jpg',
  'https://i.livelib.ru/boocover/1002164588/200/6ffd/Ya%D1%9Egen_Guchok__Algerd_Abuhovich._Zacharavany_belaruskim_slovam.jpg',
];

const AuthorPage = ({ info }) => (
  <div className="author-page">
    <AuthorCutaway firstName={info.firstName} lastName={info.lastName} avatar={info.titleImage} />
    <AuthorWorks works={info.works} />
    <TimeLine className="timeline" info={info.timeline} />
    <div className="photo-list"><PhotoGallery photos={photos} /></div>
    <div className="video-list">
      <img className="videosnap" alt="snap" src="#" onClick={click} />
      <div className="video-overlay" />
      <div className="video-video" />
    </div>
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
