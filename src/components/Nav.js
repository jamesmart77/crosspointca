import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon, Dropdown } from 'react-materialize';
import '../styles/components/_nav.scss';

export default function Nav() {
  const brand = <Link to="/">CrossPoint Christian Academy</Link>;

  return (
    <Navbar
      alignLinks="right"
      brand={brand}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
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
        trigger={<span>About Us{' '}<Icon right>arrow_drop_down</Icon></span>}
      >
        <Link to="/">
          Mission
        </Link>
        <Link to="/">
          Vision
        </Link>
        <Link to="/">
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
        trigger={<span>Resources{' '}<Icon right>arrow_drop_down</Icon></span>}
      >
        <Link to="/">
          Statement of Faith
        </Link>
        <Link to="/">
          Enrollment
        </Link>
        <Link to="/">
          University Model
        </Link>
      </Dropdown>
      <NavItem href="/">
        Contact Us
      </NavItem>
    </Navbar>
  )
}
