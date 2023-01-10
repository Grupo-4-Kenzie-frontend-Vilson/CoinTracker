import { Navigate, Route, Routes } from "react-router-dom";
import { MainHeader } from "../Components/MainHeader";
import { ExchangeProvider } from "../Contexts/exchange-context";
import { UserProvider } from "../Contexts/user-context";
import { WalletProvider } from "../Contexts/wallet-context";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";

export const MainRoutes = () => {
  return (
    <Routes>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<MainHeader />}>          
            <Route path="/dashboard" element={<ExchangeProvider><WalletProvider>Componentquevaisercriado</WalletProvider></ExchangeProvider>  } />
            <Route path="/wallet" element={<ExchangeProvider><WalletProvider>Componentquevaisercriado</WalletProvider></ExchangeProvider>  } />
       
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
