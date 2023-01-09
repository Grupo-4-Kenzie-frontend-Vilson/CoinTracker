import React from "react"
import { StyledButton } from "./style"

interface IButtonProps {
    children: React.ReactNode
    type: "button" | "submit" | "reset"
    disabled?: boolean
    themeButton?: string 
    onClick?: () => void
}

export const Button = ({ children, type, disabled, themeButton, onClick }:IButtonProps) => {
    return (
        <StyledButton
            type={ type }
            disabled={ disabled }
            className={ themeButton }
            onClick={ onClick }
        >
            { children }
        </StyledButton>
    )
}