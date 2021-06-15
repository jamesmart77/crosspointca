import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon, Dropdown } from 'react-materialize';
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
        <Link to="/" className="link resource-item">
          Our Story
        </Link>
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
        <Link to="/" className="link resource-item">
          Statement of Faith
        </Link>
        <Link to="/" className="link resource-item">
          Enrollment
        </Link>
        <a href="/UniversityModelSchool.pdf" rel="noreferrer noopener" className="link resource-link">
          What is a University Model School?
        </a>
        <a href="/FAQs.pdf" rel="noreferrer noopener" className="link resource-link">
          FAQs
        </a>
      </Dropdown>
      <NavItem
        href="mailto:crosspointchristianacademy@gmail.com"
        className="contact-item"
        title="Not seeing email? Look in footer section"
      >
        Contact Us
      </NavItem>
    </Navbar>
  )
}
