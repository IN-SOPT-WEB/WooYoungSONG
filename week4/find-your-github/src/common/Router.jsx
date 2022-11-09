import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../pages/main.tsx';
import Search from '../pages/search.tsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:username" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}