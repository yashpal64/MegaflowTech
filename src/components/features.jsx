import React, { Component } from "react";
import FlipCard from "react-flip-cards";
import "../data/index1.css";
import scrollbar from "../data/scrollbar.css";
import mega from "../data/mega.png";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Features</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <FlipCard
                      icon={d.icon} // all props
                      fontTitle={d.title}
                      fontSubTitle="web application"
                      backTitle="ReactJs app"
                      backText={d.text}
                      fgColor="#000000" // front card background color
                      bgColor="#ffffff" // back card background color
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
