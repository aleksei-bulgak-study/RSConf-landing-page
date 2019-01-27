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
    <section className="about-us">
      <div className="center-content">
        <h2>Our project team</h2>
        <ul className="our-developers">{generateDevelopers(DEVELOPERS)}</ul>
      </div>
    </section>
  );
};

export default AboutUs;
