import { all } from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fakeApi } from "../../Services/fake-api";
import { ExchangeContext } from "../exchange-context";

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
  generatePieChartData: () => void;
  chartData: [] | iChartElement[];
  userId: number;
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
  coinId: string;
}
interface iChartElement {
  x: string;
  y: number;
}

export const WalletContext = createContext({} as iWalletContextValue);

export const WalletProvider = ({ children }: iWalletContextProps) => {
  const navigate = useNavigate();
  const [userAssets, setUserAssets] = useState<[] | iUserAsset[]>([]);
  const [chartData, setChartData] = useState<[] | iChartElement[]>([]);

  const userToken = window.localStorage.getItem("@userToken");

  const { dollarPrice, allCoins } = useContext(ExchangeContext);

  const userIdLocalStorage = window.localStorage.getItem("@userId");
  const userId = Number(userIdLocalStorage);

  async function fetchUserAssets(userId: number) {
    try {
      const fetch = await fakeApi.get(`/users/${userId}?_embed=assets`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setUserAssets(fetch.data.assets);
    } catch (err) {
      console.log(err);
    }
  }

  async function addAsset(data: iAddAssets) {
    try {
      const fetch = await fakeApi.post(
        "/assets",
        { ...data },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
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

  function generatePieChartData() {
    const newAssets = userAssets.map((asset) => {
      const coinPrice = allCoins.find(
        (coin) => coin.uuid === asset.coinId
      )!.price;
      const coinName = asset.coin;
      const amountValue = asset.amount * dollarPrice * +coinPrice;
      const newChartElement = {
        x: coinName,
        y: amountValue,
      };

      return newChartElement;
    });
    setChartData([...newAssets]);
  }

  return (
    <WalletContext.Provider
      value={{
        fetchUserAssets,
        generatePieChartData,
        addAsset,
        editAsset,
        deleteAsset,
        userAssets,
        logout,
        chartData,
        userId,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
