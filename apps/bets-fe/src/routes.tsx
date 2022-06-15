import Home from "pages";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
