import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppRoutes } from "@/config/routes";
import { Home } from "@/pages";
import { Register } from "@/pages/Register";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.home} element={<Home />} />
        <Route path={AppRoutes.register} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
