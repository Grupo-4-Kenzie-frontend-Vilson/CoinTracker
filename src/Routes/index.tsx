import { Navigate, Route, Routes } from "react-router-dom";
import { MainHeader } from "../Components/MainHeader";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<MainHeader />}>
        <Route path="/dashboard" element={<h2>Componentquevaisercriado</h2> } />
        <Route path="/wallet" element={<h2>Componentquevaisercriado</h2>} />        
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
