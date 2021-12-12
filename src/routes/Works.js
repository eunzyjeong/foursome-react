import React from 'react';
import Navigation from 'components/Navigation';
import WorkContent from 'components/WorkContent';
import WorksData from 'data/Work';

import 'styles/Works.scss';

const Works = () => {
  const navList = ['All', 'Exhibition', 'Advertisement', 'Display', 'Goods'];

  return (
    <div className="Works">
      <Navigation navList={navList} currentPath="/works" />
      <WorkContent worksData={WorksData} />
    </div>
  );
};

export default Works;
