import React from 'react';
import Navigation from 'components/Navigation';
import WorkContents from 'components/WorkContent';
import WorksData from 'data/Work';

import 'styles/Works.scss';

const Works = () => {
  const navList = ['All', 'Exhibition', 'Advertisement', 'Display', 'Goods'];

  return (
    <div className="Works">
      <Navigation navList={navList} />
      <WorkContents worksData={WorksData} />
    </div>
  );
};

export default Works;
