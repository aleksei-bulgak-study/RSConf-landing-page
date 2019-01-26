import React from 'react';
import './authorPage.css';
import PhotoGallery from '../photoGallery/PhotoGallery';

const photos = [
  'http://catalog.library.mogilev.by/kray/Culture/photo/r5p15_1.jpg',
  'https://i.livelib.ru/boocover/1002164588/200/6ffd/Ya%D1%9Egen_Guchok__Algerd_Abuhovich._Zacharavany_belaruskim_slovam.jpg',
];

const AuthorPage = () => (
  <div className="author-page">
    <div className="author-image">Image</div>
    <div className="list-of-works">list of works</div>
    <div className="timeline">Timeline</div>
    <div className="photo-list"><PhotoGallery photos={photos} /></div>
    <div className="video-list">video-list</div>
    <div className="map-component">map-component</div>
  </div>
);
export default AuthorPage;
