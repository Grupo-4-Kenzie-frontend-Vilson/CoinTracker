import styled from "styled-components";

export const StyledMain = styled.main`
    /* background-color: #061121; */
    color: white;

    height: 80vh;
    
    display: flex;
    flex-direction: column;

    & > div {
        max-width: 90%;


        display: flex;
        align-items: center;
        align-self: center;

        gap: 1rem;
        margin-top: 1rem;
    }
`   