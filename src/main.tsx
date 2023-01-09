import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./Contexts/user-context";
import { WalletProvider } from "./Contexts/wallet-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <WalletProvider>
        <App />
      </WalletProvider>
    </UserProvider>
  </React.StrictMode>
);
