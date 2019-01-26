import React from 'react';
import Developer from '../developer/Developer';
import { DEVELOPERS } from '../../constants/constants';
import './aboutUs.css';

const AboutUs = () => {
  const generateDevelopers = devInfo => devInfo.map((dev, index) => {
    const { avatar, name, nickname } = dev;
    const key = name.slice(2) + nickname.slice(3) + index;
    return <Developer avatar={avatar} name={name} nickname={nickname} key={key} />;
  });

  return (
    <div className="about-us">
      <h2>Our project team</h2>
      <div className="our-developers">{generateDevelopers(DEVELOPERS)}</div>
    </div>
  );
};

export default AboutUs;
