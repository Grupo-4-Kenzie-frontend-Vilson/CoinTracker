import styled from "styled-components";

export const StyledMain = styled.main`
    color: var(--color-white);

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

    & > section {
        width: 850px;
        max-width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 2rem;
        gap: 2rem;
    }
    
    & > section > img {
        width: 200px;
        background-color: red;
    }
    
    & > section > ul {
        max-width: 90%;
        width: 755px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        gap: 1rem;
    }

    @media (min-width: 750px) {
        & > div {
            align-self: flex-start;
            margin-left: 4rem;
        }

        & > section {
            flex-direction: row;
            justify-content: space-between;
            align-self: center;
        }

        & > section > ul {
            width: 60%;
        }
    }   
`   