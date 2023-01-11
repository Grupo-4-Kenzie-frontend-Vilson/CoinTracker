import { UserProvider } from "../../Contexts/user-context";
import { RegisterForm } from "./RegisterForm";
import { StyledMain, StyledSectionAnimation, StyledSectionForm } from "./style";
import wave from "../../assets/wave.png";
import { AnimationForFormulary } from "../../Components/AnimationForFormulary";

export const RegisterPage = () => {
  return (
    <UserProvider>
      <StyledMain>
        <StyledSectionForm>
          <RegisterForm />
        </StyledSectionForm>
        <StyledSectionAnimation>
          <img className="wave" src={wave} alt="Ondas" />
          <AnimationForFormulary height={600} width={600}/>
        </StyledSectionAnimation>
      </StyledMain>
    </UserProvider>
  );
};
