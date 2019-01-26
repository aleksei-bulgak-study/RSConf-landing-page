function click() {
  const overlay = document.querySelector('.video-overlay');
  const video = document.querySelector('.video-video');
  overlay.style.display = 'block';
  video.style.display = 'block';
  video.innerHTML = '<iframe width=560 height=315 src=https://www.youtube.com/embed/OMOga8x6aLk frameborder=0 allowfullscreen></iframe>';
  const closeVideo = () => {
    document.removeEventListener('click', closeVideo);
    overlay.style.display = 'none';
    video.style.display = 'none';
    video.innerHTML = '';
  };

  document.addEventListener('click', closeVideo);
}

export default click;
