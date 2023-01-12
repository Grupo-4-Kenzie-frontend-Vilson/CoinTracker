import { useContext, useState } from "react";
import { WalletContext } from "../../../Contexts/wallet-context";
import { StyledCard } from "./style";
import EditIcon from "../../../assets/EditCard.svg";
import TrashIcon from "../../../assets/TrashCard.svg";
import { ExchangeContext } from "../../../Contexts/exchange-context";
import Modal from "react-modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ICoinProps {
  cripto: {
    amount: number;
    coin: string;
    id: number;
    userId: number;
  };
}

export const WalletCard = ({ cripto }: ICoinProps) => {
  const { amount, coin, id, userId } = cripto;
  const { editAsset, deleteAsset, fetchUserAssets } = useContext(WalletContext);
  const { allCoins, dollarPrice } = useContext(ExchangeContext);

  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  const formSchema = yup.object().shape({
    amount: yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  async function formSubmit(data: any) {
    await editAsset(data, id);
    fetchUserAssets(userId);
    closeModal();
  }

  const DeleteCard = async () => {
    await deleteAsset(id);
    fetchUserAssets(userId);
  };

  function getCoinName() {
    return allCoins.filter((crypto) => crypto.symbol === coin)[0].name;
  }

  function getCoinPrice() {
    return allCoins.filter((crypto) => crypto.symbol === coin)[0].price;
  }

  return (
    <StyledCard>
      <div className="CardPrices">
        <h2>
          {amount} {coin}
        </h2>
        <p>
          {(Number(getCoinPrice()) * amount * dollarPrice).toLocaleString(
            "pt-BR",
            {
              style: "currency",
              currency: "BRL",
            }
          )}
        </p>
        <p>{getCoinName()}</p>
      </div>
      <div className="CardButtons">
        <img src={EditIcon} alt="Edit Icon" onClick={openModal} />
        <img src={TrashIcon} alt="Trash Icon" onClick={DeleteCard} />
      </div>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <form onSubmit={handleSubmit(formSubmit)}>
          <input
            type="number"
            {...register("amount")}
            placeholder={String(amount)}
          />
          <button type="submit">Editar</button>
        </form>
      </Modal>
    </StyledCard>
  );
};
