import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages"));
const SingleEventPage = lazy(() => import("pages/event/SingleEvent"));

export const AppRoutes = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<SingleEventPage />} />
    </Routes>
  </Suspense>
);
