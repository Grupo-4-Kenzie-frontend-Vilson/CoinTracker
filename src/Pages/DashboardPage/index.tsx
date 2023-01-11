import CoinsList from "../../Components/CoinsList";
import { MainDiv } from "../../Components/DashboardMenu";
import { StyledMain } from "./style";

export const DashboardPage = () => {
  return (
    <StyledMain>
      <MainDiv />
      <CoinsList />
    </StyledMain>
  );
};
