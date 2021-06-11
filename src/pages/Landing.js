import React from 'react';
import { Row, Col, Button } from 'react-materialize';
import Card from '../components/landing/Card';
import { Fade } from 'react-awesome-reveal';
import bannerImg from '../images/landing_banner.jpeg';
import '../styles/pages/_landing.scss';

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="banner-wrapper" style={ {backgroundImage: `url(${bannerImg})`} }>
        <Fade 
          direction="bottom" 
          duration={1500} 
          childClassName="banner-child"
          triggerOnce
        >
          <div>
            <h2>Partnering with Parents</h2>
            <h5>Train up your children in the way he should go...</h5>
            <Button 
              className="primary-btn connect-btn"
              href="mailto:crosspointchristianacademy@gmail.com"
              node="a"
              waves="light"
            >
              Connect With Us
            </Button>
          </div>
        </Fade>
      </div>
      <Row>
        <Fade direction="left" cascade triggerOnce>
          <Col l={4} s={10} offset="s1">
            <Card 
              title="Mission"
              description="Something coming!"
            />
          </Col>
          <Col l={4} s={10} offset="s1">
            <Card 
              title="Vision"
              description="Something coming!"
            />
          </Col>
          <Col l={4} s={10} offset="s1">
            <Card 
              title="Admissions"
              description="Something coming!"
            />
          </Col>
        </Fade>
      </Row>
    </div>
  );
}
