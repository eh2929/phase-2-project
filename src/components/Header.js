import React from "react";

function Header() {
  return (
    <div className="header">
      <h1> Let's Find Games</h1>
      <h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/my-collection">My Collection</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </h2>
    </div>
  );
}

export default Header;

