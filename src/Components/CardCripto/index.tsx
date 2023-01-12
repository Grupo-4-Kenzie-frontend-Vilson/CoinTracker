import React, { useContext, useState } from "react";
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

  const [favorited, setFavorited] = useState(false);

  const addFavorite = () => {
    setFavorited(true);

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

  const removeFavorite = () => {
    setFavorited(false);

    const favoriteForRemove = favoriteCoins.find((coin) => coin.uuid === uuid);

    const newFavoritecoins = favoriteCoins.filter(
      (coin) => coin !== favoriteForRemove
    );

    console.log(newFavoritecoins);

    setFavoriteCoins(newFavoritecoins);
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
        {favorited ? (
          <button
            onClick={() => {
              removeFavorite();
              console.log("remove");
            }}
          >
            <img src={favorite} alt="" />
          </button>
        ) : (
          <button
            onClick={() => {
              addFavorite();
              console.log("add");
            }}
          >
            <img src={noFavorite} alt="" />
          </button>
        )}
      </div>
    </StyledCardCripto>
  );
};
