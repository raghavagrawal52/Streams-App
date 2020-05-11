import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui pointing menu" style={{ marginTop: "20px" }}>
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;

//115478669298-vsotu7o890m5p2qmbhuvkct3inv2ten8.apps.googleusercontent.com
