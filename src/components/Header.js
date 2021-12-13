import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'components/Logo';

import 'styles/Header.scss';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="Header">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="navbar">
        <li className={`navbar__list ${pathname === '/' ? 'active' : ''}`}>
          <Link to="/">about</Link>
        </li>
        <li
          className={`navbar__list ${
            pathname.includes('/works') ? 'active' : ''
          }`}
        >
          <Link to="/works">works</Link>
        </li>
        <li
          className={`navbar__list ${
            pathname.includes('/blog') ? 'active' : ''
          }`}
        >
          <Link to="/blog">blog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
