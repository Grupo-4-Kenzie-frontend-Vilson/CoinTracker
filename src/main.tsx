import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./Contexts/user-context";
import { WalletProvider } from "./Contexts/wallet-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <WalletProvider>
          <App />
        </WalletProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
