import { useContext, useEffect } from "react"
import { Button } from "../../Components/Button"
import { WalletContext } from "../../Contexts/wallet-context"
import { StyledMain } from "./style"
import { WalletCard } from "./WalletCard"
import heartImg from "../../assets/heart.svg"
import walletImg from "../../assets/mywallet.svg"
import { VictoryPie } from 'victory';


export const WalletPage = () => {
    const { userAssets, addAsset, fetchUserAssets, userId, generatePieChartData, chartData } = useContext(WalletContext)
   
    useEffect(() => {
        fetchUserAssets(1)    
    }, [])
    console.log(chartData)

    const AddCripto = () => {
        const data = {
            amount: 1.3,
            coin: "ETH",
            coinId: "razxDUgYGNAdQ",
            userId: userId,
            id: userAssets.length
        }

        addAsset(data)
    }


    useEffect(() => {
        generatePieChartData();
      }, [userAssets]);

    return (
        <StyledMain>
            <div>
                <h2>Adicionar a Carteira</h2>
                <img src={walletImg} alt="My Wallet Image"
                    onClick={AddCripto}
                />
            </div>

            <section>
                <VictoryPie data={chartData}/>

                <ul>
                    {
                        userAssets.length != 0 ?
                        
                        (
                            userAssets.map((Cripto, index) => {
                                return <WalletCard key={index} cripto={Cripto}/>
                            })
                        )
                        :
                        (
                            <div>
                                <h2>Sua carteira está vazia</h2>
                                <Button
                                    type="button"
                                >
                                    Adicionar Cripto
                                </Button> 
                            </div>
                        )
                    }
                    
                </ul>
            </section>
        </StyledMain>
    )
}