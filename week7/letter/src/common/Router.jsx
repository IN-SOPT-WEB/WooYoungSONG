import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "../pages/mainPage.tsx";
import WritePage from "../pages/writePage.tsx";
import EditPage from "../pages/editPage.tsx";
import ErrorPage from "../pages/errorPage.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
