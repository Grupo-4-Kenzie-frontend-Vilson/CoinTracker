import { useContext, useEffect } from "react"
import { Button } from "../../Components/Button"
import { WalletContext } from "../../Contexts/wallet-context"
import { StyledMain } from "./style"
import { WalletCard } from "./WalletCard"
import heartImg from "../../assets/heart.svg"
import walletImg from "../../assets/mywallet.svg"

export const WalletPage = () => {
    const { userAssets, addAsset, fetchUserAssets, userId, generatePieChartData } = useContext(WalletContext)
    useEffect(() => {
        fetchUserAssets(1)    
    }, [])

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
        generatePieChartData()
    }, [userAssets])

    return (
        <StyledMain>
            <div className="container">
                <div className="divTitle">
                    <h2>Adicionar a Carteira</h2>
                    <img src={walletImg} alt="My Wallet Image"
                        onClick={AddCripto}
                    />
                </div>

                <section>
                    <div className="pieChart">
                        <img src={ heartImg } alt="Waiting Graphic" />
                    </div>

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
            </div>
            
        </StyledMain>
    )
}