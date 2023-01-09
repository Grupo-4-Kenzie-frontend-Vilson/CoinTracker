import React, { createContext, useEffect, useState } from "react";
import { fakeApi } from "../../Services/fake-api";

interface iWalletContextProps {
  children: React.ReactNode;
}

interface iAddOrChangeAsset {
  coin: string;
  amount: number;
  userId: number;
}

export const WalletContext = createContext({});

export const WalletProvider = ({ children }: iWalletContextProps) => {
  const [userAssets, setUserAssets] = useState({});

  async function fetchUserAssets() {
    try {
      const fetch = await fakeApi.get(`/users/${3}?_embed=assets`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsImlhdCI6MTY3MzI0Njg5NCwiZXhwIjoxNjczMjUwNDk0LCJzdWIiOiIzIn0.DkhyboAaVoD2UQ2p1PgS3xQCPjv5-eST3uUQiTKY82E`,
        },
      });
      console.log(fetch);
      setUserAssets(fetch.data.assets);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUserAssets();
  }, []);

  async function addOrChangeAsset(data: iAddOrChangeAsset) {}

  return <WalletContext.Provider value={{}}>{children}</WalletContext.Provider>;
};
