import React from 'react';
import { Link } from 'react-router-dom';

import 'styles/WorkContent.scss';

const WorkContents = ({ worksData }) => {
  return (
    <section className="WorkContent">
      <article className="work-content">
        {worksData.map(content => (
          <React.Fragment key={content.id}>
            <Link to={`/works/${content.id}`}>
              <header className="work-content__title">
                <h1>{content.title}</h1>
              </header>
            </Link>
            <ul className="work-content__list">
              <li className="work-content__item">{content.client}</li>
              <li className="work-content__item">{content.category}</li>
              <li className="work-content__item">{content.published_year}</li>
            </ul>
            <div className="work-content__img">
              <img src={content.img} alt={content.title} />
            </div>
          </React.Fragment>
        ))}
      </article>
    </section>
  );
};

export default WorkContents;
