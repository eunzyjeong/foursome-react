import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import About from 'routes/About';
import Works from 'routes/Works';
import WorkDetail from 'routes/WorkDetail';
import Blog from 'routes/Blog';
import BlogPost from 'routes/BlogPost';

const Router = () => (
  <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/works/:detailId" element={<WorkDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:postId" element={<BlogPost />} />
    </Routes>
  </HashRouter>
);

export default Router;
