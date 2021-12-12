import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import 'styles/Navigation.scss';

const Navigation = ({ navList, currentPath }) => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="category">
        {navList.map((item, index) => (
          <li key={index} className="category__list">
            <Link
              to={currentPath}
              className={`category__item ${
                pathname.includes('/works')
                  ? 'blue'
                  : pathname.includes('/blog')
                  ? 'pink'
                  : ''
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
