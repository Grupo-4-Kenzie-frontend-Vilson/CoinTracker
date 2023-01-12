import { useContext } from "react";
import { WalletContext } from "../../../Contexts/wallet-context";
import { StyledCard } from "./style"
import EditIcon from "../../../assets/EditCard.svg"
import TrashIcon from "../../../assets/TrashCard.svg"
import { ExchangeContext } from "../../../Contexts/exchange-context";

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
    const {allCoins} = useContext(ExchangeContext)
    
    const EditCard = () => {
    }
    
    const DeleteCard = () => {
        deleteAsset(id)
        fetchUserAssets(userId)
    }
    function getCoinName(){
        return allCoins.filter( crypto => crypto.symbol === coin )[0].name
    }

    return (
        <StyledCard>
            <div className="CardPrices">
                <h2>{amount} {coin}</h2>
                <p>{ getCoinName() }</p> 
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