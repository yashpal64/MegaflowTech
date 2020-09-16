import React, { Component } from "react";
import { ParallaxHover } from "react-parallax-hover";
import AnimakitRotator from "animakit-rotator";

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
                    <div className="service-desc">
                      <i className={d.icon}></i>
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
