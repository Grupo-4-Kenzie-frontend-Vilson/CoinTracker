import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./styled";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export const Input = ({
  label,
  id,
  register,
  placeholder, error, type
}: iInputProps) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      {error && <p>{error.message}</p>}
    </StyledInput>
  );
}
