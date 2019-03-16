import * as React from 'react';
import { BsPrefixComponent } from 'react-bootstrap/helpers';
import './scss/Navbar.scss';
import NavbarBrand from './NavbarBrand';
import NavMenu from './NavMenu';

export enum ExpandSizes {
  sm,
  md,
  lg,
  xl,
}

export enum AngledTypes {
  none,
  left,
  right,
}

export interface NavbarProps {
  expandable?: boolean;
  expandAt?: ExpandSizes;
  className?: string;
  angled?: AngledTypes;
}

class NavbarContainer extends React.Component<NavbarProps, {}> {
  constructor(props) {
    super(props);
  }
  public static defaultProps = {
    className: 'navbar-container',
    expandable: false,
    expandAt: ExpandSizes.md,
    angled: AngledTypes.none,
  };

  render() {
    return (
      <nav className={this.buildClassString(this.props)}>
        <NavbarBrand brandName="SAFTEK" />
        <NavMenu MenuItems={['home', 'About', 'products']} />
      </nav>
    );
  }

  buildClassString(props: NavbarProps): string {
    var exportedClassName: string;
    exportedClassName = 'navbar-container ' + props.className;
    if (props.expandable) {
      exportedClassName += ' expand-' + ExpandSizes[props.expandAt];
    }
    if (props.angled !== AngledTypes.none) {
      exportedClassName += ' angled-' + AngledTypes[props.angled];
    }

    return exportedClassName;
  }
}

export default NavbarContainer;
