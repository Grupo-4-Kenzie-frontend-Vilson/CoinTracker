import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../Pages/DashboardPage";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dasboard" element={<DashboardPage />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
