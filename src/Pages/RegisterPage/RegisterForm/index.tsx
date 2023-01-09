import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "./Style";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./RegisterSchema";
import { UserContext } from "../../../Contexts/user-context";
import { useContext } from "react";

interface IRegisterData {
  email: string;
  password: string;
  name: string;
  phone: string;
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
      <input type="email" placeholder="Email" {...register("email")} />
      {errors.email?.message && <p>{errors.email.message}</p>}

      <input type="password" placeholder="Senha" {...register("password")} />
      {errors.password?.message && <p>{errors.password.message}</p>}

      <input type="text" placeholder="Nome" {...register("name")} />
      {errors.name?.message && <p>{errors.name.message}</p>}

      <input type="phone" placeholder="Número" {...register("phone")} />
      {errors.phone?.message && <p>{errors.phone.message}</p>}

      <button type="submit">Cadastrar</button>
    </StyledForm>
  );
};
