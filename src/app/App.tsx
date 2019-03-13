import * as React from "react";
import Navbar from "./components/Navbar";
import { Image }from "react-bootstrap";
import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <Navbar />
                <h1>Hello World!</h1>
                <Image src={reactLogo} className="w-100 r-logo"/>
            </div>
        );
    }
}
