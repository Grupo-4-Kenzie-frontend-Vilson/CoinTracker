import { useContext } from "react";
import { WalletContext } from "../../../Contexts/wallet-context";
import { StyledCard } from "./style"
import EditIcon from "../../../assets/EditCard.svg"
import TrashIcon from "../../../assets/TrashCard.svg"

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

    return (
        <StyledCard>
            <div className="CardPrices">
                <h2>{coin}</h2>
                <p>R${amount}</p>
            </div>
            <div className="CardButtons">
                <img src={EditIcon} alt="Edit Icon" />
                <img src={TrashIcon}
                    alt="Trash Icon"
                    onClick={DeleteCard} />
            </div>
        </StyledCard>
    )
}