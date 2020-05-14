import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GoogleAuth from "./GoogleAuth";

class Header extends Component {
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new" className="item">
          Create
        </Link>
      );
    }
  }

  render() {
    return (
      <div
        className="ui pointing menu"
        style={{ marginTop: "20px", marginBottom: "40px" }}
      >
        <Link to="/" className="item">
          Streamer
        </Link>
        <div className="right menu">
          {this.renderCreate()}
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
