import { Navigate, Route, Routes } from "react-router-dom";
import { MainHeader } from "../Components/MainHeader";
import { ExchangeProvider } from "../Contexts/exchange-context";
import ProtectProviders from "../Contexts/protect-providers";
import { UserProvider } from "../Contexts/user-context";
import { WalletProvider } from "../Contexts/wallet-context";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";

export const MainRoutes = () => {
  return (
    <Routes>
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
