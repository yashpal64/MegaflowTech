import React, { Component } from "react";
import HoverVideoPlayer from "react-hover-video-player";
export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <HoverVideoPlayer
            videoSrc= 'img/video-bg.mp4'
            videoClassName="player-video"
            // Applies inline styles to the video element
            style={{
              width: "calc(100vw)", height: "calc(60vw)"
            }}
            sizingMode="overlay"
            style={{
              width: "100%",
              // The container should have a set 16:9 aspect ratio
              // (https://css-tricks.com/aspect-ratio-boxes/)
              paddingTop: "56.25%",
            }}
            pausedOverlay={<img src="" alt="" />}
            loadingOverlay={<div className="loading-spinner-overlay" />}
          />
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
