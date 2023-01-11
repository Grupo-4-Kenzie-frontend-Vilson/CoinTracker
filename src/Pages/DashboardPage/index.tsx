import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledMain } from "./style";

export const DashboardPage = () => {
  const navigate = useNavigate();
  function userRedirect() {
    if (window.localStorage.getItem("@userToken")) {
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    userRedirect();
  }, []);

  return (
    <StyledMain>
      <h1>Dashboard</h1>
    </StyledMain>
  );
};
