import { Routes, Route, Navigate } from "react-router-dom";

import { LoginMain } from "../Pages/LoginPage/LoginMain";
import { RegisterMain } from "../Pages/RegisterPage/RegisterMain";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginMain />} />
      <Route path="/register" element={<RegisterMain />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
