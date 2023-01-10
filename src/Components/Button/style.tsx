import styled from "styled-components";

export const StyledButton = styled.button`
border: none
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #000000;

@media only screen and (max-width: 768px){
    width: 217px;
    height: 68px;
    background: #D9D9D9;
    border-radius: 15px;
}

@media only screen and (min-width: 769px){
    width: 320px;
    height: 90px;
    background: #D9D9D9;
    border-radius: 12px;
}
`