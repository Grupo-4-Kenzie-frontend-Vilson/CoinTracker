import styled from "styled-components";

export const StyledMain = styled.main`
display: flex;
font-family: 'PT Sans';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 52px;
color: #061121;
background: #D9D9D9;

@media only screen and (max-width: 768px){
    flex-direction: column;
}

@media only screen and (min-width: 769px){
    flex-direction: row;
    justify-content: space-between;
}
`

export const StyledSection = styled.section`
background: #061121;
`
