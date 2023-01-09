import React, { createContext, useEffect, useState, useContext } from "react";
import { awesomeApi } from "../../Services/awesome-api";
import { coinRankingApi } from "../../Services/coinranking-api";
import { UserContext } from "../user-context";

interface iExchangeContext {
  children: React.ReactNode;
}

export const ExchangeContext = createContext({});

export const WalletProvider = ({ children }: iExchangeContext) => {


  async function fetchAllCoins() {
    try {
      const fetch = await coinRankingApi.get(`/coins?scopeLimit=20`, {
        headers: {
          'x-access-token': 'coinranking4b49976245587b192ea41f41cb9c2d69147a79a9bb66f6d4'       
        },
      });
      console.log(fetch.data.data.coins);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchDollarPrincing() {
    try {
      const fetch = await awesomeApi.get(``);
      console.log(fetch.data.USDBRL);
    } catch (err) {
      console.log(err);
    }
  }


  
  return <ExchangeContext.Provider value={{}}>{children}</ExchangeContext.Provider>;
};
