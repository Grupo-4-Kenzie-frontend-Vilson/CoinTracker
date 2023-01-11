import { useContext, useState } from "react";
import Modal from "react-modal";
import { ExchangeContext } from "../../Contexts/exchange-context";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { WalletContext } from "../../Contexts/wallet-context";
import { StyledAddAsset } from "./style";
import wallet from "../../assets/mywallet.png"

interface iFormSubmit {
  coin: string;
  coinId: string;
  amount: number;
  userId: number;
}

Modal.setAppElement("#root");

export const AddAsset = () => {
  const { allCoins } = useContext(ExchangeContext);
  const { addAsset, fetchUserAssets, userAssets } = useContext(WalletContext);
  const [open, setOpen] = useState(false);

  const userId = window.localStorage.getItem("@userId");

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  const formSchema = yup.object().shape({
    coinId: yup.string(),
    amount: yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function formSubmit(data: any) {
    const filterCoin = allCoins.filter((e) => e.uuid === data.coinId);
    data = {
      coin: filterCoin[0].symbol,
      userId: Number(userId),
      ...data,
    };
    addAsset(data);
    fetchUserAssets(Number(userId));
    closeModal();
  }

  const disable = (symbol: string) => {
    const findCoin = userAssets.find((e) => e.coin === symbol);

    if (findCoin) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <StyledAddAsset>
      
        <img onClick={openModal} src={wallet} alt="carteira" />
      
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <header className="modalHeader">
          <h2>Adicionar a Cripto</h2>
          <button onClick={closeModal}>X</button>
        </header>
        <form className="formModal" onSubmit={handleSubmit(formSubmit)}>
          <select {...register("coinId")}>
            <option value={""} disabled defaultValue={""}>
              Selecionar cripto
            </option>
            {allCoins.map((coin, index) => (
              <option
                key={index}
                value={coin.uuid}
                hidden={disable(coin.symbol)}
              >
                {coin.symbol}
              </option>
            ))}
          </select>
          <input type="number" {...register("amount")} />
          <div className="buttonModal">
            <button type="submit">Adicionar</button>
          </div>
        </form>
      </Modal>
    </StyledAddAsset>
  );
};
