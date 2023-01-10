import { UserProvider } from "../../Contexts/user-context";
import { RegisterForm } from "./RegisterForm"; 
import { StyledMain, StyledSection } from "./style";

export const RegisterPage = () => {
  return (
    <UserProvider>
      <StyledMain>
        <StyledSection>
          <RegisterForm />
        </StyledSection>
      </StyledMain>
    </UserProvider>
  );
};
