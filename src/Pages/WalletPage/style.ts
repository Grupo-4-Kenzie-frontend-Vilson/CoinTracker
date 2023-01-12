import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100%;
    margin-bottom: 2rem;

    display: flex;
    justify-content: center;

    .container {
        width: 1080px;
        max-width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .divTitle {
        max-width: 100%;

        display: flex;
        align-items: center;
        align-self: center;

        gap: 1rem;
        margin-top: 1rem;
        margin-left: 1rem;

        color: var(--color-white);
    }

    .container > section {
        width: 90%;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 2rem;
        gap: 2rem;
    }

    .pieChart {
        width: 200px;

        display: flex;
        align-items: center;
    }
    
    .pieChart > img {
        width: 100%;
        background-color: red;
    }
    
    .container > section > ul {
        max-width: 90%;
        max-height: 400px;
        width: 755px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        gap: 1rem;
        margin-top: 3rem;

        overflow: auto;
    }

    @media (min-width: 750px) {

        .divTitle {
            align-self: flex-start;
        }
        
        .container > section {
            flex-direction: row;
            justify-content: space-between;
        }

        .container > section > ul {
            width: 50%;
        }
    }   
`   