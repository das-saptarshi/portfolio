import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Library from './pages/Library';
import AlbumDetail from './pages/AlbumDetail';
import Explore from './pages/Explore';
import ProjectDetail from './pages/ProjectDetail';
import Queue from './pages/Queue';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="explore" element={<Explore />} />
          <Route path="album/:id" element={<AlbumDetail />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="queue" element={<Queue />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
