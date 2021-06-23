import React from 'react';
import { Link } from 'react-router-dom';
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
            <h2 className="header">Partnering with Parents</h2>
            <h6 className="sub-header">
              Train up a child in the way he should go; even when he is old he will not depart from it. <small>Pr 22:6</small>
            </h6>
            <Link to="/contactUs">
              <Button className="primary-btn connect-btn" waves="light">
                Connect With Us
              </Button>
            </Link>
          </div>
        </Fade>
      </div>
      <Row className="card-row">
        <Col l={4} s={10} offset="s1" className="card-col">
          <Card 
            title="Mission"
            description="Combine attributes of traditional schooling and homeschooling to create a single model. 
              The result is a quality, cost-effective education that gives parents more time for imparting their 
              own faith and values to their children."
            descriptionStyle={{height: "7rem"}}
            iconType="map"
            action={
              <Button 
                className="secondary-btn action-btn"
                href="/MissionVision.pdf"
                node="a"
                waves="light"
              >
                Learn More
              </Button>
            }
          />
        </Col>
        <Col l={4} s={10} offset="s1" className="card-col">
          <Card 
            title="Vision"
            description="That our children will be mature followers of Jesus Christ who exhibit a Christ-like 
              character, passionately pursue learning, to the glory of God."
            iconType="local_library"
            action={
              <Button 
                className="secondary-btn action-btn"
                href="/MissionVision.pdf"
                node="a"
                waves="light"
              >
                Learn More
              </Button>
            }
          />
        </Col>
        <Col l={4} s={10} offset="s1" className="card-col">
          <Card 
            title="Enrollment"
            description="We are looking to open the school for Fall 2022. Interested in learning more?"
            descriptionStyle={{height: "7rem"}}
            iconType="bookmark"
            action={
              <Link to="/contactUs">
                <Button className="secondary-btn connect-btn" waves="light">
                  Connect With Us
                </Button>
              </Link>
            }
          />
        </Col>
      </Row>
    </div>
  );
}
