import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import 'styles/components/Category.scss';
import dropdown from 'img/btn_dropdown.svg';

const Category = ({ navList, currentPath }) => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(true);
  const nav = useRef(null);

  const onDropdownClick = () => {
    setShow(prev => !prev);

    if (show) nav.current.style.display = 'block';
    else nav.current.style.display = 'none';
  };

  return (
    <>
      <div className="category__mobile">
        All
        <div className="dropdown" onClick={onDropdownClick}>
          <img src={dropdown} alt="드롭다운 버튼" />
        </div>
      </div>
      <nav ref={nav}>
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
    </>
  );
};

export default Category;
