import styled from "styled-components"

export const StyledMainDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background: #061121;
margin-bottom: 24px;

@media only screen and (max-width: 768px){
    padding: 2px 16px;
}

@media only screen and (min-width: 769px){
    padding: 8px 32px;
}
`

export const DivCenterContent = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 8px;
`

export const StyledH3 = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 54px;
color: #FFFFFF;
`

export const StyledClickable = styled.div`
cursor: pointer;
`