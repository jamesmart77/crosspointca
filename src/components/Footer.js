import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../images/logo_w_words.png';
import '../styles/components/_footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="page-footer footer-container">
      <div className="container">
        <div className="row">
          <div className="col m6 s12 section-col">
            <h5 className="white-text">
              Connect with Us
            </h5>
            <p className="grey-text text-lighten-4">
              <a 
                className="link secondary"
                href="mailto:crosspointchristianacademy@gmail.com"
                rel="noreferrer noopenner"
                target="_blank"
              >
                CrossPointChristianAcademy@gmail.com
              </a>
            </p>
            <p>
              <img src={logo} alt="logo" className="footer-logo" />
            </p>
          </div>
          <div className="col m4 offset-m2 s12 section-col">
            <h5 className="white-text">Quick Links</h5>
            <ul>
              <li>
                <a href="/MissionVision.pdf" rel="noreferrer noopener" className="link secondary">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="/FAQs.pdf" rel="noreferrer noopener" className="link secondary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/UniversityModelSchool.pdf" rel="noreferrer noopener" className="link secondary">
                  University Model School Info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <span>&copy; {year} crosspointca.com</span>
          <a className="grey-text text-lighten-4 right" href="#!">Donate to Fundraising</a>
        </div>
      </div>
    </footer>
  )
}
