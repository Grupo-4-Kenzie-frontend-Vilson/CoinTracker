import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fakeApi } from "../../Services/fake-api";

interface iWalletContextProps {
  children: React.ReactNode;
}

interface iWalletContextValue {
  fetchUserAssets: (userId: number) => Promise<void>;
  addAsset: (data: iAddAssets) => Promise<void>;
  editAsset: (data: iEditAsset, assetId: number) => Promise<void>;
  deleteAsset: (assetId: number) => Promise<void>;
  userAssets: [] | iUserAsset[];
  logout: () => void;
}

interface iAddAssets {
  coin: string;
  coinId: string;
  amount: number;
  userId: number;
}

interface iEditAsset {
  amount: number;
}

interface iUserAsset {
  coin: string;
  amount: number;
  id: number;
  userId: number;
}

export const WalletContext = createContext({} as iWalletContextValue);

export const WalletProvider = ({ children }: iWalletContextProps) => {
  const navigate = useNavigate();
  const [userAssets, setUserAssets] = useState<[] | iUserAsset[]>([]);

  const userToken = window.localStorage.getItem("@userToken");

  const userIdLocalStorage = window.localStorage.getItem("@userId");
  const userId = Number(userIdLocalStorage);

  async function fetchUserAssets(userId: number) {
    try {
      const fetch = await fakeApi.get(`/users/${userId}?_embed=assets`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(fetch);
      setUserAssets(fetch.data.assets);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(userAssets);

  async function addAsset(data: iAddAssets) {
    try {
      const fetch = await fakeApi.post(
        "/assets",
        { ...data },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      console.log(fetch);
    } catch (err) {
      console.log(err);
    }
  }

  async function editAsset(data: iEditAsset, assetId: number) {
    try {
      const fetch = await fakeApi.patch(
        `/assets/${assetId}`,
        { ...data },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      console.log(fetch);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteAsset(assetId: number) {
    try {
      const fetch = await fakeApi.delete(`/assets/${assetId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {
    window.localStorage.removeItem("@userToken");
    window.localStorage.removeItem("@userId");
    navigate("/login");
  }

  useEffect(() => {
    fetchUserAssets(userId);
  }, []);

  return (
    <WalletContext.Provider
      value={{
        fetchUserAssets,
        addAsset,
        editAsset,
        deleteAsset,
        userAssets,
        logout,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
