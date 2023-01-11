import CoinsList from "../../Components/CoinsList";
import { MainDiv } from "../../Components/DashboardMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledMain } from "./style";

export const DashboardPage = () => {
  const navigate = useNavigate();
  function userRedirect() {
    if (window.localStorage.getItem("@userToken")) {
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    userRedirect();
  }, []);

  return (
    <StyledMain>
      <MainDiv />
      <CoinsList />
    </StyledMain>
  );
};
