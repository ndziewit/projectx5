import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { PlantSearch } from "../layout/PlantSearch";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4 className="flow-text text-darken-1">
              <b style={{
                                fontFamily: "Courier"
                            }}>Hi, {user.name.split(" ")[0]} </b>
              <p className="flow-text grey-text text-darken-1">

                <span style={{ fontFamily: "Courier" }}>Actively ridding the world of needless plant deaths.</span>
              </p>
            </h4>
            <PlantSearch />
        <Link to={"/garden"}>
        <button
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "2.5px",
                marginTop: "1rem",
              }}
              className="btn btn-large waves-effect waves-light hoverable black accent-3"
            >
             Garden
            </button>
        </Link>
        <div className="col s6">
            <button
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "2.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable black accent-3"
            >
              Logout
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
