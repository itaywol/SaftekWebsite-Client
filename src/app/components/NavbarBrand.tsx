import * as React from 'react';
import './scss/NavbarBrand.scss';

export interface NavbarBrandProps {
  url?: string;
  className?: string;
  brandName: string;
}

export default class NavbarBrand extends React.Component<NavbarBrandProps> {
  constructor(props) {
    super(props);
  }

  public static defaultProps = {
    className: 'navbar-brand',
  };

  render() {
    if (this.props.url) {
      return this.makeLink(this.props.url);
    } else {
      return this.makeLink('#' + this.props.brandName);
    }
  }

  makeLink = (url: string) => {
    return (
      <a href={url.toLowerCase()} className={this.props.className}>
        {this.props.brandName}
      </a>
    );
  };
}
