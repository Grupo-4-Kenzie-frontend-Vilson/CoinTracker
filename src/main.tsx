<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WalletProvider } from "./Contexts/wallet-context";
import "./index.css";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

>>>>>>> 7d1a7df32c75adb7d500b2b6473e242d4eac5bd9

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>
);
