import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "./Style";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./RegisterSchema";
import { UserContext } from "../../../Contexts/user-context";
import { useContext } from "react";
import { Input } from "../../../Components/Inputs";
import { StyledButton } from "../../../Components/Button/style";
import { Link } from "react-router-dom";
import { ButtonForm } from "../../../Styles/Buttons";

interface IRegisterData {
  email: string;
  password: string;
  name: string;
  phone: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(RegisterSchema),
    mode: "onChange",
  });

  const { fetchRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterData> = (data) => {
    fetchRegister(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <h2>Cadastrar-se</h2>
      <Input
        id="name"
        label="Nome"
        type="string"
        placeholder="Digite o seu nome"
        register={register("name")}
        error={errors.name}
      />
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

      <Input
        id="senhaConfirmed"
        label="Confirmar senha"
        type="password"
        placeholder="Confirmar senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <Input
        id="phone"
        label="Telefone"
        type="string"
        placeholder="Digite um numero para contato"
        register={register("phone")}
        error={errors.phone}
      />

      <ButtonForm type="submit">Cadastrar</ButtonForm>
      <div className="footerForm">
        <p>Já possui cadastro?</p>
        <Link to={"/login"}>Clique aqui!</Link>
      </div>
    </StyledForm>
  );
};
