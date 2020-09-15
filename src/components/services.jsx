import React, { Component } from "react";
import { ParallaxHover } from "react-parallax-hover";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Megaflow makes product on which you and your customers can
              believe. Just tell, what type of product you want?
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <ParallaxHover
                      width={122}
                      height={121}
                      rotation={7}
                      borderRadius={100}
                      lightShine={0}
                      shadowDepth={9}
                    >
                      <i className={d.icon}></i>
                    </ParallaxHover>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <br></br>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
