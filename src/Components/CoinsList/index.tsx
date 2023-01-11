import { useContext } from "react";
import { StyledList } from "./style";
import { ExchangeContext } from "../../Contexts/exchange-context";
import { CardCripto } from "../CardCripto";

export default function CoinsList() {
  const { allCoins, favoriteCoins, showOnlyFavCoins } =
    useContext(ExchangeContext);

  console.log(favoriteCoins);

  return (
    <StyledList>
      {showOnlyFavCoins
        ? favoriteCoins.map((coin: any) => (
            <CardCripto
              name={coin.name}
              price={coin.price}
              iconUrl={coin.iconUrl}
              rank={coin.rank}
              symbol={coin.symbol}
              uuid={coin.uuid}
              key={coin.uuid}
            />
          ))
        : allCoins.map((coin: any) => (
            <CardCripto
              name={coin.name}
              price={coin.price}
              iconUrl={coin.iconUrl}
              rank={coin.rank}
              symbol={coin.symbol}
              uuid={coin.uuid}
              key={coin.uuid}
            />
          ))}
    </StyledList>
  );
}
