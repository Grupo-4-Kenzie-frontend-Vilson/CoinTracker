import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "./Style";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./LoginSchema";
import { ReactNode, useContext } from "react";
import { UserContext } from "../../../Contexts/user-context";
import { Input } from "../../../Components/Inputs";
import { FormInput } from "../../../Components/FormInput";
import { element } from "prop-types";
import { ButtonLogin } from "../../../Styles/Buttons";

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
{/* 
      <FormInput name="email" control={control} type="email" label="e-mail" errorMenssage={errors.email}/>  */}
      <ButtonLogin type="submit">Entrar</ButtonLogin>
    </StyledForm>
  );
};
