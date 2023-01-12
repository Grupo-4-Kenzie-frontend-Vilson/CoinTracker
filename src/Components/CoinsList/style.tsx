import styled from "styled-components";

export const StyledList = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 48px;
background: #061121;
padding: 12px;
height: 80%;
overflow-y: scroll;
scrollbar-width: none;

&::-webkit-scrollbar{
    display: none;
  }
`