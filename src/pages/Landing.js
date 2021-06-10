import React from 'react';
// import { Row } from 'react-materialize';
import bannerImg from '../images/landing_banner.jpeg';
import '../styles/pages/_landing.scss';

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="banner-img-wrapper">
        <img src={bannerImg} alt="dad with kids" />
      </div>
    </div>
  );
}
