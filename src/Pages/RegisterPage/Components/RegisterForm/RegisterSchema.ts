import * as yup from "yup"

export const RegisterSchema = yup.object().shape({
    email: 
        yup.string()
        .email("Email Inválido")
        .required("Campo Obrigatório"),

    password:
        yup.string()
        .required("Campo Obrigatório"),

    name:
        yup.string()
        .required("Campo Obrigatório"),

    phone:
        yup.string()
        .required("Campo Obrigatório")
})