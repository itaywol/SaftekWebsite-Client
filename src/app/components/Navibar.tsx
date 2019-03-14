import * as React from "react";
import * as RBS from "react-bootstrap";

import "../../assets/scss/Navbar.scss";

const humbergerSVG = require("../../assets/img/humburger.svg");

export default class Navibar extends React.Component {
  render() {
    return (
      <RBS.Navbar collapseOnSelect expand="md" variant="dark" bg="custom" className="custom-nav">
        <div className="container">
          <RBS.NavbarBrand href="#home" className="brand">
            SAFTEK
          </RBS.NavbarBrand>
          <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler" />
          <RBS.Navbar.Collapse id="responsive-navbar-nav">
            <RBS.Nav className="mr-auto">
              {this.props.items.map(c => {
                return (
                  <RBS.Nav.Link key={c} href={"#" + c}>
                    {c}
                  </RBS.Nav.Link>
                );
              })}
            </RBS.Nav>
          </RBS.Navbar.Collapse>
        </div>
      </RBS.Navbar>
    );
  }
}
