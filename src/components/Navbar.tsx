import * as React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Navbar.less';

export function NavigationBar(props: any) {
  const { navItems, logoUrl, companyName } = props;
  console.log(props);
  return (
    <nav className="navbar navbar-expand-sm font-over-dark bg-color-regular">
      <ul className="navbar-nav col-sm-5 font-weight-bolder">
        {makeNavbarFromProps(navItems)}
      </ul>
      <a href="" className="navbar-brand col-sm-3">
        <img src={logoUrl} alt={companyName} className="logo" />
      </a>
    </nav>
  );
}

function makeNavbarFromProps(props: string[]) {
  return props.map((c: string) => {
    return (
      <li className="nav-item" key={c}>
        <a className="nav-link">{c}</a>
      </li>
    );
  });
}
