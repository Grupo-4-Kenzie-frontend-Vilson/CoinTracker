import styled from "styled-components"

export const StyledMainHeader = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
background: #D9D9D9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 0px 0px 10px 10px;

@media only screen and (max-width: 768px){
    padding: 10px 16px;
}

@media only screen and (min-width: 769px){
    padding: 20px 52px;
}
`

export const DivCenterContent = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 8px;
`