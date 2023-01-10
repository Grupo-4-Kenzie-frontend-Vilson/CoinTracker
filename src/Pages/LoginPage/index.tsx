import { LoginForm } from "./components/LoginForm"; 
import { StyledMain } from "./style";

export const LoginPage = () => {
  return (
    <StyledMain>
      /* Will be the component with the Company's about. */
      <section>
        <LoginForm />
      </section>
    </StyledMain>
  );
};
