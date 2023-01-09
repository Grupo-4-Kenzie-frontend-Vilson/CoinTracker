import { createContext, useState, useEffect } from "react";
import { api } from "../../Services";
import { fakeApi } from "../../Services/fake-api";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContextValue {
  userInfo: iUserInfo;
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
  const [userInfo, setUserInfo] = useState<iUserInfo | null>(null);

  async function fetchLogin(data: iFetchLogin) {
    try {
      const fetch = await fakeApi.post("/login", {
        ...data,
      });
      console.log(fetch);
      setUserInfo(fetch.data);
      window.localStorage.setItem("@userToken", fetch.data.accessToken);
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

  return (
    <UserContext.Provider value={{ userInfo, fetchLogin, fetchRegister }}>
      {children}
    </UserContext.Provider>
  );
};
