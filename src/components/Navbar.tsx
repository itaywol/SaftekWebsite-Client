import * as React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import * as ReactBS from '../../node_modules/react-bootstrap/';

export function NavigationBar(props: any) {
  return <React.Fragment>{makeCollapsableResponsiveNav(props)}</React.Fragment>;
}

function makeCollapsableResponsiveNav(props: any) {
  const { navItems, logoUrl, companyName, userForm } = props;
  return (
    <ReactBS.Navbar
      collapseOnSelect={true}
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <ReactBS.NavbarBrand href="#">
        <h2>{companyName}</h2>
      </ReactBS.NavbarBrand>
      <ReactBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBS.Navbar.Collapse>
        <ReactBS.Nav>{makeNavbarFromProps(navItems)}</ReactBS.Nav>
        {makeUserForm(userForm)}
      </ReactBS.Navbar.Collapse>
    </ReactBS.Navbar>
  );
}

function makeNavbarFromProps(props: string[]) {
  return props.map((c: string) => {
    return (
      <ReactBS.NavItem key={c}>
        <ReactBS.Nav.Link className="nav-link" href={'#' + c}>
          {c}
        </ReactBS.Nav.Link>
      </ReactBS.NavItem>
    );
  });
}

function makeUserForm(userForm: boolean) {
  if (userForm) {
    return (
      <ReactBS.Nav>
        <ReactBS.NavItem>
          <ReactBS.Nav.Link href="#login">Login</ReactBS.Nav.Link>
        </ReactBS.NavItem>
        <ReactBS.NavItem>
          <ReactBS.Nav.Link href="#Register">Register</ReactBS.Nav.Link>
        </ReactBS.NavItem>
      </ReactBS.Nav>
    );
  }
}
