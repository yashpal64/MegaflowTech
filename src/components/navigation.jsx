import React, { Component } from "react";
import mega from "../data/mega.png";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

export class Navigation extends Component {
  state = {
    scrolled: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 500) {
      this.setState({
        scrolled: true,
      });
    } else {
      this.setState({
        scrolled: false,
      });
    }
  };
  render() {
    return (
      <nav
        id="menu"
        className="navbar navbar-default navbar-fixed-top"
        style={
          this.state.scrolled
            ? {
                backgroundColor: '#918d87' ,
              }
            : null
        }
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <Link
              to="page-top"
              smooth={true}
              duration={1000}
              spy={true}
              isDynamic={true}
              style={{cursor: "pointer"}}
            >
              <a className="navbar-brand page-scroll">MegaFlow Technologies</a>
            </Link>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  to="features"
                  className="page-scroll"
                  smooth={true}
                  isDynamic={true}
                  duration={1000}
                  style={{cursor: "pointer"}}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="page-scroll"
                  smooth={true}
                  isDynamic={true}
                  duration={1000}
                  style={{cursor: "pointer"}}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  className="page-scroll"
                  smooth={true}
                  isDynamic={true}
                  duration={1000}
                  style={{cursor: "pointer"}}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="portfolio" className="page-scroll" smooth={true} isDynamic={true} duration={1500} style={{cursor: "pointer"}}>
                  T & I
                </Link>
              </li>

              <li>
                <Link to="team" className="page-scroll" smooth={true} isDynamic={true} duration={1500} style={{cursor: "pointer"}}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="contact" className="page-scroll" smooth={true} isDynamic={true} duration={1500} style={{cursor: "pointer"}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
