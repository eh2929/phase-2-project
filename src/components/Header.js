import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1> Let's Find Games</h1>
      <h2>
        <ul>
          <li className="menuLinks">
            <Link to="/">Home</Link>
          </li>
          <li className="menuLinks">
            <Link to="/collection">My Collection</Link>
          </li>
          <li className="menuLinks">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </h2>
    </div>
  );
}

export default Header;
