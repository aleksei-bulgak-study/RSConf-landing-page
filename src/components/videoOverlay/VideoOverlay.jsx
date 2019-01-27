import React from 'react';
import { PropTypes } from 'prop-types';
import './videoOverlay.css';

const VideoOverlay = ({ video, videosnap }) => {
  function click() {
    const overlay = document.querySelector('.video-overlay');
    const videoContainer = document.querySelector('.video-video');
    overlay.style.display = 'block';
    videoContainer.style.display = 'block';
    videoContainer.innerHTML = `<iframe width=560 height=315 src=${video} frameborder=0 allowfullscreen></iframe>`;
    const closeVideo = () => {
      document.removeEventListener('click', closeVideo);
      overlay.style.display = 'none';
      videoContainer.style.display = 'none';
      videoContainer.innerHTML = '';
    };

    document.addEventListener('click', closeVideo);
  }
  return (
    <div className="video-list">
      <img className="videosnap" alt="" src={videosnap} onClick={click} />
      <div className="video-overlay" />
      <div className="video-video" />
    </div>
  );
};

VideoOverlay.propTypes = {
  video: PropTypes.string,
  videosnap: PropTypes.string,
};

VideoOverlay.defaultProps = {
  video: 'https://www.youtube.com/',
  videosnap: '',
};

export default VideoOverlay;
