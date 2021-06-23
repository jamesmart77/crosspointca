import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon, Dropdown } from 'react-materialize';
import logo from '../images/logo.png';
import '../styles/components/_nav.scss';

export default function Nav() {
  const brand = <Link to="/">
    <img src={logo} alt="logo" />
    CrossPoint Christian Academy
  </Link>;

  return (
    <Navbar
      alignLinks="right"
      brand={brand}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: false,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <Dropdown
        id="about-us-id"
        options={{
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: false,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
        }}
        trigger={
          <span className="dropdown-option">
            About Us
            <Icon right>arrow_drop_down</Icon>
          </span>}
      >
        <a href="/MissionVision.pdf" rel="noreferrer noopener" className="link resource-item">
          Mission & Vision
        </a>
        <span to="/" className="link disabled resource-item" title="Coming soon!">
          Our Story <small>(coming soon)</small>
        </span>
      </Dropdown>
      <Dropdown
        id="resources-id"
        options={{
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: false,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
        }}
        trigger={
          <span className="dropdown-option">
            Resources
            <Icon right>arrow_drop_down</Icon>
          </span>}
      >
        <a href="/StatementOfFaith.pdf" target="_blank" rel="noreferrer noopener" className="link resource-link">
          Statement of Faith
        </a>
        <a href="/UniversityModelSchool.pdf" target="_blank" rel="noreferrer noopener" className="link resource-link">
          What is a University Model School?
        </a>
        <a href="/FAQs.pdf" target="_blank" rel="noreferrer noopener" className="link resource-link">
          FAQs
        </a>
        <span to="/" className="link disabled resource-item">
          Enrollment <small>(coming soon)</small>
        </span>
      </Dropdown>
      <Link to="/contactUs" className="contact-link">
        Contact Us
      </Link>
    </Navbar>
  )
}
