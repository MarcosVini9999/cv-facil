import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppRoutes } from "@/config/routes";
import { Home, Create, Preview } from "@/pages";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.home} element={<Home />} />
        <Route path={AppRoutes.preview} element={<Preview />} />
        <Route path={AppRoutes.create} element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}
