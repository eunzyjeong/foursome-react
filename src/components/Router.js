import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import About from 'routes/About';
import Blog from 'routes/Blog';
import Works from 'routes/Works';
import WorkContentDetail from 'routes/WorkContentDetail';

const Router = () => (
  <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/works/:detailId" element={<WorkContentDetail />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </HashRouter>
);

export default Router;
