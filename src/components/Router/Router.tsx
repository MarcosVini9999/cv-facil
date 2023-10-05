import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppRoutes } from "@/config/routes";
import { Home, Login, Create, Preview, Profile, Register } from "@/pages";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.home} element={<Home />} />
        <Route path={AppRoutes.register} element={<Register />} />
        <Route path={AppRoutes.login} element={<Login />} />
        <Route path={AppRoutes.preview} element={<Preview />} />
        <Route path={AppRoutes.create} element={<Create />} />
        <Route path={AppRoutes.profile} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
