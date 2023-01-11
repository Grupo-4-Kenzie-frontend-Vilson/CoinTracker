import { AnimationLogo } from "../AnimationLogo";
import searchIcon from "../../assets/search.svg";
import walletIcon from "../../assets/wallet.svg";
import logoutIcon from "../../assets/logout.svg";
import { DivCenterContent, StyledMainHeader } from "./style";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { WalletContext } from "../../Contexts/wallet-context";
import { useContext } from "react";

export const MainHeader = () => {
  const isBigScreen: boolean = useMediaQuery({ query: "(min-width: 769px)" });
  const { logout } = useContext(WalletContext);

  return (
    <>
      <StyledMainHeader>
        <DivCenterContent>
          {isBigScreen === true && <AnimationLogo height={120} width={80} />}
          <h1>CoinTracker</h1>
        </DivCenterContent>
        <DivCenterContent>
          <img src={searchIcon} alt="search" />
          <img src={walletIcon} alt="search" />
          <img src={logoutIcon} alt="search" onClick={() => logout()} />
        </DivCenterContent>
      </StyledMainHeader>
      <Outlet />
    </>
  );
};
