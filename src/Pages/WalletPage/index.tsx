import { useContext } from "react"
import { Button } from "../../Components/Button"
import { WalletContext } from "../../Contexts/wallet-context"
import { StyledMain } from "./style"
import { WalletCard } from "./WalletCard"

export const WalletPage = () => {
    const { userAssets, addAsset } = useContext(WalletContext)

    return (
        <StyledMain>
            <h2>Adicionar a Carteira</h2>
            <Button
                type="button"
            
            >"Wallet"</Button>

            <section>
                <p>Component Graphic</p>

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