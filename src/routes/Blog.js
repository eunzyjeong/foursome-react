import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from 'components/Navigation';
import BlogData from 'data/Blog';

import 'styles/Blog.scss';
import blue from 'img/blue_box.png';
import yellow from 'img/yellow_box.png';
import pink from 'img/pink_box.png';

const Blog = () => {
  const navList = [
    'All',
    'Foursome',
    'News',
    'VMD',
    'Printing&press',
    'Material',
    'Coating',
    'Ink'
  ];

  return (
    <main className="Blog">
      <Navigation navList={navList} currentPath="/blog" />
      <div className="scroll-area">
        <section className="blog-list">
          {BlogData.map(content => (
            <Link to={`/blog/${content.id}`} key={content.id}>
              <div className="blog-content">
                <div className="blog-content__img">
                  <img src={content.thumbnail} alt={content.title} />
                </div>
                <div className="blog-content__text">
                  <h3 className="blog-content__title">{content.title}</h3>
                  <span className="blog-content__category">
                    {content.catogory}
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <div className="blog-colorbox">
            <img src={blue} alt="파란색" />
          </div>
          <div className="blog-colorbox">
            <img src={yellow} alt="노란색" />
          </div>
          <div className="blog-colorbox">
            <img src={pink} alt="핑크색" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Blog;
