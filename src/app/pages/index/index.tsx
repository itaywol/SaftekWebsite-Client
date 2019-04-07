import * as React from "react";
import "./index.scss";
import NavigationBar, { NameAndUrl } from "../../components/NavigationBar/NavigationBar";

class index extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="bigslider-container">
          <div className="bigslider-explanation" />
          <div className="bigslider-slide">
            <button className="bigslider-slide-button bigslider-slide-button-lb">&lt;</button>
            <button className="bigslider-slide-button bigslider-slide-button-rb">&gt;</button>
          </div>
        </div>
        <div className="articles-container">
          <article className="articles-container-article">hey</article>
          <article className="articles-container-article">hey</article>
          <article className="articles-container-article">hey</article>
        </div>
      </div>
    );
  }
}

export default index;
