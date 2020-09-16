import React, { Component } from "react";
import { HoverableCard } from 'react-hoverable-card'
import 'react-hoverable-card/dist/index.css'
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
                    <HoverableCard
                     cardTitle={d.title}
                     cardDescription={d.text}
                    cardImage={d.img}
                    hoverBgColor= "blue"
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
