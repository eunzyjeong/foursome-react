import React from 'react';

import 'styles/WorkContent.scss';

const WorkContents = ({ worksData }) => {
  return (
    <div>
      {worksData.map(content => (
        <React.Fragment key={content.id}>
          <h1>{content.title}</h1>
          <ul>
            <li>{content.author}</li>
            <li>{content.category}</li>
            <li>{content.published_year}</li>
          </ul>
          <img src={content.img} alt={content.title} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default WorkContents;
