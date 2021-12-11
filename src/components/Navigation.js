import React from 'react';
import { Link } from 'react-router-dom';

import 'styles/Navigation.scss';

const Navigation = ({ navList, currentPath }) => {
  return (
    <nav>
      <ul className="category">
        {navList.map((item, index) => (
          <li key={index} className="category__list">
            <Link to="/works">{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
