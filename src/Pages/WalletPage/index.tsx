import { useContext, useEffect } from "react";
import { Button } from "../../Components/Button";
import { WalletContext } from "../../Contexts/wallet-context";
import { StyledMain } from "./style";
import { WalletCard } from "./WalletCard";
import heartImg from "../../assets/heart.svg";
import { AddAsset } from "../../Components/AddAsset";

export const WalletPage = () => {

    const { userAssets, fetchUserAssets, userId} = useContext(WalletContext)
    useEffect(() => {
        fetchUserAssets(userId)    
    }, [])
  

  return (
    <StyledMain>
        <div className="container">
            <div className="divTitle">
                <h2>Adicionar a Carteira</h2>
                <AddAsset />
            </div>

            <section>
                <div className="pieChart">
                    <img src={heartImg} alt="Waiting Graphic" />
                </div>

              <ul>
                {userAssets.length != 0 ? (
                  userAssets.map((Cripto, index) => {
                    return <WalletCard key={index} cripto={Cripto} />;
                  })
                ) : (
                  <div>
                    <h2>Sua carteira está vazia</h2>
                    <Button type="button">Adicionar Cripto</Button>
                  </div>
                )}
              </ul>
            </section>
        </div>
      
    </StyledMain>
  );
};

