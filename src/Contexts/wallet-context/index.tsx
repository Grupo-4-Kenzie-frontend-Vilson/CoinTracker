import React, { createContext, useState, useContext, useEffect } from "react";
import { fakeApi } from "../../Services/fake-api";
import { UserContext } from "../user-context";

interface iWalletContextProps {
  children: React.ReactNode;
}

interface iAddAssets {
  coin: string;
  amount: number;
  userId: number;
}

interface iEditAssets {
  amount: number;
}

interface iUserAsset {
  coin: string;
  amount: number;
  id: number;
  userId: number;
}

export const WalletContext = createContext({});

export const WalletProvider = ({ children }: iWalletContextProps) => {
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

  async function editAsset(data: iEditAssets, assetId: number) {
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
      console.log(fetch);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUserAssets(userId);
  }, []);

  return <WalletContext.Provider value={{}}>{children}</WalletContext.Provider>;
};
