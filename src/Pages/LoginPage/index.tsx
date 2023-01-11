import { UserProvider } from "../../Contexts/user-context";
import { LoginForm } from "./LoginForm";
import { StyledMain, StyledSectionAnimation, StyledSectionForm } from "./style";
import wave from "../../assets/wave.png";
import { AnimationForFormulary } from "../../Components/AnimationForFormulary";

export const LoginPage = () => {
  return (
    <UserProvider>
      <StyledMain>
        <StyledSectionAnimation>
          <AnimationForFormulary height={600} width={600} />
          <img className="wave" src={wave} alt="Ondas" />
        </StyledSectionAnimation>
        <StyledSectionForm>
          <LoginForm />
        </StyledSectionForm>
      </StyledMain>
    </UserProvider>
  );
};
