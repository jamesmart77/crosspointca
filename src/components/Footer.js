import React from 'react';
import ReactTooltip from 'react-tooltip';
import logo from '../images/logo_w_words.png';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
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
                <a href="/MissionVision.pdf" rel="noreferrer noopener" target="_blank" className="link secondary">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="/FAQs.pdf" rel="noreferrer noopener" target="_blank" className="link secondary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/UniversityModelSchool.pdf" target="_blank" rel="noreferrer noopener" className="link secondary">
                  University Model School Info
                </a>
              </li>
              <li className="social-wrapper">
                <a 
                  href="https://www.facebook.com/CrossPointCA" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="social-link"
                >
                  <img src={facebook} alt="facebook circle" className="social-icon" />
                </a>
                <a 
                  href="https://www.instagram.com/crosspointchristianacademy" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="social-link"
                >
                  <img src={instagram} alt="instagram circle" className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <span>&copy; {year} crosspointca.com</span>
          <ReactTooltip id="donate-tip">Thanks for considering! We're still working on getting this setup, but it should be soon!</ReactTooltip>
          <span data-tip data-for="donate-tip" className="link disabled grey-text text-lighten-4 right">Donate to Fundraising</span>
        </div>
      </div>
    </footer>
  )
}
