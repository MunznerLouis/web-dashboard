import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <Link to="/">
          DATAPRO
    </Link>   
        <ul>
            <li>
                <Link to="/contact-us">Player</Link>
            </li>
            <li>
                <Link to="/services">Team</Link>
            </li>
            <li>
                <Link to="/privacy-policy">About</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
