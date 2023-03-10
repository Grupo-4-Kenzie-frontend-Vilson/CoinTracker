import CoinsList from "../../Components/CoinsList";
import { MainDiv } from "../../Components/DashboardMenu";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddAsset } from "../../Components/AddAsset";
import { StyledMain } from "./style";
import { WalletContext } from "../../Contexts/wallet-context";

export const DashboardPage = () => {

  const userId = Number(localStorage.getItem("@userId"));
  const { generatePieChartData, fetchUserAssets, userAssets } =
    useContext(WalletContext);
    
  const navigate = useNavigate();

  function userRedirect() {
    if (window.localStorage.getItem("@userToken")) {
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    fetchUserAssets(userId);

    userRedirect();
  }, []);

  return (
    <StyledMain>
      <MainDiv />
      <CoinsList />
    </StyledMain>
  );
};
