import { BrowserRouter, Route, Routes } from "react-router-dom";

import Letter from "../pages/letter.tsx";
import Write from "../pages/write.tsx";
import Edit from "../pages/edit.tsx";
import Error from "../pages/error.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Letter />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
