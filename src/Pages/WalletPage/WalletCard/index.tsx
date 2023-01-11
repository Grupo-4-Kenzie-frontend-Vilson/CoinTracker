import { useContext } from "react";
import { Button } from "../../../Components/Button";
import { WalletContext } from "../../../Contexts/wallet-context";
import { StyledCard } from "./style"

interface ICoinProps {
    cripto:{
        amount: number;
        coin: string;
        id: number;
        userId: number;
    }
}


export const WalletCard = ({ cripto }:ICoinProps) => {

    const { amount, coin, id, userId } = cripto
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
                <p>R${amount}</p>
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </StyledCard>
    )
}