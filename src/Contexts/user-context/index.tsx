import { createContext, useState, useEffect } from "react";
import { api } from "../../Services";
import { fakeApi } from "../../Services/fake-api";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContextValue {
  fetchLogin: (data: iFetchLogin) => Promise<void>;
  fetchRegister: (data: iFetchRegister) => Promise<void>;
}

interface iUser {
  email: string;
  name: string;
  phone: string;
  id: number;
}
interface iUserInfo {
  accessToken: string;
  user: iUser;
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
  async function fetchLogin(data: iFetchLogin) {
    try {
      const fetch = await fakeApi.post("/login", {
        ...data,
      });
      console.log(fetch);
      window.localStorage.setItem("@userToken", fetch.data.accessToken);
      window.localStorage.setItem("@userId", fetch.data.user.id);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchRegister(data: iFetchRegister) {
    try {
      const fetch = await fakeApi.post("/register", {
        ...data,
      });
      console.log(fetch);
    } catch (err) {
      console.log(err);
    }
  }

  // useEffect(() => {
  //   fetchLogin({
  //     email: "teste@gmail.com",
  //     password: "123456",
  //   });
  // }, []);

  return (
    <UserContext.Provider value={{ fetchLogin, fetchRegister }}>
      {children}
    </UserContext.Provider>
  );
};
