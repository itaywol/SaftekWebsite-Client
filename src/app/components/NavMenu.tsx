import * as React from 'react';
import NavLink from './NavLink';
export interface NavMenuProps {
  MenuItems: string[];
}
const NavMenu = (NavMenuProps: NavMenuProps) => {
  return (
    <ul>
      {NavMenuProps.MenuItems.map((c: string) => {
        return <NavLink innerText={c} url={c} key={c} />;
      })}
    </ul>
  );
};

export default NavMenu;
