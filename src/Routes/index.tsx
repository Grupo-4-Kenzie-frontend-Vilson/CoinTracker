import { Navigate, Route, Routes } from "react-router-dom";
import { MainHeader } from "../Components/MainHeader";
import ProtectProviders from "../Contexts/protect-providers";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <ProtectProviders>
            <MainHeader />
          </ProtectProviders>
        }
      >
        <Route path="/dashboard" element={<h1>Ola</h1>} />
        <Route path="/wallet" element={<h1>Ola</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
