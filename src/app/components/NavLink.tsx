import * as React from 'react';
export interface NavLinkProps {
  url: string;
  innerText: string;
}

function NavLink(props: NavLinkProps) {
  return (
    <li>
      <a href={'#' + props.url} className="nav-link">
        {props.innerText}
      </a>
    </li>
  );
}

export default NavLink;
