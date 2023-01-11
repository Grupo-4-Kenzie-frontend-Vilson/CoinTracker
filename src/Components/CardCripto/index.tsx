import React, { useContext } from "react";
import { StyledCardCripto } from "./style";
import favorite from "../../assets/favorite.svg";
import noFavorite from "../../assets/noFavorite.svg";
import { ExchangeContext } from "../../Contexts/exchange-context";

interface iCardCripto {
  name: string;
  price: string;
  iconUrl: string;
  rank: string;
  symbol: string;
  uuid: string | undefined;
}

export const CardCripto = ({
  name,
  price,
  iconUrl,
  rank,
  symbol,
  uuid,
}: iCardCripto) => {
  const { favoriteCoins, setFavoriteCoins } = useContext(ExchangeContext);

  const addFavorite = () => {
    console.log(favoriteCoins.find((coin) => coin.uuid === uuid));

    setFavoriteCoins([
      ...favoriteCoins,
      {
        name,
        price,
        iconUrl,
        rank,
        symbol,
        uuid,
      },
    ]);
  };

  return (
    <StyledCardCripto>
      <div className="lefth-side">
        <div>
          <img src={iconUrl} alt="" />

          <h4>{name}</h4>
          <span>{symbol}</span>
        </div>

        <p>
          {parseFloat(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>

      <div className="rigth-side">
        <button onClick={() => addFavorite()}>
          <img src={favorite} alt="" />
        </button>
      </div>
    </StyledCardCripto>
  );
};
