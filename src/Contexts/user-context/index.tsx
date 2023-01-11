import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fakeApi } from "../../Services/fake-api";

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
      window.localStorage.setItem("@userToken", fetch.data.accessToken);
      window.localStorage.setItem("@userId", fetch.data.user.id);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchRegister(data: iFetchRegister) {
    try {
      const fetch = await fakeApi.post("/register", {
        ...data,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  async function autoLogin() {}

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <UserContext.Provider value={{ fetchLogin, fetchRegister }}>
      {children}
    </UserContext.Provider>
  );
};
