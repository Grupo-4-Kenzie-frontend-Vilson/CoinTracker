import { useContext } from "react";
import { Button } from "../../../Components/Button";
import { WalletContext } from "../../../Contexts/wallet-context";
import { StyledCard } from "./style"

interface ICoinProps {
    cripto:{
        amount: number;
        coin: string;
        coinId: string
        id: number;
        userId: number;
    }
}


export const WalletCard = ({ cripto }:ICoinProps) => {

    const { amount, coin, coinId, id, userId } = cripto
    const { editAsset, deleteAsset, fetchUserAssets } = useContext(WalletContext)
    

    const EditCard = () => {
        // editAsset(amount, id)
    }
    
    const DeleteCard = () => {
        deleteAsset(id)
        fetchUserAssets(userId)
    }

    // console.log(cripto)
    return (
        <StyledCard>
            <div>
                <h2>{coin}</h2>
                <p>{amount}</p>
            </div>
            <div>
                <Button
                    type="button"
                    onClick={EditCard}
                >
                    Editar
                </Button>
                <Button
                    type="button"
                    onClick={DeleteCard}
                >
                    Deletar
                </Button>
            </div>
        </StyledCard>
    )
}