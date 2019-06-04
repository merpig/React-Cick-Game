import React from "react";
//import "./Nav.css";

const Navbar = props => (
  <nav className="navbar navbar-dark fixed-top bg-dark">
    <ul className="nav nav-justified mr-auto">
      <li className="nav-item">
        <p className="navbar-brand"><b>{props.title}</b></p>
      </li>

      <li className="nav-item" id="rw">
        <p className="navbar-brand">{props.status}</p>
      </li>

      <li  className="nav-item" id="cur-sco">
        <p className="navbar-brand">Current Score: {props.score}</p>
      </li>
      
      <li  className="nav-item" id="top-sco">
        <p className="navbar-brand">Top Score: {props.highScore}</p>
        </li>
    </ul>
  </nav>
);

export default Navbar;
