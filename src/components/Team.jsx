import React, { Component } from "react";
import ScrollButton from "react-scroll-button";

import ProfileUi from "react-profile-card";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <ScrollButton
            behavior={"smooth"}
            buttonBackgroundColor={"#000000"}
            iconType={"arrow-up"}
            style={{ fontSize: "24px" }}
            targetId={"header"}
          />
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-3 col-sm-6 team"
                  >
                    <div className="thumbnail">
                      {" "}
                      <div>
                        <ProfileUi
                          imgUrl={d.img}
                          name={d.name}
                          designation={d.job}
                        />
                      </div>
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

export default Team;
