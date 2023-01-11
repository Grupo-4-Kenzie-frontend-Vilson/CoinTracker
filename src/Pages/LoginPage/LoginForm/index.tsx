import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "./Style";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./LoginSchema";
import { useContext } from "react";
import { UserContext } from "../../../Contexts/user-context";
import { Input } from "../../../Components/Inputs";
import { ButtonForm } from "../../../Styles/Buttons";
import { Link } from "react-router-dom";

export interface ILoginData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });
  const { fetchLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginData> = (data) => {
    fetchLogin(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <h2>Login</h2>
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="Digite o seu e-mail"
        register={register("email")}
        error={errors.email}
      />
      <Input
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite a sua senha"
        register={register("password")}
        error={errors.password}
      />
      <ButtonForm type="submit">Entrar</ButtonForm>
      <div className="footerForm">
        <p>Ainda não possui um cadastro?</p>
        <Link to={"/register"}>Clique aqui!</Link>
      </div>
    </StyledForm>
  );
};
