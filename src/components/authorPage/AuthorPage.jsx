import React from 'react';
import './authorPage.css';
import click from './overlay';

const AuthorPage = () => {
  return (
    <div className="author-page">
      <div className="author-image">Image</div>
      <div className="list-of-works">list of works</div>
      <div className="timeline">Timeline</div>
      <div className="photo-list">photo-list</div>
      <div className="video-list">
        <img className="videosnap" alt="snap" src="#" onClick={click}/>
        <div className="video-overlay"></div>
        <div className="video-video"></div>
      </div>
      <div className="map-component">map-component</div>
    </div>
  )
};
export default AuthorPage;
