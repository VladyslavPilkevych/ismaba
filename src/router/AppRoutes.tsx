import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import { ROUTES } from "./paths";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.services} element={<ServicesPage />} />
      <Route path={ROUTES.about} element={<AboutPage />} />
      <Route path={ROUTES.contact} element={<ContactPage />} />
      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
}
