import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Write Your Plans Here</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{' '}
      |
      <Link style={linkStyle} to="/about">
        About
      </Link> |
      <Link style={linkStyle} to="contact">
        Contact
      </Link>
    </header>
  );
}

const headerStyle = {
  background: 'blue',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const linkStyle = {
  padding: '8px',
  color: '#fff',
  textDecoration: 'none',
};

export default Header;
