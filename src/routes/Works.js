import React from 'react';
import Category from 'components/Category';
import WorkContent from 'components/WorkContent';
import WorksData from 'data/Work';

import 'styles/routes/Works.scss';

const Works = () => {
  const navList = ['All', 'Exhibition', 'Advertisement', 'Display', 'Goods'];

  return (
    <main className="Works">
      <Category navList={navList} currentPath="/works" />
      <WorkContent worksData={WorksData} />
    </main>
  );
};

export default Works;
