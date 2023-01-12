import { useContext, useEffect } from "react";
import { Button } from "../../Components/Button";
import { WalletContext } from "../../Contexts/wallet-context";
import { StyledMain } from "./style";
import { WalletCard } from "./WalletCard";
import { AddAsset } from "../../Components/AddAsset";
import { VictoryPie } from "victory";

export const WalletPage = () => {
  const {
    userAssets,
    fetchUserAssets,
    userId,
    chartData,
    generatePieChartData,
  } = useContext(WalletContext);
  useEffect(() => {
    fetchUserAssets(userId);
  }, []);

  useEffect(() => {
    generatePieChartData();
  }, [userAssets]);

  console.log(userAssets);
  return (
    <StyledMain>
      <div className="container">
        <div className="divTitle">
          <h2>Adicionar a Carteira</h2>
          <AddAsset />
        </div>

        <section>
          <div className="pieChart">
            <VictoryPie
              data={chartData}
              animate={{ duration: 2000 }}
              colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
              innerRadius={({ datum }) => datum.y * 20}
            />
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
