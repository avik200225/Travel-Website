import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Travel World</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
