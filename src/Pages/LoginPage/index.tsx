import { LoginForm } from "./components/LoginForm"; 
import { StyledMain, StyledSection } from "./style";

export const LoginPage = () => {
  return (
    <StyledMain>
      /* Will be the component with the Company's about. */
      
      <StyledSection>
        <LoginForm />
      </StyledSection>
    </StyledMain>
  );
};
