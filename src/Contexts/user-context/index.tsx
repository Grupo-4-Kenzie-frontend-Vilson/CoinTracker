import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fakeApi } from "../../Services/fake-api";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContextValue {
  fetchLogin: (data: iFetchLogin) => Promise<void>;
  fetchRegister: (data: iFetchRegister) => Promise<void>;
}

interface iFetchLogin {
  email: string;
  password: string;
}

interface iFetchRegister {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export const UserContext = createContext({} as iUserContextValue);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  async function fetchLogin(data: iFetchLogin) {
    try {
      const fetch = await fakeApi.post("/login", {
        ...data,
      });
      toast.success("Login efetuado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
      });
      window.localStorage.setItem("@userToken", fetch.data.accessToken);
      window.localStorage.setItem("@userId", fetch.data.user.id);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.log(err);
      toast.error("Algo deu errado", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }

  async function fetchRegister(data: iFetchRegister) {
    try {
      const fetch = await fakeApi.post("/register", {
        ...data,
      });
      toast.success("Registro efetuado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      toast.error("Algo deu errado", {
        position: "top-right",
        autoClose: 2000,
      });
      console.log(err);
    }
  }

  return (
    <UserContext.Provider value={{ fetchLogin, fetchRegister }}>
      {children}
    </UserContext.Provider>
  );
};
