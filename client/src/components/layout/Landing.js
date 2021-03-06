import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './images/logo.png';


class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
          <img style={{width: '300px', height: '300px'}} src={logo} alt="Wooder Logo"/>
          <p className="flow-text grey-text text-darken-1">
            <h4 style={{ fontFamily: "Courier" }}>
              Create your home Garden with reminders on when to water your plant babies.
            </h4>
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable black accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable black accent-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}export default Landing;