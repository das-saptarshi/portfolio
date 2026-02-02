import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Library from './pages/Library';
import AlbumDetail from './pages/AlbumDetail';
import Explore from './pages/Explore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="explore" element={<Explore />} />
          <Route path="album/:id" element={<AlbumDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
