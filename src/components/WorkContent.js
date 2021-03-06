import React from 'react';
import { Link } from 'react-router-dom';

import 'styles/components/WorkContent.scss';

const WorkContents = ({ worksData }) => {
  return (
    <div className="scroll-area">
      <section className="WorkContents">
        <article className="work-contents">
          {worksData.map(content => (
            <React.Fragment key={content.id}>
              <div className="work-content">
                <Link to={`/works/${content.id}`}>
                  <header className="work-content__title">
                    <div className="marquee-overflow">
                      {content.title_array.map((title, index) => (
                        <h1 key={index}>{title}</h1>
                      ))}
                    </div>
                  </header>
                  <ul className="work-content__list">
                    <li className="work-content__item">{content.client}</li>
                    <li className="work-content__item">{content.category}</li>
                    <li className="work-content__item">
                      {content.published_year}
                    </li>
                  </ul>
                  <div className="work-content__img">
                    <img src={content.img} alt={content.title} />
                  </div>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </article>
      </section>
    </div>
  );
};

export default WorkContents;
