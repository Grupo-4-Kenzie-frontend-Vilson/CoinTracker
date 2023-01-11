import CoinsList from "../../Components/CoinsList";
import { MainDiv } from "../../Components/DashboardMenu";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddAsset } from "../../Components/AddAsset";
import { StyledMain } from "./style";
import { WalletContext } from "../../Contexts/wallet-context";

export const DashboardPage = () => {

  const {generatePieChartData, fetchUserAssets, userAssets} = useContext(WalletContext)
  const navigate = useNavigate();
  function userRedirect() {
    if (window.localStorage.getItem("@userToken")) {
    } else {
      navigate("/login");
    }
  }
  
  useEffect(() => {
    fetchUserAssets(1);
    userRedirect();
    
  }, []);
  
    useEffect(() => {
      //Foi passado o valor 1  abaixo para desenvolver a função de generateChartData
      generatePieChartData();
    }, [userAssets]);

  return (
    <StyledMain>
      <MainDiv />
      <CoinsList />
      <h1>Dashboard</h1>
      <AddAsset />
    </StyledMain>
  );
};
