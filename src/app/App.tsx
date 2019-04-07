import { Component } from "react";
import { render } from "react-dom";
import "../assets/scss/App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import index from "./pages/index/index";
import * as jsPDF from "jspdf";
import React = require("react");
import NavigationBar, { NameAndUrl } from "./components/NavigationBar/NavigationBar";

const avatar = require("../assets/img/avatar.svg");
const globe = require("../assets/img/worldwide.svg");
const magnify = require("../assets/img/magnifier.svg");

export interface AppProps {}

export default class App extends Component<AppProps, undefined> {
  menuItems: NameAndUrl[] = [{ name: "About", url: "/about" }, { name: "Products", url: "/products" }, { name: "Control Panel", url: "/cpanel" }];

  render() {
    return (
      <Router>
        <div className="app">
          <NavigationBar
            brandName="SAFTEK"
            menuItems={this.menuItems}
            loginButton={true}
            loginButtonComponent={<LoginButton avatar={avatar} />}
            internalizationButton={true}
            internalizationButtonComponent={<InternalizationButton globe={globe} />}
            searchButton={true}
            searchButtonComponent={<SearchButton magnify={magnify} />}
          />
          <Route exact path="/" component={index} />
          <Route path="/products" component={null} />
          <Route path="/cpanel" component={null} />
        </div>
      </Router>
    );
  }
}

const LoginButton = ({ avatar }) => {
  return (
    <Link className="button" to="/login">
      <img src={avatar} />
      <p>Login</p>
    </Link>
  );
};

const InternalizationButton = ({ globe }) => {
  return (
    <Link className="button" to="/EN">
      <p>EN</p>
      <img src={globe} />
    </Link>
  );
};

const SearchButton = ({ magnify }) => {
  return (
    <Link className="search-button" to="/search">
      <img src={magnify} />
    </Link>
  );
};
