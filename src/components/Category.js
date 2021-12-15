import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import 'styles/components/Category.scss';

const Category = ({ navList, currentPath }) => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="category">
        <li className="category__mobile">All</li>
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

export default Category;
