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
      <Row className="card-row">
          <Col l={4} s={10} offset="s1" className="card-col">
            <Card 
              title="Mission"
              description="Partner with parents to help provide a quality eduction producing wholesome, 
              competent people of character who make a positive difference for Christ in the next generation."
              descriptionStyle={{height: "7rem"}}
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
              description="Provide a University Model School®, incorporating the most beneficial aspects of public 
              schooling with the pivotal components of homeschooling, with lessons and grading by qualified educators 
              in a hybrid schedule between school and home."
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
              action={
                <Button 
                  className="secondary-btn action-btn"
                  href="mailto:crosspointchristianacademy@gmail.com"
                  node="a"
                  waves="light"
                >
                  Connect With Us
                </Button>
              }
            />
          </Col>
        {/* </Fade> */}
      </Row>
    </div>
  );
}
