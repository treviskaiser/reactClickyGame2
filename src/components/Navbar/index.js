import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="itemLeft">Test Your Memory</li>
          <li className="itemCenter" />
          <li className="itemRight">
            Score: {this.props.score} Highscore: {this.props.highscore}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
