import React, { Component } from 'react';
import { NavigationBar } from './components/Navbar';
import './App.css';
import logoUrl from './resources/logo.png';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar
          navItems={['Home', 'About']}
          logoUrl={logoUrl}
          companyName="Saftek"
        />
      </React.Fragment>
    );
  }
}

export default App;
