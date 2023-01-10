
import { UserProvider } from "../../Contexts/user-context";
import { LoginForm } from "./LoginForm"; 
import { StyledMain, StyledSection } from "./style";


export const LoginPage = () => {
  return (
    <UserProvider>
      <StyledMain>
        <StyledSection>
          <LoginForm />
        </StyledSection>
      </StyledMain>
    </UserProvider>
  );
};
