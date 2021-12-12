import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WorkData from 'data/Work';

import 'styles/WorkDetail.scss';

const WorkDetail = () => {
  const { detailId } = useParams();
  const [content] = useState(WorkData[`${+detailId - 1}`]);
  const navigate = useNavigate();

  return (
    <main className="detail">
      <h1 className="detail__title">{content.title}</h1>
      <section className="detail__content">
        <div className="detail__content--text">
          <ul className="detail__list">
            <li className="detail__item">
              <p className="detail__item--subtitle">Client</p>
              <p className="detail__item--content">{content.client}</p>
            </li>
            <li className="detail__item">
              <p className="detail__item--subtitle">Format</p>
              <p className="detail__item--content">{content.category}</p>
            </li>
            <li className="detail__item">
              <p className="detail__item--subtitle">Year</p>
              <p className="detail__item--content">{content.published_year}</p>
            </li>
          </ul>
          <p className="detail__description">{content.description}</p>
          <button className="btn-back" onClick={() => navigate(-1)}>
            ← back
          </button>
        </div>
        <div className="detail__content--img">
          {content.detail_img.map((img, index) => (
            <div className="detail__content--img-container" key={index}>
              <img src={img} alt={content.title} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WorkDetail;
