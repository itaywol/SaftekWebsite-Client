import { Component } from "react";
import "./NavigationBar.scss";
import { Link } from "react-router-dom";
import React = require("react");
import { JSXElement, JSXAttribute } from "@babel/types";

export interface NameAndUrl {
  name: string;
  url: string;
}

export interface NavigationBarProps {
  logoImg?: string;
  brandName: string;
  menuItems: NameAndUrl[];
  loginButton?: boolean;
  internalizationButton?: boolean;
  searchButton?: boolean;
  className?: string;
  loginButtonComponent?: JSX.Element;
  internalizationButtonComponent?: JSX.Element;
  searchButtonComponent?: JSX.Element;
}

class NavigationBar extends Component<NavigationBarProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      menuItems,
      brandName,
      logoImg,
      loginButton,
      loginButtonComponent,
      internalizationButtonComponent,
      internalizationButton,
      searchButton,
      searchButtonComponent,
    } = this.props;
    return (
      <React.Fragment>
        <div className="NavigationBar">
          <LogoImage brandName={brandName} />
          <MenuLister menuItems={menuItems} />
          <div className="assisting-buttons">
            <OptionalField shouldDrawOptional={loginButton} OptionalFieldComponent={loginButtonComponent} />
            <OptionalField shouldDrawOptional={internalizationButton} OptionalFieldComponent={internalizationButtonComponent} />
          </div>
          <OptionalField shouldDrawOptional={searchButton} OptionalFieldComponent={searchButtonComponent} />
        </div>
      </React.Fragment>
    );
  }
}

const LogoImage: React.SFC<{ brandName: string; logoImg?: string }> = ({ brandName, logoImg }) => {
  if (typeof logoImg === "undefined") {
    return (
      <h3 className="NavigationBar-brand">
        <Link to="/">{brandName}</Link>
      </h3>
    );
  } else {
    return (
      <Link to="/">
        <img src={logoImg} />
      </Link>
    );
  }
};

const MenuLister: React.SFC<{ menuItems: NameAndUrl[] }> = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((value, index, c) => (
        <li key={index}>
          <Link to={value.url}>{value.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const OptionalField: React.SFC<{ shouldDrawOptional: boolean; OptionalFieldComponent?: JSX.Element }> = ({
  shouldDrawOptional,
  OptionalFieldComponent,
}) => {
  if (shouldDrawOptional === false) return <React.Fragment />;
  if (typeof OptionalFieldComponent === "undefined") return <React.Fragment />;
  return OptionalFieldComponent;
};

export default NavigationBar;
