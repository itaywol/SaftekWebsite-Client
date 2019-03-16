import * as React from 'react';
import { render } from 'react-dom';
import NavbarContainer, { ExpandSizes, AngledTypes } from './components/navbarContainer';
import './App.scss';

const reactLogo = require('./../assets/img/react_logo.svg');

export interface AppProps {}

export default class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div className="app">
        <NavbarContainer className="bg-dark" angled={AngledTypes.left} />
        <div className="cross-line" />
        {/* <h1>Hello World!</h1>
        <Image src={reactLogo} className="w-100 r-logo" /> */}
      </div>
    );
  }
}
