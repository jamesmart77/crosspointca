import React from 'react';
// import { Link } from 'react-router-dom';
import { Footer as FooterComponent } from 'react-materialize';
import '../styles/components/_footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <FooterComponent
      className="footer-container"
      copyrights={<span>&copy; {year} crosspointca.com</span>}
      links={
        <ul>
          <li>
            <a href="/MissionVision.pdf" rel="noreferrer noopener" className="link secondary">
              Mission & Vision
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">FAQs</a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">UMS Info</a>
          </li>
        </ul>
      }
      moreLinks={<a className="grey-text text-lighten-4 right" href="#!">Donate to Fundraising</a>}
    >
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
    </FooterComponent>
  )
}
