import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <svg height="20" width="200">
          <text x="0" y="15" fill="White">
            /The Hacker News/
          </text>
        </svg>
      </div>
      <div className="navbar-links-container">
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
      </div>
    </div>
  );
}
