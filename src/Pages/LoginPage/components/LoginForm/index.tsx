import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "./Style";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./LoginSchema";
import { useContext } from "react";
import { UserContext } from "../../../../Contexts/user-context";

interface ILoginData {
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
      <input type="email" placeholder="Email" {...register("email")} />
      {errors.email?.message && <p>{errors.email.message}</p>}

      <input type="password" placeholder="Senha" {...register("password")} />
      {errors.password?.message && <p>{errors.password.message}</p>}

      <button type="submit">Entrar</button>
    </StyledForm>
  );
};
