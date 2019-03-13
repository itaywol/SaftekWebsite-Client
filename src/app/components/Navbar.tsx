import * as React from 'react';
import * as RBS from "react-bootstrap";
import "../../assets/scss/Navbar.scss";

const humbergerSVG = require("../../assets/img/humburger.svg")

export default class Navbar extends React.Component {
  render() {
    return (
      <RBS.Navbar className="custom-nav" expand="sm" variant="dark" bg="custom">
        <RBS.NavbarBrand href="#home" className="">Saftek</RBS.NavbarBrand>
        <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <RBS.Navbar.Collapse id="responsive-navbar-nav">
          <RBS.Nav className="mr-auto">
          <RBS.Nav.Link href="#features">Features</RBS.Nav.Link>
      <RBS.Nav.Link href="#pricing">Pricing</RBS.Nav.Link>
          </RBS.Nav>
        </RBS.Navbar.Collapse>
      </RBS.Navbar>
    );
  }
}
