import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import { Fade } from 'react-awesome-reveal';
import contactImg from '../images/contactUs.svg';
import '../styles/pages/_contact.scss';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="upper-section">
        <Container>
          <Row className="banner-row">
            <Col l={6} s={12}>
              <h4>Tell Us How We Can Help You</h4>
              <h6 className="header-text">
                Let us know any questions or comments you have by sending us a 
                message. Feel free to send an email too if you want to schedule
                an information session or are interested in enrollment at
                {' '}
                <a 
                  className="link"
                  href="mailto:CrossPointChristianAcademy@gmail.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >CrossPointChristianAcademy@gmail.com</a>
                </h6>
            </Col>
            <Col l={6} s={12} className="center-align">
              <img 
                src={contactImg} 
                alt="multi-media contact icons" 
                className="contact-img" 
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="lower-section">
        <Container>
          <Row>
            <Col s={12} className="center-align">
              <Fade bottom duration={500}>
                <div className="form-wrapper">
                  <iframe 
                    title="crosspoint-christain-academy-contact-form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdBVuExzGvtuCx7I6Z-5pSQ98uH4zTFbSJ-09kGo76CQELO5g/viewform?embedded=true" 
                    width="100%" 
                    height="750" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                  >
                    Loading…
                  </iframe>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
